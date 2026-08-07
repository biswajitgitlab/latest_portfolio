import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/portfolioData';
import { Briefcase, Workflow, FileCheck, Target, Zap, Server, BarChart3 } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const getStatIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-400" />;
    case 'Workflow': return <Workflow className="w-6 h-6 text-rose-400" />;
    case 'FileCheck': return <FileCheck className="w-6 h-6 text-emerald-400" />;
    case 'Target': return <Target className="w-6 h-6 text-purple-400" />;
    case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
    case 'Server': return <Server className="w-6 h-6 text-sky-400" />;
    default: return <BarChart3 className="w-6 h-6 text-blue-400" />;
  }
};

interface CounterProps {
  value: number;
  suffix: string;
  inView: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  const display = Number.isInteger(value)
    ? Math.round(count)
    : count.toFixed(1);

  return (
    <span className="font-extrabold tracking-tight text-white font-mono">
      {display}
      <span className="text-rose-400 ml-0.5">{suffix}</span>
    </span>
  );
};

export const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" ref={ref} className="py-20 bg-[#070b14] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>MEASURABLE IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Proven Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">Metrics</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Quantifiable outcomes delivered across enterprise government ERP systems and AI workflow pipelines.
          </p>
        </div>

        {/* 6 Animated Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#0e1529] border border-slate-800/90 hover:border-blue-500/50 transition-all text-center flex flex-col items-center justify-between group hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-3 group-hover:scale-110 transition-transform">
                {getStatIcon(stat.icon)}
              </div>

              <div className="text-2xl sm:text-3xl my-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>

              <div className="mt-2 space-y-1">
                <div className="text-xs font-bold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
