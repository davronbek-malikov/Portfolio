import Reveal from "../../components/Reveal";
import { profile, publications, llmProjects, mlProjects, productProjects } from "../../data/projects";
import { education, experience, technicalSkills } from "../../data/career";

// Projects come from the same data as the homepage cards, so the two pages never drift apart.
const featured = [...llmProjects, ...mlProjects, ...productProjects].filter((p) => !p.comingSoon);

const tools = technicalSkills.map((g) => ({ cat: g.group, items: g.items }));

const languages = [
  { lang: "English", level: "Fluent", pct: 90 },
  { lang: "Uzbek", level: "Native", pct: 100 },
  { lang: "Turkish", level: "Advanced", pct: 80 },
  { lang: "Russian", level: "Intermediate", pct: 60 },
  { lang: "Korean", level: "Conversational", pct: 40 },
];

export const metadata = {
  title: "About | Davronbek Malikov",
  description: "ML / LLM & RAG Engineer | Ph.D. in AI Convergence Engineering.",
};

export default function About() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/">
            <span className="dot" />
            {profile.name}
          </a>
          <div className="nav-links">
            <a href="/#contact">Contact</a>
          </div>
          <a className="nav-cta" href="/">← Back</a>
        </div>
      </nav>

      <main>
        {/* ABOUT HERO */}
        <section className="about-hero">
          <div className="container">
            <Reveal as="div" className="hero-eyebrow">About me</Reveal>
            <Reveal delay={40}>
              <h1 className="about-name">{profile.name}</h1>
            </Reveal>
            <Reveal delay={80}>
              <div className="about-titles">
                <span className="role-chip">ML / LLM & RAG Engineer</span>
                <span className="role-chip">Ph.D. in AI Convergence Engineering</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="about-location">📍 Seoul, South Korea · E-7-1 work visa · in Korea since 2018</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="about-summary">
                Ph.D. in AI Convergence Engineering and AI Engineer &amp; Team Lead at TripleH, leading the
                design and development of on-premise multi-agent AI systems for enterprise clients: system
                architecture, LLM orchestration, RAG pipelines, agent workflows, and observability with
                LangGraph, LangSmith and Arize Phoenix.
              </p>
              <p className="about-summary">
                On the LLM side I post-train models with SFT, LoRA, QLoRA, DPO and RLHF on limited GPU,
                improving a Qwen2.5-1.5B model&apos;s accuracy on a held-out bilingual (Uzbek/English) teaching
                test from 22% to 65%. I optimize inference with 4-bit quantization (GGUF, AWQ, GPTQ) so models
                run on small on-premise servers, and build enterprise knowledge systems with hybrid RAG and
                GraphRAG.
              </p>
              <p className="about-summary">
                On the ML side I build end-to-end prediction models: feature engineering, leakage-safe
                validation, XGBoost, LightGBM, stacking ensembles, Optuna tuning and SHAP explainability.
                Author of 5 first-author papers, including 2 in SCIE journals, with published models improving
                prediction accuracy by up to 17% and deployed as live apps.
              </p>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Experience</Reveal>
            <div className="timeline">
              {experience.map((e, i) => (
                <Reveal key={i} delay={i * 40} className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-head">
                      <span className="tl-role">{e.role}</span>
                      <span className="tl-period">{e.period}</span>
                    </div>
                    <div className="tl-org">{e.org}</div>
                    <ul className="tl-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="about-section about-section-alt">
          <div className="container">
            <Reveal as="div" className="about-section-label">Education</Reveal>
            <div className="timeline">
              {education.map((e, i) => (
                <Reveal key={i} delay={i * 40} className="tl-item">
                  <div className="tl-dot tl-dot-edu" />
                  <div className="tl-body">
                    <div className="tl-head">
                      <span className="tl-role">{e.degree}</span>
                      <span className="tl-period">{e.period}</span>
                    </div>
                    <div className="tl-org">{e.school}</div>
                    {e.note && <p className="tl-note">{e.note}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Publications</Reveal>
            <div className="pub-list">
              {publications.map((p, i) => (
                <Reveal key={i} delay={i * 30} className="pub-item">
                  <span className="pub-num">0{i + 1}</span>
                  <div className="pub-body">
                    <a className="pub-title" href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
                    <div className="pub-meta">
                      <span className="pub-venue">{p.venue} · {p.year}</span>
                      <span className="pub-role">{p.role}</span>
                      {p.highlight && <span className="pub-highlight">{p.highlight}</span>}
                      <a className="pub-link" href={p.link} target="_blank" rel="noreferrer">
                        {p.link.endsWith(".pdf") ? "PDF ↗" : "Read paper ↗"}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="about-section about-section-alt">
          <div className="container">
            <Reveal as="div" className="about-section-label">Selected Projects</Reveal>
            <div className="ap-list">
              {featured.map((p, i) => (
                <Reveal key={p.id} delay={i * 30} className="ap-item">
                  <div className="ap-head">
                    <span className="ap-title">{p.title}</span>
                    <span className="ap-status">{p.status?.label}</span>
                  </div>
                  <div className="ap-cls">{p.cls}</div>
                  <p className="ap-summary">{p.abilities[0]}</p>
                  {p.deploy && (
                    <p className="ap-deploy"><b>{p.deploy.mode}:</b> {p.deploy.text}</p>
                  )}
                  <div className="ap-links">
                    {p.links?.demo && <a href={p.links.demo} target="_blank" rel="noreferrer">Live ↗</a>}
                    {p.links?.github && <a href={p.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  </div>
                </Reveal>
              ))}
            </div>
            <a className="btn btn-ghost ap-more" href="/#projects">See the full project cards →</a>
          </div>
        </section>

        {/* TOOLS */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Tools & Frameworks</Reveal>
            <div className="tools-grid">
              {tools.map((t, i) => (
                <Reveal key={i} delay={i * 30} className="tool-group">
                  <div className="tool-cat">{t.cat}</div>
                  <div className="tool-chips">
                    {t.items.map((item) => (
                      <span className="chip" key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Languages</Reveal>
            <div className="lang-list">
              {languages.map((l, i) => (
                <Reveal key={i} delay={i * 30} className="lang-row">
                  <span className="lang-name">{l.lang}</span>
                  <span className="meter lang-meter"><span style={{ width: `${l.pct}%` }} /></span>
                  <span className="lang-level">{l.level}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-section about-section-alt">
          <div className="container about-cta">
            <Reveal>
              <h2>Open to new opportunities</h2>
              <p>ML / LLM & RAG Engineer | Ph.D.</p>
              <div className="hero-actions" style={{ marginTop: 24 }}>
                <a className="btn btn-primary" href={profile.links.email}>Get in touch</a>
                <a className="btn btn-ghost" href={profile.links.cv} target="_blank" rel="noreferrer">Download CV</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-note">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js · deployed on Vercel.
          </div>
        </div>
      </footer>
    </>
  );
}
