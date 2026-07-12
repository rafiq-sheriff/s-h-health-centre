import type { FaqItem } from './faq';

export type ServiceSection = {
  h2: string;
  paragraphs: string[];
};

export type ServicePageDef = {
  path: string;
  seoTitle: string;
  metaDescription: string;
  keywords?: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  /** Per-page FAQ items for FAQPage schema and accordion (optional). */
  faqItems?: FaqItem[];
  /** Related service paths for internal linking widget. */
  relatedServices?: string[];
  /** Schema.org service type string. */
  serviceSchemaType?: string;
};

export const SERVICE_PAGES: ServicePageDef[] = [
  // ─── CORE TREATMENTS ────────────────────────────────────────────────────────
  {
    path: '/acupuncture-treatment-bengaluru',
    seoTitle: 'Best Acupuncture Treatment in Bangalore | SH Health Centre',
    metaDescription:
      'Get expert acupuncture treatment in Bangalore at SH Health Centre, Kalyan Nagar. Personalized sessions for pain, stress & mobility. 8+ yrs experience. Book via WhatsApp.',
    keywords:
      'acupuncture treatment Bangalore, best acupuncture clinic Bangalore, acupuncture Kalyan Nagar, acupuncture for pain Bangalore',
    serviceSchemaType: 'Acupuncture',
    h1: 'Best Acupuncture Treatment in Bangalore',
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
        h2: 'Serving patients across Bengaluru and Bangalore',
        paragraphs: [
          'Our clinic is located in Kalyan Nagar (HRBR Layout). Patients visit us from nearby areas such as Banaswadi, Hennur, Hebbal, Horamavu, and other parts of Bangalore depending on convenience.',
          'If you are unsure whether acupuncture is right for you, message us on WhatsApp with a short summary of your concern and availability.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Is acupuncture painful?',
        answer:
          'Most patients feel minimal discomfort. Fine sterile needles are used and any sensation is typically brief. We adjust technique based on your sensitivity.',
      },
      {
        question: 'How many acupuncture sessions will I need?',
        answer:
          'This depends on your condition and goals. We discuss a realistic plan at your first consultation — some concerns respond in a few sessions; chronic conditions may benefit from ongoing support.',
      },
      {
        question: 'Is acupuncture safe alongside my current medication?',
        answer:
          'For most medications, yes — but we review your full medical history first. Some conditions require physician clearance before treatment.',
      },
    ],
    relatedServices: [
      '/acupressure-treatment-bengaluru',
      '/pain-management-bengaluru',
      '/migraine-treatment-bengaluru',
    ],
  },
  {
    path: '/acupressure-treatment-bengaluru',
    seoTitle: 'Best Acupressure Clinic in Bangalore | SH Health Centre',
    metaDescription:
      'Discover gentle acupressure therapy in Bangalore for tension, pain & relaxation. Non-invasive sessions at our Kalyan Nagar clinic, SH Health Centre. Book today.',
    keywords:
      'acupressure clinic Bangalore, best acupressure therapy Bangalore, acupressure Kalyan Nagar, non-invasive pain relief Bangalore',
    serviceSchemaType: 'Acupressure',
    h1: 'Best Acupressure Therapy in Bangalore',
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
        h2: 'Reasons people choose acupressure in Bangalore',
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
        h2: 'Visit our acupressure clinic in Kalyan Nagar, Bengaluru',
        paragraphs: [
          'S H Health Centre is located on CMR Main Road, HRBR 2nd Block, above IndusInd Bank, Kalyan Nagar. Patients from Banaswadi, Hennur, and Hebbal visit us regularly. Contact us for directions and to book a consultation.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'What conditions can acupressure help with?',
        answer:
          'Acupressure is often used for muscle tension, headaches, stress, fatigue, and supportive care for chronic pain. Suitability is determined after assessment.',
      },
      {
        question: 'Is acupressure safe during pregnancy?',
        answer:
          'Certain acupressure points are contraindicated in pregnancy. Please disclose pregnancy at your first visit so we can adapt care safely.',
      },
    ],
    relatedServices: [
      '/acupuncture-treatment-bengaluru',
      '/pain-management-bengaluru',
      '/varma-treatment-bengaluru',
    ],
  },

  {
    path: '/varma-treatment-bengaluru',
    seoTitle: 'Best Varma Treatment in Bangalore | SH Health Centre',
    metaDescription:
      'Authentic Varma therapy in Bangalore at SH Health Centre, Kalyan Nagar. Ancient healing for pain, nerve health & wellness. 8+ yrs experience. Book on WhatsApp.',
    keywords:
      'Varma treatment Bangalore, Varma therapy Bangalore, Varma Kalyan Nagar, Varmam treatment Bengaluru, best Varma clinic Bangalore',
    serviceSchemaType: 'Varma Therapy',
    h1: 'Best Varma Treatment in Bangalore',
    intro:
      'Varma therapy (Varmam) is an ancient healing tradition. It works on vital points across the body to support pain relief, nerve function, and overall wellness. At S H Health Centre in Kalyan Nagar, Bengaluru, our practitioner brings deep knowledge of Varma principles to every consultation.',
    sections: [
      {
        h2: 'What is Varma therapy and how does it work',
        paragraphs: [
          'Varma (also spelled Varmam) refers to vital energy points located across muscles, bones, nerves, and joints. Gentle, precise stimulation of these points is believed to restore blocked energy flow and support the body\'s self-healing mechanisms.',
          'In our clinic, Varma techniques are applied thoughtfully following a structured assessment. We explain each step clearly so you feel confident and informed.',
        ],
      },
      {
        h2: 'Conditions commonly addressed with Varma therapy',
        paragraphs: [
          'Patients often seek Varma care for nerve-related pain, joint stiffness, muscular injuries, spinal concerns, and recovery support following rehabilitation. Each presentation is assessed individually.',
          'We do not make curative claims. Therapy is supportive and individualized responses vary. If a concern requires emergency or specialist attention, we will advise accordingly.',
        ],
      },
      {
        h2: 'What to expect during a Varma consultation',
        paragraphs: [
          'Your session begins with a detailed history and assessment. The practitioner identifies relevant Varmam points appropriate for your condition. Stimulation is typically gentle and non-invasive, using fingertip pressure or specialized instruments.',
          'You may notice a sense of release, warmth, or relaxation during the session. We monitor your comfort throughout and adjust the approach as needed.',
        ],
      },
      {
        h2: 'Why choose S H Health Centre for Varma therapy in Bangalore',
        paragraphs: [
          'Our practitioner A. Soofia Fathima holds D.Acu and M.Acu qualifications and brings 8+ years of holistic medicine experience. Varma care at our clinic is integrated with pulse diagnosis and a full understanding of your health history.',
          'We serve patients from Kalyan Nagar, HRBR Layout, Banaswadi, Hennur, Hebbal, and across Bengaluru.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'What is Varma therapy?',
        answer:
          'Varma (Varmam) therapy is an ancient healing practice that works on vital energy points in the body to support pain relief, nerve function, and overall wellness.',
      },
      {
        question: 'Is Varma therapy painful?',
        answer:
          'No. Varma therapy uses gentle fingertip pressure on specific points. Most patients find it comfortable and relaxing. We adjust intensity based on your sensitivity.',
      },
      {
        question: 'How many Varma sessions are recommended?',
        answer:
          'This depends on your condition. We discuss a realistic plan at your first consultation. Acute concerns may improve in a few sessions; chronic conditions benefit from ongoing support.',
      },
    ],
    relatedServices: [
      '/pain-management-bengaluru',
      '/acupuncture-treatment-bengaluru',
      '/acupressure-treatment-bengaluru',
    ],
  },
  {
    path: '/pain-management-bengaluru',
    seoTitle: 'Holistic Pain Management in Bangalore | SH Health Centre',
    metaDescription:
      'Supportive pain care using acupuncture, acupressure & holistic therapies at our Kalyan Nagar clinic, Bangalore. Personalised plans. 8+ yrs experience. Book on WhatsApp.',
    keywords:
      'holistic pain management Bangalore, chronic pain treatment Bengaluru, acupuncture pain relief Bangalore, pain clinic Kalyan Nagar',
    serviceSchemaType: 'Pain Management',
    h1: 'Holistic Pain Management in Bangalore',
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
        h2: 'Pain management clinic in Kalyan Nagar, Bengaluru',
        paragraphs: [
          'Visit us at Kalyan Nagar, Bengaluru. WhatsApp is the fastest way to share your schedule preferences and receive slot options. We serve patients from Banaswadi, Hennur, Hebbal, and all of Bangalore.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'What types of pain can holistic therapy help with?',
        answer:
          'Our therapies may support back pain, neck pain, joint pain, headaches, and chronic muscular tension. Assessment determines suitability.',
      },
      {
        question: 'Will acupuncture cure my chronic pain?',
        answer:
          'Acupuncture is a supportive therapy — not a cure. Individual responses vary. We discuss realistic expectations openly at your first consultation.',
      },
    ],
    relatedServices: [
      '/acupuncture-treatment-bengaluru',
      '/acupressure-treatment-bengaluru',
      '/arthritis-treatment-bengaluru',
      '/back-pain-treatment-bengaluru',
    ],
  },
  {
    path: '/arthritis-treatment-bengaluru',
    seoTitle: 'Arthritis Pain Support in Bangalore | Acupuncture | SH Health Centre',
    metaDescription:
      'Supportive care for arthritis-related pain & stiffness in Bangalore. Acupuncture & holistic therapies at SH Health Centre, Kalyan Nagar. Book a consultation today.',
    keywords:
      'arthritis treatment Bangalore, acupuncture for arthritis Bangalore, joint pain treatment Kalyan Nagar, holistic arthritis care Bengaluru',
    serviceSchemaType: 'Arthritis Management',
    h1: 'Supportive Care for Arthritis Pain in Bangalore',
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
        h2: 'How holistic therapies may complement standard arthritis care',
        paragraphs: [
          'Acupuncture and acupressure are sometimes used to support comfort, sleep, and stress, which can indirectly affect pain perception. Evidence and individual response vary; we discuss this openly.',
        ],
      },
      {
        h2: 'What we do in-clinic for arthritis support',
        paragraphs: [
          'After assessment, we propose a treatment frequency and technique choice. We track tolerance and adjust intensity. If a flare is atypical, we may pause therapy and suggest medical review.',
        ],
      },
      {
        h2: 'Lifestyle notes for arthritis (general)',
        paragraphs: [
          'Gentle mobility, pacing, and ergonomic habits are often discussed as adjuncts not replacements for medical treatment. Personal advice is given only in context of your case.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture help arthritis pain?',
        answer:
          'Some people with arthritis find acupuncture helpful for pain and stiffness. It is used as a supportive therapy alongside your medical treatment, not as a replacement.',
      },
      {
        question: 'Should I stop my arthritis medication before acupuncture?',
        answer:
          'No. Never stop prescribed medication without consulting your doctor. We work alongside your existing medical care.',
      },
    ],
    relatedServices: [
      '/pain-management-bengaluru',
      '/acupuncture-treatment-bengaluru',
      '/knee-pain-treatment-bengaluru',
    ],
  },
  {
    path: '/psoriasis-treatment-bengaluru',
    seoTitle: 'Holistic Support for Psoriasis in Bangalore | SH Health Centre',
    metaDescription:
      'Calm, education-first holistic support for people managing psoriasis in Bangalore. Kalyan Nagar clinic, SH Health Centre. WhatsApp to book a consultation today.',
    keywords:
      'psoriasis holistic treatment Bangalore, acupuncture psoriasis Bangalore, psoriasis support clinic Bengaluru, holistic skin care Bangalore',
    serviceSchemaType: 'Holistic Wellness Support',
    h1: 'Holistic Support for People with Psoriasis in Bangalore',
    intro:
      'Psoriasis care often requires dermatology-led treatment. Our role is supportive: stress modulation, lifestyle coaching within scope, and therapies that some patients find calming without replacing prescribed medical therapy.',
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
    faqItems: [
      {
        question: 'Can acupuncture treat psoriasis?',
        answer:
          'Acupuncture is not a treatment for psoriasis. It may be used supportively for stress and wellbeing alongside dermatology-led care. Always follow your dermatologist\'s guidance.',
      },
    ],
    relatedServices: [
      '/acupuncture-treatment-bengaluru',
      '/pain-management-bengaluru',
      '/varma-treatment-bengaluru',
    ],
  },
  {
    path: '/migraine-treatment-bengaluru',
    seoTitle: 'Migraine & Headache Support in Bangalore | SH Health Centre',
    metaDescription:
      'Consultation-led support for migraines & tension headaches in Bangalore. Acupuncture & holistic care at Kalyan Nagar, SH Health Centre. Book via WhatsApp today.',
    keywords:
      'migraine treatment Bangalore, acupuncture for migraines Bangalore, headache relief Kalyan Nagar, migraine clinic Bengaluru',
    serviceSchemaType: 'Migraine Management',
    h1: 'Migraine and Headache Support in Bangalore',
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
          'Thunderclap headache, new neurological deficits, fever with neck stiffness, head trauma, or sudden worst-ever headache require emergency evaluation not a clinic session.',
        ],
      },
      {
        h2: 'Migraine clinic in Bengaluru — book today',
        paragraphs: [
          'Message us on WhatsApp with your typical headache pattern and preferred visit times. We operate from Kalyan Nagar, HRBR Layout, and serve patients from across Bangalore.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'How many sessions does acupuncture take for migraines?',
        answer:
          'Response varies by individual. Some patients notice improvement within a few sessions; others benefit from a longer course. We discuss a realistic plan at your first visit.',
      },
      {
        question: 'Can I take migraine medication and have acupuncture?',
        answer:
          'Generally yes, but please disclose all medications at consultation. We review your history carefully before recommending any treatment.',
      },
    ],
    relatedServices: [
      '/acupuncture-treatment-bengaluru',
      '/pain-management-bengaluru',
      '/neck-pain-treatment-bengaluru',
    ],
  },

  // ─── CONDITION PAGES ─────────────────────────────────────────────────────────
  {
    path: '/back-pain-treatment-bengaluru',
    seoTitle: 'Back Pain Treatment in Bangalore | Acupuncture | SH Health Centre',
    metaDescription:
      'Relieve back pain with expert acupuncture & holistic therapy at SH Health Centre, Kalyan Nagar, Bangalore. Personalised care plans. Book your consultation today.',
    keywords:
      'back pain treatment Bangalore, acupuncture for back pain Bangalore, lower back pain relief Kalyan Nagar, back pain clinic Bengaluru',
    serviceSchemaType: 'Back Pain Management',
    h1: 'Back Pain Treatment in Bangalore',
    intro:
      'Back pain is one of the most common reasons people in Bengaluru seek holistic care. At S H Health Centre, Kalyan Nagar, we take a structured, assessment-first approach to understand the nature of your pain before suggesting any therapy.',
    sections: [
      {
        h2: 'Common causes of back pain we encounter',
        paragraphs: [
          'Patients present with lower back tension from prolonged desk work, muscular strain from lifting, post-injury stiffness, or chronic pain that has been present for months or years.',
          'We ask detailed questions about onset, location, radiation, aggravating factors, and what has helped before deciding on a care plan.',
        ],
      },
      {
        h2: 'How acupuncture may support back pain relief',
        paragraphs: [
          'Acupuncture for back pain involves careful selection of points based on your assessment. Some patients report reduced muscle tension and improved mobility over a course of sessions.',
          'We do not claim to cure structural conditions such as disc herniation. If imaging is required, we will recommend appropriate specialist referral.',
        ],
      },
      {
        h2: 'Other therapies that may be included',
        paragraphs: [
          'Depending on assessment, your plan may include acupressure, cupping, gua sha, electro-acupuncture, or Varma-informed techniques. Each session is adjusted based on your response.',
        ],
      },
      {
        h2: 'Red flags — when to see a doctor urgently',
        paragraphs: [
          'Back pain with bladder or bowel changes, numbness in the groin or inner thighs, fever, or unexplained weight loss requires urgent medical evaluation. Do not rely on complementary therapy for these symptoms.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture help lower back pain?',
        answer:
          'Many people find acupuncture helpful for muscular back pain and tension. It is most effective as part of a broader care plan. Individual responses vary.',
      },
      {
        question: 'How soon can I expect relief from back pain with acupuncture?',
        answer:
          'Some people notice improvement after 2–4 sessions; others need a longer course. We assess your response at each visit and adjust accordingly.',
      },
    ],
    relatedServices: [
      '/pain-management-bengaluru',
      '/acupuncture-treatment-bengaluru',
      '/sciatica-treatment-bengaluru',
    ],
  },
  {
    path: '/neck-pain-treatment-bengaluru',
    seoTitle: 'Neck Pain Treatment in Bangalore | Acupuncture | SH Health Centre',
    metaDescription:
      'Ease neck pain & stiffness with expert acupuncture at SH Health Centre, Kalyan Nagar, Bangalore. Tailored holistic care plans. Book via WhatsApp today.',
    keywords:
      'neck pain treatment Bangalore, acupuncture for neck pain Bangalore, cervical pain relief Kalyan Nagar, neck stiffness clinic Bengaluru',
    serviceSchemaType: 'Neck Pain Management',
    h1: 'Neck Pain Treatment in Bangalore',
    intro:
      'Neck pain and stiffness — whether from desk work, poor posture, or acute strain — can significantly affect daily life. At S H Health Centre, we offer assessment-led holistic care to support relief and improved movement.',
    sections: [
      {
        h2: 'Why people in Bengaluru develop neck pain',
        paragraphs: [
          'Long hours at computers, mobile phone use, poor sleeping positions, and work-related stress are among the most common contributors. Cervical spondylosis and muscular tightness are frequently mentioned concerns.',
          'We assess posture, range of motion, and symptom patterns before recommending any approach.',
        ],
      },
      {
        h2: 'Acupuncture and acupressure for neck pain',
        paragraphs: [
          'Targeted needling or pressure on relevant points may help reduce muscle tension and support mobility. We explain the rationale and expected response at each visit.',
          'Individual responses vary, and we track your progress carefully.',
        ],
      },
      {
        h2: 'Complementary approaches in your care plan',
        paragraphs: [
          'Cupping, gua sha, and Varma-informed techniques may be incorporated depending on your assessment. Lifestyle adjustments such as desk ergonomics are often discussed as part of care.',
        ],
      },
      {
        h2: 'Warning signs that need medical assessment',
        paragraphs: [
          'Neck pain with arm weakness, numbness, or progressive neurological symptoms requires medical investigation before complementary therapy. We screen for these at your first visit.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture help cervical spondylosis?',
        answer:
          'Acupuncture may support symptom management for cervical spondylosis — particularly pain and stiffness — but it is not a cure for structural changes. It works best alongside appropriate medical care.',
      },
    ],
    relatedServices: [
      '/pain-management-bengaluru',
      '/acupuncture-treatment-bengaluru',
      '/migraine-treatment-bengaluru',
    ],
  },
  {
    path: '/sciatica-treatment-bengaluru',
    seoTitle: 'Sciatica Treatment in Bangalore | Acupuncture | SH Health Centre',
    metaDescription:
      'Holistic sciatica pain relief at SH Health Centre, Kalyan Nagar, Bangalore. Expert acupuncture & supportive care for nerve pain. Book your consultation today.',
    keywords:
      'sciatica treatment Bangalore, acupuncture for sciatica Bangalore, sciatic nerve pain relief Kalyan Nagar, sciatica clinic Bengaluru',
    serviceSchemaType: 'Sciatica Management',
    h1: 'Sciatica Treatment in Bangalore',
    intro:
      'Sciatica — pain that radiates from the lower back down the leg along the sciatic nerve — is a debilitating condition. At S H Health Centre in Kalyan Nagar, Bengaluru, we offer supportive acupuncture-based care that works alongside your medical management.',
    sections: [
      {
        h2: 'Understanding sciatica and its causes',
        paragraphs: [
          'Sciatica is typically caused by pressure on the sciatic nerve, often from a disc herniation, spinal stenosis, or piriformis syndrome. Symptoms include sharp or burning pain, tingling, and weakness along the leg.',
          'A proper diagnosis from a physician or spine specialist is essential before pursuing complementary care. Bring any existing imaging or reports to your consultation.',
        ],
      },
      {
        h2: 'How acupuncture may support sciatica management',
        paragraphs: [
          'Acupuncture is sometimes used alongside physiotherapy and medication for sciatica. It may help reduce muscular guarding, support nerve relaxation, and improve comfort between medical treatments.',
          'We are clear about what acupuncture can and cannot address. Structural nerve compression requires medical management.',
        ],
      },
      {
        h2: 'What to expect during treatment',
        paragraphs: [
          'After assessing your history and current symptoms, we select appropriate acupuncture points along the back, hip, and leg. Sessions are adapted based on your response and pain levels on each visit.',
        ],
      },
      {
        h2: 'When to seek urgent medical care for sciatica',
        paragraphs: [
          'If you experience progressive leg weakness, loss of bladder or bowel control, or rapidly worsening numbness, seek emergency medical care immediately. These signs indicate possible serious nerve compression.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture cure sciatica?',
        answer:
          'Acupuncture is supportive, not curative, for sciatica. It may help manage pain and discomfort as part of a broader treatment plan that includes medical assessment.',
      },
    ],
    relatedServices: [
      '/back-pain-treatment-bengaluru',
      '/pain-management-bengaluru',
      '/acupuncture-treatment-bengaluru',
    ],
  },
  {
    path: '/knee-pain-treatment-bengaluru',
    seoTitle: 'Knee Pain Treatment in Bangalore | Acupuncture | SH Health Centre',
    metaDescription:
      'Holistic knee pain relief at SH Health Centre, Kalyan Nagar, Bangalore. Acupuncture & supportive therapies for joint pain & stiffness. Book your consultation today.',
    keywords:
      'knee pain treatment Bangalore, acupuncture for knee pain Bangalore, knee joint relief Kalyan Nagar, knee pain clinic Bengaluru',
    serviceSchemaType: 'Knee Pain Management',
    h1: 'Knee Pain Treatment in Bangalore',
    intro:
      'Knee pain — whether from osteoarthritis, sports injury, or age-related wear — can limit mobility and independence. At S H Health Centre, we offer supportive holistic care to complement your medical management.',
    sections: [
      {
        h2: 'Common knee pain conditions we support',
        paragraphs: [
          'Patients visit us for osteoarthritis knee pain, post-injury stiffness, patellar issues, and general joint aching. We take a detailed history including prior diagnoses, X-rays, and any previous treatments.',
        ],
      },
      {
        h2: 'Acupuncture for knee pain — what the evidence suggests',
        paragraphs: [
          'Some studies suggest acupuncture may help reduce osteoarthritis-related knee pain. At our clinic, we discuss the evidence honestly and set realistic expectations before beginning care.',
        ],
      },
      {
        h2: 'Supportive therapies in your plan',
        paragraphs: [
          'Depending on your assessment, care may include acupuncture, acupressure, and lifestyle guidance on activity modification and joint protection during daily activities.',
        ],
      },
      {
        h2: 'When knee pain needs urgent or specialist care',
        paragraphs: [
          'Acute knee swelling with trauma, locking of the joint, or rapidly progressive weakness requires orthopaedic evaluation, not complementary therapy. We screen for these red flags at your first visit.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture help knee osteoarthritis?',
        answer:
          'Some patients with knee osteoarthritis report pain relief with acupuncture. It is best used as part of a broader management plan including exercise and medical care.',
      },
    ],
    relatedServices: [
      '/arthritis-treatment-bengaluru',
      '/pain-management-bengaluru',
      '/acupuncture-treatment-bengaluru',
    ],
  },
  {
    path: '/frozen-shoulder-treatment-bengaluru',
    seoTitle: 'Frozen Shoulder Treatment in Bangalore | SH Health Centre',
    metaDescription:
      'Holistic frozen shoulder care at SH Health Centre, Kalyan Nagar, Bangalore. Acupuncture & supportive therapies for shoulder pain & stiffness. Book today.',
    keywords:
      'frozen shoulder treatment Bangalore, acupuncture for frozen shoulder Bangalore, shoulder pain clinic Kalyan Nagar, adhesive capsulitis Bengaluru',
    serviceSchemaType: 'Frozen Shoulder Management',
    h1: 'Frozen Shoulder Treatment in Bangalore',
    intro:
      'Frozen shoulder (adhesive capsulitis) can cause months of pain and restricted movement. At S H Health Centre, Kalyan Nagar, we offer supportive holistic care to complement your physiotherapy or orthopaedic management.',
    sections: [
      {
        h2: 'Understanding frozen shoulder',
        paragraphs: [
          'Frozen shoulder develops in three phases: freezing (worsening pain), frozen (stiffness), and thawing (gradual recovery). The whole process can take 1–3 years without appropriate management.',
          'A clinical diagnosis from an orthopaedic or physiotherapy professional is important before beginning complementary care. Bring any relevant imaging or reports to your first visit.',
        ],
      },
      {
        h2: 'How acupuncture and acupressure may help',
        paragraphs: [
          'Acupuncture may support pain management and muscle relaxation around the shoulder girdle. Some patients find it helpful alongside physiotherapy exercises. Individual responses vary significantly.',
        ],
      },
      {
        h2: 'What to expect during sessions',
        paragraphs: [
          'We assess shoulder range of motion and pain patterns at each visit. Points are selected on the arm, shoulder, and back. Sessions are gentle and adapted to your current phase of recovery.',
        ],
      },
      {
        h2: 'Warning signs that need medical attention',
        paragraphs: [
          'Sudden complete loss of shoulder movement after trauma, fever with joint swelling, or any neurological symptoms in the arm require urgent medical evaluation.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture cure frozen shoulder?',
        answer:
          'Acupuncture is a supportive therapy for frozen shoulder — not a cure. It may help manage pain and complement physiotherapy. Full recovery typically requires patience and appropriate exercise.',
      },
    ],
    relatedServices: [
      '/pain-management-bengaluru',
      '/acupuncture-treatment-bengaluru',
      '/neck-pain-treatment-bengaluru',
    ],
  },
  {
    path: '/slip-disc-treatment-bengaluru',
    seoTitle: 'Slip Disc Treatment in Bangalore | Holistic Care | SH Health Centre',
    metaDescription:
      'Supportive holistic care for slip disc in Bangalore at SH Health Centre, Kalyan Nagar. Acupuncture alongside medical management. Book via WhatsApp today.',
    keywords:
      'slip disc treatment Bangalore, herniated disc acupuncture Bangalore, disc bulge holistic care Kalyan Nagar, slip disc clinic Bengaluru',
    serviceSchemaType: 'Disc Pain Management',
    h1: 'Slip Disc Treatment Support in Bangalore',
    intro:
      'A slip disc (herniated or prolapsed disc) can cause significant back or leg pain. At S H Health Centre, we offer supportive holistic care that complements your neurosurgical, orthopaedic, or physiotherapy management.',
    sections: [
      {
        h2: 'Understanding slip disc and its symptoms',
        paragraphs: [
          'A slip disc occurs when the soft inner part of a spinal disc pushes through its outer casing, potentially pressing on nearby nerves. Symptoms include local back pain, shooting leg pain, tingling, and weakness.',
          'An accurate diagnosis via MRI or CT is important before any complementary therapy. Please bring your imaging reports to your first consultation.',
        ],
      },
      {
        h2: 'Complementary holistic support for disc pain',
        paragraphs: [
          'Acupuncture for disc-related pain focuses on muscle relaxation, pain modulation, and supporting recovery alongside your medical care. It is not a treatment for the disc herniation itself.',
          'If you are post-surgery or under conservative management, we work within the parameters advised by your spine specialist.',
        ],
      },
      {
        h2: 'What we assess before recommending therapy',
        paragraphs: [
          'We review your imaging findings, current symptoms, and any ongoing medical treatment. Some presentations (e.g. active nerve compression with weakness) require clearance from your doctor before we begin.',
        ],
      },
      {
        h2: 'When to seek emergency care for disc problems',
        paragraphs: [
          'Loss of bladder or bowel control, saddle anaesthesia (numbness in the groin area), or rapidly progressive leg weakness are medical emergencies. Call an ambulance or go to the nearest emergency department immediately.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture help with slip disc pain?',
        answer:
          'Acupuncture may help manage muscular pain and tension associated with a slip disc. It does not treat the disc herniation itself and works best alongside appropriate medical care.',
      },
    ],
    relatedServices: [
      '/back-pain-treatment-bengaluru',
      '/sciatica-treatment-bengaluru',
      '/pain-management-bengaluru',
    ],
  },
  {
    path: '/pcod-treatment-bengaluru',
    seoTitle: 'PCOD Treatment in Bangalore | Holistic Care | SH Health Centre',
    metaDescription:
      'Supportive holistic care for PCOD/PCOS in Bangalore at SH Health Centre, Kalyan Nagar. Acupuncture & lifestyle support alongside medical management. Book today.',
    keywords:
      'PCOD treatment Bangalore, PCOS holistic care Bangalore, acupuncture PCOD Bangalore, women health clinic Kalyan Nagar Bengaluru',
    serviceSchemaType: "Women's Health Support",
    h1: "PCOD/PCOS Supportive Care in Bangalore",
    intro:
      'Polycystic ovarian disease (PCOD/PCOS) requires gynaecology-led diagnosis and management. At S H Health Centre, we offer supportive holistic consultations focused on stress, lifestyle, and wellbeing to complement your medical care.',
    sections: [
      {
        h2: 'Our role in PCOD support',
        paragraphs: [
          'We do not diagnose or treat PCOD medically. Our role is to support stress management, sleep quality, and lifestyle factors that may influence hormonal balance — always alongside, never instead of, your gynaecologist\'s plan.',
          'If you have not yet seen a gynaecologist for PCOD symptoms, we will encourage you to do so before beginning complementary care.',
        ],
      },
      {
        h2: 'Acupuncture and holistic support for hormonal wellbeing',
        paragraphs: [
          'Some research suggests acupuncture may support stress reduction and hormonal regulation in women with PCOS. Evidence is emerging and individual responses vary. We discuss this honestly at your consultation.',
        ],
      },
      {
        h2: 'Lifestyle and wellbeing guidance',
        paragraphs: [
          'Stress, sleep, and dietary factors play a role in PCOD symptom management. We provide individualized, evidence-aware guidance that is realistic and safe.',
        ],
      },
      {
        h2: 'Working alongside your medical team',
        paragraphs: [
          'Bring a summary of your gynaecology reports and current medications. We communicate clearly about what is within our scope and refer appropriately when needed.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture treat PCOD?',
        answer:
          'Acupuncture does not treat PCOD. It may provide supportive benefits for stress and wellbeing alongside your gynaecological treatment. Always follow your doctor\'s medical plan.',
      },
    ],
    relatedServices: [
      '/pain-management-bengaluru',
      '/varma-treatment-bengaluru',
      '/acupuncture-treatment-bengaluru',
    ],
  },
  {
    path: '/insomnia-treatment-bengaluru',
    seoTitle: 'Insomnia Treatment in Bangalore | Holistic Care | SH Health Centre',
    metaDescription:
      'Supportive holistic care for insomnia & sleep problems in Bangalore at SH Health Centre, Kalyan Nagar. Acupuncture & relaxation therapies. Book today.',
    keywords:
      'insomnia treatment Bangalore, acupuncture for sleep Bangalore, sleep disorder holistic care Kalyan Nagar, sleep clinic Bengaluru',
    serviceSchemaType: 'Sleep Wellness Support',
    h1: 'Insomnia and Sleep Support in Bangalore',
    intro:
      'Poor sleep affects every aspect of health. At S H Health Centre, Kalyan Nagar, we offer holistic assessment and supportive therapies for people struggling with insomnia and sleep disturbances — always within appropriate scope of care.',
    sections: [
      {
        h2: 'Understanding sleep problems — what we assess',
        paragraphs: [
          'We discuss sleep onset difficulties, early waking, sleep quality, stress levels, caffeine, screen habits, and any medical conditions that may affect sleep. A thorough history helps us understand contributing factors.',
          'If sleep problems are severe, causing significant impairment, or associated with mental health concerns, we will recommend appropriate specialist evaluation alongside complementary support.',
        ],
      },
      {
        h2: 'Acupuncture and its potential role in sleep support',
        paragraphs: [
          'Some research suggests acupuncture may support relaxation and sleep quality. We discuss the evidence clearly and set realistic expectations before beginning care.',
          'Acupuncture is most effective when integrated with good sleep hygiene practices that we also discuss with you.',
        ],
      },
      {
        h2: 'Other holistic approaches we may recommend',
        paragraphs: [
          'Depending on your assessment, acupressure, relaxation guidance, and pacing strategies may be included in your plan. These complement but do not replace medical treatment when needed.',
        ],
      },
      {
        h2: 'When insomnia needs medical attention',
        paragraphs: [
          'Insomnia associated with mood disorders, anxiety, sleep apnoea symptoms, or significant functional impairment requires evaluation by a physician or mental health professional.',
        ],
      },
    ],
    faqItems: [
      {
        question: 'Can acupuncture help with insomnia?',
        answer:
          'Some people find acupuncture helpful for relaxation and sleep quality. It works best alongside good sleep habits. We discuss realistic expectations at your first consultation.',
      },
    ],
    relatedServices: [
      '/pain-management-bengaluru',
      '/migraine-treatment-bengaluru',
      '/acupuncture-treatment-bengaluru',
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
