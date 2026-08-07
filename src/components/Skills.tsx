import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Skill, SkillCategory } from '../types';
import { 
  Server, Workflow, Brain, Cloud, Code, Layers, Cpu, Layout, Globe, Database,
  GitBranch, Bot, RefreshCw, ShieldAlert, Clock, Sparkles, ShieldCheck, Eye,
  FileText, MessageSquare, HardDrive, Box, GitCommit, Lock, CheckCircle2, Info
} from 'lucide-react';
import { motion } from 'motion/react';

// Icon mapping helper
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
    case 'Workflow': return <Workflow className="w-5 h-5 text-rose-400" />;
    case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
    case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
    case 'Code': return <Code className="w-4 h-4 text-blue-400" />;
    case 'Layers': return <Layers className="w-4 h-4 text-blue-400" />;
    case 'Cpu': return <Cpu className="w-4 h-4 text-blue-400" />;
    case 'Layout': return <Layout className="w-4 h-4 text-sky-400" />;
    case 'Globe': return <Globe className="w-4 h-4 text-emerald-400" />;
    case 'Database': return <Database className="w-4 h-4 text-amber-400" />;
    case 'GitBranch': return <GitBranch className="w-4 h-4 text-rose-400" />;
    case 'Bot': return <Bot className="w-4 h-4 text-rose-400" />;
    case 'RefreshCw': return <RefreshCw className="w-4 h-4 text-indigo-400" />;
    case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-amber-400" />;
    case 'Clock': return <Clock className="w-4 h-4 text-slate-400" />;
    case 'Sparkles': return <Sparkles className="w-4 h-4 text-purple-400" />;
    case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    case 'Eye': return <Eye className="w-4 h-4 text-purple-400" />;
    case 'FileText': return <FileText className="w-4 h-4 text-sky-400" />;
    case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-rose-400" />;
    case 'HardDrive': return <HardDrive className="w-4 h-4 text-sky-400" />;
    case 'Box': return <Box className="w-4 h-4 text-blue-400" />;
    case 'GitCommit': return <GitCommit className="w-4 h-4 text-orange-400" />;
    case 'Lock': return <Lock className="w-4 h-4 text-emerald-400" />;
    default: return <Code className="w-4 h-4 text-blue-400" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredCategories = selectedCategoryId === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === selectedCategoryId);

  return (
    <section id="skills" className="py-24 bg-[#080c16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Core Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">Architecture</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Hover or tap any skill card to inspect real-world production implementation context.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategoryId === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories (4)
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategoryId === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {getSkillIcon(cat.icon)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#0e1529] border border-slate-800/90 shadow-xl relative group hover:border-slate-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/60">
                  {getSkillIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List in Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative p-3 rounded-xl bg-[#090e1a] border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all cursor-pointer group/skill"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-slate-800/80">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className="text-xs font-semibold text-slate-200 group-hover/skill:text-blue-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      {skill.isPrimary && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          Core
                        </span>
                      )}
                    </div>

                    {/* Level Indicator */}
                    <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Proficiency:</span>
                      <span className="font-mono text-emerald-400 font-semibold">{skill.level}</span>
                    </div>

                    {/* Hover Tooltip Overlay */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute bottom-full left-0 right-0 mb-2 z-30 p-3 rounded-xl bg-slate-900 border border-blue-500/40 text-slate-200 text-xs shadow-2xl shadow-blue-950/80 pointer-events-none"
                      >
                        <div className="flex items-center gap-1.5 font-bold text-blue-400 mb-1">
                          <Info className="w-3.5 h-3.5 text-rose-400" />
                          <span>Production Usage:</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-300 font-normal">
                          {skill.tooltip}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
