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
  Gauge,
  GitBranch,
  LineChart,
  Mail,
  MapPin,
  Moon,
  Phone,
  Network,
  Play,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Sun,
  Workflow
} from 'lucide-react';
import './styles.css';

const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;

const getInitialTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // Use the visitor's system preference when storage is unavailable.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const impactMetrics = [
  { value: 'Up to 15', label: 'stakeholders supported' },
  { value: '3–5', label: 'concurrent projects' },
  { value: '1–2 min', label: 'refresh runtime' },
  { value: '30–60 min', label: 'reporting cycle' }
];

const projects = [
  {
    title: 'Construction KPI Case Study',
    text: 'Portfolio-safe Power BI construction progress case study built with deterministic synthetic CSV data and facade-style KPI logic.',
    tags: ['Power BI', 'Python', 'DAX', 'Star Schema'],
    metric: '12',
    label: 'CSV tables',
    visual: 'dashboard',
    repo: 'https://github.com/OMBHARTIYA/construction-progress-dashboard',
    bullets: [
      'Generates synthetic construction-progress data for progress, plan vs actual, quality issues, and deliveries.',
      'Documents the data model, recommended dashboard pages, and DAX measures for Power BI Desktop.',
      'Shows construction/facade reporting thinking without exposing employer data, BIM IDs, production models, or private screenshots.'
    ]
  },
  {
    title: 'API Ingestion Pipeline',
    text: 'Synthetic REST-style ingestion case study that lands JSON, normalizes data, validates quality, and prepares Power BI-ready outputs.',
    tags: ['Python', 'REST JSON', 'ETL', 'Data Quality'],
    metric: '7.5k',
    label: 'work items',
    visual: 'bars',
    repo: 'https://github.com/OMBHARTIYA/Api-ingestion-pipeline',
    bullets: [
      'Implements raw JSON, bronze CSV, silver fact/dimension tables, and gold reporting summaries.',
      'Includes row-count logging, foreign-key checks, valid-status checks, and latest-event identification.',
      'Creates project progress, contractor performance, and monthly progress summaries for BI consumption.'
    ]
  },
  {
    title: 'Open IFC Viewer Case Study',
    text: 'Clean-room browser-based IFC/BIM model viewer case study with local file loading, 3D viewport, selection, and model statistics.',
    tags: ['React', 'TypeScript', 'Three.js', 'IFC'],
    metric: '3D',
    label: 'viewer',
    visual: 'table',
    repo: 'https://github.com/OMBHARTIYA/open-ifc-viewer',
    bullets: [
      'Public repo loads IFC files locally in the browser without upload, backend, database, telemetry, or external processing API.',
      'Demonstrates scene setup, orbit controls, grid and axes helpers, object selection, highlighting, properties, and model statistics.',
      'Related private delivery experience includes status coloring, 2D/3D inspection, model conversion/compression, and Xano-backed status mapping; employer files are excluded.'
    ]
  },
  {
    title: 'Warehouse Operations & Reporting Project',
    text: 'Independent full-stack portfolio project demonstrating warehouse, inventory, workflow, and operational reporting skills.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Reporting'],
    metric: 'Live',
    label: 'deployed app',
    visual: 'warehouse',
    repo: 'https://github.com/OMBHARTIYA/Warehouse-Frontend',
    live: 'https://project-ytm78.vercel.app',
    bullets: [
      'Built a Next.js/TypeScript frontend and Express/TypeScript backend for warehouse, product, stock, movement, and user workflows.',
      'Created structured operational views for inventory visibility, stock movements, user access, and dashboard-ready reporting data.',
      'Demonstrates SQL-backed workflow design, role-based access, automation thinking, and translating business requirements into a deployed tool.',
      'The live deployment is authentication-protected; visitors can use Register to create a demo account.'
    ]
  }
];

