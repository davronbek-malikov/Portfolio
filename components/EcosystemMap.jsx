import { ecosystem } from "../data/projects";

export default function EcosystemMap() {
  const e = ecosystem;
  return (
    <div className="eco">
      <div className="eco-center" style={{ maxWidth: 360 }}>
        <div className="eco-node eco-hub">
          <div className="en-label">{e.hub.label}</div>
          <div className="en-sub">{e.hub.sub}</div>
        </div>
      </div>
      <div className="eco-connector">│ ask_agent ↓</div>

      <div className="eco-row eco-spokes">
        {e.spokes.map((s) => (
          <div className="eco-node" key={s.label}>
            <div className="en-label">{s.label}</div>
            {s.sub && <div className="en-sub">{s.sub}</div>}
          </div>
        ))}
      </div>

      <div className="eco-connector">every agent embeds ↓</div>

      <div className="eco-center">
        <div className="eco-node eco-module">
          <div className="en-label">{e.module.label}</div>
          <div className="en-sub">{e.module.sub}</div>
        </div>
      </div>

      <div className="eco-row eco-rails">
        {e.rails.map((r) => (
          <div className="eco-node" key={r.label}>
            <div className="en-label">{r.label}</div>
            <div className="en-sub">{r.sub}</div>
          </div>
        ))}
      </div>

      <div className="eco-connector">└──── wrapped by ────┘</div>

      <div className="eco-ent eco-node">
        <div className="en-label">{e.enterprise.label}</div>
        <div className="en-sub">{e.enterprise.sub}</div>
      </div>

      <div className="eco-story">
        {e.story.map((line, i) => {
          const [head, ...rest] = line.split(" — ");
          return (
            <div className="eco-story-item" key={i}>
              <span className="si-num">{String(i + 1).padStart(2, "0")}</span>
              <p><b>{head}</b> — {rest.join(" — ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
