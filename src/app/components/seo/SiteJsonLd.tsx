import { Helmet } from 'react-helmet-async';
import { CLINIC_ADDRESS, EMAIL_ADDRESS, PHONE_TEL } from '../../constants/contact';
import {
  AREAS_SERVED,
  BUSINESS_NAME,
  CLINIC_GEO,
  DEFAULT_OG_IMAGE,
  DOCTOR_NAME,
  DOCTOR_QUALIFICATIONS,
  DOCTOR_TITLE,
  SITE_ORIGIN,
  SOCIAL_PROFILES,
} from '../../constants/site';
import { AGGREGATE_RATING } from '../../data/testimonials';

function buildGraph() {
  const telephone = PHONE_TEL.replace('tel:', '');
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;

  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: 'No.9, 1st Floor, CMR Main Road, HRBR 2nd Block, Above Indusind Bank, Kalyan Nagar',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560043',
    addressCountry: 'IN',
  };

  const geo = {
    '@type': 'GeoCoordinates',
    latitude: CLINIC_GEO.latitude,
    longitude: CLINIC_GEO.longitude,
  };

  const openingHours = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '13:00',
    },
  ];

  const contactPoint = {
    '@type': 'ContactPoint',
    telephone,
    email: EMAIL_ADDRESS,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Tamil', 'Kannada'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  };

  const areaServedList = AREAS_SERVED.map((area) => ({
    '@type': 'City',
    name: area,
  }));

  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: AGGREGATE_RATING.ratingValue,
    reviewCount: AGGREGATE_RATING.reviewCount,
    bestRating: AGGREGATE_RATING.bestRating,
    worstRating: AGGREGATE_RATING.worstRating,
  };

  // ─── 1. MedicalClinic / LocalBusiness ────────────────────────────────────────
  const medicalClinic = {
    '@type': ['MedicalClinic', 'LocalBusiness', 'MedicalOrganization'],
    '@id': `${SITE_ORIGIN}/#clinic`,
    name: BUSINESS_NAME,
    alternateName: 'S H Health Centre Kalyan Nagar',
    description:
      'Best acupuncture clinic in Bangalore offering expert acupuncture, acupressure, and Varma therapy. Located in Kalyan Nagar, serving patients across Bengaluru since 2016.',
    url: SITE_ORIGIN,
    image: DEFAULT_OG_IMAGE,
    logo: `${SITE_ORIGIN}/logo.svg`,
    telephone,
    email: EMAIL_ADDRESS,
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI',
    address: postalAddress,
    geo,
    hasMap: mapsUrl,
    openingHoursSpecification: openingHours,
    areaServed: areaServedList,
    medicalSpecialty: [
      'Acupuncture',
      'Acupressure',
      'Varma Therapy',
      'Holistic Medicine',
      'Pain Management',
    ],
    availableLanguage: ['English', 'Hindi', 'Tamil', 'Kannada'],
    contactPoint,
    aggregateRating,
    founder: {
      '@type': 'Person',
      '@id': `${SITE_ORIGIN}/#doctor`,
      name: DOCTOR_NAME,
      jobTitle: DOCTOR_TITLE,
    },
    sameAs: [...SOCIAL_PROFILES, 'https://maps.google.com/?q=SH+Health+Centre+Kalyan+Nagar+Bangalore'],
  };

  // ─── 2. Organization ─────────────────────────────────────────────────────────
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/logo.svg`,
      width: 180,
      height: 60,
    },
    image: DEFAULT_OG_IMAGE,
    telephone,
    email: EMAIL_ADDRESS,
    address: postalAddress,
    foundingDate: '2016',
    founder: {
      '@type': 'Person',
      '@id': `${SITE_ORIGIN}/#doctor`,
      name: DOCTOR_NAME,
    },
    sameAs: SOCIAL_PROFILES,
    contactPoint,
  };

  // ─── 3. Physician ────────────────────────────────────────────────────────────
  const physician = {
    '@type': ['Physician', 'Person'],
    '@id': `${SITE_ORIGIN}/#doctor`,
    name: DOCTOR_NAME,
    jobTitle: DOCTOR_TITLE,
    description: `${DOCTOR_NAME} is an expert acupuncturist and holistic healer based in Bangalore with 8+ years of experience. Qualifications: ${DOCTOR_QUALIFICATIONS}. Member of World Skill Council (WSC).`,
    url: `${SITE_ORIGIN}/about`,
    image: `${SITE_ORIGIN}/profile.svg`,
    medicalSpecialty: ['Acupuncture', 'Acupressure', 'Varma Therapy'],
    knowsAbout: [
      'Acupuncture',
      'Acupressure',
      'Varma Therapy',
      'Holistic Medicine',
      'Pain Management',
      'Traditional Indian Medicine',
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Diploma in Acupuncture (D.Acu)' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master of Acupuncture (M.Acu)' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'membership', name: 'World Skill Council (WSC) Member' },
    ],
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_ORIGIN}/#clinic`,
      name: BUSINESS_NAME,
    },
    address: postalAddress,
  };

  // ─── 4. WebSite + SearchAction ───────────────────────────────────────────────
  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    name: BUSINESS_NAME,
    url: SITE_ORIGIN,
    description:
      'Official website of S H Health Centre — best acupuncture, acupressure & Varma therapy clinic in Kalyan Nagar, Bangalore.',
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_ORIGIN}/services?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [medicalClinic, organization, physician, website],
  };
}

/**
 * Global site-level JSON-LD @graph — MedicalClinic, Organization, Physician, WebSite.
 * Rendered once in RootLayout so it appears on every page.
 */
export default function SiteJsonLd() {
  const graph = buildGraph();

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}