const flagshipCaseStudy = {
  title: 'Flagship Case Study: Construction Progress BI',
  summary:
    'A public-safe reconstruction of the reporting pattern I use for construction/facade progress analytics: event history, latest-status logic, issue tracking, KPI visibility, and stakeholder-ready Power BI pages.',
  steps: [
    {
      label: 'Business problem',
      text: 'Teams needed one trusted view of unit progress, delays, issues, deliveries, and status movement instead of fragmented trackers and manual updates.'
    },
    {
      label: 'Data model',
      text: 'I shaped synthetic event-history data into dimensions and facts for projects, buildings, levels, zones, units, statuses, plans, quality issues, deliveries, and contractors.'
    },
    {
      label: 'Transformation',
      text: 'Power Query-style cleaning rules normalize dates, status names, keys, current status snapshots, and plan-vs-actual reporting fields before dashboard use.'
    },
    {
      label: 'Measures',
      text: 'DAX-style logic covers latest status, completed units, progress percentage, delayed work, issue volume, delivery health, and slicer-ready KPI summaries.'
    },
    {
      label: 'Validation',
      text: 'Outputs are checked with row counts, key relationships, status validity, latest-event logic, and reviewer-friendly proof summaries.'
    },
    {
      label: 'Business outcome',
      text: 'This mirrors the real delivery pattern behind 30–60 minute reporting cycles, 1–2 minute refreshes, clearer handovers, and self-service status visibility.'
    }
  ],
  stack: ['Power BI', 'Power Query', 'DAX', 'Star schema', 'Python synthetic data', 'Construction KPIs'],
  repo: 'https://github.com/OMBHARTIYA/construction-progress-dashboard'
};

const walkthroughs = [
  {
    title: 'Dashboard Workflow',
    image: 'assets/walkthrough-dashboard.gif',
    alt: 'Animated synthetic dashboard walkthrough showing KPI cards, status history, and progress charts',
    points: ['Power Query-ready event history', 'DAX-style current status logic', 'KPI cards and progress distribution', 'Portfolio-safe synthetic data only']
  },
  {
    title: 'IFC Viewer Workflow',
    image: 'assets/walkthrough-ifc-viewer.gif',
    alt: 'Animated synthetic IFC viewer walkthrough showing a 3D model, selected element, and property inspector',
    points: ['Local model loading concept', '3D scene and element selection', 'Property/status inspection', 'No client model or employer data included']
  }
];

const technicalProof = [
  {
    title: 'SQL / Reporting Logic',
    icon: Database,
    note: 'Latest-status and progress summaries built from event history.',
    code: `SELECT
  WorkItemID,
  MAX(EventDate) AS LatestEventDate
FROM fact_status_events
GROUP BY WorkItemID;`
  },
  {
    title: 'DAX Measure Thinking',
    icon: BarChart3,
    note: 'Portfolio-safe measure pattern for KPI cards and progress tracking.',
    code: `Completed Units :=
CALCULATE(
  DISTINCTCOUNT(fact_unit_status[UnitID]),
  dim_status[Status] = "Installed"
)`
  },
  {
    title: 'Power Query Cleaning',
    icon: Code2,
    note: 'Normalize operational fields before semantic modeling.',
    code: `Table.TransformColumns(
  Source,
  {{"StatusName", Text.Proper},
   {"UpdatedAt", DateTime.From}}
)`
  },
  {
    title: 'BI Delivery Controls',
    icon: ClipboardCheck,
    note: 'Checks I use before dashboard handover and stakeholder UAT.',
    code: `checks:
  row_counts: pass
  foreign_keys: pass
  status_values: pass
  latest_event_logic: pass`
  }
];

const skillGroups = [
  {
    icon: ClipboardCheck,
    title: 'Business Analysis & Delivery',
    items: ['Requirements elicitation', 'Stakeholder management', 'KPI definition', 'Process mapping', 'User acceptance testing', 'Documentation']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    items: ['Power BI Desktop & Service', 'DAX', 'Power Query (M)', 'Semantic models', 'Star schema modelling', 'RLS & workspace publishing']
  },
  {
    icon: Database,
    title: 'Data & Querying',
    items: ['SQL', 'Data modelling', 'Dimensional modelling', 'Data quality & validation', 'Advanced Excel', 'Oracle ERP validation']
  },
  {
    icon: Workflow,
    title: 'Automation & Integration',
    items: ['REST APIs & JSON', 'Power Automate', 'Excel VBA & macros', 'Scheduled & incremental refresh', 'On-premises gateway', 'ETL pipelines']
  },
  {
    icon: ServerCog,
    title: 'Microsoft Data Platform',
    items: ['Microsoft Fabric', 'OneLake', 'Lakehouse notebooks', 'Fabric ETL pipelines', 'Dataflows', 'Refresh monitoring']
  },
  {
    icon: Network,
    title: 'Operational Domains & Technical Context',
    items: ['Construction & facade', 'BIM / Revit / IFC', 'Warehouse & inventory', 'Manufacturing KPIs', 'React & TypeScript', 'Git']
  }
];

