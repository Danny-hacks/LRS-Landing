import { Award, MapPin, Users, Shield, Clock, FileCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const pathways = [
  { icon: Award, title: 'Express Entry', description: 'Federal Skilled Worker, Skilled Trades, and Canadian Experience Class — ranked by CRS score with regular draws.' },
  { icon: MapPin, title: 'Provincial Nominee Programs', description: 'Over 80 provincial streams targeting specific occupations, regions, and immigration profiles across Canada.' },
  { icon: Users, title: 'Family Class', description: 'Sponsorship of spouses, common-law partners, dependent children, and parents/grandparents by Canadian citizens or PRs.' },
  { icon: Shield, title: 'Humanitarian Grounds', description: 'Humanitarian and compassionate applications for those with significant ties to Canada or exceptional circumstances.' },
];

const processSteps = [
  { title: 'Eligibility Assessment', description: 'LRS evaluates your education, work experience, language proficiency, and age against all available PR pathways to identify your strongest options.' },
  { title: 'Pathway Selection', description: 'We recommend the most viable and strategic route based on your profile, timeline, and provincial opportunities.' },
  { title: 'Document Preparation', description: 'We prepare a complete document checklist: police certificates, proof of funds, employment letters, and educational credentials.' },
  { title: 'Application Submission', description: 'LRS prepares, reviews, and submits your application with every form completed to IRCC standards — nothing is missed.' },
  { title: 'Medical Exam & Biometrics', description: 'We guide you through required medical exams at authorized panel physicians and biometrics enrollment.' },
  { title: 'Decision & COPR', description: 'Upon approval, you receive a Confirmation of Permanent Residence (COPR) — your gateway to permanent life in Canada.' },
];

const included = [
  'Full eligibility assessment across all PR pathways',
  'CRS score calculation and optimization strategy (Express Entry)',
  'Complete application form preparation and review',
  'Document checklist and sourcing guidance',
  'Correspondence with IRCC on your behalf',
  'Status monitoring and progress updates',
  'Procedural fairness letter responses',
  'Pre-arrival settlement planning',
];

const faqs = [
  {
    q: 'How long does PR processing take?',
    a: 'Processing times vary by stream. Express Entry typically takes 6–8 months. PNP pathways can take 12–20 months. Family sponsorship ranges from 8–24 months. LRS monitors your application and keeps you informed throughout.',
  },
  {
    q: 'Do I need a job offer to get PR?',
    a: 'For most Express Entry streams, a valid job offer adds CRS points but is not required if your overall score is competitive. Some PNP streams do require one. LRS advises based on your full profile.',
  },
  {
    q: 'Can I work in Canada while my PR application is processed?',
    a: 'If you hold a valid work permit, yes. IRCC also offers "maintained status" allowing you to continue working while a permit renewal or bridging open work permit is pending.',
  },
  {
    q: 'What happens if my PR application is refused?',
    a: 'LRS will review the refusal letter with you and advise on reapplication, responding to a procedural fairness letter, or pursuing alternative pathways suited to your profile.',
  },
  {
    q: 'Do I lose PR status if I travel outside Canada?',
    a: 'You maintain PR status as long as you spend at least 730 days in Canada every 5-year rolling period. Certain time spent abroad (e.g., working for a Canadian employer) may also count toward this requirement.',
  },
];

export default function PermanentResidencyPage() {
  const [overviewRef, overviewVisible] = useScrollReveal();
  const [processRef, processVisible]   = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Immigration', href: '/#services' }, { label: 'Permanent Residency' }]}
        badge="Immigration Services"
        title="Permanent Residency in Canada"
        subtitle="Build your future in Canada with a pathway to permanent resident status — the right to live, work, and study anywhere in the country, permanently."
        ctaLabel="Book a Consultation"
        ctaHref="/#contact"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={overviewRef} className={`reveal grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start`}>
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Your path to becoming a Canadian permanent resident
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Permanent Residency (PR) gives you the right to live, work, and study anywhere in Canada — indefinitely. As a PR holder, you access most social benefits including healthcare, education, and social services available to citizens.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4">
                You maintain PR status as long as you spend at least 730 days in Canada every 5 years. After meeting residency requirements, most PR holders become eligible for Canadian citizenship.
              </p>
              <p className="text-navy-500 leading-relaxed">
                Canada offers multiple PR pathways. LRS assesses your full profile and identifies the most viable and strategic route — whether that's Express Entry, a Provincial Nominee Program, or another stream entirely.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h3 className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                {[
                  { icon: Clock, label: 'Processing Time', sub: '6–24 months depending on stream' },
                  { icon: FileCheck, label: 'Application Type', sub: 'Online (IRCC portal) or paper' },
                  { icon: Users, label: 'Includes Family', sub: 'Spouse & dependent children' },
                  { icon: Shield, label: 'Path to Citizenship', sub: '3 of 5 years after PR grant' },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon size={14} className="text-canada-red mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-navy-700 font-medium text-sm">{label}</p>
                      <p className="text-navy-500 text-xs mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Pathways to PR</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">Which pathway is right for you?</h2>
            <p className="text-navy-500 mt-4 max-w-xl mx-auto text-sm">
              Canada offers numerous PR streams. LRS identifies the best fit based on your profile, timeline, and goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map(({ icon: Icon, title, description }) => (
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
        <div ref={processRef} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel align="left">The Process</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                How LRS guides you to PR
              </h2>
              <p className="text-navy-500 leading-relaxed">
                From initial assessment through to your Confirmation of Permanent Residence,
                LRS manages every stage with precision and care.
              </p>
            </div>
            <div className="space-y-6">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Everything. Start to finish.</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                You don't need to navigate IRCC's complex requirements alone. LRS handles the full process — preparation, submission, and follow-through.
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
              <h3 className="text-navy-900 font-semibold mb-2">Ready to explore your PR pathway?</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                Start with a free eligibility assessment. LRS reviews your profile and recommends the strongest pathway within 2 business days.
              </p>
              <Link
                to="/#assessment"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary"
              >
                Start Free Assessment
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center w-full mt-3 px-6 py-3.5 rounded-lg border border-navy-200 text-navy-700 font-semibold text-sm hover:bg-navy-50 transition-colors"
              >
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
