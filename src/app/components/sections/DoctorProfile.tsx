import { motion } from 'motion/react';
import { GraduationCap, Award, BadgeCheck, Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { fadeInUp } from './sectionMotion';
import StatsSection from './StatsSection';

export default function DoctorProfile() {
  return (
    <section id="doctor" className="pt-20 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-6">
            <span className="text-[#7AA98C] font-medium">Meet Our Expert</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Your Healing Journey, Guided by Excellence
          </h2>
        </motion.div>

        <motion.div {...fadeInUp(0.08)} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#F5F3EF] to-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Doctor Image */}
              <div className="lg:col-span-2 relative">
                <div className="h-full min-h-[400px] lg:min-h-[500px]">
                  <ImageWithFallback
                    src="/profile.svg"
                    alt="A. Soofia Fathima"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#7AA98C]" />
                    <span className="text-sm font-medium text-gray-900">8+ Years</span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  A. Soofia Fathima
                </h3>
                <p className="text-lg text-[#7AA98C] mb-8">Expert Acupuncturist & Holistic Healer</p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#7AA98C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Qualifications</h4>
                      <p className="text-gray-600">D.Acu, M.Acu, PhD (Pursuing)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#7AA98C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Experience</h4>
                      <p className="text-gray-600">8+ Years in Holistic Medicine & Acupuncture</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                      <BadgeCheck className="w-6 h-6 text-[#7AA98C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Membership</h4>
                      <p className="text-gray-600">World Skill Council (WSC)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-[#7AA98C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Philosophy</h4>
                      <p className="text-gray-600">Committed to natural, patient-centered healing through personalized pulse diagnosis and comprehensive care.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    With extensive training and years of hands-on experience, A. Soofia Fathima brings a compassionate, evidence-based approach to acupuncture and holistic wellness. Her dedication to continuous learning ensures you receive the most effective, up-to-date treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <StatsSection />
      </div>
    </section>
  );
}
