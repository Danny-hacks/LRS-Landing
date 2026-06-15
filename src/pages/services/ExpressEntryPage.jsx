import { Star, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import SectionLabel from '../../components/SectionLabel';

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
  return (
    <>
      <PageHero
        badge="Immigration Services"
        title="Express Entry &"
        titleAccent="Provincial Nominees"
        image="/canada-img5.jpg"
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
                How Express Entry works
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Express Entry is IRCC's electronic system for managing applications under three federal economic immigration programs. It ranks candidates using the Comprehensive Ranking System (CRS) and invites the highest-scoring profiles during regular draws.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                Provincial Nominee Programs (PNPs) align with Express Entry by allowing provinces to nominate candidates — adding 600 CRS points and virtually guaranteeing an ITA. LRS tracks both federal draws and provincial streams to find the fastest route for your profile.
              </p>
              <div className="bg-navy-50 rounded-xl border border-navy-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-navy-100">
                  <p className="text-navy-900 font-semibold text-xs uppercase tracking-wide">CRS Score Breakdown</p>
                </div>
                <div className="divide-y divide-navy-100">
                  {crsFactors.map(({ label, points }) => (
                    <div key={label} className="flex items-center justify-between px-5 py-2.5">
                      <span className="text-navy-600 text-sm">{label}</span>
                      <span className="text-canada-red font-semibold text-xs">{points}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-80 sm:h-[520px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img6.jpg" alt="Express Entry to Canada" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-navy-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Canada's top economic immigration program</p>
                <p className="text-navy-500 text-xs mt-0.5">Processed in 6–8 months after ITA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Programs */}
      <section className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel align="left">The Process</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                From profile creation to PR
              </h2>
              <p className="text-navy-500 leading-relaxed mb-3">
                Once you receive an ITA, you have exactly 60 days to submit a complete PR application. Missing this window means starting over. LRS ensures nothing is missed.
              </p>
              <div className="bg-navy-50 rounded-xl p-4 border border-navy-100 mb-8 flex items-start gap-3">
                <Clock size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                <p className="text-navy-600 text-xs leading-relaxed">Express Entry PR applications are typically processed within 6–8 months of submission. LRS monitors your application status throughout.</p>
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
            <div className="relative h-80 sm:h-[600px] rounded-2xl overflow-hidden shadow-card">
              <img src="/tall-canada-img.jpg" alt="Canada — Express Entry pathway" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Canada awaits your ITA</p>
                <p className="text-navy-500 text-xs mt-0.5">LRS manages every step of your 60-day window</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">Maximizing your profile, every step.</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                A higher CRS score means a faster invitation. LRS actively works to improve your score while managing your profile and monitoring every draw.
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
              <h3 className="text-navy-900 font-semibold text-lg mb-2">Get your CRS score estimate</h3>
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
