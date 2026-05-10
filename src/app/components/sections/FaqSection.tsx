import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';
import { SITE_FAQ } from '../../data/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { fadeInUp } from './sectionMotion';

/**
 * Homepage FAQ block — anchor `id="faqs"` for header/footer links (`/#faqs`).
 */
export default function FaqSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-[#F5F3EF] via-white to-white py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7AA98C]/25 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="mx-auto max-w-3xl text-center mb-12 sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#7AA98C]/10 px-4 py-2">
            <HelpCircle className="h-4 w-4 text-[#7AA98C]" aria-hidden />
            <span className="font-medium text-[#7AA98C]">Questions</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-semibold text-gray-900 lg:text-5xl mb-4 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Straightforward answers about visits, safety, and our Kalyan Nagar clinic. For urgent medical concerns, contact
            emergency services or your physician.
          </p>
        </motion.div>

        <motion.div {...fadeInUp(0.06)} className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-200/80 bg-white p-1 shadow-sm shadow-gray-200/40 sm:p-2">
            <Accordion type="single" collapsible className="w-full px-3 sm:px-5">
              {SITE_FAQ.map((faq, i) => (
                <AccordionItem key={`faq-${i}`} value={`faq-${i}`} className="border-gray-100">
                  <AccordionTrigger className="text-left text-[15px] sm:text-base font-semibold text-gray-900 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed pb-2 text-[15px] sm:text-base">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
