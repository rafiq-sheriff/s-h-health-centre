import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { BUSINESS_NAME } from '../constants/site';

export default function MedicalDisclaimerPage() {
  const path = '/medical-disclaimer';

  return (
    <>
      <PageSeo
        path={path}
        title={`Medical Disclaimer | ${BUSINESS_NAME}, Bangalore`}
        description="Important medical disclaimer for visitors to SH Health Centre, Kalyan Nagar, Bangalore. This website is not a substitute for emergency care or professional medical diagnosis."
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Medical Disclaimer', path }]} />

      <main className="pt-28 sm:pt-32 lg:pt-36 pb-20 bg-gradient-to-br from-white to-[#F5F3EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Medical Disclaimer' }]} />
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Medical disclaimer</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8 space-y-4 text-gray-800 leading-relaxed">
            <p>
              The information on this website is for general educational purposes only. It is not intended as medical
              advice, diagnosis, or treatment. Always seek the guidance of a qualified health provider with any
              questions about a medical condition.
            </p>
            <p>
              {BUSINESS_NAME} provides in-person consultations in Bengaluru. A website visit, message, or phone call does
              not establish care until assessed appropriately in our clinical process.
            </p>
            <p>
              If you think you may be experiencing a medical emergency, call your local emergency number immediately. Do
              not rely on email, WhatsApp, or web forms for urgent situations.
            </p>
            <p>
              Do not stop or change prescribed medication or treatment based on website content without speaking to the
              clinician who prescribed it.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
