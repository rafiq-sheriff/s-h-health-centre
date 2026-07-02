/**
 * Shared testimonials data — used by TestimonialsSection UI and ReviewJsonLd schema.
 * Ratings are 5-star Google review data.
 */
export type Testimonial = {
  name: string;
  content: string;
  designation: string;
  /** Numeric rating (1–5) */
  rating: number;
  /** ISO 8601 date string for schema */
  datePublished: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mushii I',
    designation: 'Verified Patient',
    rating: 5,
    datePublished: '2025-09-01',
    content:
      'Thanks to S H Health Centre, I was suffering from eye inflammation and got relieved. Thank you so much.',
  },
  {
    name: 'Abdul Razak',
    designation: 'Verified Patient',
    rating: 5,
    datePublished: '2025-10-15',
    content:
      'I was suffering from hand pain for a very long time. After visiting S H Health Centre, I got relieved from pain within 2 treatment sessions.',
  },
  {
    name: 'Violet Misquith',
    designation: 'Verified Patient',
    rating: 5,
    datePublished: '2025-11-20',
    content:
      'I had a very good experience at S H Health Centre. I was suffering from leg pain and headaches, but after taking treatment from A. Soofia Fathima, I feel much better. I would definitely recommend everyone to try acupressure and cupping therapy for better health and well-being. A. Soofia Fathima is an excellent and caring doctor who understands her patients very well.',
  },
  {
    name: 'Mohamed Hussain',
    designation: 'Verified Patient',
    rating: 5,
    datePublished: '2025-12-05',
    content:
      'Traditional pulse diagnosis followed by acupuncture and acupressure treatment made a meaningful difference.',
  },
  {
    name: 'Rafiq Sheriff S',
    designation: 'Verified Patient',
    rating: 5,
    datePublished: '2026-01-10',
    content:
      'My mother had been suffering from severe allergies for over 10 years and was on multiple medications that caused significant side effects. Many allopathy doctors informed us that her condition could not be fully treated. However, after visiting S H Health Centre and consulting A. Soofia Fathima, her condition improved remarkably. Today, she is completely free from allergy medications and leading a healthy life. We are truly grateful for the care and effective treatment provided.',
  },
  {
    name: 'Mansoor Khan',
    designation: 'Verified Patient',
    rating: 5,
    datePublished: '2026-02-18',
    content:
      'An outstanding experience with Dr. Soofia Fathima. What stood out to me most was their ability to simplify complex medical information and lay out all of my treatment options clearly. I never felt pressured, and they patiently answered every single one of my questions. I highly recommend this practice to anyone looking for a caring and skilled doctor.',
  },
];

/** Aggregate rating computed from TESTIMONIALS */
export const AGGREGATE_RATING = {
  ratingValue: '5.0',
  reviewCount: String(TESTIMONIALS.length),
  bestRating: '5',
  worstRating: '1',
} as const;
