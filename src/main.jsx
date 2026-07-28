import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Code2,
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

const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;

const profileLinks = {
  linkedin: 'https://www.linkedin.com/in/om-bhartiya-b22279185/',
  github: 'https://github.com/OMBHARTIYA?tab=repositories',
  cv: 'assets/om-bhartiya-cv.pdf'
};

const verifiedScope = [
  { value: '5+ years', label: 'operations and data experience' },
  { value: 'Up to 15', label: 'business stakeholders supported' },
  { value: '4 sources', label: 'integrated into one reporting model' },
  { value: '10 stages', label: 'covered by production reporting' }
];

const caseStudies = [
  {
    number: '01',
    title: 'Construction Progress BI',
    category: 'Power BI · Operational analytics',
    summary:
      'A production reporting system for construction and facade operations that brought fragmented progress, issue and delivery data into one decision-ready model.',
    contribution:
      'Owned requirements, source integration, semantic modelling, KPI logic, validation and stakeholder delivery across multiple concurrent projects.',
    engineering:
      'Built API-driven Power BI report variants with multi-table semantic models, reusable DAX KPI measures, mobile layouts and BIM-linked visual analysis; extended ingestion through Fabric, OneLake, notebooks and SQL.',
    outcome:
      'Reduced the reported refresh range from approximately 5–15 minutes to 1–2 minutes and supported self-service visibility for up to 15 stakeholders.',
    evidenceNote:
      'Professional delivery is described at system level. The linked repository uses independently created demonstration data; production reports, model files and client data remain private.',
    tags: ['Power BI', 'DAX', 'Power Query', 'Microsoft Fabric', 'Star schema'],
    visual: 'dashboard',
    links: [
      {
        label: 'Open case repository',
        href: 'https://github.com/OMBHARTIYA/construction-progress-dashboard'
      },
      {
        label: 'Review KPI documentation',
        href: 'https://github.com/OMBHARTIYA/construction-progress-dashboard/blob/main/docs/kpi-proof-summary.md'
      }
    ]
  },
  {
    number: '02',
    title: 'API Ingestion Pipeline',
    category: 'Microsoft Fabric · Data engineering',
    summary:
      'A Microsoft Fabric workflow for turning paginated operational REST data into analytics-ready Delta tables.',
    contribution:
      'Implemented and documented frozen incremental windows, manual pagination, parallel extraction branches, OneLake staging, PySpark transformation, archival controls and success-gated watermark updates.',
    engineering:
      'Landed and archived raw JSON, flattened and deduplicated records in notebooks, wrote Delta outputs and advanced pipeline state only after the complete run succeeded.',
    outcome:
      'Produced repeatable operating guidance for incremental and full-refresh entities, including recovery, rerun and production-support procedures.',
    evidenceNote:
      'Delivered controls and documented hardening recommendations are kept distinct. The linked repository is a sanitized reference—not a copy of employer code, endpoints or data.',
    tags: ['Microsoft Fabric', 'PySpark', 'SQL', 'OneLake', 'Data quality'],
    visual: 'pipeline',
    links: [
      {
        label: 'Open pipeline repository',
        href: 'https://github.com/OMBHARTIYA/Api-ingestion-pipeline'
      },
      {
        label: 'Review synthetic pipeline validation',
        href: 'https://github.com/OMBHARTIYA/Api-ingestion-pipeline/blob/main/docs/validation-report.md'
      }
    ]
  },
  {
    number: '03',
    title: 'Oracle ERP Reconciliation',
    category: 'Manufacturing · Data quality',
    summary:
      'An operational reconciliation process for finding differences between ERP records, shift reporting and physical production activity.',
    contribution:
      'Reviewed production output, inventory movement, material consumption and shift records, then prepared daily reporting for engineering follow-up.',
    engineering:
      'Used repeatable source checks, exception tracking and root-cause review to separate reporting errors from genuine operational deviations.',
    outcome:
      'Improved the reliability of production reporting and gave engineering teams clearer evidence for downtime, quality and corrective-action discussions.',
    evidenceNote:
      'This case is supported by documented professional experience. ERP records, production figures and employer documents are not reproduced publicly.',
    tags: ['Oracle ERP', 'Excel', 'Reconciliation', 'KPI reporting', 'Root-cause analysis'],
    visual: 'reconciliation',
    links: [
      {
        label: 'View résumé context',
        href: assetPath(profileLinks.cv)
      },
      {
        label: 'Discuss the workflow',
        href: 'mailto:ombhartiya16@gmail.com'
      }
    ]
  }
];

