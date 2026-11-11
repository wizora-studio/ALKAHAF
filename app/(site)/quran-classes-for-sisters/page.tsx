import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PagesHero from "@/components/sections/pageshero";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { getCourseBySlug } from "@/lib/courses-data";
import {
  Breadcrumbs,
  CourseJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  BookOpen,
  Check,
  Clock,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Globe,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Quran Classes for Sisters | Female Quran Teacher Online",
  description:
    "Live 1-on-1 Quran classes for sisters and girls with certified female Quran teachers (Qariah & Hafiza) — Tajweed, Hifz & Noorani Qaida, private and safe, flexible timings in your time zone. Free 3-day trial.",
  path: "/quran-classes-for-sisters",
  keywords: [
    "female Quran teacher online",
    "Quran classes for sisters",
    "Quran classes for girls",
    "female Quran tutor",
    "online Quran classes for women",
    "learn Quran online sisters",
    "female Hifz teacher online",
    "Al Kahaf Academy",
  ],
});

const SISTERS_FAQS = [
  {
    question: "Can my daughter learn with a female Quran teacher?",
    answer:
      "Yes. Girls of any age can request a certified female teacher (Qariah or Hafiza) for every class — just mention it on the registration form or by WhatsApp. All lessons stay private and 1-on-1, and parents are welcome to observe any session.",
  },
  {
    question: "Is it safe for my daughter to learn Quran online?",
    answer:
      "Yes. Every class is a private 1-on-1 session with one teacher — no group strangers, no public chat. Parents can sit in on any lesson, and you receive monthly progress updates on Tajweed, fluency and memorisation, so you always know how your daughter is doing.",
  },
  {
    question: "Are these classes only for girls, or can adult sisters join too?",
    answer:
      "Both. Sisters of every age learn with us — young girls after school, teenagers working on Tajweed and Hifz, and adult sisters and mothers, including those learning alongside their children. Each student gets her own teacher and her own pace, whatever her age or level.",
  },
  {
    question: "What can sisters study — Tajweed, Hifz, Arabic?",
    answer:
      "All four tracks are open to sisters: Noorani Qaida for complete beginners, Quran reading with Tajweed, Hifz memorisation with a structured revision plan, and Quranic Arabic. Your teacher sets the path after the free trial class, based on your level and your goal.",
  },
  {
    question: "What times are female teachers available?",
    answer:
      "Female teachers teach across all time zones, with morning, afternoon, evening and weekend slots available 7 days a week. Mention the times that suit you on the registration form and your coordinator will match you with a certified female teacher at your preferred time.",
  },
];

const SISTERS_PROGRAM_SLUGS = ["noorani-qaida", "tajweed", "hifz", "arabic"];

const SISTERS_TIMINGS = [
  {
    title: "After School",
    timing: "3:30 PM – 7:00 PM (your local time)",
    desc: "The most popular slots for school-age girls — straight after school, before dinner and homework.",
  },
  {
    title: "Mornings",
    timing: "Flexible morning slots (your local time)",
    desc: "For sisters free during the day, homeschooling families, and mothers learning while children are at school.",
  },
  {
    title: "Evenings",
    timing: "7:00 PM – 9:30 PM (your local time)",
    desc: "For working sisters, college students, and families who prefer a later slot.",
  },
  {
    title: "Weekends",
    timing: "Saturday & Sunday, flexible slots",
    desc: "Weekend classes for busy school and work weeks, including longer Hifz and Tajweed sessions.",
  },
];

