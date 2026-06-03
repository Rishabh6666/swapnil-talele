import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'SIP Calc', href: '#growth-visualizer' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0f1d]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/30'
          : 'bg-[#070b14]/40 backdrop-blur-md py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          
          {/* Logo Brand (Clickable Redirection to Top) */}
          <button
            onClick={handleHomeClick}
            className="flex flex-col text-left group focus:outline-none cursor-pointer shrink-0"
            aria-label="Scroll to top of home page"
            id="header-logo-brand"
          >
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[8px] sm:text-[9px] font-semibold px-2 py-0.5 rounded tracking-wide uppercase group-hover:border-emerald-500/40 transition-colors">
                AMFI Registered
              </span>
              <span className="text-slate-400 group-hover:text-slate-300 text-[10px] font-mono font-medium transition-colors">
                ARN-358795
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-4 xl:gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-xs xl:text-sm font-semibold tracking-wide text-slate-300 hover:text-emerald-400 transition-colors uppercase py-1"
                id={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call / Action Desk Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center mr-1 focus:outline-none"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              id="theme-toggle-desktop"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-emerald-500" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center focus:outline-none"
              title={`Call: ${BUSINESS_INFO.phone}`}
              id="cta-nav-call"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs xl:text-sm px-3.5 py-2 rounded-xl transition-all inline-flex items-center gap-1 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35"
              id="cta-nav-consultation"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Hamburger Menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center focus:outline-none"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              id="theme-toggle-mobile"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-emerald-500" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="Toggle Menu"
              id="hamburger-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 bg-[#0e1628]/95 backdrop-blur-xl overflow-hidden shadow-2xl"
            id="mobile-drawer"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
              <div className="flex flex-col gap-1 py-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-base font-semibold text-slate-200 hover:text-emerald-400 transition-colors py-2 block border-b border-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
                  id="mobile-call-btn"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono">Call Now (+91 98336 74743)</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="bg-emerald-500 text-white font-semibold text-center px-4 py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 block"
                  id="mobile-consultation-btn"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
