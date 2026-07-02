import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock4, ArrowUpRight, ExternalLink } from 'lucide-react';
import {
  APPOINTMENT_CALL_WINDOW,
  CLINIC_ADDRESS,
  EMAIL_ADDRESS,
  EMAIL_MAILTO,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappHref,
} from '../../constants/contact';
import { CLINIC_GEO, SOCIAL_PROFILES } from '../../constants/site';

const TREATMENT_LINKS = [
  { label: 'Acupuncture', to: '/acupuncture-treatment-bengaluru' },
  { label: 'Acupressure', to: '/acupressure-treatment-bengaluru' },
  { label: 'Siddha Treatment', to: '/siddha-treatment-bengaluru' },
  { label: 'Varma Therapy', to: '/varma-treatment-bengaluru' },
  { label: 'Pain Management', to: '/pain-management-bengaluru' },
  { label: 'Migraine Support', to: '/migraine-treatment-bengaluru' },
  { label: 'Arthritis Care', to: '/arthritis-treatment-bengaluru' },
] as const;

const CONDITION_LINKS = [
  { label: 'Back Pain', to: '/back-pain-treatment-bengaluru' },
  { label: 'Neck Pain', to: '/neck-pain-treatment-bengaluru' },
  { label: 'Sciatica', to: '/sciatica-treatment-bengaluru' },
  { label: 'Knee Pain', to: '/knee-pain-treatment-bengaluru' },
  { label: 'Frozen Shoulder', to: '/frozen-shoulder-treatment-bengaluru' },
  { label: 'Slip Disc', to: '/slip-disc-treatment-bengaluru' },
  { label: 'PCOD/PCOS', to: '/pcod-treatment-bengaluru' },
  { label: 'Insomnia', to: '/insomnia-treatment-bengaluru' },
] as const;

const AREAS_SERVED = [
  'Kalyan Nagar',
  'HRBR Layout',
  'Banaswadi',
  'Hennur',
  'Hebbal',
  'Horamavu',
  'Lingarajapuram',
] as const;

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-8 border-b border-white/10 py-12 md:grid-cols-12 md:gap-6">

          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="mb-5 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg shadow-black/15">
              <img src="/logo.svg" alt="S H Health Centre logo — acupuncture clinic Bangalore" className="h-12 w-auto" width={48} height={48} loading="lazy" />
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#5f866e]">Holistic Care</p>
                <p className="text-xl font-semibold text-gray-900">S H Health Centre</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
              Best acupuncture, acupressure, Siddha & Varma therapy clinic in Kalyan Nagar, Bengaluru — personalised holistic healing since 2016.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7AA98C]/60 bg-[#7AA98C]/10 px-4 py-2 text-sm font-medium text-[#9bc7ac] transition hover:border-[#7AA98C] hover:bg-[#7AA98C]/20 hover:text-white"
              aria-label="Book a consultation at SH Health Centre"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>

            {/* Social links */}
            {/* <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL_PROFILES[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:border-white/40 hover:text-white"
                aria-label="SH Health Centre on Facebook"
              >
                <span aria-hidden>📘</span> Facebook
              </a>
              <a
                href={SOCIAL_PROFILES[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:border-white/40 hover:text-white"
                aria-label="SH Health Centre on Instagram"
              >
                <span aria-hidden>📷</span> Instagram
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'FAQs', to: '/#faqs' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 transition-colors hover:text-[#9bc7ac]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treatments */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">Our Treatments</h3>
            <ul className="space-y-2.5 text-sm">
              {TREATMENT_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 transition-colors hover:text-[#9bc7ac]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">Conditions</h3>
            <ul className="space-y-2.5 text-sm">
              {CONDITION_LINKS.slice(0, 4).map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 transition-colors hover:text-[#9bc7ac]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">Visit &amp; Contact</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#8ab79b]" aria-hidden />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#9bc7ac] transition-colors"
                    aria-label="View SH Health Centre on Google Maps"
                  >
                    {CLINIC_ADDRESS}
                    <ExternalLink className="inline ml-1 h-3 w-3 opacity-60" aria-hidden />
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#8ab79b]" aria-hidden />
                  <a href={PHONE_TEL} className="text-gray-300 transition-colors hover:text-[#9bc7ac]" aria-label={`Call SH Health Centre: ${PHONE_DISPLAY}`}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-[#8ab79b]" aria-hidden />
                  <a href={EMAIL_MAILTO} className="text-gray-300 transition-colors hover:text-[#9bc7ac] break-all" aria-label={`Email SH Health Centre: ${EMAIL_ADDRESS}`}>
                    {EMAIL_ADDRESS}
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <Clock4 className="h-5 w-5 flex-shrink-0 text-[#8ab79b]" aria-hidden />
                  <span className="text-gray-300">{APPOINTMENT_CALL_WINDOW}</span>
                </li>
              </ul>
            </address>

            {/* WhatsApp CTA */}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors"
              aria-label="Book appointment on WhatsApp"
            >
              <span>Book on WhatsApp</span>
            </a>

            {/* Areas Served */}
            <div className="mt-5">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Areas We Serve</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {AREAS_SERVED.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-gray-400 sm:flex-row sm:text-sm">
          <p>&copy; {new Date().getFullYear()} S H Health Centre. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="transition-colors hover:text-[#9bc7ac]">
              Privacy Policy
            </Link>
            <span aria-hidden className="text-gray-700 hidden sm:inline">|</span>
            <Link to="/terms-of-service" className="transition-colors hover:text-[#9bc7ac]">
              Terms of Service
            </Link>
            <span aria-hidden className="text-gray-700 hidden sm:inline">|</span>
            <Link to="/medical-disclaimer" className="transition-colors hover:text-[#9bc7ac]">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
