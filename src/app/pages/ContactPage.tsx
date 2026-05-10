import { Link } from 'react-router';
import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ContactSection from '../components/sections/ContactSection';

export default function ContactPage() {
  const path = '/contact';

  return (
    <>
      <PageSeo
        path={path}
        title="Contact & Location | S H Health Centre, Kalyan Nagar, Bengaluru"
        description="Address, phone, email, and hours for S H Health Centre on CMR Main Road, HRBR Layout, Bengaluru. Book via WhatsApp from any service page."
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Contact', path }]} />

      <main className="pt-28 sm:pt-32 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Contact us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-2">
            Visit us in Kalyan Nagar or reach out remotely. For clinical questions, a consultation is the right next
            step—see our{' '}
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
