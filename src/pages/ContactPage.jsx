import PageHero from '../components/PageHero';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Let's start your"
        titleAccent="Canada journey."
        image="/canada-img4.jpg"
        compact
      />
      <ContactSection />
    </>
  );
}
