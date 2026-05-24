// ─── Hero: Full-bleed — directional gradient, Canadian flag visible right ──────
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <img
        src="/canada-img2.jpg"
        alt="Joyful newcomers celebrating their Canada journey"
        className="hero-img absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Mobile: solid overlay */}
      <div className="lg:hidden absolute inset-0" style={{ background: 'rgba(4,15,36,0.58)' }} />

      {/* Desktop: directional — dark left so text reads, right open so flag shows */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(4,15,36,0.88) 0%, rgba(4,15,36,0.72) 28%, rgba(4,15,36,0.30) 58%, rgba(4,15,36,0.00) 100%)' }}
      />

      {/* Content — extra top padding on mobile so it clears the fixed header */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-2xl">

          {/* Eyebrow — solid, no glass */}
          <div className="hero-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 text-white text-xs font-semibold mb-7">
            <span className="text-base leading-none">🇨🇦</span>
            Immigration &amp; Settlement Consultants
          </div>

          {/* Headline */}
          <h1 className="hero-2 text-4xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Your Bridge to<br />a New Life<br />
            <span className="text-canada-red">in Canada.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-3 text-white/75 text-lg leading-relaxed mb-7 max-w-lg">
            Licensed immigration and settlement support for individuals and families —
            from Mauritius to your new home in Canada.
          </p>

          {/* CICC / RCIC Credential Badges */}
          <div className="hero-3 mb-10">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Regulated by</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* CICC */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md w-fit">
                <img src="/cicc-logo.png" alt="CICC" className="h-8 w-auto flex-shrink-0" />
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p className="text-navy-900 text-xs font-bold leading-tight">CICC</p>
                  <p className="text-navy-500 text-[10px] leading-tight">College of Immigration<br/>& Citizenship Consultants</p>
                </div>
              </div>
              {/* RCIC */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md w-fit">
                <img src="/rcic-badge.png" alt="RCIC" className="h-8 w-auto flex-shrink-0" />
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p className="text-navy-900 text-xs font-bold leading-tight">RCIC</p>
                  <p className="text-navy-500 text-[10px] leading-tight">Regulated Canadian<br/>Immigration Consultant</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs — solid, no glass */}
          <div className="hero-4 flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href="#assessment"
              onClick={(e) => { e.preventDefault(); scrollTo('#assessment'); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-canada-red text-white font-bold text-sm hover:bg-canada-red-dark transition-colors shadow-red-sm btn-primary"
            >
              Start Your Assessment <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-navy-900 transition-colors"
            >
              Book a Consultation
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-5 flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-4 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl font-black text-white leading-none">100+</p>
              <p className="text-xs text-white/55 mt-1">Families Guided</p>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div>
              <p className="text-3xl font-black text-white leading-none">5.0 ★</p>
              <p className="text-xs text-white/55 mt-1">Google Rating</p>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div>
              <p className="text-3xl font-black text-white leading-none">EN / FR</p>
              <p className="text-xs text-white/55 mt-1">Bilingual Support</p>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div>
              <p className="text-2xl font-black text-white leading-none">🇨🇦 🇲🇺</p>
              <p className="text-xs text-white/55 mt-1">Two Countries</p>
            </div>
          </div>


        </div>
      </div>

    </section>
  );
}
