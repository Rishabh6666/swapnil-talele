import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-transparent"
    >
      {/* Decorative Blur Spheres (Complement current background system) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* AMFI Compliance & Trust pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold mb-6 shadow-sm"
              id="hero-trust-badge"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>AMFI Registered Mutual Fund Distributor</span>
              <span className="w-1 h-1 bg-emerald-500/30 rounded-full"></span>
              <span className="font-mono text-[11px] text-emerald-300 font-medium">#{BUSINESS_INFO.arn}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
              id="hero-headline"
            >
              Secure Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Financial Future
              </span>{' '}
              with Expert Guidance
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
              id="hero-subheadline"
            >
              Mutual Funds, Fixed Deposits, Bonds, Retirement Planning, and Personalized Financial Assessment tailored strictly to your goals.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              id="hero-actions"
            >
              <a
                href="#contact"
                onClick={scrollToContact}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl text-center shadow-lg shadow-emerald-500/30 transition-all duration-200 inline-flex items-center justify-center gap-2 hover:shadow-emerald-500/45"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl text-center backdrop-blur-md transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-mono">Call +91 98336 74743</span>
              </a>
            </motion.div>

            {/* Blockquote with Benjamin Franklin's tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl max-w-xl shadow-lg border-l-4 border-l-emerald-500 backdrop-blur-md"
              id="hero-quote-card"
            >
              <p className="text-slate-200 italic font-medium text-sm sm:text-base leading-relaxed">
                "{BUSINESS_INFO.tagline}"
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-4 h-px bg-white/20"></span>
                <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  {BUSINESS_INFO.taglineAuthor}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Financial Visuals */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Asset Allocation Indicator Visual Card */}
              <div className="absolute -top-4 -left-4 bg-emerald-500 text-white p-2.5 rounded-xl shadow-lg shadow-emerald-500/20 border border-emerald-400">
                <Award className="w-5 h-5" />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-3.5 py-1.5 rounded-xl shadow-lg font-mono text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Wealth Engine Verified</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white border-b border-white/10 pb-4 flex justify-between items-center">
                <span>Healthy Asset Layout</span>
                <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">Compounding Focus</span>
              </h3>

              {/* Dynamic Mock Chart Blocks */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Equities & Mutual Funds</span>
                    <span className="text-blue-400">60% (Growth Engine)</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Fixed Income / Bonds & FDs</span>
                    <span className="text-emerald-400">30% (Safety Cushion)</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '30%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Liquid / Emergency Buffer</span>
                    <span className="text-amber-400">10% (Security Cover)</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '10%' }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Micro interactive info box */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Compounded Future Value</p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-white">₹44,05,091</p>
                </div>
                <button
                  onClick={handleLearnMore}
                  className="text-xs bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-2 px-3.5 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Build Yours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[10px] text-slate-400 italic">Based on ₹10k/month SIP over 15 yrs @ 12% est. return</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
