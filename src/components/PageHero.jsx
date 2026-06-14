import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  breadcrumb = [],
  badge,
  title,
  subtitle,
  ctaLabel,
  ctaHref = '/#contact',
  waveColor = 'white',
}) {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-32 lg:pb-28">
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 text-[11px] text-white/35 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            {breadcrumb.map(({ label, href }, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={9} className="flex-shrink-0 opacity-50" />
                {href ? (
                  <Link to={href} className="hover:text-white/60 transition-colors">{label}</Link>
                ) : (
                  <span className="text-white/55">{label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <p className="text-canada-red text-xs font-bold uppercase tracking-widest mb-4">{badge}</p>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mb-9">
            {subtitle}
          </p>
        )}

        {ctaLabel && (
          <div className="flex flex-wrap gap-3">
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary"
            >
              {ctaLabel}
            </Link>
            <Link
              to="/#assessment"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/25 text-white/80 font-semibold text-sm hover:border-white/45 hover:text-white transition-colors"
            >
              Free Assessment
            </Link>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
          <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill={waveColor} />
        </svg>
      </div>
    </section>
  );
}
