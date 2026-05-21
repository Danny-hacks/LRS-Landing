// ─── Lifetime Resettlement Services — Landing Page ────────────────────────────
// Clean redesign: simple, warm, premium service business website
//
// Section colour rhythm (for WordPress / Thrive Architect rebuild reference):
//   Header          → white (always solid)
//   Hero            → white left / image right
//   TrustStrip      → white with border separator
//   ProblemDesire   → white
//   ServiceGrid     → warm-50 (#fdfcfb)
//   ThreeSteps      → white
//   MidPageCTA      → navy-900 (#091e42)
//   AssessmentForm  → navy-50 (#f0f5ff)
//   WhyChooseLRS    → warm-50 (#fdfcfb)
//   Testimonials    → white
//   ConsultationCTA → navy-900 left / image right
//   ContactSection  → white
//   Footer          → navy-950 (#040f24)

import Header          from './components/Header';
import Hero            from './components/Hero';
import TrustStrip      from './components/TrustStrip';
import ProblemDesire   from './components/ProblemDesire';
import ChooseYourPath  from './components/ChooseYourPath';
import ServiceGrid     from './components/ServiceGrid';
import ThreeSteps      from './components/ThreeSteps';
import AssessmentForm  from './components/AssessmentForm';
import WhyChooseLRS    from './components/WhyChooseLRS';
import Testimonials    from './components/Testimonials';
import ConsultationCTA from './components/ConsultationCTA';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';
import WhatsAppButton  from './components/WhatsAppButton';

// Section colour rhythm:
//   Hero            → white left / image right
//   TrustStrip      → navy-950 bar
//   ProblemDesire   → white
//   ChooseYourPath  → white (continuous, two-card bridge)
//   ServiceGrid     → warm-50  ← wave top from white
//   ThreeSteps      → dark cn-img.png  ← wave top from warm-50, wave bottom into navy-50
//   AssessmentForm  → navy-50
//   WhyChooseLRS    → warm-50  ← wave top from navy-50
//   Testimonials    → white  ← wave top from warm-50
//   ConsultationCTA → navy-900 left / image right
//   ContactSection  → white  ← wave top from navy-900
//   Footer          → navy-950

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustStrip />
      <ProblemDesire />
      <ChooseYourPath />
      <ServiceGrid />
      <ThreeSteps />
      <AssessmentForm />
      <WhyChooseLRS />
      <Testimonials />
      <ConsultationCTA />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
