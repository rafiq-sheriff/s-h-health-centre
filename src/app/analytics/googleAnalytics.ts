/** GA4 measurement ID from env (e.g. `G-XXXXXXXXXX`). Undefined disables analytics. */
export function getGaMeasurementId(): string | undefined {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  return id || undefined;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

/** Loads gtag.js once and sends the initial config (first page_view). */
export function initGoogleAnalytics(): void {
  if (typeof window === 'undefined' || initialized) return;
  const id = getGaMeasurementId();
  if (!id) return;

  initialized = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

/**
 * SPA navigation: GA4 page_view for new path (skip duplicate on first paint — initial `config` already records it).
 */
export function sendGaPageView(pagePath: string): void {
  const id = getGaMeasurementId();
  if (!id || !window.gtag) return;
  window.gtag('config', id, { page_path: pagePath });
}
