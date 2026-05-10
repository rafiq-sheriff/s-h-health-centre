import { useEffect, useState } from 'react';

export type NavSpySection = 'home' | 'about' | 'doctor' | 'services' | 'faqs' | 'contact';

const HEADER_OFFSET_PX = 112;

/**
 * Tracks which main section is aligned with the header while scrolling the homepage or `/about`.
 */
export function useNavScrollSpy(pathname: string, hash: string): NavSpySection {
  const [active, setActive] = useState<NavSpySection>(() =>
    pathname === '/about' ? 'about' : 'home',
  );

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/about') {
      return;
    }

    const sectionIds =
      pathname === '/'
        ? (['about', 'doctor', 'services', 'faqs', 'contact'] as const)
        : (['about', 'doctor'] as const);

    const pick = () => {
      const line = window.scrollY + HEADER_OFFSET_PX;
      let next: NavSpySection = pathname === '/' ? 'home' : 'about';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) {
          next = id as NavSpySection;
        }
      }
      setActive(next);
    };

    pick();
    const onScroll = () => pick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const t = window.setTimeout(pick, 50);
    const raf = requestAnimationFrame(() => requestAnimationFrame(pick));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [pathname, hash]);

  return active;
}
