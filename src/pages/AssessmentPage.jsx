import { CheckCircle, Clock, FileCheck, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AssessmentForm from '../components/AssessmentForm';
import SectionLabel from '../components/SectionLabel';

const whatsCovered = [
  { icon: Users, title: 'Immigration Goal', description: 'Permanent residency, work permit, study permit, or family sponsorship — we identify the right category for your situation.' },
  { icon: FileCheck, title: 'Profile Assessment', description: 'Age, education level, work experience, and language proficiency are evaluated against all active IRCC programs.' },
  { icon: Clock, title: 'Timeline Planning', description: 'Based on your target landing date and current profile, LRS recommends the most realistic and strategic pathway.' },
  { icon: Shield, title: 'Eligibility Confirmation', description: 'We flag any admissibility concerns, documentation gaps, or credential requirements before you begin the formal process.' },
];

const processSteps = [
  { title: 'Complete the 5-Step Form', description: 'Answer questions about your goal, education, language skills, and work experience. Takes about 5 minutes. No account required.' },
  { title: 'LRS Reviews Your Profile', description: 'A licensed RCIC reviews your assessment submission within 2 business days and identifies your strongest immigration pathways.' },
  { title: 'Receive a Personalized Report', description: 'LRS sends you a written summary of your options, eligibility, estimated timelines, and recommended next steps.' },
  { title: 'Book a Consultation (Optional)', description: 'If you want to discuss your results in depth, you can book a 1-on-1 consultation with your RCIC to plan your full strategy.' },
];

const pathways = [
  { title: 'Express Entry', sub: 'Federal Skilled Worker · Skilled Trades · CEC', note: 'CRS score & draw monitoring included' },
  { title: 'Provincial Nominee Programs', sub: '80+ streams across Canada', note: 'Province-matched to your profile' },
  { title: 'Work Permits', sub: 'LMIA-based · LMIA-exempt · Open Permits', note: 'PGWP, SOWP, BOWP covered' },
  { title: 'Study Permits', sub: 'SDS · Regular stream · DLI guidance', note: 'Post-graduation PR pathway included' },
  { title: 'Family Sponsorship', sub: 'Spouse · Children · Parents / Grandparents', note: 'Outland and Inland streams' },
  { title: 'Humanitarian Grounds', sub: 'H&C applications · PRRA', note: 'Complex cases assessed individually' },
];

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        badge="Free Assessment"
        title="Free Eligibility"
        titleAccent="Assessment"
        image="/canada-img4.jpg"
        compact
      />

      {/* What it covers */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <SectionLabel>What We Assess</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">A real review, not a generic checklist</h2>
            <p className="text-navy-500 mt-4 text-sm leading-relaxed">
              Your assessment is reviewed by a licensed Regulated Canadian Immigration Consultant — not an algorithm. LRS gives you an honest, accurate picture of your eligibility.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsCovered.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-canada-red/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-canada-red" />
                </div>
                <h3 className="text-navy-900 font-semibold text-sm mb-2">{title}</h3>
                <p className="text-navy-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-20 lg:py-28 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-white.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.20 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel align="left">How It Works</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">From form to feedback in 2 business days</h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                The assessment is free and takes about 5 minutes. A licensed RCIC personally reviews your submission — not a bot. You receive a written response with your options, eligibility, and recommended next steps.
              </p>
              <div className="space-y-5">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-canada-red text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-navy-900 font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-navy-500 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 sm:h-[480px] rounded-2xl overflow-hidden shadow-card">
              <img src="/lrs-asset.jpg" alt="LRS RCIC reviews your immigration assessment" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl px-4 py-3">
                <p className="text-navy-900 font-semibold text-sm">Reviewed by a licensed RCIC</p>
                <p className="text-navy-500 text-xs mt-0.5">Response within 2 business days — no obligation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways covered */}
      <section className="relative py-20 lg:py-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/maple-pattern-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-canada-red text-xs font-bold uppercase tracking-widest mb-3">Pathways Assessed</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Every pathway, evaluated for your profile</h2>
            <p className="text-white/55 text-sm mt-4 max-w-xl mx-auto">
              LRS checks your profile against all active federal and provincial streams — not just the most popular ones.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pathways.map(({ title, sub, note }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                <p className="text-white/50 text-xs mb-2">{sub}</p>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={11} className="text-canada-red flex-shrink-0" />
                  <span className="text-white/60 text-xs">{note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The form */}
      <div id="assessment-form">
        <AssessmentForm />
      </div>
    </>
  );
}
