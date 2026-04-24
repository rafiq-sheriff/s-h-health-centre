import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { fadeInLeft, fadeInRight, fadeInUp } from './sectionMotion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div {...fadeInLeft()} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/assets/about.png"
                alt="Holistic Healing"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#7AA98C]/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div {...fadeInRight(0.1)}>
            <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-6">
              <span className="text-[#7AA98C] font-medium">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Holistic Healing Through Natural Medicine
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At S.H. Health Centre, we believe in the power of natural healing. Our approach combines ancient wisdom with modern understanding to provide comprehensive care for your body, mind, and spirit.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in traditional acupuncture and complementary therapies that work with your body's natural healing mechanisms. Each treatment is carefully tailored to your unique needs, ensuring personalized care that addresses the root cause, not just the symptoms.
            </p>

            <motion.div {...fadeInUp(0.2)} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#7AA98C] mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Evidence-Based Practice</h4>
                  <p className="text-gray-600">Combining traditional techniques with modern research for optimal results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#7AA98C] mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Patient-Centered Care</h4>
                  <p className="text-gray-600">Your health journey is unique, and so is our treatment approach.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#7AA98C] mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Wellness</h4>
                  <p className="text-gray-600">Addressing physical, emotional, and energetic aspects of health.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
