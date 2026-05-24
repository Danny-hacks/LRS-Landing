import { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-navy-950 border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
          <p className="hidden md:block text-white/70 text-sm font-medium flex-shrink-0">
            Ready to start your Canada journey?
          </p>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <a
              href="#assessment"
              onClick={(e) => { e.preventDefault(); scrollTo('#assessment'); }}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-canada-red text-white text-sm font-semibold hover:bg-canada-red-dark transition-colors"
            >
              Start Assessment <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Calendar size={14} /> Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
