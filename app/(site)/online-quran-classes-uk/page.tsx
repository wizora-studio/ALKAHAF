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
  title: "Online Quran Classes UK",
  description:
    "Live 1-on-1 online Quran classes for families in the UK — Tajweed, Hifz & Noorani Qaida with certified male & female teachers, after-school timings in GMT/BST. Start a free 3-day trial.",
  path: "/online-quran-classes-uk",
  keywords: [
    "online Quran classes UK",
    "Quran teacher UK",
    "online Quran classes for kids UK",
    "female Quran teacher UK",
    "online Hifz classes UK",
    "Quran classes London",
    "Al Kahaf Academy",
  ],
});

const UK_FAQS = [
  {
    question: "What time are online Quran classes in the UK?",
    answer:
      "Classes are scheduled in UK local time, so your slot stays the same for your family all year round — including when the clocks change between GMT in winter and BST (British Summer Time) in summer. Most UK families choose after-school slots between 3:30pm and 7:00pm, with evening and weekend slots also available, 7 days a week.",
  },
  {
    question: "Can my daughter learn with a female Quran teacher in the UK?",
    answer:
      "Yes. Girls and sisters in the UK can request a certified female teacher (Qariah or Hafiza) for every class. All lessons are live 1-on-1 and private, and parents are welcome to observe any session.",
  },
  {
    question: "How much do online Quran classes cost in the UK?",
    answer:
      "Plans start from $25/month for 2 days a week, $35/month for 3 days, and $45/month for 5 days, with a free 3-day trial first. You can pay in pounds sterling (£ GBP) by bank transfer or card, as well as in USD.",
  },
  {
    question: "Do classes run during UK school holidays and half-term?",
    answer:
      "Yes, classes run all year, and your schedule is flexible. Families can pause, reschedule, or arrange extra revision classes around half-term, the summer holidays, and Ramadan — just message your coordinator in advance.",
  },
  {
    question: "Is there a free trial class before we enrol?",
    answer:
      "Yes. Every new UK student starts with a free 30-minute live trial class with a qualified teacher. It checks the student's current level, lets your child meet the teacher, and agrees the best days and times — with no payment taken.",
  },
];

const UK_PROGRAM_SLUGS = ["noorani-qaida", "tajweed", "hifz", "arabic"];

const UK_TIMINGS = [
  {
    title: "After School",
    timing: "3:30 PM – 7:00 PM (UK time)",
    desc: "The most popular slots for school-age children — straight after school, before dinner and homework.",
  },
  {
    title: "Evenings",
    timing: "7:00 PM – 9:30 PM (UK time)",
    desc: "For working adults, teens revising for GCSEs, and families who prefer a later slot.",
  },
  {
    title: "Weekends",
    timing: "Saturday & Sunday, flexible slots",
    desc: "Weekend classes for busy school weeks, including longer Hifz and Tajweed sessions.",
  },
  {
    title: "Mornings",
    timing: "Flexible morning slots (UK time)",
    desc: "For homeschooling families, younger children, and adults free during the day.",
  },
];

