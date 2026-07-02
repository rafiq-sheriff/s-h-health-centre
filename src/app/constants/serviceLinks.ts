/**
 * Maps marquee / UI service labels to internal SEO URLs (when available).
 */
export const SERVICE_TITLE_TO_PATH: Record<string, string> = {
  Acupuncture: '/acupuncture-treatment-bengaluru',
  'Electro Acupuncture': '/acupuncture-treatment-bengaluru',
  Acupressure: '/acupressure-treatment-bengaluru',
  'Varma Therapy': '/varma-treatment-bengaluru',
  Sujok: '/pain-management-bengaluru',
  Auricular: '/acupuncture-treatment-bengaluru',
  'Scalp Acupuncture': '/acupuncture-treatment-bengaluru',
  'Master Tung': '/acupuncture-treatment-bengaluru',
  Cupping: '/pain-management-bengaluru',
  'Gua Sha': '/pain-management-bengaluru',
  "Women's Health": '/pain-management-bengaluru',
};

export function serviceDetailPath(title: string): string | undefined {
  return SERVICE_TITLE_TO_PATH[title];
}