const additionalWork = [
  {
    title: 'Warehouse Management Application',
    text:
      'An independently built warehouse product with role-based workflows for warehouses, products, stock, movements and dashboard statistics.',
    tags: ['Next.js', 'TypeScript', 'Express', 'REST API'],
    image: 'assets/warehouse-os.png',
    imageAlt: 'Live warehouse management application interface',
    links: [
      { label: 'View live application', href: 'https://warehouse-os-app.vercel.app/' },
      { label: 'Open repository', href: 'https://github.com/OMBHARTIYA/Warehouse-Frontend' }
    ]
  },
  {
    title: 'BIM Model Workflow & Public IFC Viewer',
    text:
      'Professional work included a Vite and Three.js BIM workflow using That Open, web-ifc and Python tooling for IFC, FRAG and GLB models, with property inspection, filtering, clipping and synchronized plan/3D views. The linked React/TypeScript repository is an independent public adaptation—not the employer implementation.',
    tags: ['IFC / BIM', 'Three.js', 'web-ifc', 'Public React adaptation'],
    links: [
      { label: 'Open public adaptation', href: 'https://github.com/OMBHARTIYA/open-ifc-viewer' },
      {
        label: 'Review public verification notes',
        href: 'https://github.com/OMBHARTIYA/open-ifc-viewer/blob/main/docs/verification.md'
      }
    ]
  }
];

const experience = [
  {
    period: 'May 2025 – Present',
    role: 'Data Analyst / Power BI Developer',
    company: 'DEFOR SA',
    bullets: [
      'Own reporting and analytical delivery across 3–5 concurrent construction projects.',
      'Integrated REST API, Autodesk Construction Cloud, Speckle failover and CSV data across 10 production stages for up to 15 stakeholders.',
      'Reduced the reported refresh range from approximately 5–15 minutes to 1–2 minutes using incremental patterns, then extended the solution through Fabric Lakehouse, notebooks, SQL, pipelines and OneLake.'
    ]
  },
  {
    period: 'Feb 2023 – Apr 2025',
    role: 'Operations Data & Reporting Analyst',
    company: 'All For Expo',
    bullets: [
      'Centralised operational tracking across project, inventory and finance workflows.',
      'Replaced fragmented messages, email threads and spreadsheets with a clearer shared reporting process across four business divisions.'
    ]
  },
  {
    period: 'Oct 2019 – Sep 2022',
    role: 'Process Control & Operational Reporting Engineer',
    company: 'UFLEX Group',
    bullets: [
      'Monitored two active manufacturing lines and reconciled Oracle ERP records against shift reports, checklists and physical output.',
      'Prepared daily operational reporting and supported engineering root-cause analysis for downtime, quality and production deviations.'
    ]
  }
];

const capabilities = [
  {
    icon: BarChart3,
    title: 'Power BI & Analytics',
    items: ['DAX and Power Query', 'Semantic and star-schema modelling', 'KPI definition and dashboard UX', 'Refresh, publishing and mobile layouts'],
    evidence: 'Supported by sanitized production artifacts and a public case repository'
  },
  {
    icon: ServerCog,
    title: 'Fabric Data Engineering',
    items: ['OneLake and Lakehouse patterns', 'PySpark and SQL transformations', 'Incremental API ingestion', 'Orchestration, run control and recovery'],
    evidence: 'Supported by an operating guide and sanitized public reference'
  },
  {
    icon: ClipboardCheck,
    title: 'Data Quality & Operations',
    items: ['Source reconciliation', 'Validation and exception handling', 'Process and root-cause analysis', 'Manufacturing and construction data'],
    evidence: 'Demonstrated in Oracle ERP Reconciliation'
  },
  {
    icon: Code2,
    title: 'Workflow Applications',
    items: ['React, Next.js and TypeScript', 'Node.js and REST APIs', 'Three.js, That Open and web-ifc', 'IFC / FRAG / GLB model workflows'],
    evidence: 'Professional BIM workflow kept separate from the public adaptation'
  }
];

