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
  title: "Online Quran Classes for Adults",
  description:
    "Live 1-on-1 online Quran classes for adults — start from the Arabic alphabet even if you never learned to read, or perfect Tajweed and memorise with Hifz. New Muslims welcome. Flexible evening & weekend timings. Free 3-day trial.",
  path: "/quran-classes-for-adults",
  keywords: [
    "online Quran classes for adults",
    "learn Quran online adults",
    "Quran classes for adults",
    "Quran classes for new Muslims",
    "learn Quran as an adult",
    "online Tajweed classes adults",
    "Quran classes for reverts",
    "Al Kahaf Academy",
  ],
});

const ADULTS_FAQS = [
  {
    question: "I never learned to read Arabic — can I really start as an adult?",
    answer:
      "Yes, absolutely. Many of our adult students start from zero. Your teacher begins with Noorani Qaida and the Arabic alphabet, one letter at a time, and moves at your pace — no classroom, no embarrassment, no rushing. Most complete beginners finish Noorani Qaida in 3 to 6 months with 3 to 5 classes a week, and then move on to reading the Quran itself.",
  },
  {
    question: "I am a new Muslim (revert) — where do I start?",
    answer:
      "Welcome — you start with the basics, and your teacher guides you step by step. The free trial class assesses your level, then your plan begins with the Arabic alphabet and the short Surahs and Duas you need for daily prayers, before moving on to full Quran reading and Tajweed. You learn privately, 1-on-1, at a pace that suits you.",
  },
  {
    question: "I work full time — when can I take classes?",
    answer:
      "Classes run 7 days a week, and you choose the time — early mornings before work, evenings after work, or weekends. Most working adults take 2 or 3 thirty-minute classes a week in the evening. If your shift pattern changes, you can move your slot with your coordinator.",
  },
  {
    question: "How long does it take an adult to learn to read the Quran?",
    answer:
      "It depends on your starting level and how many classes you take each week. Most complete beginners finish Noorani Qaida in 3 to 6 months with 3 to 5 classes per week, and then move on to reading the Quran itself. Your teacher sets a realistic pace after the free trial class and reviews progress with you every month.",
  },
  {
    question: "Can I memorise the Quran as an adult (Hifz)?",
    answer:
      "Yes. Adults follow the same Hifz track as younger students, with a structured revision plan that fits around work and family life. Your teacher sets a realistic daily portion and reviews it with you regularly — many adult students memorise Juz Amma and then keep going, one Surah at a time.",
  },
];

const ADULTS_PROGRAM_SLUGS = ["noorani-qaida", "tajweed", "hifz", "arabic"];

const ADULTS_TIMINGS = [
  {
    title: "Evenings",
    timing: "7:00 PM – 9:30 PM (your local time)",
    desc: "The most popular slots for working adults — after work, before bed, at the same time every week.",
  },
  {
    title: "Early Mornings",
    timing: "Flexible morning slots (your local time)",
    desc: "For early risers who prefer to learn before the working day begins.",
  },
  {
    title: "Weekends",
    timing: "Saturday & Sunday, flexible slots",
    desc: "Weekend classes for busy work weeks, including longer Hifz and Tajweed sessions.",
  },
  {
    title: "Flexible Daytime",
    timing: "Any time, 7 days a week",
    desc: "For shift workers, parents at home during the day, and students — pick the hours that fit your life.",
  },
];

export default async function QuranClassesForAdultsPage() {
  const dict = await getDictionary();
  const adultsCourses = ADULTS_PROGRAM_SLUGS.map((slug) =>
    getCourseBySlug(slug),
  ).filter(Boolean);

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <CourseJsonLd
        course={{
          name: "Online Quran Classes for Adults",
          description:
            "Live 1-on-1 online Quran classes for adults — start from the Arabic alphabet even if you never learned to read, or perfect Tajweed and memorise with Hifz. New Muslims welcome. Flexible evening & weekend timings.",
          url: "/quran-classes-for-adults",
          price: "25",
        }}
      />
      <FAQPageJsonLd faqs={ADULTS_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[{ name: "Quran Classes for Adults", href: "/quran-classes-for-adults" }]}
      />

      <PagesHero
        title="Online Quran Classes for Adults"
        description="Live 1-on-1 Quran lessons for adults — start from the Arabic alphabet, perfect your Tajweed, or memorise the Quran, at your own pace and at times that fit your work and family life."
        imageSrc="/images/program-hero-man.png"
        imageAlt="Online Quran Classes for Adults — Al Kahaf Academy"
        badge={{
          text: "For Adults of Every Level",
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

      {/* Why adults choose Al Kahaf */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                It Is Never Too Late to Learn the Quran
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
                Your Own Teacher, Your Own Pace, Your Own Time
              </h2>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Many adults never had the chance to learn the Quran as
                children — or they learned years ago and want to return to
                it properly. At Al Kahaf Academy you learn in a live 1-on-1
                class with one dedicated teacher, privately, with no
                classroom and no pressure. Your teacher starts exactly where
                you are, whether that is the Arabic alphabet or advanced
                Tajweed.
              </p>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                New Muslims are welcome, and so are adults returning after a
                long gap. Lessons are 30 minutes, at the same time every
                week, in clear English (and Urdu or Arabic where you
                prefer), and your plan is built around your goal — reading
                fluently, perfecting Tajweed, memorising, or understanding
                Quranic Arabic.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                What Adult Students Get
              </h3>
              <ul className="space-y-3">
                {[
                  "Private 1-on-1 classes with a certified male or female teacher of your choice",
                  "Evening, early-morning and weekend slots that fit around work and family",
                  "A free 30-minute trial class before you enrol, with no payment taken",
                  "Monthly progress reports on Tajweed, fluency and memorisation",
                  "A structured path from the alphabet to fluent reading, Tajweed and Hifz",
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

          {/* Adults timings card */}
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
                {ADULTS_TIMINGS.map((slot) => (
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

      {/* Programs suited to adults */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Programmes for Adults
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              The Right Programme for Wherever You Are Starting
            </h2>
            <p className="text-[#5C4A3E] text-base">
              Whether you are starting from the alphabet, returning to the
              Quran after years away, or aiming to memorise — there is a
              structured path, all taught live 1-on-1.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {adultsCourses.map((course: any) => (
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

      {/* Starting from zero and flexible learning for adults */}
      <section className="py-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Start from Zero, Without Pressure
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              There is no classroom to keep up with and nobody judging your
              level — just you and your teacher, in a private 1-on-1 class.
              Your teacher starts from the very basics if that is where you
              are, and builds your reading step by step until you are reading
              the Quran fluently, with Tajweed.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <GraduationCap className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Qualified Teachers, Real Progress
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Our male and female tutors are certified scholars (Hafiz &amp;
              Qari) with years of teaching adults. Lessons follow a
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

      {/* Adults FAQs (visible HTML matching FAQPage schema) */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
              <BookOpen className="w-3.5 h-3.5" />
              Adults Ask
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
              Frequently Asked Questions — Adult Classes
            </h2>
          </div>

          <div className="space-y-4">
            {ADULTS_FAQS.map((faq, idx) => (
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
            Adult classes run in every time zone — see the page for your
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
