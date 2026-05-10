import {
  AboutSection,
  FaqSection,
  WhatsAppSection,
  ContactSection,
  DoctorProfile,
  FinalCTA,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  UniqueApproach,
  WhyChooseUs,
} from '../components/sections';
import PageSeo from '../components/seo/PageSeo';
import { FaqJsonLd } from '../components/seo/ExtraJsonLd';
import { SITE_FAQ } from '../data/faq';
import { BUSINESS_NAME } from '../constants/site';

/**
 * Marketing homepage: section `id`s match legacy in-page anchors where still used.
 */
export default function HomePage() {
  return (
    <>
      <PageSeo
        path="/"
        title={`${BUSINESS_NAME} | Acupuncture & Acupressure, Bengaluru`}
        description="Holistic clinic in Kalyan Nagar, Bengaluru: acupuncture, acupressure, Siddha-informed care & pain support. Book on WhatsApp or call during enquiry hours."
      />
      <FaqJsonLd faqs={SITE_FAQ} />
      <main id="home">
        <HeroSection />
        <AboutSection />
        <UniqueApproach />
        <DoctorProfile />
        <ServicesSection />
        <WhyChooseUs />
        <FaqSection />
        <WhatsAppSection />
        <ContactSection />
        <FinalCTA />
        <TestimonialsSection />
      </main>
    </>
  );
}
