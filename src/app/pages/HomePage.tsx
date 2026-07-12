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
import { FaqJsonLd, ReviewJsonLd, WebPageJsonLd } from '../components/seo/ExtraJsonLd';
import { SITE_FAQ } from '../data/faq';
import { TESTIMONIALS, AGGREGATE_RATING } from '../data/testimonials';
import { SITE_KEYWORDS } from '../constants/site';

/**
 * Marketing homepage: section `id`s match legacy in-page anchors where still used.
 */
export default function HomePage() {
  return (
    <>
      <PageSeo
        path="/"
        title="Best Acupuncture Clinic in Bangalore | SH Health Centre"
        description="Visit SH Health Centre in Kalyan Nagar, Bangalore for expert acupuncture, acupressure & Varma therapy. 8+ years experience. Personalised holistic healing. Book on WhatsApp today."
        keywords={SITE_KEYWORDS}
      />
      <FaqJsonLd faqs={SITE_FAQ} />
      <ReviewJsonLd reviews={TESTIMONIALS} aggregateRating={AGGREGATE_RATING} />
      <WebPageJsonLd
        type="WebPage"
        path="/"
        name="Best Acupuncture Clinic in Bangalore | SH Health Centre"
        description="Expert acupuncture, acupressure & Varma therapy in Kalyan Nagar, Bangalore."
        datePublished="2026-05-10"
        dateModified="2026-07-02"
        speakableSelectors={['h1', '#faqs']}
      />
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
