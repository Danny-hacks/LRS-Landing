// ─── Testimonials: Dark card auto-advancing slider ────────────────────────────
// WordPress note: Replace with Thrive Testimonials element or 3-column card grid
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Testimonials() {
  const [active, setActive]     = useState(0);
  const [headRef, headVisible]  = useScrollReveal();

  const prev = useCallback(() => setActive(a => (a - 1 + testimonials.length) % testimonials.length), []);
  const next = useCallback(() => setActive(a => (a + 1) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
      {/* Wave top edge — warm-50 WhyChooseLRS above */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
          <path d="M0,28 C360,0 1080,56 1440,28 L1440,0 L0,0 Z" fill="#fdfcfb" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headRef} className={`reveal ${headVisible ? 'visible' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12`}>
          <div>
            <span className="inline-block text-canada-red text-xs font-bold uppercase tracking-widest mb-3">
              Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              Real journeys.<br className="hidden sm:block" /> Real results.
            </h2>
          </div>
          <div className="sm:text-right flex-shrink-0">
            <div className="flex items-center gap-1 sm:justify-end mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-navy-900 font-bold text-sm">5.0 on Google</p>
            <p className="text-navy-400 text-xs mt-0.5">Verified client testimonials</p>
          </div>
        </div>

        {/* Red testimonial card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-canada-red rounded-2xl shadow-red p-8 sm:p-10">

            {/* Stars */}
            <div className="flex gap-0.5 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={15} className="text-white fill-white" />
              ))}
            </div>

            {/* Service badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-5">
              {t.service}
            </span>

            {/* Quote */}
            <blockquote className="text-white text-lg leading-relaxed mb-7 font-light">
              "{t.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between pt-5 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {t.initials}
                </div>
                <p className="text-white/80 text-sm font-medium">{t.location}</p>
              </div>
              <span className="text-[11px] text-white/70 border border-white/30 rounded-lg px-2.5 py-1">
                Google Review
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-200 text-navy-500 hover:text-canada-red hover:border-canada-red flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-5 h-2 bg-canada-red' : 'w-2 h-2 bg-gray-200 hover:bg-canada-red/40'
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-200 text-navy-500 hover:text-canada-red hover:border-canada-red flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
