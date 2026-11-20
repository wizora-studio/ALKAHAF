import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PagesHero from "@/components/sections/pageshero";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { TrustStrip, ProgramCards, GoldDivider } from "@/components/sections/landing-page-sections";
import { FaqAccordion } from "@/components/sections/landing-faq";
import { getDictionary } from "@/lib/dictionary";
import { getCourseBySlug } from "@/lib/courses-data";
import {
  Breadcrumbs,
  CourseJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  Check,
  Clock,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Globe,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Quran Classes Italy",
  description:
    "Live 1-on-1 online Quran classes for families in Italy, Tajweed, Hifz & Noorani Qaida with certified male & female teachers, after-school timings in CET/CEST. Start a free 3-day trial.",
  path: "/online-quran-classes-italy",
  keywords: [
    "online Quran classes Italy",
    "Quran teacher Italy",
    "online Quran classes for kids Italy",
    "female Quran teacher Italy",
    "online Hifz classes Italy",
    "Quran classes Rome",
    "Quran classes Milan",
    "Al Kahaf Academy",
  ],
});

const IT_FAQS = [
  {
    question: "What time are online Quran classes in Italy?",
    answer:
      "Classes are scheduled in Italian local time, CET in winter and CEST in summer, so your slot stays the same for your family all year round, including when the clocks change in March and October. Most Italian families choose after-school slots between 3:30pm and 7:00pm, with evening and weekend slots also available, 7 days a week.",
  },
  {
    question: "Can my daughter learn with a female Quran teacher in Italy?",
    answer:
      "Yes. Girls and sisters in Italy can request a certified female teacher (Qariah or Hafiza) for every class. All lessons are live 1-on-1 and private, and parents are welcome to observe any session.",
  },
  {
    question: "How much do online Quran classes cost in Italy?",
    answer:
      "Plans are $25/month for 2 days a week, $35/month for 3 days, and $45/month for 5 days, with a free 3-day trial first. You can pay in euros (€ EUR) by bank transfer or card, as well as in USD.",
  },
  {
    question: "Do classes run during Italian school holidays?",
    answer:
      "Yes, classes run all year, and your schedule is flexible. Italian schools break for a long summer holiday from mid-June to mid-September, with shorter breaks at Christmas and Easter. Families can pause, reschedule, or arrange extra revision classes around the school holidays and Ramadan. Just message your coordinator in advance.",
  },
  {
    question: "Is there a free trial class before we enrol?",
    answer:
      "Yes. Every new Italian student starts with a free 30-minute live trial class with a qualified teacher. It checks the student's current level, lets your child meet the teacher, and agrees the best days and times, with no payment taken.",
  },
];

const IT_PROGRAM_SLUGS = ["noorani-qaida", "tajweed", "hifz", "arabic"];

const IT_TIMINGS = [
  {
    title: "After School",
    timing: "3:30 PM – 7:00 PM (Italian time)",
    desc: "The most popular slots for school-age children, straight after school, before dinner and homework.",
  },
  {
    title: "Evenings",
    timing: "7:00 PM – 9:30 PM (Italian time)",
    desc: "For working adults, older students, and families who prefer a later slot.",
  },
  {
    title: "Weekends",
    timing: "Saturday & Sunday, flexible slots",
    desc: "Weekend classes for busy school weeks, including longer Hifz and Tajweed sessions.",
  },
  {
    title: "Mornings",
    timing: "Flexible morning slots (Italian time)",
    desc: "For homeschooling families, younger children, and adults free during the day.",
  },
];

