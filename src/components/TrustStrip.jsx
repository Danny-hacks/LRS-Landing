// ─── Trust Strip: Dark navy credential bar below hero ─────────────────────────
// WordPress note: Thrive section with navy-950 bg — 6 icon+label items, no-scroll row
import { Shield, Star, CreditCard, Globe, Lock, MessageSquare } from 'lucide-react';
import { trustItems } from '../data/content';

const iconMap = { Shield, Star, CreditCard, Globe, Lock, MessageSquare };

export default function TrustStrip() {
  return (
    <div className="relative bg-canada-red overflow-hidden">
      {/* Subtle maple leaf texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch overflow-x-auto no-scrollbar divide-x divide-white/20">
          {trustItems.map(({ icon, label, sub }) => {
            const Icon = iconMap[icon];
            return (
              <div key={label} className="flex-shrink-0 sm:flex-1 flex items-center gap-3 px-5 py-5">
                <Icon size={14} className="text-white flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-xs font-semibold whitespace-nowrap leading-tight">{label}</p>
                  <p className="text-white/40 text-[11px] whitespace-nowrap mt-0.5">{sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
