import { projects, profile } from "../data/projects";
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
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <span className="nav-cta">GitHub</span>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container">
          <Reveal as="div" className="hero-eyebrow">
            {profile.title} · {profile.setName}
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
              <a className="btn btn-primary" href="/about">About me →</a>
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

      {/* CONTACT / FOOTER */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>Let&apos;s build something autonomous.</h3>
              <p>{profile.name} — {profile.title}. Open to AI Engineer, AI Agent Engineer and Automation roles.</p>
            </div>
            <div className="footer-links">
              <a className="btn btn-ghost" href={profile.links.email}>Email</a>
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
