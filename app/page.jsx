import { profile, llmProjects, mlProjects, productProjects, publications } from "../data/projects";
import Reveal from "../components/Reveal";
import Card from "../components/Card";
import AskAI from "../components/AskAI";
import BrainMap from "../components/BrainMap";
import { buildBrain } from "../lib/brainLayout";

const brain = buildBrain();
import { timeline } from "../data/career";

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
            <a href="#brain">My brain</a>
            <a href="#ask">Ask my AI</a>
            <a href="#experience">Experience</a>
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
          <div className="hero-grid">
          <div className="hero-main">
          <Reveal as="div" className="hero-eyebrow">
            {profile.title} · {profile.setName}
          </Reveal>
          <Reveal delay={60}>
            <h1>
              I build <span className="grad">ML</span>, <span className="grad">deep learning</span>{" "}
              and <span className="grad">LLM systems</span>
              <br /> from data to production.
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
              <a className="btn btn-ghost" href="#ask">Ask my AI</a>
            </div>
          </Reveal>
          </div>
          <Reveal delay={100} className="hero-photo-wrap">
            <img className="hero-photo" src="/davronbek.jpg" alt="Portrait of Davronbek Malikov" width="400" height="400" />
          </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="hero-stats">
              <div className="hero-stat"><div className="num">Ph.D.</div><div className="lbl">AI Convergence Engineering</div></div>
              <div className="hero-stat"><div className="num">5</div><div className="lbl">first-author papers (2 SCIE)</div></div>
              <div className="hero-stat"><div className="num">Team Lead</div><div className="lbl">AI engineering at TripleH</div></div>
              <div className="hero-stat"><div className="num">10+</div><div className="lbl">AI projects shipped</div></div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* BRAIN MAP */}
      <section className="ml-showcase" id="brain">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">Explore my brain</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">A map of <span className="grad">what I know</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              The left hemisphere holds language and LLM systems, the right holds machine learning, research and
              engineering. Every skill links to the projects, papers or work where I used it, so you can check it.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <BrainMap brain={brain} />
          </Reveal>
        </div>
      </section>

      {/* ASK MY AI */}
      <section className="ml-showcase" id="ask">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">Ask my AI</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">Ask my AI <span className="grad">anything about me</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              A small RAG assistant I built for this site: your question is matched against my CV and project data
              with BM25 retrieval, and only the relevant parts are sent to an open-weight LLM (gpt-oss-120b on Groq)
              to write a grounded answer.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <AskAI />
            <p className="ask-note">AI answers can contain mistakes. The CV is the source of truth.</p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="ml-showcase" id="experience">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">Experience</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">Where I&apos;ve <span className="grad">worked and studied</span></h2>
          </Reveal>
          <ol className="timeline">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.role} delay={i * 60} className="tl-item">
                <div className="tl-head">
                  <span className="tl-role">{item.role}</span>
                  <span className="tl-period">{item.period}</span>
                </div>
                <div className="tl-org">{item.org}</div>
                <p className="tl-text">{item.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <a className="btn btn-ghost" href="/about" style={{ marginTop: 8 }}>Full experience on the About page →</a>
          </Reveal>
        </div>
      </section>

      {/* LLM & RAG PROJECTS SHOWCASE */}
      <section className="ml-showcase" id="projects">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">LLM & RAG Projects</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">LLM Systems <span className="grad">Agents, RAG & Post-Training</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              <strong>ERA Academy</strong>: an AI learning platform with one agent engine behind three
              assistants and permission-aware RAG. <strong>TACTIQ</strong>: evidence-first football
              intelligence, phase 1: the indexing pipeline into Qdrant. <strong>Touchline</strong>: a Claude
              scouting agent on LangGraph with cited reports, traced in LangSmith. <strong>TeachHelp</strong>: SFT,
              DPO and RLHF on Qwen2.5, 15/68 → 44/68. <strong>Portiq</strong>: 11 agents over Kafka and A2A with a
              Judge agent.
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
          <Reveal as="div" className="showcase-eyebrow">ML & Deep Learning Projects</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title">Machine Learning <span className="grad">& Deep Learning</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">
              <strong>LLM from Scratch</strong>: a GPT-style Transformer written by hand in PyTorch, with its own
              tokenizer, data pipeline and training loop. <strong>Soccer Player Salary Predictor</strong>: a supervised
              ML pipeline with stacking ensembles, Optuna tuning and SHAP explainability (SCIE 2025).{" "}
              <strong>TacticalDNA</strong>: unsupervised clustering that matched a blind stat line to prime Messi at 98%
              similarity. Computer Vision coming next.
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
              Five first-author papers in SCIE journals, a KSCIE journal and an international conference, on machine
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
              <p>{profile.name}, {profile.title}. Open to LLM, RAG, Agentic AI, ML, Deep Learning and Computer Vision Engineer roles.</p>
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
