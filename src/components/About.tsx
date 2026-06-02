import { motion } from 'motion/react';
import { ShieldAlert, Users, Compass, BookOpen, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
// @ts-ignore
import swapnilPhoto from '../../images/ChatGPT Image Jun 2, 2026, 04_38_47 PM.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stylized Visual Representation/Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative p-5 bg-white/5 border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm backdrop-blur-md"
            >
              {/* Profile Card Mock Frame */}
              <div className="h-64 bg-[#0d1527] rounded-xl relative flex flex-col justify-end p-6 text-white overflow-hidden shadow-lg border border-white/5 group">
                {/* Profile Image with Overlay */}
                <img
                  src={swapnilPhoto}
                  alt="Swapnil Dhanraj Talele"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 animate-fade-in"
                />
                
                {/* High Contrast Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10" />

                {/* Content */}
                <div className="relative z-10 w-full">
                  <h4 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">Swapnil Talele</h4>
                  <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                    <p className="text-emerald-400 text-xs font-semibold">Mutual Fund Consultant</p>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md text-[10px] font-mono tracking-wider font-bold">
                      ARN-358795
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Active & Fully Certified
                  </span>
                </div>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  Working with individuals, high-earning professionals, and business families to demystify mutual funds and create high-efficiency portfolios in corporate safety covenants.
                </p>

                <div className="w-full h-px bg-white/10 my-1"></div>

                {/* Micro values */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">NISM Certified</span>
                    <span className="text-sm font-semibold text-white">Series V-A Mutual Funds</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">Mumbai / Global Remote</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Informative copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg mb-4 uppercase tracking-widest border border-emerald-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>Know the Distributor</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Empowering Families with Goal-Aligned Wealth Creation
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed text-base">
              Hi, I am <strong>Swapnil Dhanraj Talele</strong>. As an <strong>AMFI Registered Mutual Fund Distributor (ARN-358795)</strong>, my mission is to hand-hold individual investors through the complex, often loud world of finance. I believe that systematic wealth is not created through speculative fast-trading, but through structured, knowledge-backed, goals-aligned investing.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed text-base">
              Whether you are mapping out your child’s educational requirements, planning a peaceful retired lifestyle with stable passive cash flows, or looking to protect hard-earned earnings from creeping tax regimes, I provide the precise structure, data matching, and regulatory compliance to keep your wealth compound healthy.
            </p>

            {/* Structured Pillars of Practice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-500/10 text-blue-400 w-10 h-10 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Regulatory Compliance</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Operate securely under AMFI guidelines with full transparent cost reporting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-emerald-500/10 text-emerald-400 w-10 h-10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Empathetic Goal Matching</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Adapting systems to your personal cash flows, risk tolerances, and life timelines.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick check verification external link disclaimer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div className="text-xs text-slate-400 max-w-md">
                Certified by AMFI Board and SEBI-Compliant. Registered under AMFI guidelines for distributing high-standard retail assets across India.
              </div>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 font-bold inline-flex items-center gap-1 hover:text-emerald-300 hover:underline"
              >
                <span>Verify Credential ARN</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
