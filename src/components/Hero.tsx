import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Calendar, Github, Linkedin, Mail, Sparkles, Terminal, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenCalendly: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalendly }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
          setSpeed(50);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
          setSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, speed]);

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center bg-grid-pattern overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-medium backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 font-mono">2.5+ Yrs Exp</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">{PERSONAL_INFO.name}</span>
              </h1>

              {/* Animated Typing Role */}
              <div className="h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold font-mono text-blue-400 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-rose-400 inline" />
                  <span>{displayText}</span>
                  <span className="animate-pulse text-rose-400">|</span>
                </span>
              </div>
            </motion.div>

            {/* 2-line Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl border-l-2 border-blue-500/50 pl-4 py-1"
            >
              {PERSONAL_INFO.heroBio}
            </motion.p>

            {/* Key Stack Quick Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['Laravel', 'n8n Orchestration', 'Playwright', 'Qwen2.5 Vision', 'AWS ECS', 'Filament', 'PaddleOCR'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* 2 CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                id="hero-cta-projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 flex items-center gap-2 group transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCalendly}
                id="hero-cta-calendly"
                className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-700/80 shadow-lg flex items-center gap-2 group transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                <span>Schedule Call (Calendly)</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 text-slate-400 text-sm"
            >
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Visual Terminal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#0d1326] border border-slate-800 shadow-2xl p-5 glow-blue overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>agentic-router.n8n</span>
                </div>
              </div>

              {/* Code/Workflow Terminal Snippet */}
              <div className="font-mono text-xs space-y-2.5 text-slate-300">
                <div className="text-slate-500">// Production Agentic Loop Architecture</div>
                
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-blue-300 font-semibold">[INPUT]</span>
                  <span className="text-slate-300">Candidate Document (PAN / Aadhaar)</span>
                </div>

                <div className="pl-4 py-1.5 border-l border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-rose-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Tool Router Node Evaluating...</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">↳ Mode: Qwen2.5 Multimodal Vision + PaddleOCR</div>
                  <div className="text-slate-400 text-[11px]">↳ Guardrails: Self-consistency + JSON Schema</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-[11px] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Status: 200 OK
                    </span>
                    <span className="text-slate-400">Execution: 0.12s</span>
                  </div>
                  <div className="text-slate-300 text-[10px]">
                    {"{ \"status\": \"verified\", \"ben_id\": \"NAPS-882910\", \"accuracy\": 0.998 }"}
                  </div>
                </div>

                {/* Live Stats Snippet */}
                <div className="pt-2 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-slate-400">Workflows</div>
                    <div className="text-blue-400 font-bold">10+ Active n8n</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-slate-400">Verified Docs</div>
                    <div className="text-rose-400 font-bold">100,000+</div>
                  </div>
                </div>

              </div>

              {/* Company pill */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Current Role:</span>
                <span className="text-slate-200 font-medium">{PERSONAL_INFO.company}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
