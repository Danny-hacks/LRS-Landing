// ─── Assessment Form: 5-step multi-step form with progress bar ────────────────
import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Calendar } from 'lucide-react';
import { assessmentGoals, educationLevels, languageLevels } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = ['Personal Details', 'Your Goal', 'Your Profile', 'Timeline', 'Final Details'];

const ageRanges = ['18–24', '25–29', '30–34', '35–39', '40–44', '45–49', '50+'];
const workExperience = ['No experience', 'Less than 1 year', '1–2 years', '3–4 years', '5+ years'];
const timelines = [
  { id: '0-3', label: '0–3 months', desc: 'I need to start very soon' },
  { id: '3-6', label: '3–6 months', desc: 'Planning ahead actively' },
  { id: '6-12', label: '6–12 months', desc: 'Looking at options' },
  { id: '12+', label: '12+ months', desc: 'Early stage research' },
];

function StepIndicator({ currentStep }) {
  const pct = ((currentStep) / STEPS.length) * 100;
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-navy-700">
          Step {currentStep + 1} of {STEPS.length}
        </span>
        <span className="text-xs text-navy-400">{STEPS[currentStep]}</span>
      </div>
      <div className="w-full h-1.5 bg-navy-100 rounded-full overflow-hidden">
        <div
          className="progress-bar h-full bg-gradient-to-r from-navy-700 to-canada-red rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex mt-2 gap-1.5">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-0.5 rounded-full transition-colors duration-300 ${
              i <= currentStep ? 'bg-canada-red' : 'bg-navy-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', country: '',
    goal: '',
    age: '', education: '', workExp: '', language: '',
    timeline: '',
    message: '', consent: false,
  });

  const [sectionRef, sectionVisible] = useScrollReveal();

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: '' }));
  };

  const validateStep = () => {
    const errs = {};
    if (step === 0) {
      if (!form.fullName.trim()) errs.fullName = 'Name is required';
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
      if (!form.country.trim()) errs.country = 'Country is required';
    }
    if (step === 1 && !form.goal) errs.goal = 'Please select a goal';
    if (step === 2) {
      if (!form.age) errs.age = 'Please select an age range';
      if (!form.education) errs.education = 'Please select your education level';
    }
    if (step === 3 && !form.timeline) errs.timeline = 'Please select a timeline';
    if (step === 4 && !form.consent) errs.consent = 'You must confirm your consent';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(s + 1, STEPS.length - 1)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) setSubmitted(true);
  };

  const inputCls = (key) =>
    `w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
      errors[key]
        ? 'border-red-300 focus:ring-red-200'
        : 'border-navy-200 focus:border-navy-400 focus:ring-navy-100'
    }`;

  return (
    <section id="assessment" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Pitch ── */}
          <div
            ref={sectionRef}
            className={`reveal-left ${sectionVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-5 h-[2px] rounded-full bg-canada-red" />
              <span className="text-canada-red text-[11px] font-bold uppercase tracking-[0.18em]">Free Assessment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 mb-5 leading-[1.05] tracking-tight">
              Find out where your Canada journey starts.
            </h2>
            <p className="text-navy-500 text-base leading-relaxed mb-8">
              Answer a few simple questions and receive initial guidance on the immigration
              or settlement pathway that may fit your profile. No commitment required.
            </p>

            <div className="space-y-4">
              {[
                ['Takes under 5 minutes', 'Quick multi-step form'],
                ['No personal data sold', 'Your information is confidential'],
                ['Reviewed by a licensed professional', 'Licensed consultant review included'],
              ].map(([title, sub]) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-canada-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-navy-900 text-sm font-medium">{title}</p>
                    <p className="text-navy-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card-hover">
            {submitted ? (
              /* Success state */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Assessment Received</h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                  Thank you. Your assessment has been received. We recommend booking a consultation
                  with an LRS advisor for personalized next steps.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors"
                >
                  <Calendar size={16} />
                  Book a Consultation
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <StepIndicator currentStep={step} />

                <div className="step-enter">
                  {/* ── Step 0: Personal ── */}
                  {step === 0 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-navy-900 mb-4">Personal Details</h3>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Full Name *</label>
                        <input
                          className={inputCls('fullName')}
                          value={form.fullName}
                          onChange={(e) => set('fullName', e.target.value)}
                          placeholder="Your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          className={inputCls('email')}
                          value={form.email}
                          onChange={(e) => set('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Phone / WhatsApp</label>
                        <input
                          className={inputCls('phone')}
                          value={form.phone}
                          onChange={(e) => set('phone', e.target.value)}
                          placeholder="Your phone number (with country code)"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Country of Residence *</label>
                        <input
                          className={inputCls('country')}
                          value={form.country}
                          onChange={(e) => set('country', e.target.value)}
                          placeholder="e.g. Mauritius"
                        />
                        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                      </div>
                    </div>
                  )}

                  {/* ── Step 1: Goal ── */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-4">What is your immigration goal?</h3>
                      <div className="grid grid-cols-2 gap-2.5">
                        {assessmentGoals.map((g) => (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => set('goal', g.id)}
                            className={`px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all ${
                              form.goal === g.id
                                ? 'border-navy-700 bg-navy-900 text-white'
                                : 'border-navy-200 text-navy-700 hover:border-navy-400 hover:bg-navy-50'
                            }`}
                          >
                            {g.label}
                          </button>
                        ))}
                      </div>
                      {errors.goal && <p className="text-red-500 text-xs mt-2">{errors.goal}</p>}
                    </div>
                  )}

                  {/* ── Step 2: Profile ── */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <h3 className="text-lg font-bold text-navy-900 mb-4">Your Profile</h3>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-2">Age Range *</label>
                        <div className="flex flex-wrap gap-2">
                          {ageRanges.map((a) => (
                            <button
                              key={a}
                              type="button"
                              onClick={() => set('age', a)}
                              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                                form.age === a
                                  ? 'border-navy-700 bg-navy-900 text-white'
                                  : 'border-navy-200 text-navy-600 hover:border-navy-400'
                              }`}
                            >
                              {a}
                            </button>
                          ))}
                        </div>
                        {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Highest Education Level *</label>
                        <select
                          className={inputCls('education')}
                          value={form.education}
                          onChange={(e) => set('education', e.target.value)}
                        >
                          <option value="">Select education level</option>
                          {educationLevels.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                        {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Work Experience</label>
                        <select
                          className={inputCls('workExp')}
                          value={form.workExp}
                          onChange={(e) => set('workExp', e.target.value)}
                        >
                          <option value="">Select experience</option>
                          {workExperience.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Language Proficiency</label>
                        <select
                          className={inputCls('language')}
                          value={form.language}
                          onChange={(e) => set('language', e.target.value)}
                        >
                          <option value="">Select language level</option>
                          {languageLevels.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* ── Step 3: Timeline ── */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-4">When are you planning to move?</h3>
                      <div className="space-y-2.5">
                        {timelines.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => set('timeline', t.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all ${
                              form.timeline === t.id
                                ? 'border-navy-700 bg-navy-900 text-white'
                                : 'border-navy-200 text-navy-700 hover:border-navy-400 hover:bg-navy-50'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                              form.timeline === t.id ? 'border-canada-red bg-canada-red' : 'border-navy-300'
                            }`}>
                              {form.timeline === t.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <div>
                              <p className={`font-semibold text-sm ${form.timeline === t.id ? 'text-white' : 'text-navy-900'}`}>{t.label}</p>
                              <p className={`text-xs ${form.timeline === t.id ? 'text-white/60' : 'text-navy-400'}`}>{t.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.timeline && <p className="text-red-500 text-xs mt-2">{errors.timeline}</p>}
                    </div>
                  )}

                  {/* ── Step 4: Final ── */}
                  {step === 4 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-navy-900 mb-4">Almost done</h3>
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Additional Notes</label>
                        <textarea
                          className={`${inputCls('message')} resize-none`}
                          rows={4}
                          value={form.message}
                          onChange={(e) => set('message', e.target.value)}
                          placeholder="Anything specific you'd like LRS to know before the consultation..."
                        />
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex-shrink-0 mt-0.5">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={form.consent}
                            onChange={(e) => set('consent', e.target.checked)}
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            form.consent ? 'bg-navy-800 border-navy-800' : 'border-navy-300 group-hover:border-navy-500'
                          }`}>
                            {form.consent && <span className="text-white text-xs">✓</span>}
                          </div>
                        </div>
                        <span className="text-xs text-navy-500 leading-relaxed">
                          I consent to LRS contacting me about my assessment. I understand this is not a formal
                          immigration application and that LRS will handle my data in accordance with their privacy policy.
                        </span>
                      </label>
                      {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-7 pt-5 border-t border-navy-100">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 0}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-navy-600 hover:bg-navy-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>

                  {step < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={next}
                      className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors"
                    >
                      Continue <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-canada-red text-white text-sm font-semibold hover:bg-canada-red-dark transition-colors"
                    >
                      Submit Assessment <CheckCircle size={16} />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
