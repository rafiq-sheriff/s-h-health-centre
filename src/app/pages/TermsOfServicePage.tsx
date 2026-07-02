import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { BUSINESS_NAME } from '../constants/site';

export default function TermsOfServicePage() {
  const path = '/terms-of-service';

  return (
    <>
      <PageSeo
        path={path}
        title={`Terms of Service | ${BUSINESS_NAME}, Bangalore`}
        description="Terms for using the SH Health Centre website and digital enquiry channels. Our holistic clinic is located in Kalyan Nagar, Bengaluru."
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Terms of Service', path }]} />

      <main className="pt-28 sm:pt-32 lg:pt-36 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Terms of Service' }]} />
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-900">Use of this website</h2>
            <p>
              This website provides general information about {BUSINESS_NAME} in Bengaluru. It does not replace
              professional medical advice, diagnosis, or treatment.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">No guarantee of outcomes</h2>
            <p>
              Individual results vary. We do not guarantee specific therapeutic outcomes. Follow your clinician’s advice
              and seek emergency care when needed.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Appointments and communications</h2>
            <p>
              Booking requests sent through the website, WhatsApp, phone, or email do not create a clinician–patient
              relationship until confirmed through our normal intake process.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Intellectual property</h2>
            <p>
              Text, images, logos, and design elements on this site belong to {BUSINESS_NAME} or its licensors unless
              otherwise noted. Do not copy or reuse without permission.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Limitation of liability</h2>
            <p>
              To the extent permitted by law, {BUSINESS_NAME} is not liable for indirect or consequential damages arising
              from use of this website or reliance on its content.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Changes</h2>
            <p>We may update these terms. Continued use of the site after changes means you accept the updated terms.</p>
          </section>
        </div>
      </main>
    </>
  );
}