export default async function OnlineQuranClassesUkPage() {
  const dict = await getDictionary();
  const ukCourses = UK_PROGRAM_SLUGS.map((slug) => getCourseBySlug(slug)).filter(
    Boolean,
  );

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <CourseJsonLd
        course={{
          name: "Online Quran Classes UK",
          description:
            "Live 1-on-1 online Quran classes for families in the UK — Tajweed, Hifz & Noorani Qaida with certified male & female teachers, after-school timings in GMT/BST.",
          url: "/online-quran-classes-uk",
          price: "25",
        }}
      />
      <FAQPageJsonLd faqs={UK_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[{ name: "Online Quran Classes UK", href: "/online-quran-classes-uk" }]}
      />

      <PagesHero
        title="Online Quran Classes in the UK"
        description="Live 1-on-1 Quran lessons for British Muslim families — Tajweed, Hifz and Noorani Qaida with certified male & female teachers, at after-school times that fit UK life."
        imageSrc="/images/islamic-academy-hall.jpg"
        imageAlt="Online Quran Classes UK — Al Kahaf Academy"
        badge={{
          text: "For Families Across the UK",
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

      {/* Why UK families choose Al Kahaf */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                Quran Learning, On UK Time
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
                Built Around British Family Life
              </h2>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Al Kahaf Academy teaches students across the UK — from London
                and Birmingham to Manchester, Bradford, Leicester and smaller
                towns — in live 1-on-1 classes that fit around the British
                school day. Your child learns with one dedicated teacher, at
                the same UK time every week, with lessons in clear English
                (and Urdu or Arabic where the family prefers).
              </p>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Because classes are scheduled in UK local time, the clocks
                going forward or back between GMT and BST never moves your
                slot. Parents receive monthly progress updates, and every
                class is open for a parent to observe — so you always know
                exactly how your child is progressing.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                What UK Families Get
              </h3>
              <ul className="space-y-3">
                {[
                  "After-school and weekend slots in UK time (GMT/BST), 7 days a week",
                  "Certified male & female teachers — female Qariahs and Hafizas for girls and sisters",
                  "A free 30-minute trial class before you enrol, with no payment taken",
                  "Monthly progress reports on Tajweed, fluency and memorisation",
                  "Pay in pounds sterling (£ GBP) by bank transfer or card",
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

          {/* UK timings card */}
          <aside className="lg:col-span-1">
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EAE3D6] shadow-sm space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A685B]">
                  Class Timings — UK Time
                </span>
                <div className="text-3xl font-serif font-bold text-[#2D1C13] mt-1">
                  From $25/month
                </div>
                <p className="text-xs text-[#7A685B] mt-1">
                  Payable in £ GBP • Includes 3-Day Free Trial • No long-term contract
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-[#EAE3D6] text-sm">
                {UK_TIMINGS.map((slot) => (
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

      {/* Programs suited to UK learners */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Programmes for UK Learners
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              The Right Programme for Every UK Student
            </h2>
            <p className="text-[#5C4A3E] text-base">
              Whether your child is starting with the Arabic alphabet after
              school, a teenager preparing for Hifz alongside GCSEs, or an
              adult returning to the Quran — there is a structured path, all
              taught live 1-on-1.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ukCourses.map((course: any) => (
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

      {/* Safeguarding for UK parents */}
      <section className="py-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Safe Learning for Your Children
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Every class is a private 1-on-1 session — no group strangers,
              no public chat. Parents can sit in on any lesson, and monthly
              progress updates keep you in the loop. Girls learn with
              certified female teachers whenever the family prefers.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <GraduationCap className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Qualified Teachers, Real Progress
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Our male and female tutors are certified scholars (Hafiz &amp;
              Qari) with years of teaching experience. Lessons follow a
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

      {/* UK FAQs (visible HTML matching FAQPage schema) */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
              <BookOpen className="w-3.5 h-3.5" />
              UK Families Ask
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
              Frequently Asked Questions — UK Classes
            </h2>
          </div>

          <div className="space-y-4">
            {UK_FAQS.map((faq, idx) => (
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

      {/* Learning for kids, sisters or adults? */}
      <section className="py-12 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 text-center space-y-3">
          <h2 className="text-2xl font-serif font-bold text-[#2D1C13]">
            Learning for Kids, Sisters or Adults?
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E]">
            Every class is live and 1-on-1 — choose the page made for your
            learner:{" "}
            <Link href="/quran-classes-for-kids" className="text-[#9F7A38] font-bold hover:underline">Quran Classes for Kids</Link>
            {", "}
            <Link href="/quran-classes-for-sisters" className="text-[#9F7A38] font-bold hover:underline">Quran Classes for Sisters</Link>
            {" or "}
            <Link href="/quran-classes-for-adults" className="text-[#9F7A38] font-bold hover:underline">Quran Classes for Adults</Link>
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
