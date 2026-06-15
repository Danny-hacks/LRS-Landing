import { Briefcase, Globe, Shield, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import SectionLabel from '../../components/SectionLabel';

const permitTypes = [
  { icon: Briefcase, title: 'LMIA-Based Permits', description: 'Employer obtains a Labour Market Impact Assessment proving no Canadian worker was available. LRS guides both employee and employer through the process.' },
  { icon: Globe, title: 'Open Work Permits', description: 'Work for any employer in Canada. Common types: Post-Graduation (PGWP), Spousal (SOWP), and Bridging Open Work Permits (BOWP).' },
  { icon: Shield, title: 'LMIA-Exempt Streams', description: 'Intra-company transfers, CUSMA professionals, International Mobility Program (IMP), and significant benefit categories.' },
  { icon: Users, title: 'International Experience Canada', description: 'Youth work permits for eligible countries. Over 35 countries participate in IEC — LRS confirms your eligibility and guides the application.' },
];

const lmiaExempt = [
  'Post-Graduation Work Permit (PGWP)',
  'Spousal Open Work Permit (SOWP)',
  'Intra-Company Transfer (ICT)',
  'CUSMA / USMCA Professionals',
  'International Mobility Program (IMP)',
  'International Experience Canada (IEC)',
  'Significant Benefit to Canada (R205)',
  'Bridging Open Work Permit (BOWP)',
];

const processSteps = [
  { title: 'Stream Identification', description: 'LRS determines whether an LMIA is required or if an exempt category applies — and which exempt stream best matches your situation.' },
  { title: 'Employer Guidance (LMIA)', description: 'For LMIA-based permits, LRS advises the employer on recruitment advertising, documentation, and ESDC submission requirements.' },
  { title: 'Document Preparation', description: 'We compile all required documents: employment contract, LMIA confirmation, proof of qualifications, and valid passport.' },
  { title: 'Work Permit Application', description: 'LRS prepares and submits your work permit application — from outside Canada (visa office) or from within (in-Canada extension).' },
  { title: 'Decision & Travel', description: 'Upon approval, LRS reviews your work permit for accuracy and advises on travel conditions and port of entry requirements.' },
];

const included = [
  'Stream identification and eligibility check',
  'LMIA process guidance for employers',
  'LMIA-exempt category confirmation',
  'Complete work permit application preparation',
  'Open work permit applications (PGWP, SOWP, BOWP)',
  'In-Canada extension applications',
  'Port of entry briefing',
  'Pathway to PR planning',
];

const faqs = [
  {
    q: 'Can my family accompany me on a work permit?',
    a: 'Spouses of skilled workers (TEER 0, 1, 2, or 3) may be eligible for a Spousal Open Work Permit. Dependent children can study in Canada. LRS advises on the full family application package.',
  },
  {
    q: 'What is the difference between an Open Work Permit and an employer-specific permit?',
    a: 'An Open Work Permit (OWP) lets you work for any employer in Canada with no restrictions. An employer-specific permit ties you to one employer, one location, and one NOC code. LRS identifies which type applies to your situation.',
  },
  {
    q: 'What happens if my work permit expires while my PR is pending?',
    a: 'You may apply for a Bridging Open Work Permit (BOWP) if you have a pending PR application and your current permit expires before a decision. LRS monitors your status and files the BOWP at the right time.',
  },
  {
    q: 'Which countries can apply under IEC?',
    a: 'Over 35 countries participate in International Experience Canada. Eligible young adults (typically under 35) can apply for working holiday or young professionals permits. LRS confirms your country\'s participation and checks current IEC quotas and availability.',
  },
  {
    q: 'What is a Post-Graduation Work Permit (PGWP)?',
    a: 'After graduating from an eligible Canadian Designated Learning Institution (DLI), most graduates qualify for a PGWP — an open work permit valid for the length of their study program (up to 3 years). This is a key pathway to Canadian work experience and eventual PR.',
  },
];

export default function WorkPermitsPage() {
  return (
    <>
      <PageHero
        badge="Immigration Services"
        title="Work Permits"
        titleAccent="for Canada"
        image="/lrs-asset.jpg"
        compact
      />

      {/* Overview */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Work legally in Canada</h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                A work permit allows foreign nationals to work legally in Canada for a specific employer (employer-specific) or for any employer (open work permit). The type of permit you need depends on your situation, employer, occupation, and immigration status.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4" id="lmia">
                Most work permits are either LMIA-based — where the employer must prove no Canadian was available — or LMIA-exempt under international agreements and humanitarian categories.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                LRS determines which stream applies, manages the full application, and plans your pathway from temporary worker to permanent resident.
              </p>
              <div className="bg-navy-50 rounded-xl border border-navy-100 p-5">
                <p className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-3">LMIA-Exempt Categories</p>
                <div className="grid grid-cols-2 gap-2">
                  {lmiaExempt.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={11} className="text-canada-red flex-shrink-0 mt-0.5" />
                      <span className="text-navy-600 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-80 sm:h-[520px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img6.jpg" alt="Working in Canada" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-navy-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Work legally in Canada</p>
                <p className="text-navy-500 text-xs mt-0.5">LRS identifies your permit stream and files the application</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Types */}
      <section className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Permit Categories</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">Which work permit applies to you?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {permitTypes.map(({ icon: Icon, title, description }) => (
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

      {/* Process */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel align="left">The Process</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">How LRS manages your work permit</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                Work permit applications vary significantly by stream. LRS ensures the right documents are filed in the right way — for both LMIA-based and LMIA-exempt applications.
              </p>
              <div className="space-y-5">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-canada-red text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-navy-900 font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-navy-500 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 sm:h-[520px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img7.jpg" alt="Canada work permit pathway" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Temporary worker to permanent resident</p>
                <p className="text-navy-500 text-xs mt-0.5">LRS maps your full pathway from permit to PR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What LRS Handles — dark section */}
      <section className="relative py-20 lg:py-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-canada-red text-xs font-bold uppercase tracking-widest mb-3">What LRS Handles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">From permit to permanent residency.</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                LRS manages your work permit and plans the path to permanent residency — whether through Express Entry, a PNP, or another stream suited to your occupation.
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
              <h3 className="text-navy-900 font-semibold text-lg mb-2">Not sure which permit you need?</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                Start with LRS's free assessment. We'll identify your stream, confirm eligibility, and outline your complete work permit pathway.
              </p>
              <Link to="/#assessment" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary">
                Start Free Assessment
              </Link>
              <Link to="/#contact" className="inline-flex items-center justify-center w-full mt-3 px-6 py-3.5 rounded-lg border border-navy-200 text-navy-700 font-semibold text-sm hover:bg-navy-50 transition-colors">
                Speak with a Consultant
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
