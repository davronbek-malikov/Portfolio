"use client";

import { useMemo, useState } from "react";
import Card from "./Card";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "agent", label: "AI Agents" },
  { key: "platform", label: "Platform / Infra" },
  { key: "rnd", label: "R&D" },
  { key: "ml", label: "ML Engineering" },
];

export default function Gallery({ projects }) {
  const [active, setActive] = useState("all");

  // Only show a filter chip if at least one project uses that group (keeps it
  // clean now, and the "ML Engineering" chip appears automatically once you add
  // your first project with group: "ml").
  const available = useMemo(() => {
    const groups = new Set(projects.map((p) => p.group));
    return FILTERS.filter((f) => f.key === "all" || groups.has(f.key));
  }, [projects]);

  const shown = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.group === active)),
    [active, projects]
  );

  return (
    <>
      <div className="filters">
        {available.map((f) => (
          <button
            key={f.key}
            className={`filter ${active === f.key ? "active" : ""}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
            <span style={{ opacity: 0.6, marginLeft: 6 }}>
              {f.key === "all" ? projects.length : projects.filter((p) => p.group === f.key).length}
            </span>
          </button>
        ))}
      </div>
      <div className="card-grid">
        {shown.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
