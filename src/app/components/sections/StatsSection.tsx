import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '../ui/utils';
import { SECTION_VIEWPORT } from './sectionMotion';

const NUMBER_FORMATTER = new Intl.NumberFormat('en-IN');

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

/** Animates from 0 to `end` over `duration` ms with easing. */
function CountUp({ end, progress }: { end: number; progress: number }) {
  const [count, setCount] = useState(0);
  const previousProgressRef = useRef(-1);

  useEffect(() => {
    if (progress === previousProgressRef.current) {
      return;
    }

    previousProgressRef.current = progress;
    setCount(Math.floor(easeOutCubic(progress) * end));
  }, [end, progress]);

  return <span>{NUMBER_FORMATTER.format(count)}</span>;
}

function useSharedCounterProgress({
  start,
  duration = 1800,
}: {
  start: boolean;
  duration?: number;
}) {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!start) {
      return;
    }

    if (shouldReduceMotion) {
      setProgress(1);
      return undefined;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setProgress(progress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, shouldReduceMotion, start]);

  return progress;
}

type StatItem = {
  number: number;
  suffix: string;
  label: string;
  description: string;
};

const STATS: readonly StatItem[] = [
  {
    number: 8,
    suffix: '+',
    label: 'Years Experience',
    description: 'Delivering reliable holistic care',
  },
  {
    number: 1000,
    suffix: '+',
    label: 'Patients Treated',
    description: 'Trusted for natural healing',
  },
  {
    number: 15,
    suffix: '+',
    label: 'Treatment Techniques',
    description: 'Specialized therapies',
  },
  {
    number: 100,
    suffix: '%',
    label: 'Personalized Approach',
    description: 'Based on pulse diagnosis',
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const sharedProgress = useSharedCounterProgress({ start: isSectionInView });

  return (
    <section ref={sectionRef} className="bg-white ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={SECTION_VIEWPORT}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className={cn(
                'relative flex flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-6 lg:py-14',
                'border-b border-neutral-200 last:border-b-0',
                'sm:border-b-0',
                index < 2 && 'sm:border-b sm:border-neutral-200',
                index % 2 === 1 && 'sm:border-l sm:border-neutral-200',
                'lg:border-b-0 lg:border-l-0',
                index > 0 &&
                  "lg:before:absolute lg:before:left-0 lg:before:top-[22%] lg:before:bottom-[22%] lg:before:w-px lg:before:bg-neutral-200 lg:before:content-['']",
              )}
            >
              <div className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem] lg:leading-none">
                <CountUp end={stat.number} progress={sharedProgress} />
                {stat.suffix}
              </div>
              <p className="mt-4 text-sm font-semibold leading-snug text-neutral-800 sm:text-[0.9375rem]">
                {stat.label}
              </p>
              <p className="mt-1 max-w-[16rem] text-xs leading-relaxed text-neutral-500 sm:text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
