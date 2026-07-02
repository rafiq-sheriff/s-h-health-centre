import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { fadeInUp } from './sectionMotion';
import { TESTIMONIALS } from '../../data/testimonials';

function FiveStarRating() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="w-4 h-4 fill-[#F6C453] text-[#F6C453]" aria-hidden />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const marqueeTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-white to-[#F5F3EF]"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/MedicalClinic"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="max-w-3xl mx-auto mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-5">
            <span className="text-[#7AA98C] font-medium">Testimonials</span>
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-3">
            Hear What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Every review reflects trusted diagnoses, personalized treatments, and meaningful recovery outcomes at SH Health Centre, Bangalore.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm p-4 sm:p-5 lg:p-7 shadow-sm">
          <div className="overflow-hidden" aria-label="Patient testimonials carousel" aria-live="off">
            <motion.div
              className="flex w-max gap-3"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
            >
              {marqueeTestimonials.map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.name}-${index}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="w-[86vw] sm:w-[300px] md:w-[320px] rounded-2xl border border-[#7AA98C]/20 bg-gradient-to-br from-white to-[#F5F3EF] p-4 md:p-5 shadow-sm min-h-[280px] shrink-0"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <p
                    className="text-sm md:text-base font-semibold text-gray-900"
                    itemScope
                    itemType="https://schema.org/Person"
                    itemProp="author"
                  >
                    <span itemProp="name">{testimonial.name}</span>
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.designation}</p>
                  <div className="mt-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    <FiveStarRating />
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200" />
                  <p
                    className="text-sm md:text-[13px] text-gray-700 leading-relaxed mt-3"
                    itemProp="reviewBody"
                  >
                    {testimonial.content}
                  </p>
                  <meta itemProp="datePublished" content={testimonial.datePublished} />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