const learning = [
  'Microsoft PL-300 — exam candidate',
  'Microsoft ETL Specialization',
  'IBM Python for Data Science',
  'UC Davis SQL for Data Science',
  'CSCMP Supply Chain Foundations: Demand Planning',
  'Salesforce Sales / Operations Professional Certificate'
];

const education = [
  {
    school: 'Poznan University of Technology',
    detail: 'B.Eng. in Engineering & Industrial Management',
    period: '2022 – 2026'
  },
  {
    school: 'Babes-Bolyai University',
    detail: 'Erasmus Blended Intensive Programme, Romania',
    period: '2024'
  }
];

const languages = ['English — C1', 'Polish — A1', 'Hindi — Native'];

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
      <a className="brand" href="#top" aria-label="Om Bhartiya home">
        <span>OB</span>
        <strong>Om Bhartiya</strong>
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
        <a className="header-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
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
        <span className="hero-kicker"><span /> Om Bhartiya · Poznań, Poland</span>
        <h1>Data Engineer <em>&amp; Power BI Developer</em></h1>
        <p className="hero-title">Operational data, engineered into reliable decisions.</p>
        <p className="hero-text">
          I turn data from APIs, ERP systems, spreadsheets and engineering platforms into reliable pipelines,
          semantic models, dashboards and workflow tools. My background combines hands-on operations with
          Microsoft Fabric, SQL, PySpark and Power BI delivery.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work"><BarChart3 size={17} /> View selected work</a>
          <a className="button secondary" href={assetPath(profileLinks.cv)} download><FileText size={17} /> Download CV</a>
          <a className="button secondary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ExternalLink size={16} />
          </a>
        </div>
        <p className="availability">
          <MapPin size={17} /> Poland-based · TRC holder · open to on-site, hybrid and remote employment
        </p>
      </div>

      <aside className="hero-evidence-panel" aria-label="Professional scope">
        <div className="hero-evidence-heading">
          <span>Professional scope</span>
          <strong>Operations → Data → Decisions</strong>
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
              href={link.href}
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
            More than five years working with manufacturing, project operations, reporting and data delivery—not
            only portfolio exercises.
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
            Open to Data Engineer, Power BI Developer and BI / Data Analyst opportunities in Poland or remotely.
          </p>
          <div className="contact-lines">
            <a href="mailto:ombhartiya16@gmail.com"><Mail size={18} /> ombhartiya16@gmail.com</a>
            <a href="tel:+48516901712"><Phone size={18} /> +48 516 901 712</a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> LinkedIn profile
            </a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} /> GitHub repositories
            </a>
            <span><MapPin size={18} /> Poznań, Poland</span>
          </div>
        </div>
        <aside className="contact-card contact-cta" aria-label="Direct contact options">
          <span className="section-label">Next step</span>
          <h3>Discuss a role, reporting challenge or data platform.</h3>
          <p>Email and LinkedIn are the fastest ways to reach me.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:ombhartiya16@gmail.com"><Mail size={17} /> Email Om</a>
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
      <Header theme={theme} onToggleTheme={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <SelectedWork />
        <AdditionalWork />
        <Experience />
        <Capabilities />
        <Credentials />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Om Bhartiya</span>
        <span>Data Engineer &amp; Power BI Developer</span>
        <span>Microsoft Fabric · SQL · PySpark · Power BI</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
