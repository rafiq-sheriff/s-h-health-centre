import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import RootLayout from './components/layout/RootLayout';
import { ALL_SERVICE_PATHS } from './data/servicePageContent';
import HomePage from './pages/HomePage';

const ServicesHubPage = lazy(() => import('./pages/ServicesHubPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const MedicalDisclaimerPage = lazy(() => import('./pages/MedicalDisclaimerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesHubPage />} />
          {ALL_SERVICE_PATHS.map((servicePath) => (
            <Route key={servicePath} path={servicePath.slice(1)} element={<ServiceDetailPage />} />
          ))}
          <Route
            path="faqs"
            element={<Navigate to={{ pathname: '/', hash: 'faqs' }} replace />}
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogIndexPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="medical-disclaimer" element={<MedicalDisclaimerPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
