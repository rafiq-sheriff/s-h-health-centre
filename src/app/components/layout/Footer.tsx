import { Link } from 'react-router';
import {
  MapPin,
  Phone,
  Mail,
  Clock4,
  ArrowUpRight,
  ExternalLink,
  Instagram,
  Facebook,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import {
  APPOINTMENT_CALL_WINDOW,
  CLINIC_ADDRESS,
  EMAIL_ADDRESS,
  EMAIL_MAILTO,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappHref,
} from '../../constants/contact';
import { INSTAGRAM_URL, FACEBOOK_URL } from '../../constants/site';

const TREATMENT_LINKS = [
  { label: 'Acupuncture', to: '/acupuncture-treatment-bengaluru' },
  { label: 'Acupressure', to: '/acupressure-treatment-bengaluru' },
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
    <footer
      className="bg-gradient-to-b from-[#132219] via-[#0E1A13] to-[#0A130E] text-white relative overflow-hidden"
      aria-label="Site footer"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7AA98C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7AA98C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-footer: Modern Consultation Highlight Card */}
        <div className="border-b border-white/10 pt-16 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-2xl bg-white/[0.04] p-6 sm:p-8 border border-white/10 backdrop-blur-sm">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9bc7ac] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#7AA98C] animate-pulse" />
                Natural Pain Relief &amp; Wellness
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Start Your Healing Journey with Our Experts
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-2 leading-relaxed">
                Consult with expert practitioner A. Soofia Fathima for personalized acupuncture, acupressure &amp; Varma therapy at Kalyan Nagar, Bengaluru.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a] hover:shadow-lg transition-all"
                aria-label="Book appointment on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 hover:border-white/40 transition-all"
                aria-label={`Call SH Health Centre at ${PHONE_DISPLAY}`}
              >
                <Phone className="w-4 h-4 text-[#9bc7ac]" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Columns Grid - Perfectly Balanced 4-Column Layout */}
        <div className="grid gap-10 py-12 lg:grid-cols-12 lg:gap-8 border-b border-white/10">
          
          {/* Column 1: Brand & Credibility (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <img
                  src="/logo.svg"
                  alt="S H Health Centre logo"
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#9bc7ac] transition-colors">
                  S H Health Centre
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#9bc7ac]">
                  Acupuncture &amp; Holistic Care
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
              Bangalore's trusted holistic healing clinic since 2016. Specializing in evidence-informed acupuncture, traditional acupressure, and authentic Varma therapy.
            </p>

            {/* Credibility highlights */}
            <div className="space-y-2 text-xs text-gray-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7AA98C] shrink-0" />
                <span>8+ Years Clinical Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7AA98C] shrink-0" />
                <span>Member, World Skill Council (WSC)</span>
              </div>
            </div>

            {/* Follow & Connect */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
                Follow &amp; Connect
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:border-transparent transition-all"
                  aria-label="SH Health Centre on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all"
                  aria-label="SH Health Centre on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#25D366] hover:border-transparent transition-all"
                  aria-label="SH Health Centre on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9bc7ac]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Our Doctor', to: '/#doctor' },
                { label: 'Services', to: '/services' },
                { label: 'Patient FAQs', to: '/#faqs' },
                { label: 'Health Blog', to: '/blog' },
                { label: 'Contact Us', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-300 hover:text-[#9bc7ac] transition-colors inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments & Conditions (4 cols with 2 balanced sub-columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {/* Treatments Sub-column */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9bc7ac]">
                Treatments
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {TREATMENT_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-gray-300 hover:text-[#9bc7ac] transition-colors inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions Sub-column */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9bc7ac]">
                Conditions
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {CONDITION_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-gray-300 hover:text-[#9bc7ac] transition-colors inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Clinic Info & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9bc7ac]">
              Clinic &amp; Hours
            </h3>
            <address className="not-italic">
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9bc7ac]" aria-hidden />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#9bc7ac] transition-colors text-xs leading-relaxed inline-flex items-start gap-1"
                    aria-label="View SH Health Centre on Google Maps"
                  >
                    <span>{CLINIC_ADDRESS}</span>
                    <ExternalLink className="inline h-3 w-3 shrink-0 opacity-60 mt-0.5" aria-hidden />
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#9bc7ac]" aria-hidden />
                  <a
                    href={PHONE_TEL}
                    className="text-gray-300 hover:text-[#9bc7ac] transition-colors text-xs font-medium"
                    aria-label={`Call ${PHONE_DISPLAY}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#9bc7ac]" aria-hidden />
                  <a
                    href={EMAIL_MAILTO}
                    className="text-gray-300 hover:text-[#9bc7ac] transition-colors text-xs break-all"
                    aria-label={`Email ${EMAIL_ADDRESS}`}
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Clock4 className="mt-0.5 h-4 w-4 shrink-0 text-[#9bc7ac]" aria-hidden />
                  <div className="text-xs text-gray-300 space-y-1">
                    <p className="font-medium text-white">Mon–Fri: 10AM–1PM, 4PM–8PM</p>
                    <p className="text-gray-400">Sat: 10AM–1PM · Sun: Closed</p>
                    <p className="text-[#9bc7ac] text-[11px] font-medium pt-0.5">{APPOINTMENT_CALL_WINDOW}</p>
                  </div>
                </li>
              </ul>
            </address>
          </div>

        </div>

        {/* Areas Served Strip */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-semibold uppercase tracking-wider text-gray-300">
              Areas Served:
            </span>
            <span className="text-gray-400">
              {AREAS_SERVED.join(' · ')} · Bengaluru Urban
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-[#9bc7ac] hover:text-white transition-colors shrink-0 font-medium"
          >
            <span>Get Directions</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} S H Health Centre. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-[#9bc7ac] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden className="text-gray-600">·</span>
            <Link to="/terms-of-service" className="hover:text-[#9bc7ac] transition-colors">
              Terms of Service
            </Link>
            <span aria-hidden className="text-gray-600">·</span>
            <Link to="/medical-disclaimer" className="hover:text-[#9bc7ac] transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
