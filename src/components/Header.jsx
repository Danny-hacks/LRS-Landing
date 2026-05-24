// ─── Header: Transparent on hero, solid white on scroll ──────────────────────
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { immigrationServices, settlementServices } from '../data/content';

const navLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'Immigration', href: '#services',   dropdown: immigrationServices },
  { label: 'Settlement',  href: '#settlement', dropdown: settlementServices },
  { label: 'Assessment',  href: '#assessment' },
  { label: 'About Us',    href: '#about' },
  { label: 'Contact',     href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled]             = useState(false);
  const [open, setOpen]                     = useState(false);
  const [lang, setLang]                     = useState('EN');
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => { setOpen(false); setMobileExpanded(null); };
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white shadow-[0_1px_16px_rgba(0,0,0,0.09)]'
          : 'bg-transparent'
      }`}
    >
      {/* ── CICC / RCIC Credential Bar ── */}
      <div className="bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center sm:justify-between gap-3 py-1.5">
            <div className="flex items-center gap-4">
              {/* CICC Logo */}
              <div className="bg-white rounded px-2 py-1 flex-shrink-0">
                <img src="/cicc-logo.png" alt="CICC — College of Immigration and Citizenship Consultants" className="h-5 w-auto" />
              </div>
              <span className="text-white/20 text-xs">|</span>
              {/* RCIC Badge */}
              <div className="bg-white rounded p-1 flex-shrink-0">
                <img src="/rcic-badge.png" alt="RCIC — Regulated Canadian Immigration Consultant" className="h-5 w-auto" />
              </div>
            </div>
            <p className="hidden lg:block text-white/50 text-[11px]">
              College of Immigration and Citizenship Consultants — License No: XXXXXXX
            </p>
            <p className="text-white/50 text-[11px] sm:hidden">CICC / RCIC Licensed Immigration Consultants</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[76px] gap-4">

          {/* Logo — solid white pill on transparent header, no bg when scrolled (white header) */}
          <a href="#home" onClick={close} className="flex-shrink-0">
            <div className={`transition-all duration-300 ${solid ? '' : 'bg-white rounded-xl px-2 py-1'}`}>
              <img src="/Logo.png" alt="Lifetime Resettlement Services" className="h-12 w-auto" />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map(({ label, href, dropdown }) =>
              dropdown ? (
                <div key={label} className="relative group">
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className={`flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                      solid
                        ? 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {label}
                    <ChevronDown size={11} className="opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-200" />
                  </a>
                  <div className="absolute top-full left-0 pt-2 z-50 pointer-events-none opacity-0 invisible -translate-y-1
                    group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-150">
                    <div className="bg-white rounded-xl shadow-nav border border-gray-100 py-1.5 w-52">
                      {dropdown.map(({ label: dLabel }) => (
                        <a
                          key={dLabel}
                          href={href}
                          onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                          className="block px-4 py-2.5 text-[13px] text-navy-600 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                        >
                          {dLabel}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className={`whitespace-nowrap px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                    solid
                      ? 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </a>
              )
            )}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* EN/FR toggle */}
            <div className={`flex items-center text-[13px] font-medium rounded-lg overflow-hidden border transition-colors ${
              solid ? 'border-gray-200' : 'border-white/30'
            }`}>
              <button
                onClick={() => setLang('EN')}
                className={`px-2.5 py-1.5 transition-colors ${
                  lang === 'EN'
                    ? (solid ? 'bg-canada-red text-white' : 'bg-white text-navy-900')
                    : (solid ? 'text-navy-400 hover:text-navy-700' : 'text-white/60 hover:text-white')
                }`}
              >EN</button>
              <button
                onClick={() => setLang('FR')}
                className={`px-2.5 py-1.5 transition-colors ${
                  lang === 'FR'
                    ? (solid ? 'bg-canada-red text-white' : 'bg-white text-navy-900')
                    : (solid ? 'text-navy-400 hover:text-navy-700' : 'text-white/60 hover:text-white')
                }`}
              >FR</button>
            </div>
            <a
              href="#assessment"
              onClick={(e) => { e.preventDefault(); scrollTo('#assessment'); }}
              className="whitespace-nowrap px-4 py-2 rounded-lg bg-canada-red text-white text-[13px] font-semibold hover:bg-canada-red-dark transition-colors btn-primary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              solid ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — always solid white */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col gap-0.5 mb-4">
            {navLinks.map(({ label, href, dropdown }) =>
              dropdown ? (
                <div key={label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-navy-700 rounded-lg hover:bg-navy-50 transition-colors"
                  >
                    {label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileExpanded === label ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === label && (
                    <div className="ml-4 border-l-2 border-canada-red/30 pl-3 pb-1">
                      {dropdown.map(({ label: dLabel }) => (
                        <a
                          key={dLabel}
                          href={href}
                          onClick={(e) => { e.preventDefault(); scrollTo(href); close(); }}
                          className="block py-2 text-sm text-navy-500 hover:text-navy-900 transition-colors"
                        >
                          {dLabel}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); close(); }}
                  className="px-4 py-3 text-sm font-medium text-navy-700 rounded-lg hover:bg-navy-50 transition-colors"
                >
                  {label}
                </a>
              )
            )}
          </nav>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden text-sm font-medium">
              <button onClick={() => setLang('EN')} className={`px-3 py-1.5 transition-colors ${lang === 'EN' ? 'bg-canada-red text-white' : 'text-navy-400'}`}>EN</button>
              <button onClick={() => setLang('FR')} className={`px-3 py-1.5 transition-colors ${lang === 'FR' ? 'bg-canada-red text-white' : 'text-navy-400'}`}>FR</button>
            </div>
            <a
              href="#assessment"
              onClick={(e) => { e.preventDefault(); scrollTo('#assessment'); close(); }}
              className="px-5 py-2.5 rounded-lg bg-canada-red text-white text-sm font-semibold btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