const experience = [
  {
    period: 'May 2025 - Present',
    role: 'Data Analyst / Power BI Developer',
    company: 'DEFOR SA',
    text: 'Built DEFOR’s first Power BI capability as sole analyst, unifying REST API, Autodesk Construction Cloud, Speckle, and CSV data into a 3D-linked star-schema model for 3–5 concurrent projects and up to 15 stakeholders. Re-architected refreshes from 5–15 minutes to 1–2 minutes using incremental refresh and Fabric ETL.'
  },
  {
    period: 'Feb 2023 - Apr 2025',
    role: 'Operations Data & Reporting Analyst',
    company: 'All For Expo',
    text: 'Replaced WhatsApp, phone, and email tracking with a centralised system covering project stages, materials, stock, invoices, and payment status. Consolidated Google Sheets, Drive, Gmail, and loose PDFs into one source of truth for project, warehouse, logistics, and finance teams.'
  },
  {
    period: 'Oct 2019 - Sep 2022',
    role: 'Process Control & Operational Reporting Engineer',
    company: 'UFLEX Group',
    text: 'Produced two operational reports every 24 hours across two production lines, validating Oracle ERP output, inventory, and material consumption against shift checklists and physical output to identify recurring downtime and quality patterns.'
  },
  {
    period: 'Aug 2018 - Apr 2019',
    role: 'Intern Trainee',
    company: 'Honda Cars India Ltd',
    text: 'Supported assembly frame and HR operations while building practical exposure to operational processes and shop-floor coordination.'
  }
];

const certifications = [
  'PL-300 Power BI Data Analyst - in progress',
  'Extract, Transform and Load Data in Power BI - Microsoft',
  'Data Analyst with Excel - Microsoft',
  'SQL for Data Science - UC Davis',
  'Python for Data Science, AI & Development - IBM'
];

const languages = ['English - C1', 'Polish - A2', 'Hindi - Native'];

const education = [
  {
    school: 'Poznan University of Technology',
    detail: 'B.Eng., Engineering / Industrial Management · Grade: 4.5 / 5.0',
    period: 'Oct 2022 - Mar 2026'
  },
  {
    school: 'Babes-Bolyai University',
    detail: 'Erasmus Blended Intensive Programme, Digital Product Development & Reverse Engineering-2',
    period: 'Apr 2024 - Jun 2024'
  },
  {
    school: 'Amity University, Greater Noida Campus',
    detail: 'Mechanical Engineering Studies',
    period: '2016 - 2019'
  }
];

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Om Bhartiya home">
        <span>OB</span>
        <strong>Om Bhartiya</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#projects">Work</a>
        <a href="#flagship">Case Study</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
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
        <a className="header-link" href="https://www.linkedin.com/in/om-bhartiya-b22279185/" target="_blank" rel="noreferrer">
          in
        </a>
        <a className="header-link" href="https://github.com/OMBHARTIYA?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub profile">
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
        <span className="hero-kicker"><span /> Poland-based · TRC holder · Open to employment-contract roles</span>
        <h1>Om Bhartiya</h1>
        <p className="hero-title">I turn operational complexity into <em>clear decisions.</em></p>
        <p className="hero-text">
          Business Intelligence, Data and Business Analyst with 5+ years across manufacturing, construction, and operations.
          I translate stakeholder requirements into trusted KPIs, Power BI dashboards, automated reporting, and improved business processes.
        </p>
        <div className="impact-grid" aria-label="Portfolio impact metrics">
          {impactMetrics.map((item) => (
            <span key={item.label}>
              <strong>{item.value}</strong>
              {item.label}
            </span>
          ))}
        </div>
        <div className="proof-row" aria-label="Portfolio focus areas">
          <span><ClipboardCheck size={18} /> Requirements & process analysis</span>
          <span><Gauge size={18} /> KPI dashboards</span>
          <span><RefreshCw size={18} /> Reporting automation</span>
        </div>
        <div className="profile-links" aria-label="Profile links and skills">
          <span>SQL</span>
          <span>DAX</span>
          <span>Excel</span>
          <span>Fabric</span>
          <span>Power Query</span>
          <a href="https://www.linkedin.com/in/om-bhartiya-b22279185/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/OMBHARTIYA?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:ombhartiya16@gmail.com">Email</a>
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#projects"><Play size={17} /> View Projects</a>
          <a className="button secondary" href={assetPath('assets/om-bhartiya-cv.pdf')} download><FileText size={17} /> Download CV</a>
          <a className="button secondary compact" href="#contact"><Mail size={17} /> Contact</a>
        </div>
        <p className="availability"><MapPin size={17} /> Poland · open to hybrid, on-site, and relocation</p>
      </div>
      <div className="hero-visual" aria-label="Executive KPI dashboard preview">
        <div className="visual-caption"><span>Featured work</span><strong>Operations KPI system</strong></div>
        <img src={assetPath('assets/dashboard-hero.png')} alt="Executive KPI dashboard preview with operations, warehouse, manufacturing, and finance reporting" fetchPriority="high" decoding="async" />
        <div className="visual-note"><strong>From raw events</strong><span>to stakeholder-ready insight</span></div>
      </div>
    </section>
  );
}

