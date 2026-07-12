import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd, PhysicianJsonLd, WebPageJsonLd } from '../components/seo/ExtraJsonLd';
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
        title="Expert Acupuncturist in Bangalore | A. Soofia Fathima | SH Health Centre"
        description="Meet A. Soofia Fathima (D.Acu, M.Acu) — 8+ years experience in acupuncture, acupressure & holistic healing. SH Health Centre, Kalyan Nagar, Bangalore. Book today."
        keywords="A. Soofia Fathima acupuncturist Bangalore, holistic healer Kalyan Nagar, about SH Health Centre Bengaluru"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About', path }]} />
      <PhysicianJsonLd />
      <WebPageJsonLd
        type="AboutPage"
        path={path}
        name="About SH Health Centre — Expert Acupuncturist A. Soofia Fathima, Bangalore"
        description="Learn about A. Soofia Fathima (D.Acu, M.Acu) and our holistic approach at Kalyan Nagar, Bangalore."
        datePublished="2026-05-10"
        dateModified="2026-07-02"
      />

      <main className="pt-28 sm:pt-32 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">About S H Health Centre</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A Bengaluru holistic health practice focused on careful assessment, transparent communication, and therapies
            such as acupuncture, acupressure, and Varma therapy when appropriate for you.
          </p>
        </div>
        <AboutSection />
        <DoctorProfile />
        <FinalCTA />
      </main>
    </>
  );
}
