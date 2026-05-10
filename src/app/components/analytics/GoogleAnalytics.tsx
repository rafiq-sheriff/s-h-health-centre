import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { sendGaPageView } from '../../analytics/googleAnalytics';

/**
 * Sends GA4 page views on client-side route changes (gtag base snippet lives in `index.html`).
 */
export default function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const skipNextPageView = useRef(true);

  useEffect(() => {
    const path = `${pathname}${search}`;
    if (skipNextPageView.current) {
      skipNextPageView.current = false;
      return;
    }
    sendGaPageView(path);
  }, [pathname, search]);

  return null;
}
