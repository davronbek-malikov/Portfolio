import { profile, llmProjects, mlProjects, productProjects, publications } from "../data/projects";
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
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
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
              I fine-tune <span className="grad">LLMs</span>, build{" "}
              <span className="grad">RAG pipelines</span> and ship{" "}
              <span className="grad">autonomous agents</span>
              <br /> — on a foundation of ML research.
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
              <a className="btn btn-primary" href="#projects">Projects ↓</a>
              <a className="btn btn-ghost" href="#publications">Publications</a>
            </div>
          </Reveal>

        </div>
      </header>

      {/* LLM & RAG PROJECTS SHOWCASE */}
      <section className="ml-showcase" id="projects">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">LLM & RAG Projects</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">LLM Systems <span className="grad">Agents, RAG & Post-Training</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              <strong>Touchline</strong> — an AI scouting copilot: a Claude agent orchestrated with LangGraph
              searches 50,000 players through typed tools, pauses for the scout to approve a shortlist, and
              writes reports where every claim is cited, all traced and evaluated in LangSmith.{" "}
              <strong>TeachHelp</strong> — a full post-training journey on Qwen2.5: SFT, DPO and RLHF with four reward models, all measured on the same held-out test (15/68 → 44/68), deployed as an English–Uzbek teaching assistant.{" "}
              <strong>Portiq</strong> — a multi-agent job hub: a LangGraph orchestrator, 11 agents over Kafka and A2A, and a Judge agent that sends weak work back for a retry.
            </p>
          </Reveal>
          <div className="showcase-grid">
            {llmProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <Card project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ML PROJECTS SHOWCASE */}
      <section className="ml-showcase" id="ml">
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
              prime Messi at 98% similarity. Computer Vision coming next.
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

      {/* PUBLICATIONS */}
      <section className="ml-showcase" id="publications">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">Publications</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">Research <span className="grad">Publications</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              Five first-author papers in SCIE journals, a KSCIE journal and an international conference — machine
              learning for soccer analytics (salaries, performance, injuries) and mathematics for distributed systems.
            </p>
          </Reveal>
          <div className="pub-list">
              {publications.map((p, i) => (
                <Reveal key={i} delay={i * 30} className="pub-item">
                  <span className="pub-num">0{i + 1}</span>
                  <div className="pub-body">
                    <a className="pub-title" href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
                    <div className="pub-meta">
                      <span className="pub-venue">{p.venue} · {p.year}</span>
                      <span className="pub-role">{p.role}</span>
                      {p.highlight && <span className="pub-highlight">{p.highlight}</span>}
                      <a className="pub-link" href={p.link} target="_blank" rel="noreferrer">
                        {p.link.endsWith(".pdf") ? "PDF ↗" : "Read paper ↗"}
                      </a>
                    </div>
                  </div>
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
              <p>{profile.name} — {profile.title}. Open to LLM, RAG, Agentic AI and ML Engineer roles.</p>
            </div>
            <div className="footer-links">
              <a className="btn btn-ghost" href={profile.links.email}>Email</a>
              <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href="#publications">Publications</a>
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
