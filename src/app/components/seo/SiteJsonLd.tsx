import { Helmet } from 'react-helmet-async';
import { CLINIC_ADDRESS, EMAIL_ADDRESS, PHONE_TEL } from '../../constants/contact';
import { BUSINESS_NAME, CLINIC_GEO, DEFAULT_OG_IMAGE, SITE_ORIGIN } from '../../constants/site';

function medicalClinicSchema() {
  const telephone = PHONE_TEL.replace('tel:', '');

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: BUSINESS_NAME,
    description:
      'Holistic health and wellness centre in Bengaluru offering acupuncture, acupressure, Siddha-informed consultations, and pain support.',
    url: SITE_ORIGIN,
    image: DEFAULT_OG_IMAGE,
    telephone,
    email: EMAIL_ADDRESS,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'No.9, 1st Floor, CMR Main Road, HRBR 2nd Block, Above Indusind Bank, Kalyan Nagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560043',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_GEO.latitude,
      longitude: CLINIC_GEO.longitude,
    },
    openingHoursSpecification: [
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
    ],
    areaServed: {
      '@type': 'City',
      name: 'Bengaluru',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Karnataka',
      },
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
    medicalSpecialty: ['Acupuncture'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Tamil', 'Kannada'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    },
  };
}

/**
 * Global MedicalClinic JSON-LD (one graph per page is acceptable; keep identical).
 */
export default function SiteJsonLd() {
  const data = medicalClinicSchema();

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
