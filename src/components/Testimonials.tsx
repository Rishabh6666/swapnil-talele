import { motion } from 'motion/react';
import { Star, Quote, MessageSquareDot } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/25 inline-flex items-center gap-1">
            <MessageSquareDot className="w-3.5 h-3.5" />
            <span>Investor Testimonials</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Testimonials of Wealth Progress
          </h2>
          <p className="mt-4 text-slate-305 text-slate-300 text-sm sm:text-base leading-relaxed">
            Real feedback from professionals, business families, and doctors who partnered with us to organize and compound their financial futures.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between relative hover:border-emerald-500/30 transition-all duration-300"
              id={`testimonial-card-${test.id}`}
            >
              {/* Floating Quote Accent */}
              <div className="absolute top-6 right-6 text-white/5">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              <div>
                {/* 5 star rating */}
                <div className="flex gap-1 mb-5" aria-label="Rating: 5 Stars">
                  {Array.from({ length: test.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
                  ))}
                </div>

                {/* Testimonial body */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="border-t border-white/10 pt-4 mt-6">
                <h4 className="font-display font-bold text-white text-sm">
                  {test.name}
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  {test.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
