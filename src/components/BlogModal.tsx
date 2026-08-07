import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { X, Clock, Calendar, Tag, ArrowLeft, BookOpen, Share2, Check } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [post]);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        {/* Article Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono font-semibold border border-rose-500/30">
              {post.category}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            {post.title}
          </h2>

          <p className="text-sm text-slate-300 border-l-2 border-blue-500 pl-3 py-1 italic">
            {post.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1 border-y border-slate-800 py-3">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-slate-800">
              #{tag}
            </span>
          ))}
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 font-normal">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-lg font-bold text-white pt-2 border-b border-slate-800 pb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('* ')) {
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1 text-slate-300">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i}>{item.replace('* ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={handleShare}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-blue-400" />
                <span>Share Article</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
          >
            Back to Articles
          </button>
        </div>

      </div>
    </div>
  );
};
