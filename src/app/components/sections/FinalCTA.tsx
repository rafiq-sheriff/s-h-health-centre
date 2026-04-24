import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { PHONE_DISPLAY, PHONE_TEL, whatsappHref } from '../../constants/contact';
import { fadeInUp } from './sectionMotion';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#7AA98C]/10 via-[#F5F3EF] to-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBoZWFsdGhjYXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MzU2OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healing Environment"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeInUp()} className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <span className="text-[#7AA98C] font-medium">Begin Your Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Start Your Healing Journey Today
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Take the first step towards natural wellness and experience the transformative power of holistic healing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-all hover:shadow-xl text-base sm:text-lg font-medium flex items-center justify-center gap-3"
            >
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PHONE_TEL}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#7AA98C] border-2 border-[#7AA98C] rounded-full hover:bg-[#7AA98C] hover:text-white transition-all hover:shadow-xl text-base sm:text-lg font-medium text-center"
            >
              Call: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-gray-600">
              Join over 1000+ patients who have trusted us with their health and wellness
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#7AA98C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#7AA98C]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
