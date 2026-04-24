import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { whatsappHref } from '../../constants/contact';
import { fadeInUp } from './sectionMotion';

export default function ServicesSection() {
  const services = [
    {
      title: 'Acupuncture',
      image: '/assets/nadi.png',
    },
    {
      title: 'Electro Acupuncture',
      image: '/assets/electro-acupuncture.png',
    },
    {
      title: 'Acupressure',
      image: '/assets/acupressure.png',
    },
    {
      title: 'Varma Therapy',
      image: '/assets/varma-therapy.png',
    },
    {
      title: 'Sujok',
      image: '/assets/sujok.png',
    },
    {
      title: 'Auricular',
      image: '/assets/auricular.png',
    },
    {
      title: 'Scalp Acupuncture',
      image: '/assets/scalp-acupuncture.png',
    },
    {
      title: 'Master Tung',
      image: '/assets/master-tung.png',
    },
    {
      title: 'Cupping',
      image: '/assets/cupping.png',
    },
    {
      title: 'Gua Sha',
      image: '/assets/gua-sha.png',
    },
    {
      title: "Women's Health",
      image: '/assets/womens-health.png',
    },
  ];
  const marqueeServices = [...services, ...services];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="grid lg:grid-cols-2 gap-8 items-end mb-12 sm:mb-16">
          <div>
            <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-6">
              <span className="text-[#7AA98C] font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Trusted Expertise in Holistic Healing
            </h2>
          </div>

          <div className="lg:justify-self-end lg:max-w-xl">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-all hover:shadow-lg text-center font-medium"
            >
              Book a consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-3"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
          >
            {marqueeServices.map((service, index) => (
              <motion.a
                key={`${service.title}-${index}`}
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.28 }}
                className="group relative block w-[180px] sm:w-[190px] md:w-[200px] h-[280px] sm:h-[300px] md:h-[320px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 shrink-0"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[#7AA98C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-medium text-white leading-snug">
                    {service.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
