import { Link } from 'react-router';
import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { BUSINESS_NAME } from '../constants/site';

export default function PrivacyPolicyPage() {
  const path = '/privacy-policy';

  return (
    <>
      <PageSeo
        path={path}
        title={`Privacy Policy | ${BUSINESS_NAME}, Bangalore`}
        description="How SH Health Centre handles your information when you use our website or contact our Kalyan Nagar, Bangalore clinic by phone, email, or WhatsApp."
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path }]} />

      <main className="pt-28 sm:pt-32 lg:pt-36 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

          <section className="space-y-4 text-gray-600 leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-900">Introduction</h2>
            <p>
              {BUSINESS_NAME} (“we”, “us”) respects your privacy. This policy explains what we may collect when you use
              our website or contact us by phone, email, or WhatsApp, and how we use that information. If you have
              questions, use the contact details on our website.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Information you provide</h2>
            <p>
              When you book or enquire, you may share your name, phone number, email, and general health-related
              information. Please do not send highly sensitive medical records unless we ask for them through a secure
              process.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">How we use information</h2>
            <p>
              We use contact and enquiry information to respond to you, schedule visits, and improve our services. We do
              not sell your personal information.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Cookies and analytics</h2>
            <p>
              We use Google Analytics 4 (GA4) to understand how visitors interact with our website. GA4 may collect
              information such as device type, browser details, pages visited, time spent on pages, and approximate
              geographic location through cookies and similar technologies. This information helps us improve website
              performance and user experience. Learn more about how Google uses data here:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5f8b71] hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <p>
              You can opt out by installing Google&apos;s{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5f8b71] hover:underline"
              >
                Analytics opt-out browser add-on
              </a>
              , using your browser&apos;s cookie controls, or browsing in private/incognito mode.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Third-party services</h2>
            <p>
              Messaging or map providers (for example WhatsApp or Google Maps) have their own privacy policies. When
              you use those channels, their terms apply in addition to ours.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Data retention</h2>
            <p>
              We retain enquiry and appointment-related information only as long as needed for clinic operations and
              applicable record-keeping requirements.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p>
              For privacy-related requests, contact us using the phone or email listed on the{' '}
              <Link to="/contact" className="text-[#5f8b71] hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
