// ─── Consultation CTA: Split — solid navy copy left, warm image right ─────────
// WordPress note: Thrive 2-column — left = navy bg column with text/buttons, right = full-height image
// REPLACE: Swap right image with a professional advisor or client meeting photo
import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ConsultationCTA() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[500px]">

        {/* ── Left: Navy copy panel ── */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}
            relative overflow-hidden bg-canada-red flex items-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28`}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} aria-hidden="true" />
          <div className="max-w-lg relative">
            <span className="inline-block text-white/70 text-xs font-bold uppercase tracking-widest mb-5">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Speak with LRS before making your next move.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Book a consultation and receive clear, licensed guidance on your Canada
              immigration or settlement options. Every consultation is confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-canada-red font-semibold text-sm hover:bg-gray-50 transition-colors btn-primary"
              >
                <Calendar size={15} />
                Book a Consultation
              </a>
              <a
                href="#assessment"
                onClick={(e) => { e.preventDefault(); document.querySelector('#assessment')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/40 bg-white/15 text-white font-semibold text-sm hover:bg-white/25 transition-colors"
              >
                Start Assessment <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: Image ── */}
        {/* REPLACE: Use a professional advisor/client meeting or Canada arrival photo */}
        <div className="relative min-h-[320px] lg:min-h-0 bg-navy-900">
          <img
            src="/lrs-asset.jpg"
            alt="LRS immigration advisor in professional consultation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle left blend for desktop to soften edge with navy panel */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-20"
            style={{ background: 'linear-gradient(to right, #c8102e, transparent)' }}
          />
        </div>

      </div>
    </section>
  );
}
