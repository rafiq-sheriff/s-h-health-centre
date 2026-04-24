import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import {
  APPOINTMENT_CALL_WINDOW,
  CLINIC_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappHref,
} from '../../constants/contact';
import { fadeInUp } from './sectionMotion';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppSection() {
  const wa = whatsappHref();

  return (
    <section id="whatsapp" className="py-20 bg-gradient-to-br from-[#7AA98C]/5 to-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp()} className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 sm:p-8 lg:p-12 md:border-r border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#7AA98C]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#7AA98C]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Hours</h3>
                </div>

                <div className="space-y-4">
                  {CLINIC_HOURS.map((timing) => (
                    <div
                      key={timing.day}
                      className="flex justify-between gap-4 py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="font-medium text-gray-900">{timing.day}</span>
                      <span className="text-right text-gray-600">
                        {timing.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#7AA98C]/5 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Appointment:</span>{' '}
                    {APPOINTMENT_CALL_WINDOW}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-[#25D366]/8 to-transparent flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center mb-6 text-[#128C7E]">
                  <WhatsAppIcon className="w-7 h-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  Chat with us on WhatsApp
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Start a conversation to ask about treatments, share symptoms, or arrange a visit.
                  We will get back to you as soon as we can.
                </p>

                <div className="space-y-3">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-all hover:shadow-lg text-center font-medium"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    Open WhatsApp
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="block w-full px-6 sm:px-8 py-4 bg-white text-[#7AA98C] border-2 border-[#7AA98C] rounded-full hover:bg-[#7AA98C] hover:text-white transition-all text-center font-medium"
                  >
                    Call: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
