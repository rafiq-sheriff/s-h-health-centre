import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { whatsappHref } from '../../constants/contact';
import { serviceDetailPath } from '../../constants/serviceLinks';
import { fadeInUp } from './sectionMotion';

const SERVICES = [
  { title: 'Acupuncture', image: '/assets/acupuncture.png' },
  { title: 'Electro Acupuncture', image: '/assets/electro-acupuncture.png' },
  { title: 'Acupressure', image: '/assets/acupressure.png' },
  { title: 'Varma Therapy', image: '/assets/varma-therapy.png' },
  { title: 'Sujok', image: '/assets/sujok.png' },
  { title: 'Auricular', image: '/assets/auricular.png' },
  { title: 'Scalp Acupuncture', image: '/assets/scalp-acupuncture.png' },
  { title: 'Master Tung', image: '/assets/master-tung.png' },
  { title: 'Cupping', image: '/assets/cupping.png' },
  { title: 'Gua Sha', image: '/assets/gua-sha.png' },
  { title: "Women's Health", image: '/assets/womens-health.png' },
] as const;

type ServiceItem = (typeof SERVICES)[number];

function ServiceCard({ service }: { service: ServiceItem }) {
  const detail = serviceDetailPath(service.title);

  const cardClass =
    'group relative flex h-full w-[240px] shrink-0 flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm shadow-gray-200/40 transition-all duration-300 hover:border-[#7AA98C]/35 hover:shadow-lg hover:shadow-gray-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7AA98C] sm:w-[260px] md:w-[272px]';

  const figure = (
    <figure className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
      <ImageWithFallback
        src={service.image}
        alt={`${service.title} therapy at S H Health Centre, Bengaluru`}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        sizes="272px"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#7AA98C]/0 transition-colors duration-300 group-hover:bg-[#7AA98C]/15"
        aria-hidden
      />
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-white leading-snug drop-shadow-sm sm:text-xl">{service.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-white/95">
          {detail ? (
            <>
              <span>Care overview</span>
              <ArrowUpRight className="h-4 w-4 opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          ) : (
            <>
              <MessageCircle className="h-4 w-4 text-[#b8e4c9]" aria-hidden />
              <span>Ask on WhatsApp</span>
            </>
          )}
        </p>
      </figcaption>
    </figure>
  );

  return detail ? (
    <Link to={detail} className={`${cardClass} block`}>
      {figure}
    </Link>
  ) : (
    <a
      href={whatsappHref(`Hello, I'd like to know more about ${service.title} at S H Health Centre.`)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClass} block`}
    >
      {figure}
    </a>
  );
}

export default function ServicesSection() {
  const loopRow = [...SERVICES, ...SERVICES];

  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-24 bg-gradient-to-br from-white to-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-6">
            <span className="text-[#7AA98C] font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full font-semibold text-gray-900 leading-tight">
            Trusted expertise in holistic healing
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Each modality has its own imagery and focus. Open a service to read our Bengaluru care overview, or{' '}
            <Link to="/services" className="font-semibold text-[#5f8b71] hover:underline">
              view all services
            </Link>
            .
          </p>
        </motion.div>

        {/* Horizontal marquee: duplicated row, CSS animation moves strip left so cards appear to flow left→right across the viewport */}
        <div className="relative overflow-hidden py-1" aria-label="Services carousel">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F5F3EF] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F5F3EF] to-transparent sm:w-16" />
          <motion.div
            className="flex w-max gap-5 sm:gap-6 md:gap-7 will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
          >
            {loopRow.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="shrink-0"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
