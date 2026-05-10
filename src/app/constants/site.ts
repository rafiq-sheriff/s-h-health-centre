/** Production site URL — set `VITE_SITE_ORIGIN` in `.env` (no trailing slash). */
export const SITE_ORIGIN = (
  import.meta.env.VITE_SITE_ORIGIN as string | undefined
)?.replace(/\/$/, '') || 'https://shhealthcentre.com';

export const BUSINESS_NAME = 'S H Health Centre';

/** Raster share image at site root (`scripts/generate-og-image.mjs`). */
export const OG_IMAGE_PATH = '/og-image.jpg';

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}${OG_IMAGE_PATH}`;

export function canonicalUrl(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_ORIGIN}${path}`;
}

/** Approximate coordinates for Kalyan Nagar, Bengaluru (for LocalBusiness / Maps). */
export const CLINIC_GEO = {
  latitude: 13.0196,
  longitude: 77.6437,
} as const;
