import { Helmet } from 'react-helmet-async';
import {
  BUSINESS_NAME,
  DEFAULT_OG_IMAGE,
  DOCTOR_NAME,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_ORIGIN,
  TWITTER_HANDLE,
  canonicalUrl,
} from '../../constants/site';

export type PageSeoProps = {
  title: string;
  description: string;
  path: string;
  /** If false, inject noindex,nofollow. Default: true (indexable). */
  indexable?: boolean;
  ogType?: 'website' | 'article';
  /** Override the default OG/Twitter image with a per-page image URL. */
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  /** Comma-separated keyword string for the meta keywords tag. */
  keywords?: string;
  /** For article pages: ISO 8601 published date. */
  publishedTime?: string;
  /** For article pages: ISO 8601 modified date. */
  modifiedTime?: string;
};

/**
 * Per-route meta tags, canonical URL, Open Graph, Twitter Card, and schema signals.
 * Preserves existing Helmet usage — only adds new props.
 */
export default function PageSeo({
  title,
  description,
  path,
  indexable = true,
  ogType = 'website',
  ogImage,
  ogImageWidth,
  ogImageHeight,
  keywords,
  publishedTime,
  modifiedTime,
}: PageSeoProps) {
  const url = canonicalUrl(path);
  const ogTitle = title.includes(BUSINESS_NAME) ? title : `${title} | ${BUSINESS_NAME}`;
  const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE;
  const resolvedOgImageWidth = ogImageWidth ?? OG_IMAGE_WIDTH;
  const resolvedOgImageHeight = ogImageHeight ?? OG_IMAGE_HEIGHT;

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Robots */}
      <meta
        name="robots"
        content={indexable ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' : 'noindex, nofollow'}
      />

      {/* Author / E-E-A-T */}
      <meta name="author" content={DOCTOR_NAME} />

      {/* Keywords (supplementary signal) */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content={String(resolvedOgImageWidth)} />
      <meta property="og:image:height" content={String(resolvedOgImageHeight)} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={ogTitle} />
      <meta property="og:locale" content="en_IN" />

      {/* Article-specific OG tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content={`${SITE_ORIGIN}/about`} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={ogTitle} />
    </Helmet>
  );
}
