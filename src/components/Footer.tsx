import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Heart, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST Format (Alipurduar, West Bengal)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#050811] text-slate-400 text-xs border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Biswajit Sarkar</span>
              <span className="text-xs text-slate-500 font-mono">Full Stack AI Automation Engineer</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#value-prop" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#stats" className="hover:text-white transition-colors">Stats</a>
            <a href="#blog" className="hover:text-white transition-colors">Articles</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Live Clock & Back To Top */}
          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="text-emerald-400 font-bold mr-1.5">●</span>
              {currentTime || 'Alipurduar, WB, India'}
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          
          {/* Requested Exact Copy: Built with [tech] and lots of coffee */}
          <p className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
            <span>Built with</span>
            <span className="text-blue-400 font-semibold">React</span>,
            <span className="text-sky-400 font-semibold">Tailwind CSS</span>,
            <span className="text-rose-400 font-semibold">Motion</span>
            <span>and lots of coffee</span>
            <Coffee className="w-3.5 h-3.5 text-amber-500 inline" />
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white">
              <Github className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
