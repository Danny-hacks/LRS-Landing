import { Heart, Users, Home, Shield, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const categories = [
  { icon: Heart, title: 'Spouse / Common-Law / Conjugal Partner', description: 'Outland (outside Canada) or Inland (partner already in Canada) processing. Inland applicants may receive an Open Work Permit while waiting.' },
  { icon: Users, title: 'Dependent Children', description: 'Biological or adopted children under 22 who are not married or in a common-law relationship. Children 22+ may qualify if financially dependent due to a disability.' },
  { icon: Home, title: 'Parents & Grandparents', description: 'The PGP program offers permanent residency for parents and grandparents. The Super Visa provides a multi-entry visitor visa valid 10 years with stays up to 5 years per entry.' },
  { icon: Shield, title: 'Other Eligible Relatives', description: 'In limited circumstances (e.g., only relative in the world), other relatives may be sponsored. LRS assesses your specific situation.' },
];

const sponsorRequirements = [
  'Must be a Canadian citizen or permanent resident',
  'Must be 18 years of age or older',
  'Must meet the Low-Income Cut-Off (LICO) + 30% income threshold',
  'Must not be under a removal order, in prison, or bankrupt',
  'Must not have a prior sponsorship default or failure to pay support orders',
  'Must sign a multi-year undertaking to support the sponsored person',
];

const processSteps = [
  { title: 'Eligibility Assessment', description: 'LRS assesses both sponsor and sponsored person eligibility — income, status, relationship, and admissibility.' },
  { title: 'Relationship Documentation', description: 'We build a thorough document package proving the genuineness of the relationship: photos, communication records, joint finances, statutory declarations.' },
  { title: 'Stage 1 — Sponsorship Approval', description: 'IRCC first assesses the sponsor\'s eligibility and income. LRS ensures every document is in order before submission.' },
  { title: 'Stage 2 — Sponsored Person Application', description: 'Once sponsorship is approved, IRCC processes the sponsored person\'s PR application. LRS manages both stages concurrently where possible.' },
  { title: 'Medical, Biometrics & Security', description: 'The sponsored person undergoes required medical exams and provides biometrics. LRS prepares the full package and follows up on requests.' },
  { title: 'Approval & COPR', description: 'Upon approval, a Confirmation of Permanent Residence is issued. LRS assists with pre-arrival planning for your reunited family.' },
];

const included = [
  'Eligibility assessment for both sponsor and sponsored',
  'Income threshold calculation (LICO + 30%)',
  'Comprehensive relationship document package',
  'Application form preparation and review',
  'Inland OWP application (spouse/partner)',
  'Super Visa applications for parents/grandparents',
  'Procedural fairness letter responses',
  'Pre-arrival settlement planning',
];

const faqs = [
  {
    q: 'How long does spouse/partner sponsorship take?',
    a: 'Outland sponsorship is typically processed in 12–18 months. Inland processing varies but is generally similar. IRCC publishes current service standards. LRS monitors your application and provides regular updates.',
  },
  {
    q: 'Can my spouse work in Canada while the sponsorship is pending?',
    a: 'In the Inland stream, your spouse or common-law partner can apply for an Open Work Permit on humanitarian and compassionate grounds while the sponsorship application is in progress. LRS includes this in the initial filing.',
  },
  {
    q: 'What documents prove a genuine relationship?',
    a: 'Examples: marriage certificate or evidence of cohabitation, photographs together over time, messaging and call logs, joint bank accounts or travel records, correspondence, and sworn statutory declarations from people who know you as a couple. LRS builds the strongest possible evidence package.',
  },
  {
    q: 'What is the Super Visa and how does it differ from PGP?',
    a: 'The Super Visa is a visitor visa allowing parents and grandparents to stay in Canada for up to 5 years per entry, valid for 10 years. The Parents and Grandparents Program (PGP) leads to permanent residency with an annual intake. LRS advises on which option suits your family\'s timeline.',
  },
  {
    q: 'What is the minimum income required to sponsor a family member?',
    a: 'Sponsors must meet the Low-Income Cut-Off (LICO) plus 30%. The exact threshold depends on the size of the family unit and changes annually. LRS calculates your specific requirement and advises on how to demonstrate income sufficiency.',
  },
];

export default function FamilySponsorshipPage() {
  const [ref1, v1] = useScrollReveal();
  const [ref2, v2] = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Immigration', href: '/#services' }, { label: 'Family Sponsorship' }]}
        badge="Immigration Services"
        title="Family Sponsorship to Canada"
        subtitle="Reunite with the people who matter most. LRS manages every stage of the sponsorship process — from eligibility to your family's first day in Canada together."
        ctaLabel="Book a Consultation"
        ctaHref="/#contact"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref1} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Bring your family to Canada
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Canadian citizens and permanent residents can sponsor close family members to come to Canada as permanent residents. The Family Class sponsorship program is built on the principle of family reunification.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4">
                The sponsorship process has two stages: first, IRCC assesses the sponsor's eligibility and willingness to support the sponsored person. Second, the sponsored person's own PR application is assessed.
              </p>
              <p className="text-navy-500 leading-relaxed">
                LRS manages both stages concurrently, building the strongest possible evidence package for your relationship and ensuring every requirement is met — from income thresholds to relationship documentation.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h3 className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-4">Sponsor Requirements</h3>
              <ul className="space-y-2.5">
                {sponsorRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-canada-red flex-shrink-0 mt-1" />
                    <span className="text-navy-600 text-xs leading-snug">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Who Can You Sponsor</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">Eligible family members</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(({ icon: Icon, title, description }) => (
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
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref2} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel align="left">The Process</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                How LRS reunites your family
              </h2>
              <p className="text-navy-500 leading-relaxed">
                Sponsorship applications are assessed in two stages. LRS manages both simultaneously, building a complete and compelling file from the start.
              </p>
            </div>
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
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 lg:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel align="left">What LRS Handles</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Every document. Every stage.</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                Sponsorship refusals often come down to relationship documentation. LRS builds a comprehensive, compelling evidence package that presents your relationship clearly and thoroughly.
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
              <h3 className="text-navy-900 font-semibold mb-2">Ready to start the sponsorship process?</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                Book a consultation with LRS. We'll assess your sponsorship eligibility and outline the complete process and timeline for your family's reunification.
              </p>
              <Link to="/#contact" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary">
                Book a Consultation
              </Link>
              <Link to="/#assessment" className="inline-flex items-center justify-center w-full mt-3 px-6 py-3.5 rounded-lg border border-navy-200 text-navy-700 font-semibold text-sm hover:bg-navy-50 transition-colors">
                Start Free Assessment
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
