"use client";

import { useMemo, useState } from "react";

// Pill size for region names; keep in sync with lib/brainLayout.js.
const HUB_H = 32;
const hubHalfW = (r) => (r.label.length * 9 + 28) / 2;

function askAI(question) {
  document.getElementById("ask")?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.dispatchEvent(new CustomEvent("ask-ai", { detail: question }));
}

function curve(a, b) {
  // Gentle arc between two points, bending toward the centre line of the brain.
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.min(80, Math.abs(a.x - b.x) * 0.18);
  return `M${a.x},${a.y - 9} Q${mx},${my} ${b.x},${b.y - 9}`;
}

// `active` / `onSelect` are optional: pass them to control the selection from a parent.
export default function BrainMap({ brain, initial = null, active: activeProp, onSelect }) {
  const { regions, nodes, synapses, hemispheres, width, height, projectCount, liveCount, paperCount, scieCount } = brain;
  const [inner, setInner] = useState(initial); // { type: "skill" | "region", id }
  const controlled = activeProp !== undefined;
  const active = controlled ? activeProp : inner;
  const setActive = controlled ? onSelect : setInner;
  const [hover, setHover] = useState(null);

  const region = useMemo(() => Object.fromEntries(regions.map((r) => [r.id, r])), [regions]);
  const node = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [nodes]);
  const neighbors = useMemo(() => {
    const m = {};
    for (const s of synapses) {
      (m[s.a] ||= []).push({ id: s.b, shared: s.shared.length });
      (m[s.b] ||= []).push({ id: s.a, shared: s.shared.length });
    }
    for (const k in m) m[k].sort((x, y) => y.shared - x.shared);
    return m;
  }, [synapses]);

  const focusId = hover || (active?.type === "skill" ? active.id : null);
  const focusRegion = active?.type === "region" ? active.id : null;
  const lit = useMemo(() => {
    if (focusId) return new Set([focusId, ...(neighbors[focusId] || []).map((n) => n.id)]);
    if (focusRegion) return new Set(nodes.filter((n) => n.region === focusRegion).map((n) => n.id));
    return null;
  }, [focusId, focusRegion, neighbors, nodes]);

  const visibleSynapses = focusId
    ? synapses.filter((s) => s.a === focusId || s.b === focusId)
    : synapses.filter((s) => s.shared.length > 1);

  const select = (type, id) => setActive((cur) => (cur?.type === type && cur.id === id ? null : { type, id }));
  const keySelect = (type, id) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(type, id);
    }
  };

  const skill = active?.type === "skill" ? node[active.id] : null;
  const activeRegion = active?.type === "region" ? region[active.id] : null;

  return (
    <div className="bm">
      <div className="bm-legend" role="group" aria-label="Brain regions">
        {regions.map((r) => (
          <button
            key={r.id}
            type="button"
            className={`bm-legend-item ${active?.type === "region" && active.id === r.id ? "on" : ""}`}
            style={{ "--c": r.color }}
            onClick={() => select("region", r.id)}
          >
            <span className="bm-dot" />
            {r.label}
          </button>
        ))}
      </div>

      <div className="bm-layout">
        <div className="bm-canvas">
          <svg viewBox={`0 0 ${width} ${height}`} className="bm-svg" role="group" aria-label="Map of skills grouped into brain regions">
            {Object.entries(hemispheres).map(([side, e]) => (
              <ellipse key={side} className="bm-hemi" cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry} />
            ))}
            <text className="bm-side" x={hemispheres.left.cx} y={28} textAnchor="middle">LANGUAGE · LLM SYSTEMS</text>
            <text className="bm-side" x={hemispheres.right.cx} y={28} textAnchor="middle">ML · MLOPS · BACKEND</text>

            {/* dendrites: region hub to its skills */}
            {nodes.map((n) => {
              const r = region[n.region];
              const dim = lit && !lit.has(n.id);
              return (
                <line
                  key={`d-${n.id}`}
                  x1={r.x}
                  y1={r.y}
                  x2={n.x}
                  y2={n.y - 9}
                  stroke={r.color}
                  className={`bm-dendrite ${dim ? "dim" : ""}`}
                />
              );
            })}

            {/* synapses: skills used together in the same project */}
            {visibleSynapses.map((s) => (
              <path
                key={`s-${s.a}-${s.b}`}
                d={curve(node[s.a], node[s.b])}
                className={`bm-synapse ${focusId ? "on" : ""}`}
                stroke={focusId ? region[node[focusId].region].color : undefined}
              />
            ))}

            {/* skills */}
            {nodes.map((n) => {
              const r = region[n.region];
              const dim = lit && !lit.has(n.id);
              const on = active?.type === "skill" && active.id === n.id;
              return (
                <g
                  key={n.id}
                  className={`bm-skill ${dim ? "dim" : ""} ${on ? "on" : ""}`}
                  transform={`translate(${n.x},${n.y})`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${n.name}. ${n.evidence.length} source${n.evidence.length > 1 ? "s" : ""}.`}
                  aria-pressed={on}
                  onClick={() => select("skill", n.id)}
                  onKeyDown={keySelect("skill", n.id)}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(n.id)}
                  onBlur={() => setHover(null)}
                >
                  <rect className="bm-hit" x={-(n.short.length * 4.2 + 8)} y={-21} width={n.short.length * 8.4 + 16} height={42} />
                  <circle cy={-9} r={on ? 8 : 6} fill={on ? r.color : "var(--bg)"} stroke={r.color} strokeWidth={2.5} />
                  <text y={13} textAnchor="middle" className="bm-label">{n.short}</text>
                </g>
              );
            })}

            {/* region hubs */}
            {regions.map((r) => {
              const hw = hubHalfW(r);
              const dim = (focusRegion && focusRegion !== r.id) || (focusId && node[focusId].region !== r.id);
              return (
                <g
                  key={r.id}
                  className={`bm-hub ${dim ? "dim" : ""}`}
                  transform={`translate(${r.x},${r.y})`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${r.label} region`}
                  onClick={() => select("region", r.id)}
                  onKeyDown={keySelect("region", r.id)}
                >
                  <rect x={-hw} y={-HUB_H / 2} width={hw * 2} height={HUB_H} rx={HUB_H / 2} fill={r.color} className="bm-pulse" />
                  <text y={5.5} textAnchor="middle" className="bm-hub-label">{r.label}</text>
                </g>
              );
            })}
          </svg>
          <p className="bm-hint">Swipe sideways to see the whole brain →</p>
        </div>

        <aside className="bm-panel" aria-live="polite">
          {skill ? (
            <>
              <span className="bm-tag" style={{ "--c": region[skill.region].color }}>{region[skill.region].label}</span>
              <h3 className="bm-title">{skill.name}</h3>
              <div className="bm-sub">Where I used it</div>
              <ul className="bm-evidence">
                {skill.evidence.map((e) => (
                  <li key={e.id}>
                    <a href={e.href} {...(e.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                      {e.title} {e.external ? "↗" : "→"}
                    </a>
                    <span>{e.note}{e.status ? ` · ${e.status}` : ""}</span>
                  </li>
                ))}
              </ul>
              {neighbors[skill.id]?.length > 0 && (
                <>
                  <div className="bm-sub">Used together with</div>
                  <div className="bm-chips">
                    {neighbors[skill.id].slice(0, 10).map((nb) => (
                      <button key={nb.id} type="button" className="bm-chip" style={{ "--c": region[node[nb.id].region].color }} onClick={() => select("skill", nb.id)}>
                        {node[nb.id].short}
                      </button>
                    ))}
                  </div>
                </>
              )}
              <button type="button" className="btn btn-primary bm-ask" onClick={() => askAI(`What has Davronbek done with ${skill.name}?`)}>
                Ask my AI about this →
              </button>
            </>
          ) : activeRegion ? (
            <>
              <span className="bm-tag" style={{ "--c": activeRegion.color }}>Region</span>
              <h3 className="bm-title">{activeRegion.label}</h3>
              <div className="bm-sub">{nodes.filter((n) => n.region === activeRegion.id).length} skills, pick one</div>
              <div className="bm-chips">
                {nodes.filter((n) => n.region === activeRegion.id).map((n) => (
                  <button key={n.id} type="button" className="bm-chip" style={{ "--c": activeRegion.color }} onClick={() => select("skill", n.id)}>
                    {n.short}
                  </button>
                ))}
              </div>
              <button type="button" className="btn btn-ghost bm-ask" onClick={() => askAI(`Tell me about Davronbek's ${activeRegion.label} experience.`)}>
                Ask my AI about {activeRegion.label} →
              </button>
            </>
          ) : (
            <>
              <h3 className="bm-title">Select a skill</h3>
              <p className="bm-text">
                Skills are grouped by area. Lines connect skills used together in the same project. Select any skill
                to see the projects and work behind it.
              </p>
              <div className="bm-stats">
                <div><b>{projectCount}</b><span>projects</span></div>
                <div><b>{liveCount}</b><span>live apps</span></div>
                <div><b>{paperCount}</b><span>papers ({scieCount} SCIE)</span></div>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
