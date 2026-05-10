import { ALL_SERVICE_PATHS } from '../../data/servicePageContent';
import type { NavSpySection } from './useNavScrollSpy';

type NavItem = { spy: NavSpySection };

/**
 * Whether a nav item should show the active style for the current route + scroll position.
 */
export function isNavItemActive(
  item: NavItem,
  pathname: string,
  hash: string,
  activeSpy: NavSpySection,
): boolean {
  switch (item.spy) {
    case 'home':
      return pathname === '/' && activeSpy === 'home';
    case 'about':
      return (pathname === '/' && activeSpy === 'about') || pathname === '/about';
    case 'doctor':
      return (
        ((pathname === '/' || pathname === '/about') && activeSpy === 'doctor') ||
        (pathname === '/about' && hash === '#doctor')
      );
    case 'services':
      return (
        (pathname === '/' && activeSpy === 'services') ||
        pathname === '/services' ||
        ALL_SERVICE_PATHS.includes(pathname)
      );
    case 'faqs':
      return pathname === '/' && activeSpy === 'faqs';
    case 'contact':
      return (pathname === '/' && activeSpy === 'contact') || pathname === '/contact';
    default:
      return false;
  }
}
