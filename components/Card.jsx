"use client";

import { useRef } from "react";
import Motif from "./Motif";
import { rarityVars } from "./rarity";

// Short category shown at the top of each card.
const CATEGORY = {
  llm: "LLM system",
  dl: "Deep learning",
  "supervised-ml": "Machine learning",
  "unsupervised-ml": "Machine learning",
  cv: "Computer vision",
  products: "AI product",
};

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return "link"; }
}

export default function Card({ project }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * 9; // tilt up/down
    const ry = (px - 0.5) * 11; // tilt left/right
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateX(0) rotateY(0)";
  }

  return (
    <div className="card-wrap">
      <article
        ref={ref}
        className={`card${project.comingSoon ? " card-soon" : ""}`}
        style={rarityVars(project.rarity)}
        onMouseMove={project.comingSoon ? undefined : onMove}
        onMouseLeave={project.comingSoon ? undefined : onLeave}
      >
        {project.comingSoon && (
          <div className="card-soon-overlay">
            <span className="card-soon-label">Coming Soon</span>
            <span className="card-soon-sub">Repository in progress</span>
          </div>
        )}
        <div className="card-foil" />
        <div className="card-inner">
          <div className="card-top">
            <span className="card-num">{CATEGORY[project.group] || "Project"}</span>
          </div>

          <h3 className="card-title">{project.title}</h3>
          <div className="card-cls">{project.cls}</div>
          <p className="card-flavor">&ldquo;{project.flavor}&rdquo;</p>

          <div className="card-hero">
            <Motif kind={project.motif} />
          </div>

          {project.metrics?.length > 0 && (
            <div className="card-metrics">
              {project.metrics.map((m) => (
                <div className="metric" key={m.label}>
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <ul className="abilities">
            {project.abilities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

          {project.deploy && (
            <div className="card-deploy">
              <span className="deploy-mode">Deployment · {project.deploy.mode}</span>
              <span className="deploy-text">{project.deploy.text}</span>
            </div>
          )}

          <div className="card-foot">
            <div className="chips">
              {project.stack.map((s, i) => (
                <span className="chip" key={i}>{s}</span>
              ))}
            </div>
            <div className="card-status">
              <span className="status-pill">
                <span className={`status-dot ${project.status.state}`} />
                {project.status.label}
              </span>
              <div className="card-links">
                {project.links?.demo && (
                  <a className="card-link solid" href={project.links.demo} target="_blank" rel="noreferrer">{project.links.demoLabel || "Live"} ↗</a>
                )}
                {project.links?.github && (
                  <a className="card-link" href={project.links.github} target="_blank" rel="noreferrer">Code ↗</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
