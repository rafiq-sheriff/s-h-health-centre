import { Helmet } from 'react-helmet-async';
import { BUSINESS_NAME, SITE_ORIGIN, canonicalUrl } from '../../constants/site';
import type { FaqItem } from '../../data/faq';

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

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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

export function PhysicianJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'A. Soofia Fathima',
    jobTitle: 'Expert Acupuncturist & Holistic Healer',
    url: canonicalUrl('/about'),
    image: `${SITE_ORIGIN}/logo.svg`,
    medicalSpecialty: 'Acupuncture',
    knowsAbout: ['Acupuncture', 'Acupressure', 'Holistic medicine', 'Pain management'],
    worksFor: {
      '@type': 'MedicalClinic',
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
