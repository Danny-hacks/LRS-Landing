// ─── Problem / Reassurance: Empathetic split section ─────────────────────────
// WordPress note: Thrive 2-column section — image left, text right
// REPLACE: Swap image with a professional advisor/client or family planning photo
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProblemDesire() {
  const [leftRef, leftVisible]   = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <div ref={leftRef} className={`reveal ${leftVisible ? 'visible' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              {/* REPLACE: Diverse family or client group in a consultation/planning setting */}
              <img
                src="/canada-img8.jpg"
                alt="Families and individuals planning their Canada immigration journey"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
              {/* Bottom gradient overlay for the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
              {/* Reassurance card at bottom */}
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <p className="text-navy-900 text-sm font-semibold mb-0.5">
                  You don't have to navigate this alone.
                </p>
                <p className="text-navy-500 text-xs leading-relaxed">
                  Licensed, bilingual guidance from your first question through to settling in Canada.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Copy ── */}
          <div ref={rightRef} className={`reveal delay-200 ${rightVisible ? 'visible' : ''}`}>
            <span className="inline-block text-canada-red text-xs font-bold uppercase tracking-widest mb-4">
              Understanding Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-5 leading-tight tracking-tight">
              Moving to Canada is a big decision. You do not have to navigate it alone.
            </h2>
            <p className="text-navy-600 text-base leading-relaxed mb-5">
              From choosing the right pathway to preparing for life after arrival, LRS helps
              you move forward with clarity, structure, and professional guidance.
            </p>
            <p className="text-navy-500 text-base leading-relaxed mb-8">
              The Canadian immigration system is complex and ever-changing. Without the right
              support, many applicants face unnecessary delays or rejections — not because they
              were ineligible, but because they lacked proper guidance.
            </p>
            <a
              href="#assessment"
              onClick={(e) => { e.preventDefault(); document.querySelector('#assessment')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-canada-red text-white text-sm font-semibold hover:bg-canada-red-dark transition-colors btn-primary"
            >
              Check Your Eligibility <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
