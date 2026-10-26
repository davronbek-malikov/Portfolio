import Reveal from "../../components/Reveal";
import { profile } from "../../data/projects";

const education = [
  {
    degree: "Ph.D. in AI Convergence Engineering",
    school: "Gyeongsang National University, South Korea",
    period: "2020 – 2025",
    note: "Thesis: Advancements in Soccer Analytics — Players' Goals and Salary Prediction Models with Machine Learning",
  },
  {
    degree: "Master of Informatics",
    school: "Gyeongsang National University, South Korea",
    period: "2018 – 2020",
  },
  {
    degree: "Bachelor of Mathematics",
    school: "Fergana State University, Uzbekistan",
    period: "2014 – 2018",
  },
];

const experience = [
  {
    role: "AI Engineer & Team Lead",
    org: "TripleH",
    period: "Dec 2025 – Present",
    bullets: [
      "Lead the AI engineering team building autonomous agent systems and enterprise AI products.",
      "Architect and ship production-grade AI agents including VIP Agent, Law Agent, Meeting Agent, and Digital Twins.",
      "Drive end-to-end development from research and prototyping to deployment on cloud and on-prem infrastructure.",
    ],
  },
  {
    role: "Independent Researcher — Sports Analytics",
    org: "Self-directed Research",
    period: "2025 – 2026",
    bullets: [
      "Research on LLMs and Deep Learning applied to soccer analytics.",
      "Models for performance evaluation, salary prediction, and tactical analysis.",
      "Preparing submissions to SCIE and AI-focused journals.",
    ],
  },
  {
    role: "Independent AI Educator",
    org: "Online & Private Instruction",
    period: "2023 – 2026",
    bullets: [
      "Design and deliver advanced courses in AI, ML, Deep Learning, and LLMs.",
      "Mentor students and professionals on building end-to-end AI systems.",
      "Focus on practical applications of AI in industry and academia.",
    ],
  },
  {
    role: "Graduate Researcher",
    org: "Big Data Systems Software Lab, Gyeongsang National University",
    period: "2022 – 2025",
    bullets: [
      "ML applications in soccer analytics — goals, salaries, and injury prediction.",
      "Published 4 first-author papers in SCIE and international conference proceedings.",
    ],
  },
  {
    role: "Graduate Researcher",
    org: "Distributed Systems Lab, Gyeongsang National University",
    period: "2018 – 2021",
    bullets: [
      "Applied advanced mathematical concepts to distributed systems.",
      "Published on lattice-group structures in Cartesian product spaces.",
    ],
  },
  {
    role: "Mathematics Instructor",
    org: "University Preparation, SAT & International Math Exams · Fergana, Uzbekistan",
    period: "2014 – 2017",
    bullets: [
      "Taught advanced mathematics and analytical reasoning for university entrance exams, the SAT, and other international mathematics exams.",
      "Developed customized teaching materials to strengthen students' problem-solving and logical thinking skills.",
    ],
  },
];

const publications = [
  {
    title: "Predicting Soccer Player Salaries with Both Traditional and Automated Machine Learning Approaches",
    venue: "SCIE Journal · Applied Sciences",
    highlight: "17% increased prediction accuracy",
    role: "First author",
    link: "https://doi.org/10.3390/app15148108",
  },
  {
    title: "Beyond xG: A Dual Prediction Model for Analyzing Player Performance Through Expected and Actual Goals in European Soccer Leagues",
    venue: "SCIE Journal · Applied Sciences",
    highlight: "12% improvement on player performance prediction",
    role: "First author",
    link: "https://doi.org/10.3390/app142210390",
  },
  {
    title: "Comparative Evaluation of Machine Learning Models for Predicting Soccer Injury Types",
    venue: "KSCIE Journal",
    highlight: "Novel injury prediction model using constructed features",
    role: "First author",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003072688",
  },
  {
    title: "The Application of Machine Learning on the Injury Prediction of Soccer Players",
    venue: "ISE@APSEC · CEUR-WS",
    highlight: "Injury prediction without GPS technology",
    role: "First author",
    link: "https://ceur-ws.org/Vol-3362/ISE2022_short02_Malikov_Application.pdf",
  },
  {
    title: "On the construction and properties of lattice-group structure in Cartesian product spaces",
    venue: "Journal of Computer Science",
    highlight: "",
    role: "First author",
    link: "https://thescipub.com/abstract/jcssp.2020.402.421",
  },
];

