import { Helmet } from 'react-helmet-async';
import { BUSINESS_NAME, SITE_ORIGIN, canonicalUrl } from '../../constants/site';
import { CLINIC_ADDRESS } from '../../constants/contact';
import type { FaqItem } from '../../data/faq';
import type { Testimonial } from '../../data/testimonials';
import type { ServicePageDef } from '../../data/servicePageContent';

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable]'],
    },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── Physician (legacy — kept for AboutPage; SiteJsonLd now has the full graph) ──

export function PhysicianJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    '@id': `${SITE_ORIGIN}/#doctor`,
    name: 'A. Soofia Fathima',
    jobTitle: 'Expert Acupuncturist & Holistic Healer',
    description:
      'A. Soofia Fathima is an expert acupuncturist and holistic healer based in Bangalore with 8+ years of experience. Qualifications: D.Acu, M.Acu, PhD (Pursuing). Member of World Skill Council (WSC).',
    url: canonicalUrl('/about'),
    image: `${SITE_ORIGIN}/profile.svg`,
    medicalSpecialty: ['Acupuncture', 'Acupressure', 'Varma Therapy'],
    knowsAbout: [
      'Acupuncture',
      'Acupressure',
      'Holistic medicine',
      'Pain management',
      'Varma Therapy',
      'Traditional Indian Medicine',
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Diploma in Acupuncture (D.Acu)' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master of Acupuncture (M.Acu)' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'membership', name: 'World Skill Council (WSC) Member' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.9, 1st Floor, CMR Main Road, HRBR 2nd Block, Above Indusind Bank, Kalyan Nagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560043',
      addressCountry: 'IN',
    },
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_ORIGIN}/#clinic`,
      name: BUSINESS_NAME,
      url: SITE_ORIGIN,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── Service Schema ───────────────────────────────────────────────────────────

/**
 * Per-page Service JSON-LD for service detail pages.
 */
export function ServiceJsonLd({ service }: { service: ServicePageDef }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl(service.path)}#service`,
    name: service.h1,
    serviceType: service.serviceSchemaType ?? service.h1,
    description: service.metaDescription,
    url: canonicalUrl(service.path),
    image: `${SITE_ORIGIN}/og-image.jpg`,
    provider: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_ORIGIN}/#clinic`,
      name: BUSINESS_NAME,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No.9, 1st Floor, CMR Main Road, HRBR 2nd Block, Above Indusind Bank, Kalyan Nagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560043',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'Neighborhood', name: 'Kalyan Nagar' },
      { '@type': 'Neighborhood', name: 'HRBR Layout' },
      { '@type': 'Neighborhood', name: 'Banaswadi' },
      { '@type': 'Neighborhood', name: 'Hennur' },
      { '@type': 'Neighborhood', name: 'Hebbal' },
    ],
    availableLanguage: [
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Hindi' },
      { '@type': 'Language', name: 'Tamil' },
      { '@type': 'Language', name: 'Kannada' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.h1,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── Review / AggregateRating ─────────────────────────────────────────────────

/**
 * Renders individual Review JSON-LD items alongside AggregateRating.
 * Use on service pages and homepage.
 */
export function ReviewJsonLd({
  reviews,
  aggregateRating,
}: {
  reviews: Testimonial[];
  aggregateRating: { ratingValue: string; reviewCount: string; bestRating: string; worstRating: string };
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_ORIGIN}/#clinic`,
    name: BUSINESS_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.name,
      },
      datePublished: r.datePublished,
      reviewBody: r.content,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── WebPage / MedicalWebPage ─────────────────────────────────────────────────

type WebPageType = 'WebPage' | 'MedicalWebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';

export function WebPageJsonLd({
  type = 'WebPage',
  path,
  name,
  description,
  datePublished,
  dateModified,
  speakableSelectors,
}: {
  type?: WebPageType;
  path: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  speakableSelectors?: string[];
}) {
  const url = canonicalUrl(path);
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
    },
    about: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_ORIGIN}/#clinic`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
    },
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
    },
  };

  if (datePublished) data.datePublished = datePublished;
  if (dateModified) data.dateModified = dateModified;
  if (speakableSelectors && speakableSelectors.length > 0) {
    data.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSelectors,
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── ItemList (for Services Hub) ─────────────────────────────────────────────

export function ItemListJsonLd({
  items,
}: {
  items: { name: string; url: string; description: string; position: number }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Holistic Treatments at ${BUSINESS_NAME}, Bangalore`,
    description:
      'Expert acupuncture, acupressure, and Varma therapy services at SH Health Centre, Kalyan Nagar, Bangalore.',
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
