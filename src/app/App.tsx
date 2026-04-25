import { Header, Footer } from './components/layout';
import {
  AboutSection,
  WhatsAppSection,
  ContactSection,
  DoctorProfile,
  FinalCTA,
  HeroSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  UniqueApproach,
  WhyChooseUs,
} from './components/sections';

/**
 * Single-page layout: fixed header, scrollable sections (top → bottom),
 * then footer. Section `id`s match in-page nav anchors in `Header` / `Footer`.
 */
export default function App() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <Header />

      <main id="home">
        <HeroSection />
        
        <AboutSection />
        <UniqueApproach />
        <DoctorProfile />
        
        <ServicesSection />
        
        <WhyChooseUs />
        <WhatsAppSection />
        <ContactSection />
        
        <FinalCTA />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
