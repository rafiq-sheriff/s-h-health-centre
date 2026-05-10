import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import {
  APPOINTMENT_CALL_WINDOW,
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  EMAIL_ADDRESS,
  EMAIL_MAILTO,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '../../constants/contact';
import { fadeInLeft, fadeInRight, fadeInUp } from './sectionMotion';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-20  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-6">
            <span className="text-[#7AA98C] font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Visit Us Today
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and help you start your healing journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div {...fadeInLeft()} className="space-y-6">
            <div className="bg-gradient-to-br from-[#F5F3EF] to-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#7AA98C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {CLINIC_ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5F3EF] to-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#7AA98C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href={PHONE_TEL} className="text-gray-600 hover:text-[#7AA98C] transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5F3EF] to-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#7AA98C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href={EMAIL_MAILTO} className="text-gray-600 hover:text-[#7AA98C] transition-colors">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5F3EF] to-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#7AA98C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    {CLINIC_HOURS.map((hours) => (
                      <p key={hours.day}>
                        {hours.day}: {hours.lines.join(' / ')}
                      </p>
                    ))}
                    <p>Appointment: {APPOINTMENT_CALL_WINDOW}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div {...fadeInRight(0.1)} className="relative">
            <div className="rounded-3xl shadow-xl overflow-hidden border border-[#7AA98C]/15 bg-white h-full min-h-[320px] sm:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530.5705475157027!2d77.64034873907454!3d13.021461088133607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17038855f2af%3A0x6f759d68f02304c2!2sSH%20Health%20Centre!5e0!3m2!1sen!2sin!4v1777036579270!5m2!1sen!2sin"
                title="S H Health Centre Map"
                className="w-full h-full min-h-[320px] sm:min-h-[500px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
