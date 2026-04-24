import { motion } from 'motion/react';
import type { ComponentType } from 'react';
import { Award, HeartPulse, ShieldCheck, Stethoscope, Users } from 'lucide-react';
import { whatsappHref } from '../../constants/contact';
import { fadeInRight, fadeInUp, SECTION_VIEWPORT } from './sectionMotion';

type WhyChooseCard = {
  readonly icon: ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
};

const WHY_CHOOSE_CARDS: readonly WhyChooseCard[] = [
  {
    icon: Stethoscope,
    title: '8+ Years of Experience',
    description:
      "With years of hands-on Ayurvedic and acupuncture practice, we've helped patients recover naturally through trusted, evidence-informed holistic care.",
  },
  {
    icon: Users,
    title: '1000+ Patients Treated',
    description:
      'Families across the region trust our care for chronic pain, lifestyle disorders, stress management, and long-term wellness support.',
  },
  {
    icon: HeartPulse,
    title: '100% Personalized Treatment Plans',
    description:
      'Every treatment is tailored after pulse diagnosis (Nadi), your body constitution, and current health condition for precise and effective healing.',
  },
  {
    icon: ShieldCheck,
    title: 'Natural, Safe, and Root-Cause Focused',
    description:
      'We focus on long-term recovery by addressing the root cause, using natural therapies designed to restore balance without unnecessary dependence.',
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="text-center mb-12">
          <div className="mb-5 inline-block rounded-full bg-[#7AA98C]/10 px-4 py-2">
            <span className="font-medium text-[#7AA98C]">Why Choose Us</span>
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-gray-900 lg:text-5xl">
            Experience the Difference in Natural Healing
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Compassionate, personalized care rooted in Ayurveda to help you heal, recover, and thrive.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {WHY_CHOOSE_CARDS.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={SECTION_VIEWPORT}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-[#F5F3EF] p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7AA98C]/10">
                  <card.icon className="h-6 w-6 text-[#7AA98C]" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">{card.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{card.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            {...fadeInRight(0.12)}
            className="flex h-full flex-col rounded-3xl bg-[#7AA98C] p-8 text-white"
          >
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold leading-tight sm:text-3xl">Holistic Care You Can Trust</h3>
            <p className="text-base leading-relaxed text-white/90">
              From pulse diagnosis to personalized therapies, we provide complete support at every step of your healing journey.
              Our goal is simple: help you feel better naturally and sustain your wellness for life.
            </p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-8 py-4 text-center font-medium text-[#7AA98C] transition-all hover:shadow-lg"
            >
              BOOK APPOINTMENT
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
