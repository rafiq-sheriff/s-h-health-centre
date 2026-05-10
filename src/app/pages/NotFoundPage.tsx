import { Link, useLocation } from 'react-router';
import PageSeo from '../components/seo/PageSeo';

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <>
      <PageSeo
        path={pathname || '/404'}
        title="Page not found | S H Health Centre"
        description="The page you requested could not be found."
        indexable={false}
      />

      <main className="pt-36 pb-24 px-4 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The link may be outdated or the page may have moved. Start again from the homepage or contact us for help.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-full bg-[#7AA98C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6a9879]"
          >
            Go home
          </Link>
          <Link
            to="/contact"
            className="inline-flex rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
      </main>
    </>
  );
}
