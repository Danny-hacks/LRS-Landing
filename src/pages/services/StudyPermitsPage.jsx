import { GraduationCap, Zap, Globe, Award, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const highlights = [
  { icon: Zap, title: 'Student Direct Stream (SDS)', description: 'Mauritius is eligible for SDS — faster processing (≈20 business days) with a streamlined document set including IELTS and a GIC.' },
  { icon: GraduationCap, title: 'Designated Learning Institutions', description: 'You must enrol at a IRCC-approved DLI. LRS guides you on which institutions qualify and how to obtain your acceptance letter.' },
  { icon: Globe, title: 'Work During Studies', description: 'Most students can work up to 24 hours per week during academic sessions and full-time during scheduled breaks. Conditions apply — LRS advises on current IRCC rules.' },
  { icon: Award, title: 'Post-Graduation Work Permit', description: 'After graduating from an eligible DLI, most students qualify for a PGWP valid up to 3 years — a major pathway to Canadian work experience and PR.' },
];

const processSteps = [
  { title: 'Choose a Designated Learning Institution', description: 'Research and apply to a IRCC-approved DLI. LRS advises on program selection, DLI eligibility, and what makes a strong application.' },
  { title: 'Receive Letter of Acceptance', description: 'Once accepted, your DLI sends a Letter of Acceptance (LOA) — a required document for your study permit application.' },
  { title: 'Gather Financial Documents', description: 'You must prove you can cover tuition + living expenses (~CAD $10,000/year). SDS applicants need a GIC of $10,000 CAD from an approved financial institution.' },
  { title: 'Apply for Study Permit', description: 'LRS prepares and submits your study permit application — SDS or regular stream — with a complete and accurate package.' },
  { title: 'Biometrics & Medical Exam', description: 'Biometrics are required for most applicants. A medical exam may be required depending on your intended program length and country of origin.' },
  { title: 'Receive PAL / Port of Entry', description: 'You receive a Port of Entry (PoE) Letter of Introduction or a study permit stamped on arrival. LRS briefs you on what to expect at the Canadian border.' },
];

const included = [
  'DLI selection guidance and acceptance letter support',
  'SDS vs. regular stream eligibility assessment',
  'Financial document checklist (GIC, bank statements)',
  'Study permit application preparation and review',
  'Biometrics and medical exam guidance',
  'Port of entry briefing',
  'Work authorization guidance (on/off campus)',
  'PGWP and post-graduation PR pathway planning',
];

const faqs = [
  {
    q: 'What is a Designated Learning Institution (DLI)?',
    a: 'A DLI is a school approved by a provincial or territorial government to host international students. Only DLIs are eligible for study permit applications for courses longer than 6 months. IRCC maintains a public DLI list which LRS uses to verify your school\'s eligibility.',
  },
  {
    q: 'Can I work in Canada on a study permit?',
    a: 'Most international students can work up to 24 hours per week during academic sessions and full-time during scheduled breaks (summer, winter holidays). Off-campus work is permitted for most programs without a separate work permit. LRS confirms the current conditions for your specific situation.',
  },
  {
    q: 'What is a GIC and do I need one?',
    a: 'A Guaranteed Investment Certificate (GIC) is a financial instrument held in a Canadian bank account serving as proof of living funds. SDS applicants must purchase a minimum $10,000 CAD GIC from an approved provider (RBC, CIBC, TD, etc.) before applying.',
  },
  {
    q: 'How long can I work in Canada after graduating?',
    a: 'PGWP duration matches your program length: programs under 8 months don\'t qualify; programs 8 months to under 2 years get a permit equal to the program length; programs 2 years or longer receive a 3-year PGWP. LRS plans your program choice around the best PGWP outcome.',
  },
  {
    q: 'What is the Student Direct Stream (SDS) and is Mauritius eligible?',
    a: 'SDS is a streamlined study permit stream for students from eligible countries, offering faster processing (~20 business days). Mauritius is an SDS-eligible country. SDS requires an upfront IELTS score, a GIC, and paid first-year tuition. LRS determines if SDS is the right approach for your situation.',
  },
];

export default function StudyPermitsPage() {
  const [ref1, v1] = useScrollReveal();
  const [ref2, v2] = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Immigration', href: '/#services' }, { label: 'Study Permits' }]}
        badge="Immigration Services"
        title="Study Permits for Canada"
        subtitle="From choosing a Designated Learning Institution to submitting a complete SDS or regular study permit application — LRS manages the full process and plans your post-graduation pathway."
        ctaLabel="Check My Eligibility"
        ctaHref="/#assessment"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref1} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Study in Canada, build your future
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                A study permit is required for most foreign nationals studying in Canada for longer than 6 months. You must have an accepted offer from a Designated Learning Institution (DLI) before applying.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4">
                As a Mauritius citizen, you may be eligible for the Student Direct Stream (SDS) — a faster, more streamlined application track available to students from select countries who can submit a complete document set upfront.
              </p>
              <p className="text-navy-500 leading-relaxed">
                Beyond the study permit, LRS plans your complete post-graduation journey: the PGWP, Canadian work experience, and the most suitable pathway to permanent residency.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h3 className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-4">Key Requirements</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Acceptance from DLI', required: true },
                  { label: 'Proof of funds (tuition + living)', required: true },
                  { label: 'GIC — $10,000 CAD (SDS)', required: true },
                  { label: 'IELTS / CELPIP / TEF', required: true },
                  { label: 'Police certificate', required: false },
                  { label: 'Medical exam (if required)', required: false },
                ].map(({ label, required }) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${required ? 'bg-canada-red' : 'bg-navy-300'}`} />
                    <span className="text-navy-600 text-xs">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy-400 text-[10px] mt-4">Red dot = required for all applicants. Grey = may apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Key Advantages</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">What studying in Canada means for you</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
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
                From acceptance to arrival
              </h2>
              <p className="text-navy-500 leading-relaxed">
                LRS manages the entire study permit process — and starts planning your post-graduation pathway from day one.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Study permit to PR — a complete plan.</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                LRS doesn't just file your study permit. We map out the full journey: program selection, study permit, PGWP, and the PR pathway that fits your career goals.
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
              <h3 className="text-navy-900 font-semibold mb-2">Ready to study in Canada?</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                Start with our free assessment. LRS will confirm your SDS eligibility, review your DLI options, and outline the complete study-to-PR pathway.
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
