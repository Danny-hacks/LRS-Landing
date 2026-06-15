// ─── Choose Your Path: Full-image pathway cards — immigration vs settlement ────
// WordPress note: Thrive 2-column section — each column is a full-height image card
import { Plane, Home, Check, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const paths = [
  {
    image: '/canada-img3.jpg',
    imageAlt: 'Woman kayaking with Canadian flag — adventure and freedom in Canada',
    icon: Plane,
    label: 'Immigration Services',
    title: "I'm moving to Canada",
    description: 'Applying from abroad for permanent residency, a work permit, study permit, or family sponsorship.',
    items: ['Permanent Residency', 'Express Entry / PNPs', 'Work Permits', 'Study Permits', 'Family Sponsorship'],
    ctaLabel: 'Explore Immigration',
    ctaHref: '#services',
  },
  {
    image: '/canada-img4.jpg',
    imageAlt: 'Toronto skyline with Canadian flag — your new home awaits',
    icon: Home,
    label: 'Settlement Services',
    title: "I've arrived in Canada",
    description: "You've landed or you're preparing to. Now it's time to build your life in Canada with the right support.",
    items: ['Pre-Landing Orientation', 'Housing & Accommodation', 'SIN, Health Card & Banking', 'Job Search & Resume Support', 'Community Integration'],
    ctaLabel: 'Explore Settlement',
    ctaHref: '#settlement',
  },
];

function PathCard({ path, delay }) {
  const [ref, visible] = useScrollReveal();
  const Icon = path.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${delay} ${visible ? 'visible' : ''} relative rounded-2xl overflow-hidden flex flex-col min-h-[540px] group`}
    >
      {/* Background image — slight scale on hover */}
      <img
        src={path.image}
        alt={path.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Top-to-bottom gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(4,15,36,0.25) 0%, rgba(4,15,36,0.55) 45%, rgba(4,15,36,0.95) 100%)' }}
      />

      {/* Red top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-canada-red" />

      {/* Content — pinned to bottom */}
      <div className="relative flex flex-col flex-1 p-8 lg:p-10 justify-end">

        {/* Label badge */}
        <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-canada-red text-white text-[11px] font-bold uppercase tracking-widest mb-4">
          <Icon size={11} />
          {path.label}
        </span>

        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
          {path.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6">
          {path.description}
        </p>

        <ul className="space-y-2 mb-8">
          {path.items.map((s) => (
            <li key={s} className="flex items-center gap-2.5 text-sm text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-canada-red flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>

        <a
          href={path.ctaHref}
          onClick={(e) => { e.preventDefault(); document.querySelector(path.ctaHref)?.scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-canada-red text-white font-bold text-sm hover:bg-canada-red-dark transition-colors btn-primary self-start"
        >
          {path.ctaLabel} <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

export default function ChooseYourPath() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headRef} className={`reveal ${headVisible ? 'visible' : ''} text-center max-w-xl mx-auto mb-12`}>
          <span className="inline-block text-canada-red text-xs font-bold uppercase tracking-widest mb-3">
            Choose Your Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
            Where are you in your journey?
          </h2>
          <p className="text-navy-500 text-base leading-relaxed">
            Tell us where you are and we'll show you exactly how LRS can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {paths.map((path, i) => (
            <PathCard key={path.title} path={path} delay={i === 1 ? 'delay-200' : ''} />
          ))}
        </div>

        <p className="mt-8 text-center text-navy-400 text-sm">
          Not sure?{' '}
          <a
            href="#assessment"
            onClick={(e) => { e.preventDefault(); document.querySelector('#assessment')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-canada-red font-semibold hover:underline"
          >
            Take the free 5-minute assessment →
          </a>
        </p>

      </div>
    </section>
  );
}
