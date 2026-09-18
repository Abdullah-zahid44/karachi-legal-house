import React, { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full shadow-md">
      {/* TOP UTILITY BAR */}
      <div className="bg-[#0b1329] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-amber-500/30 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-3 flex-wrap gap-y-1 text-[11px] sm:text-xs">
          <span className="flex items-center text-amber-400 font-medium">
            <i className="fa-regular fa-clock mr-1.5 text-amber-400"></i> Mon – Sat: 9 AM – 8 PM
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="flex items-center text-slate-200">
            <i className="fa-solid fa-scale-balanced mr-1.5 text-amber-400"></i>
            SBC Reg: 663/BC
          </span>
        </div>

        <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
          <a href="tel:+923103381280" className="hover:text-amber-400 transition-colors flex items-center text-slate-200">
            <i className="fa-solid fa-phone mr-1.5 text-amber-400"></i> +92 310 338 1280
          </a>
          <a 
            href="https://wa.me/923112610683" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center font-semibold"
          >
            <i className="fa-brands fa-whatsapp mr-1.5 text-sm"></i> WhatsApp
          </a>
          <button 
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full bg-slate-800 border border-amber-500/40 text-amber-400 hover:text-white transition-colors"
            title="Toggle Light/Dark Theme"
          >
            <i className={`fa-solid ${darkMode ? 'fa-sun text-amber-400' : 'fa-moon text-indigo-300'}`}></i>
          </button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-3">
            <div className="relative w-11 h-11 flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 8 L105 24 V60 C105 88 60 112 60 112 C60 112 15 88 15 60 V24 L60 8 Z" fill="#0b1329" stroke="#d97706" strokeWidth="3"/>
                <path d="M60 22 V82 M38 82 H82 M60 22 L32 46 M60 22 L88 46" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M18 50 C18 60 44 60 44 50 Z" fill="#d97706"/>
                <path d="M76 50 C76 60 102 60 102 50 Z" fill="#d97706"/>
                <text x="60" y="74" fontFamily="serif" fontWeight="900" fontSize="13" fill="#ffffff" textAnchor="middle" letterSpacing="1">KLH</text>
              </svg>
            </div>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">Karachi Legal House</h1>
              <span className="block text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.16em] mt-1">Advocates & Legal Consultants</span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-7 font-semibold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200">
            <a href="#about" className="hover:text-amber-500 transition-colors">The Firm</a>
            <a href="#practices" className="hover:text-amber-500 transition-colors">Practices</a>
            <a href="#clients" className="hover:text-amber-500 transition-colors">Retainers</a>
            <a href="#leadership" className="hover:text-amber-500 transition-colors">Advocates</a>
            <a 
              href="#contact" 
              className="bg-[#0b1329] hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/50 px-5 py-2.5 rounded-md transition-all font-bold shadow-sm"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-amber-500 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-xl' : 'fa-bars text-xl'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] px-4 pt-3 pb-5 space-y-3 font-semibold text-sm">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 dark:text-slate-200 hover:text-amber-500 py-1"
            >
              The Firm
            </a>
            <a 
              href="#practices" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 dark:text-slate-200 hover:text-amber-500 py-1"
            >
              Practices
            </a>
            <a 
              href="#clients" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 dark:text-slate-200 hover:text-amber-500 py-1"
            >
              Retainers
            </a>
            <a 
              href="#leadership" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 dark:text-slate-200 hover:text-amber-500 py-1"
            >
              Advocates
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full text-center bg-[#0b1329] hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/50 px-4 py-2 rounded-md transition-all mt-2"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>
    </div>
  );
}