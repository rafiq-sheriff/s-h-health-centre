import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, Phone, X } from 'lucide-react';
import { PHONE_TEL } from '../../constants/contact';
import { isNavItemActive } from './navActive';
import { useNavScrollSpy } from './useNavScrollSpy';
import type { NavSpySection } from './useNavScrollSpy';

const NAV_ITEMS: { to: string; label: string; spy: NavSpySection }[] = [
  { to: '/', label: 'Home', spy: 'home' },
  { to: '/#about', label: 'About', spy: 'about' },
  { to: '/#doctor', label: 'Our Doctor', spy: 'doctor' },
  { to: '/#services', label: 'Services', spy: 'services' },
  { to: '/#faqs', label: 'FAQs', spy: 'faqs' },
  { to: '/#contact', label: 'Contact', spy: 'contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeSpy = useNavScrollSpy(location.pathname, location.hash);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinkClass = (isActive: boolean) =>
    `transition-colors ${
      isActive ? 'text-[#7AA98C] font-semibold' : 'text-gray-600 hover:text-[#7AA98C]'
    }`;

  const mobileNavClass = (isActive: boolean) =>
    `min-h-11 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-[#7AA98C]/15 text-[#5f8b71]'
        : 'text-gray-700 hover:bg-[#7AA98C]/10 hover:text-[#6a9879]'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" aria-label="S H Health Centre Home" className="inline-flex items-center gap-2 sm:gap-3">
              <img src="/logo.svg" alt="S H Health Centre" className="h-10 w-auto sm:h-12" />
              <span className="hidden min-[380px]:inline text-sm font-semibold text-gray-900 sm:text-xl">
                S H Health Centre
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active = isNavItemActive(item, location.pathname, location.hash, activeSpy);
              return (
                <Link
                  key={item.spy}
                  to={item.to}
                  className={navLinkClass(active)}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={PHONE_TEL}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[#7AA98C] text-white rounded-full hover:bg-[#6a9879] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-all duration-200 ${
            isMobileMenuOpen ? 'max-h-[28rem] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
            {NAV_ITEMS.map((item) => {
              const active = isNavItemActive(item, location.pathname, location.hash, activeSpy);
              return (
                <Link
                  key={item.spy}
                  to={item.to}
                  className={mobileNavClass(active)}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7AA98C] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#6a9879] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
