import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-navy-900 font-medium text-sm leading-snug">{question}</span>
        <ChevronDown
          size={16}
          className={`text-canada-red flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-navy-500 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQAccordion({ items }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">
      {items.map((item, i) => (
        <FAQItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}
