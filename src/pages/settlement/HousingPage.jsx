import { Home, MapPin, FileText, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import SectionLabel from '../../components/SectionLabel';

const keyTopics = [
  { icon: Home, title: 'Temporary Accommodation', description: 'Airbnb, extended-stay hotels, and newcomer housing programs — LRS recommends trusted options for your first weeks in Canada.' },
  { icon: MapPin, title: 'Neighbourhood Research', description: 'City-by-city guidance on neighbourhoods, commute considerations, school proximity, and community resources suited to international newcomers.' },
  { icon: FileText, title: 'Rental Applications', description: 'Canadian landlords require references, credit checks, and employment letters. LRS advises on how to meet these requirements as a newcomer with no Canadian credit history.' },
  { icon: Shield, title: 'Lease Review', description: 'Rental agreements in Canada can be complex. LRS guides you on what standard clauses mean, your rights as a tenant, and what to watch out for before signing.' },
];

const cityGuide = [
  { city: 'Ottawa', note: 'Government hub, bilingual, family-friendly. More affordable than Toronto.' },
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
  return (
    <>
      <PageHero
        badge="Settlement Services"
        title="Housing & Accommodation"
        titleAccent="in Canada"
        image="/canada-img6.jpg"
        compact
      />

      {/* Overview */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Housing is your first challenge — solve it before you land
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                The Canadian rental market is competitive in major cities. Newcomers face a unique challenge: no Canadian credit history, no local references, and no in-person presence to view units before arriving.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                LRS's housing guidance gives you the knowledge and strategies to navigate this challenge. We advise on temporary accommodation for your first weeks so you can search for permanent housing in person, with confidence.
              </p>
              <div className="bg-navy-50 rounded-xl border border-navy-100 p-5">
                <p className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-3">City Spotlight</p>
                <div className="space-y-3">
                  {cityGuide.map(({ city, note }) => (
                    <div key={city} className="flex items-start gap-2.5">
                      <MapPin size={12} className="text-canada-red flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-navy-900 font-semibold text-sm">{city}</span>
                        <span className="text-navy-500 text-xs"> — {note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-80 sm:h-[520px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img8.jpg" alt="Canadian housing and neighbourhoods" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-navy-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Find your home in Canada</p>
                <p className="text-navy-500 text-xs mt-0.5">LRS advises on temporary stay, then long-term housing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* What LRS Provides — dark section */}
      <section className="relative py-20 lg:py-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-canada-red text-xs font-bold uppercase tracking-widest mb-3">What LRS Provides</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">Practical housing support for newcomers.</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                LRS combines local Canadian market knowledge with an understanding of the specific challenges international newcomers face — no credit history, no local network, long-distance searching.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-navy-900 font-semibold text-lg mb-2">Start your housing preparation</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                LRS's housing session is available as part of the pre-landing orientation or as a standalone consultation. Sessions available in English or French.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold text-navy-900 tracking-tight mt-3">Frequently asked questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

    </>
  );
}
