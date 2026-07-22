import { profile, mlProjects, productProjects } from "../data/projects";
import Reveal from "../components/Reveal";
import Card from "../components/Card";

export default function Home() {
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
          <a className="nav-cta" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
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
              I create <span className="grad">AI models</span> and build{" "}
              <span className="grad">autonomous agents</span>
              <br /> — and the platforms that ship them.
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

        </div>
      </header>

      {/* ML PROJECTS SHOWCASE */}
      <section className="ml-showcase" id="projects">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">ML Projects</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">Machine Learning <span className="grad">Research & Projects</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              Two projects live on the same soccer dataset: <strong>Soccer Player Salary Predictor</strong> — a
              supervised ML pipeline with SHAP explainability and Optuna tuning — and{" "}
              <strong>TacticalDNA</strong> — unsupervised clustering that matched a blind, made-up stat line to
              prime Messi at 98% similarity. Computer Vision and LLM Engineering coming next.
            </p>
          </Reveal>
          <div className="showcase-grid">
            {mlProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <Card project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PROJECTS SHOWCASE */}
      <section className="ml-showcase" id="products">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">Product Projects</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">Full-Stack <span className="grad">AI Products</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              Three live products, built solo end-to-end: <strong>Palov</strong> (food ordering with a RAG
              menu chatbot), <strong>Hamyon</strong> (finance tracking with AI-generated insights), and{" "}
              <strong>Kotib</strong> (an AI secretary with Graph RAG and persistent memory).
            </p>
          </Reveal>
          <div className="showcase-grid">
            {productProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <Card project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
