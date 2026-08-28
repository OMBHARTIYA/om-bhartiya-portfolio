export const profile = {
  name: 'Om Bhartiya',
  headline: 'Data & Reporting Analyst | Power BI Analyst',
  heroPrimary: 'Data & Reporting Analyst',
  heroStack: 'Power BI · SQL · Operational Analytics',
  heroTagline: 'From operational complexity to decision-ready data.',
  location: 'Poznań, Poland',
  email: 'ombhartiya16@gmail.com',
  phoneDisplay: '+48 516 901 712',
  phoneHref: '+48516901712',
  linkedin: 'https://www.linkedin.com/in/om-bhartiya-b22279185/',
  github: 'https://github.com/OMBHARTIYA?tab=repositories',
  portfolio: 'https://ombhartiya.github.io/om-bhartiya-portfolio/',
  cvAsset: 'assets/om-bhartiya-data-reporting-cv.pdf?v=20260828-1',
  availability: 'Poznań-based · full work rights in Poland · open to on-site, hybrid and remote roles',
  targetRoles: 'Data Analyst, Reporting Analyst, BI Analyst, Power BI Analyst and Operations Data Analyst roles in Poland or remotely.',
  footerSkills: 'Power BI · SQL · Data Quality · Operational Reporting',
  summary:
    'Data and Reporting Analyst with 5+ years of total cross-domain experience across manufacturing reporting, process control, project operations and business reporting, including recent dedicated Power BI work. Uses Power BI, SQL, Power Query and DAX to improve reporting speed, data consistency and operational visibility. Brings additional experience in Oracle ERP reconciliation, requirements gathering and process documentation, with Microsoft Fabric and Python used primarily in guided or project-based work.'
};

export const verifiedScope = [
  { value: '5+ years', label: 'operations and reporting experience' },
  { value: '~90%', label: 'reported refresh-time reduction' },
  { value: 'Up to 15', label: 'business stakeholders supported' },
  { value: '4', label: 'data sources unified in one model' },
  { value: '10', label: 'production stages covered' }
];

export const coreSkills = [
  'Power BI',
  'DAX',
  'Power Query',
  'SQL',
  'Excel',
  'Data modeling',
  'KPI reporting',
  'Data validation'
];

export const caseStudies = [
  {
    number: '01',
    title: 'Construction Progress BI',
    category: 'Power BI · Operational analytics',
    summary:
      'A production reporting system for construction and facade operations that brought fragmented progress, issue and delivery data into one decision-ready model.',
    contribution:
      'Gathered and translated reporting requirements, integrated four data sources, built semantic models and KPI logic, validated outputs and supported delivery across multiple concurrent projects.',
    engineering:
      'Built API-driven Power BI report variants with multi-table semantic models, reusable DAX KPI measures, mobile layouts and BIM-linked visual analysis; used Fabric, OneLake and notebook patterns in guided project work supporting ingestion and analysis.',
    outcome:
      'Reduced report refresh time by approximately 90%, from 15 minutes to under 2 minutes, while supporting up to 15 stakeholders across 10 production stages.',
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
  },
  {
    number: '03',
    title: 'API Ingestion Pipeline',
    category: 'Microsoft Fabric · Guided project exposure',
    summary:
      'A sanitized reference showing a Microsoft Fabric pattern for turning paginated operational REST data into analytics-ready Delta tables.',
    contribution:
      'Supported implementation and documentation of incremental windows, pagination, extraction branches, OneLake staging, PySpark transformation, archival controls and success-gated watermark updates through guided and AI-assisted project work.',
    engineering:
      'Worked with patterns for landing and archiving raw JSON, flattening and deduplicating records in notebooks, writing Delta outputs and advancing pipeline state only after a complete run succeeded.',
    outcome:
      'Documented repeatable operating guidance for incremental and full-refresh entities, including recovery, rerun and production-support procedures.',
    evidenceNote:
      'The linked repository is a sanitized learning and reference implementation—not a copy of employer code, endpoints or data, and not evidence of independent production ownership.',
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
  }
];

