import { profile, llmProjects, mlProjects, productProjects, publications } from "../data/projects";
import { timeline, technicalSkills } from "../data/career";
import { ui, prefix, heroTitle, taglineKo, timelineKo } from "../data/i18n";
import Reveal from "./Reveal";
import Card from "./Card";
import AskAI from "./AskAI";
import SkillsSection from "./SkillsSection";
import LangSwitch from "./LangSwitch";
import { buildBrain } from "../lib/brainLayout";

const brain = buildBrain();

// Project names are shown in bold inside the section intros.
const PROJECT_NAMES = [...llmProjects, ...mlProjects, ...productProjects]
  .map((p) => p.title)
  .concat(["Soccer Salary Predictor"])
  .sort((a, b) => b.length - a.length);
const NAME_RE = new RegExp(`(${PROJECT_NAMES.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

function withNames(text) {
  return text.split(NAME_RE).map((part, i) => (PROJECT_NAMES.includes(part) ? <strong key={i}>{part}</strong> : part));
}

function Title({ parts }) {
  return (
    <>
      {parts[0]}
      <span className="grad">{parts[1]}</span>
    </>
  );
}

function Showcase({ id, text, projects, lang, note }) {
  return (
    <section className="ml-showcase" id={id}>
      <div className="container">
        <Reveal as="div" className="showcase-eyebrow">{text.eyebrow}</Reveal>
        <Reveal delay={40}>
          <h2 className="showcase-title"><Title parts={text.title} /></h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="showcase-sub">{withNames(text.sub)}</p>
          {note && <p className="cards-note">{note}</p>}
        </Reveal>
        <div className="showcase-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <Card project={p} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ lang = "en" }) {
  const t = ui[lang];
  const base = prefix(lang);
  const otherHref = lang === "en" ? "/ko" : "/";
  const h = heroTitle[lang].parts;
  const tagline = lang === "ko" ? taglineKo : profile.tagline;
  const items = lang === "ko" ? timelineKo : timeline;

  return (
    <div className={`lang-${lang}`}>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="dot" />
            {profile.name}
          </div>
          <div className="nav-links">
            <a href={`${base}/about`}>{t.nav.about}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#ask">{t.nav.ask}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#publications">{t.nav.publications}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="nav-right">
            <LangSwitch lang={lang} href={otherHref} label={t.switchTo.label} title={t.switchTo.title} />
            <a className="nav-cta" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
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
                <h1 lang={lang}>
                  {h[0]}<span className="grad">{h[1]}</span>{h[2]}<span className="grad">{h[3]}</span>{h[4]}
                  <span className="grad">{h[5]}</span>{h[6]}
                  <br />{h[7]}
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <div className="hero-roles">
                  {t.roles.map((r) => (
                    <span className="role-chip" key={r}>{r}</span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={140}>
                <p className="hero-meta">{t.heroMeta}</p>
              </Reveal>
              <Reveal delay={160}>
                <p className="hero-tag">{tagline}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="hero-actions">
                  <a className="btn btn-primary" href={`${base}/about`}>{t.btn.about}</a>
                  <a className="btn btn-ghost" href={profile.links.cv} target="_blank" rel="noreferrer">{t.btn.cv}</a>
                  <a className="btn btn-primary" href="#projects">{t.btn.projects}</a>
                  <a className="btn btn-ghost" href="#ask">{t.btn.ask}</a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100} className="hero-photo-wrap">
              <img className="hero-photo" src="/davronbek.jpg" alt="Davronbek Malikov" width="400" height="400" />
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="hero-stats">
              <div className="hero-stat"><div className="num">Ph.D.</div><div className="lbl">{t.stats.phd}</div></div>
              <div className="hero-stat"><div className="num">5</div><div className="lbl">{t.stats.papers}</div></div>
              <div className="hero-stat"><div className="num">Team Lead</div><div className="lbl">{t.stats.lead}</div></div>
              <div className="hero-stat">
                <div className="num">{brain.projectCount}</div>
                <div className="lbl">{t.stats.projects(brain.projectCount, brain.liveCount)}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* TECHNICAL SKILLS: classic list + brain map */}
      <section className="ml-showcase" id="skills">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">{t.skills.eyebrow}</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title"><Title parts={t.skills.title} /></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">{t.skills.sub}</p>
          </Reveal>
        </div>
        <div className="container container-wide">
          <Reveal delay={120}>
            <SkillsSection groups={technicalSkills} brain={brain} lang={lang} />
          </Reveal>
        </div>
      </section>

      {/* ASK MY AI */}
      <section className="ml-showcase" id="ask">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">{t.ask.eyebrow}</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title"><Title parts={t.ask.title} /></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">{t.ask.sub}</p>
          </Reveal>
          <Reveal delay={120}>
            <AskAI lang={lang} />
            <p className="ask-note">{t.ask.note}</p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="ml-showcase" id="experience">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">{t.exp.eyebrow}</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title"><Title parts={t.exp.title} /></h2>
          </Reveal>
          <ol className="timeline home-tl">
            {items.map((item, i) => (
              <Reveal as="li" key={item.role + item.period} delay={i * 60} className="tl-item">
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
            <a className="btn btn-ghost" href={`${base}/about`} style={{ marginTop: 8 }}>{t.exp.more}</a>
          </Reveal>
        </div>
      </section>

      <Showcase id="projects" text={t.llm} projects={llmProjects} lang={lang} note={t.cardsNote} />
      <Showcase id="ml" text={t.ml} projects={mlProjects} lang={lang} />
      <Showcase id="products" text={t.products} projects={productProjects} lang={lang} />

      {/* PUBLICATIONS */}
      <section className="ml-showcase" id="publications">
        <div className="container">
          <Reveal as="div" className="showcase-eyebrow">{t.pubs.eyebrow}</Reveal>
          <Reveal delay={40}>
            <h2 className="showcase-title"><Title parts={t.pubs.title} /></h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="showcase-sub">{t.pubs.sub}</p>
          </Reveal>
          <div className="pub-list">
            {publications.map((p, i) => (
              <Reveal key={i} delay={i * 30} className="pub-item">
                <span className="pub-num">0{i + 1}</span>
                <div className="pub-body">
                  <a className="pub-title" href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
                  <div className="pub-meta">
                    <span className="pub-venue">{p.venue} · {p.year}</span>
                    <span className="pub-role">{t.pubs.role}</span>
                    {p.highlight && <span className="pub-highlight">{p.highlight}</span>}
                    <a className="pub-link" href={p.link} target="_blank" rel="noreferrer">
                      {p.link.endsWith(".pdf") ? "PDF ↗" : t.pubs.read}
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
              <h3>{t.footer.title}</h3>
              <p>{t.footer.text(profile.name, profile.title)}</p>
            </div>
            <div className="footer-links">
              <a className="btn btn-ghost" href={profile.links.email}>{t.footer.email}</a>
              <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href="#publications">{t.footer.publications}</a>
              <a className="btn btn-primary" href={profile.links.cv} target="_blank" rel="noreferrer">{t.btn.cv}</a>
            </div>
          </div>
          <div className="footer-note">{t.footer.note(new Date().getFullYear(), profile.name)}</div>
        </div>
      </footer>
    </div>
  );
}
