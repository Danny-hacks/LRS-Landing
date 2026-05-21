// ─── One Partner: Image-backed split cards (Immigration + Settlement) ──────────
import { ArrowRight, FileText, Home } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { immigrationServices, settlementServices } from '../data/content';
import SectionLabel from './SectionLabel';

// REPLACE: swap these background images with your own in WordPress
const pillarImages = {
  immigration: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&q=80&fit=crop',
  settlement:  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&q=80&fit=crop',
};

function PillarCard({ imgSrc, imgAlt, icon: Icon, title, tagline, services, cta, href, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${delay} ${visible ? 'visible' : ''} rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col`}
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/75" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="w-10 h-10 rounded-xl bg-navy-700 border border-navy-600 flex items-center justify-center mb-3">
            <Icon size={20} className="text-white" />
          </div>
          <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
          <p className="text-white/80 text-xs mt-1">{tagline}</p>
        </div>
      </div>

      {/* Service list */}
      <div className="flex-1 bg-navy-900 p-6">
        <ul className="space-y-2.5 mb-6">
          {services.map(({ label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm text-white/90">
              <div className="w-1.5 h-1.5 rounded-full bg-canada-red flex-shrink-0" />
              {label}
            </li>
          ))}
        </ul>

        <a
          href={href}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-canada-red text-white text-sm font-semibold hover:bg-canada-red-dark transition-all duration-200 hover:-translate-y-0.5"
        >
          {cta} <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

export default function OnePartner() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headRef} className={`reveal ${headVisible ? 'visible' : ''} text-center max-w-2xl mx-auto mb-12`}>
          <SectionLabel>One Partner. Full Journey.</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 mb-5 tracking-tight leading-[1.1]">
            One trusted partner<br className="hidden sm:block" /> from application to arrival.
          </h2>
          <p className="text-navy-500 text-[1.0625rem] leading-relaxed">
            Lifetime Resettlement Services brings immigration guidance and settlement
            support together, so you plan not only how to get to Canada, but how to
            start your life there with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PillarCard
            imgSrc={pillarImages.immigration}
            imgAlt="Professional immigration consultation — LRS immigration services"
            icon={FileText}
            title="Immigration Services"
            tagline="Permanent Residency, Work Permits, Express Entry & more"
            services={immigrationServices}
            cta="Explore Immigration Services"
            href="#services"
            delay="delay-100"
          />
          <PillarCard
            imgSrc={pillarImages.settlement}
            imgAlt="Family settling into a new Canadian home — LRS settlement services"
            icon={Home}
            title="Settlement Services"
            tagline="Housing, Banking, SIN, Employment & community support"
            services={settlementServices}
            cta="Explore Settlement Services"
            href="#settlement"
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
}
