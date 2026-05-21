// ─── Three Steps: Dark atmospheric section — Canada image bg, white cards, arrows
// WordPress note: Thrive section with image + overlay + 3-column card layout
import { MessageCircle, FileText, Home, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Free Consultation',
    text: 'A clear, honest conversation about your profile, goals, and options. We tell you exactly where you stand — no jargon, no obligation.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Application Support',
    text: 'We prepare your documents, strategy, and submission with professional care. Every file is reviewed before it reaches IRCC.',
  },
  {
    number: '03',
    icon: Home,
    title: 'Settlement Guidance',
    text: 'Housing, SIN registration, banking, healthcare, employment readiness — LRS stays with you through your first weeks in Canada.',
  },
];

function StepCard({ step }) {
  const Icon = step.icon;
  return (
    <div className="bg-white rounded-2xl p-7 shadow-card-hover flex flex-col h-full">
      <div className="text-5xl font-black leading-none mb-4 tabular-nums select-none"
        style={{ color: 'rgba(200,16,46,0.45)' }}>
        {step.number}
      </div>
      <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
        <Icon size={20} className="text-navy-700" />
      </div>
      <h3 className="text-navy-900 text-lg font-bold mb-2.5 tracking-tight">{step.title}</h3>
      <p className="text-navy-500 text-sm leading-relaxed flex-1">{step.text}</p>
    </div>
  );
}

export default function ThreeSteps() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '7rem' }}>

      {/* Canada image background */}
      <img
        src="/cn-img.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      {/* Maple pattern texture layer */}
      <div className="absolute inset-0" style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }} aria-hidden="true" />
      {/* Rich dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(140,5,20,0.90) 0%, rgba(100,5,15,0.82) 100%)' }} />

      {/* Wave top edge — ServiceGrid warm-50 above curves down */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
          <path d="M0,28 C360,56 1080,0 1440,28 L1440,0 L0,0 Z" fill="#fdfcfb" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block text-canada-red text-xs font-bold uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Your Canada journey, in three steps.
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Licensed guidance, clear process, one partner from first question to first home.
          </p>
        </div>

        {/* Desktop: 3 cards with visible arrow connectors */}
        <div className="hidden md:grid items-stretch gap-0" style={{ gridTemplateColumns: '1fr 52px 1fr 52px 1fr' }}>
          <StepCard step={steps[0]} />
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <ArrowRight size={22} className="text-white/40" />
            </div>
          </div>
          <StepCard step={steps[1]} />
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <ArrowRight size={22} className="text-white/40" />
            </div>
          </div>
          <StepCard step={steps[2]} />
        </div>

        {/* Mobile: vertical stack with down arrows */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={step.title}>
              <StepCard step={step} />
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown size={18} className="text-white/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-white/30 max-w-xs mx-auto leading-relaxed">
          Immigration outcomes depend on individual eligibility and official government decisions.
        </p>

      </div>

      {/* Wave divider into navy-50 AssessmentForm below */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
          <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

    </section>
  );
}
