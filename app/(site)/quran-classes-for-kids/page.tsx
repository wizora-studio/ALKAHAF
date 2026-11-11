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
  title: "Online Quran Classes for Kids",
  description:
    "Live 1-on-1 online Quran classes for kids ages 5–15 — Noorani Qaida, Tajweed & Hifz with patient certified teachers, female teachers for girls, after-school timings and monthly progress reports for parents. Free 3-day trial.",
  path: "/quran-classes-for-kids",
  keywords: [
    "online Quran classes for kids",
    "Quran classes for kids",
    "learn Quran for kids online",
    "Quran teacher for kids",
    "online Hifz classes for kids",
    "female Quran teacher for kids",
    "Noorani Qaida for kids",
    "Al Kahaf Academy",
  ],
});

const KIDS_FAQS = [
  {
    question: "What age should my child start learning the Quran?",
    answer:
      "Most children start between the ages of 4 and 7, once they can sit and focus for a 30-minute lesson. There is no strict minimum age — the free trial class assesses your child's level and attention span, and the teacher starts exactly where your child is, usually with Noorani Qaida and the Arabic alphabet. Older children and teenagers can start at any age too.",
  },
  {
    question: "Are online Quran classes safe for my child?",
    answer:
      "Yes. Every class is a private 1-on-1 session — no group strangers, no public chat, no camera sharing with anyone else. Parents can sit in on any lesson, and you receive monthly progress updates on Tajweed, fluency and memorisation, so you always know how your child is doing.",
  },
  {
    question: "Can my daughter learn with a female Quran teacher?",
    answer:
      "Yes. Girls can request a certified female teacher (Qariah or Hafiza) for every class — just mention it on the registration form or by WhatsApp. All lessons stay private and 1-on-1, and parents are welcome to observe any session.",
  },
  {
    question: "How long is each class, and how often should my child attend?",
    answer:
      "Each class is 30 minutes, and families choose 2, 3 or 5 days a week. Most parents start with 3 days a week after school — enough for steady progress without tiring a young child. You can change the frequency any time as your child grows.",
  },
  {
    question: "How will I know how my child is progressing?",
    answer:
      "You receive a monthly progress report covering Tajweed, reading fluency and memorisation, and the teacher gives feedback after the free trial class so you know your child's starting level and plan. Because every class is open for a parent to observe, you can also see the progress yourself, lesson by lesson.",
  },
];

const KIDS_PROGRAM_SLUGS = ["noorani-qaida", "tajweed", "hifz", "arabic"];

const KIDS_TIMINGS = [
  {
    title: "After School",
    timing: "3:30 PM – 7:00 PM (your local time)",
    desc: "The most popular slots for school-age children — straight after school, before dinner and homework.",
  },
  {
    title: "Evenings",
    timing: "7:00 PM – 9:00 PM (your local time)",
    desc: "For older children and teens, and families who prefer a later slot.",
  },
  {
    title: "Weekends",
    timing: "Saturday & Sunday, flexible slots",
    desc: "Weekend classes for busy school weeks, including longer Hifz and Tajweed sessions.",
  },
  {
    title: "Mornings",
    timing: "Flexible morning slots (your local time)",
    desc: "For homeschooling families and younger children who learn best in the morning.",
  },
];

const KIDS_AGE_PATH = [
  {
    age: "Ages 5–7",
    title: "Starting Out",
    desc: "Noorani Qaida and the Arabic alphabet, taught slowly and patiently — letter recognition, sounds and joining letters, with plenty of encouragement.",
  },
  {
    age: "Ages 8–12",
    title: "Reading with Tajweed",
    desc: "Nazra reading of the Quran with correct Tajweed rules, short Surahs, and daily Duas — the stage where fluent reading is built.",
  },
  {
    age: "Ages 13–15",
    title: "Tajweed & Hifz",
    desc: "Advanced Tajweed, longer Surahs, and Hifz memorisation with a structured revision plan that fits around school and exams.",
  },
];

