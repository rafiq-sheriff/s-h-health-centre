// Build-time sitemap generator. Routes are declared once here and service
// detail paths are extracted from src/app/data/servicePageContent.ts so the
// sitemap stays in sync with the React Router config.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE_ORIGIN = (process.env.VITE_SITE_ORIGIN ?? 'https://shhealthcentre.com').replace(/\/$/, '');
const TODAY = new Date().toISOString().slice(0, 10);

/** @typedef {{ path: string, priority: number, changefreq: 'weekly'|'monthly'|'yearly' }} SitemapEntry */

/** @returns {string[]} Service detail paths extracted from the TS source. */
function readServicePaths() {
  const source = readFileSync(
    join(ROOT, 'src', 'app', 'data', 'servicePageContent.ts'),
    'utf8',
  );
  const matches = [...source.matchAll(/path:\s*'(\/[a-z0-9-]+)'/gi)];
  return [...new Set(matches.map((m) => m[1]))];
}

/** @type {SitemapEntry[]} Static, hand-tuned routes. Order is preserved in output. */
const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.85, changefreq: 'monthly' },
  { path: '/blog', priority: 0.6, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/medical-disclaimer', priority: 0.3, changefreq: 'yearly' },
];

const servicePaths = readServicePaths();

/** @type {SitemapEntry[]} Service detail pages auto-discovered from data. */
const serviceRoutes = servicePaths.map((path) => ({
  path,
  priority: 0.9,
  changefreq: /** @type {const} */ ('monthly'),
}));

const allRoutes = [
  ...STATIC_ROUTES.slice(0, 2),
  ...serviceRoutes,
  ...STATIC_ROUTES.slice(2),
];

const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const formatPriority = (value) => (Number.isInteger(value) ? value.toFixed(1) : String(value));

const urlNodes = allRoutes
  .map(({ path, priority, changefreq }) => {
    const loc = escapeXml(`${SITE_ORIGIN}${path}`);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${formatPriority(priority)}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;

const outPath = join(ROOT, 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');

console.log(
  `generate-sitemap: wrote ${outPath} (${allRoutes.length} URLs, origin ${SITE_ORIGIN}, lastmod ${TODAY})`,
);
