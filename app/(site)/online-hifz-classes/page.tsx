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
  Repeat,
  Layers,
  Target,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Hifz Classes — Memorize the Quran Online",
  description:
    "Live 1-on-1 online Hifz classes with certified Hafiz & Hafiza teachers — Sabaq, Sabqi & Manzil method, Juz Amma to full 30 Juz, for kids & adults. Start a free 3-day trial.",
  path: "/online-hifz-classes",
  keywords: [
    "online hifz classes",
    "quran memorization online",
    "online quran memorization",
    "memorize quran online",
    "hifz classes for kids",
    "hifz classes for adults",
    "online hifz classes for kids",
    "Al Kahaf Academy",
  ],
});

const HIFZ_FAQS = [
  {
    question: "How long does it take to memorize the whole Quran online?",
    answer:
      "It depends on your daily pace. A balanced school-friendly track of half a page a day, 5 days a week, completes all 30 Juz in about 3.5 to 4.5 years. An intensive track of one full page a day, 5 to 6 days a week, finishes in about 2.5 to 3 years. Starting with Juz Amma alone takes about 5 to 8 months at a gentle pace. Your teacher sets a realistic target with you in the free trial class — we never promise overnight results.",
  },
  {
    question: "What is the Sabaq, Sabqi and Manzil method?",
    answer:
      "It is the traditional three-part revision system used in Hifz schools for centuries. Sabaq is the new lesson — the verses you memorize today. Sabqi is the recent revision — the last 7 to 10 pages you go over again so they stay fresh. Manzil is the long-term rotation — older Juz you recite regularly so nothing is ever forgotten. Every Al Kahaf Hifz class is divided into these three parts, and a student does not move to new verses if their revision needs strengthening.",
  },
  {
    question: "Can my child do Hifz online while attending full-time school?",
    answer:
      "Yes. Most of our Hifz students attend regular school and take their live session before school or in the early evening, 3 to 5 days a week. The balanced track is designed around school life, with homework-friendly daily targets of half a page and regular Juz-level oral tests so parents can see real progress.",
  },
  {
    question: "Can adults memorize the Quran online, even starting from zero?",
    answer:
      "Yes. Adults can start with Juz Amma and selected Surahs such as Al-Mulk, Yaseen, Al-Kahf and Ar-Rahman, or work towards full Hifz at their own pace. If you cannot yet read fluently, your teacher begins with Tajweed and Nazra reading first, then moves you into memorization when your fluency is ready. There is no age limit for Hifz.",
  },
  {
    question: "How do you stop students forgetting what they memorized?",
    answer:
      "Forgetting happens when new memorization runs ahead of revision — so revision is built into every class, not left to chance. Each lesson covers the new Sabaq, the recent Sabqi and a Manzil portion of older Juz, and no student advances to a new Juz until the current one passes an error-free oral test. Monthly progress reports show parents exactly which Juz are strong and which need more revision.",
  },
  {
    question: "Is there a free trial Hifz class?",
    answer:
      "Yes. Every new Hifz student starts with a free 30-minute live trial class with a qualified Hafiz or Hafiza teacher. It checks your current reading fluency and memory pace, lets you meet the teacher, and agrees a realistic Hifz target and schedule — with no payment taken.",
  },
];

const HIFZ_TIMINGS = [
  {
    title: "Before School",
    timing: "After Fajr / early morning",
    desc: "Many Hifz students revise and learn new Sabaq in the early morning, when the mind is freshest — before school or work.",
  },
  {
    title: "After School",
    timing: "3:30 PM – 7:00 PM (your local time)",
    desc: "The most popular slots for school-age children — a focused Hifz session after school, before dinner and homework.",
  },
  {
    title: "Evenings",
    timing: "7:00 PM – 9:30 PM (your local time)",
    desc: "For working adults and older students who prefer a later slot.",
  },
  {
    title: "Weekends",
    timing: "Saturday & Sunday, longer sessions",
    desc: "Weekend classes for extra Sabaq and Manzil revision, including longer sessions for intensive-track students.",
  },
];

