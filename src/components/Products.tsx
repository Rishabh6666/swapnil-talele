import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, ShieldCheck, FileCheck, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import { InvestmentProduct } from '../types';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<InvestmentProduct | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-purple-400" />;
      default:
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
    }
  };

  const getBorderColor = (id: string) => {
    switch (id) {
      case 'mutual-funds': return 'hover:border-blue-500/50';
      case 'fixed-deposits': return 'hover:border-emerald-500/50';
      case 'bonds': return 'hover:border-purple-500/50';
      default: return 'hover:border-blue-500/50';
    }
  };

  const getIconBg = (id: string) => {
    switch (id) {
      case 'mutual-funds': return 'bg-blue-500/10 border-blue-500/20';
      case 'fixed-deposits': return 'bg-emerald-500/10 border-emerald-500/20';
      case 'bonds': return 'bg-purple-500/10 border-purple-500/20';
      default: return 'bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <section id="products" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/25">
            Investment Offerings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Curated Wealth Instruments
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            As a registered distributor, we provide direct access to premium regulated asset classes in India. We do not manufacture products; we match you to the highest quality options.
          </p>
        </div>

        {/* Product Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className={`glass-card p-6 sm:p-8 flex flex-col justify-between ${getBorderColor(
                prod.id
              )}`}
              id={`product-card-${prod.id}`}
            >
              <div>
                {/* Product Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${getIconBg(prod.id)}`}>
                  {getIcon(prod.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {prod.title}
                </h3>

                {/* Short Paragraph */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {prod.shortDesc}
                </p>
              </div>

              {/* Action trigger button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(prod)}
                className="mt-6 font-bold text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none group self-start hover:underline"
                id={`learn-more-btn-${prod.id}`}
              >
                <span>Learn More Detail</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learn More Interactive Modal overlay dialog */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" id="product-detail-modal">
            {/* Dark Mask layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-[#070b14]/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body Container */}
            <div className="flex min-h-screen items-center justify-center p-4 relative z-10">
              <motion.div
                id="product-detail-modal-card"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl bg-[#0e1628] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 overflow-hidden"
              >
                {/* Modal close key */}
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-lg p-1.5"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content block */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5 mt-2">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${getIconBg(selectedProduct.id)}`}>
                    {getIcon(selectedProduct.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-white">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 font-semibold uppercase mt-0.5 tracking-wider">
                      AMFI Authorized Distribution
                    </p>
                  </div>
                </div>

                {/* Body Text descriptions */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProduct.longDesc}
                </p>

                {/* Detailed checklist of structural features */}
                <div className="mb-6">
                  <h4 className="font-display font-bold text-white text-sm sm:text-base mb-3.5">
                    Structural Features & Benefits:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Asset suitability criteria */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 sm:p-5">
                  <h4 className="font-display font-semibold text-emerald-400 text-sm mb-2">
                    Who Is This Suited For?
                  </h4>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {selectedProduct.suitability}
                  </p>
                </div>

                {/* Footer Modal Options */}
                <div className="mt-8 pt-5 border-t border-white/10 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="border border-white/10 text-slate-300 bg-white/5 font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Close Information
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProduct(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-500/25"
                  >
                    Enquire on this Yield
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
