import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, FileText } from 'lucide-react';

interface MarkdownOutputModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MARKDOWN_SPEC_CONTENT = `# Biswajit Sarkar — One-Page Portfolio Structure & Copy Spec

**Theme**: Dark Mode (\`#080c16\`), Electric Blue (\`#3b82f6\`) + Coral (\`#ff6b6b\`) accents, professional & high-contrast.

---

## 1. Hero Section

### Exact Copy:
* **Name**: Biswajit Sarkar
* **Title**: Full Stack AI Automation Engineer
* **Animated Typing Effect Options**:
  1. \`Full Stack AI Automation Engineer\`
  2. \`Agentic Workflow Architect\`
  3. \`Laravel & n8n Specialist\`
  4. \`Browser Automation Expert\`
* **2-Line Bio**:
  > Full Stack AI Automation Engineer with 2.5+ years of experience building enterprise ERP systems and intelligent workflow automation loops. Specializing in Laravel, CodeIgniter, n8n orchestration, Playwright browser agents, and self-hosted Qwen2.5/PaddleOCR pipelines on AWS ECS.
* **2 CTAs**:
  - Primary CTA: \`View Case Studies\` (Anchor link to \`#projects\`)
  - Secondary CTA: \`Schedule Call (Calendly)\` (Opens Calendly modal trigger)
* **Status Badge**: \`Available for Full Stack AI & Automation Engineering Roles | 2.5+ Yrs Exp\`

### HTML/CSS Structure Note:
\`\`\`html
<section id="hero" class="relative min-h-screen bg-[#080c16] text-white flex items-center bg-grid-pattern">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-7 space-y-6">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs">...</div>
      <h1 class="text-5xl lg:text-6xl font-extrabold">Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-coral-500">Biswajit Sarkar</span></h1>
      <div class="text-2xl font-mono text-blue-400"><span id="typing-text"></span></div>
      <p class="text-lg text-slate-300 border-l-2 border-blue-500 pl-4 py-1">Full Stack AI Automation Engineer...</p>
      <div class="flex gap-4">
        <a href="#projects" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">View Case Studies</a>
        <button id="calendly-btn" class="bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700">Schedule Call (Calendly)</button>
      </div>
    </div>
    <div class="lg:col-span-5 bg-[#0d1326] border border-slate-800 rounded-2xl p-5 glow-blue font-mono text-xs">
      <!-- Live Agentic Router Terminal Preview -->
    </div>
  </div>
</section>
\`\`\`

---

## 2. Value Proposition Section

### Exact Copy:
* **Headline Pitch**: *"I automate what others do manually."*
* **3-Sentence Pitch Breakdown**:
  1. *"By replacing repetitive human labor with resilient n8n orchestration, Playwright browser agents, and stateful webhooks, I turn multi-hour portal workflows into sub-second background execution."*
  2. *"I integrate self-hosted Qwen2.5 LLMs and PaddleOCR with Tool Router loops to autonomously verify complex government documents (PAN, Aadhaar, Marksheets) with 99.8% precision."*
  3. *"From migrating legacy enterprise PHP frameworks to deploying auto-scaling microservices on AWS ECS Fargate via GitLab CI/CD, I build end-to-end automation systems engineered for high scale and fault tolerance."*

### HTML/CSS Structure Note:
\`\`\`html
<section id="value-prop" class="py-20 bg-[#070b14] border-y border-slate-800">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl font-extrabold text-center text-white">"I automate what others do manually."</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <!-- 3 Pitch Cards -->
      <div class="p-6 rounded-2xl bg-[#0e1529] border border-slate-800 hover:border-blue-500/50">...</div>
      <div class="p-6 rounded-2xl bg-[#0e1529] border border-slate-800 hover:border-rose-500/50">...</div>
      <div class="p-6 rounded-2xl bg-[#0e1529] border border-slate-800 hover:border-indigo-500/50">...</div>
    </div>
  </div>
</section>
\`\`\`

---

## 3. Skills Section (4-Category Grid with Tooltips)

### Exact Copy:
1. **Core Backend & Web** (\`Server\` Icon)
   - *PHP (7.x/8.x)*: "Core backend development language used across enterprise ERP applications and RESTful APIs."
   - *Laravel*: "Building scalable MVC architecture, queue workers, artisan commands, and custom API endpoints."
   - *CodeIgniter 3 & 4*: "Migrated massive legacy CI3 monolithic applications to modern CI4 architecture with enhanced performance."
   - *Filament PHP*: "Rapidly crafting admin panels, custom resources, and complex dashboard interfaces."
   - *Vue.js & JavaScript*: "Crafting responsive single-page interfaces, dynamic form states, and interactive dashboards."
   - *MySQL & Query Tuning*: "Schema design, indexing strategies, query execution plan optimization, and RBAC implementation."

2. **Workflow & Browser Automation** (\`Workflow\` Icon)
   - *n8n Workflow Engine*: "Author of 10+ production-grade n8n workflows managing candidate onboarding, contracts, and notifications."
   - *Playwright & Puppeteer*: "Headless browser agents handling complex multi-stage portal interactions, session persistence, and cookies."
   - *State Machines & Webhooks*: "Distributed locking, retry logic, session management, and asynchronous callback pipelines."
   - *Human-in-the-Loop*: "CAPTCHA and OTP interception workflows allowing seamless manual escalation when required."
   - *Cron Jobs & Queues*: "Distributed job scheduling for background data sync and batch document processing."

3. **Agentic AI & Vision/OCR** (\`Brain\` Icon)
   - *Agentic AI Loops*: "AI Agent → Parse Tool Call → Tool Router → Format Tool Response architecture inside n8n and Python."
   - *LLM Guardrails*: "Self-consistency checks, structured JSON enforcement, and misrouting prevention mechanisms."
   - *Qwen2.5 Vision/Text LLM*: "Self-hosted multimodal LLMs fine-tuned for structured extraction from government identity cards."
   - *PaddleOCR*: "High-speed bounding-box OCR engine for extracting text from noisy scanned marksheets and certificates."
   - *Prompt Engineering*: "System prompt design, tool definition schemas, and zero/few-shot chain execution."

4. **DevOps & Cloud Infrastructure** (\`Cloud\` Icon)
   - *AWS ECS Fargate*: "Serverless container execution for zero-maintenance scaling of Laravel and worker tasks."
   - *AWS S3 & Presigned URLs*: "Secure document storage with strict access permissions and temporary upload/download URLs."
   - *Docker & Containerization*: "Dockerizing PHP, Node.js, and Python services for identical local and staging environments."
   - *GitLab CI/CD*: "Automated test suites, image building, container registry pushes, and blue/green ECS deployments."
   - *REST APIs & Security*: "JWT/Bearer auth, rate limiting, CORS configuration, and RBAC access control."

### HTML/CSS Structure Note:
\`\`\`html
<section id="skills" class="py-24 bg-[#080c16]">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="p-6 rounded-2xl bg-[#0e1529] border border-slate-800">
      <h3 class="text-lg font-bold text-white mb-4">Core Backend & Web</h3>
      <div class="grid grid-cols-2 gap-3">
        <!-- Skill Item with Hover Tooltip -->
        <div class="relative p-3 rounded-xl bg-[#090e1a] border border-slate-800 group">
          <span class="text-xs font-semibold text-slate-200">PHP (7.x / 8.x)</span>
          <div class="hidden group-hover:block absolute bottom-full mb-2 p-3 bg-slate-900 border border-blue-500 text-xs">Tooltip copy</div>
        </div>
      </div>
    </div>
  </div>
</section>
\`\`\`

---

## 4. Projects Section (4 Production Case Studies)

### 1. NAPS/NATS Apprenticeship Management System
- **Category**: Enterprise ERP
- **Challenge**: Managing over 100,000+ candidate onboardings and contract generations manually across government portals (NAPS/NATS) led to severe processing bottlenecks and delays.
- **Solution**: Built an enterprise ERP backend using Laravel, CodeIgniter 4, and Filament PHP, migrating a legacy CI3 codebase. Implemented RESTful APIs with RBAC authentication.
- **Impact**: Streamlined candidate onboarding throughput by 80%, automated contract lifecycle tracking, and ensured zero-downtime database performance under peak load.

### 2. TPA Webhook Automation & Browser Agent Orchestrator
- **Category**: Browser Automation
- **Challenge**: Government portals lack direct REST APIs for Beneficiary ID (Ben ID) generation and contract verification, requiring manual portal data entry.
- **Solution**: Designed a headless browser automation agent powered by Playwright and Puppeteer orchestrated through n8n state machines with distributed locking and Human-in-the-Loop CAPTCHA/OTP escalation.
- **Impact**: Eliminated 95% of manual portal data entry work, reducing processing time per contract from 15 minutes to 12 seconds.

### 3. Agentic AI Onboarding Assistant & Document Verification
- **Category**: Agentic AI
- **Challenge**: Candidate document verification (PAN card, Aadhaar, marksheets) involved high human review costs, typos in manual entry, and LLM misclassifications.
- **Solution**: Constructed an Agentic AI loop (AI Agent → Parse Tool Call → Tool Router → Format Tool Response) in n8n. Deployed self-hosted Qwen2.5 Vision LLM and PaddleOCR with self-consistency guardrails.
- **Impact**: Achieved 99.8% tool routing accuracy and cut document processing costs by 85%.

### 4. LMS & Carenetram Healthcare Platform
- **Category**: Full Stack App
- **Challenge**: Healthcare and learning management platforms required secure document access controls and seamless file streaming for medical trainees.
- **Solution**: Built modern web applications with Laravel, Filament PHP, and Vue.js. Implemented AWS S3 integration with presigned URLs and containerized deployments via AWS ECS Fargate.
- **Impact**: Delivers resilient access for thousands of active learners with encrypted S3 media links.

### HTML/CSS Structure Note:
\`\`\`html
<section id="projects" class="py-24 bg-[#080c16]">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="p-6 rounded-2xl bg-[#0e1529] border border-slate-800 hover:border-blue-500">
      <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">Enterprise ERP</span>
      <h3 class="text-xl font-bold text-white mt-2">NAPS/NATS Apprenticeship Management System</h3>
      <div class="space-y-2 mt-4 text-xs">
        <div class="p-3 bg-slate-900 border border-rose-500/30"><strong>Challenge:</strong> ...</div>
        <div class="p-3 bg-slate-900 border border-blue-500/30"><strong>Solution:</strong> ...</div>
        <div class="p-3 bg-slate-900 border border-emerald-500/30"><strong>Impact:</strong> ...</div>
      </div>
    </div>
  </div>
</section>
\`\`\`

---

## 5. Stats Section (6 Animated Counters)

1. **2.5+** | *Years Experience* (Full Stack & Automation Engineering)
2. **10+** | *Production n8n Workflows* (Automating Candidate & Portal Ops)
3. **100k+** | *Documents Processed* (PAN, Aadhaar & Marksheets Verified)
4. **99.8%** | *Tool Routing Accuracy* (Agentic Loop & Guardrail Precision)
5. **85%** | *Manual Effort Reduced* (Sub-second Background Execution)
6. **4+** | *Enterprise Portals Automated* (NAPS, NATS, TPA & Carenetram)

### HTML/CSS Structure Note:
\`\`\`html
<section id="stats" class="py-20 bg-[#070b14] border-y border-slate-800">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    <div class="p-5 rounded-2xl bg-[#0e1529] border border-slate-800 text-center">
      <div class="text-3xl font-extrabold text-white font-mono">2.5<span class="text-rose-400">+</span></div>
      <div class="text-xs font-bold text-slate-200 mt-2">Years Experience</div>
    </div>
  </div>
</section>
\`\`\`

---

## 6. Blog Section (6 Article Titles & Descriptions)

1. **Building Agentic AI Loops in n8n: Tool Routers & LLM Guardrails**
   - *Description*: A deep dive into constructing an AI Agent → Parse Tool Call → Tool Router loop in n8n. Learn how to prevent LLM tool misrouting and structure deterministic output parsing for production workflows.
2. **Automating Government Portals with Playwright, Puppeteer & Webhook State Machines**
   - *Description*: How to bypass portal anti-automation bottlenecks by engineering stateful webhook orchestrators, session persistence with Redis/MySQL, and distributed lock handlers.
3. **Self-Hosting Qwen2.5 Vision LLM & PaddleOCR for High-Speed Document Verification**
   - *Description*: Combining bounding-box PaddleOCR with Qwen2.5 Vision models to verify identity documents (PAN cards, Aadhaar, marksheets) accurately without exposing PII to external cloud APIs.
4. **Migrating Legacy CodeIgniter 3 to CI4 and Filament in Production Enterprise ERPs**
   - *Description*: Lessons learned modernizing a multi-decade monolithic PHP codebase into modular CodeIgniter 4 services and Filament admin interfaces.
5. **Zero-Downtime AWS ECS Fargate Deployments with GitLab CI/CD & S3 Presigned URLs**
   - *Description*: Step-by-step architecture for automated container builds, Amazon ECR image tagging, ECS Fargate task definition updating, and secure asset distribution.
6. **Handling CAPTCHA & Human-in-the-Loop OTP Verification in Automated Workflows**
   - *Description*: Designing graceful human intervention gates inside fully automated n8n and Playwright pipelines when encountering unexpected portal security checkpoints.

---

## 7. Contact Section

### Exact Copy:
* **Email**: \`biswajitsarkar179789@gmail.com\`
* **Phone / WhatsApp**: \`+91 7863955493\`
* **LinkedIn**: \`linkedin.com/in/biswajit-sarkar-4296b1246\`
* **GitHub**: \`github.com/biswajitgitlab\`
* **Portfolio**: \`biswajitgitlab.github.io/portfolio\`
* **Location**: \`Alipurduar, West Bengal, India\`
* **Calendly CTA**: \`Schedule Call (Calendly)\`

---

## 8. Footer Section

### Exact Copy:
* *"Built with React, Tailwind, Motion, and lots of coffee ☕"*
* Copyright © 2026 Biswajit Sarkar. All rights reserved.
`;

export const MarkdownOutputModal: React.FC<MarkdownOutputModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(MARKDOWN_SPEC_CONTENT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([MARKDOWN_SPEC_CONTENT], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "Biswajit_Sarkar_Portfolio_Spec.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d1326] border border-blue-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Full Markdown Copy & Structure Spec</h3>
              <p className="text-xs text-slate-400">Complete portfolio structure and copy breakdown</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Copied Markdown!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Raw Markdown</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer border border-slate-700"
          >
            <Download className="w-4 h-4 text-rose-400" />
            <span>Download .md File</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="p-5 rounded-xl bg-[#080c16] border border-slate-800 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed max-h-[55vh] overflow-y-auto whitespace-pre-wrap select-text">
          {MARKDOWN_SPEC_CONTENT}
        </div>

      </div>
    </div>
  );
};
