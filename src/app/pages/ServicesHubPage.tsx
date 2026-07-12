import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import PageSeo from '../components/seo/PageSeo';
import { BreadcrumbJsonLd, ItemListJsonLd, WebPageJsonLd } from '../components/seo/ExtraJsonLd';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SERVICE_PAGES } from '../data/servicePageContent';
import { getServicePageMedia } from '../data/servicePageMedia';
import { whatsappHref } from '../constants/contact';
import { SITE_ORIGIN } from '../constants/site';

export default function ServicesHubPage() {
  const path = '/services';

  const listItems = SERVICE_PAGES.map((s, i) => ({
    name: s.h1,
    url: `${SITE_ORIGIN}${s.path}`,
    description: s.intro.slice(0, 120),
    position: i + 1,
  }));

  return (
    <>
      <PageSeo
        path={path}
        title="Best Holistic Treatments in Bangalore | SH Health Centre"
        description="Explore acupuncture, acupressure & Varma therapy at our Kalyan Nagar clinic, Bangalore. Personalised evidence-informed care. Book your consultation today."
        keywords="holistic treatments Bangalore, acupuncture clinic Kalyan Nagar, acupressure Bangalore, Varma therapy Bangalore, SH Health Centre services"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path }]} />
      <ItemListJsonLd items={listItems} />
      <WebPageJsonLd
        type="CollectionPage"
        path={path}
        name="Best Holistic Treatments in Bangalore — SH Health Centre Services"
        description="All holistic treatment services at SH Health Centre, Kalyan Nagar, Bangalore."
        datePublished="2026-05-10"
        dateModified="2026-07-02"
      />

      <main className="bg-gradient-to-b from-white via-[#FAFAF8] to-[#F5F3EF] pb-20">
        <div className="border-b border-gray-100 bg-white/90 pt-28 backdrop-blur-sm sm:pt-32 lg:pt-36">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <div className="inline-block rounded-full bg-[#7AA98C]/10 px-4 py-2">
                <span className="font-medium text-[#7AA98C]">Clinical services</span>
              </div>
              <h1 className="mt-5 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
                Best holistic treatments in Bangalore
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Evidence-informed holistic care at our Kalyan Nagar clinic — acupuncture, acupressure, and Varma
                therapy. Each page explains what to expect, how we work, and how to book. Choose a topic below.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200/80">
              <div className="aspect-[4/3] sm:aspect-[16/10]">
                <ImageWithFallback
                  src="/assets/hero.png"
                  alt="Welcoming holistic treatment environment at SH Health Centre, Kalyan Nagar Bangalore"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7AA98C]/20 to-transparent" aria-hidden />
            </div>
          </div>

          <ul className="mt-14 space-y-4" aria-label="All treatment services">
            {SERVICE_PAGES.map((s) => {
              const thumb = getServicePageMedia(s.path);
              return (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="group flex gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#7AA98C]/45 hover:shadow-md sm:gap-6 sm:p-5"
                    aria-label={`Learn about ${s.h1}`}
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28">
                      <ImageWithFallback
                        src={thumb.heroSrc}
                        alt={thumb.heroAlt}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                        width={112}
                        height={112}
                        sizes="112px"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#5f8b71] sm:text-xl">
                          {s.h1}
                        </h2>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-600 sm:line-clamp-3 sm:text-[15px]">{s.intro}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-[#7AA98C] transition group-hover:translate-x-0.5" aria-hidden />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 rounded-2xl border border-[#7AA98C]/20 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900">Not sure where to start?</h2>
            <p className="mt-2 text-gray-600">
              Message us on WhatsApp with a short description of your concern. We will suggest whether a consultation
              fits and what to bring on your first visit.
            </p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a]"
              aria-label="Chat with SH Health Centre on WhatsApp"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
