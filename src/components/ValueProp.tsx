import React from 'react';
import { VALUE_PROP } from '../data/portfolioData';
import { Bot, Cpu, Zap, Shield, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ValueProp: React.FC = () => {
  return (
    <section id="value-prop" className="py-20 bg-[#070b14] relative border-y border-slate-800/80 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            "<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">{VALUE_PROP.headline}</span>"
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Bridging complex enterprise web applications with cutting-edge agentic workflow automation.
          </p>
        </div>

        {/* 3 Pitch Cards / Sentences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pitch 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#0e1529] border border-slate-800 hover:border-blue-500/50 transition-all group hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center gap-2 justify-center mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
                01. Workflow Orchestration
              </span>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {VALUE_PROP.sentences[0]}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">n8n + Playwright</span>
              <span className="text-blue-400 font-semibold">Sub-second execution</span>
            </div>
          </motion.div>

          {/* Pitch 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#0e1529] border border-slate-800 hover:border-rose-500/50 transition-all group hover:shadow-xl hover:shadow-rose-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-600/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider block mb-2">
                02. Intelligent Document Verification
              </span>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {VALUE_PROP.sentences[1]}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">Qwen2.5 + PaddleOCR</span>
              <span className="text-rose-400 font-semibold">99.8% Precision</span>
            </div>
          </motion.div>

          {/* Pitch 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#0e1529] border border-slate-800 hover:border-indigo-500/50 transition-all group hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block mb-2">
                03. Enterprise Scale & Cloud
              </span>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {VALUE_PROP.sentences[2]}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">AWS ECS + GitLab CI/CD</span>
              <span className="text-indigo-400 font-semibold">Zero-downtime</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
