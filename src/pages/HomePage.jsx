import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero            from '../components/Hero';
import TrustStrip      from '../components/TrustStrip';
import ProblemDesire   from '../components/ProblemDesire';
import ChooseYourPath  from '../components/ChooseYourPath';
import ServiceGrid     from '../components/ServiceGrid';
import ThreeSteps      from '../components/ThreeSteps';
import AssessmentForm  from '../components/AssessmentForm';
import WhyChooseLRS    from '../components/WhyChooseLRS';
import Testimonials    from '../components/Testimonials';
import ConsultationCTA from '../components/ConsultationCTA';
import ContactSection  from '../components/ContactSection';

export default function HomePage() {
  const { hash } = useLocation();

  // Scroll to section when navigating from an inner page via hash (e.g. /#contact)
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
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
    </>
  );
}
