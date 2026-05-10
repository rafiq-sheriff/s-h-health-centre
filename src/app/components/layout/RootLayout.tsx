import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import StickyActions from './StickyActions';
import RoutePageSkeleton from './RoutePageSkeleton';
import SiteJsonLd from '../seo/SiteJsonLd';

export default function RootLayout() {
  return (
    <>
      <SiteJsonLd />
      <ScrollToTop />
      <div
        className="min-h-screen bg-white overflow-x-clip pb-24 sm:pb-20"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <Header />
        <Suspense fallback={<RoutePageSkeleton />}>
          <Outlet />
        </Suspense>
        <Footer />
        <StickyActions />
      </div>
    </>
  );
}
