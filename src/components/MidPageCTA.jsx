// ─── Assessment CTA: Clean white conversion section ───────────────────────────
// WordPress note: Thrive centered section, white bg — red accent bar + headline + 2 buttons
import { ArrowRight } from 'lucide-react';

export default function MidPageCTA() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Canada red accent bar */}
        <div className="w-10 h-1 rounded-full bg-canada-red mx-auto mb-8" />

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
          Not sure which pathway applies to you?
        </h2>

        <p className="text-navy-500 text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Take a 5-minute assessment and get initial guidance from a licensed LRS consultant — free, no commitment required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#assessment"
            onClick={(e) => { e.preventDefault(); document.querySelector('#assessment')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors shadow-red-sm btn-primary"
          >
            Start Free Assessment <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-navy-200 text-navy-800 font-semibold text-sm hover:border-navy-400 hover:bg-navy-50 transition-colors"
          >
            Speak to an Advisor
          </a>
        </div>

      </div>
    </section>
  );
}
