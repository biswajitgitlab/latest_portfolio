import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ProjectModal } from './ProjectModal';
import { Briefcase, ArrowRight, ShieldAlert, Cpu, CheckCircle2, Building2, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectsProps {
  onOpenCalendly: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCalendly }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Enterprise ERP', 'Browser Automation', 'Agentic AI', 'Full Stack App'];

  const filteredProjects = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#080c16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRODUCTION CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            4 Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">Case Studies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Deep-dive breakdown of enterprise ERPs, browser automation agents, and AI document verification loops.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0e1529] border border-slate-800/90 hover:border-blue-500/60 transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-blue-950/50"
            >
              <div className="space-y-4">
                
                {/* Header metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-semibold border border-blue-500/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>{project.company}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenge / Solution / Impact Compact Breakdown */}
                <div className="space-y-2.5 pt-2 text-xs">
                  
                  {/* Challenge */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-rose-500/20 text-slate-300 space-y-1">
                    <span className="font-bold text-rose-400 font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <ShieldAlert className="w-3 h-3 text-rose-400" />
                      Challenge:
                    </span>
                    <p className="text-slate-300 line-clamp-2 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-500/20 text-slate-300 space-y-1">
                    <span className="font-bold text-blue-400 font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <Cpu className="w-3 h-3 text-blue-400" />
                      Solution:
                    </span>
                    <p className="text-slate-300 line-clamp-2 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-slate-300 space-y-1">
                    <span className="font-bold text-emerald-400 font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Impact:
                    </span>
                    <p className="text-slate-200 line-clamp-2 leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>

                </div>

              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {project.period}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-white font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer group-hover:bg-blue-600"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal rendering */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenCalendly={onOpenCalendly}
        />

      </div>
    </section>
  );
};