function FlagshipCaseStudy() {
  return (
    <section className="section-shell content-section flagship-section" id="flagship">
      <div className="flagship-layout">
        <div>
          <span className="section-label">Deep case study</span>
          <h2>{flagshipCaseStudy.title}</h2>
          <p>{flagshipCaseStudy.summary}</p>
          <div className="tag-row flagship-tags">
            {flagshipCaseStudy.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <a className="button primary" href={flagshipCaseStudy.repo} target="_blank" rel="noreferrer">
            Open Case Repo <ExternalLink size={16} />
          </a>
        </div>
        <div className="case-flow" aria-label="Construction BI case study workflow">
          {flagshipCaseStudy.steps.map((step, index) => (
            <article className="case-flow-step" key={step.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.label}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalProof() {
  return (
    <section className="section-shell content-section" id="proof">
      <div className="section-heading">
        <div>
          <h2>Analyst Proof</h2>
          <p>Small sanitized examples that show how I think about data modeling, KPI logic, transformation, and delivery checks.</p>
        </div>
      </div>
      <div className="proof-snippet-grid">
        {technicalProof.map(({ title, icon: Icon, note, code }) => (
          <article className="proof-snippet-card" key={title}>
            <div className="proof-snippet-top">
              <Icon size={22} />
              <h3>{title}</h3>
            </div>
            <p>{note}</p>
            <pre><code>{code}</code></pre>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-shell content-section" id="projects">
      <div className="section-heading">
        <div>
          <h2>Selected Projects</h2>
          <p>Portfolio projects built around reporting reliability, clean data models, and stakeholder adoption.</p>
        </div>
        <a href="https://github.com/OMBHARTIYA?tab=repositories" target="_blank" rel="noreferrer">View GitHub <ArrowRight size={17} /></a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <ProjectVisual type={project.visual} title={project.title} />
            <div className="project-top">
              <LineChart size={22} />
              <div>
                <strong>{project.metric}</strong>
                <span>{project.label}</span>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="tag-row">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <details className="project-details">
              <summary>Read more <ArrowRight size={15} /></summary>
              <ul>
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="project-link-row">
                <a href={project.repo || '#contact'} target={project.repo ? '_blank' : undefined} rel={project.repo ? 'noreferrer' : undefined}>
                  {project.repo ? 'Open repository' : 'Request walkthrough'} <ExternalLink size={14} />
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    View live demo <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ type, title }) {
  return (
    <div className={`project-visual ${type}`} aria-label={`${title} preview`}>
      <div className="visual-header">
        <span />
        <span />
        <span />
      </div>
      {type === 'dashboard' && <img src={assetPath('assets/dashboard-hero.png')} alt="" loading="lazy" decoding="async" />}
      {type === 'warehouse' && <img src={assetPath('assets/warehouse-os.png')} alt="" loading="lazy" decoding="async" />}
      {type !== 'dashboard' && type !== 'warehouse' && (
        <div className="visual-body">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      )}
    </div>
  );
}

function Walkthroughs() {
  return (
    <section className="section-shell content-section" id="walkthroughs">
      <div className="section-heading">
        <div>
          <h2>Public Walkthroughs</h2>
          <p>Sanitized animated previews that show workflow ideas without using confidential dashboards, models, screenshots, or data.</p>
        </div>
      </div>
      <div className="walkthrough-grid">
        {walkthroughs.map((item) => (
          <article className="walkthrough-card" key={item.title}>
            <img src={assetPath(item.image)} alt={item.alt} loading="lazy" decoding="async" />
            <div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Confidentiality() {
  return (
    <section className="section-shell confidentiality-section" id="confidentiality">
      <div>
        <ShieldCheck size={30} />
        <h2>Confidentiality & Proof</h2>
      </div>
      <p>
        My production work includes real Power BI, API, Fabric, and BIM/model-linked reporting delivery. Public portfolio
        projects are rebuilt as clean-room case studies with synthetic data so reviewers can inspect my approach without
        exposing employer dashboards, client files, private model data, source systems, or internal screenshots.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell content-section" id="skills">
      <div className="section-heading">
        <div>
          <h2>Skills & Toolkit</h2>
          <p>The stack I use to move from raw data to trusted dashboards, automated refreshes, and clean handovers.</p>
        </div>
      </div>
      <div className="skill-grid">
        {skillGroups.map(({ icon: Icon, title, items }) => (
          <article className="skill-column" key={title}>
            <div className="skill-icon"><Icon size={24} /></div>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
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
          <h2>Experience</h2>
          <p>5+ years across manufacturing, construction, and operations data—from process control and reporting into BI development.</p>
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
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-shell content-section" id="education">
      <div className="section-heading">
        <div>
          <h2>Education</h2>
          <p>Academic foundation in engineering, management, analytical thinking, and structured business problem-solving.</p>
        </div>
      </div>
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.school}>
            <CheckCircle2 size={22} />
            <div>
              <h3>{item.school}</h3>
              <p>{item.detail}</p>
              <time>{item.period}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section-shell content-section" id="certifications">
      <div className="section-heading">
        <div>
          <h2>Certifications &amp; Languages</h2>
          <p>Verified learning across Power BI, Excel, SQL, and Python, plus the languages I use across international teams.</p>
        </div>
      </div>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert}>
            <ShieldCheck size={22} />
            <span>{cert}</span>
          </article>
        ))}
      </div>
      <div className="language-row" aria-label="Languages">
        {languages.map((language) => <span key={language}>{language}</span>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-grid">
        <div>
          <h2>Let's Work Together</h2>
          <p>
            Open to Business Intelligence Analyst, Data Analyst, Business Analyst, Operations Analyst, and Power BI
            Developer opportunities in Poland and across Europe.
          </p>
          <div className="contact-lines">
            <a href="mailto:ombhartiya16@gmail.com"><Mail size={18} /> ombhartiya16@gmail.com</a>
            <a href="tel:+48516901712"><Phone size={18} /> +48 516 901 712</a>
            <a href="https://www.linkedin.com/in/om-bhartiya-b22279185/" target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> linkedin.com/in/om-bhartiya-b22279185
            </a>
            <a href="https://github.com/OMBHARTIYA?tab=repositories" target="_blank" rel="noreferrer">
              <GitBranch size={18} /> github.com/OMBHARTIYA
            </a>
            <span><MapPin size={18} /> Poznan, Poland</span>
          </div>
        </div>
        <aside className="contact-card contact-cta" aria-label="Direct contact options">
          <span className="section-label">Direct contact</span>
          <h3>Let's discuss the role or business problem.</h3>
          <p>The fastest way to reach me is by email or LinkedIn. I usually respond within one business day.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:ombhartiya16@gmail.com"><Mail size={17} /> Email Om</a>
            <a className="button secondary" href="https://www.linkedin.com/in/om-bhartiya-b22279185/" target="_blank" rel="noreferrer"><ExternalLink size={17} /> Connect on LinkedIn</a>
            <a className="button secondary" href={assetPath('assets/om-bhartiya-cv.pdf')} download><FileText size={17} /> Download CV</a>
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
        <Projects />
        <FlagshipCaseStudy />
        <TechnicalProof />
        <Walkthroughs />
        <Confidentiality />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Om Bhartiya</span>
        <span>Business Intelligence | Data Analyst | Business Analyst</span>
        <span>Built around dashboards, automation, and business impact</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
