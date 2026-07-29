import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Moon,
  Phone,
  ServerCog,
  ShieldCheck,
  Sun,
  Workflow
} from 'lucide-react';
import './styles.css';
import {
  additionalWork,
  capabilityGroups,
  caseStudies,
  coreSkills,
  education,
  experience,
  languages,
  learning,
  profile,
  verifiedScope
} from './profileData.mjs';


const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;
const resolveHref = (href) => href === profile.cvAsset ? assetPath(href) : href;

const profileLinks = {
  linkedin: profile.linkedin,
  github: profile.github,
  cv: profile.cvAsset
};

const capabilityIcons = {
  analytics: BarChart3,
  modelling: Database,
  pipelines: ServerCog,
  automation: Workflow
};

const capabilities = capabilityGroups.map((group) => ({
  ...group,
  icon: capabilityIcons[group.iconKey]
}));

const getInitialTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // Use the visitor's system preference when storage is unavailable.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <span>OB</span>
        <strong>{profile.name}</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Selected work</a>
        <a href="#experience">Experience</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#credentials">Credentials</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-socials" aria-label="Profile links">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <a
          className="header-link"
          href={profileLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          in
        </a>
        <a className="header-link" href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GitBranch size={17} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <span className="hero-kicker"><span /> {profile.name} · {profile.location}</span>
        <h1>{profile.heroPrimary} <em>{profile.heroStack}</em></h1>
        <p className="hero-title">{profile.heroTagline}</p>
        <p className="hero-text">{profile.summary}</p>
        <ul className="core-skills" aria-label="Core data skills">
          {coreSkills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <div className="hero-actions">
          <a className="button primary" href="#work"><BarChart3 size={17} /> View selected work</a>
          <a className="button secondary" href={assetPath(profileLinks.cv)} download><FileText size={17} /> Download CV</a>
          <a className="button secondary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ExternalLink size={16} />
          </a>
        </div>
        <p className="availability">
          <MapPin size={17} /> {profile.availability}
        </p>
      </div>

      <aside className="hero-evidence-panel" aria-label="Professional scope">
        <div className="hero-evidence-heading">
          <span>Professional scope</span>
          <strong>Shop floor → Data → Decisions</strong>
        </div>
        <div className="hero-scope-grid">
          {verifiedScope.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-data-flow" aria-label="Typical delivery workflow">
          <span>API · ERP · files</span>
          <ArrowRight size={16} />
          <span>Fabric · SQL</span>
          <ArrowRight size={16} />
          <span>Power BI · apps</span>
        </div>
        <p><ShieldCheck size={17} /> Evidence below is linked to public repositories or documented professional experience.</p>
      </aside>
    </section>
  );
}

function CaseVisual({ type, title }) {
  if (type === 'dashboard') {
    return (
      <div className="case-visual dashboard-evidence">
        <img
          src={assetPath('assets/dashboard-hero.png')}
          alt="Construction KPI dashboard generated from the public case-study dataset"
          loading="lazy"
          decoding="async"
        />
        <span>Public demonstration dataset</span>
      </div>
    );
  }

  if (type === 'pipeline') {
    return (
      <div className="case-visual process-evidence" aria-label={`${title} processing flow`}>
        {['RAW', 'BRONZE', 'SILVER', 'GOLD'].map((stage, index) => (
          <React.Fragment key={stage}>
            <span>{stage}</span>
            {index < 3 && <ArrowRight size={18} aria-hidden="true" />}
          </React.Fragment>
        ))}
        <p>Incremental window · pagination · archive · watermark on success</p>
      </div>
    );
  }

  return (
    <div className="case-visual process-evidence reconciliation-evidence" aria-label={`${title} reconciliation flow`}>
      <span>ORACLE ERP</span>
      <ArrowRight size={18} aria-hidden="true" />
      <span>SHIFT RECORDS</span>
      <ArrowRight size={18} aria-hidden="true" />
      <span>PHYSICAL OUTPUT</span>
      <p>Compare · investigate exceptions · report verified operational position</p>
    </div>
  );
}

function CaseStudyCard({ item }) {
  return (
    <article className="case-study-card">
      <div className="case-study-intro">
        <span className="case-number">{item.number}</span>
        <div>
          <span className="section-label">{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </div>
      </div>

      <CaseVisual type={item.visual} title={item.title} />

      <dl className="case-study-evidence">
        <div>
          <dt>My contribution</dt>
          <dd>{item.contribution}</dd>
        </div>
        <div>
          <dt>Engineering approach</dt>
          <dd>{item.engineering}</dd>
        </div>
        <div>
          <dt>Operational result</dt>
          <dd>{item.outcome}</dd>
        </div>
      </dl>

      <p className="case-evidence-note">
        <ShieldCheck size={16} aria-hidden="true" />
        <span><strong>Evidence boundary:</strong> {item.evidenceNote}</span>
      </p>

      <div className="case-study-footer">
        <div className="tag-row">
          {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="evidence-link-row">
          {item.links.map((link) => (
            <a
              key={link.label}
              href={resolveHref(link.href)}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label} {link.href.startsWith('http') && <ExternalLink size={14} />}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function SelectedWork() {
  return (
    <section className="section-shell content-section" id="work">
      <div className="section-heading">
        <div>
          <span className="section-label">Selected work</span>
          <h2>Three problems. Three inspectable approaches.</h2>
          <p>
            The projects below focus on the work most relevant to Data Engineering, Power BI and operational
            analytics roles. Each case separates professional delivery from public demonstration evidence and states
            what remains confidential.
          </p>
        </div>
      </div>
      <div className="case-study-list">
        {caseStudies.map((item) => <CaseStudyCard key={item.title} item={item} />)}
      </div>
    </section>
  );
}

function AdditionalWork() {
  return (
    <section className="section-shell content-section supporting-work" id="applications">
      <div className="section-heading">
        <div>
          <span className="section-label">Supporting capability</span>
          <h2>Applications when reporting needs a workflow.</h2>
          <p>
            Application development is a practical extension of my data work: useful when the business needs an
            interface, controlled process or interactive technical tool.
          </p>
        </div>
      </div>
      <div className="additional-work-grid">
        {additionalWork.map((item) => (
          <article className={`additional-work-card ${item.image ? 'with-image' : ''}`} key={item.title}>
            {item.image && <img src={assetPath(item.image)} alt={item.imageAlt} loading="lazy" decoding="async" />}
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tag-row">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="evidence-link-row">
                {item.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell content-section timeline-section" id="experience">
      <div className="section-heading">
        <div>
          <span className="section-label">Professional experience</span>
          <h2>Built in operational environments.</h2>
          <p>
            More than five years bridging manufacturing and project operations with reporting, automation and
            decision-ready data.
          </p>
        </div>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-row" key={`${item.company}-${item.period}`}>
            <time>{item.period}</time>
            <div className="timeline-dot" />
            <div>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="section-shell content-section" id="capabilities">
      <div className="section-heading">
        <div>
          <span className="section-label">Capabilities</span>
          <h2>Skills connected to delivered work.</h2>
          <p>Tools matter when they support a reliable outcome. These are the capabilities represented by the case studies above.</p>
        </div>
      </div>
      <div className="capability-grid">
        {capabilities.map(({ icon: Icon, title, items, evidence }) => (
          <article className="capability-card" key={title}>
            <div className="skill-icon"><Icon size={24} /></div>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p><CheckCircle2 size={15} /> {evidence}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section-shell content-section" id="credentials">
      <div className="section-heading">
        <div>
          <span className="section-label">Background</span>
          <h2>Education, learning and languages.</h2>
          <p>Formal education and professional learning are labelled separately so their status remains clear.</p>
        </div>
      </div>
      <div className="credentials-layout">
        <div className="credential-panel">
          <h3>Education</h3>
          {education.map((item) => (
            <article className="credential-item" key={item.school}>
              <CheckCircle2 size={20} />
              <div>
                <strong>{item.school}</strong>
                <span>{item.detail}</span>
                <time>{item.period}</time>
              </div>
            </article>
          ))}
        </div>
        <div className="credential-panel">
          <h3>Professional learning</h3>
          <ul className="learning-list">
            {learning.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="credential-panel">
          <h3>Languages</h3>
          <div className="language-stack">
            {languages.map((language) => <span key={language}>{language}</span>)}
          </div>
        </div>
      </div>
      <div className="confidentiality-note">
        <ShieldCheck size={23} />
        <p>
          Production data, employer dashboards, source files, endpoints and client identifiers remain private.
          Public repositories use independently created demonstration data and clean-room implementations while
          preserving the engineering decisions and documentation patterns that reviewers need to inspect.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-grid">
        <div>
          <span className="section-label">Contact</span>
          <h2>Looking for reliable data delivery?</h2>
          <p>
            Open to {profile.targetRoles}
          </p>
          <div className="contact-lines">
            <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            <a href={`tel:${profile.phoneHref}`}><Phone size={18} /> {profile.phoneDisplay}</a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> LinkedIn profile
            </a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} /> GitHub repositories
            </a>
            <span><MapPin size={18} /> {profile.location}</span>
          </div>
        </div>
        <aside className="contact-card contact-cta" aria-label="Direct contact options">
          <span className="section-label">Next step</span>
          <h3>Discuss a role, reporting challenge or data platform.</h3>
          <p>Email and LinkedIn are the fastest ways to reach me.</p>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}><Mail size={17} /> Email Om</a>
            <a className="button secondary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink size={16} />
            </a>
            <a className="button secondary" href={assetPath(profileLinks.cv)} download><FileText size={17} /> Download CV</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme switching still works when storage is blocked.
    }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header theme={theme} onToggleTheme={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <AdditionalWork />
        <Experience />
        <Capabilities />
        <Credentials />
        <Contact />
      </main>
      <footer>
        <span>© 2026 {profile.name}</span>
        <span>{profile.headline}</span>
        <span>{profile.footerSkills}</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