export default async function QuranClassesForSistersPage() {
  const dict = await getDictionary();
  const sistersCourses = SISTERS_PROGRAM_SLUGS.map((slug) =>
    getCourseBySlug(slug),
  ).filter(Boolean);

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <CourseJsonLd
        course={{
          name: "Quran Classes for Sisters",
          description:
            "Live 1-on-1 Quran classes for sisters and girls with certified female Quran teachers (Qariah & Hafiza) — Tajweed, Hifz & Noorani Qaida, private and safe, flexible timings in your time zone.",
          url: "/quran-classes-for-sisters",
          price: "25",
        }}
      />
      <FAQPageJsonLd faqs={SISTERS_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[{ name: "Quran Classes for Sisters", href: "/quran-classes-for-sisters" }]}
      />

      <PagesHero
        title="Quran Classes for Sisters"
        description="Live 1-on-1 Quran lessons for sisters and girls with certified female teachers — Tajweed, Hifz and Noorani Qaida, in private classes at times that fit your day."
        imageSrc="/images/online-quran-students-fair.jpg"
        imageAlt="Quran Classes for Sisters — Al Kahaf Academy"
        badge={{
          text: "Certified Female Teachers Available",
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

      {/* Why sisters choose Al Kahaf */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                Quran Learning, With a Teacher You Are Comfortable With
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
                Learn with a Certified Female Teacher, 1-on-1
              </h2>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Every sister at Al Kahaf Academy learns in a live 1-on-1
                class with one dedicated teacher. Girls and women can request
                a certified female teacher (Qariah or Hafiza) for every
                lesson — so a daughter learns with a teacher her parents are
                comfortable with, and an adult sister learns with a teacher
                she is comfortable with.
              </p>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Lessons are 30 minutes, at the same time every week, in clear
                English (and Urdu or Arabic where the student prefers). Your
                teacher starts exactly where you are — from the Arabic
                alphabet for a complete beginner, or from Tajweed and
                memorisation for a student who already reads — and moves at
                your pace.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                What Sisters Get
              </h3>
              <ul className="space-y-3">
                {[
                  "Certified female teachers — Qariahs and Hafizas — available on request",
                  "Private 1-on-1 classes, never a group, with timings in your local time zone",
                  "A free 30-minute trial class before you enrol, with no payment taken",
                  "Monthly progress reports on Tajweed, fluency and memorisation",
                  "A safe class parents can observe — for daughters of any age",
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

          {/* Sisters timings card */}
          <aside className="lg:col-span-1">
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EAE3D6] shadow-sm space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A685B]">
                  Class Timings — Your Local Time
                </span>
                <div className="text-3xl font-serif font-bold text-[#2D1C13] mt-1">
                  From $25/month
                </div>
                <p className="text-xs text-[#7A685B] mt-1">
                  2, 3 or 5 Days a Week • Includes 3-Day Free Trial • No long-term contract
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-[#EAE3D6] text-sm">
                {SISTERS_TIMINGS.map((slot) => (
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

      {/* Programs suited to sisters */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Programmes for Sisters
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              The Right Programme for Every Sister
            </h2>
            <p className="text-[#5C4A3E] text-base">
              Whether you are starting with the Arabic alphabet, reading the
              Quran with Tajweed, or memorising Surahs — there is a structured
              path, all taught live 1-on-1 by a teacher you choose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sistersCourses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="p-7 rounded-3xl bg-white border border-[#EAE3D6] hover:border-[#C5A059] transition-all group space-y-3"
              >
                <span className="text-xs font-bold text-[#9F7A38]">
                  {course.durationAndFormat.startingPrice} •{" "}
                  {course.durationAndFormat.frequency}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors">
                  {course.shortTitle}
                </h3>
                <p className="text-sm text-[#5C4A3E] leading-relaxed">
                  {course.heroSubtitle}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9F7A38]">
                  Explore this course
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Female teachers and safety for sisters */}
      <section className="py-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Private, Safe and Comfortable
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Every class is a private 1-on-1 session — no group strangers,
              no public chat. Parents can sit in on any lesson for their
              daughter, and monthly progress updates keep the family in the
              loop. Sisters choose a male or a female teacher — the choice is
              yours, every time.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <GraduationCap className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Qualified Teachers, Real Progress
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Our female tutors are certified scholars (Hafiza &amp;
              Qariah) with years of teaching experience. Lessons follow a
              structured curriculum — Noorani Qaida, Tajweed, Hifz and
              Quranic Arabic — with regular assessments so progress is
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

      {/* Sisters FAQs (visible HTML matching FAQPage schema) */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
              <BookOpen className="w-3.5 h-3.5" />
              Sisters Ask
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
              Frequently Asked Questions — Sisters Classes
            </h2>
          </div>

          <div className="space-y-4">
            {SISTERS_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#EAE3D6] space-y-2"
              >
                <h3 className="text-lg font-serif font-bold text-[#2D1C13]">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning in your country? */}
      <section className="py-12 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 text-center space-y-3">
          <h2 className="text-2xl font-serif font-bold text-[#2D1C13]">
            Learning in Your Country?
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E]">
            Sisters classes run in every time zone — see the page for your
            country:{" "}
            <Link href="/online-quran-classes-uk" className="text-[#9F7A38] font-bold hover:underline">UK</Link>
            {", "}
            <Link href="/online-quran-classes-usa" className="text-[#9F7A38] font-bold hover:underline">USA</Link>
            {", "}
            <Link href="/online-quran-classes-canada" className="text-[#9F7A38] font-bold hover:underline">Canada</Link>
            {", "}
            <Link href="/online-quran-classes-australia" className="text-[#9F7A38] font-bold hover:underline">Australia</Link>
            {", "}
            <Link href="/online-quran-classes-europe" className="text-[#9F7A38] font-bold hover:underline">Europe</Link>
            {", "}
            <Link href="/online-quran-classes-germany" className="text-[#9F7A38] font-bold hover:underline">Germany</Link>
            {" or "}
            <Link href="/online-quran-classes-france" className="text-[#9F7A38] font-bold hover:underline">France</Link>
            .
          </p>
        </div>
      </section>

      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
