// ─── Resources: Blog/news preview cards with real stock photos ─────────────────
import { ArrowRight, Clock } from 'lucide-react';
import { resources } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

// REPLACE: swap each image URL with your own article cover photo in WordPress
const cardImages = [
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=320&q=80&fit=crop', // Express Entry — boardroom/professional
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=320&q=80&fit=crop', // Study in Canada — campus/education
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=320&q=80&fit=crop', // Settlement — home/keys
];

// Fallback gradient if image fails to load
const fallbackBgs = [
  'from-navy-800 to-navy-900',
  'from-navy-700 to-navy-800',
  'from-navy-800 to-navy-950',
];

function ResourceCard({ resource, index }) {
  const [ref, visible] = useScrollReveal();
  const r = resource;

  return (
    <article
      ref={ref}
      className={`reveal delay-${index * 150} ${visible ? 'visible' : ''}
        group bg-white border border-navy-100 rounded-2xl overflow-hidden
        shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Article image */}
      <div className={`h-48 bg-gradient-to-br ${fallbackBgs[index]} relative overflow-hidden`}>
        <img
          src={cardImages[index]}
          alt={r.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-colors duration-300" />
        {/* Category badge */}
        <span className="absolute top-4 left-4 px-2.5 py-1 bg-canada-red rounded-full text-white text-xs font-semibold shadow-sm">
          {r.category}
        </span>
        {/* Canada maple leaf subtle watermark */}
        <span className="absolute bottom-2 right-3 text-white/10 text-5xl leading-none select-none">🍁</span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1.5 text-navy-400 text-xs mb-2">
          <Clock size={11} />
          {r.readTime}
        </div>
        <h3 className="text-navy-900 font-semibold text-base leading-snug mb-2 group-hover:text-canada-red transition-colors">
          {r.title}
        </h3>
        <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {r.excerpt}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-canada-red text-xs font-semibold group-hover:gap-2 transition-all"
        >
          Read More <ArrowRight size={12} />
        </a>
      </div>
    </article>
  );
}

export default function Resources() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div ref={headRef} className={`reveal ${headVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-2.5 mb-2 text-canada-red">
              <span className="block w-5 h-[2px] rounded-full bg-canada-red" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Resources & Updates</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 tracking-tight">
              Latest immigration insights.
            </h2>
          </div>
          <a
            href="#"
            className="text-navy-600 text-sm font-semibold flex items-center gap-1 hover:text-canada-red transition-colors flex-shrink-0"
          >
            View all articles <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <ResourceCard key={r.title} resource={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
