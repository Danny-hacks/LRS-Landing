import { Shield, Globe, Heart, Award, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import ConsultationCTA from '../components/ConsultationCTA';
import Testimonials from '../components/Testimonials';
import SectionLabel from '../components/SectionLabel';
import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
  { icon: Shield, title: 'Integrity', description: 'Strict adherence to the CICC Code of Professional Ethics — no shortcuts, no misrepresentation, ever.' },
  { icon: Globe, title: 'Bilingualism', description: 'Full service in English and French, with cultural familiarity with the Mauritius–Canada journey.' },
  { icon: Heart, title: 'Human-Centred', description: 'Every client has direct access to their licensed consultant — not a call centre or rotating team.' },
  { icon: Award, title: 'Continuity', description: 'Support from the first eligibility question through to settlement in Canada. We don\'t stop at the visa.' },
];

const milestones = [
  { stat: '100+', label: 'Families Guided' },
  { stat: '5.0 ★', label: 'Google Rating' },
  { stat: 'EN/FR', label: 'Bilingual Service' },
  { stat: '2', label: 'Countries, 1 Partner' },
];

const differences = [
  'Mauritius-focused expertise — culturally aware and bilingual',
  'Settlement services included beyond the visa',
  'Direct access to your RCIC — no intermediaries',
  'Transparent pricing with no hidden fees',
  'Licensed by the College of Immigration and Citizenship Consultants (CICC)',
  'Offices in both Canada and Mauritius for in-person support',
];

export default function AboutPage() {
  const [missionRef, missionVisible] = useScrollReveal();
  const [whyRef, whyVisible]         = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'About Us' }]}
        badge="Our Story"
        title="More than immigration. A life-changing partnership."
        subtitle="Lifetime Resettlement Services was founded to give individuals and families from Mauritius a trusted, licensed partner for their Canada journey — from first step to feeling at home."
        ctaLabel="Book a Consultation"
        ctaHref="/#contact"
      />

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div ref={missionRef} className={`reveal ${missionVisible ? 'visible' : ''}`}>
              <SectionLabel align="left">Who We Are</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-6">
                Licensed. Professional.<br />Genuinely human.
              </h2>
              <p className="text-navy-500 leading-relaxed mb-5">
                LRS was built around a simple belief: navigating Canada's immigration system should not mean facing it alone. We provide licensed, professional guidance rooted in real familiarity with the Mauritius–Canada journey.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                Unlike agencies that focus solely on filing forms, LRS stays with clients through every phase — assessment, application, arrival, and integration. Our settlement services mean arriving in Canada is the beginning of something great, not the end of our relationship.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((m) => (
                  <div key={m.stat} className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                    <p className="text-2xl font-black text-navy-900">{m.stat}</p>
                    <p className="text-xs text-navy-500 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 sm:h-[500px] rounded-2xl overflow-hidden shadow-card">
              <img src="/lrs-asset.jpg" alt="LRS professional consultation" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-sm">Where your journey begins</p>
                <p className="text-white/60 text-xs mt-0.5">Lifetime Resettlement Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-canada-red/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-canada-red" />
                  </div>
                  <h3 className="text-navy-900 font-semibold mb-2">{v.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RCIC Credentials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>CICC / RCIC Regulated</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">Your consultant's credentials</h2>
            <p className="text-navy-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              All LRS immigration advice is delivered by a licensed Regulated Canadian Immigration Consultant (RCIC),
              fully accountable to the College of Immigration and Citizenship Consultants.
            </p>
          </div>

          <div className="relative bg-navy-950 rounded-2xl p-8 lg:p-12 text-white overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover' }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
              <img
                src="/rcic-cric-logo.jpg"
                alt="RCIC · CRIC Official Insignia"
                className="h-28 w-auto object-contain flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">RCIC / CRIC Licensed</p>
                <h3 className="text-white text-2xl font-extrabold uppercase tracking-wide mb-1">Mr. Amalsingh Badal</h3>
                <p className="text-white/60 text-sm mb-1">RCIC · License #R510526</p>
                <p className="text-white/45 text-xs mb-5">Membre du Registre Québécois des Consultants en Immigration #11570</p>
                <a
                  href="https://register.college-ic.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white/45 text-xs underline underline-offset-2 hover:text-white/70 transition-colors"
                >
                  Verify status at register.college-ic.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div ref={whyRef} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel align="left">Why LRS</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-6">What makes us different</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                There are many immigration consultants in Canada. Very few have the specific cultural familiarity,
                bilingual capability, and end-to-end commitment that LRS brings to the Mauritius–Canada journey.
              </p>
              <div className="space-y-3">
                {differences.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden shadow-card">
              <img src="/tall-canada-img.jpg" alt="Canada — where LRS clients begin their next chapter" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-sm">Canada Place, Vancouver</p>
                <p className="text-white/60 text-xs mt-0.5">Where new chapters begin for LRS clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ConsultationCTA />
    </>
  );
}
