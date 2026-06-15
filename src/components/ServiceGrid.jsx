import { FileText, Home, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const columns = [
  {
    image: '/canada-img5.jpg',
    imageAlt: 'Immigration pathway consultation',
    icon: FileText,
    title: 'Immigration Pathways',
    description: 'Expert guidance on every federal and provincial pathway to Canada, tailored to your personal profile.',
    services: [
      { label: 'Permanent Residency', href: '/services/permanent-residency' },
      { label: 'Express Entry / PNPs', href: '/services/express-entry' },
      { label: 'Work Permits', href: '/services/work-permits' },
      { label: 'Study Permits', href: '/services/study-permits' },
      { label: 'Family Sponsorship', href: '/services/family-sponsorship' },
    ],
    ctaHref: '/services/permanent-residency',
    cta: 'Explore Immigration',
  },
  {
    image: '/canada-img6.jpg',
    imageAlt: 'Settlement support in Canada',
    icon: Home,
    title: 'Settlement Support',
    description: 'From pre-landing orientation to employment readiness, we support every step of your arrival in Canada.',
    services: [
      { label: 'Pre-Landing Orientation', href: '/settlement/pre-landing' },
      { label: 'Housing & Accommodation', href: '/settlement/housing' },
      { label: 'SIN, Health Card & Banking', href: '/settlement/sin-health-banking' },
      { label: 'Job Search & Resume Support', href: '/settlement/job-search-resume' },
      { label: 'Community Integration', href: '/settlement/pre-landing' },
    ],
    ctaHref: '/settlement/pre-landing',
    cta: 'Explore Settlement',
  },
  {
    image: '/canada-img7.jpg',
    imageAlt: 'Professional immigration consultation',
    icon: MessageCircle,
    title: 'Consultation & Planning',
    description: 'Start with a licensed consultation to understand your options and build a clear path forward.',
    services: [
      { label: 'Eligibility Review', href: '/assessment' },
      { label: 'Document Guidance', href: '/assessment' },
      { label: 'Strategy Session', href: '/contact' },
      { label: 'Application Planning', href: '/assessment' },
      { label: 'Next-Step Roadmap', href: '/about' },
    ],
    ctaHref: '/assessment',
    cta: 'Start Assessment',
  },
];

function ServiceColumn({ col, index }) {
  const [ref, visible] = useScrollReveal();
  const Icon = col.icon;

  return (
    <div
      ref={ref}
      className={`reveal delay-${index * 200} ${visible ? 'visible' : ''}
        bg-white rounded-2xl border border-gray-100 shadow-sm
        hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden`}
    >
      {/* Image header */}
      <div className="relative h-44 flex-shrink-0">
        <img
          src={col.image}
          alt={col.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/15 to-transparent" />
        <div className="absolute bottom-4 left-5 w-11 h-11 rounded-xl bg-white/95 flex items-center justify-center shadow-sm">
          <Icon size={20} className="text-navy-700" />
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-navy-900 text-xl font-bold mb-2 tracking-tight">{col.title}</h3>
        <p className="text-navy-500 text-sm leading-relaxed mb-6">{col.description}</p>

        <ul className="space-y-2.5 mb-8 flex-1">
          {col.services.map(({ label, href }) => (
            <li key={label}>
              <Link
                to={href}
                className="flex items-start gap-2.5 text-sm text-navy-600 hover:text-canada-red transition-colors group"
              >
                <Check size={14} className="text-canada-red mt-0.5 flex-shrink-0" />
                <span className="group-hover:underline underline-offset-2">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to={col.ctaHref}
          className="inline-flex items-center gap-1.5 text-canada-red text-sm font-semibold group hover:gap-2.5 transition-all"
        >
          {col.cta} <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default function ServiceGrid() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="services" className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 bg-warm-50 overflow-hidden">
      {/* Subtle maple leaf watermark */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }}
        aria-hidden="true"
      />
      {/* Wave top — white from ChooseYourPath above curves into warm-50 */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '48px' }}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headRef} className={`reveal ${headVisible ? 'visible' : ''} text-center max-w-2xl mx-auto mb-12`}>
          <span className="inline-block text-canada-red text-xs font-bold uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
            Full-service support, from application to arrival.
          </h2>
          <p className="text-navy-500 text-base leading-relaxed">
            LRS covers every stage of your Canada journey —
            from your first eligibility review through to your first month living in Canada.
          </p>
        </div>

        {/* 3 service columns */}
        <div id="settlement" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <ServiceColumn key={col.title} col={col} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
