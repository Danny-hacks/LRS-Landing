// ─── Footer: Clean multi-column footer with links, disclaimer, language ───────
// WordPress note: Thrive Footer with navy-950 bg — 4 columns + disclaimer + bottom bar
import { Shield, Globe, MapPin, Mail, Phone } from 'lucide-react';
import { immigrationServices, settlementServices } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            {/* White pill container preserves logo colours on dark background */}
            <div className="mb-5 inline-block bg-white rounded-lg px-3 py-1.5">
              <img
                src="/Logo.png"
                alt="Lifetime Resettlement Services"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/55 text-xs leading-relaxed mb-5">
              Immigration and settlement guidance for your journey to Canada. Licensed,
              professional, and personalized support from Mauritius to your new home.
            </p>
            <div className="flex items-center gap-1.5 text-white/55 text-xs mb-2">
              <Shield size={11} className="text-canada-red" />
              Mr. Amalsingh Badal · RCIC #R510526
            </div>
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <Globe size={11} />
              🇨🇦 Canada & 🇲🇺 Mauritius
            </div>
          </div>

          {/* ── Immigration Services ── */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-4">
              Immigration
            </h4>
            <ul className="space-y-2.5">
              {immigrationServices.map(({ label }) => (
                <li key={label}>
                  <a href="#services" className="text-white/50 text-xs hover:text-white/80 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Settlement + Explore ── */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-4">
              Settlement
            </h4>
            <ul className="space-y-2.5 mb-6">
              {settlementServices.map(({ label }) => (
                <li key={label}>
                  <a href="#settlement" className="text-white/50 text-xs hover:text-white/80 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {['Assessment', 'About', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/50 text-xs hover:text-white/80 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-white/50">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-canada-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/65 font-medium">Canada</p>
                  <p>[Address Placeholder]</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-canada-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/65 font-medium">Mauritius</p>
                  <p>[Address Placeholder]</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-canada-red flex-shrink-0" />
                info@lrs-immigration.ca
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-canada-red flex-shrink-0" />
                +1 (XXX) XXX-XXXX
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-7 mb-6">
          <div className="bg-black/20 border border-white/10 rounded-xl p-4">
            <p className="text-white/45 text-xs leading-relaxed">
              <strong className="text-white/60">Disclaimer:</strong> LRS provides professional immigration
              and settlement guidance. Immigration outcomes depend on individual eligibility, documentation,
              and official government decisions. LRS does not guarantee approval. All advice is subject to
              CICC regulations and professional standards. Mr. Amalsingh Badal, RCIC — License No: R510526. Membre du Registre Québécois des Consultants en Immigration #11570. Verify licence status at{' '}
              <a href="https://register.college-ic.ca" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70 transition-colors">register.college-ic.ca</a>.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Lifetime Resettlement Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/55 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/55 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/55 transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
