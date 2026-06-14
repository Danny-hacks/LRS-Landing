import { CreditCard, Shield, Heart, Globe, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const threeSteps = [
  { icon: Shield, title: 'Social Insurance Number (SIN)', description: 'Issued by Service Canada — your SIN is required before you can work legally in Canada, file taxes, or access federal government programs. Apply in person at a Service Canada office or online after landing.' },
  { icon: Heart, title: 'Provincial Health Insurance Card', description: 'Most provinces have a 3-month waiting period after landing. LRS advises on interim coverage options so you\'re protected from day one.' },
  { icon: CreditCard, title: 'Canadian Bank Account', description: 'All major Canadian banks have Newcomer Banking Programs with waived fees for the first year. Open your account within days of landing using your COPR or PR card and passport.' },
];

const sinRequirements = [
  'Confirmation of Permanent Residence (COPR) OR PR card',
  'Valid passport',
  'No fee to obtain (free service from Service Canada)',
  'Issued same day at a Service Canada office',
  'Also available online at canada.ca',
];

const bankComparison = [
  { bank: 'RBC Royal Bank', program: 'RBC Newcomer Advantage', notes: 'Strong branch network across Canada. French/English.' },
  { bank: 'TD Canada Trust', program: 'TD New to Canada Banking Package', notes: 'Good mobile banking. Wide ATM network.' },
  { bank: 'Scotiabank', program: 'StartRight Program', notes: 'Strong credit card offer for newcomers. Fee waived 1 year.' },
  { bank: 'BMO', program: 'BMO NewStart Program', notes: 'Good for Montreal newcomers. French language services.' },
  { bank: 'National Bank / Desjardins', program: 'Newcomer packages available', notes: 'Best for Quebec and French-language services.' },
];

const included = [
  'Step-by-step SIN application guidance',
  'Province-specific health card registration',
  'Interim health insurance provider recommendations',
  'Bank account opening guidance and program comparison',
  'Secured credit card strategy for newcomers',
  'Tax filing overview (SIN required for T4/T1)',
  'Government benefits enrollment (Canada Child Benefit, etc.)',
  'First 30-day financial planning overview',
];

const faqs = [
  {
    q: 'When can I apply for my SIN?',
    a: 'You apply for your SIN after landing in Canada. Bring your COPR (or PR card once received) and passport to a Service Canada office. You receive your SIN the same day. LRS provides a complete list of Service Canada locations near your destination.',
  },
  {
    q: 'What interim health coverage should I get during the waiting period?',
    a: 'LRS recommends purchasing a travel/newcomer health insurance policy covering major medical emergencies and hospitalization for your first 3 months. Policies from insurers like Manulife, Sun Life, or Allianz typically cost CAD $80–$150/month per person. LRS recommends providers based on your family size and province.',
  },
  {
    q: 'Which bank is best for newcomers from Mauritius?',
    a: 'All Big 5 banks have newcomer programs. LRS\'s recommendation depends on your province and language preference. For Ontario newcomers, RBC and TD are popular. For Quebec or French-language service, National Bank or Desjardins are strong options. Scotiabank has a well-regarded credit card offer for newcomers.',
  },
  {
    q: 'How do I build credit history in Canada as a newcomer?',
    a: 'Start immediately: open a newcomer bank account, apply for a secured credit card (deposit-backed), use it regularly, and pay it off in full each month. Some banks offer newcomer unsecured credit cards. Within 6–12 months, you\'ll have a solid Canadian credit profile. LRS advises on the fastest path to good credit.',
  },
  {
    q: 'Do I need to file a Canadian tax return?',
    a: 'Yes — once you arrive in Canada and begin working, you\'ll need to file an annual tax return (T1 General) with the Canada Revenue Agency (CRA). You need a SIN to file. Most newcomers file for the first time in February–April of the year following their arrival. LRS provides an overview of what to expect.',
  },
];

export default function SinBankingPage() {
  const [ref1, v1] = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Settlement', href: '/#settlement' }, { label: 'SIN, Health Card & Banking' }]}
        badge="Settlement Services"
        title="SIN, Health Card & Banking Setup"
        subtitle="Three critical registrations in your first days in Canada. LRS guides you through your Social Insurance Number, provincial health card, and newcomer bank account — in the right order."
        ctaLabel="Book Orientation Session"
        ctaHref="/#contact"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref1} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3 mb-5">
              Your first week in Canada: three things that can't wait
            </h2>
            <p className="text-navy-500 leading-relaxed">
              Your Social Insurance Number, provincial health card, and bank account are the foundation of your life in Canada. LRS walks you through each one — what you need, where to go, and in what order — so nothing falls through the cracks.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {threeSteps.map(({ icon: Icon, title, description }) => (
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

      {/* SIN Requirements */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel align="left">Social Insurance Number</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                What you need to apply
              </h2>
              <p className="text-navy-500 leading-relaxed mb-6">
                The SIN is a 9-digit number used for working, filing taxes, and accessing government benefits. It is free and typically issued the same day at a Service Canada office. It is your most important document in Canada after your passport and PR card.
              </p>
              <ul className="space-y-3">
                {sinRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel align="left">Newcomer Banking Programs</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Choosing the right bank
              </h2>
              <p className="text-navy-500 leading-relaxed mb-6">
                Every major Canadian bank offers a Newcomer Banking Program with reduced or waived monthly fees for the first year. LRS compares the programs and recommends the best fit for your province and language needs.
              </p>
              <div className="space-y-3">
                {bankComparison.map(({ bank, program, notes }) => (
                  <div key={bank} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-navy-900 font-semibold text-sm">{bank}</p>
                    <p className="text-canada-red text-xs font-medium">{program}</p>
                    <p className="text-navy-500 text-xs mt-1">{notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 lg:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel align="left">What LRS Provides</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Your first 30 days, organized.</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                LRS maps out a clear, day-by-day action plan for your first month in Canada — so you complete each registration in the right order without missing a step.
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
              <h3 className="text-navy-900 font-semibold mb-2">Get your first-month action plan</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                LRS provides a customized day-by-day action plan for your first 30 days in Canada — covering every registration, appointment, and financial step.
              </p>
              <Link to="/#contact" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary">
                Book a Session
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
