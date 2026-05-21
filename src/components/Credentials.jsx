// ─── Credentials: RCIC / CICC professional trust section ─────────────────────
import { Shield, CheckCircle, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const credentials = [
  'Registered under the College of Immigration and Citizenship Consultants (CICC)',
  'Authorized to provide immigration and citizenship advice in Canada',
  "Subject to CICC's Code of Professional Ethics and Standards",
  'Client representation rights before IRCC and the Immigration Division',
];

export default function Credentials() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">

      {/* Background: very subtle Canada Parliament / official feel */}
      {/* REPLACE: swap with a Canadian government building / official exterior photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=700&q=70&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-50/95" />
      </div>

      {/* Subtle maple leaf left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        style={{ fontSize: '24rem', lineHeight: 1, opacity: 0.03, color: '#c8102e' }}
        aria-hidden="true"
      >
        🍁
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}
            bg-white rounded-3xl shadow-card-hover overflow-hidden border border-navy-100`}
        >
          <div className="grid lg:grid-cols-2">

            {/* ── Left: CICC credential panel ── */}
            <div className="relative bg-navy-900 p-10 text-white overflow-hidden">
              {/* Background image on panel */}
              {/* REPLACE: swap with your CICC badge / official credential image */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 30% 50%, #c8102e 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)',
                }}
              />

              {/* Canada stripe top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-canada-red via-white/20 to-canada-red opacity-40" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-canada-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield size={26} className="text-canada-red" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-widest font-medium">Regulated by</p>
                    <h3 className="font-bold text-lg text-white">CICC / RCIC</h3>
                  </div>
                </div>

                {/* CICC Logo placeholder */}
                <div className="border border-navy-700 rounded-xl p-5 mb-6 bg-navy-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center font-bold text-sm border border-navy-600">
                      CICC
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">College of Immigration and</p>
                      <p className="text-white font-semibold text-sm">Citizenship Consultants</p>
                    </div>
                  </div>
                  <p className="text-white/65 text-xs">[Replace with Official CICC Badge]</p>
                </div>

                {/* License */}
                <div className="flex items-center gap-2.5 mb-7">
                  <Award size={16} className="text-gold flex-shrink-0" />
                  <span className="text-white/80 text-sm">
                    License No: <strong className="text-gold">XXXXXXX</strong>
                  </span>
                </div>

                {/* Credential list */}
                <ul className="space-y-3">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-white/85">
                      <CheckCircle size={15} className="text-canada-red mt-0.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right: Consultant profile ── */}
            <div className="p-10">
              <div className="flex items-center gap-2.5 mb-4 text-canada-red">
                <span className="block w-5 h-[2px] rounded-full bg-canada-red" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Meet Your Advisor</span>
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 leading-tight">
                Ethical, transparent, and fully compliant immigration support.
              </h2>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                LRS consultants operate with complete respect for IRCC regulations, CICC
                ethical standards, and your best interests. Every consultation is confidential,
                every recommendation is honest, and every application is submitted with care.
              </p>

              {/* Consultant placeholder */}
              {/* REPLACE: swap LRS initials div with actual consultant headshot photo */}
              <div className="flex items-center gap-4 p-5 bg-navy-50 rounded-xl mb-6 border border-navy-100">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  LRS
                </div>
                <div>
                  <p className="font-semibold text-navy-900">[Consultant Name]</p>
                  <p className="text-navy-500 text-xs">RCIC — License No: XXXXXXX</p>
                  <p className="text-navy-400 text-xs mt-0.5">Registered Immigration Consultant</p>
                  <div className="flex gap-0.5 mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-xs">★</span>
                    ))}
                    <span className="text-navy-400 text-xs ml-1">Licensed RCIC</span>
                  </div>
                </div>
              </div>

              {/* Canada dual flag */}
              <div className="flex items-center gap-3 p-4 bg-navy-50 rounded-xl mb-5 border border-navy-100">
                <span className="text-xl">🇲🇺</span>
                <div className="flex-1 h-px bg-navy-200" />
                <Shield size={14} className="text-canada-red" />
                <div className="flex-1 h-px bg-navy-200" />
                <span className="text-xl">🇨🇦</span>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 text-xs leading-relaxed">
                  <strong>Professional Disclaimer:</strong> LRS provides professional guidance based on
                  each client's profile. Immigration outcomes depend on eligibility, documentation, and
                  official government decisions. LRS does not guarantee approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
