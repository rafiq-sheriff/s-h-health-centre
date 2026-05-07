import { MapPin, Phone, Mail, Clock4, ArrowUpRight } from 'lucide-react';
import {
  APPOINTMENT_CALL_WINDOW,
  CLINIC_ADDRESS,
  EMAIL_ADDRESS,
  EMAIL_MAILTO,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '../../constants/contact';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 py-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="mb-5 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg shadow-black/15">
              <img src="/logo.svg" alt="S H Health Centre logo" className="h-12 w-auto" />
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#5f866e]">Holistic Care</p>
                <p className="text-xl font-semibold text-gray-900">S H Health Centre</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
              Experience trusted acupuncture and natural healing support in a calm, patient-centered environment
              designed for long-term wellness.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7AA98C]/60 bg-[#7AA98C]/10 px-4 py-2 text-sm font-medium text-[#9bc7ac] transition hover:border-[#7AA98C] hover:bg-[#7AA98C]/20 hover:text-white"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-gray-400 transition-colors hover:text-[#9bc7ac]">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 transition-colors hover:text-[#9bc7ac]">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 transition-colors hover:text-[#9bc7ac]">Services</a>
              </li>
              <li>
                <a href="#doctor" className="text-gray-400 transition-colors hover:text-[#9bc7ac]">Our Doctor</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 transition-colors hover:text-[#9bc7ac]">Contact</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">Visit & Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#8ab79b]" />
                <span className="text-gray-300">{CLINIC_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#8ab79b]" />
                <a href={PHONE_TEL} className="text-gray-300 transition-colors hover:text-[#9bc7ac]">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#8ab79b]" />
                <a href={EMAIL_MAILTO} className="text-gray-300 transition-colors hover:text-[#9bc7ac]">
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <Clock4 className="h-5 w-5 flex-shrink-0 text-[#8ab79b]" />
                <span className="text-gray-300">{APPOINTMENT_CALL_WINDOW}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-gray-400 sm:flex-row sm:text-sm">
          <p>&copy; 2026 S H Health Centre. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-[#9bc7ac]">Privacy Policy</a>
            <span aria-hidden className="text-gray-700">|</span>
            <a href="#" className="transition-colors hover:text-[#9bc7ac]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
