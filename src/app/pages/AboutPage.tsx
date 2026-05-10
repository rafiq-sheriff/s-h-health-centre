import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd, PhysicianJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import AboutSection from '../components/sections/AboutSection';
import DoctorProfile from '../components/sections/DoctorProfile';
import FinalCTA from '../components/sections/FinalCTA';

export default function AboutPage() {
  const path = '/about';

  return (
    <>
      <PageSeo
        path={path}
        title="About Us & Our Doctor | S H Health Centre, Bengaluru"
        description="Meet A. Soofia Fathima and learn about our holistic approach at Kalyan Nagar, Bengaluru. Acupuncture, acupressure, and patient-centered care."
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About', path }]} />
      <PhysicianJsonLd />

      <main className="pt-28 sm:pt-32 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">About S H Health Centre</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A Bengaluru holistic health practice focused on careful assessment, transparent communication, and therapies
            such as acupuncture and acupressure when appropriate for you.
          </p>
        </div>
        <AboutSection />
        <DoctorProfile />
        <FinalCTA />
      </main>
    </>
  );
}
