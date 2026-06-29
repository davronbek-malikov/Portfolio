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
    period: "Jan 2026 – Present",
    bullets: [
      "Lead the AI engineering team building autonomous agent systems and enterprise AI products.",
      "Architect and ship production-grade AI agents including VIP Agent, Law Agent, Meeting Agent, and Digital Twins.",
      "Drive end-to-end development from research and prototyping to deployment on cloud and on-prem infrastructure.",
    ],
  },
  {
    role: "Independent AI Educator",
    org: "Online & Private Instruction",
    period: "2023 – Present",
    bullets: [
      "Design and deliver advanced courses in AI, ML, Deep Learning, and LLMs.",
      "Mentor students and professionals on building end-to-end AI systems.",
      "Focus on practical applications of AI in industry and academia.",
    ],
  },
  {
    role: "Independent Researcher — Sports Analytics",
    org: "Self-directed Research",
    period: "2025 – Present",
    bullets: [
      "Research on LLMs and Deep Learning applied to soccer analytics.",
      "Models for performance evaluation, salary prediction, and tactical analysis.",
      "Preparing submissions to SCIE and AI-focused journals.",
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

const tools = [
  { cat: "ML / DL", items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"] },
  { cat: "Data & DevOps", items: ["SQL", "GitHub", "Docker"] },
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
  description: "PhD in AI Engineering. ML/DL researcher, AI educator, and AI agent engineer.",
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
                <span className="role-chip">ML / DL Engineer</span>
                <span className="role-chip">AI Researcher</span>
                <span className="role-chip">AI Educator</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="about-location">📍 Jinju, South Korea</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="about-summary">
                Creative and analytical AI researcher and machine learning engineer with a strong background
                in applying advanced mathematical concepts to real-world problems. Experienced in developing
                innovative solutions in sports analytics — especially soccer — combining technical expertise
                with practical insights. Author of 5 first-author publications in SCIE journals and
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

        {/* TOOLS */}
        <section className="about-section about-section-alt">
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
              <p>AI Engineer · AI Agent Engineer · Automation · ML Research</p>
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
