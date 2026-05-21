// ─── Contact Section: Offices, WhatsApp, map, and enquiry form ────────────────
// WordPress note: Thrive 2-column section — left = contact cards, right = form
import { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const offices = [
  {
    flag: '🇨🇦',
    country: 'Canada',
    address: '[Canada Office Address]',
    phone: '+1 (XXX) XXX-XXXX',
    email: 'canada@lrs-immigration.ca',
    mapSrc: 'https://maps.google.com/maps?q=Ottawa,Ontario,Canada&output=embed',
  },
  {
    flag: '🇲🇺',
    country: 'Mauritius',
    address: '[Mauritius Office Address]',
    phone: '+230 XXXX XXXX',
    email: 'mauritius@lrs-immigration.ca',
    mapSrc: 'https://maps.google.com/maps?q=Port+Louis,Mauritius&output=embed',
  },
];

const serviceOptions = [
  'Permanent Residency',
  'Express Entry / PNP',
  'Work Permit',
  'Study Permit',
  'Family Sponsorship',
  'Settlement Services',
  'General Enquiry',
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', language: '', message: '',
  });

  const [leftRef, leftVisible]   = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const inputCls = 'w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-100 focus:border-navy-400 transition-colors bg-white';

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block text-canada-red text-xs font-bold uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3 tracking-tight">
            We are ready when you are.
          </h2>
          <p className="text-navy-500 text-base">
            Reach the LRS team in Canada or Mauritius, or send an enquiry and we'll respond within 1–2 business days.
          </p>
          <div className="flex items-center justify-center gap-5 mt-5">
            {['Professionally Licensed', 'Confidential', 'EN / FR'].map((label) => (
              <div key={label} className="flex items-center gap-1.5 text-navy-500 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-canada-red flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* ── Left: Contact info ── */}
          <div ref={leftRef} className={`reveal ${leftVisible ? 'visible' : ''} flex flex-col justify-center`}>

            {/* Office cards with maps side by side */}
            <div className="space-y-8">
              {offices.map((o) => (
                <div key={o.country} className="grid sm:grid-cols-2 gap-0 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  {/* Info */}
                  <div className="bg-white p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                      <span className="text-xl">{o.flag}</span>
                      <h3 className="font-semibold text-navy-900 text-sm">{o.country} Office</h3>
                    </div>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2.5 text-navy-500">
                        <MapPin size={13} className="text-canada-red mt-0.5 flex-shrink-0" />
                        {o.address}
                      </div>
                      <div className="flex items-center gap-2.5 text-navy-500">
                        <Phone size={13} className="text-canada-red flex-shrink-0" />
                        <a href={`tel:${o.phone}`} className="hover:text-navy-900 transition-colors">{o.phone}</a>
                      </div>
                      <div className="flex items-center gap-2.5 text-navy-500">
                        <Mail size={13} className="text-canada-red flex-shrink-0" />
                        <a href={`mailto:${o.email}`} className="hover:text-navy-900 transition-colors">{o.email}</a>
                      </div>
                    </div>
                  </div>
                  {/* Map */}
                  <iframe
                    src={o.mapSrc}
                    title={`${o.country} Office Location`}
                    className="w-full h-full min-h-[160px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Enquiry form ── */}
          <div ref={rightRef} className={`reveal delay-200 ${rightVisible ? 'visible' : ''}`}>
            <div className="bg-canada-red rounded-2xl p-7 sm:p-8">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Enquiry Received</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Thank you for reaching out to LRS. We will be in touch within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <h3 className="text-white font-bold text-lg mb-5">Send an Enquiry</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">Full Name *</label>
                      <input required className={inputCls} value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">Email *</label>
                      <input required type="email" className={inputCls} value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="email@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">Phone / WhatsApp</label>
                    <input className={inputCls} value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+230 5XXX XXXX" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">Service of Interest</label>
                    <select className={inputCls} value={form.service} onChange={(e) => set('service', e.target.value)}>
                      <option value="">Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">Preferred Language</label>
                    <select className={inputCls} value={form.language} onChange={(e) => set('language', e.target.value)}>
                      <option value="">Select language</option>
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">Message</label>
                    <textarea className={`${inputCls} resize-none`} rows={4} value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us about your situation..." />
                  </div>

                  <button type="submit" className="w-full py-3 rounded-xl bg-white text-canada-red font-semibold text-sm hover:bg-gray-50 transition-colors">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
