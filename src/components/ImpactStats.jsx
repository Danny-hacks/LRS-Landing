// ─── Impact Stats: Canada-red trust band ─────────────────────────────────────
import { Shield, Route, Globe, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  {
    icon: Shield,
    value: 'RCIC Licensed',
    sub: 'Regulated by CICC',
  },
  {
    icon: Route,
    value: 'End-to-End',
    sub: 'Application to Settlement',
  },
  {
    icon: Globe,
    value: 'Canada & Mauritius',
    sub: 'Dual-office presence',
  },
  {
    icon: MessageSquare,
    value: 'EN / FR',
    sub: 'Bilingual service',
  },
];

export default function ImpactStats() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      {/* Decorative maple leaf */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[9rem] opacity-[0.04] select-none pointer-events-none leading-none">
        🍁
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}
            grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden`}
        >
          {stats.map(({ icon: Icon, value, sub }, i) => (
            <div
              key={value}
              className={`reveal delay-${i * 100} ${visible ? 'visible' : ''}
                bg-navy-900 px-6 py-8 flex flex-col items-center text-center gap-3`}
            >
              <div className="w-12 h-12 rounded-full bg-canada-red flex items-center justify-center flex-shrink-0 shadow-red-sm">
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white text-base sm:text-lg font-black tracking-tight leading-tight mb-1">
                  {value}
                </p>
                <p className="text-white/45 text-xs font-medium">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
