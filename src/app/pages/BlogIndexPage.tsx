import { Link } from 'react-router';
import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd, WebPageJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const UPCOMING_TOPICS = [
  'What to expect on your first acupuncture visit in Bengaluru',
  'Desk posture, neck tension, and when holistic care may help',
  'Migraine diaries: simple tracking before your consultation',
  'Understanding realistic goals for chronic pain support',
  'Acupressure vs acupuncture — which is right for you?',
  'How Varma therapy supports pain and nerve health',
] as const;

export default function BlogIndexPage() {
  const path = '/blog';

  return (
    <>
      <PageSeo
        path={path}
        title="Health & Wellness Blog | Acupuncture Tips | SH Health Centre"
        description="Read expert articles on acupuncture, acupressure, pain management & holistic health from SH Health Centre, Bangalore. Educational guides from our Kalyan Nagar clinic."
        keywords="acupuncture blog Bangalore, holistic health articles, wellness tips Kalyan Nagar, SH Health Centre blog"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Blog', path }]} />
      <WebPageJsonLd
        type="WebPage"
        path={path}
        name="Health & Wellness Blog | SH Health Centre, Bangalore"
        description="Expert wellness articles on acupuncture, acupressure, and holistic health from SH Health Centre, Kalyan Nagar, Bangalore."
        datePublished="2026-05-10"
        dateModified="2026-07-02"
      />

      <main className="pt-28 sm:pt-32 lg:pt-36 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Wellness guides</h1>
          <p className="text-lg text-gray-600 mb-8">
            We are preparing plain-language articles on acupuncture, acupressure, and holistic health for patients in
            Bengaluru and beyond. Until posts go live, you can read condition-specific information on our{' '}
            <Link to="/services" className="text-[#5f8b71] font-medium hover:underline">
              service pages
            </Link>{' '}
            and{' '}
            <Link to="/#faqs" className="text-[#5f8b71] font-medium hover:underline">
              FAQs
            </Link>
            .
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Planned topics</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {UPCOMING_TOPICS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-[#7AA98C]/20 bg-[#F5F3EF] p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Explore our services</h2>
            <p className="text-gray-600 mb-4">
              Each service page contains detailed information about treatments, what to expect, and how to book.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full bg-[#7AA98C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6a9879]"
            >
              View all treatments
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
