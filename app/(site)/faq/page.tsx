import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PagesHero from "@/components/sections/pageshero";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { Breadcrumbs, ENTITY_STATEMENT, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { HelpCircle, ArrowRight, BookOpen, Clock, CreditCard, Users } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Frequently Asked Questions — Online Quran Classes, Tuition & Free Trial",
  description:
    "Find answers to common questions about Al Kahaf Academy's live 1-on-1 online Quran classes, 3-day free trial, certified male & female teachers, pricing plans, and flexible scheduling.",
  path: "/faq",
  keywords: [
    "Online Quran classes FAQ",
    "Al Kahaf Academy FAQ",
    "Online Quran tuition questions",
    "Quran classes free trial questions",
    "Female Quran tutor FAQ",
  ],
});

interface FaqCategory {
  id: string;
  title: string;
  subtitle: string;
  items: { question: string; answer: string }[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "general-admissions",
    title: "General & Free Trial Questions",
    subtitle: "How our 1-on-1 online Quran academy and 3-day free trial work.",
    items: [
      {
        question: "What is the official website of Al Kahaf Academy?",
        answer: `${ENTITY_STATEMENT} We provide live 1-on-1 online Quran, Tajweed, Hifz, Arabic, and Islamic Studies classes worldwide via Zoom and Google Meet.`,
      },
      {
        question: "How does the 3-day free trial work?",
        answer:
          "After you submit our quick registration form or message us on WhatsApp (+92 313 1491192), our academic coordinator schedules three 30-minute 1-on-1 sessions with a certified tutor. No credit card is required during the trial.",
      },
      {
        question: "What is the minimum age to enroll a child?",
        answer:
          "Children can begin our Foundational Noorani Qaida program from age 4. Our tutors use screen-shared colorful Qaida lessons, phonetic repetition, and short interactive activities tailored to young learners.",
      },
      {
        question: "Do you teach adult beginners and sisters?",
        answer:
          "Yes. We offer private 1-on-1 Quran and Tajweed classes for adult brothers and sisters of all backgrounds, including complete beginners and reverts.",
      },
    ],
  },
  {
    id: "courses-curriculum",
    title: "Courses, Tajweed & Hifz Curriculum",
    subtitle: "Questions about Noorani Qaida, Tajweed rules, Hifz memorization, and Islamic Studies.",
    items: [
      {
        question: "Should a beginner start with Noorani Qaida or direct Quran reading?",
        answer:
          "If a student does not yet recognize all 29 Arabic letters in joined forms or struggles with vowel signs (Harakat, Sukoon, Madd, and Shaddah), starting with Noorani Qaida is strongly recommended. It takes 3 to 6 months on average and builds permanent reading accuracy.",
      },
      {
        question: "How long does it take to learn Tajweed online?",
        answer:
          "Students who already read Arabic script typically master foundational Tajweed rules in 3 to 4 months (attending 3 to 5 classes per week) and achieve fluent applied recitation across the Mushaf within 6 to 12 months.",
      },
      {
        question: "How is the Online Hifz program structured?",
        answer:
          "Every Hifz student follows a 3-tier daily retention cycle: Sabaq (new daily verses), Sabaqi (recent Juz revision from the past 7–10 days), and Manzil (older memorized Juz rotation) to prevent forgetting.",
      },
      {
        question: "Is Islamic Studies and Tarbiyah included in regular Quran classes?",
        answer:
          "Yes. Every Quran session dedicates time to essential Masnoon Duas, Salah steps, Wudu, and Islamic manners (Akhlaq), or you can enroll in our dedicated Islamic Studies & Tarbiyah track.",
      },
    ],
  },
  {
    id: "teachers-safeguarding",
    title: "Teachers & Child Safeguarding",
    subtitle: "Information about our male and female Quran instructors and classroom safety.",
    items: [
      {
        question: "Do you provide female Quran teachers for sisters and girls?",
        answer:
          "Yes. We have a full team of certified female Quran teachers (Qariahs and Hafizas) available across morning, afternoon, evening, and weekend time slots for sisters and young girls.",
      },
      {
        question: "What qualifications do Al Kahaf Academy teachers hold?",
        answer:
          "Our instructors are certified Huffaz, Qaris, Qariahs, and Islamic scholars who have passed our 5-step vetting process: credential verification, live Makharij testing, English communication assessment, identity screening, and digital pedagogy training.",
      },
      {
        question: "Can we change our assigned teacher if needed?",
        answer:
          "Yes. If your child or family prefers a different teaching style or schedule, we arrange a tutor replacement promptly at no extra charge.",
      },
    ],
  },
  {
    id: "schedule-pricing",
    title: "Scheduling, Time Zones & Tuition Plans",
    subtitle: "How class timings, rescheduling, and monthly tuition plans work.",
    items: [
      {
        question: "Which countries and time zones do you serve?",
        answer:
          "Because our faculty operates 24/7, we teach students across the USA, Canada, UK, Europe, Australia, New Zealand, and the Middle East in their local afternoon, evening, or weekend hours.",
      },
      {
        question: "How much do online Quran classes cost per month?",
        answer:
          "Our monthly 1-on-1 plans start at $25/month for 2 days/week (8 classes/month), $35/month for 3 days/week (12 classes/month), and $50/month for 5 days/week (20 classes/month). Each session is 30 minutes.",
      },
      {
        question: "Do you offer family or sibling discounts?",
        answer:
          "Yes. Families enrolling two or more siblings—or students taking multiple weekly tracks—receive custom family tuition discounts.",
      },
      {
        question: "What happens if a student misses a scheduled class?",
        answer:
          "With advance notice to our academic coordinator, missed classes can be rescheduled for a make-up slot during the week or weekend.",
      },
    ],
  },
];

