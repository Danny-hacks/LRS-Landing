import { MapPin, Shield, BookOpen, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const topicsCovered = [
  { icon: Shield, title: 'Understanding Your COPR', description: 'What your Confirmation of Permanent Residence means, what to declare at the border, and documents to carry on arrival.' },
  { icon: BookOpen, title: 'Healthcare & Provincial Health Card', description: 'The 3-month waiting period in most provinces, interim coverage options, and how to register with a family doctor.' },
  { icon: MapPin, title: 'SIN & Banking Setup', description: 'Where to get your Social Insurance Number (Service Canada), how to open a newcomer bank account, and which bank programs exist for new arrivals.' },
  { icon: Calendar, title: 'Education & Schools', description: 'How the Canadian education system works (elementary, secondary, post-secondary), school registration, and what to expect in the classroom.' },
];

const checklist = [
  'What to bring and declare at the port of entry',
  'First 24–48 hours: what to do immediately upon landing',
  'Provincial health card: 3-month wait period by province',
  'Interim health coverage: providers and options',
  'SIN application: what to bring, where to go',
  'Banking: newcomer programs at RBC, TD, Scotiabank, CIBC, BMO',
  'Driver\'s licence exchange or conversion',
  'School registration for children',
  'Cultural orientation: workplace and social norms',
  'Referrals to settlement agencies in your destination city',
];

const processSteps = [
  { title: 'Schedule Pre-Landing Session', description: 'Book a 1-on-1 session with LRS (video call or in-person). Sessions are customized to your family size, destination province, and landing date.' },
  { title: 'Review Your Landing Documents', description: 'We review your COPR, travel documents, and port of entry requirements together — so there are no surprises at the border.' },
  { title: 'Receive Customized Checklist', description: 'LRS provides a province-specific, family-specific landing checklist covering everything you\'ll need in your first 30 days.' },
  { title: 'Healthcare & Banking Guidance', description: 'We walk through your interim health coverage options, which bank newcomer programs fit your needs, and how to apply for each.' },
  { title: 'Community & Employment Resources', description: 'LRS connects you with settlement agencies, community organizations, and employment programs in your destination city.' },
];

const faqs = [
  {
    q: 'When should I book a pre-landing orientation?',
    a: 'Ideally 1–3 months before your planned landing date — early enough to arrange interim health insurance, set up a bank account, and prepare your documents. LRS also offers last-minute sessions within 2 weeks of landing.',
  },
  {
    q: 'Is a pre-landing orientation only for PR holders?',
    a: 'No — LRS offers orientation for any newcomer: permanent residents, skilled workers on work permits, students, and family members accompanying a sponsored spouse. The content is tailored to your immigration status.',
  },
  {
    q: 'What is the health card waiting period and how do I get covered in the meantime?',
    a: 'Most provinces have a 3-month waiting period after landing before your provincial health card is active (e.g., Ontario\'s OHIP, BC\'s MSP). During this period, LRS advises on private interim coverage from insurers that offer newcomer plans — often CAD $80–150 per month per person.',
  },
  {
    q: 'Can I open a Canadian bank account before arriving?',
    a: 'Some banks (RBC, TD, Scotiabank) allow you to start the account opening process online before you land. However, you typically need to visit a branch in person to complete activation with your Canadian documents (COPR or PR card). LRS advises on the best timing and process for your situation.',
  },
  {
    q: 'Do my children need to enrol in school before arriving?',
    a: 'You can enrol children in school after arrival. Canadian public schools are free from Kindergarten to Grade 12. LRS provides guidance on registration requirements, language assessment processes, and what to expect on their first day.',
  },
];

export default function PreLandingPage() {
  const [ref1, v1] = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Settlement', href: '/#settlement' }, { label: 'Pre-Landing Orientation' }]}
        badge="Settlement Services"
        title="Pre-Landing Orientation for Canada"
        subtitle="Arrive in Canada informed and prepared. LRS provides a comprehensive, personalized orientation so you know exactly what to do from the moment you land."
        ctaLabel="Book Orientation Session"
        ctaHref="/#contact"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref1} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Know what to do before you land
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Getting your visa or PR approval is a major milestone — but landing in Canada can still feel overwhelming without the right preparation. LRS's pre-landing orientation gives you a clear, step-by-step picture of what to expect and what to do in your first days and weeks in Canada.
              </p>
              <p className="text-navy-500 leading-relaxed">
                Every session is personalized — your destination province, your family size, your immigration status, and your specific timeline. You'll receive a customized landing checklist, province-specific guidance, and referrals to the best settlement resources in your destination city.
              </p>
            </div>
            <div className="bg-canada-red/5 border border-canada-red/20 rounded-2xl p-6">
              <h3 className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-4 text-canada-red">Ideal Timing</h3>
              <div className="space-y-3">
                {[
                  { label: '1–3 months before landing', note: 'Best for full preparation' },
                  { label: '2–4 weeks before landing', note: 'Standard timeline' },
                  { label: 'Within 2 weeks', note: 'Rush sessions available' },
                ].map(({ label, note }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Clock size={12} className="text-canada-red mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-navy-700 font-medium text-sm">{label}</p>
                      <p className="text-navy-500 text-xs">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>What's Covered</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">Every topic that matters for arrival</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicsCovered.map(({ icon: Icon, title, description }) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel align="left">How It Works</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Your orientation, step by step</h2>
              <p className="text-navy-500 leading-relaxed">
                LRS's pre-landing orientation is delivered one-on-one by your consultant — customized to your province, family, and landing timeline.
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

      {/* Checklist */}
      <section className="py-20 lg:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel align="left">What We Cover</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Your complete landing checklist</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                LRS provides a personalized, province-specific checklist covering every step from airport arrival to your first month settled in Canada.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <h3 className="text-navy-900 font-semibold mb-2">Book your pre-landing session</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                Sessions are available via video call or in-person at our Canada or Mauritius office. Conducted in English or French based on your preference.
              </p>
              <Link to="/#contact" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary">
                Book Orientation Session
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
