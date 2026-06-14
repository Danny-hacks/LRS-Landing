// ─── Why Choose LRS: Editorial split — Canada image left, trust grid right ────
// WordPress note: Thrive 2-column section — left = full-height image, right = content + cards
import { Shield, Globe, Route, Home, MessageSquare, CreditCard } from 'lucide-react';
import { whyCards } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = { Shield, Globe, Route, Home, MessageSquare, CreditCard };

function TrustCard({ card, index }) {
  const [ref, visible] = useScrollReveal();
  const Icon = iconMap[card.icon];

  return (
    <div
      ref={ref}
      className={`reveal delay-${(index % 2) * 100} ${visible ? 'visible' : ''}
        flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm`}
    >
      <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={16} className="text-navy-700" />
      </div>
      <div>
        <h3 className="text-navy-900 font-semibold text-sm mb-1">{card.title}</h3>
        <p className="text-navy-500 text-xs leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}

export default function WhyChooseLRS() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-warm-50">
      {/* Wave top edge — navy-50 AssessmentForm above curves into this warm section */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
          <path d="M0,28 C360,56 1080,0 1440,28 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-start">

          {/* Left: Canada image */}
          <div className="relative h-80 sm:h-[450px] lg:h-full lg:min-h-[580px] rounded-2xl overflow-hidden lg:sticky lg:top-24 order-2 lg:order-1">
            <img
              src="/tall-canada-img.jpg"
              alt="Canada — where LRS clients begin their new chapter"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-sm">Canada Place, Vancouver</p>
              <p className="text-white/60 text-xs mt-0.5">Where new chapters begin for LRS clients</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div ref={headRef} className={`reveal ${headVisible ? 'visible' : ''} mb-10`}>
              <span className="inline-block text-canada-red text-xs font-bold uppercase tracking-widest mb-3">
                Why LRS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
                More than a form filled.<br />A journey supported.
              </h2>
              <p className="text-navy-500 text-base leading-relaxed">
                LRS provides licensed, strategic, and genuinely human support — from your first
                eligibility question through to your first month living in Canada.
              </p>
            </div>

            {/* Trust cards grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {whyCards.map((card, i) => (
                <TrustCard key={card.title} card={card} index={i} />
              ))}
            </div>

            {/* CICC credentials note */}
            <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <Shield size={18} className="text-canada-red flex-shrink-0 mt-0.5" />
              <p className="text-navy-600 text-sm leading-relaxed">
                <strong className="text-navy-900">CICC / RCIC Regulated</strong> — All LRS advice is delivered by
                Mr. Amalsingh Badal within the full regulatory framework of the College of Immigration and
                Citizenship Consultants. License No: R510526.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
