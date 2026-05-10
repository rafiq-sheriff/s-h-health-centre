import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { getGaMeasurementId, initGoogleAnalytics, sendGaPageView } from '../../analytics/googleAnalytics';

/**
 * GA4 when `VITE_GA_MEASUREMENT_ID` is set; tracks SPA route changes without double-counting the landing page.
 */
export default function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const skipNextPageView = useRef(true);

  useEffect(() => {
    if (!getGaMeasurementId()) return;
    initGoogleAnalytics();
  }, []);

  useEffect(() => {
    if (!getGaMeasurementId()) return;
    const path = `${pathname}${search}`;
    if (skipNextPageView.current) {
      skipNextPageView.current = false;
      return;
    }
    sendGaPageView(path);
  }, [pathname, search]);

  return null;
}
