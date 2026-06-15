// ─── About Preview: Company story section ────────────────────────────────────
import { ArrowRight, Globe, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
  'Licensed and regulated immigration guidance',
  'Transparent, honest client communication',
  'End-to-end support from application to settlement',
  'Deep understanding of the international Canada immigration journey',
  'English and French bilingual service',
];

export default function AboutPreview() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          {/* REPLACE: swap with a photo of the LRS team, advisor headshot, or Canada office in WordPress */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=600&q=80&fit=crop"
                  alt="LRS immigration advisor — professional consultation"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              {/* Floating office card */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card p-4 border border-navy-100">
                <Globe size={16} className="text-navy-700 mb-1" />
                <p className="text-navy-900 text-xs font-semibold">Bilingual Service</p>
                <p className="text-navy-400 text-[10px]">English & French</p>
              </div>

              {/* Floating offices card */}
              <div className="absolute -top-4 -left-4 bg-navy-900 rounded-2xl shadow-card p-4">
                <div className="flex gap-2 mb-2">
                  <span className="text-lg">🇲🇺</span>
                  <span className="text-lg">🇨🇦</span>
                </div>
                <p className="text-white text-xs font-semibold">Mauritius & Canada</p>
                <p className="text-white/50 text-[10px]">Dual-office presence</p>
              </div>
            </div>
          </div>

          {/* ── Right: Copy ── */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-2.5 mb-4 text-canada-red">
              <span className="block w-5 h-[2px] rounded-full bg-canada-red" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 mb-5 leading-[1.1] tracking-tight">
              Professional guidance with a personal understanding of your journey.
            </h2>
            <p className="text-navy-500 text-base leading-relaxed mb-4">
              LRS was established to bridge the gap between where clients start and where they want
              to be — in Canada. We understand the challenges of navigating a complex immigration
              system, because we understand the journey personally.
            </p>
            <p className="text-navy-500 text-sm leading-relaxed mb-6">
              With offices in Canada and an international presence, we provide culturally informed,
              bilingual, and professionally regulated support for every stage of your immigration
              and settlement journey.
            </p>

            <ul className="space-y-2.5 mb-8">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-sm text-navy-600">
                  <CheckCircle size={16} className="text-canada-red mt-0.5 flex-shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-all hover:-translate-y-0.5"
            >
              Meet LRS <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
