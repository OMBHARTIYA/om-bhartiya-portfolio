export const profile = {
  name: 'Om Bhartiya',
  headline: 'Data Analyst / Power BI Developer',
  heroPrimary: 'Data Analyst',
  heroStack: 'Power BI · SQL · Microsoft Fabric',
  heroTagline: 'From operational complexity to decision-ready data.',
  location: 'Poznań, Poland',
  email: 'ombhartiya16@gmail.com',
  phoneDisplay: '+48 516 901 712',
  phoneHref: '+48516901712',
  linkedin: 'https://www.linkedin.com/in/om-bhartiya-b22279185/',
  github: 'https://github.com/OMBHARTIYA?tab=repositories',
  portfolio: 'https://ombhartiya.github.io/om-bhartiya-portfolio/',
  cvAsset: 'assets/om-bhartiya-data-analyst-cv.pdf',
  availability: 'Poland-based · TRC holder · open to on-site, hybrid and remote employment',
  targetRoles: 'Data Analyst, BI Analyst, Power BI Developer and Operations Data Analyst roles in Poland or remotely.',
  footerSkills: 'Power BI · SQL · Microsoft Fabric · Python',
  summary:
    'Data Analyst and Power BI Developer with 5+ years of experience connecting manufacturing and project operations with decision-ready data. Builds governed pipelines, semantic models and dashboards using SQL, Power BI, Power Query, DAX and Microsoft Fabric to improve visibility, data quality and operational decisions.'
};

export const verifiedScope = [
  { value: '5+ years', label: 'operations and data experience' },
  { value: '90%', label: 'reported refresh-time reduction' },
  { value: '15+', label: 'business stakeholders supported' },
  { value: '4+', label: 'sources unified in one model' },
  { value: '10', label: 'production stages covered' }
];

export const coreSkills = [
  'SQL',
  'Power BI',
  'DAX',
  'Power Query',
  'Data modelling',
  'Microsoft Fabric',
  'Excel',
  'Python'
];

export const caseStudies = [
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
      'Reduced report refresh time by approximately 90%, from 15 minutes to under 2 minutes, while supporting 15+ stakeholders across 10 production stages.',
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
      { label: 'View résumé context', href: profile.cvAsset },
      { label: 'Discuss the workflow', href: `mailto:${profile.email}` }
    ]
  }
];

export const additionalWork = [
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

export const experience = [
  {
    period: 'May 2025 – Present',
    role: 'Data Analyst / Power BI Developer',
    company: 'DEFOR SA',
    bullets: [
      'Cut Power BI refresh time by approximately 90%, from 15 minutes to under 2 minutes, by replacing full reloads with incremental data loading.',
      'Established DEFOR’s first Power BI Center of Excellence, delivering standardized reporting to 15+ stakeholders across 10 production stages.',
      'Unified 4+ fragmented data sources in a centralized star-schema semantic model, improving production-unit tracking and 3D-linked site visibility.',
      'Built Microsoft Fabric ETL workflows with PySpark and SQL, processing 5,000+ records per load for production-unit ingestion.'
    ]
  },
  {
    period: 'Feb 2023 – Apr 2025',
    role: 'Operations Data & Reporting Analyst',
    company: 'All For Expo',
    bullets: [
      'Centralized operational tracking across four divisions, replacing fragmented WhatsApp, email and spreadsheet workflows with one enterprise portal.',
      'Consolidated inventory, project and financial datasets across four divisions, improving data consistency and lifecycle monitoring for active projects.',
      'Translated business requirements into automated digital workflows, reducing reliance on manual operational handoffs.'
    ]
  },
  {
    period: 'Oct 2019 – Sep 2022',
    role: 'Process Control & Reporting Engineer',
    company: 'UFLEX Group',
    bullets: [
      'Maintained 99% reporting accuracy through Oracle ERP reconciliation, comparing entries against live production output before management reporting.',
      'Produced twice-daily production summaries, helping engineering teams identify downtime and quality issues and prioritize corrective action.',
      'Designed repeatable process controls, linking engineering requirements with ERP data validation and process documentation.'
    ]
  }
];

export const cvSkillGroups = [
  {
    title: 'Data Analytics & BI',
    skills: 'Power BI (DAX, Power Query), SQL, Microsoft Fabric, semantic modelling, Excel, KPI reporting'
  },
  {
    title: 'Data Engineering & Automation',
    skills: 'ETL pipelines, OneLake, PySpark, Python, REST APIs, data quality and reconciliation'
  },
  {
    title: 'Process & Operations',
    skills: 'Oracle ERP, requirements gathering, root-cause analysis, process mapping, manufacturing and construction analytics'
  }
];

export const cvProjects = [
  {
    title: 'Warehouse Management System',
    text:
      'Designed and built a role-based application for products, stock movements and dashboard statistics, replacing fragmented inventory workflows with one operational view.'
  },
  {
    title: 'Building Information Application',
    text:
      'Co-built a 3D web application for IFC and GLB models with value overlays, filtering and synchronized plan/3D views to improve cross-functional site visibility.'
  }
];

export const cvCredentials = [
  'Microsoft ETL Specialization',
  'IBM Python for Data Science',
  'UC Davis SQL for Data Science',
  'CSCMP Supply Chain Foundations: Demand Planning Professional Certificate',
  'Salesforce Sales/Operations Professional Certificate',
  'Microsoft Power BI Data Analyst (PL-300) — certification preparation',
  'Microsoft Fabric Analytics Engineer (DP-600) — certification preparation'
];

export const capabilityGroups = [
  {
    iconKey: 'analytics',
    title: 'Power BI & Analytics',
    items: ['DAX and Power Query', 'KPI definition and dashboard UX', 'Refresh optimisation', 'Publishing and mobile layouts'],
    evidence: 'Supported by sanitized production artifacts and a public case repository'
  },
  {
    iconKey: 'modelling',
    title: 'SQL & Data Modelling',
    items: ['SQL querying and transformation', 'Star-schema design', 'Semantic models and relationships', 'Source reconciliation and validation'],
    evidence: 'Demonstrated across the Power BI, Fabric and Oracle ERP case studies'
  },
  {
    iconKey: 'pipelines',
    title: 'Fabric & Data Pipelines',
    items: ['OneLake and Lakehouse patterns', 'PySpark and SQL transformations', 'Incremental API ingestion', 'Orchestration, run control and recovery'],
    evidence: 'Supported by an operating guide and sanitized public reference'
  },
  {
    iconKey: 'automation',
    title: 'Operations & Automation',
    items: ['Process and root-cause analysis', 'Low-code and AI-assisted workflows', 'REST APIs and workflow applications', 'Manufacturing and construction data'],
    evidence: 'Demonstrated through reporting, reconciliation and independently built workflow tools'
  }
];

export const learning = [
  'Completed — Microsoft ETL Specialization',
  'Completed — IBM Python for Data Science',
  'Completed — UC Davis SQL for Data Science',
  'Certification preparation — Microsoft Power BI Data Analyst (PL-300)',
  'Certification preparation — Microsoft Fabric Analytics Engineer (DP-600)',
  'Developing — Agentic AI workflows: tool use, RAG, guardrails and evaluation'
];

export const education = [
  {
    school: 'Poznan University of Technology',
    detail: 'B.Eng. in Engineering & Industrial Management',
    period: 'Awarded March 2026'
  },
  {
    school: 'Babes-Bolyai University',
    detail: 'Erasmus Blended Intensive Programme, Romania',
    period: '2024'
  }
];

export const languages = ['English — Fluent (C1)', 'Polish — Beginner (A1)'];
