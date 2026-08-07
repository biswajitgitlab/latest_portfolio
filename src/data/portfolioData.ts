import { SkillCategory, CaseStudy, StatItem, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: 'Biswajit Sarkar',
  title: 'Full Stack AI Automation Engineer',
  roles: [
    'Full Stack AI Automation Engineer',
    'Agentic Workflow Architect',
    'Laravel & n8n Specialist',
    'Browser Automation Expert'
  ],
  experienceYears: '2.5+',
  company: '2COMS Pvt. Ltd.',
  location: 'Alipurduar, West Bengal, India',
  email: 'biswajitsarkar179789@gmail.com',
  phone: '+91 7863955493',
  linkedin: 'https://linkedin.com/in/biswajit-sarkar-4296b1246',
  github: 'https://github.com/biswajitgitlab',
  portfolioUrl: 'https://biswajitgitlab.github.io/latest_portfolio',
  status: 'Available for Full Stack AI & Automation Engineering Roles',
  heroBio: 'Full Stack AI Automation Engineer with 2.5+ years of experience building enterprise ERP systems and intelligent workflow automation loops. Specializing in Laravel, CodeIgniter, n8n orchestration, Playwright browser agents, and self-hosted Qwen2.5/PaddleOCR pipelines on AWS ECS.'
};

