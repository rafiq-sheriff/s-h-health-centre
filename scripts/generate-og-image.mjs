/**
 * Builds `public/og-image.jpg` (1200×630) from a hero asset for Open Graph / Twitter.
 * Run via `pnpm exec node scripts/generate-og-image.mjs` or `prebuild`.
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const candidates = ['public/assets/hero.png', 'public/assets/holistic.png'].map((p) =>
  join(root, p),
);
const out = join(root, 'public', 'og-image.jpg');

const src = candidates.find((p) => existsSync(p));
if (!src) {
  console.error('generate-og-image: no source PNG found in', candidates);
  process.exit(1);
}

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(out);

console.log(`generate-og-image: wrote ${out} from ${src}`);