export default async function QuranClassesForKidsPage() {
  const dict = await getDictionary();
  const kidsCourses = KIDS_PROGRAM_SLUGS.map((slug) =>
    getCourseBySlug(slug),
  ).filter(Boolean);

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <CourseJsonLd
        course={{
          name: "Online Quran Classes for Kids",
          description:
            "Live 1-on-1 online Quran classes for kids ages 5–15 — Noorani Qaida, Tajweed & Hifz with patient certified teachers, female teachers for girls, after-school timings and monthly progress reports for parents.",
          url: "/quran-classes-for-kids",
          price: "25",
        }}
      />
      <FAQPageJsonLd faqs={KIDS_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[{ name: "Quran Classes for Kids", href: "/quran-classes-for-kids" }]}
      />

      <PagesHero
        title="Online Quran Classes for Kids"
        description="Live 1-on-1 Quran lessons for children ages 5–15 — Noorani Qaida, Tajweed and Hifz with patient certified teachers, at after-school times that fit your family."
        imageSrc="/images/online-quran-students.jpg"
        imageAlt="Online Quran Classes for Kids — Al Kahaf Academy"
        badge={{
          text: "For Children Ages 5–15",
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

      {/* Why parents choose Al Kahaf for their kids */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                Quran Learning, Made for Children
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
                One Teacher, One Child, Full Attention
              </h2>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Every child at Al Kahaf Academy learns in a live 1-on-1
                class with one dedicated teacher — never a group where your
                child waits for their turn. Lessons are 30 minutes, at the
                same time every week, in clear English (and Urdu or Arabic
                where the family prefers), so learning becomes a habit your
                child looks forward to.
              </p>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                Teachers are patient and experienced with children. They
                start exactly where your child is — from the Arabic alphabet
                for a complete beginner, or from Tajweed and memorisation for
                a child who already reads — and they move at your child&apos;s
                pace, never rushing and never holding back a fast learner.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                What Parents Get
              </h3>
              <ul className="space-y-3">
                {[
                  "After-school and weekend slots in your local time zone, 7 days a week",
                  "Certified male & female teachers — female Qariahs and Hafizas for girls",
                  "A free 30-minute trial class before you enrol, with no payment taken",
                  "Monthly progress reports on Tajweed, fluency and memorisation",
                  "A safe, private 1-on-1 class you can observe any time",
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

          {/* Kids timings card */}
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
                {KIDS_TIMINGS.map((slot) => (
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

      {/* Learning path by age */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              A Path for Every Age
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              The Right Starting Point for Your Child
            </h2>
            <p className="text-[#5C4A3E] text-base">
              The free trial class places your child on the right step of the
              path — and the teacher adjusts the pace as your child grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {KIDS_AGE_PATH.map((step) => (
              <div
                key={step.age}
                className="p-7 rounded-3xl bg-white border border-[#EAE3D6] space-y-3"
              >
                <span className="text-xs font-bold text-[#9F7A38]">
                  {step.age}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5C4A3E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs suited to kids */}
      <section className="py-16 md:py-24 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Programmes for Kids
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              The Right Programme for Every Child
            </h2>
            <p className="text-[#5C4A3E] text-base">
              Whether your child is starting with the Arabic alphabet, reading
              the Quran with Tajweed, or memorising Surahs — there is a
              structured path, all taught live 1-on-1.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {kidsCourses.map((course: any) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="p-7 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all group space-y-3"
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

      {/* Safety and teachers for kids */}
      <section className="py-16 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#EAE3D6] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Safe Learning for Your Child
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Every class is a private 1-on-1 session — no group strangers,
              no public chat. Parents can sit in on any lesson, and monthly
              progress updates keep you in the loop. Girls learn with
              certified female teachers whenever the family prefers.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-[#EAE3D6] space-y-3">
            <GraduationCap className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Patient Teachers, Real Progress
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Our male and female tutors are certified scholars (Hafiz &amp;
              Qari) with years of teaching children. Lessons follow a
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

      {/* Kids FAQs (visible HTML matching FAQPage schema) */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
              <BookOpen className="w-3.5 h-3.5" />
              Parents Ask
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
              Frequently Asked Questions — Kids Classes
            </h2>
          </div>

          <div className="space-y-4">
            {KIDS_FAQS.map((faq, idx) => (
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

      {/* Learning in your country? */}
      <section className="py-12 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 text-center space-y-3">
          <h2 className="text-2xl font-serif font-bold text-[#2D1C13]">
            Learning in Your Country?
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E]">
            Kids classes run in every time zone — see the page for your
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
