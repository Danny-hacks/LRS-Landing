import { Award, MapPin, Users, Shield, Clock, FileCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import SectionLabel from '../../components/SectionLabel';

const quickFacts = [
  { icon: Clock, label: 'Processing Time', sub: '6–24 months by stream' },
  { icon: FileCheck, label: 'Application Type', sub: 'Online IRCC portal' },
  { icon: Users, label: 'Includes Family', sub: 'Spouse & dependents' },
  { icon: Shield, label: 'Path to Citizenship', sub: '3 of 5 years as PR' },
];

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
  'CRS score calculation and optimization strategy',
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
  return (
    <>
      <PageHero
        badge="Immigration Services"
        title="Permanent Residency"
        titleAccent="in Canada"
        image="/canada-img3.jpg"
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
                Your path to becoming a Canadian permanent resident
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Permanent Residency (PR) gives you the right to live, work, and study anywhere in Canada — indefinitely. As a PR holder, you access most social benefits including healthcare, education, and social services available to citizens.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                Canada offers multiple PR pathways. LRS assesses your full profile and identifies the most viable and strategic route — whether that's Express Entry, a Provincial Nominee Program, or another stream entirely.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {quickFacts.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                    <Icon size={14} className="text-canada-red mb-2" />
                    <p className="text-navy-900 font-semibold text-sm">{label}</p>
                    <p className="text-navy-500 text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 sm:h-[480px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img4.jpg" alt="Canada — permanent residency" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Permanent Resident Status</p>
                <p className="text-navy-500 text-xs mt-0.5">The right to live and work anywhere in Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel align="left">The Process</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                How LRS guides you to PR
              </h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                From initial assessment through to your Confirmation of Permanent Residence,
                LRS manages every stage with precision and care.
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
            <div className="relative h-80 sm:h-[560px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img3.jpg" alt="Canada immigration process" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-navy-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Your COPR — the gateway to permanent life</p>
                <p className="text-navy-500 text-xs mt-0.5">Express Entry processed in 6–8 months</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">Everything. Start to finish.</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                You don't need to navigate IRCC's complex requirements alone. LRS handles the full process — preparation, submission, and follow-through.
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
              <h3 className="text-navy-900 font-semibold text-lg mb-2">Ready to explore your PR pathway?</h3>
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
                to="/contact"
                className="inline-flex items-center justify-center w-full mt-3 px-6 py-3.5 rounded-lg border border-navy-200 text-navy-700 font-semibold text-sm hover:bg-navy-50 transition-colors"
              >
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
