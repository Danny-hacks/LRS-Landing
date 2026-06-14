import { Briefcase, Globe, Award, TrendingUp, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationCTA from '../../components/ConsultationCTA';
import SectionLabel from '../../components/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const keyTopics = [
  { icon: FileText, title: 'Canadian Resume Format', description: 'No photo, no date of birth, no marital status. Action verbs, quantified achievements, and a clean 1–2 page format that meets Canadian employer expectations.' },
  { icon: Globe, title: 'LinkedIn Optimization', description: 'A professional headshot, strong headline, compelling About section, and active networking strategy are as important as your resume in the Canadian job market.' },
  { icon: Briefcase, title: 'Canadian Job Boards', description: 'LinkedIn Jobs, Indeed.ca, Government of Canada Job Bank, and Workopolis are the primary platforms. LRS advises on job search strategy for your sector and city.' },
  { icon: Award, title: 'Workplace Culture', description: 'Canadian employers value punctuality, direct communication, and workplace safety. References are expected and called. Follow-up after interviews is essential.' },
];

const resumeDifferences = [
  'No photo on the resume',
  'No date of birth or age',
  'No gender or marital status',
  'No SIN or passport numbers',
  '1–2 pages maximum for most positions',
  'Professional summary (not an objective statement)',
  'Action verbs to start each bullet: led, managed, reduced, built',
  'Quantified results: "Increased sales by 35%" not "Increased sales"',
];

const jobBoards = [
  { name: 'LinkedIn Jobs', note: 'Most important platform for professionals. Also use for networking.' },
  { name: 'Indeed.ca', note: 'Largest general job board in Canada. Good for all sectors.' },
  { name: 'Government of Canada Job Bank', note: 'jobs.gc.ca — federal and provincial government positions.' },
  { name: 'Workopolis', note: 'Canada-specific job board with strong employer partnerships.' },
  { name: 'Glassdoor', note: 'Salary research and company culture reviews alongside job listings.' },
];

const included = [
  'Canadian resume review and rewrite',
  'LinkedIn profile assessment and optimization',
  'Job search strategy by sector and city',
  'Interview preparation coaching',
  'Credential recognition guidance (regulated professions)',
  'References: what to expect in Canada',
  'Salary negotiation overview',
  'Referrals to settlement employment programs',
];

const faqs = [
  {
    q: 'Do I need Canadian work experience to find a job?',
    a: 'Many employers value strong international experience, particularly in sectors like IT, finance, engineering, and healthcare. However, some competitive roles prefer candidates with Canadian experience. LRS helps you position international experience effectively in your resume and LinkedIn profile, and advises on roles where your background is well-matched.',
  },
  {
    q: 'What if my professional credentials aren\'t recognized in Canada?',
    a: 'Some professions in Canada are regulated and require specific credential recognition (doctors, lawyers, engineers, nurses, etc.). LRS identifies the regulatory body governing your profession and advises on the credential assessment and bridging process. Timelines vary by profession.',
  },
  {
    q: 'Should I apply online or focus on networking?',
    a: 'Both. Online applications through LinkedIn and Indeed are essential, but networking is equally — and sometimes more — effective in Canada. LRS advises on professional associations, LinkedIn networking, newcomer job fairs, and in-person industry events in your city.',
  },
  {
    q: 'What do Canadian employers look for in references?',
    a: 'Canadian employers typically request 2–3 professional references and will call them. Reference letters alone are usually not sufficient. Ensure your references are people who can speak to your work performance and are reachable by phone. LRS prepares you on how to brief your references.',
  },
  {
    q: 'How does the Canadian interview process differ from Mauritius?',
    a: 'Canadian interviews are typically structured: behaviour-based questions (STAR method — Situation, Task, Action, Result), a focus on past performance as a predictor of future performance, and expect to ask questions at the end. LRS provides interview coaching for the Canadian style, including common questions in your sector.',
  },
];

export default function JobSearchPage() {
  const [ref1, v1] = useScrollReveal();
  const [ref2, v2] = useScrollReveal();

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Settlement', href: '/#settlement' }, { label: 'Job Search & Resume Support' }]}
        badge="Settlement Services"
        title="Job Search & Resume Support for Canada"
        subtitle="Canadian employers expect a specific resume format, a strong LinkedIn presence, and a different job search approach. LRS prepares you to compete in the Canadian job market from day one."
        ctaLabel="Book a Consultation"
        ctaHref="/#contact"
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref1} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel align="left">Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                Enter the Canadian job market with confidence
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                The Canadian job market has specific expectations that differ from what many newcomers are used to. A resume that works in Mauritius or Europe may not work the same way in Canada. LinkedIn is not optional — it's a primary tool that Canadian recruiters use daily.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4">
                LRS's career readiness service goes beyond a resume review. We cover the full job search ecosystem: where to apply, how to network, what interviewers look for, how references work, and how to navigate credentialing requirements for regulated professions.
              </p>
              <p className="text-navy-500 leading-relaxed">
                Whether you're landing your first Canadian job or transitioning from a work permit to a professional career as a PR holder, LRS positions you for success in your sector.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h3 className="text-navy-900 font-semibold text-xs uppercase tracking-wide mb-4">Key Job Boards</h3>
              <ul className="space-y-3">
                {jobBoards.map(({ name, note }) => (
                  <li key={name} className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-canada-red mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-navy-700 font-medium text-sm">{name}</p>
                      <p className="text-navy-500 text-xs leading-snug">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>What We Cover</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mt-3">The four pillars of Canadian job readiness</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTopics.map(({ icon: Icon, title, description }) => (
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

      {/* Resume Differences */}
      <section className="py-20 lg:py-28 bg-white">
        <div ref={ref2} className={`reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel align="left">Canadian Resume Format</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight mb-5">
                What makes a Canadian resume different
              </h2>
              <p className="text-navy-500 leading-relaxed mb-8">
                Canadian resumes follow a specific convention. LRS reviews your existing resume, rewrites it to Canadian standards, and helps you tailor it for target roles in your industry.
              </p>
              <div className="space-y-3">
                {resumeDifferences.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-canada-red flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 mb-6">
                <h3 className="text-navy-900 font-semibold mb-3">What LRS provides</h3>
                <div className="space-y-3">
                  {included.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={13} className="text-canada-red flex-shrink-0 mt-0.5" />
                      <span className="text-navy-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-navy-900 font-semibold mb-2">Ready to start your Canadian job search?</h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-5">
                  Book a career readiness session with LRS. We'll review your resume, optimize your LinkedIn, and build a job search strategy for your sector.
                </p>
                <Link to="/#contact" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-canada-red text-white font-semibold text-sm hover:bg-canada-red-dark transition-colors btn-primary">
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold text-navy-900 tracking-tight mt-3">Frequently asked questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
