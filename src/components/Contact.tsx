import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  MessageCircleCode,
  Loader2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Mutual Funds',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please supply your full name.';
    }
    
    // Simple phone regex check (Indian 10-digit number is standard)
    const phoneNoSymbols = formData.phone.replace(/[\s\-+]/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile tracking number is required.';
    } else if (phoneNoSymbols.length < 10) {
      errors.phone = 'Please enter a valid 10-digit contact number.';
    }

    if (!formData.email.trim()) {
      errors.email = 'E-mail address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please specify a real e-mail format.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear validation error dynamically on keystroke
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm() && !isSubmitting) {
      setIsSubmitting(true);
      
      // Simulate fully operational secure API endpoint transmission
      setTimeout(() => {
        const newLead = {
          id: 'lead-' + Date.now(),
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          interest: formData.interest,
          message: formData.message.trim(),
          submittedAt: new Date().toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }),
          status: 'New'
        };

        const savedLeads = localStorage.getItem('swapnil_consultation_leads');
        let currentLeads = [];
        if (savedLeads) {
          try {
            currentLeads = JSON.parse(savedLeads);
          } catch (err) {}
        }
        const updated = [newLead, ...currentLeads];
        localStorage.setItem('swapnil_consultation_leads', JSON.stringify(updated));

        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  const triggerDirectWhatsApp = () => {
    // Generate helpful custom message based on currently entered form data
    const intro = `Hi Swapnil, I am ${formData.fullName || 'visiting your portfolio website'}. `;
    const interestText = `I would like to get a consultation regarding "${formData.interest}". `;
    const messagePart = formData.message ? `My query is: ${formData.message}` : 'Please guide me on current compounding strategies.';
    
    const encodedMessage = encodeURIComponent(intro + interestText + messagePart);
    const customWaLink = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodedMessage}`;
    window.open(customWaLink, '_blank', 'noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Call details, Location signals, AMFI info */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/25 inline-block">
                Establish Connection
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
                Schedule Your Free Financial Review
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly on your own terms. We can coordinate a Google Meet virtual consult, a detailed telephonic breakdown, or handle files and calculations live on WhatsApp.
              </p>

              {/* Direct channels links */}
              <div className="space-y-6 mt-10">
                
                {/* Dial channel */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="glass-card p-4 flex gap-4 transition-all duration-300 hover:border-blue-500/30 group"
                  id="direct-phone-channel"
                >
                  <div className="flex-shrink-0 bg-blue-500/10 text-blue-400 border border-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Voice Consultation</span>
                    <span className="text-base font-bold text-white font-mono tracking-tight group-hover:text-blue-300 transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">Avail of direct call support (10 AM to 7 PM IST)</span>
                  </div>
                </a>

                {/* Email channel */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="glass-card p-4 flex gap-4 transition-all duration-300 hover:border-emerald-500/30 group"
                  id="direct-email-channel"
                >
                  <div className="flex-shrink-0 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Electronic Mail</span>
                    <span className="text-base font-bold text-white font-mono tracking-tight group-hover:text-emerald-450 transition-colors">
                      {BUSINESS_INFO.email}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">Responses within 1 business day guaranteed.</span>
                  </div>
                </a>

                {/* WhatsApp Pre-chat pill */}
                <button
                  type="button"
                  onClick={triggerDirectWhatsApp}
                  className="w-full glass-card p-4 flex gap-4 transition-all duration-300 hover:border-emerald-500/50 text-left cursor-pointer group border-emerald-500/20"
                  id="direct-whatsapp-channel"
                >
                  <div className="flex-shrink-0 bg-emerald-500 text-white w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-emerald-500/30">
                    {/* SVG representing professional message circles */}
                    <MessageCircleCode className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">WhatsApp Workspace</span>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    </div>
                    <span className="text-base font-bold text-emerald-400 font-mono tracking-tight">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5 font-sans">Submit files, check calculators, or text issues directly</span>
                  </div>
                </button>

              </div>
            </div>

            {/* Compliance Badge card */}
            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <div className="flex gap-2 items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white uppercase tracking-widest font-mono">AMFI KYC Compliant</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400 mt-2">
                Swapnil Talele operates with clean registration records certified by AMFI Board and NISM certifications, distributing strictly in risk custody structures.
              </p>
            </div>
          </div>

          {/* Right Column: Contact interactive Form card */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-md rounded-2xl relative" id="contact-form-container">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6 sm:p-10"
                  id="form-success-card"
                >
                  {/* Icon wrap */}
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 animate-pulse" />
                  </div>

                  <h3 className="font-display font-extrabold text-white text-2xl mb-3">
                    Consultation Request Lodged!
                  </h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mb-6">
                    Thank you, <strong>{formData.fullName}</strong>. Your query for <strong>{formData.interest}</strong> has been received by Swapnil Talele. He will review your parameters and reach back to you via <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> soon.
                  </p>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-left text-xs mb-8 w-full max-w-sm">
                    <span className="text-slate-400 font-bold block uppercase mb-1">Recap parameters:</span>
                    <div className="space-y-1 text-slate-300 font-mono">
                      <p>• Mobile: {formData.phone}</p>
                      <p>• Interest: {formData.interest}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap justify-center font-bold">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          interest: 'Mutual Funds',
                          message: '',
                        });
                      }}
                      className="border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      Fill New Query
                    </button>
                    <button
                      type="button"
                      onClick={triggerDirectWhatsApp}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/25"
                    >
                      <span>WhatsApp Chat</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="consultation-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="border-b border-white/10 pb-4 mb-2 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg sm:text-xl">
                        Consultation Registration Form
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">Please provide your coordinates below to plan allocations.</p>
                    </div>
                  </div>

                  {/* 1. Full name input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      disabled={isSubmitting}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rajesh Kumar Mehta"
                      className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-sm transition-all text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                        formErrors.fullName
                          ? 'border-red-500/50 focus:ring-red-500/30'
                          : 'border-white/10 focus:ring-emerald-500/30 focus:border-emerald-500/50'
                      }`}
                    />
                    {formErrors.fullName && (
                      <span className="text-red-400 text-xs font-medium mt-0.5">{formErrors.fullName}</span>
                    )}
                  </div>

                  {/* 2. Phone / Email Dual container */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Phone / WhatsApp No <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 98223 XXXXX"
                        className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-sm transition-all text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          formErrors.phone
                            ? 'border-red-500/50 focus:ring-red-500/30'
                            : 'border-white/10 focus:ring-emerald-500/30 focus:border-emerald-500/50'
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="text-red-400 text-xs font-medium mt-0.5">{formErrors.phone}</span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        E-mail Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rajesh@gmail.com"
                        className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-sm transition-all text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          formErrors.email
                            ? 'border-red-500/50 focus:ring-red-500/30'
                            : 'border-white/10 focus:ring-emerald-500/30 focus:border-emerald-500/50'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-red-400 text-xs font-medium mt-0.5">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* 3. Interest Selection dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="interest-select" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Topic of Interest / Asset Class
                    </label>
                    <select
                      id="interest-select"
                      name="interest"
                      disabled={isSubmitting}
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a0f1d] border border-white/10 px-4 py-3 rounded-xl text-sm transition-all text-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 focus:border-emerald-500/50"
                    >
                      <option className="bg-[#0e1628] text-white" value="Mutual Funds">Mutual Fund Allocations (SIP / Lumpsum)</option>
                      <option className="bg-[#0e1628] text-white" value="Fixed Deposits">Corporate Fixed Deposits</option>
                      <option className="bg-[#0e1628] text-white" value="Bonds">Bonds & NCD Yields</option>
                      <option className="bg-[#0e1628] text-white" value="Financial Assessment">Complete Financial Assessment Review</option>
                      <option className="bg-[#0e1628] text-white" value="Tax Assessment">Tax Minimization Audit</option>
                      <option className="bg-[#0e1628] text-white" value="Child Education Planning">Child Future Higher Education Modeling</option>
                      <option className="bg-[#0e1628] text-white" value="Retirement Security Strategy">Peaceful Retirement SWP Income Models</option>
                    </select>
                  </div>

                  {/* 4. Message details item */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message-textarea" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Describe Your Financial Target (Optional)
                    </label>
                    <textarea
                      id="message-textarea"
                      name="message"
                      rows={4}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. I want to build a ₹45L corpus for my son's study over 12 years. Please advise which funds are suitable..."
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm transition-all text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 focus:border-emerald-500/50"
                    ></textarea>
                  </div>

                  {/* Action row buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-grow bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/40 disabled:text-emerald-300/60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/25 text-center inline-flex items-center justify-center gap-1.5 cursor-pointer"
                      id="submit-register-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Transmitting details safely...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Query Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={triggerDirectWhatsApp}
                      className="bg-white/5 text-emerald-400 border border-emerald-500/30 font-bold py-3.5 px-5 rounded-xl transition-all text-center inline-flex items-center justify-center gap-1.5 cursor-pointer hover:border-emerald-500/50 hover:bg-white/10"
                      id="submit-whatsapp-direct-btn"
                    >
                      <MessageCircleCode className="w-4 h-4 text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>

                  <div className="text-slate-400 text-[10px] text-center italic mt-2">
                    * Submitting complies with Indian anti-spam laws. Swapnil Talele will only address requested assets.
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
