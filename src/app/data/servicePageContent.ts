export type ServiceSection = {
  h2: string;
  paragraphs: string[];
};

export type ServicePageDef = {
  path: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
};

export const SERVICE_PAGES: ServicePageDef[] = [
  {
    path: '/acupuncture-treatment-bengaluru',
    seoTitle: 'Acupuncture Treatment in Bengaluru | S H Health Centre',
    metaDescription:
      'Experienced acupuncture care in Bengaluru for pain, tension, and mobility. Personalized sessions at Kalyan Nagar. Book a consultation on WhatsApp or call us.',
    h1: 'Acupuncture Treatment in Bengaluru',
    intro:
      'Acupuncture is a precise, time-tested therapy that many people in Bengaluru choose for supportive care alongside conventional treatment. At S H Health Centre in Kalyan Nagar, consultations are individualized and focused on comfort, clarity, and realistic goals.',
    sections: [
      {
        h2: 'How acupuncture may help common complaints',
        paragraphs: [
          'People often explore acupuncture for back and neck tension, headaches, stress-related discomfort, joint stiffness, and sports or desk-related strain. We discuss what you are experiencing, what you have already tried, and what a sensible plan could look like.',
          'We do not promise cures. Therapy is supportive and varies by individual. If something needs urgent medical attention, we will clearly advise you to seek emergency or specialist care.',
        ],
      },
      {
        h2: 'What happens in your first session',
        paragraphs: [
          'Your first visit begins with a consultation so we understand your history, medications, allergies, and current symptoms. We explain what to expect, how long the session may take, and how we select points based on assessment.',
          'If acupuncture is not appropriate for you on that day, we will tell you honestly and suggest alternatives or referrals when needed.',
        ],
      },
      {
        h2: 'Techniques and approaches we may use',
        paragraphs: [
          'Depending on assessment, care may include traditional body acupuncture, electro-acupuncture where suitable, auricular work, scalp acupuncture methods, and other supportive approaches aligned with your case.',
          'Your plan can evolve over multiple visits as your response and goals change.',
        ],
      },
      {
        h2: 'Safety and who should seek medical advice first',
        paragraphs: [
          'Please inform us about pregnancy, bleeding disorders, pacemakers, active infections, recent surgery, and all medications. Some situations require clearance from your treating physician before needling.',
          'If you experience chest pain, sudden weakness, severe shortness of breath, or other emergency symptoms, call emergency services immediately rather than relying on clinic care.',
        ],
      },
      {
        h2: 'Serving patients across Bengaluru',
        paragraphs: [
          'Our clinic is located in Kalyan Nagar (HRBR Layout). Patients visit us from nearby areas such as Banaswadi, Hennur, Hebbal, and other parts of Bangalore depending on convenience.',
          'If you are unsure whether acupuncture is right for you, message us on WhatsApp with a short summary of your concern and availability.',
        ],
      },
    ],
  },
  {
    path: '/acupressure-treatment-bengaluru',
    seoTitle: 'Acupressure Therapy in Bengaluru | S H Health Centre',
    metaDescription:
      'Acupressure therapy in Bangalore for tension and pain support. Gentle, non-invasive sessions in Kalyan Nagar. Schedule via WhatsApp today.',
    h1: 'Acupressure Therapy in Bengaluru',
    intro:
      'Acupressure uses firm, controlled pressure on specific points to support relaxation and comfort. It can be a practical option for people who prefer a non-needle approach while still working within a structured holistic framework.',
    sections: [
      {
        h2: 'Acupressure compared with acupuncture (simple overview)',
        paragraphs: [
          'Acupuncture uses fine needles to stimulate points; acupressure uses pressure, massage-like techniques, and sustained contact. Both approaches are discussed in the context of your preferences and clinical suitability.',
        ],
      },
      {
        h2: 'Reasons people choose acupressure',
        paragraphs: [
          'Common goals include easing muscle tension, improving perceived stress, supporting sleep routines, and complementing care for chronic pain when appropriate.',
          'We set expectations clearly: response times differ, and some conditions need multidisciplinary management.',
        ],
      },
      {
        h2: 'Session length, frequency, and aftercare',
        paragraphs: [
          'Session length depends on your presentation and tolerance. We explain aftercare such as hydration, gentle movement, and when to follow up.',
          'If symptoms worsen or new red-flag symptoms appear, seek medical evaluation promptly.',
        ],
      },
      {
        h2: 'Visit us in Kalyan Nagar, Bengaluru',
        paragraphs: [
          'S H Health Centre is located on CMR Main Road, HRBR 2nd Block, above IndusInd Bank. Contact us for directions and to book a consultation.',
        ],
      },
    ],
  },
  {
    path: '/siddha-treatment-bengaluru',
    seoTitle: 'Siddha Treatment in Bengaluru | Holistic Care | S H Health Centre',
    metaDescription:
      'Siddha-informed holistic consultations in Bengaluru. Thoughtful, patient-centered planning at our Kalyan Nagar clinic. Enquire on WhatsApp.',
    h1: 'Siddha Treatment in Bengaluru',
    intro:
      'Siddha medicine is a classical Indian tradition. In our clinic setting, we focus on practical, ethical, and patient-centered guidance that respects both traditional principles and modern safety expectations.',
    sections: [
      {
        h2: 'What “Siddha-informed care” means in our clinic',
        paragraphs: [
          'We emphasize clear communication, informed consent, and realistic goals. Traditional concepts are explained in plain language so you can make confident decisions.',
          'We do not encourage stopping prescribed medication without your doctor’s approval.',
        ],
      },
      {
        h2: 'Who may benefit from a consultation',
        paragraphs: [
          'People often visit for chronic symptom support, lifestyle-related strain, and holistic planning alongside conventional treatment. Suitability is determined only after assessment.',
        ],
      },
      {
        h2: 'How we assess and plan care',
        paragraphs: [
          'We take a structured history, review prior reports if you bring them, and outline options. If your needs fall outside our scope, we will say so transparently.',
        ],
      },
      {
        h2: 'Working with your existing doctors',
        paragraphs: [
          'We welcome collaboration. Bring a summary of diagnoses and medicines when possible. Emergency symptoms always belong in urgent medical care, not a wellness consultation.',
        ],
      },
    ],
  },
  {
    path: '/pain-management-bengaluru',
    seoTitle: 'Holistic Pain Management in Bengaluru | S H Health Centre',
    metaDescription:
      'Supportive pain and tension care in Bangalore using acupuncture, acupressure, and holistic planning. Kalyan Nagar clinic. Book on WhatsApp.',
    h1: 'Holistic Pain Management in Bengaluru',
    intro:
      'Persistent pain is rarely one-dimensional. Our approach combines careful assessment with therapies such as acupuncture and acupressure, while emphasizing safety, pacing, and measurable day-to-day goals.',
    sections: [
      {
        h2: 'What we focus on in a pain consultation',
        paragraphs: [
          'We map triggers, aggravating factors, sleep, stress, and function (for example walking, desk posture, or lifting). This helps us propose a sensible sequence of care rather than a one-size-fits-all package.',
        ],
      },
      {
        h2: 'Therapies that may be part of your plan',
        paragraphs: [
          'Depending on assessment, options can include acupuncture, electro-acupuncture, cupping, gua sha, acupressure, and supportive lifestyle guidance.',
          'We avoid overstated claims. If imaging or specialist review is needed, we will recommend it.',
        ],
      },
      {
        h2: 'When to seek urgent medical care',
        paragraphs: [
          'Red flags include major trauma, fever with severe pain, unexplained rapid weight loss, progressive weakness, numbness in the saddle region, or new bowel or bladder changes. These require emergency evaluation.',
        ],
      },
      {
        h2: 'Location and booking',
        paragraphs: [
          'Visit us at Kalyan Nagar, Bengaluru. WhatsApp is the fastest way to share your schedule preferences and receive slot options.',
        ],
      },
    ],
  },
  {
    path: '/arthritis-treatment-bengaluru',
    seoTitle: 'Arthritis Pain Support in Bengaluru | Acupuncture & Holistic Care',
    metaDescription:
      'Supportive care for arthritis-related pain and stiffness in Bangalore. Acupuncture and holistic therapies at S H Health Centre, Kalyan Nagar. Book a consultation.',
    h1: 'Supportive Care for Arthritis Pain in Bengaluru',
    intro:
      'Arthritis-related pain often benefits from a combination of medical care, movement, and supportive therapies. We provide consultation-led holistic support that respects your diagnosis and your rheumatologist or orthopaedic plan.',
    sections: [
      {
        h2: 'Understanding symptoms we commonly hear about',
        paragraphs: [
          'Patients may report morning stiffness, joint ache with weather changes, reduced grip strength, or difficulty with stairs. Your story guides the plan; investigations you already have are helpful to bring along.',
        ],
      },
      {
        h2: 'How holistic therapies may complement standard care',
        paragraphs: [
          'Acupuncture and acupressure are sometimes used to support comfort, sleep, and stress, which can indirectly affect pain perception. Evidence and individual response vary; we discuss this openly.',
        ],
      },
      {
        h2: 'What we do in-clinic',
        paragraphs: [
          'After assessment, we propose a treatment frequency and technique choice. We track tolerance and adjust intensity. If a flare is atypical, we may pause therapy and suggest medical review.',
        ],
      },
      {
        h2: 'Lifestyle notes (general)',
        paragraphs: [
          'Gentle mobility, pacing, and ergonomic habits are often discussed as adjuncts—not replacements—for medical treatment. Personal advice is given only in context of your case.',
        ],
      },
    ],
  },
  {
    path: '/psoriasis-treatment-bengaluru',
    seoTitle: 'Holistic Support for Psoriasis in Bengaluru | S H Health Centre',
    metaDescription:
      'Calm, education-first holistic support for people managing psoriasis in Bengaluru. Kalyan Nagar clinic. WhatsApp to book a consultation.',
    h1: 'Holistic Support for People with Psoriasis in Bengaluru',
    intro:
      'Psoriasis care often requires dermatology-led treatment. Our role is supportive: stress modulation, lifestyle coaching within scope, and therapies that some patients find calming—without replacing prescribed medical therapy.',
    sections: [
      {
        h2: 'A clear scope of care',
        paragraphs: [
          'We do not diagnose psoriasis from a website visit, and we do not promise clearance of skin lesions. If you have a dermatologist, we encourage coordinated care and consistent follow-up.',
        ],
      },
      {
        h2: 'Stress, sleep, and symptom cycles (general education)',
        paragraphs: [
          'Many patients notice interactions between stress, sleep disruption, and flares. We discuss practical strategies that are safe and realistic, individualized to you.',
        ],
      },
      {
        h2: 'Our approach in the clinic',
        paragraphs: [
          'After a detailed history, we may suggest supportive acupuncture or acupressure where appropriate, always with attention to skin integrity and infection risk.',
        ],
      },
      {
        h2: 'When to prioritize dermatology',
        paragraphs: [
          'Widespread rash, signs of infection, rapid worsening, or systemic symptoms should be reviewed by a medical specialist promptly.',
        ],
      },
    ],
  },
  {
    path: '/migraine-treatment-bengaluru',
    seoTitle: 'Migraine & Headache Support in Bengaluru | S H Health Centre',
    metaDescription:
      'Consultation-led support for migraines and tension headaches in Bangalore. Acupuncture and holistic care in Kalyan Nagar. Book via WhatsApp.',
    h1: 'Migraine and Headache Support in Bengaluru',
    intro:
      'Headaches and migraines can significantly affect work and family life. We offer structured assessment and supportive acupuncture-related care for suitable candidates, while screening for warning signs that need neurology or emergency care.',
    sections: [
      {
        h2: 'What we clarify in consultation',
        paragraphs: [
          'We ask about onset patterns, aura, medication use (including overuse), hydration, sleep, stress, and prior evaluations. Bring any prior reports if available.',
        ],
      },
      {
        h2: 'Supportive therapies that may be considered',
        paragraphs: [
          'Depending on the case, care may include acupuncture, acupressure, and lifestyle pacing strategies. We discuss evidence in a balanced way and set realistic expectations.',
        ],
      },
      {
        h2: 'Red flags that require urgent care',
        paragraphs: [
          'Thunderclap headache, new neurological deficits, fever with neck stiffness, head trauma, or sudden worst-ever headache require emergency evaluation—not a clinic session.',
        ],
      },
      {
        h2: 'Booking in Bengaluru',
        paragraphs: [
          'Message us on WhatsApp with your typical headache pattern and preferred visit times. We operate from Kalyan Nagar, HRBR Layout.',
        ],
      },
    ],
  },
];

const byPath: Record<string, ServicePageDef> = Object.fromEntries(
  SERVICE_PAGES.map((p) => [p.path, p]),
);

export function getServicePage(path: string): ServicePageDef | undefined {
  return byPath[path];
}

export const ALL_SERVICE_PATHS = SERVICE_PAGES.map((p) => p.path);
