import { projects, profile } from "../data/projects";
import CardGate from "../components/CardGate";
import EcosystemMap from "../components/EcosystemMap";
import Reveal from "../components/Reveal";

export default function Home() {
  const liveCount = projects.filter((p) => p.status.state === "live").length;
  const mythicLegendary = projects.filter((p) => ["mythic", "legendary"].includes(p.rarity)).length;

  const heroStats = [
    { num: projects.length, lbl: "Projects shipped" },
    { num: liveCount, lbl: "Live in production" },
    { num: mythicLegendary, lbl: "Legendary+ cards" },
    { num: "1", lbl: "Connected ecosystem" },
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="dot" />
            {profile.name}
          </div>
          <div className="nav-links">
            <a href="#cards">Projects</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container">
          <Reveal as="div" className="hero-eyebrow">
            {profile.title} · The “{profile.setName}” set
          </Reveal>
          <Reveal delay={60}>
            <h1>
              I build <span className="grad">autonomous AI agents</span>
              <br /> and the platform that ships them.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="hero-roles">
              {profile.roles.map((r) => (
                <span className="role-chip" key={r}>{r}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-tag">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#cards">Explore the card set →</a>
              <a className="btn btn-ghost" href={profile.links.cv} target="_blank" rel="noreferrer">Download CV</a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-stats">
              {heroStats.map((s) => (
                <div className="hero-stat" key={s.lbl}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* CARDS */}
      <section className="section" id="cards">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="section-kicker">Agent Constellation · {projects.length} cards · 1 ecosystem</div>
            <h2>Project trading cards</h2>
            <p>
              Every card is scored on the same five axes (0–100): Power, Scale, Autonomy,
              AI Intelligence and Polish. Hover a card to tilt it. Filter by type — the
              ML Engineering tab appears automatically as I add those projects.
            </p>
          </Reveal>
          <CardGate projects={projects} />
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section" id="ecosystem">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="section-kicker">The set-back card</div>
            <h2>One system, not eight projects</h2>
            <p>
              The cards connect into a single architecture: a command hub, a reusable
              module that plugs into every station, and an enterprise rail that turns any
              of them into a self-hosted product.
            </p>
          </Reveal>
          <Reveal><EcosystemMap /></Reveal>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>Let’s build something autonomous.</h3>
              <p>{profile.name} — {profile.title}. Open to AI Engineer, AI Agent Engineer and Automation roles.</p>
            </div>
            <div className="footer-links">
              <a className="btn btn-ghost" href={profile.links.email}>Email</a>
              <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-primary" href={profile.links.cv} target="_blank" rel="noreferrer">Download CV</a>
            </div>
          </div>
          <div className="footer-note">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js · deployed on Vercel.
          </div>
        </div>
      </footer>
    </>
  );
}
