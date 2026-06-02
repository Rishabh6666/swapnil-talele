import React, { useState } from 'react';
import { Mail, Phone, Instagram, ShieldCheck, ChevronUp, ExternalLink, X, ShieldAlert, Lock, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="app-footer" className="bg-[#030712]/90 backdrop-blur-md text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Main Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-white text-xl sm:text-2xl font-extrabold tracking-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-xs text-emerald-400 font-semibold uppercase mt-0.5 font-mono tracking-widest block">
                {BUSINESS_INFO.designation}
              </span>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Helping families discover stable wealth compounding, clean asset allocation layouts, and customized retirement structures for peace of mind.
            </p>

            {/* ARN Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registration: {BUSINESS_INFO.arn}</span>
            </div>
          </div>

          {/* Quick linkages */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Section Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-emerald-400 transition-colors">
                  Meet the Distributor
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, '#products')} className="hover:text-emerald-400 transition-colors">
                  Offerings Portfolio
                </a>
              </li>
              <li>
                <a href="#growth-visualizer" onClick={(e) => handleLinkClick(e, '#growth-visualizer')} className="hover:text-emerald-400 transition-colors">
                  Compounding Calculator
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="hover:text-emerald-400 transition-colors">
                  FAQ & Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Direct channels links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Quick Channels</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-slate-400 font-bold" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-slate-400 font-bold" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors font-mono text-xs break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Instagram className="w-4 h-4 text-rose-450 text-rose-400" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-serif italic text-rose-300 hover:underline inline-flex items-center gap-1"
                >
                  <span>@svpniltlele</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory disclaimer panel */}
        <div className="mt-8 p-5 bg-white/5 border border-white/5 rounded-xl text-[11px] leading-relaxed text-slate-400 space-y-4" id="regulatory-disclaimer-panel">
          <div>
            <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-1">⚠️ Statutory Risk Disclaimer:</p>
            <p className="italic text-emerald-400 font-medium">
              "Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing."
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-1">📋 Regulatory Disclosure & Non-Advisory Status:</p>
            <p>
              Swapnil Dhanraj Talele is registered with the Association of Mutual Funds in India (AMFI) as an active Mutual Fund Distributor under Registration Number <strong className="text-white">ARN-358795</strong>. 
              In compliance with SEBI circulars and SEBI (Investment Advisers) Regulations, 2013, the services offered here are strictly regular mutual fund distribution and facilitation solutions. We do not hold a SEBI Registered Investment Advisor (RIA) registration and do not offer professional fee-paying investment advice or structured personal financial planning services. Any product recommendations or asset illustrations are for general guidance and allocation match purposes only.
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-1">💸 Commission and Fee Disclosure:</p>
            <p>
              Under standard AMFI guidelines, we do not charge any direct service, setup, or consulting fees to investors. 
              We receive trailing and distribution commissions paid directly by the respective Asset Management Companies (AMCs) for mutual fund schemes facilitated. This commission is built transparently into the regular plan expense ratio of the funds as permitted by SEBI. If desired, clients may request complete scheme-wise commission structures before transaction execution.
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px] mb-1">📊 Information Validity & Performance Disclaimer:</p>
            <p>
              Calculators, hypothetical compounded returns, historical performances, and sample statistics showcased on this website are for general educational purposes. 
              Past performance scheme results are not a guarantee, projection, or a reliable indicator of future returns. Investments carry credit, market, and liquidity risks. Investors are requested to make decisions strictly based on their individual risk assessment profiles.
            </p>
          </div>
        </div>

        {/* Copyright regulatory banner and Scroll-to-top */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Swapnil Dhanraj Talele. All Rights Reserved.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setLegalDoc('privacy')}
                className="hover:text-emerald-400 transition-colors font-medium cursor-pointer underline decoration-white/10 decoration-1 underline-offset-4"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalDoc('terms')}
                className="hover:text-emerald-400 transition-colors font-medium cursor-pointer underline decoration-white/10 decoration-1 underline-offset-4"
              >
                Terms of Use
              </button>
            </div>
          </div>
          
          {/* Scroll back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="bg-white/5 text-slate-300 rounded-lg p-2 hover:bg-white/10 hover:text-white border border-white/10 transition-colors focus:outline-none flex items-center gap-1 cursor-pointer"
            aria-label="Scroll back to top"
            id="footer-scroll-to-top"
          >
            <span>Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

        {/* Developer Credit */}
        <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs text-slate-500">
          <span>Developed by </span>
          <a
            href="https://rishabhbarhate.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 font-medium transition-colors underline decoration-white/10 hover:decoration-emerald-400/30 underline-offset-4"
          >
            Rishabh.dev
          </a>
        </div>

      </div>

      {/* Legal documents fullscreen overlays */}
      <AnimatePresence>
        {legalDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop visual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalDoc(null)}
              className="absolute inset-0 bg-[#020617]/85 backdrop-blur-md"
            />
            
            {/* Modal Dialog container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-[#090f1d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
              id="legal-document-modal"
            >
              {/* Modal header details */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    {legalDoc === 'privacy' ? (
                      <Lock className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Scale className="w-5 h-5 text-emerald-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-lg sm:text-xl">
                      {legalDoc === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
                    </h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono mt-0.5">
                      Legal Compliance Documentation
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setLegalDoc(null)}
                  className="text-slate-400 hover:text-white hover:bg-white/5 p-2 rounded-xl transition-all cursor-pointer"
                  id="close-legal-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable body */}
              <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[calc(85vh-160px)]">
                {legalDoc === 'privacy' ? (
                  <>
                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">1. Introduction & Scope</h4>
                      <p>
                        Swapnil Dhanraj Talele (operating as an AMFI Registered Mutual Fund MFD under registration ARN-358795) takes your financial confidentiality and data privacy with utmost priority. This privacy guidelines statement governs data collected via regular consultation registration on our web application and direct communication channels.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">2. Information Collection & Consent</h4>
                      <p>
                        When you voluntarily submit coordinates in the "Register Consultation" request form on this website, we collect:
                      </p>
                      <ul className="list-disc pl-5 space-y-1.5 text-xs">
                        <li>Your <strong className="text-white">Full Name</strong> for correct greetings and KYC verification lookup.</li>
                        <li>Your <strong className="text-white">Mobile/WhatsApp Number</strong> to trigger direct mutual fund product guides and portfolio allocation coordination.</li>
                        <li>Your <strong className="text-white">E-mail address</strong> to transmit consolidated allocations reports or regular fund fact sheets.</li>
                        <li>Suggested <strong className="text-white">Topics of Interest</strong> or custom described financial targets so we can prepare specialized scheme materials.</li>
                      </ul>
                      <p className="mt-2 text-emerald-400 font-medium italic">
                        By submitting these brief details, you provide explicit, actionable consent to Swapnil Dhanraj Talele to contact you via Voice Calls, SMS, Electronic Mail, or WhatsApp solely regarding Mutual Funds and related distribution offerings.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">3. Data Confidentiality & Security Measures</h4>
                      <p>
                        We operate on a zero-distribution breach policy:
                      </p>
                      <ul className="list-disc pl-5 space-y-1.5 text-xs">
                        <li>We <strong className="text-white">NEVER sell, rent, leak, or share</strong> your coordinates or query notes with third-party telemarketers or external entities.</li>
                        <li>Form transmissions are routed using TLS encryption to secure databases.</li>
                        <li>Client records are accessed only by authorized backend support desk people to structure regular transactions on regular AMFI partner terminals.</li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">4. Information Technology Act Compliance</h4>
                      <p>
                        Our data storage and handling safeguards align with provisions of the Indian Information Technology Act, 2000 and Section 43A guidelines protecting sensitive personal information.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">5. Opt-Out & Deletion Requests</h4>
                      <p>
                        If you wish to terminate active communications, withdraw consent, or request complete removal of your records from our contact books, you can email your written request directly to <strong>{BUSINESS_INFO.email}</strong>. We will complete the removal process within 7 working days.
                      </p>
                    </section>
                  </>
                ) : (
                  <>
                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">1. Regulatory Nature of Site</h4>
                      <p>
                        This portal offers informational showcases. Swapnil Dhanraj Talele is a Mutual Fund Distributor (MFD) offering regular mutual fund plan transactions through platforms like BSE Star MF / NSE NMF. We do NOT hold a fee-charging investment advisory registration (RIA) with SEBI. Any allocation projections or compounding models do not constitute a fee-paying advisory contract.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">2. Limit of Calculators & Illustrations</h4>
                      <p>
                        Our SIP and SWP growth calculator renders mathematical estimations based on inputs provided by you. It displays compound interests based on general assumptions. These figures are illustrative, and must not count as guaranteed future cashflows or static performance commitments under any active fund.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">3. Investment Risk Acknowledgment</h4>
                      <p>
                        Mutual fund units carry market risk. Returns can fluctuate based on scheme performance. Prior performances are not indicative of futuristic results. You must verify if a selected fund aligns with your personal risk tolerance.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">4. Trailing Commissions Information</h4>
                      <p>
                        Asset Management Companies pay trail commissions to regular distributors. These commissions are built into the expense ratio of regular schemes and vary by category. There are absolutely no direct charges or service fees collected directly from the client.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-white text-base">5. Dispute Resolution & Jurisdiction</h4>
                      <p>
                        These terms shall be governed and interpreted under the laws of Republic of India. Any litigation arising or matching website usage or transaction execution complies under the absolute exclusive legal jurisdiction of the competent courts in Dhule/Maharashtra, India.
                      </p>
                    </section>
                  </>
                )}
              </div>

              {/* Modal footer detail */}
              <div className="p-4 bg-white/2 border-t border-white/10 flex justify-between items-center shrink-0">
                <span className="text-[10px] text-slate-400 italic">
                  🛡️ Active registration: {BUSINESS_INFO.arn}
                </span>
                <button
                  type="button"
                  onClick={() => setLegalDoc(null)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  I Understand & Accept
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}
