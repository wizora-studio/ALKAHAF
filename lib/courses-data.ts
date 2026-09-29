export interface CourseModule {
  moduleNumber: string;
  title: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface CourseDetail {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroSubtitle: string;
  overview: string;
  whoIsItFor: string[];
  prerequisites: string;
  durationAndFormat: {
    sessionLength: string;
    frequency: string;
    mode: string;
    startingPrice: string;
    priceNumber: string;
  };
  learningOutcomes: string[];
  curriculum: CourseModule[];
  teacherApproach: string;
  safeguardingNote: string;
  faqs: CourseFAQ[];
  relatedCourses: string[];
  relatedGuideSlug: string;
  relatedGuideTitle: string;
}

export const COURSES_DATA: CourseDetail[] = [
  {
    slug: "noorani-qaida",
    title: "Online Noorani Qaida & Beginner Nazra Quran Course",
    shortTitle: "Noorani Qaida & Nazra",
    metaTitle: "Online Noorani Qaida Course for Kids & Beginners",
    metaDescription:
      "Learn Noorani Qaida online with certified male and female Quran tutors at Al Kahaf Academy. Step-by-step Arabic alphabet, Makharij, and beginner Quran reading. 3-day free trial.",
    heroBadge: "Foundational Course • Kids & Beginners",
    heroSubtitle:
      "Master the Arabic alphabet, exact letter articulation points (Makharij), vowels (Harakat), and word-joining rules to read the Holy Quran fluently from scratch.",
    overview:
      "The Noorani Qaida & Beginner Nazra course at Al Kahaf Academy is the foundational starting point for young children (ages 4+) and adult beginners who want to read the Holy Quran accurately in Arabic. Taught live 1-on-1 via interactive digital screen-sharing, this course builds accurate pronunciation habits from the very first lesson so students transition smoothly into reading the full Mushaf.",
    whoIsItFor: [
      "Young children (ages 4–12) starting their very first Quran reading journey",
      "Adult beginners and reverts learning to read Arabic script from scratch",
      "Students who recognize Arabic letters but struggle to join words fluently",
      "Learners who want to correct foundational pronunciation before starting Tajweed",
    ],
    prerequisites:
      "None. No prior knowledge of the Arabic alphabet or reading is required.",
    durationAndFormat: {
      sessionLength: "30 to 35 minutes per live session",
      frequency: "2, 3, or 5 days per week (flexible 24/7 slots)",
      mode: "Live 1-on-1 Online Class via Zoom or Google Meet",
      startingPrice: "From $25/month",
      priceNumber: "25",
    },
    learningOutcomes: [
      "Identify and pronounce all 29 Arabic letters from their authentic articulation points (Makharij)",
      "Read joined letter shapes at the beginning, middle, and end of Quranic words",
      "Apply short vowels (Fatha, Kasra, Damma), Tanween, and Sukoon accurately",
      "Recognize Madd (elongation) letters, Shaddah (emphasis), and basic stopping rules (Waqf)",
      "Transition confidently into sight-reading (Nazra) of Juz Amma and the complete Holy Quran",
    ],
    curriculum: [
      {
        moduleNumber: "Module 1",
        title: "Arabic Alphabet & Articulation Points (Makharij al-Huroof)",
        topics: [
          "Individual Arabic letter recognition and phonetic sounds",
          "Distinguishing heavy (Tafkheem) and light (Tarqeeq) letters",
          "Throat, tongue, and lip articulation drills",
        ],
      },
      {
        moduleNumber: "Module 2",
        title: "Compound Letters & Joined Script (Murakkabat)",
        topics: [
          "Recognizing letters in initial, medial, and final positions",
          "Visual drills for look-alike and sound-alike Arabic letters",
          "Reading multi-letter combinations without hesitation",
        ],
      },
      {
        moduleNumber: "Module 3",
        title: "Vowels, Tanween & Standing Movements (Harakat)",
        topics: [
          "Fatha, Kasra, and Damma pronunciation without over-stretching",
          "Double vowels (Tanween) and standing Fatha/Kasra/Damma",
          "Letters of Madd (Alif, Waw, Ya) and Leen letters",
        ],
      },
      {
        moduleNumber: "Module 4",
        title: "Sukoon, Shaddah & Transition to Juz Amma (Nazra)",
        topics: [
          "Reading Sukoon (Jazm) and Qalqalah (echoing letters)",
          "Mastering Shaddah (Tashdeed) and Noon/Meem Mushaddad",
          "Guided reading of short Surahs from Juz Amma with basic Tajweed",
        ],
      },
    ],
    teacherApproach:
      "Our patient male and female tutors use on-screen digital Noorani Qaida highlighting, phonetic repetition, and positive reinforcement tailored to each child's attention span or each adult learner's pace.",
    safeguardingNote:
      "All classes for children are conducted in a safe, parent-accessible online classroom. Parents are welcome to observe sessions at any time and receive monthly progress updates.",
    faqs: [
      {
        question: "What age is best to start the online Noorani Qaida course?",
        answer:
          "Children can comfortably begin at age 4 or 5 with our interactive 30-minute 1-on-1 lessons. We also teach teens and adults who are learning to read the Quran for the first time.",
      },
      {
        question: "How long does it take to complete Noorani Qaida?",
        answer:
          "With 3 to 5 classes per week, most students complete Noorani Qaida in 3 to 6 months depending on age and practice consistency, after which they immediately begin reading Juz Amma.",
      },
      {
        question: "Do I need to buy a physical Noorani Qaida book?",
        answer:
          "No physical book is required. Your tutor shares a high-definition digital Noorani Qaida on screen during every class and provides PDF practice materials for home review.",
      },
    ],
    relatedCourses: ["tajweed", "islamic-studies", "adults"],
    relatedGuideSlug: "noorani-qaida-vs-quran-reading",
    relatedGuideTitle: "Noorani Qaida vs. Quran Reading (Nazra): Where Should Beginners Start?",
  },
  {
    slug: "tajweed",
    title: "Online Quran with Tajweed Course — Recitation & Makharij Mastery",
    shortTitle: "Quran with Tajweed",
    metaTitle: "Online Quran with Tajweed Classes for Kids & Adults",
    metaDescription:
      "Learn Quran recitation with proper Tajweed rules online at Al Kahaf Academy. 1-on-1 live classes with certified Qaris and Qariahs. Start your 3-day free trial.",
    heroBadge: "Most Popular • Certified Qaris & Qariahs",
    heroSubtitle:
      "Perfect your Quranic recitation with authentic Tajweed rules, precise Makharij, and melodious Tilawah under the direct guidance of certified scholars.",
    overview:
      "Our Online Quran with Tajweed course helps students move beyond basic reading to recite the Book of Allah exactly as it was revealed. Through live 1-on-1 audio-visual feedback, certified male and female teachers correct subtle pronunciation errors in real time while teaching both theoretical Tajweed rules and practical application across the entire Quran.",
    whoIsItFor: [
      "Students who have completed Noorani Qaida and want to read the full Quran with Tajweed",
      "Children and teens looking to build fluent, confident, and accurate Tilawah",
      "Adults who can read Arabic script but want to correct pronunciation and Tajweed rules",
      "Advanced learners preparing for Hifz or refining their recitation rhythm",
    ],
    prerequisites:
      "Basic familiarity with Arabic letters and vowel signs (or completion of Noorani Qaida). Beginners can start with Noorani Qaida first.",
    durationAndFormat: {
      sessionLength: "30 to 45 minutes per live session",
      frequency: "2, 3, or 5 days per week",
      mode: "100% Online Live 1-on-1 via Zoom or Google Meet",
      startingPrice: "From $25/month",
      priceNumber: "25",
    },
    learningOutcomes: [
      "Apply all rules of Noon Sakinah, Tanween, and Meem Sakinah (Izhar, Idgham, Iqlab, Ikhfa)",
      "Distinguish letter characteristics (Sifaat al-Huroof) including Hams, Jahr, Qalqalah, and Isti'la",
      "Execute all types of Madd (natural and secondary elongations) with accurate beat counts",
      "Observe proper Waqf (stopping) and Ibtida (resuming) rules to preserve Quranic meaning",
      "Recite the Holy Quran fluently with composure, Tarteeel, and spiritual reflection",
    ],
    curriculum: [
      {
        moduleNumber: "Module 1",
        title: "Makharij & Sifaat al-Huroof (Articulation & Characteristics)",
        topics: [
          "Comprehensive review of the 17 articulation points across 5 vocal areas",
          "Heavy (Musta'liyah) vs. light (Mustafilah) letters and Rules of Raa & Laam",
          "Qalqalah (minor, medium, and major echoing sounds)",
        ],
      },
      {
        moduleNumber: "Module 2",
        title: "Rules of Noon Sakinah, Tanween & Meem Sakinah",
        topics: [
          "Izhar Halqi, Idgham (with and without Ghunnah), Iqlab, and Ikhfa Haqiqi",
          "Meem Sakinah rules: Ikhfa Shafawi, Idgham Shafawi, and Izhar Shafawi",
          "Noon and Meem Mushaddad with two-count nasalization (Ghunnah)",
        ],
      },
      {
        moduleNumber: "Module 3",
        title: "Rules of Madd (Elongation) & Hamzat al-Wasl",
        topics: [
          "Madd Tabee'i (Natural Madd) and Madd Badal, Iwadd, and Leen",
          "Madd Muttasil, Madd Munfasil, and Madd Lazim (Kalimi & Harfi)",
          "Rules of Hamzat al-Wasl and Hamzat al-Qat' in connected recitation",
        ],
      },
      {
        moduleNumber: "Module 4",
        title: "Waqf (Stopping Rules) & Complete Mushaf Tilawah",
        topics: [
          "Understanding Mushaf stopping signs (Lazim, Ja'iz, Waqf Aula, La Waqf)",
          "Stopping on words ending in Taa Marbootah, Tanween, and Sukoon",
          "Guided Para-by-Para Tilawah with continuous teacher correction",
        ],
      },
    ],
    teacherApproach:
      "Every lesson combines 10 minutes of focused Tajweed rule practice with 20–25 minutes of live Mushaf recitation. Your teacher listens attentively and models the exact sound so you master Tajweed naturally through practice.",
    safeguardingNote:
      "Sisters and young girls can choose dedicated certified female Qariahs for complete privacy and comfort.",
    faqs: [
      {
        question: "Do I have to memorize complicated Tajweed terminology?",
        answer:
          "Our primary focus is practical recitation accuracy. We explain Tajweed rules in simple, clear English (or Urdu/Arabic) so you can apply them naturally while reading the Quran.",
      },
      {
        question: "Can I choose a female Tajweed teacher?",
        answer:
          "Yes. We have certified female Quran tutors (Qariahs and Hafizas) available across all global time zones for sisters and children.",
      },
      {
        question: "Will I receive feedback on my progress?",
        answer:
          "Yes, teachers maintain ongoing lesson logs and share monthly progress evaluations covering Makharij accuracy, Tajweed rule application, and reading fluency.",
      },
    ],
    relatedCourses: ["noorani-qaida", "hifz", "arabic"],
    relatedGuideSlug: "how-to-learn-quran-with-tajweed",
    relatedGuideTitle: "How to Learn Quran with Tajweed Online: A Step-by-Step Guide",
  },
  {
    slug: "hifz",
    title: "Online Hifz Quran Program — Structured Memorization for Kids & Adults",
    shortTitle: "Hifz Quran Program",
    metaTitle: "Online Hifz Classes — Memorize Quran with Certified Hafiz Tutors",
    metaDescription:
      "Join Al Kahaf Academy's structured Online Hifz Program for kids and adults. Daily Sabaq, Sabaqi, and Manzil revision with certified Hafiz and Hafiza tutors.",
    heroBadge: "Structured Memorization • Male & Female Huffaz",
    heroSubtitle:
      "Aproven three-tier memorization methodology—Sabaq (new lesson), Sabaqi (recent revision), and Manzil (long-term retention)—tailored to your personal pace.",
    overview:
      "The Online Hifz Quran Program at Al Kahaf Academy provides a disciplined, encouraging pathway to memorizing the Holy Quran—whether your goal is Juz Amma, selected Surahs, or complete 30-Juz Hifz. Guided 1-on-1 by experienced Hafiz and Hafiza instructors, students follow a structured daily system that ensures new verses are memorized with flawless Tajweed while previously memorized portions remain strong.",
    whoIsItFor: [
      "Children and teens aspiring to memorize Juz Amma or the complete Holy Quran alongside school",
      "Adults seeking a flexible part-time Hifz track (e.g., Juz Amma, Juz Tabarak, or key Surahs)",
      "Students who previously memorized parts of the Quran and want structured Manzil revision",
      "Sisters looking for a qualified female Hafiza tutor for private 1-on-1 Hifz guidance",
    ],
    prerequisites:
      "Ability to read the Quran fluently with basic Tajweed rules (Nazra). Students needing reading fluency start with our Tajweed track first.",
    durationAndFormat: {
      sessionLength: "30 to 45 minutes per live session",
      frequency: "3 or 5 days per week recommended for steady retention",
      mode: "100% Online Live 1-on-1 via Zoom or Google Meet",
      startingPrice: "From $35/month",
      priceNumber: "35",
    },
    learningOutcomes: [
      "Memorize Quranic verses with accurate Tajweed, Makharij, and rhythm",
      "Maintain strong retention using the traditional Sabaq, Sabaqi, and Manzil system",
      "Build a consistent daily habit of Quranic connection and revision (Muraja'ah)",
      "Pass regular Juz-level oral assessments before advancing to new sections",
      "Develop spiritual discipline and deep love for the words of Allah",
    ],
    curriculum: [
      {
        moduleNumber: "Stage 1",
        title: "Fluency Assessment & Juz Amma (30th Juz) Memorization",
        topics: [
          "Initial Tajweed & memory pace evaluation during the trial week",
          "Memorizing short Surahs of Juz Amma with Makharij precision",
          "Establishing daily Sabaq (new lines) and Sabaqi (current Juz review) habits",
        ],
      },
      {
        moduleNumber: "Stage 2",
        title: "Juz Tabarak (29th Juz) & Selected High-Virtue Surahs",
        topics: [
          "Memorization of Surah Al-Mulk, Al-Qalam, Al-Muzzammil, and Juz 29",
          "Key Surahs including Surah Al-Kahf, Surah Yaseen, Ar-Rahman, and Al-Waqi'ah",
          "Introducing structured weekly Manzil (cumulative revision) cycles",
        ],
      },
      {
        moduleNumber: "Stage 3",
        title: "Progressive Multi-Juz or Full Quran Hifz Track",
        topics: [
          "Customized daily line/page targets matched to school or work schedules",
          "Mutashabihat (similar-sounding verses) differentiation techniques",
          "Monthly comprehensive Juz testing and parent/student progress reports",
        ],
      },
    ],
    teacherApproach:
      "Every Hifz class is divided into three clear segments: 1) Reciting the new Sabaq after correcting pronunciation with the tutor, 2) Reciting Sabaqi (the last 5–7 lessons), and 3) Reciting Manzil (assigned older Juz portion) so nothing is forgotten.",
    safeguardingNote:
      "We never pressure children with unrealistic targets. Pacing is adjusted collaboratively with parents to ensure joyful, stress-free retention.",
    faqs: [
      {
        question: "Can my child do Hifz online while attending regular school?",
        answer:
          "Yes! Most of our Hifz students attend regular school. Our 5-days-a-week plan provides a steady daily routine of 30–45 minutes before or after school hours.",
      },
      {
        question: "How do you prevent students from forgetting older memorized Surahs?",
        answer:
          "We strictly enforce the three-part Sabaq, Sabaqi, and Manzil method. A student does not move forward to new verses if their recent revision (Sabaqi) or older revision (Manzil) needs strengthening.",
      },
      {
        question: "Can adults join the Hifz program for specific Surahs only?",
        answer:
          "Absolutely. Many adult learners enroll to memorize Juz Amma, Surah Al-Baqarah, Surah Al-Kahf, or Surah Yaseen at a comfortable pace.",
      },
    ],
    relatedCourses: ["tajweed", "islamic-studies", "arabic"],
    relatedGuideSlug: "how-long-to-memorize-quran",
    relatedGuideTitle: "How Long Does It Take to Memorize the Quran (Hifz) Online?",
  },
  {
    slug: "islamic-studies",
    title: "Online Islamic Studies & Tarbiyah Course for Kids, Teens & Families",
    shortTitle: "Islamic Studies & Tarbiyah",
    metaTitle: "Online Islamic Studies & Tarbiyah Classes for Kids & Teens",
    metaDescription:
      "Comprehensive online Islamic Studies and Tarbiyah classes at Al Kahaf Academy. Learn Salah, Duas, Seerah, Aqeedah, Fiqh, and Islamic manners with qualified teachers.",
    heroBadge: "Character & Deen • Kids, Teens & Families",
    heroSubtitle:
      "Nurture authentic Islamic knowledge, daily Sunnah habits, Salah perfection, and noble character (Tarbiyah) in an engaging online environment.",
    overview:
      "Beyond reciting the Quran, Muslim children and youth growing up in the UK, USA, Canada, Australia, Europe, and worldwide need a clear, loving understanding of their faith. Our Islamic Studies & Tarbiyah program covers essential Aqeedah (beliefs), Fiqh of Salah and purification, prophetic Seerah, daily Masnoon Duas, Hadith, and practical Islamic manners.",
    whoIsItFor: [
      "Muslim children and teenagers living in Western or global communities",
      "Parents who want structured Islamic Tarbiyah alongside Quran recitation",
      "New Muslims and adults seeking a clear foundation in Salah, Wudu, and essential Fiqh",
      "Students who want interactive lessons on the Life of Prophet Muhammad (PBUH)",
    ],
    prerequisites:
      "None. Lessons are taught in clear English (with Urdu/Arabic support available) and adapted by age group.",
    durationAndFormat: {
      sessionLength: "30 to 45 minutes per live session",
      frequency: "2, 3, or 5 days per week (can be combined with Quran classes)",
      mode: "100% Online Live via Zoom or Google Meet",
      startingPrice: "From $25/month",
      priceNumber: "25",
    },
    learningOutcomes: [
      "Understand the Five Pillars of Islam and Six Articles of Faith (Aqeedah) with clarity",
      "Perform Wudu and the 5 daily obligatory prayers (Salah) accurately with meaning",
      "Memorize and apply essential daily Masnoon Duas and short Prophetic Hadiths",
      "Draw real-life lessons from the Seerah of Prophet Muhammad (PBUH) and the Companions",
      "Practice Islamic etiquette (Adab) towards parents, teachers, neighbors, and society",
    ],
    curriculum: [
      {
        moduleNumber: "Module 1",
        title: "Aqeedah (Foundations of Faith) & Knowing Allah",
        topics: [
          "The Six Articles of Faith explained for young minds and adults",
          "Understanding Allah's Beautiful Names (Asma ul-Husna)",
          "Love for the Quran and the Sunnah in daily life",
        ],
      },
      {
        moduleNumber: "Module 2",
        title: "Fiqh of Taharah (Purification) & Salah (Prayer)",
        topics: [
          "Step-by-step Wudu, Ghusl, and Tayammum rules",
          "Complete Salah training: positions, recitations, Tashahhud, and Duas",
          "Understanding Ramadan fasting, Zakat basics, and Eid traditions",
        ],
      },
      {
        moduleNumber: "Module 3",
        title: "Prophetic Seerah & Stories of the Prophets",
        topics: [
          "Life of Prophet Muhammad (PBUH) in Makkah and Madinah",
          "Inspiring stories of the Prophets mentioned in the Holy Quran",
          "Lives of the Rightly Guided Caliphs and noble Companions",
        ],
      },
      {
        moduleNumber: "Module 4",
        title: "Daily Masnoon Duas, Hadith & Islamic Tarbiyah (Manners)",
        topics: [
          "40 essential daily Duas (waking, eating, traveling, entering mosque/home)",
          "Short authentic Hadiths on honesty, kindness, patience, and gratitude",
          "Respecting parents, digital responsibility, and building Muslim identity",
        ],
      },
    ],
    teacherApproach:
      "Teachers weave storytelling, interactive Q&A, and practical application into every class so students don't just memorize facts—they love practicing their Deen.",
    safeguardingNote:
      "Curriculum is age-appropriate, compassionate, and aligned with mainstream Sunni scholarship, with full parent visibility.",
    faqs: [
      {
        question: "Can Islamic Studies be combined with regular Quran Tajweed classes?",
        answer:
          "Yes! Many families dedicate 20 minutes of each session to Quran recitation/Tajweed and 10–15 minutes to Islamic Studies, Duas, and Salah training.",
      },
      {
        question: "What language is used to teach Islamic Studies?",
        answer:
          "Classes are primarily taught in fluent English so children and teens in the UK, USA, Canada, Australia, and Europe can ask questions comfortably. Urdu and Arabic explanations are also available.",
      },
    ],
    relatedCourses: ["noorani-qaida", "tajweed", "arabic"],
    relatedGuideSlug: "how-online-quran-classes-work",
    relatedGuideTitle: "How 1-on-1 Online Quran Classes Work for Kids and Adults",
  },
  {
    slug: "arabic",
    title: "Online Quranic Arabic Course — Understand the Language of the Quran",
    shortTitle: "Quranic Arabic Language",
    metaTitle: "Online Quranic Arabic Course — Vocabulary & Grammar for All Ages",
    metaDescription:
      "Learn Quranic Arabic online at Al Kahaf Academy. Understand high-frequency Quranic words, root letters, Nahu & Sarf basics, and verse meanings in live 1-on-1 classes.",
    heroBadge: "Quranic Understanding • Kids & Adults",
    heroSubtitle:
      "Unlock the direct meaning of the Holy Quran during Salah and Tilawah by mastering high-frequency Quranic vocabulary, root words, and essential Arabic grammar.",
    overview:
      "Our Online Quranic Arabic Language course bridges the gap between reciting the Quran and understanding its divine message. Rather than focusing on unrelated colloquial phrases, this structured curriculum focuses on the vocabulary, root patterns (Sarf), and sentence structures (Nahu) that appear most frequently across the Holy Quran.",
    whoIsItFor: [
      "Students who can read the Quran and want to understand what they recite in Salah",
      "Adults and teens seeking a structured, practical introduction to Arabic grammar (Nahu & Sarf)",
      "Hifz and Tajweed students who want word-by-word comprehension to strengthen retention",
      "Children ready to build an early foundation in Arabic vocabulary and reading comprehension",
    ],
    prerequisites:
      "Basic ability to read Arabic script with vowels (Noorani Qaida level or above).",
    durationAndFormat: {
      sessionLength: "30 to 45 minutes per live session",
      frequency: "2, 3, or 5 days per week",
      mode: "100% Online Live 1-on-1 via Zoom or Google Meet",
      startingPrice: "From $25/month",
      priceNumber: "25",
    },
    learningOutcomes: [
      "Recognize the top 300–500 high-frequency words that make up over 70% of Quranic vocabulary",
      "Understand the 3-letter Arabic root system and how words derive their meanings",
      "Identify nouns (Ism), verbs (Fi'l), and particles (Harf) in Quranic verses",
      "Translate and reflect on Juz Amma Surahs and daily Salah recitations word-by-word",
      "Build foundational reading comprehension of classical Arabic texts",
    ],
    curriculum: [
      {
        moduleNumber: "Module 1",
        title: "High-Frequency Quranic Vocabulary & Salah Comprehension",
        topics: [
          "Word-by-word meaning of Surah Al-Fatihah and daily Salah adhkar",
          "Pronouns, demonstratives, prepositions, and common Quranic nouns",
          "Understanding the top 100 most repeated words in the Holy Quran",
        ],
      },
      {
        moduleNumber: "Module 2",
        title: "Foundational Arabic Grammar (Al-Nahu Basics)",
        topics: [
          "Distinguishing Ism (Noun), Fi'l (Verb), and Harf (Particle)",
          "Gender, singular/dual/plural forms, and definite vs. indefinite nouns",
          "Nominal sentences (Jumlah Ismiyyah) and verbal sentences (Jumlah Fi'liyyah)",
        ],
      },
      {
        moduleNumber: "Module 3",
        title: "Arabic Morphology & Root Patterns (Al-Sarf Basics)",
        topics: [
          "Understanding the triliteral root system (Fa-Ayn-Lam)",
          "Past tense (Madi), present/future tense (Mudari'), and command (Amr) verbs",
          "Active and passive participles in Quranic context",
        ],
      },
      {
        moduleNumber: "Module 4",
        title: "Applied Juz Amma & Selected Surah Translation",
        topics: [
          "Word-by-word grammatical and meaning analysis of Juz Amma Surahs",
          "Exploring key passages from Surah Al-Baqarah, Yaseen, and Al-Kahf",
          "Connecting linguistic nuances to deeper Tadabbur (reflection)",
        ],
      },
    ],
    teacherApproach:
      "Lessons use visual root-word charts, interactive Mushaf word-by-word breakdowns, and immediate application on real Quranic verses.",
    safeguardingNote:
      "Taught 1-on-1 at your pace with clear worksheets and no overwhelming rote grammar drills.",
    faqs: [
      {
        question: "Is this conversational Arabic or Quranic Arabic?",
        answer:
          "This course focuses specifically on Quranic and Classical Arabic (Fusha) so you can understand the Holy Quran, Salah, and Hadith directly.",
      },
      {
        question: "Do I need prior grammar knowledge to join?",
        answer:
          "No prior grammar knowledge is needed. As long as you can read basic Arabic letters and vowels, our teachers guide you step by step from beginner level.",
      },
    ],
    relatedCourses: ["tajweed", "hifz", "islamic-studies"],
    relatedGuideSlug: "how-to-learn-quran-with-tajweed",
    relatedGuideTitle: "How to Learn Quran with Tajweed Online: A Step-by-Step Guide",
  },
  {
    slug: "adults",
    title: "Online Quran Classes for Adults & Sisters — Private 1-on-1 Learning",
    shortTitle: "Adult & Sisters Program",
    metaTitle: "Online Quran Classes for Adults & Sisters — 1-on-1 Flexible Timings",
    metaDescription:
      "Private 1-on-1 online Quran classes for adults, working professionals, and sisters at Al Kahaf Academy. Learn Qaida, Tajweed, Hifz, or Islamic Studies with male or female tutors.",
    heroBadge: "Private 1-on-1 • Flexible 24/7 Schedule",
    heroSubtitle:
      "It is never too late to connect with the Book of Allah. Confidential, judgment-free 1-on-1 online classes designed around busy adult work and family schedules.",
    overview:
      "Many adults wish to improve their Quran recitation, correct their Tajweed, or learn to read Arabic from the beginning, but feel hesitant to join group classes. Our Adult & Elder Learning Program provides 100% private, one-on-one online sessions with compassionate male scholars for brothers and certified female tutors (Qariahs & Hafizas) for sisters.",
    whoIsItFor: [
      "Working professionals and parents needing early morning, late evening, or weekend slots",
      "Sisters seeking a dedicated, certified female Quran tutor in a private 1-on-1 setting",
      "Adult beginners and reverts starting from Noorani Qaida in a supportive environment",
      "Elders and lifelong learners wanting to refine Tajweed or memorize selected Surahs",
    ],
    prerequisites:
      "None. Your curriculum is 100% customized during your free evaluation session—from absolute beginner Qaida to advanced Tajweed and Hifz.",
    durationAndFormat: {
      sessionLength: "30 to 45 minutes per live session",
      frequency: "2, 3, or 5 days per week (with easy rescheduling)",
      mode: "Private 1-on-1 Online via Zoom or Google Meet",
      startingPrice: "From $25/month",
      priceNumber: "25",
    },
    learningOutcomes: [
      "Learn in a 100% confidential, judgment-free 1-on-1 classroom at your own comfort level",
      "Build accurate Makharij and Tajweed habits without feeling rushed",
      "Perfect the recitation of Surah Al-Fatihah and Surahs recited in daily Salah",
      "Understand essential meanings, Duas, and practical Fiqh relevant to everyday life",
      "Maintain consistent spiritual progress with flexible makeup classes when work or travel arises",
    ],
    curriculum: [
      {
        moduleNumber: "Track A",
        title: "Foundation Track (For Adult Beginners & Reverts)",
        topics: [
          "Accelerated adult-friendly Noorani Qaida and Arabic phonetics",
          "Reading short Surahs and perfecting daily Salah recitations",
          "Essential Fiqh of purification, prayer, and daily adhkar",
        ],
      },
      {
        moduleNumber: "Track B",
        title: "Tajweed Correction & Fluent Tilawah Track",
        topics: [
          "Identifying and correcting long-standing pronunciation habits",
          "Practical application of Noon/Meem Sakinah, Madd, and Waqf rules",
          "Guided Mushaf completion with Tarteeel and confidence",
        ],
      },
      {
        moduleNumber: "Track C",
        title: "Part-Time Adult Hifz & Quranic Comprehension Track",
        topics: [
          "Memorizing Juz Amma, Surah Al-Mulk, Surah Yaseen, and Surah Al-Kahf",
          "Structured revision plans designed for busy work schedules",
          "Word-by-word meaning and reflection on memorized Surahs",
        ],
      },
    ],
    teacherApproach:
      "Our instructors treat adult learners with the utmost respect, patience, and encouragement. Sessions are scheduled around your time zone with flexible rescheduling whenever needed.",
    safeguardingNote:
      "Sisters are taught exclusively by qualified female teachers in private 1-on-1 online sessions.",
    faqs: [
      {
        question: "Are the classes really 1-on-1, or will I be placed in a group?",
        answer:
          "All adult classes are strictly 1-on-1 between you and your tutor, ensuring complete privacy and personalized pacing.",
      },
      {
        question: "What if my work schedule changes or I have to travel?",
        answer:
          "We offer full scheduling flexibility. Simply message your coordinator on WhatsApp in advance to adjust your slot or arrange a makeup session.",
      },
      {
        question: "Do you have female teachers for sisters?",
        answer:
          "Yes, we have a dedicated team of certified female Qariahs and Hafizas available 24/7 for sisters.",
      },
    ],
    relatedCourses: ["noorani-qaida", "tajweed", "arabic"],
    relatedGuideSlug: "how-to-choose-a-quran-teacher",
    relatedGuideTitle: "How to Choose a Qualified Online Quran Teacher (Male & Female Tutors)",
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return COURSES_DATA.find((course) => course.slug === slug);
}
