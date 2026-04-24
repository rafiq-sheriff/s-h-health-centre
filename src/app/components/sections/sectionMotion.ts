import type { Transition } from 'motion/react';

export const SECTION_VIEWPORT = { once: true, margin: '-90px' } as const;

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function fadeInUp(delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: SECTION_VIEWPORT,
    transition: {
      duration: 0.7,
      delay,
      ease: SMOOTH_EASE,
    } satisfies Transition,
  } as const;
}

export function fadeInLeft(delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, x: -distance },
    whileInView: { opacity: 1, x: 0 },
    viewport: SECTION_VIEWPORT,
    transition: {
      duration: 0.7,
      delay,
      ease: SMOOTH_EASE,
    } satisfies Transition,
  } as const;
}

export function fadeInRight(delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, x: distance },
    whileInView: { opacity: 1, x: 0 },
    viewport: SECTION_VIEWPORT,
    transition: {
      duration: 0.7,
      delay,
      ease: SMOOTH_EASE,
    } satisfies Transition,
  } as const;
}
