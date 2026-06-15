export default function PageHero({ badge, title, titleAccent, image, compact }) {
  return (
    <section className="relative flex items-center bg-navy-950 overflow-hidden" style={{ minHeight: '380px' }}>

      {/* Maple pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }}
        aria-hidden="true"
      />

      {/* Right-side photo panel — desktop only */}
      {image && (
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[45%] pointer-events-none">
          <img src={image} alt="" className="w-full h-full object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #040f24 0%, rgba(4,15,36,0.72) 36%, rgba(4,15,36,0.18) 100%)' }}
          />
        </div>
      )}

      {/* Content — left-aligned, constrained to left half on desktop */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-2xl">

          {badge && (
            <p className="text-canada-red text-xs font-bold uppercase tracking-widest mb-5">{badge}</p>
          )}

          <h1 style={{ textWrap: 'balance' }} className={`${compact ? 'text-3xl sm:text-4xl lg:text-[2.75rem]' : 'text-4xl sm:text-5xl lg:text-[3.25rem]'} font-bold text-white leading-tight tracking-tight`}>
            {title}
            {titleAccent && (
              <span className="block text-canada-red">{titleAccent}</span>
            )}
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 mt-6">
            <span className="block h-px w-10 bg-canada-red/70" />
            <span className="block w-1.5 h-1.5 rounded-full bg-canada-red" />
            <span className="block h-px w-10 bg-canada-red/70" />
          </div>

        </div>
      </div>

      {/* Straight bottom separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

    </section>
  );
}
