import { Star, Award, Users, Zap, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const programs = [
  { icon: Star, title: 'Federal Skilled Worker', description: 'For skilled workers outside Canada with qualifying work experience, education, and language skills. Minimum CRS criteria apply.' },
  { icon: Award, title: 'Federal Skilled Trades', description: 'For qualified tradespeople with a valid job offer or certificate of qualification in an eligible skilled trade in Canada.' },
  { icon: Users, title: 'Canadian Experience Class', description: 'For temporary workers or international graduates already in Canada with Canadian work experience and language skills.' },
];

const crsFactors = [
  { label: 'Age', points: 'Up to 110' },
  { label: 'Education', points: 'Up to 150' },
  { label: 'Language (English / French)', points: 'Up to 160' },
  { label: 'Work Experience', points: 'Up to 80' },
  { label: 'Provincial Nomination', points: '+600 pts' },
  { label: 'Valid Job Offer', points: '+50–200' },
];

const processSteps = [
  { title: 'Program Eligibility Check', description: 'Confirm which of the three Express Entry programs you qualify for based on NOC occupation, experience, and language scores.' },
  { title: 'Language Testing', description: 'Complete an approved English (IELTS / CELPIP) or French (TEF / TCF) language test. LRS advises on the best test and preparation strategies.' },
  { title: 'Educational Credential Assessment', description: 'If your education was outside Canada, obtain an ECA from a designated organization. LRS guides you on which body to use.' },
  { title: 'Create Express Entry Profile', description: 'LRS assists you in creating a complete, optimized Express Entry profile in the IRCC portal.' },
  { title: 'Enter the Pool & Monitor Draws', description: 'Your profile is ranked against others. LRS monitors draws — including category-based draws (French, healthcare, STEM, trades).' },
  { title: 'Receive ITA & Submit PR Application', description: 'After receiving an Invitation to Apply, you have 60 days to submit a complete PR application. LRS handles the entire submission.' },
];

const included = [
  'Program eligibility determination and CRS estimate',
  'Language test strategy and score optimization',
  'ECA guidance and referrals',
  'Express Entry profile creation and management',
  'Draw monitoring and CRS improvement strategy',
  'Complete PR application within 60-day ITA window',
  'Document checklist and verification',
  'IRCC communications management',
];

const faqs = [
  {
    q: 'What CRS score do I need to get an ITA?',
    a: 'Cut-off scores change with every draw. All-program draws have recently ranged from 480–530. Category-specific draws (French, healthcare, STEM, trades) often have lower thresholds — sometimes 450–490. LRS monitors all draws and advises on your best strategy.',
  },
  {
    q: 'How long does an Express Entry profile stay in the pool?',
    a: 'Express Entry profiles are valid for 12 months. You can update your profile anytime and create a new one if your current profile expires.',
  },
  {
    q: 'What is a Provincial Nomination and how does it affect my CRS score?',
    a: 'A provincial nomination through Express Entry adds 600 CRS points, virtually guaranteeing an ITA in the next eligible draw. LRS actively monitors PNP draws that align with your profile.',
  },
  {
    q: 'How can I improve my CRS score?',
    a: 'Common strategies: retake language tests for higher scores, complete additional Canadian education, gain more Canadian work experience, obtain a provincial nomination, or apply for a job offer. LRS builds a personalized score improvement plan.',
  },
  {
    q: 'What are category-based draws?',
    a: 'Since 2023, IRCC holds draws targeting specific categories: French language proficiency, healthcare occupations, STEM, trade occupations, transport, and agriculture. These draws often have lower CRS minimums. LRS tracks these draws to identify the best timing for your profile.',
  },
];

export default function ExpressEntryPage() {
  const [ref1, v1] = useScrollReveal();
  const [ref2, v2] = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Immigration', href: '/#services' }, { label: 'Express Entry / PNPs' }]}
        badge="Immigration Services"
        title="Express Entry & Provincial Nominees"
        subtitle="Canada's flagship economic immigration system. LRS optimizes your CRS score, monitors every draw, and submits a complete application within your 60-day window."
        ctaLabel="Check My Eligibility"
        ctaHref="/#assessment"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref1} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                How Express Entry works
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Express Entry is IRCC's electronic system for managing applications under three federal economic immigration programs. It does not operate on a first-come, first-served basis — instead, it ranks candidates using the Comprehensive Ranking System (CRS) and invites the highest-scoring profiles to apply during regular draws.
              </p>
              <p className="text-navy-500 leading-relaxed">
                Provincial Nominee Programs (PNPs) align with Express Entry by allowing provinces to nominate candidates from the pool — adding 600 CRS points and virtually guaranteeing an ITA. LRS tracks both federal draws and provincial streams to identify the fastest route for your profile.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h3 className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-4">CRS Score Factors</h3>
              <ul className="space-y-3">
                {crsFactors.map(({ label, points }) => (
                  <li key={label} className="flex items-center justify-between">
                    <span className="text-navy-600 text-sm">{label}</span>
                    <span className="text-canada-red font-semibold text-xs">{points}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-navy-200">
                <p className="text-navy-500 text-xs leading-relaxed">CRS scores are cumulative. LRS builds a personalized score improvement strategy for your profile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Programs */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>The Three Programs</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">Which program do you qualify for?</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {programs.map(({ icon: Icon, title, description }) => (
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
                From profile creation to PR
              </h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                Once you receive an ITA, you have exactly 60 days to submit a complete PR application. Missing this window means starting over. LRS ensures nothing is missed.
              </p>
              <div className="bg-navy-50 rounded-xl p-5 border border-navy-100">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={14} className="text-canada-red" />
                  <span className="text-navy-900 font-semibold text-sm">Typical processing time</span>
                </div>
                <p className="text-navy-500 text-xs leading-relaxed">Express Entry PR applications are typically processed within 6–8 months of submission. LRS monitors your application status throughout.</p>
              </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Maximizing your profile, every step.</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                A higher CRS score means a faster invitation. LRS actively works to improve your score while managing your profile and monitoring every draw.
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
              <h3 className="text-navy-900 font-semibold mb-2">Get your CRS score estimate</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                Complete the free assessment and LRS will calculate your estimated CRS score and recommend the best draw strategy for your profile.
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
