/** Must match `gtag('config', …)` in `index.html`. */
export const GA_MEASUREMENT_ID = 'G-ECLLQEW44C';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * SPA navigation: GA4 page_view for the new path (initial landing page is recorded by `index.html` gtag snippet).
 */
export function sendGaPageView(pagePath: string): void {
  if (!window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: pagePath });
}
