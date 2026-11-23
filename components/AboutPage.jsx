import Reveal from "./Reveal";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";
import { profile, publications, llmProjects, mlProjects, productProjects } from "../data/projects";
import { education, experience, technicalSkills } from "../data/career";
import { ui, prefix, aboutSummary, experienceKo, educationKo, languagesByLang } from "../data/i18n";

// Projects come from the same data as the homepage cards, so the pages never drift apart.
const featured = [...llmProjects, ...mlProjects, ...productProjects].filter((p) => !p.comingSoon);
const tools = technicalSkills.map((g) => ({ cat: g.group, items: g.items }));

export default function AboutPage({ lang = "en" }) {
  const t = ui[lang];
  const a = t.about;
  const base = prefix(lang);
  const otherHref = lang === "en" ? "/ko/about" : "/about";
  const exp = lang === "ko" ? experienceKo : experience;
  const edu = lang === "ko" ? educationKo : education;
  const modeLabel = (m) => t.card.mode[m] || m;

  return (
    <div className={`lang-${lang}`}>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href={`${base}/`}>
            <span className="dot" />
            {profile.name}
          </a>
          <div className="nav-links">
            <a href={`${base}/#contact`}>{a.contact}</a>
          </div>
          <div className="nav-right">
            <ThemeToggle labels={t.theme} />
            <LangSwitch lang={lang} href={otherHref} label={t.switchTo.label} title={t.switchTo.title} />
            <a className="nav-cta" href={`${base}/`}>{a.back}</a>
          </div>
        </div>
      </nav>

      <main>
        {/* ABOUT HERO */}
        <section className="about-hero">
          <div className="container">
            <Reveal as="div" className="hero-eyebrow">{a.eyebrow}</Reveal>
            <Reveal delay={40}>
              <h1 className="about-name">{profile.name}</h1>
            </Reveal>
            <Reveal delay={80}>
              <div className="about-titles">
                {t.roles.map((r) => (
                  <span className="role-chip" key={r}>{r}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="about-location">{t.heroMeta}</p>
            </Reveal>
            <Reveal delay={160}>
              {aboutSummary[lang].map((para) => (
                <p className="about-summary" key={para.slice(0, 24)}>{para}</p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">{a.labels.experience}</Reveal>
            <div className="timeline">
              {exp.map((e, i) => (
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
            <Reveal as="div" className="about-section-label">{a.labels.education}</Reveal>
            <div className="timeline">
              {edu.map((e, i) => (
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
            <Reveal as="div" className="about-section-label">{a.labels.publications}</Reveal>
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

        {/* PROJECTS */}
        <section className="about-section about-section-alt">
          <div className="container">
            <Reveal as="div" className="about-section-label">{a.labels.projects}</Reveal>
            {t.cardsNote && <p className="cards-note">{t.cardsNote}</p>}
            <div className="ap-list">
              {featured.map((p, i) => (
                <Reveal key={p.id} delay={i * 30} className="ap-item">
                  <div className="ap-head">
                    <span className="ap-title">{p.title}</span>
                    <span className="ap-status">{p.status?.label}</span>
                  </div>
                  <div className="ap-cls">{p.cls}</div>
                  <p className="ap-summary">{p.abilities[0]}</p>
                  {p.deploy && (
                    <p className="ap-deploy"><b>{modeLabel(p.deploy.mode)}:</b> {p.deploy.text}</p>
                  )}
                  <div className="ap-links">
                    {p.links?.demo && <a href={p.links.demo} target="_blank" rel="noreferrer">{a.live}</a>}
                    {p.links?.github && <a href={p.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  </div>
                </Reveal>
              ))}
            </div>
            <a className="btn btn-ghost ap-more" href={`${base}/#projects`}>{a.moreProjects}</a>
          </div>
        </section>

        {/* TOOLS */}
        <section className="about-section">
          <div className="container">
            <Reveal as="div" className="about-section-label">{a.labels.tools}</Reveal>
            <div className="tools-grid">
              {tools.map((tool, i) => (
                <Reveal key={i} delay={i * 30} className="tool-group">
                  <div className="tool-cat">{tool.cat}</div>
                  <div className="tool-chips">
                    {tool.items.map((item) => (
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
            <Reveal as="div" className="about-section-label">{a.labels.languages}</Reveal>
            <div className="lang-list">
              {languagesByLang[lang].map((l, i) => (
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
              <h2>{a.ctaTitle}</h2>
              <p>{a.ctaSub}</p>
              <div className="hero-actions" style={{ marginTop: 24 }}>
                <a className="btn btn-primary" href={profile.links.email}>{a.ctaContact}</a>
                <a className="btn btn-ghost" href={profile.links.cv} target="_blank" rel="noreferrer">{t.btn.cv}</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-note">{t.footer.note(new Date().getFullYear(), profile.name)}</div>
        </div>
      </footer>
    </div>
  );
}
