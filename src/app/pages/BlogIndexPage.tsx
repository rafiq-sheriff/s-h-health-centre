import { Link } from 'react-router';
import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const UPCOMING_TOPICS = [
  'What to expect on your first acupuncture visit in Bengaluru',
  'Desk posture, neck tension, and when holistic care may help',
  'Migraine diaries: simple tracking before your consultation',
  'Understanding realistic goals for chronic pain support',
] as const;

export default function BlogIndexPage() {
  const path = '/blog';

  return (
    <>
      <PageSeo
        path={path}
        title="Wellness Guides (Coming Soon) | S H Health Centre Bengaluru"
        description="Educational articles on acupuncture, acupressure, pain support, and holistic health in Bengaluru—publishing soon from S H Health Centre."
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Blog', path }]} />

      <main className="pt-28 sm:pt-32 lg:pt-36 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Wellness guides</h1>
          <p className="text-lg text-gray-600 mb-8">
            We are preparing plain-language articles for patients in Bengaluru and beyond. Until posts go live, you can
            read condition-specific information on our{' '}
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
        </div>
      </main>
    </>
  );
}
