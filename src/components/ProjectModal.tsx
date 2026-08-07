import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, ShieldAlert, Cpu, ArrowUpRight, Building2, Calendar, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onOpenCalendly: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenCalendly }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d1326] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-semibold border border-blue-500/30">
              {project.category}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              {project.company}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {project.period}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-slate-300 font-medium border-l-2 border-rose-400 pl-3">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>

        {/* Architecture Overview Diagram Line */}
        {project.architectureOverview && (
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-blue-300 space-y-1">
            <div className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-rose-400" />
              <span>System Flow Architecture:</span>
            </div>
            <div className="text-emerald-300 font-medium break-all pt-1">
              {project.architectureOverview}
            </div>
          </div>
        )}

        {/* Challenge / Solution / Impact Grid */}
        <div className="space-y-4">
          
          {/* Challenge */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-rose-400 text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>The Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-blue-400 text-sm">
              <Cpu className="w-4 h-4" />
              <span>The Automation Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>

          {/* Impact */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Business & Operational Impact</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.impact}
            </p>
          </div>

        </div>

        {/* Highlights Checklist */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Key Accomplishments & Engineering Specs:
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenCalendly();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss Similar Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