export const additionalWork = [
  {
    title: 'Warehouse Management Application',
    text:
      'An AI-assisted warehouse application prototype. I designed the operational workflow and used generative-AI coding support to implement role-based views for warehouses, products, stock movements and dashboard statistics.',
    tags: ['AI-assisted prototype', 'Next.js', 'TypeScript', 'REST API'],
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
      'Professional work included collaboration on an AI-assisted Vite and Three.js BIM workflow using That Open, web-ifc and Python tooling for IFC, FRAG and GLB models, with property inspection, filtering, clipping and synchronized plan/3D views. The linked React/TypeScript repository is an independent public adaptation—not the employer implementation.',
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
      'Built DEFOR’s first centralized Power BI reporting capability as the sole analyst, supporting up to 15 stakeholders across 3-5 concurrent projects and 10 production stages.',
      'Unified four sources - REST API, Autodesk Construction Cloud, Speckle and CSV - in a star-schema semantic model, replacing manual reconciliation with one trusted operational view.',
      'Reduced Power BI refresh time from 5-15 minutes to 1-2 minutes with incremental loading, enabling near-live self-service reporting.',
      'Supported development and testing of a paginated REST-to-Fabric ingestion workflow using OneLake, PySpark and Delta tables, including incremental watermarks and Bronze-to-Silver processing for 5,000+ records per load.'
    ]
  },
  {
    period: 'Feb 2023 – Apr 2025',
    role: 'Operations Data & Reporting Analyst',
    company: 'All For Expo',
    bullets: [
      'Centralized operational tracking across four divisions, replacing fragmented WhatsApp, email and spreadsheet workflows with one enterprise portal.',
      'Consolidated inventory, project and financial datasets across four divisions, improving data consistency and lifecycle monitoring for active projects.',
      'Bridged business requirements and technical delivery, producing onboarding documentation and digital learning resources that supported user adoption and process compliance.'
    ]
  },
  {
    period: 'Oct 2019 – Sep 2022',
    role: 'Process Control & Reporting Engineer',
    company: 'UFLEX Group',
    bullets: [
      'Maintained 99% reporting accuracy through Oracle ERP reconciliation, comparing entries with live production output and catching discrepancies before management reporting.',
      'Delivered 2 production summaries per day, enabling engineering teams to identify downtime and quality issues and prioritize corrective actions.',
      'Designed repeatable process controls and training documentation, linking engineering requirements with ERP validation and process compliance.'
    ]
  }
];

export const cvSkillGroups = [
  {
    title: 'Data Analytics & BI',
    skills: 'Power BI (DAX, Power Query), SQL, Microsoft Fabric, semantic modeling, Excel, KPI reporting'
  },
  {
    title: 'Data Engineering & Automation',
    skills: 'Guided/project exposure to ETL pipelines, OneLake, PySpark, Python and REST APIs; AI-assisted workflow automation and low-code/no-code'
  },
  {
    title: 'Operations & Process Improvement',
    skills: 'Requirements gathering, root-cause analysis, workflow mapping, data validation, SOP and onboarding documentation'
  },
  {
    title: 'Business Applications & Integration',
    skills: 'Oracle ERP, Autodesk Construction Cloud, React, TypeScript, BPMN/UML, IFC and GLB data'
  }
];

export const cvProjects = [
  {
    title: 'Warehouse Management System',
    text:
      'Designed the business workflow and used generative-AI coding support to create an inventory application prototype for products, stock movements and dashboard statistics.'
  },
  {
    title: 'Building Information Application',
    text:
      'Co-built a React and Vite application for IFC, FRAG and GLB models with status overlays, filtering and synchronized plan/3D views to improve engineering inspection and site visibility.'
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
    items: ['DAX and Power Query', 'KPI definition and dashboard UX', 'Refresh optimization', 'Publishing and mobile layouts'],
    evidence: 'Supported by sanitized production artifacts and a public case repository'
  },
  {
    iconKey: 'modelling',
    title: 'SQL & Data Modeling',
    items: ['SQL foundations for querying and validation', 'Star-schema design', 'Semantic models and relationships', 'Source reconciliation and data-quality checks'],
    evidence: 'Applied in reporting work and being strengthened through structured practice'
  },
  {
    iconKey: 'pipelines',
    title: 'Fabric & Pipeline Exposure',
    items: ['OneLake and Lakehouse patterns', 'Guided PySpark and SQL transformations', 'Incremental API-ingestion patterns', 'Run control, recovery and documentation'],
    evidence: 'Supported by guided project work, an operating guide and a sanitized public reference'
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
  'Developing — SQL foundations: joins, aggregations, CTEs and data validation',
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
    detail: 'Erasmus Blended Intensive Program, Romania',
    period: '2024'
  }
];

export const languages = ['English — Fluent (C1)', 'Polish — Beginner (A1)'];
