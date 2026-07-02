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
    heroAlt: 'Acupuncture treatment session at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/electro-acupuncture.png',
    secondaryAlt: 'Electro-acupuncture therapy used during supportive care sessions at our Bangalore clinic',
  },
  '/acupressure-treatment-bengaluru': {
    heroSrc: '/assets/acupressure.png',
    heroAlt: 'Acupressure therapy session at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/nadi.png',
    secondaryAlt: 'Traditional pulse-based assessment supporting individualised acupressure sessions in Bangalore',
  },
  '/siddha-treatment-bengaluru': {
    heroSrc: '/assets/varma-therapy.png',
    heroAlt: 'Siddha-informed holistic consultation at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/nadi.png',
    secondaryAlt: 'Traditional assessment as part of Siddha-informed holistic care planning in Bangalore',
  },
  '/varma-treatment-bengaluru': {
    heroSrc: '/assets/varma-therapy.png',
    heroAlt: 'Varma therapy treatment session at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/nadi.png',
    secondaryAlt: 'Traditional Varmam point assessment and treatment at our holistic clinic in Bengaluru',
  },
  '/pain-management-bengaluru': {
    heroSrc: '/assets/holistic.png',
    heroAlt:
      'Holistic healing setting at SH Health Centre — supportive therapies for pain management in Bangalore, Kalyan Nagar',
    secondarySrc: '/assets/acupressure.png',
    secondaryAlt: 'Hands-on therapeutic approaches as part of a structured pain support plan at our Bengaluru clinic',
  },
  '/arthritis-treatment-bengaluru': {
    heroSrc: '/assets/gua-sha.png',
    heroAlt: 'Holistic arthritis pain support at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/acupuncture.png',
    secondaryAlt: 'Acupuncture as a supportive option for arthritis pain management at our Bangalore clinic',
  },
  '/psoriasis-treatment-bengaluru': {
    heroSrc: '/assets/womens-health.png',
    heroAlt:
      'Calm holistic wellness environment at SH Health Centre — supportive care for psoriasis patients in Bangalore',
    secondarySrc: '/assets/gua-sha.png',
    secondaryAlt: 'Supportive therapies discussed alongside dermatology-led psoriasis care at our Bengaluru clinic',
  },
  '/migraine-treatment-bengaluru': {
    heroSrc: '/assets/scalp-acupuncture.png',
    heroAlt: 'Scalp acupuncture technique for migraine and headache support at SH Health Centre, Bangalore',
    secondarySrc: '/assets/auricular.png',
    secondaryAlt: 'Auricular therapy techniques that may form part of migraine care at our Kalyan Nagar clinic',
  },
  '/back-pain-treatment-bengaluru': {
    heroSrc: '/assets/acupuncture.png',
    heroAlt: 'Acupuncture treatment for back pain at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/cupping.png',
    secondaryAlt: 'Cupping therapy as a supportive approach for back pain relief at our Bengaluru clinic',
  },
  '/neck-pain-treatment-bengaluru': {
    heroSrc: '/assets/acupuncture.png',
    heroAlt: 'Holistic neck pain treatment session at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/gua-sha.png',
    secondaryAlt: 'Gua sha therapy for neck tension and pain relief at our Bangalore holistic clinic',
  },
  '/sciatica-treatment-bengaluru': {
    heroSrc: '/assets/acupressure.png',
    heroAlt: 'Supportive holistic therapy for sciatica at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/acupuncture.png',
    secondaryAlt: 'Acupuncture for sciatic nerve pain support at our holistic clinic in Bengaluru',
  },
  '/knee-pain-treatment-bengaluru': {
    heroSrc: '/assets/acupressure.png',
    heroAlt: 'Holistic knee pain treatment at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/acupuncture.png',
    secondaryAlt: 'Acupuncture for knee joint pain and osteoarthritis support at our Bangalore clinic',
  },
  '/frozen-shoulder-treatment-bengaluru': {
    heroSrc: '/assets/acupuncture.png',
    heroAlt: 'Holistic frozen shoulder treatment at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/gua-sha.png',
    secondaryAlt: 'Supportive gua sha therapy for shoulder pain and stiffness at our Bengaluru clinic',
  },
  '/slip-disc-treatment-bengaluru': {
    heroSrc: '/assets/holistic.png',
    heroAlt: 'Holistic supportive care for slip disc at SH Health Centre, Kalyan Nagar Bangalore',
    secondarySrc: '/assets/acupuncture.png',
    secondaryAlt: 'Acupuncture as a complementary therapy for disc-related back pain in Bangalore',
  },
  '/pcod-treatment-bengaluru': {
    heroSrc: '/assets/womens-health.png',
    heroAlt: "Holistic women's health care for PCOD at SH Health Centre, Kalyan Nagar Bangalore",
    secondarySrc: '/assets/nadi.png',
    secondaryAlt: 'Traditional pulse assessment as part of holistic PCOD support at our Bengaluru clinic',
  },
  '/insomnia-treatment-bengaluru': {
    heroSrc: '/assets/holistic.png',
    heroAlt: 'Calming holistic environment for insomnia and sleep support at SH Health Centre, Bangalore',
    secondarySrc: '/assets/acupressure.png',
    secondaryAlt: 'Acupressure and relaxation therapies for sleep support at our Kalyan Nagar clinic',
  },
};

export function getServicePageMedia(path: string): ServicePageMedia {
  return (
    SERVICE_PAGE_MEDIA[path] ?? {
      heroSrc: '/assets/acupuncture.png',
      heroAlt: 'Holistic healing care at SH Health Centre, Kalyan Nagar Bangalore',
    }
  );
}
