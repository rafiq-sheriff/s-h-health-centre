import { Link, Navigate, useLocation } from 'react-router';
import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getServicePage } from '../data/servicePageContent';
import { getServicePageMedia } from '../data/servicePageMedia';
import { PHONE_TEL, whatsappHref } from '../constants/contact';

export default function ServiceDetailPage() {
  const { pathname } = useLocation();
  const def = getServicePage(pathname);

  if (!def) {
    return <Navigate to="/404" replace />;
  }

  const media = getServicePageMedia(def.path);

  const wa = whatsappHref(
    `Hello, I would like to book a consultation about: ${def.h1}.`,
  );

  return (
    <>
      <PageSeo path={def.path} title={def.seoTitle} description={def.metaDescription} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: def.h1, path: def.path },
        ]}
      />

      <main className="pb-20 bg-gradient-to-b from-white via-[#FAFAF8] to-white">
        <div className="border-b border-gray-100 bg-white/80 pt-28 backdrop-blur-sm sm:pt-32 lg:pt-36">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: def.h1 }]}
            />
          </div>
        </div>

        <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-2 mb-10 overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200/60">
            <div className="aspect-[16/10] min-h-[220px] sm:aspect-[2.2/1] sm:min-h-[260px]">
              <ImageWithFallback
                src={media.heroSrc}
                alt={media.heroAlt}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
              aria-hidden
            />
            <p className="pointer-events-none absolute bottom-4 left-4 right-4 text-sm font-medium text-white/95 drop-shadow md:bottom-5 md:left-6">
              S H Health Centre · Kalyan Nagar, Bengaluru
            </p>
          </div>

          <h1 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">{def.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{def.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a]"
            >
              Book on WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex justify-center rounded-full border border-[#7AA98C] px-6 py-3 text-sm font-semibold text-[#5f8b71] hover:bg-[#7AA98C]/10"
            >
              Call the clinic
            </a>
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-full bg-[#7AA98C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6a9879]"
            >
              Contact &amp; location
            </Link>
          </div>

          <div className="mt-14 space-y-12">
            {def.sections.map((section, sectionIndex) => (
              <div key={section.h2}>
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">{section.h2}</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-gray-600">
                    {section.paragraphs.map((p, i) => (
                      <p key={`${section.h2}-${i}`}>{p}</p>
                    ))}
                  </div>
                </section>

                {media.secondarySrc && sectionIndex === 1 && (
                  <figure className="mt-12 overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-sm">
                    <div className="aspect-[16/9] max-h-[340px] sm:aspect-[2.4/1]">
                      <ImageWithFallback
                        src={media.secondarySrc}
                        alt={media.secondaryAlt ?? ''}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 896px"
                      />
                    </div>
                    {media.secondaryAlt ? (
                      <figcaption className="border-t border-gray-100 bg-white px-4 py-3 text-sm text-gray-500">
                        {media.secondaryAlt}
                      </figcaption>
                    ) : null}
                  </figure>
                )}
              </div>
            ))}
          </div>

          <aside className="mt-16 rounded-2xl border border-[#7AA98C]/25 bg-gradient-to-br from-[#F5F3EF] to-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-900">Ready to talk?</h2>
            <p className="mt-2 text-gray-600">
              Share your goals and availability. We respond as soon as we can during working hours.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
              <Link
                to="/#faqs"
                className="inline-flex rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800"
              >
                Read FAQs
              </Link>
            </div>
          </aside>
        </article>
      </main>
    </>
  );
}
