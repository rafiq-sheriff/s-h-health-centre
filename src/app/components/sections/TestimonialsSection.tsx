import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { fadeInUp } from './sectionMotion';

type Testimonial = {
  name: string;
  content: string;
  designation: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Mushii I',
    designation: 'Verified Patient',
    content:
      'Thanks to S H Health Centre, I was suffering from eye inflammation and got relieved. Thank you so much.',
  },
  {
    name: 'Abdul Razak',
    designation: 'Verified Patient',
    content:
      'I was suffering from hand pain for a very long time. After visiting S H Health Centre, I got relieved from pain within 2 treatment sessions.',
  },
  {
    name: 'Violet Misquith',
    designation: 'Verified Patient',
    content:
      'I had a very good experience at S H Health Centre. I was suffering from leg pain and headaches, but after taking treatment from A. Soofia Fathima, I feel much better. I would definitely recommend everyone to try acupressure and cupping therapy for better health and well-being. A. Soofia Fathima is an excellent and caring doctor who understands her patients very well.',
  },
  {
    name: 'Mohamed Hussain',
    designation: 'Verified Patient',
    content:
      'Traditional pulse diagnosis followed by acupuncture and acupressure treatment made a meaningful difference.',
  },
  {
    name: 'Rafiq Sheriff S',
    designation: 'Verified Patient',
    content:
      'My mother had been suffering from severe allergies for over 10 years and was on multiple medications that caused significant side effects. Many allopathy doctors informed us that her condition could not be fully treated. However, after visiting S H Health Centre and consulting A. Soofia Fathima, her condition improved remarkably. Today, she is completely free from allergy medications and leading a healthy life. We are truly grateful for the care and effective treatment provided.',
  },
];

function FiveStarRating() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="w-4 h-4 fill-[#F6C453] text-[#F6C453]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp()} className="max-w-3xl mx-auto mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-[#7AA98C]/10 rounded-full mb-5">
            <span className="text-[#7AA98C] font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-3">
            Hear What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Every review reflects trusted diagnoses, personalized treatments, and meaningful recovery outcomes.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm p-4 sm:p-5 lg:p-7 shadow-sm">
          <div className="overflow-hidden">
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
                >
                  <p className="text-sm md:text-base font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.designation}</p>
                  <div className="mt-3">
                    <FiveStarRating />
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200" />
                  <p className="text-sm md:text-[13px] text-gray-700 leading-relaxed mt-3">{testimonial.content}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
