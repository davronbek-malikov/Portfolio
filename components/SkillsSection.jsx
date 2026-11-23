"use client";

import { useState } from "react";
import BrainMap from "./BrainMap";

// Technical skills shown two ways: a classic grouped list (left) and the
// interactive brain map (right). Clicking a group highlights its brain region.
export default function SkillsSection({ groups, brain }) {
  const [active, setActive] = useState(null);
  const colors = Object.fromEntries(brain.regions.map((r) => [r.id, r.color]));

  const toggleRegion = (id) =>
    setActive((cur) => (cur?.type === "region" && cur.id === id ? null : { type: "region", id }));
  const activeRegion = active?.type === "region" ? active.id : active?.type === "skill" ? brain.nodes.find((n) => n.id === active.id)?.region : null;

  return (
    <div className="sk-layout">
      <div className="sk-list">
        {groups.map((g) => {
          const on = activeRegion === g.region;
          return (
            <div key={g.group} className={`sk-group ${on ? "on" : ""}`} style={{ "--c": colors[g.region] }}>
              <button
                type="button"
                className="sk-head"
                aria-pressed={on}
                onClick={() => toggleRegion(g.region)}
                title="Highlight in the brain map"
              >
                <span className="sk-dot" />
                <span className="sk-name">{g.group}</span>
                <span className="sk-count">{g.items.length}</span>
              </button>
              <ul className="sk-items">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="sk-brain">
        <div className="sk-brain-head">
          <span className="sk-brain-title">Explore my brain</span>
          <span className="sk-brain-sub">Select a skill to see the projects behind it</span>
        </div>
        <BrainMap brain={brain} active={active} onSelect={setActive} />
      </div>
    </div>
  );
}
