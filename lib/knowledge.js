// Small retrieval layer for the "Ask my AI" assistant.
// The knowledge base is built from the same data files that render the site,
// split into one chunk per project, job, skill group, etc., and ranked with BM25.

import { profile, llmProjects, mlProjects, productProjects, publications } from "../data/projects";
import { experience, education, skills, facts } from "../data/career";

const STOP = new Set(
  "a an and are as at be by can could did do does for from has have he her his how i in is it its me my of on or our she so that the their them they this to was we what when where which who why will with would you your about tell give show any some".split(" ")
);

function tokenize(text) {
  return (text.toLowerCase().normalize("NFKC").match(/[\p{L}\p{N}+#]+/gu) || []).filter(
    (t) => t.length > 1 && !STOP.has(t)
  );
}

function projectChunk(p, section) {
  const lines = [
    `Project: ${p.title} (${section})`,
    p.cls && `Type: ${p.cls}`,
    p.flavor && `Summary: ${p.flavor}`,
    p.status?.label && `Status: ${p.status.label}`,
    ...(p.abilities || []).map((a) => `- ${a}`),
    p.stack?.length && `Stack: ${p.stack.join(", ")}`,
    p.links?.demo && `Live demo: ${p.links.demo}`,
    p.links?.github && `GitHub: ${p.links.github}`,
  ];
  return lines.filter(Boolean).join("\n");
}

function buildChunks() {
  const chunks = [];
  const add = (id, text, pinned = false) => chunks.push({ id, text, pinned });

  add(
    "profile",
    [
      `Name: ${profile.name}`,
      `Headline: ${profile.title} | ${profile.setName}`,
      `Current role: AI Engineer & Team Lead at TripleH (Dec 2025 to present)`,
      `Summary: ${profile.tagline}`,
      `Location: ${facts.location}`,
      `Visa: ${facts.visa}`,
      `Languages: ${facts.languages}`,
      `Looking for: ${facts.lookingFor}`,
      `Education: ${education.map((e) => `${e.degree}, ${e.school} (${e.period})`).join("; ")}`,
      `Contact: email ${profile.links.email.replace("mailto:", "")}, LinkedIn ${profile.links.linkedin}, GitHub ${profile.links.github}`,
      `CV: https://davronbek-portfolio.vercel.app/cv.pdf`,
      `Note: ${facts.confidentiality}`,
    ].join("\n"),
    true
  );

  const oneLine = (p) => `- ${p.title}: ${p.cls}${p.status?.label ? ` [${p.status.label}]` : ""}`;
  add(
    "overview",
    [
      "Project overview, in the order Davronbek presents them (the first ones in each group are the flagship projects):",
      "LLM & RAG projects (his main focus):",
      ...llmProjects.map(oneLine),
      "ML & deep learning projects:",
      ...mlProjects.map(oneLine),
      "Full-stack AI products:",
      ...productProjects.map(oneLine),
      "Key results: TeachHelp raised Qwen2.5-1.5B from 22% to 65% (15/68 to 44/68) on a held-out bilingual test through post-training; ERA Academy has 206 passing automated tests; the published salary model improved prediction accuracy by 17% (SCIE 2025).",
      `Visa and location: ${facts.visa}; ${facts.location}.`,
    ].join("\n"),
    true
  );

  experience.forEach((e, i) =>
    add(`exp-${i}`, [`Experience: ${e.role}, ${e.org} (${e.period})`, ...e.bullets.map((b) => `- ${b}`)].join("\n"))
  );
  education.forEach((e, i) =>
    add(`edu-${i}`, [`Education: ${e.degree}, ${e.school} (${e.period})`, e.note].filter(Boolean).join("\n"))
  );
  skills.forEach((s, i) => add(`skill-${i}`, `Skills, ${s.group}: ${s.items}`));
  llmProjects.forEach((p) => add(`p-${p.id}`, projectChunk(p, "LLM & RAG project")));
  mlProjects.forEach((p) => add(`p-${p.id}`, projectChunk(p, "ML & deep learning project")));
  productProjects.forEach((p) => add(`p-${p.id}`, projectChunk(p, "full-stack AI product")));
  add(
    "publications",
    [
      "Publications (all first author; 5 papers, 2 of them in SCIE journals):",
      ...publications.map((p) => `- ${p.title}. ${p.venue}, ${p.year}.${p.highlight ? ` ${p.highlight}.` : ""} ${p.link}`),
    ].join("\n")
  );
  return chunks;
}

const CHUNKS = buildChunks();
const DOCS = CHUNKS.map((c) => tokenize(c.text));
const AVG_LEN = DOCS.reduce((n, d) => n + d.length, 0) / DOCS.length;
const DF = new Map();
for (const d of DOCS) for (const t of new Set(d)) DF.set(t, (DF.get(t) || 0) + 1);

function bm25(queryTokens, docIndex, k1 = 1.4, b = 0.75) {
  const doc = DOCS[docIndex];
  const tf = new Map();
  for (const t of doc) tf.set(t, (tf.get(t) || 0) + 1);
  let score = 0;
  for (const q of new Set(queryTokens)) {
    const f = tf.get(q);
    if (!f) continue;
    const df = DF.get(q) || 0;
    const idf = Math.log(1 + (CHUNKS.length - df + 0.5) / (df + 0.5));
    score += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * doc.length) / AVG_LEN)));
  }
  return score;
}

// Default context when the question has no keyword matches (greetings,
// other languages, very general questions).
const FALLBACK = ["exp-0", "skill-0", "skill-1", "skill-5", "p-era-academy", "p-llm-engineering", "publications"];

export function retrieve(query, k = 4) {
  const q = tokenize(query);
  const ranked = CHUNKS.map((c, i) => ({ c, s: bm25(q, i) }))
    .filter((x) => !x.c.pinned && x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
    .map((x) => x.c);
  const picked = ranked.length ? ranked : CHUNKS.filter((c) => FALLBACK.includes(c.id));
  const pinned = CHUNKS.filter((c) => c.pinned);
  return [...pinned, ...picked].map((c) => c.text).join("\n\n---\n\n");
}
