import { Calendar, Award, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { PHONE_TEL, whatsappHref } from '../../constants/contact';
import { fadeInLeft, fadeInRight } from './sectionMotion';

export default function HeroSection() {
  const heroImages = [
    { src: '/assets/acupuncture.png', alt: 'Acupuncture therapy session' },
    { src: '/assets/hero.png', alt: 'Gua Sha therapy treatment' },
    { src: '/assets/master-tung.png', alt: 'Master Tung acupuncture method' },
    { src: '/assets/electro-acupuncture.png', alt: 'Electro Acupuncture therapy treatment' },
  ];

  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 bg-gradient-to-br from-white to-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={fadeInLeft().initial}
            animate={fadeInLeft().whileInView}
            transition={fadeInLeft().transition}
          >
            <h1 className="text-[clamp(1.75rem,6vw,2.90rem)] font-semibold text-gray-900 mb-5 sm:mb-6 leading-[1.15]">
              Holistic Healing in Bengaluru - Acupuncture, Acupressure &amp; Siddha
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-7 sm:mb-8 leading-relaxed">
              Expert-led acupuncture, acupressure, and natural therapies at our Kalyan Nagar clinic—personalized plans for
              pain support and wellness.
            </p>

            {/* Highlight Points */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.45 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#7AA98C]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#7AA98C]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">8+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.45 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#7AA98C]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#7AA98C]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Holistic</p>
                  <p className="text-sm text-gray-600">Treatments</p>
                </div>

              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#7AA98C]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#7AA98C]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Personalized</p>
                  <p className="text-sm text-gray-600">Diagnosis</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-all hover:shadow-lg text-center font-medium"
              >
                Chat on WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#7AA98C] border-2 border-[#7AA98C] rounded-full hover:bg-[#7AA98C] hover:text-white transition-all text-center font-medium"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={fadeInRight(0.2).initial}
            animate={fadeInRight(0.2).whileInView}
            transition={fadeInRight(0.2).transition}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 p-2 rounded-2xl">
              {heroImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className={`overflow-hidden aspect-square ${
                    index === 0
                      ? 'rounded-tl-[10px]'
                      : index === 1
                        ? 'rounded-tr-[120px] sm:rounded-tr-[200px]'
                        : index === 2
                          ? 'rounded-bl-[120px] sm:rounded-bl-[200px]'
                          : index === 3
                            ? 'rounded-br-[10px]'
                            : 'rounded-none'
                  }`}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover "
                  />
                </motion.div>
              ))}
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#7AA98C]/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