export const VALUE_PROP = {
  headline: 'I automate what others do manually.',
  sentences: [
    'By replacing repetitive human labor with resilient n8n orchestration, Playwright browser agents, and stateful webhooks, I turn multi-hour portal workflows into sub-second background execution.',
    'I integrate self-hosted Qwen2.5 LLMs and PaddleOCR with Tool Router loops to autonomously verify complex government documents (PAN, Aadhaar, Marksheets) with 99.8% precision.',
    'From migrating legacy enterprise PHP frameworks to deploying auto-scaling microservices on AWS ECS Fargate via GitLab CI/CD, I build end-to-end automation systems engineered for high scale and fault tolerance.'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Core Backend & Web',
    icon: 'Server',
    description: 'Robust PHP ecosystem, modern enterprise frameworks, and high-performance databases.',
    skills: [
      { name: 'PHP (7.x / 8.x)', level: 'Expert', tooltip: 'Core backend development language used across enterprise ERP applications and RESTful APIs.', iconName: 'Code', isPrimary: true },
      { name: 'Laravel', level: 'Advanced', tooltip: 'Building scalable MVC architecture, queue workers, artisan commands, and custom API endpoints.', iconName: 'Layers', isPrimary: true },
      { name: 'CodeIgniter 3 & 4', level: 'Advanced', tooltip: 'Migrated massive legacy CI3 monolithic applications to modern CI4 architecture with enhanced performance.', iconName: 'Cpu', isPrimary: true },
      { name: 'Filament PHP', level: 'Advanced', tooltip: 'Rapidly crafting admin panels, custom resources, and complex dashboard interfaces.', iconName: 'Layout' },
      { name: 'Vue.js & JavaScript', level: 'Intermediate', tooltip: 'Crafting responsive single-page interfaces, dynamic form states, and interactive dashboards.', iconName: 'Globe' },
      { name: 'MySQL & Query Tuning', level: 'Advanced', tooltip: 'Schema design, indexing strategies, query execution plan optimization, and RBAC implementation.', iconName: 'Database', isPrimary: true }
    ]
  },
  {
    id: 'automation',
    title: 'Workflow & Browser Automation',
    icon: 'Workflow',
    description: 'Orchestrating multi-step background agents, headless browser drivers, and stateful webhooks.',
    skills: [
      { name: 'n8n Workflow Engine', level: 'Expert', tooltip: 'Author of 10+ production-grade n8n workflows managing candidate onboarding, contracts, and notifications.', iconName: 'GitBranch', isPrimary: true },
      { name: 'Playwright & Puppeteer', level: 'Advanced', tooltip: 'Headless browser agents handling complex multi-stage portal interactions, session persistence, and cookies.', iconName: 'Bot', isPrimary: true },
      { name: 'State Machines & Webhooks', level: 'Advanced', tooltip: 'Distributed locking, retry logic, session management, and asynchronous callback pipelines.', iconName: 'RefreshCw' },
      { name: 'Human-in-the-Loop', level: 'Advanced', tooltip: 'CAPTCHA and OTP interception workflows allowing seamless manual escalation when required.', iconName: 'ShieldAlert' },
      { name: 'Cron Jobs & Queues', level: 'Advanced', tooltip: 'Distributed job scheduling for background data sync and batch document processing.', iconName: 'Clock' }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Vision/OCR',
    icon: 'Brain',
    description: 'Autonomous LLM tool routing, document verification, and vision models.',
    skills: [
      { name: 'Agentic AI Loops', level: 'Advanced', tooltip: 'AI Agent → Parse Tool Call → Tool Router → Format Tool Response architecture inside n8n and Python.', iconName: 'Sparkles', isPrimary: true },
      { name: 'LLM Guardrails', level: 'Advanced', tooltip: 'Self-consistency checks, structured JSON enforcement, and misrouting prevention mechanisms.', iconName: 'ShieldCheck', isPrimary: true },
      { name: 'Qwen2.5 Vision/Text LLM', level: 'Advanced', tooltip: 'Self-hosted multimodal LLMs fine-tuned for structured extraction from government identity cards.', iconName: 'Eye', isPrimary: true },
      { name: 'PaddleOCR', level: 'Advanced', tooltip: 'High-speed bounding-box OCR engine for extracting text from noisy scanned marksheets and certificates.', iconName: 'FileText' },
      { name: 'Prompt Engineering', level: 'Advanced', tooltip: 'System prompt design, tool definition schemas, and zero/few-shot chain execution.', iconName: 'MessageSquare' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    icon: 'Cloud',
    description: 'Containerized deployment pipelines, cloud storage, and secure server management.',
    skills: [
      { name: 'AWS ECS Fargate', level: 'Advanced', tooltip: 'Serverless container execution for zero-maintenance scaling of Laravel and worker tasks.', iconName: 'Cloud', isPrimary: true },
      { name: 'AWS S3 & Presigned URLs', level: 'Advanced', tooltip: 'Secure document storage with strict access permissions and temporary upload/download URLs.', iconName: 'HardDrive' },
      { name: 'Docker & Containerization', level: 'Advanced', tooltip: 'Dockerizing PHP, Node.js, and Python services for identical local and staging environments.', iconName: 'Box', isPrimary: true },
      { name: 'GitLab CI/CD', level: 'Advanced', tooltip: 'Automated test suites, image building, container registry pushes, and blue/green ECS deployments.', iconName: 'GitCommit' },
      { name: 'REST APIs & Security', level: 'Expert', tooltip: 'JWT/Bearer auth, rate limiting, CORS configuration, and RBAC access control.', iconName: 'Lock' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'naps-erp',
    title: 'NAPS/NATS Apprenticeship Management System',
    subtitle: 'Government Portal Candidate Onboarding & Contract Lifecycle Management',
    category: 'Enterprise ERP',
    company: '2COMS Pvt. Ltd.',
    period: '2023 - Present',
    tags: ['Laravel', 'CodeIgniter 4', 'Filament', 'MySQL', 'Government API'],
    challenge: 'Managing over 100,000+ apprenticeship candidate onboardings and contract generations manually across government portals (NAPS/apprenticeshipindia.gov.in and NATS) led to severe processing bottlenecks, manual errors, and delayed government beneficiary verification.',
    solution: 'Built an enterprise ERP backend using Laravel, CodeIgniter 4, and Filament PHP, migrating a legacy CI3 codebase. Implemented RESTful APIs with RBAC authentication and direct integration with government apprenticeship portals.',
    impact: 'Streamlined candidate onboarding throughput by 80%, automated contract lifecycle tracking for enterprise clients, and ensured zero-downtime database performance under peak load.',
    highlights: [
      'Migrated legacy monolithic CodeIgniter 3 architecture to CodeIgniter 4 and Filament',
      'Engineered RBAC-based security model for multi-tenant government organization management',
      'Optimized MySQL indexing and query plans to handle 100k+ concurrent records'
    ],
    architectureOverview: 'Client Frontend → Laravel REST APIs → RBAC Engine → CodeIgniter 4 Service Modules → MySQL Cluster'
  },
  {
    id: 'tpa-browser-agent',
    title: 'TPA Webhook Automation & Browser Agent Orchestrator',
    subtitle: 'Playwright/Puppeteer Automation for Beneficiary ID Verification',
    category: 'Browser Automation',
    company: '2COMS Pvt. Ltd.',
    period: '2024 - Present',
    tags: ['Playwright', 'Puppeteer', 'n8n', 'Node.js', 'Webhooks'],
    challenge: 'Government portals lack direct API endpoints for Beneficiary ID (Ben ID) generation and contract verification, requiring staff to manually log into slow portals, fill multi-step forms, and handle CAPTCHAs/OTPs.',
    solution: 'Designed a headless browser automation agent powered by Playwright and Puppeteer orchestrated through n8n state machines. Built session persistence with distributed locking and a Human-in-the-Loop fallback mechanism for CAPTCHA/OTP challenges.',
    impact: 'Eliminated 95% of manual portal data entry work, reducing processing time per candidate contract from 15 minutes down to 12 seconds with error handling.',
    highlights: [
      'Created stateful webhook orchestrator with session cookie preservation',
      'Engineered distributed locking mechanism to prevent race conditions during concurrent requests',
      'Built real-time Telegram/Slack notification triggers for Human-in-the-Loop OTP inputs'
    ],
    architectureOverview: 'Event Webhook → n8n Orchestrator → Distributed Lock → Headless Playwright Worker → Govt Portal → Ben ID Result'
  },
  {
    id: 'agentic-onboarding',
    title: 'Agentic AI Onboarding Assistant & Document Verification',
    subtitle: 'n8n Conversational Tool Router with Qwen2.5 Vision & PaddleOCR',
    category: 'Agentic AI',
    company: '2COMS Pvt. Ltd.',
    period: '2024 - Present',
    tags: ['n8n', 'Qwen2.5 Vision', 'PaddleOCR', 'Tool Router', 'LLM Guardrails'],
    challenge: 'Candidate document verification (PAN card, Aadhaar, marksheets) involved high human review costs, frequent typos in manual entry, and LLM misclassifications when processing unformatted candidate inputs.',
    solution: 'Constructed an Agentic AI loop (AI Agent → Parse Tool Call → Tool Router → Format Tool Response) inside n8n. Deployed self-hosted Qwen2.5 Vision LLM and PaddleOCR with self-consistency guardrails to validate identity documents and return structured JSON.',
    impact: 'Achieved 99.8% tool routing accuracy and cut document processing costs by 85% while automatically flagging fraudulent or low-clarity identity uploads.',
    highlights: [
      'Autonomous Tool Router dynamically selecting OCR vs Vision LLM verification paths',
      'Built strict LLM guardrails against hallucinated document numbers and misrouted tool calls',
      'Self-hosted Qwen2.5 Vision model deployed on internal GPU servers for privacy compliance'
    ],
    architectureOverview: 'User Document → n8n Agent Loop → Tool Router → PaddleOCR / Qwen2.5 LLM → Validation Guardrail → Structured JSON'
  },
  {
    id: 'lms-healthcare',
    title: 'LMS & Carenetram Healthcare Platform',
    subtitle: 'Multi-Tenant Learning Management & Healthcare Operations App',
    category: 'Full Stack App',
    company: '2COMS Pvt. Ltd.',
    period: '2023 - 2024',
    tags: ['Laravel', 'Vue.js', 'Filament', 'AWS S3', 'Docker'],
    challenge: 'Healthcare and learning management platforms required secure document access controls, real-time training analytics, and seamless file streaming for thousands of medical trainees.',
    solution: 'Built modern web applications with Laravel, Filament PHP, and Vue.js. Implemented AWS S3 integration with presigned URLs for encrypted medical document delivery and containerized deployments via AWS ECS Fargate.',
    impact: 'Delivered a resilient platform hosting thousands of active learners, reducing file bandwidth costs through automated S3 presigned asset caching.',
    highlights: [
      'Designed responsive Vue.js frontend widgets integrated with Filament admin panels',
      'Integrated AWS S3 storage with presigned URLs for secure temporary media access',
      'Automated container builds with Docker and GitLab CI/CD pipelines'
    ],
    architectureOverview: 'Vue.js Frontend → Laravel Core API → S3 Presigned URL Resolver → AWS ECS Fargate Container Cluster'
  }
];

export const STATS: StatItem[] = [
  {
    id: 'exp',
    value: 2.5,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Full Stack & Automation Engineering',
    icon: 'Briefcase'
  },
  {
    id: 'workflows',
    value: 10,
    suffix: '+',
    label: 'Production n8n Workflows',
    sublabel: 'Automating Candidate & Portal Ops',
    icon: 'Workflow'
  },
  {
    id: 'docs',
    value: 100,
    suffix: 'k+',
    label: 'Documents Processed',
    sublabel: 'PAN, Aadhaar & Marksheets Verified',
    icon: 'FileCheck'
  },
  {
    id: 'accuracy',
    value: 99.8,
    suffix: '%',
    label: 'Tool Routing Accuracy',
    sublabel: 'Agentic Loop & Guardrail Precision',
    icon: 'Target'
  },
  {
    id: 'time-saved',
    value: 85,
    suffix: '%',
    label: 'Manual Effort Reduced',
    sublabel: 'Sub-second Background Execution',
    icon: 'Zap'
  },
  {
    id: 'portals',
    value: 4,
    suffix: '+',
    label: 'Enterprise Apps Automated',
    sublabel: 'NAPS, NATS, TPA & Carenetram',
    icon: 'Server'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'agentic-loops-n8n',
    title: 'Building Agentic AI Loops in n8n: Tool Routers & LLM Guardrails',
    date: 'July 2026',
    readTime: '6 min read',
    category: 'Agentic AI',
    description: 'A deep dive into constructing an AI Agent → Parse Tool Call → Tool Router loop in n8n. Learn how to prevent LLM tool misrouting and structure deterministic output parsing for production workflows.',
    tags: ['n8n', 'Agentic AI', 'Tool Router', 'LLM Guardrails'],
    content: `When building autonomous AI systems, naive LLM chain-of-thought frequently breaks down when selecting structured backend actions. In this guide, we break down how to design a deterministic Agentic Loop in n8n.

### The Problem: Tool Misrouting in Production
Standard LLMs often generate invalid tool parameters or execute tools out of order when given multiple choices.

### The Architecture
1. **Agent State Manager**: Normalizes user input and injects conversation context.
2. **LLM Tool Router Node**: Evaluates user intent against strict OpenAPI JSON schemas.
3. **Parse Tool Call**: Extracts structured arguments using JSON Schema validation.
4. **Tool Execution Engine**: Triggers target backend APIs (e.g. Database lookup, OCR tool).
5. **Response Formatter & Guardrail**: Validates tool response before returning natural language output to the user.

By applying self-consistency checks and fallback parsers, we achieved a 99.8% routing accuracy in production.`
  },
  {
    id: 'playwright-state-machines',
    title: 'Automating Government Portals with Playwright, Puppeteer & Webhook State Machines',
    date: 'May 2026',
    readTime: '8 min read',
    category: 'Browser Automation',
    description: 'How to bypass portal anti-automation bottlenecks by engineering stateful webhook orchestrators, session persistence with Redis/MySQL, and distributed lock handlers for concurrent browser jobs.',
    tags: ['Playwright', 'Puppeteer', 'Webhooks', 'State Machine'],
    content: `Government web portals (like NAPS/NATS) often present severe automation challenges: heavy session statefulness, unpredictable response delays, and lack of REST APIs.

### Key Strategies Built:
* **Session Cookie Injection**: Preserving authenticated browser contexts across distinct execution jobs to avoid repeated multi-factor logons.
* **Distributed Locking**: Using Redis key locking to prevent two browser worker instances from stepping on the same portal account simultaneously.
* **Resilient Retry Backoff**: Implementing exponential delay algorithms when portal servers return HTTP 502/504 errors.`
  },
  {
    id: 'qwen25-paddleocr-pipeline',
    title: 'Self-Hosting Qwen2.5 Vision LLM & PaddleOCR for High-Speed Document Verification',
    date: 'March 2026',
    readTime: '7 min read',
    category: 'Vision & OCR',
    description: 'Combining bounding-box PaddleOCR with Qwen2.5 Vision models to verify identity documents (PAN cards, Aadhaar, marksheets) accurately without exposing sensitive PII to external cloud APIs.',
    tags: ['Qwen2.5', 'PaddleOCR', 'Document Verification', 'Privacy'],
    content: `Document verification for apprenticeship onboarding requires extreme privacy and high speed. Sending candidate identity documents to public APIs poses compliance risks.

### The Hybrid Pipeline Approach
1. **Pre-processing**: Image auto-rotation, noise reduction, and contrast enhancement.
2. **First-Pass PaddleOCR**: Rapid extraction of high-density text fields (Name, DOB, ID Numbers).
3. **Multimodal Qwen2.5 Vision Pass**: Applied specifically when documents are skewed, handwritten, or watermarked.
4. **Cross-Validation Guardrail**: Comparing OCR text against Vision LLM outputs to detect discrepancies before saving.`
  },
  {
    id: 'legacy-ci3-to-ci4-filament',
    title: 'Migrating Legacy CodeIgniter 3 to CI4 and Filament in Production Enterprise ERPs',
    date: 'January 2026',
    readTime: '10 min read',
    category: 'Full Stack PHP',
    description: 'Lessons learned modernizing a multi-decade monolithic PHP codebase into modular CodeIgniter 4 services and Filament admin interfaces without interrupting active government portal operations.',
    tags: ['PHP', 'CodeIgniter 4', 'Laravel', 'Filament', 'Refactoring'],
    content: `Legacy CodeIgniter 3 applications often accumulate heavy technical debt: direct DB queries in controllers, deprecated PHP 7.x functions, and global state pollution.

### Migration Roadmap Executed:
1. **Database Layer Abstraction**: Introducing Repository patterns over legacy Active Record calls.
2. **Parallel Routing Layer**: Routing high-traffic API routes to CI4 controllers while leaving legacy views intact.
3. **Filament PHP Integration**: Replacing custom HTML table generators with reactive Filament Resources for effortless CRUD and filtering.`
  },
  {
    id: 'aws-ecs-fargate-gitlab-cicd',
    title: 'Zero-Downtime AWS ECS Fargate Deployments with GitLab CI/CD & S3 Presigned URLs',
    date: 'November 2025',
    readTime: '5 min read',
    category: 'DevOps & Cloud',
    description: 'Step-by-step architecture for automated container builds, Amazon ECR image tagging, ECS Fargate task definition updating, and secure asset distribution via S3 temporary signatures.',
    tags: ['AWS ECS', 'Fargate', 'GitLab CI/CD', 'Docker', 'AWS S3'],
    content: `Deploying containerized PHP & worker services requires clean staging and seamless zero-downtime rollouts.

### Infrastructure Highlights
* **GitLab CI/CD Pipeline**: Multi-stage runner executing syntax checks, PHPUnit, Docker image compilation, and ECR pushing.
* **ECS Fargate Rolling Deployment**: Blue/Green deployment strategy ensuring new containers pass health checks before traffic cuts over.
* **S3 Presigned Asset Handlers**: Eliminating public bucket exposure by serving user-uploaded marksheets through temporary 15-minute signed links.`
  },
  {
    id: 'captcha-human-in-the-loop',
    title: 'Handling CAPTCHA & Human-in-the-Loop OTP Verification in Automated Workflows',
    date: 'September 2025',
    readTime: '6 min read',
    category: 'Automation Architecture',
    description: 'Designing graceful human intervention gates inside fully automated n8n and Playwright pipelines when encountering unexpected portal security checkpoints.',
    tags: ['Automation', 'Human-In-The-Loop', 'n8n', 'Playwright', 'Security'],
    content: `Fully automated systems will inevitably encounter edge-case security prompts like 2FA OTP codes or visual CAPTCHAs.

### Human-in-the-Loop Design Pattern
1. Browser agent detects OTP/CAPTCHA challenge page.
2. Worker pauses execution state and publishes an alert payload to Telegram/Slack with a secure web form callback token.
3. Operator enters OTP code via the web form within a 120-second TTL window.
4. Worker resumes browser session, completes form submission, and logs state event.`
  }
];
