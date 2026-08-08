import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Calendar, Copy, Check, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  onOpenCalendly: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCalendly }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgText, setMsgText] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      const subject = encodeURIComponent(`New Portfolio Inquiry from ${msgName}`);
      const body = encodeURIComponent(`Name: ${msgName}\nEmail: ${msgEmail}\n\nMessage:\n${msgText}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      
      setSentSuccess(true);
    } catch (error) {
      console.error('Error opening email client:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080c16] relative border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Ready to automate your workflows or build high-concurrency enterprise web systems? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Calendly CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Calendly Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/80 via-[#0e1529] to-[#12192f] border border-blue-500/40 shadow-xl space-y-4 glow-blue">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Calendly Call</h3>
                  <p className="text-xs text-slate-300">Book a 30-min strategy & technical session</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer a real-time conversation? Schedule a slot directly on my calendar to discuss your automation pipeline or engineering requirements.
              </p>

              <button
                onClick={onOpenCalendly}
                id="contact-calendly-btn"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-rose-300" />
                <span>Open Calendly Scheduler</span>
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#0e1529] border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-slate-900 text-blue-400 border border-slate-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Email Address</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-mono font-semibold text-slate-200 hover:text-blue-400 truncate">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#0e1529] border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 text-rose-400 border border-slate-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Phone / WhatsApp</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-mono font-semibold text-slate-200 hover:text-rose-400">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Link Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#0e1529] border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#0e1529] border border-slate-800 hover:border-rose-500/50 transition-all flex items-center gap-2.5 text-xs text-slate-300 hover:text-white"
                >
                  <Github className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">GitHub</span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="p-3.5 rounded-xl bg-[#0e1529]/60 border border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Location: {PERSONAL_INFO.location}</span>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1529] border border-slate-800 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-blue-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Have an opening, contract project, or technical question? Leave a note below.
                </p>
              </div>

              {sentSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-2 text-center">
                  <Sparkles className="w-8 h-8 mx-auto text-emerald-400 animate-bounce" />
                  <h4 className="text-base font-bold">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {msgName}. Biswajit Sarkar will respond to your email at <span className="font-mono text-emerald-300">{msgEmail}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={msgName}
                        onChange={(e) => setMsgName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={msgEmail}
                        onChange={(e) => setMsgEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Hi Biswajit, we have an automated document processing project we'd like to discuss..."
                      value={msgText}
                      onChange={(e) => setMsgText(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-rose-500 hover:from-blue-500 hover:to-rose-400 text-white font-semibold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? 'Sending Inquiry...' : 'Send Inquiry to Biswajit'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
