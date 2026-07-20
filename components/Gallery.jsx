"use client";

import { useMemo, useState } from "react";
import Card from "./Card";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "agent", label: "AI Agents" },
  { key: "platform", label: "Platform / Infra" },
  { key: "rnd", label: "R&D" },
  { key: "supervised-ml", label: "Supervised ML", alwaysShow: true, comingSoon: true },
  { key: "unsupervised-ml", label: "Unsupervised ML", alwaysShow: true, comingSoon: true },
  { key: "cv", label: "Computer Vision", alwaysShow: true, comingSoon: true },
  { key: "llm", label: "LLM Engineering", alwaysShow: true, comingSoon: true },
];

export default function Gallery({ projects }) {
  const [active, setActive] = useState("all");

  const available = useMemo(() => {
    const groups = new Set(projects.map((p) => p.group));
    return FILTERS.filter((f) => f.key === "all" || groups.has(f.key) || f.alwaysShow);
  }, [projects]);

  const shown = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.group === active)),
    [active, projects]
  );

  return (
    <>
      <div className="filters">
        {available.map((f) => {
          const count = f.key === "all" ? projects.length : projects.filter((p) => p.group === f.key).length;
          const isEmpty = count === 0;
          return (
            <button
              key={f.key}
              className={`filter ${active === f.key ? "active" : ""} ${isEmpty ? "filter-soon" : ""}`}
              onClick={() => !isEmpty && setActive(f.key)}
              style={isEmpty ? { cursor: "default" } : {}}
            >
              {f.label}
              {isEmpty ? (
                <span className="soon-badge">soon</span>
              ) : (
                <span style={{ opacity: 0.6, marginLeft: 6 }}>{count}</span>
              )}
            </button>
          );
        })}
      </div>
      <div className="card-grid">
        {shown.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
