import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { FAQS } from '../data';
import { FAQItem } from '../types';

type CategoryFilter = 'all' | 'mutual_funds' | 'planning' | 'general';

export default function FAQs() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>(null);

  const filteredFAQs = FAQS.filter((faq) => {
    if (filter === 'all') return true;
    return faq.category === filter;
  });

  const toggleFAQIndex = (id: string) => {
    if (expandedFAQId === id) {
      setExpandedFAQId(null);
    } else {
      setExpandedFAQId(id);
    }
  };

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'mutual_funds': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'planning': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default: return 'bg-white/5 text-slate-305 text-slate-300 border-white/10';
    }
  };

  return (
    <section id="faq" className="py-20 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/25 inline-flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Learning Commons</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Demystifying Mutual Funds & Services
          </h2>
          <p className="mt-4 text-slate-350 text-sm sm:text-base leading-relaxed">
            Investing is simple, but simple does not mean easy. Here are immediate answers to standard structural questions about our processes and compliance foundations.
          </p>
        </div>

        {/* Filter Tags Header */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="faq-filters">
          <button
            onClick={() => { setFilter('all'); setExpandedFAQId(null); }}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => { setFilter('mutual_funds'); setExpandedFAQId(null); }}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer ${
              filter === 'mutual_funds'
                ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            Mutual Funds
          </button>
          <button
            onClick={() => { setFilter('planning'); setExpandedFAQId(null); }}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer ${
              filter === 'planning'
                ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            Asset Planning
          </button>
        </div>

        {/* FAQs Accordion Cards Grid list */}
        <div className="space-y-4" id="faq-accordion-list">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq) => {
              const isExpanded = expandedFAQId === faq.id;
              return (
                <motion.div
                  layout
                  key={faq.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md rounded-xl overflow-hidden"
                >
                  {/* Header Button for Accordion */}
                  <button
                    type="button"
                    onClick={() => toggleFAQIndex(faq.id)}
                    className="w-full flex justify-between items-center text-left p-5 sm:p-6 focus:outline-none select-none hover:bg-white/5 transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                    id={`faq-accordion-header-${faq.id}`}
                  >
                    <div className="flex gap-4 items-start">
                      <HelpCircle className="w-5 h-5 text-slate-300 mt-0.5 flex-shrink-0" />
                      <div>
                        {/* Little label tag */}
                        <span className={`inline-block text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 border rounded-md mb-2 ${getCategoryTheme(faq.category)}`}>
                          {faq.category === 'mutual_funds' ? 'Mutual Fund' : faq.category === 'planning' ? 'Planning' : 'General Support'}
                        </span>
                        
                        <h4 className="font-display font-bold text-white text-sm sm:text-base pr-4">
                          {faq.question}
                        </h4>
                      </div>
                    </div>

                    {/* Arrow toggle indicators */}
                    <div className="text-slate-300 bg-white/5 rounded-lg p-1 border border-white/10">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expandable answer panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-white/2 border-t border-white/5"
                        id={`faq-accordion-body-${faq.id}`}
                      >
                        <div className="p-5 sm:p-6 sm:pl-16 text-slate-300 text-sm leading-relaxed border-l-2 border-emerald-400">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
