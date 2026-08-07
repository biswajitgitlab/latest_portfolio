import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, MessageSquare, Send } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 3:00 PM IST');
  const [selectedTopic, setSelectedTopic] = useState<string>('AI Automation & Agentic Loops');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const dates = [
    'Today, 5:00 PM IST',
    'Tomorrow, 11:00 AM IST',
    'Tomorrow, 3:00 PM IST',
    'In 2 Days, 2:00 PM IST',
  ];

  const topics = [
    'AI Automation & Agentic Loops',
    'n8n & Browser Automation (Playwright)',
    'Enterprise ERP & Laravel Modernization',
    'AWS ECS & Cloud DevOps Pipelines',
    'Full-Time / Contract Hiring Inquiry',
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div className="relative w-full max-w-xl bg-[#0d1326] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Call Request Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <span className="text-blue-400 font-semibold">{name}</span>. A calendar invitation for <span className="text-rose-400 font-mono font-semibold">{selectedDate}</span> has been simulated and sent to <span className="text-slate-200 font-mono">{email}</span>.
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Topic: {selectedTopic}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>CALENDLY DISCOVERY CALL</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Schedule a 1-on-1 Consultation
              </h3>
              <p className="text-xs text-slate-400">
                Book a 30-minute technical session with Biswajit Sarkar to discuss AI workflow automation or enterprise PHP ERPs.
              </p>
            </div>

            {/* Topic Picker */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Select Discussion Topic:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTopic(t)}
                    className={`p-2.5 rounded-xl text-xs text-left font-medium transition-all cursor-pointer border ${
                      selectedTopic === t
                        ? 'bg-blue-600/30 border-blue-500 text-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Select Preferred Time Slot:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`p-2 rounded-xl text-xs text-center font-mono transition-all cursor-pointer border ${
                      selectedDate === d
                        ? 'bg-rose-600/30 border-rose-500 text-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="rahul@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-slate-400 block mb-1">Brief Project Note (Optional)</label>
              <textarea
                rows={2}
                placeholder="What workflow or system are you looking to automate?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white font-semibold text-xs shadow-lg flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm Call Schedule</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
