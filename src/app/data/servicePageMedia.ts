/**
 * Photography paths under `/public/assets/` for service hub + detail pages.
 */
export type ServicePageMedia = {
  heroSrc: string;
  heroAlt: string;
  /** Optional mid-page image after the second content section */
  secondarySrc?: string;
  secondaryAlt?: string;
};

export const SERVICE_PAGE_MEDIA: Record<string, ServicePageMedia> = {
  '/acupuncture-treatment-bengaluru': {
    heroSrc: '/assets/acupuncture.png',
    heroAlt: 'Acupuncture treatment setting at S H Health Centre, Bengaluru',
    secondarySrc: '/assets/electro-acupuncture.png',
    secondaryAlt: 'Electro-acupuncture therapy equipment used during supportive care sessions',
  },
  '/acupressure-treatment-bengaluru': {
    heroSrc: '/assets/acupressure.png',
    heroAlt: 'Acupressure and holistic therapy care at S H Health Centre, Kalyan Nagar',
    secondarySrc: '/assets/nadi.png',
    secondaryAlt: 'Traditional pulse-based assessment supporting individualized sessions',
  },
  '/siddha-treatment-bengaluru': {
    heroSrc: '/assets/varma-therapy.png',
    heroAlt: 'Holistic consultation and traditional therapies at S H Health Centre, Bengaluru',
    secondarySrc: '/assets/nadi.png',
    secondaryAlt: 'Thoughtful assessment as part of Siddha-informed holistic planning',
  },
  '/pain-management-bengaluru': {
    heroSrc: '/assets/holistic.png',
    heroAlt:
      'Holistic healing setting—meditation, singing bowl, salt lamp and supportive therapies for pain management at our Bengaluru clinic',
    secondarySrc: '/assets/acupressure.png',
    secondaryAlt: 'Hands-on therapeutic approaches as part of a structured pain support plan',
  },
  '/arthritis-treatment-bengaluru': {
    heroSrc: '/assets/gua-sha.png',
    heroAlt: 'Gentle holistic techniques offered alongside consultation-led arthritis support',
    secondarySrc: '/assets/acupuncture.png',
    secondaryAlt: 'Acupuncture as one option discussed during your assessment',
  },
  '/psoriasis-treatment-bengaluru': {
    heroSrc: '/assets/womens-health.png',
    heroAlt:
      'Calm, holistic wellness illustration representing supportive care for people managing psoriasis in Bengaluru',
    secondarySrc: '/assets/gua-sha.png',
    secondaryAlt: 'Supportive therapies discussed in context with your dermatology-led care plan',
  },
  '/migraine-treatment-bengaluru': {
    heroSrc: '/assets/scalp-acupuncture.png',
    heroAlt: 'Focused holistic approaches for headache and migraine support in Bengaluru',
    secondarySrc: '/assets/auricular.png',
    secondaryAlt: 'Auricular therapy techniques that may form part of your care plan',
  },
};

export function getServicePageMedia(path: string): ServicePageMedia {
  return (
    SERVICE_PAGE_MEDIA[path] ?? {
      heroSrc: '/assets/acupuncture.png',
      heroAlt: 'Holistic care at S H Health Centre, Bengaluru',
    }
  );
}
