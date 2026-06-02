import React from 'react';
import { motion } from 'motion/react';
import { Compass, Receipt, GraduationCap, Palmtree, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { FINANCIAL_SERVICES } from '../data';

export default function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5 text-teal-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'Palmtree':
        return <Palmtree className="w-5 h-5 text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-400" />;
      default:
        return <Compass className="w-5 h-5 text-blue-400" />;
    }
  };

  const getColSpan = (index: number) => {
    // Elegant bento layout spacing or balanced cards
    return 'lg:col-span-6';
  };

  const getCardTheme = (id: string) => {
    switch (id) {
      case 'financial-assessment': return 'border-white/15 hover:border-blue-500/40 bg-white/5 backdrop-blur-md';
      case 'tax-assessment': return 'border-white/15 hover:border-teal-400/40 bg-white/5 backdrop-blur-md';
      case 'child-future': return 'border-white/15 hover:border-purple-400/40 bg-white/5 backdrop-blur-md';
      case 'retirement-planning': return 'border-white/15 hover:border-emerald-500/40 bg-white/5 backdrop-blur-md';
      case 'portfolio-review': return 'border-white/15 hover:border-rose-400/40 bg-white/5 backdrop-blur-md';
      default: return 'border-white/10 bg-white/5 backdrop-blur-md';
    }
  };

  const getIconStyleBg = (id: string) => {
    switch (id) {
      case 'financial-assessment': return 'bg-blue-500/10 text-blue-400 border-blue-500/25';
      case 'tax-assessment': return 'bg-teal-500/10 text-teal-400 border-teal-500/25';
      case 'child-future': return 'bg-purple-500/10 text-purple-400 border-purple-500/25';
      case 'retirement-planning': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25';
      case 'portfolio-review': return 'bg-rose-500/10 text-rose-400 border-rose-500/25';
      default: return 'bg-white/5 text-slate-300 border-white/10';
    }
  };

  const handleConsultTrigger = (e: React.MouseEvent<HTMLAnchorElement>, title: string) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Auto-select or pre-populate the interest dropdown if available
    const interestDropdown = document.getElementById('interest-select') as HTMLSelectElement;
    if (interestDropdown) {
      interestDropdown.value = title;
      // Trigger native change event
      const event = new Event('change', { bubbles: true });
      interestDropdown.dispatchEvent(event);
    }
  };

  return (
    <section id="services" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/25">
            Professional Competencies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Structured Distribution Services
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Distributing investments requires a thorough map of your existing financial ecosystem. We guide you across critical wealth checkpoints to keep your progress healthy.
          </p>
        </div>

        {/* Bento/Balanced Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8" id="services-grid-container">
          {FINANCIAL_SERVICES.map((serv, idx) => (
            <motion.div
              key={serv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-2xl border p-6 sm:p-8 shadow-2xl transition-all duration-300 md:col-span-1 flex flex-col justify-between ${getColSpan(
                idx
              )} ${getCardTheme(serv.id)}`}
              id={`service-card-${serv.id}`}
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${getIconStyleBg(serv.id)}`}>
                    {getIcon(serv.iconName)}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg sm:text-xl">
                    {serv.title}
                  </h3>
                </div>

                {/* Analytical details */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {serv.longDesc}
                </p>

                {/* Service Highlights checklist */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Key Diagnostic Checkpoints</p>
                  {serv.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex gap-2 items-center text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger custom callback */}
              <div className="mt-6 pt-5 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400">AMFI Certified Process</span>
                <a
                  href="#contact"
                  onClick={(e) => handleConsultTrigger(e, serv.title)}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 group"
                  id={`consult-service-btn-${serv.id}`}
                >
                  <span>Request Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