const HIFZ_TRACKS = [
  {
    name: "Juz Amma Track",
    pace: "3–5 lines a day, 3 days a week",
    time: "Juz Amma in about 5–8 months",
    desc: "The gentle start — short Surahs of the 30th Juz, ideal for young children, working adults, and anyone beginning memorization for the first time.",
  },
  {
    name: "Balanced School-Friendly Track",
    pace: "Half a page a day, 5 days a week",
    time: "About 5–6 Juz a year — full Quran in 3.5–4.5 years",
    desc: "The most popular track. Steady memorization alongside full-time school or work, with Sabaqi and Manzil revision keeping every Juz strong.",
  },
  {
    name: "Intensive Hifz Track",
    pace: "1 full page a day, 5–6 days a week",
    time: "About 10–12 Juz a year — full Quran in 2.5–3 years",
    desc: "For dedicated students who can commit daily. A full-time-style Hifz schedule with strict revision cycles and regular Juz testing.",
  },
];

export default async function OnlineHifzClassesPage() {
  const dict = await getDictionary();
  const hifzCourse = getCourseBySlug("hifz");

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <CourseJsonLd
        course={{
          name: "Online Hifz Classes",
          description:
            "Live 1-on-1 online Hifz classes with certified Hafiz & Hafiza teachers — Sabaq, Sabqi & Manzil method, Juz Amma to full 30 Juz, for kids & adults.",
          url: "/online-hifz-classes",
          price: "35",
        }}
      />
      <FAQPageJsonLd faqs={HIFZ_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[{ name: "Online Hifz Classes", href: "/online-hifz-classes" }]}
      />

      <PagesHero
        title="Online Hifz Classes — Memorize the Quran, Verse by Verse"
        description="Live 1-on-1 Hifz classes with certified Hafiz & Hafiza teachers — the traditional Sabaq, Sabqi & Manzil method, from Juz Amma to the full 30 Juz, at a pace that fits your life."
        imageSrc="/images/quran-rehal-still-life.jpg"
        imageAlt="Online Hifz Classes — Memorize the Quran Online, Al Kahaf Academy"
        badge={{
          text: "Juz Amma to Full 30 Juz",
          icon: Globe,
        }}
        primaryAction={{
          text: "Book 3-Day Free Trial",
          href: "/free-trial",
        }}
        secondaryAction={{
          text: "View Hifz Course Details",
          href: "/courses/hifz",
        }}
      />

      {/* The method */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                The Method That Makes Hifz Stick
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
                Sabaq, Sabqi &amp; Manzil — Revision Is the Method
              </h2>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Memorizing new verses is the easy part. Keeping them is the
                hard part — and it is where most self-taught Hifz fails.
                Every Al Kahaf Hifz class is divided into three parts, so
                revision is never left to chance and older Surahs never fade
                away unnoticed.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Target,
                  title: "Sabaq — New Lesson",
                  desc: "The new verses you memorize today, recited to your teacher with Tajweed correction on every line.",
                },
                {
                  icon: Repeat,
                  title: "Sabqi — Recent Revision",
                  desc: "The last 7 to 10 pages, recited again in every class so recent memorization becomes permanent.",
                },
                {
                  icon: Layers,
                  title: "Manzil — Long-Term Rotation",
                  desc: "Older Juz recited on a rotating cycle, so what you memorized months ago stays as strong as yesterday.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3"
                >
                  <step.icon className="w-7 h-7 text-[#C5A059]" />
                  <h3 className="text-lg font-serif font-bold text-[#2D1C13]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5C4A3E] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                What Hifz Students Get
              </h3>
              <ul className="space-y-3">
                {[
                  "A dedicated Hafiz or Hafiza teacher for every class — female Hafizas for girls and sisters",
                  "A free 30-minute trial class to check reading fluency and agree a realistic Hifz target",
                  "Daily Sabaq targets matched to school or work — never more than the student can retain",
                  "No advance to a new Juz until the current one passes an error-free oral test",
                  "Monthly progress reports on new memorization, revision strength and Tajweed",
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

          {/* Hifz timings card */}
          <aside className="lg:col-span-1">
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EAE3D6] shadow-sm space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A685B]">
                  Class Timings — Your Local Time
                </span>
                <div className="text-3xl font-serif font-bold text-[#2D1C13] mt-1">
                  From $35/month
                </div>
                <p className="text-xs text-[#7A685B] mt-1">
                  Hifz plans from $35/month • Includes 3-Day Free Trial • No long-term contract
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-[#EAE3D6] text-sm">
                {HIFZ_TIMINGS.map((slot) => (
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

      {/* Hifz tracks */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Realistic Timelines, Honest Targets
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              Three Hifz Tracks — Pick the Pace That Fits Your Life
            </h2>
            <p className="text-[#5C4A3E] text-base">
              How long Hifz takes depends entirely on how many lines you can
              memorize and retain each day. These are the timelines our
              teachers plan around — no overnight promises, just steady
              progress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {HIFZ_TRACKS.map((track) => (
              <div
                key={track.name}
                className="p-7 rounded-3xl bg-white border border-[#EAE3D6] space-y-3"
              >
                <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                  {track.name}
                </h3>
                <p className="text-sm font-bold text-[#9F7A38]">
                  {track.pace}
                </p>
                <p className="text-sm font-bold text-[#2D1C13]">
                  {track.time}
                </p>
                <p className="text-sm text-[#5C4A3E] leading-relaxed">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#5C4A3E] mt-8 max-w-3xl">
            Timelines assume consistent attendance and daily home revision of
            about 20 to 30 minutes. Your teacher reviews your pace every
            month and adjusts the target with you — speeding up when revision
            is strong, slowing down when it needs strengthening. Read the
            full guide:{" "}
            <Link
              href="/blog/how-long-to-memorize-quran"
              className="text-[#9F7A38] font-bold hover:underline"
            >
              How Long Does It Take to Memorize the Quran Online?
            </Link>
          </p>
        </div>
      </section>

      {/* Who Hifz is for */}
      <section className="py-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <GraduationCap className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Hifz for Kids &amp; Teens
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Children usually begin with Juz Amma, building memorization
              stamina with short Surahs before moving to longer ones. Classes
              are patient and encouraging — we never pressure children with
              unrealistic targets, and pacing is agreed with parents. Most
              school-age Hifz students take the balanced track alongside
              full-time school.
            </p>
            <div className="pt-2">
              <Link
                href="/quran-classes-for-kids"
                className="text-sm font-bold text-[#9F7A38] hover:underline"
              >
                Quran Classes for Kids →
              </Link>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Hifz for Adults &amp; Sisters
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Adults can memorize Juz Amma and selected Surahs — Al-Mulk,
              Yaseen, Al-Kahf, Ar-Rahman — or work towards full Hifz at their
              own pace. Sisters learn with qualified female Hafiza teachers
              in private 1-on-1 classes. If your reading fluency needs work
              first, your teacher begins with Tajweed and moves you into
              memorization when you are ready.
            </p>
            <div className="pt-2 space-x-4">
              <Link
                href="/quran-classes-for-sisters"
                className="text-sm font-bold text-[#9F7A38] hover:underline"
              >
                Quran Classes for Sisters →
              </Link>
              <Link
                href="/quran-classes-for-adults"
                className="text-sm font-bold text-[#9F7A38] hover:underline"
              >
                Quran Classes for Adults →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hifz course card */}
      {hifzCourse && (
        <section className="py-16 bg-[#FAF7F2] border-b border-[#EAE3D6]">
          <div className="max-w-4xl mx-auto px-5 sm:px-10">
            <Link
              href="/courses/hifz"
              className="block p-8 rounded-3xl bg-white border border-[#EAE3D6] hover:border-[#C5A059] transition-all group space-y-3"
            >
              <span className="text-xs font-bold text-[#9F7A38]">
                {hifzCourse.durationAndFormat.startingPrice} •{" "}
                {hifzCourse.durationAndFormat.frequency}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors">
                {hifzCourse.shortTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
                {hifzCourse.heroSubtitle}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9F7A38]">
                Explore the full Hifz course
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* Hifz FAQs (visible HTML matching FAQPage schema) */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
              <BookOpen className="w-3.5 h-3.5" />
              Hifz Students Ask
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
              Frequently Asked Questions — Hifz Classes
            </h2>
          </div>

          <div className="space-y-4">
            {HIFZ_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE3D6] space-y-2"
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
