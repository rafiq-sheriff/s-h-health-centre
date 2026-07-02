import { Link } from 'react-router';
import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd, WebPageJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ContactSection from '../components/sections/ContactSection';

export default function ContactPage() {
  const path = '/contact';

  return (
    <>
      <PageSeo
        path={path}
        title="Acupuncture Clinic in Kalyan Nagar Bangalore | SH Health Centre"
        description="Visit SH Health Centre at CMR Main Road, HRBR Layout, Kalyan Nagar, Bangalore 560043. Call, WhatsApp or email us. Mon–Fri 10 AM–8 PM, Sat 10 AM–1 PM."
        keywords="SH Health Centre contact, acupuncture clinic Kalyan Nagar address, HRBR Layout holistic clinic, Bangalore holistic health centre location"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Contact', path }]} />
      <WebPageJsonLd
        type="ContactPage"
        path={path}
        name="Contact SH Health Centre — Acupuncture Clinic, Kalyan Nagar, Bangalore"
        description="Address, phone, email, and opening hours for SH Health Centre, Kalyan Nagar, Bangalore 560043."
        datePublished="2026-05-10"
        dateModified="2026-07-02"
      />

      <main className="pt-28 sm:pt-32 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Contact us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-2">
            Visit us in Kalyan Nagar or reach out remotely. For clinical questions, a consultation is the right next
            step — see our{' '}
            <Link to="/#faqs" className="text-[#5f8b71] font-medium hover:underline">
              FAQs
            </Link>{' '}
            or{' '}
            <Link to="/services" className="text-[#5f8b71] font-medium hover:underline">
              service pages
            </Link>
            .
          </p>
        </div>
        <ContactSection />
      </main>
    </>
  );
}
