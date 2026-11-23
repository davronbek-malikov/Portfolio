// Computes the "brain map" once on the server: skill positions around their
// region hub (d3-force with collision), synapses between skills used together
// in the same project, and the evidence behind every skill.

import { forceSimulation, forceCollide, forceManyBody, forceX, forceY } from "d3-force";
import { regions, skills, sources } from "../data/brain.js";
import { llmProjects, mlProjects, productProjects } from "../data/projects.js";

export const BRAIN_W = 1000;
export const BRAIN_H = 640;

// Hemisphere outlines (ellipses); skills are kept inside their own hemisphere.
export const HEMISPHERES = {
  left: { cx: 300, cy: 322, rx: 262, ry: 290 },
  right: { cx: 700, cy: 322, rx: 262, ry: 290 },
};

const PROJECTS = Object.fromEntries(
  [
    ...llmProjects.map((p) => [p, "#projects"]),
    ...mlProjects.map((p) => [p, "#ml"]),
    ...productProjects.map((p) => [p, "#products"]),
  ].map(([p, section]) => [p.id, { p, section }])
);
const SPECIAL = new Set(Object.keys(sources));

function evidenceFor(id) {
  if (SPECIAL.has(id)) {
    const s = sources[id];
    return { id, kind: "source", title: s.title, note: s.note, href: s.href };
  }
  const entry = PROJECTS[id];
  if (!entry) throw new Error(`data/brain.js references unknown project id "${id}"`);
  const { p, section } = entry;
  return {
    id,
    kind: "project",
    title: p.title,
    note: p.cls,
    status: p.status?.label || "",
    href: p.links?.demo || p.links?.github || section,
    external: Boolean(p.links?.demo || p.links?.github),
  };
}

// Region names are drawn as pills centred on the hub point.
export const HUB_H = 32;
export const hubHalfW = (r) => (r.label.length * 9 + 28) / 2;

function clampToEllipse(n, e, margin) {
  const rx = e.rx - margin;
  const ry = e.ry - margin;
  const dx = n.x - e.cx;
  const dy = n.y - e.cy;
  const k = (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry);
  if (k > 1) {
    const s = 1 / Math.sqrt(k);
    n.x = e.cx + dx * s;
    n.y = e.cy + dy * s;
  }
}

export function buildBrain() {
  const hubs = Object.fromEntries(regions.map((r) => [r.id, r]));

  const skillNodes = skills.map((s) => {
    const r = hubs[s.region];
    const siblings = skills.filter((k) => k.region === s.region);
    const i = siblings.indexOf(s);
    // Fan skills outward, away from the centre of the brain, over a 260 degree arc.
    const out = Math.atan2(r.y - 322, r.x - 500);
    const spread = (260 * Math.PI) / 180;
    const angle = out - spread / 2 + (spread * (i + 0.5)) / siblings.length;
    return {
      id: s.id,
      hubX: r.x,
      hubY: r.y,
      x: r.x + Math.cos(angle) * 100,
      y: r.y + Math.sin(angle) * 82,
      radius: Math.max(30, s.short.length * 4 + 10),
      halfW: (s.short.length * 8.4 + 14) / 2, // label box half-width (dot above, label below)
      side: r.side,
    };
  });

  // Labels are wide and short, so circles alone let them overlap: push apart
  // any two label boxes that intersect, along the axis with the smaller overlap.
  const LABEL_H = 38;
  const separateLabels = () => {
    for (let a = 0; a < skillNodes.length; a++) {
      for (let b = a + 1; b < skillNodes.length; b++) {
        const A = skillNodes[a];
        const B = skillNodes[b];
        const ox = A.halfW + B.halfW - Math.abs(A.x - B.x);
        const oy = LABEL_H - Math.abs(A.y - B.y);
        if (ox <= 0 || oy <= 0) continue;
        if (oy < ox) {
          const s = (A.y <= B.y ? -1 : 1) * (oy / 2 + 0.5);
          A.y += s;
          B.y -= s;
        } else {
          const s = (A.x <= B.x ? -1 : 1) * (ox / 2 + 0.5);
          A.x += s;
          B.x -= s;
        }
      }
      // Region name pills are fixed: only the skill moves away from them.
      const A = skillNodes[a];
      for (const r of regions) {
        const ox = A.halfW + hubHalfW(r) - Math.abs(A.x - r.x);
        const oy = (LABEL_H + HUB_H) / 2 + 4 - Math.abs(A.y - r.y);
        if (ox <= 0 || oy <= 0) continue;
        if (oy < ox) A.y += (A.y <= r.y ? -1 : 1) * (oy + 0.5);
        else A.x += (A.x <= r.x ? -1 : 1) * (ox + 0.5);
      }
    }
  };
  const hubNodes = regions.map((r) => ({ id: `hub-${r.id}`, x: r.x, y: r.y, fx: r.x, fy: r.y, radius: 56 }));

  const sim = forceSimulation([...hubNodes, ...skillNodes])
    .force("x", forceX((d) => d.hubX ?? d.x).strength(0.1))
    .force("y", forceY((d) => d.hubY ?? d.y).strength(0.1))
    .force("charge", forceManyBody().strength(-25))
    .force("collide", forceCollide((d) => d.radius).iterations(3))
    .stop();

  for (let i = 0; i < 500; i++) {
    sim.tick();
    if (i > 250) separateLabels();
    for (const n of skillNodes) clampToEllipse(n, HEMISPHERES[n.side], 26);
  }
  // Final passes without the simulation pulling nodes back together.
  for (let i = 0; i < 60; i++) {
    separateLabels();
    for (const n of skillNodes) clampToEllipse(n, HEMISPHERES[n.side], 18);
  }

  const pos = Object.fromEntries(skillNodes.map((n) => [n.id, { x: Math.round(n.x), y: Math.round(n.y) }]));

  // Synapses: two skills from different regions that share a real project.
  const synapses = [];
  for (let i = 0; i < skills.length; i++) {
    for (let j = i + 1; j < skills.length; j++) {
      const a = skills[i];
      const b = skills[j];
      if (a.region === b.region) continue;
      const shared = a.uses.filter((u) => !SPECIAL.has(u) && b.uses.includes(u));
      if (shared.length) synapses.push({ a: a.id, b: b.id, shared });
    }
  }

  const nodes = skills.map((s) => ({
    id: s.id,
    region: s.region,
    short: s.short,
    name: s.name,
    ...pos[s.id],
    evidence: s.uses.map(evidenceFor),
  }));

  const projectCount = new Set(skills.flatMap((s) => s.uses.filter((u) => !SPECIAL.has(u)))).size;

  return { regions, nodes, synapses, hemispheres: HEMISPHERES, width: BRAIN_W, height: BRAIN_H, projectCount };
}
