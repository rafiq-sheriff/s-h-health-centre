import { Phone } from 'lucide-react';
import { PHONE_TEL } from '../../constants/contact';

export default function Header() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#doctor', label: 'Our Doctor' },
    { href: '#contact', label: 'Contact' },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <a href="#home" aria-label="S.H. Health Centre Home" className="inline-flex items-center gap-3">
              <img src="/logo.svg" alt="S.H. Health Centre" className="h-10 w-auto sm:h-12" />
              <span className="text-base font-semibold text-gray-900 sm:text-xl">S.H. Health Centre</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-[#7AA98C] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a 
            href={PHONE_TEL} 
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[#7AA98C] text-white rounded-full hover:bg-[#6a9879] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>

        <nav className="md:hidden pb-3">
          <div className="flex gap-3 overflow-x-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full border border-[#7AA98C]/20 px-3 py-1.5 text-sm text-gray-700 hover:bg-[#7AA98C]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
