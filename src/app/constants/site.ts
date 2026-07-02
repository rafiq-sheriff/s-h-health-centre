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

// ─── Doctor / E-E-A-T ────────────────────────────────────────────────────────

export const DOCTOR_NAME = 'A. Soofia Fathima';
export const DOCTOR_TITLE = 'Expert Acupuncturist & Holistic Healer';
export const DOCTOR_QUALIFICATIONS = 'D.Acu, M.Acu, PhD (Pursuing)';
export const DOCTOR_EXPERIENCE_YEARS = 8;
export const DOCTOR_MEMBERSHIP = 'World Skill Council (WSC)';

// ─── Social & Brand ──────────────────────────────────────────────────────────

export const TWITTER_HANDLE = '@shhealthcentre';

/** sameAs social profile URLs — update when accounts are live. */
export const SOCIAL_PROFILES: string[] = [
  'https://www.facebook.com/shhealthcentre',
  'https://www.instagram.com/shhealthcentre',
];

// ─── SEO Targeting ───────────────────────────────────────────────────────────

/** Global site-level keywords for meta keywords tag (supplementary signal). */
export const SITE_KEYWORDS =
  'acupuncture clinic Bangalore, acupressure clinic Bangalore, Siddha treatment Bangalore, Varma therapy Bangalore, holistic healing Kalyan Nagar, best acupuncture clinic Kalyan Nagar, pain management Bengaluru, A Soofia Fathima';

/** Areas served — used in schema and footer. */
export const AREAS_SERVED = [
  'Kalyan Nagar',
  'HRBR Layout',
  'Banaswadi',
  'Hennur',
  'Hebbal',
  'Horamavu',
  'Lingarajapuram',
  'Bengaluru',
  'Bangalore',
  'Karnataka',
] as const;

