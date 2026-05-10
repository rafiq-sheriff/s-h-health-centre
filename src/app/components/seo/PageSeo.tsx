import { Helmet } from 'react-helmet-async';
import {
  BUSINESS_NAME,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  canonicalUrl,
} from '../../constants/site';

export type PageSeoProps = {
  title: string;
  description: string;
  path: string;
  /** If false, omit robots (default indexable). */
  indexable?: boolean;
  ogType?: 'website' | 'article';
};

/**
 * Per-route meta tags, canonical URL, and Open Graph defaults.
 */
export default function PageSeo({
  title,
  description,
  path,
  indexable = true,
  ogType = 'website',
}: PageSeoProps) {
  const url = canonicalUrl(path);
  const ogTitle = title.includes(BUSINESS_NAME) ? title : `${title} | ${BUSINESS_NAME}`;

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {!indexable && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
}