export default async function OnlineQuranClassesItalyPage() {
  const dict = await getDictionary();
  const itCourses = IT_PROGRAM_SLUGS.map((slug) =>
    getCourseBySlug(slug),
  ).filter(Boolean);

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <CourseJsonLd
        course={{
          name: "Online Quran Classes Italy",
          description:
            "Live 1-on-1 online Quran classes for families in Italy, Tajweed, Hifz & Noorani Qaida with certified male & female teachers, after-school timings in CET/CEST.",
          url: "/online-quran-classes-italy",
          price: "25",
        }}
      />
      <FAQPageJsonLd faqs={IT_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[{ name: "Online Quran Classes Italy", href: "/online-quran-classes-italy" }]}
      />

      <PagesHero
        title="Online Quran Classes in Italy"
        description="Live 1-on-1 Quran lessons for Muslim families in Italy, Tajweed, Hifz and Noorani Qaida with certified male & female teachers, at after-school times that fit Italian family life."
        imageSrc="/images/online-quran-students-fair.jpg"
        imageAlt="Online Quran Classes Italy, Al Kahaf Academy"
        badge={{
          text: "For Families Across Italy",
          icon: Globe,
        }}
        primaryAction={{
          text: "Book 3-Day Free Trial",
          href: "/free-trial",
        }}
        secondaryAction={{
          text: "View Monthly Fee Plans",
          href: "/pricing",
        }}
      />
      <TrustStrip />

      {/* Why Italy families choose Al Kahaf */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                Quran Learning, On Italian Time
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
                Built Around Italian Family Life
              </h2>
              <GoldDivider align="left" />
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Al Kahaf Academy teaches students across Italy (from Rome and Milan to Naples, Turin, Bologna and Florence) in live 1-on-1 classes that fit around the Italian school day. Your child learns with one dedicated teacher, at the same Italian time every week, with lessons in clear English (and Urdu or Arabic where the family prefers).
              </p>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Many Italian families tell us the hardest part of Quran learning is finding a qualified teacher locally, especially outside Rome and Milan, and especially a female teacher for daughters. Our live online classes solve that: the same certified teacher every week, at a time that fits around school, homework and family life. Parents receive monthly progress updates, and every class is open for a parent to observe.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                What Italian Families Get
              </h3>
              <ul className="space-y-3">
                {[
                  "After-school and weekend slots in Italian time (CET/CEST), 7 days a week",
                  "Certified male & female teachers, female Qariahs and Hafizas for girls and sisters",
                  "A free 30-minute trial class before you enrol, with no payment taken",
                  "Monthly progress reports on Tajweed, fluency and memorisation",
                  "Pay in euros (€ EUR) by bank transfer or card, as well as in USD",
                ].map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#5C4A3E] font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Italian timings card */}
          <aside className="lg:col-span-1">
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EAE3D6] shadow-[0_8px_30px_rgba(197,160,89,0.12)] ring-1 ring-[#C5A059]/15 space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A685B]">
                  Class Timings, Italian Time
                </span>
                <div className="text-3xl font-serif font-bold text-[#2D1C13] mt-1">
                  From $25/month
                </div>
                <p className="text-xs text-[#7A685B] mt-1">
                  Payable in € EUR • Includes 3-Day Free Trial • No long-term contract
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-[#EAE3D6] text-sm">
                {IT_TIMINGS.map((slot) => (
                  <div key={slot.title} className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#2D1C13]">{slot.title}</p>
                      <p className="text-[#9F7A38] font-semibold text-xs">
                        {slot.timing}
                      </p>
                      <p className="text-[#5C4A3E]">{slot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white bg-[#C5A059] hover:bg-[#B38F46] transition-all shadow-md"
              >
                <span>Book 3-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Programs suited to Italian learners */}
      <ProgramCards
        courses={itCourses}
        eyebrow="Programmes for Italian Learners"
        title="The Right Programme for Every Italian Student"
        subtitle="Whether your child is starting with the Arabic alphabet after school, a teenager working towards Hifz, or an adult returning to the Quran. There is a structured path, all taught live 1-on-1."
      />

      {/* Safeguarding for Italian parents */}
      <section className="py-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3 hover:border-[#C5A059]/50 hover:shadow-[0_16px_35px_rgba(197,160,89,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F5EEDD] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Safe Learning for Your Children
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Every class is a private 1-on-1 session, no group strangers,
              no public chat. Parents can sit in on any lesson, and monthly
              progress updates keep you in the loop. Girls learn with
              certified female teachers whenever the family prefers.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3 hover:border-[#C5A059]/50 hover:shadow-[0_16px_35px_rgba(197,160,89,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F5EEDD] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Qualified Teachers, Real Progress
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Our male and female tutors are certified scholars (Hafiz &amp;
              Qari) with years of teaching experience. Lessons follow a
              structured curriculum (Noorani Qaida, Tajweed, Hifz and
              Quranic Arabic) with regular assessments so progress is
              visible, not guessed.
            </p>
            <div className="pt-2">
              <Link
                href="/teachers"
                className="text-sm font-bold text-[#9F7A38] hover:underline"
              >
                Read about our Teacher Qualifications &amp; Selection Standards
                →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Italian FAQs (visible HTML matching FAQPage schema) */}
      <FaqAccordion faqs={IT_FAQS} eyebrow="Italian Families Ask" title="Frequently Asked Questions, Italian Classes" />

      {/* Learning for kids, sisters or adults? */}
      <section className="py-12 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 text-center space-y-5">
          <h2 className="text-2xl font-serif font-bold text-[#2D1C13]">
            Learning for Kids, Sisters or Adults?
          </h2>
          <GoldDivider align="center" />
          <p className="text-sm sm:text-base text-[#5C4A3E]">Every class is live and 1-on-1. Choose the page made for your learner:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <Link
                  key="/quran-classes-for-kids"
                  href="/quran-classes-for-kids"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-sm font-bold text-[#9F7A38] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all"
                >
                  Quran Classes for Kids
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  key="/quran-classes-for-sisters"
                  href="/quran-classes-for-sisters"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-sm font-bold text-[#9F7A38] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all"
                >
                  Quran Classes for Sisters
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  key="/quran-classes-for-adults"
                  href="/quran-classes-for-adults"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-sm font-bold text-[#9F7A38] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all"
                >
                  Quran Classes for Adults
                  <ArrowRight className="w-4 h-4" />
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
