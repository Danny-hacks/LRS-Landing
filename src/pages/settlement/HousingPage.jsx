import { Home, MapPin, FileText, Shield, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const keyTopics = [
  { icon: Home, title: 'Temporary Accommodation', description: 'Airbnb, extended-stay hotels, and newcomer housing programs — LRS recommends trusted options for your first weeks in Canada.' },
  { icon: MapPin, title: 'Neighbourhood Research', description: 'City-by-city guidance on neighbourhoods, commute considerations, school proximity, and community resources suited to newcomers from Mauritius.' },
  { icon: FileText, title: 'Rental Applications', description: 'Canadian landlords require references, credit checks, and employment letters. LRS advises on how to meet these requirements as a newcomer with no Canadian credit history.' },
  { icon: Shield, title: 'Lease Review', description: 'Rental agreements in Canada can be complex. LRS guides you on what standard clauses mean, your rights as a tenant, and what to watch out for before signing.' },
];

const cityGuide = [
  { city: 'Ottawa', note: 'Government, bilingual, family-friendly areas. More affordable than Toronto.' },
  { city: 'Toronto', note: 'Largest city, diverse communities. Mississauga and Brampton offer more affordable options.' },
  { city: 'Montréal', note: 'French-speaking, vibrant culture. Lower rents than other major cities. Great for bilingual newcomers.' },
  { city: 'Calgary / Edmonton', note: 'Strong job markets, lower cost of living, growing newcomer communities.' },
  { city: 'Vancouver', note: 'High cost of living — suburbs like Surrey or Burnaby offer more affordable options.' },
];

const included = [
  'Pre-arrival housing research and neighbourhood comparison',
  'Temporary accommodation options list',
  'Rental application guidance for newcomers',
  'Reference letter and credit alternative strategies',
  'Lease review and tenant rights overview',
  'Province-specific landlord-tenant laws summary',
  'What to expect in your first rental viewing',
  'City-specific average rent and cost of living data',
];

const faqs = [
  {
    q: 'Can I rent an apartment before arriving in Canada?',
    a: 'Some landlords will rent remotely with strong guarantees (extra months of rent upfront, reference letters, income proof). Many require in-person visits. LRS recommends booking temporary accommodation for your first 2–4 weeks and searching for long-term housing in person once you arrive.',
  },
  {
    q: 'I have no Canadian credit history — will landlords accept me?',
    a: 'This is a common challenge for newcomers. LRS advises on practical alternatives: offering 1–2 months\' rent upfront, providing your employment offer letter as income proof, using your current employer or LRS as a reference, and applying for a newcomer credit card immediately upon arrival to begin building Canadian credit.',
  },
  {
    q: 'What\'s the average rent in major Canadian cities?',
    a: 'As of 2025–2026, approximate monthly rents for a 2-bedroom: Ottawa CAD $2,200–$2,600; Toronto CAD $3,000–$3,800; Montréal CAD $1,600–$2,200; Calgary CAD $2,000–$2,500; Vancouver CAD $3,200–$4,200. LRS provides updated city-specific figures during your session.',
  },
  {
    q: 'What is typically included in a Canadian lease?',
    a: 'Canadian leases include: duration (typically 1 year, then month-to-month), monthly rent, utilities (which may or may not be included), maintenance responsibilities, notice period for vacancy (60 days in most provinces), and landlord access rules. LRS reviews your specific lease before you sign.',
  },
  {
    q: 'What tenant rights do I have in Canada?',
    a: 'Tenant rights are provincially regulated but generally strong. Landlords cannot increase rent without proper notice (typically 90 days), cannot enter without 24 hours notice except in emergencies, and must maintain the unit in a habitable condition. LRS briefs you on your specific province\'s Landlord and Tenant Act.',
  },
];

export default function HousingPage() {
  const [ref1, v1] = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Settlement', href: '/#settlement' }, { label: 'Housing & Accommodation' }]}
        badge="Settlement Services"
        title="Housing & Accommodation in Canada"
        subtitle="Finding a home in Canada as a newcomer takes preparation. LRS guides you through temporary accommodation, neighbourhood selection, rental applications, and lease review."
        ctaLabel="Book a Consultation"
        ctaHref="/#contact"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref1} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Housing is your first challenge — solve it before you land
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                The Canadian rental market is competitive in major cities. Newcomers face a unique challenge: no Canadian credit history, no local references, and no in-person presence to view units before arriving.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4">
                LRS's housing guidance gives you the knowledge and strategies to navigate this challenge — from knowing what landlords look for, to understanding tenant rights, to choosing the right neighbourhood for your family.
              </p>
              <p className="text-navy-500 leading-relaxed">
                We advise on temporary accommodation for your first weeks (Airbnb, extended-stay hotels, newcomer housing programs) so you can search for permanent housing in person, with confidence.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h3 className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-4">City Spotlight</h3>
              <ul className="space-y-3">
                {cityGuide.map(({ city, note }) => (
                  <li key={city} className="flex items-start gap-2">
                    <MapPin size={12} className="text-canada-red mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-navy-700 font-medium text-sm">{city}</p>
                      <p className="text-navy-500 text-xs leading-snug">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>What We Cover</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">Housing guidance from search to lease</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTopics.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-canada-red/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-canada-red" />
                </div>
                <h3 className="text-navy-900 font-semibold text-sm mb-2">{title}</h3>
                <p className="text-navy-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 lg:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel align="left">What LRS Provides</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Practical housing support for newcomers.</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                LRS combines local Canadian market knowledge with an understanding of the specific challenges newcomers from Mauritius face — no credit history, no local network, long-distance searching.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <h3 className="text-navy-900 font-semibold mb-2">Start your housing preparation</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                LRS's housing session is available as part of the pre-landing orientation or as a standalone consultation. Sessions available in English or French.
              </p>
              <Link to="/#contact" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold text-navy-900 tracking-tight mt-3">Frequently asked questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
