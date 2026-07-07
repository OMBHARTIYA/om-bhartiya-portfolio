import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  ExternalLink,
  Gauge,
  GitBranch,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Network,
  Play,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';
import './styles.css';

const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;

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
    title: 'Operational Reporting Tools',
    text: 'Warehouse, inventory, order, invoice, payment, and project-tracking reporting views replacing fragmented spreadsheets.',
    tags: ['React/TypeScript', 'SQL', 'Excel', 'Automation'],
    metric: '5-10h',
    label: 'saved weekly',
    visual: 'warehouse',
    bullets: [
      'Built internal reporting tools for warehouse, products, stock, movements, users, and inventory visibility.',
      'Designed SQL/Excel-supported views for stock movement, order status, invoice/payment status, and workflow performance.',
      'Gathered KPI/reporting requirements and translated them into internal tools, process dashboards, and reporting workflows.'
    ]
  }
];

const skillGroups = [
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    items: ['Power BI Desktop', 'Power BI Service', 'DAX', 'Power Query', 'Semantic models', 'Drill-through reporting']
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    items: ['SQL', 'Excel advanced', 'Data validation', 'KPI definition', 'Data modeling', 'ETL transformation']
  },
  {
    icon: Workflow,
    title: 'Automation',
    items: ['Power Automate', 'Scheduled refresh', 'REST APIs', 'JSON sources', 'SharePoint docs', 'Handover workflows']
  },
  {
    icon: ServerCog,
    title: 'Microsoft Data Platform',
    items: ['Microsoft Fabric', 'Fabric pipelines', 'OneLake', 'Lakehouse', 'PySpark', 'Delta Tables', 'Data gateway', 'Refresh monitoring']
  },
  {
    icon: Network,
    title: 'BIM & Model-Linked BI',
    items: ['IFC/GLB concepts', 'Three.js viewers', 'Model status coloring', '2D/3D inspection', 'Xano integration', 'Facade progress tracking']
  },
  {
    icon: Network,
    title: 'Business Context',
    items: ['Construction reporting', 'Warehouse operations', 'Manufacturing KPIs', 'Finance tracking', 'Stakeholder UAT', 'Requirements gathering']
  }
];

const experience = [
  {
    period: 'May 2025 - Present',
    role: 'Data Analyst / Power BI Developer',
    company: 'DEFOR SA',
    text: 'Delivered Power BI dashboards and BI workflows for construction/facade progress, combining REST API ingestion, Power Query, DAX, semantic models, Power BI Service refresh, and stakeholder UAT.'
  },
  {
    period: 'Feb 2023 - Apr 2025',
    role: 'Digital Operations & Reporting Automation Specialist',
    company: 'All For Expo',
    text: 'Replaced fragmented warehouse, inventory, project, order, invoice, and payment spreadsheets with centralized reporting tools and dashboard-style operational visibility.'
  },
  {
    period: 'Oct 2019 - Sep 2022',
    role: 'Process Control & Operational Reporting',
    company: 'UFLEX Group',
    text: 'Monitored production KPIs across 2 active production lines per 8-hour shift using Oracle ERP data, daily reports, and structured process checklists.'
  },
  {
    period: 'Aug 2018 - Apr 2019',
    role: 'Intern Trainee',
    company: 'Honda Cars India Ltd',
    text: 'Supported assembly frame and HR operations while building practical exposure to operational processes and shop-floor coordination.'
  }
];

const certifications = [
  'Business Analysis Foundations: Competencies - LinkedIn',
  'Microsoft Fabric Analytics Engineer DP-600 Preparation - LinkedIn Learning',
  'Extract, Transform and Load Data in Power BI - Microsoft',
  'Data Analyst with Excel - Microsoft',
  'SQL for Data Science - UC Davis',
  'Python for Data Science, AI & Development - IBM'
];

const education = [
  {
    school: 'Poznan University of Technology',
    detail: "Bachelor's degree, Engineering / Industrial Management",
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

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Om Bhartiya home">
        <span>OB</span>
        <strong>Om Bhartiya</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-socials" aria-label="Profile links">
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
        <h1>Om Bhartiya</h1>
        <p className="hero-title">Data Analyst / Power BI Analyst</p>
        <p className="hero-text">
          I help businesses turn operational data into clear KPI dashboards, automated reporting workflows, and
          actionable insights across construction/facade, manufacturing, warehouse, project, and finance operations.
        </p>
        <div className="proof-row" aria-label="Portfolio focus areas">
          <span><Gauge size={18} /> KPI dashboards</span>
          <span><RefreshCw size={18} /> Reporting automation</span>
          <span><Database size={18} /> Semantic modeling</span>
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
          <a className="button secondary" href="#contact"><Mail size={17} /> Contact</a>
        </div>
        <p className="availability"><MapPin size={17} /> Poznan, Poland - open to on-site, hybrid, and remote roles</p>
      </div>
      <div className="hero-visual" aria-label="Executive KPI dashboard preview">
        <img src={assetPath('assets/dashboard-hero.png')} alt="Executive KPI dashboard preview with operations, warehouse, manufacturing, and finance reporting" />
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
              <a href={project.repo || '#contact'} target={project.repo ? '_blank' : undefined} rel={project.repo ? 'noreferrer' : undefined}>
                {project.repo ? 'Open repository' : 'Request walkthrough'} <ExternalLink size={14} />
              </a>
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
      {type === 'dashboard' && <img src={assetPath('assets/dashboard-hero.png')} alt="" />}
      {type === 'warehouse' && <img src={assetPath('assets/warehouse-os.png')} alt="" />}
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
          <p>5+ years of professional experience, including 3+ years focused on dashboards, automation, data validation, semantic models, and reporting systems.</p>
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
          <h2>Certifications</h2>
          <p>Learning record aligned with Power BI, Excel analytics, SQL, Python, and modern Microsoft data platforms.</p>
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
            Open to Data Analyst, Power BI Analyst, Reporting Specialist, Operations Data Analyst, and Junior/Mid BI
            Developer opportunities in Poland and across EU teams.
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
        <form className="contact-card" action="mailto:ombhartiya16@gmail.com" method="post" encType="text/plain">
          <label>
            Name
            <input name="name" autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label className="wide">
            Message
            <textarea name="message" rows="5" />
          </label>
          <button className="button primary" type="submit"><Sparkles size={17} /> Send Message</button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Om Bhartiya</span>
        <span>Data Analyst | Power BI Analyst | BI Developer</span>
        <span>Built around dashboards, automation, and business impact</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
