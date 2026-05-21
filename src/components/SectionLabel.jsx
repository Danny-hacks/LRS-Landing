// Reusable premium section label — line · text · line
export default function SectionLabel({ children, light = false, align = 'center' }) {
  const color = light ? 'text-white/80' : 'text-canada-red';
  const line  = light ? 'bg-white/60'  : 'bg-canada-red';

  if (align === 'left') {
    return (
      <div className={`flex items-center gap-2.5 mb-4 ${color}`}>
        <span className={`block w-5 h-[2px] rounded-full flex-shrink-0 ${line}`} />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap">
          {children}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-2.5 mb-4 ${color}`}>
      <span className={`block w-5 h-[2px] rounded-full flex-shrink-0 ${line}`} />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap">
        {children}
      </span>
      <span className={`block w-5 h-[2px] rounded-full flex-shrink-0 ${line}`} />
    </div>
  );
}