export default async function FaqHubPage() {
  const dict = await getDictionary();
  const allFaqs = FAQ_CATEGORIES.flatMap((cat) => cat.items);

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <FAQPageJsonLd faqs={allFaqs} />
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />

      <PagesHero
        title="Frequently Asked Questions"
        description="Complete answers about our 1-on-1 online Quran courses, 3-day free trial, certified male & female teachers, flexible time zones, and affordable monthly plans."
        imageSrc="/images/quran-rehal-still-life.jpg"
        imageAlt="Frequently Asked Questions — Al Kahaf Academy"
        badge={{
          text: "Parent & Student Help Center",
          icon: HelpCircle,
        }}
        primaryAction={{
          text: "Book 3-Day Free Trial",
          href: "/free-trial",
        }}
        secondaryAction={{
          text: "View Pricing Plans",
          href: "/pricing",
        }}
      />

      {/* Quick Category Jump Links */}
      <section className="py-12 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="#general-admissions"
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span className="font-bold text-sm text-[#2D1C13]">General &amp; Free Trial</span>
            </a>
            <a
              href="#courses-curriculum"
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <BookOpen className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span className="font-bold text-sm text-[#2D1C13]">Courses &amp; Curriculum</span>
            </a>
            <a
              href="#teachers-safeguarding"
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <Users className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span className="font-bold text-sm text-[#2D1C13]">Teachers &amp; Safety</span>
            </a>
            <a
              href="#schedule-pricing"
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <CreditCard className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span className="font-bold text-sm text-[#2D1C13]">Schedule &amp; Pricing</span>
            </a>
          </div>
        </div>
      </section>

      {/* Full Crawlable SSR FAQ Sections */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 space-y-16">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id} id={category.id} className="space-y-6 scroll-mt-28">
              <div className="border-b border-[#EAE3D6] pb-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1C13]">
                  {category.title}
                </h2>
                <p className="text-sm sm:text-base text-[#5C4A3E] mt-1">
                  {category.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE3D6] shadow-xs space-y-2.5"
                  >
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2D1C13]">
                      {item.question}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Helpful Internal Links Banner */}
      <section className="py-14 bg-white border-t border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1C13]">
              Ready to Experience a Free 1-on-1 Quran Class?
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A3E]">
              Explore our specialized <Link href="/courses" className="text-[#9F7A38] font-bold hover:underline">online Quran courses</Link>, meet our <Link href="/teachers" className="text-[#9F7A38] font-bold hover:underline">certified male &amp; female teachers</Link>, or book your 3-day free trial now.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-[#C5A059] hover:bg-[#B38F46] text-sm transition-all shadow-md"
            >
              <span>Start 3-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-[#2D1C13] bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] text-sm transition-all"
            >
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>Browse All Courses</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
