import { motion } from 'motion/react';
import { Activity, Fingerprint, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { fadeInLeft, fadeInRight, fadeInUp } from './sectionMotion';

export default function UniqueApproach() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F3EF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-6">
            <span className="text-[#7AA98C] font-medium">Our Unique Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Pulse Diagnosis (Nadi Method)
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ancient wisdom meets precise diagnosis for truly personalized healing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div {...fadeInLeft()}>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Personalized Treatment Based on Your Unique Energy
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Nadi method is an ancient diagnostic technique that reads the subtle pulses in your body to understand imbalances at their root. This allows us to create treatments that are 100% personalized to your specific needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-[#7AA98C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Assessment</h4>
                    <p className="text-gray-600">We evaluate your entire system, not just symptoms, to identify underlying causes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                    <Fingerprint className="w-6 h-6 text-[#7AA98C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Truly Individual Care</h4>
                    <p className="text-gray-600">Every treatment plan is uniquely designed based on your pulse diagnosis results.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#7AA98C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Track Your Progress</h4>
                    <p className="text-gray-600">Regular pulse assessments help us monitor and adjust your treatment for optimal results.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div {...fadeInRight(0.1)} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/assets/nadi.png"
                alt="Close-up of a practitioner performing Nadi Pariksha pulse diagnosis on a patient's wrist."
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#7AA98C]/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
