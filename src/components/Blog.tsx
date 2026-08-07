import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { BlogModal } from './BlogModal';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { motion } from 'motion/react';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Agentic AI', 'Browser Automation', 'Vision & OCR', 'Full Stack PHP', 'DevOps & Cloud', 'Automation Architecture'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5 text-rose-400" />
            <span>TECHNICAL INSIGHTS & ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            6 Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">Engineering Articles</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            In-depth technical guides written by Biswajit Sarkar on agentic AI loops, browser drivers, and cloud DevOps.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-6 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search articles, keywords, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-[#0e1529] border border-slate-800/90 hover:border-rose-500/50 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-rose-950/30"
            >
              <div className="space-y-3">
                {/* Header Metadata */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {post.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-600 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer group-hover:bg-rose-600"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Blog Post Modal */}
        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />

      </div>
    </section>
  );
};
