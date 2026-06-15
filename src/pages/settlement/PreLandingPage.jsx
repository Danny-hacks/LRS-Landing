import { MapPin, Shield, BookOpen, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import SectionLabel from '../../components/SectionLabel';

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
    a: 'Most provinces have a 3-month waiting period after landing before your provincial health card is active. During this period, LRS advises on private interim coverage from insurers that offer newcomer plans — often CAD $80–150 per month per person.',
  },
  {
    q: 'Can I open a Canadian bank account before arriving?',
    a: 'Some banks (RBC, TD, Scotiabank) allow you to start the account opening process online before you land. However, you typically need to visit a branch in person to complete activation with your Canadian documents. LRS advises on the best timing and process for your situation.',
  },
  {
    q: 'Do my children need to enrol in school before arriving?',
    a: 'You can enrol children in school after arrival. Canadian public schools are free from Kindergarten to Grade 12. LRS provides guidance on registration requirements, language assessment processes, and what to expect on their first day.',
  },
];

export default function PreLandingPage() {
  return (
    <>
      <PageHero
        badge="Settlement Services"
        title="Pre-Landing Orientation"
        titleAccent="for Canada"
        image="/canada-img4.jpg"
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
                Know what to do before you land
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Getting your visa or PR approval is a major milestone — but landing in Canada can still feel overwhelming without the right preparation. LRS's pre-landing orientation gives you a clear, step-by-step picture of what to expect in your first days and weeks.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                Every session is personalized to your destination province, family size, and immigration status. You'll receive a customized landing checklist, province-specific guidance, and referrals to settlement resources in your destination city.
              </p>
              <div className="space-y-3">
                {[
                  { label: '1–3 months before landing', note: 'Best for full preparation — time to arrange insurance, banking, housing' },
                  { label: '2–4 weeks before landing', note: 'Standard timeline — covers all critical first steps' },
                  { label: 'Within 2 weeks', note: 'Rush sessions available — essential landing checklist prioritized' },
                ].map(({ label, note }) => (
                  <div key={label} className="flex items-start gap-3 bg-navy-50 rounded-xl p-4 border border-navy-100">
                    <Clock size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-navy-900 font-semibold text-sm">{label}</p>
                      <p className="text-navy-500 text-xs mt-0.5">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 sm:h-[520px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img5.jpg" alt="Arriving in Canada prepared" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-navy-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Arrive confident. Land prepared.</p>
                <p className="text-navy-500 text-xs mt-0.5">LRS customizes your orientation to your province and family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel align="left">How It Works</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">Your orientation, step by step</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                LRS's pre-landing orientation is delivered one-on-one by your consultant — customized to your province, family, and landing timeline.
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
            <div className="relative h-80 sm:h-[540px] rounded-2xl overflow-hidden shadow-card">
              <img src="/canada-img4.jpg" alt="Canada — first landing steps" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Your first 30 days in Canada, organized</p>
                <p className="text-navy-500 text-xs mt-0.5">Sessions via video call or in-person, in English or French</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist — dark section */}
      <section className="relative py-20 lg:py-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-canada-red text-xs font-bold uppercase tracking-widest mb-3">Your Landing Checklist</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">Everything you need to do in your first 30 days.</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                LRS provides a personalized, province-specific checklist covering every step from airport arrival to your first month settled in Canada.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-navy-900 font-semibold text-lg mb-2">Book your pre-landing session</h3>
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