const selectedProjects = [
  {
    title: "Touchline",
    sub: "AI Scouting Copilot · Agentic RAG · LangGraph · LangSmith · Claude",
    period: "2026",
    demo: null,
    github: "https://github.com/davronbek-malikov/touchline",
    bullets: [
      "A scout describes the player they need in plain words; a Claude agent orchestrated with LangGraph turns the brief into typed tool calls over a DuckDB warehouse of 50,149 players — the model never writes SQL.",
      "Joined Transfermarkt market data with 297 StatsBomb matches (18 per-90 metrics and percentiles for 594 players), linking 87.5% of players across sources.",
      "Human-in-the-loop shortlist approval via LangGraph interrupt() with persisted checkpoints; cited scouting reports built on Qdrant hybrid search over scout notes and Wikipedia.",
      "120-question golden set in LangSmith with automatic checks for filter accuracy, precision/recall@10, numeric grounding and invented players; 102 automated tests.",
    ],
    stack: ["Claude API", "LangGraph", "LangSmith", "Qdrant", "DuckDB", "FastAPI", "Next.js", "Postgres"],
  },
  {
    title: "TeachHelp",
    sub: "Post-Training · SFT · DPO · RLHF (PPO / RLOO) · Uzbek–English teaching assistant",
    period: "2026",
    demo: "https://teach-help.vercel.app",
    github: "https://github.com/davronbek-malikov/Post_Training",
    bullets: [
      "Took a pretrained Qwen2.5 base model through the full post-training pipeline — SFT, DPO, RLHF, deployment — and measured all 14 models on the same 68-question held-out test, working from a written model spec.",
      "SFT took Qwen2.5-1.5B from 15/68 to 44/68 (LoRA vs QLoRA compared under identical settings). DPO implemented from scratch: v1 learned \"shorter is better\" (40/68); v2 fixed it with length-balanced pairs and an SFT loss term (44/68, final model).",
      "Classic RLHF with a reward model and PPO, then RLOO, across four judges (own 0.5B and 1.5B reward models, Skywork-Reward-V2, Gemini as a live judge), with reward-hacking and length-bias checks. RLHF reached 39–41/68: in this setting it was only as good as its judge, and DPO was simpler and better.",
      "Deployed as TeachHelp: a Claude-style chat in English and Uzbek on Vercel, served from a Kaggle GPU over a Cloudflare tunnel (~2–3 s per answer), plus a fully local version with all models.",
    ],
    stack: ["Python", "PyTorch", "Transformers", "PEFT", "LoRA/QLoRA", "DPO", "PPO / RLOO", "Kaggle", "Vercel"],
  },
  {
    title: "Portiq",
    sub: "Multi-Agent Job Hub · LangGraph · Kafka · A2A · pgvector",
    period: "2026",
    demo: "https://portiq-gamma.vercel.app",
    github: null,
    bullets: [
      "A multi-agent job hub for Uzbekistan, Korea and worldwide (including Telegram job channels), in Uzbek, Russian, Korean and English: job matching, skill-gap roadmaps and company-specific mock interviews.",
      "A LangGraph orchestrator plans each conversation and routes tasks to 11 agents over Kafka; agents call each other over A2A (Agent Cards + JSON-RPC). A Judge agent checks every output and sends weak work back for a retry.",
      "Job pipeline from Remotive, Saramin, hh.uz and Telegram: normalisation (so'm / ₩ / $ salary parsing, dedup), a multilingual scam filter, and Postgres + pgvector search with an explainable match score.",
      "Runs with Claude, Gemini or Ollama, with deterministic fallbacks when no key is set; Jaeger traces across agents, unit and end-to-end tests, and evals for scam detection and answer scoring.",
    ],
    stack: ["LangGraph", "Kafka", "A2A", "FastAPI", "Postgres + pgvector", "Redis", "Next.js", "Docker"],
  },
  {
    title: "Soccer Player Salary Predictor",
    sub: "Supervised ML · Regression · Sports Analytics",
    period: "2024 – 2025",
    demo: "https://soccer-xg-salary-prediction.onrender.com",
    github: "https://github.com/davronbek-malikov/soccer-xG-salary_prediction",
    bullets: [
      "Industry-level ML pipeline: Baseline → Improved (RF, XGBoost, LightGBM) → Ensemble (Stacking + Voting).",
      "21 engineered features without data leakage. Optuna Bayesian tuning (60 trials). SHAP global + local explanations.",
      "Deployed on Render · kept alive 24/7 via UptimeRobot. Linked to SCIE publication — 17% accuracy improvement.",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "SHAP", "Optuna", "Gradio", "Render"],
  },
  {
    title: "TacticalDNA",
    sub: "Unsupervised ML · Clustering · Sports Analytics",
    period: "2025 – 2026",
    demo: "https://soccer-player-clustering.onrender.com",
    github: "https://github.com/davronbek-malikov/tactical-dna",
    bullets: [
      "A blind stat line — 25 goals, 15 assists, no name attached — matched to prime Messi's 2019/20 season at 98% similarity.",
      "Algorithm bake-off (KMeans, Agglomerative, DBSCAN, Gaussian Mixture) over 6,314 qualified player-seasons — scored on Silhouette, Davies-Bouldin & Calinski-Harabasz.",
      "Rule-based archetype naming from cluster centroids: Elite Complete Forward, Clinical Poacher, Deep-Lying Playmaker & more.",
      "Cosine-similarity engine + interactive Streamlit demo — classify any real or hypothetical player and find their statistical twins.",
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Render"],
  },
  {
    title: "Palov",
    sub: "Full-Stack · RAG · AI Chatbot",
    period: "2024",
    demo: "https://www.palov.app/",
    github: null,
    bullets: [
      "Halal Uzbek food platform for South Korea with multi-country OTP auth (+82 KR / +998 UZ).",
      "RAG system over menu database — AI chatbot answers dish queries with context-aware recommendations.",
      "Self-improvement loop: user feedback feeds back into the model continuously.",
    ],
    stack: ["Next.js", "RAG", "LLM API", "Vercel"],
  },
  {
    title: "Hamyon",
    sub: "Personal Finance · RAG · AI Insights",
    period: "2024",
    demo: "https://hamyon-six.vercel.app/",
    github: null,
    bullets: [
      "Real-time expense tracking with category-based spending analysis.",
      "RAG-powered AI chatbot over transaction history for natural-language finance queries.",
      "Self-improvement: learns from user corrections to refine categorisation and advice quality.",
    ],
    stack: ["Next.js", "Supabase", "RAG", "LLM API", "Vercel"],
  },
  {
    title: "Kotib",
    sub: "AI Agent · Graph RAG · Conversational Memory",
    period: "2024",
    demo: "https://kotib-rouge.vercel.app/",
    github: null,
    bullets: [
      "AI-powered personal secretary with multi-step agent pipeline: intent → routing → action.",
      "Graph RAG over personal knowledge base. Persistent conversational memory across all sessions.",
      "Self-improvement: tracks completed vs. missed tasks, adjusts proactive suggestions autonomously.",
    ],
    stack: ["Next.js", "Graph RAG", "LLM API", "Vercel"],
  },
];

const tools = [
  { cat: "LLM Post-Training", items: ["SFT", "LoRA / QLoRA", "DPO", "RLHF (PPO / RLOO)", "Reward Modeling", "Hugging Face PEFT", "Instruction Tuning"] },
  { cat: "Model Serving & Inference", items: ["vLLM", "TGI", "Ollama", "llama.cpp", "AWQ / GPTQ / GGUF", "LoRA Hot-Swapping", "Speculative Decoding"] },
  { cat: "RAG & Vector Engineering", items: ["GraphRAG", "Hybrid Search (Dense + BM25)", "Cross-Encoder Reranking", "Hierarchical Chunking", "pgvector", "Qdrant", "Milvus", "LlamaParse", "Unstructured.io"] },
  { cat: "Agentic AI & Orchestration", items: ["LangChain", "LangGraph", "MCP", "Function Calling", "Multi-Agent (Supervisor / Router / Network)", "Plan-and-Execute", "Reflection Loops", "Human-in-the-Loop", "Kafka", "A2A Protocol"] },
  { cat: "Evaluation & Security", items: ["LLM-as-a-Judge", "Ragas", "DeepEval", "LangSmith", "NeMo Guardrails", "Llama Guard", "Prompt Injection Defense", "Semantic Caching", "Token & Cost Tracking"] },
  { cat: "ML / DL", items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy", "Streamlit"] },
  { cat: "Deployment & DevOps", items: ["Docker", "Vercel", "Render", "UptimeRobot", "GitHub Actions", "GitHub"] },
  { cat: "Computer Vision", items: ["YOLO", "Roboflow", "OpenCV"] },
  { cat: "Web & Viz", items: ["HTML", "CSS", "JavaScript"] },
  { cat: "Research", items: ["Overleaf", "LaTeX"] },
];

const languages = [
  { lang: "English", level: "Fluent", pct: 90 },
  { lang: "Uzbek", level: "Native", pct: 100 },
  { lang: "Turkish", level: "Advanced", pct: 80 },
  { lang: "Russian", level: "Intermediate", pct: 60 },
  { lang: "Korean", level: "Conversational", pct: 40 },
];

export const metadata = {
  title: "About — Davronbek Malikov",
  description: "PhD in AI Engineering. LLM Engineer, RAG Engineer, Agentic AI Engineer, and ML Engineer.",
};

export default function About() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/">
            <span className="dot" />
            {profile.name}
          </a>
          <div className="nav-links">
            <a href="/#contact">Contact</a>
          </div>
          <a className="nav-cta" href="/">← Back</a>
        </div>
      </nav>

      <main>
        {/* ABOUT HERO */}
        <section className="about-hero">
          <div className="container">
            <Reveal as="div" className="hero-eyebrow">About me</Reveal>
            <Reveal delay={40}>
              <h1 className="about-name">{profile.name}</h1>
            </Reveal>
            <Reveal delay={80}>
              <div className="about-titles">
                <span className="role-chip">PhD in AI Engineering</span>
                <span className="role-chip">LLM Engineer</span>
                <span className="role-chip">RAG Engineer</span>
                <span className="role-chip">Agentic AI Engineer</span>
                <span className="role-chip">ML Engineer</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="about-location">📍 Seoul, South Korea</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="about-summary">
                LLM Engineer, RAG Engineer, Agentic AI Engineer, and ML Engineer with a PhD in AI
                Engineering. I build LLM systems end to end: fine-tuning (LoRA/QLoRA, DPO) and
                inference serving, RAG and GraphRAG pipelines with hybrid search and reranking, and
                multi-agent systems with evaluation and guardrails built in. Currently leading the AI
                team at TripleH — shipping agents for legal intelligence, financial analysis, meeting
                automation, and enterprise digital twins. Grounded in advanced mathematics and
                machine learning research, with 5 first-author publications in SCIE journals and
                international conferences.
              </p>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Experience</Reveal>
            <div className="timeline">
              {experience.map((e, i) => (
                <Reveal key={i} delay={i * 40} className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-head">
                      <span className="tl-role">{e.role}</span>
                      <span className="tl-period">{e.period}</span>
                    </div>
                    <div className="tl-org">{e.org}</div>
                    <ul className="tl-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="about-section about-section-alt">
          <div className="container">
            <Reveal as="div" className="about-section-label">Education</Reveal>
            <div className="timeline">
              {education.map((e, i) => (
                <Reveal key={i} delay={i * 40} className="tl-item">
                  <div className="tl-dot tl-dot-edu" />
                  <div className="tl-body">
                    <div className="tl-head">
                      <span className="tl-role">{e.degree}</span>
                      <span className="tl-period">{e.period}</span>
                    </div>
                    <div className="tl-org">{e.school}</div>
                    {e.note && <p className="tl-note">{e.note}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Publications</Reveal>
            <div className="pub-list">
              {publications.map((p, i) => (
                <Reveal key={i} delay={i * 30} className="pub-item">
                  <span className="pub-num">0{i + 1}</span>
                  <div className="pub-body">
                    <p className="pub-title">{p.title}</p>
                    <div className="pub-meta">
                      <span className="pub-venue">{p.venue}</span>
                      <span className="pub-role">{p.role}</span>
                      {p.highlight && <span className="pub-highlight">{p.highlight}</span>}
                      <a className="pub-link" href={p.link} target="_blank" rel="noreferrer">
                        {p.link.endsWith(".pdf") ? "PDF ↗" : "DOI ↗"}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="about-section about-section-alt">
          <div className="container">
            <Reveal as="div" className="about-section-label">Selected Projects</Reveal>
            <div className="timeline">
              {selectedProjects.map((p, i) => (
                <Reveal key={i} delay={i * 40} className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-head">
                      <span className="tl-role">{p.title}</span>
                      <span className="tl-period">{p.period}</span>
                    </div>
                    <div className="tl-org">{p.sub}</div>
                    <ul className="tl-bullets">
                      {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    <div className="tl-stack">
                      {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
                    </div>
                    <div className="tl-links">
                      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="tl-link">Live Demo ↗</a>}
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="tl-link">GitHub ↗</a>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Tools & Frameworks</Reveal>
            <div className="tools-grid">
              {tools.map((t, i) => (
                <Reveal key={i} delay={i * 30} className="tool-group">
                  <div className="tool-cat">{t.cat}</div>
                  <div className="tool-chips">
                    {t.items.map((item) => (
                      <span className="chip" key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">Languages</Reveal>
            <div className="lang-list">
              {languages.map((l, i) => (
                <Reveal key={i} delay={i * 30} className="lang-row">
                  <span className="lang-name">{l.lang}</span>
                  <span className="meter lang-meter"><span style={{ width: `${l.pct}%` }} /></span>
                  <span className="lang-level">{l.level}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-section about-section-alt">
          <div className="container about-cta">
            <Reveal>
              <h2>Open to new opportunities</h2>
              <p>LLM Engineer · RAG Engineer · Agentic AI Engineer · ML Engineer</p>
              <div className="hero-actions" style={{ marginTop: 24 }}>
                <a className="btn btn-primary" href={profile.links.email}>Get in touch</a>
                <a className="btn btn-ghost" href={profile.links.cv} target="_blank" rel="noreferrer">Download CV</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-note">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js · deployed on Vercel.
          </div>
        </div>
      </footer>
    </>
  );
}
