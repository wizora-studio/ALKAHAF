import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PagesHero from "@/components/sections/pageshero";
import FAQSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { Breadcrumbs, ENTITY_STATEMENT, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  GraduationCap,
  ShieldCheck,
  Users,
  BookOpen,
  Check,
  Award,
  Heart,
  Monitor,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Quran Teachers — Certified Male & Female Tutors & Safeguarding",
  description:
    "Learn about Al Kahaf Academy's certified male and female Quran teachers (Qaris, Qariahs, Huffaz). Discover our 5-step teacher selection process, teaching methodology, and child safeguarding standards.",
  path: "/teachers",
  keywords: [
    "Online Quran teachers",
    "Female Quran tutor online",
    "Certified Qari and Hafiz tutors",
    "Female Tajweed teacher for sisters",
    "Al Kahaf Academy teachers",
  ],
});

const TEACHER_FAQS = [
  {
    question: "Do you have certified female Quran teachers for sisters and girls?",
    answer:
      "Yes. Al Kahaf Academy maintains a dedicated faculty of certified female Quran instructors (Qariahs and Hafizas) who teach sisters, adult women, and young girls in private 1-on-1 online classrooms.",
  },
  {
    question: "How are teachers selected and vetted at Al Kahaf Academy?",
    answer:
      "Every applicant undergoes a 5-stage vetting process: 1) Verification of Tajweed/Hifz credentials and Ijazah, 2) Live recitation and Makharij testing, 3) English communication and child-friendly pedagogy assessment, 4) Background and identity verification, and 5) Digital classroom training.",
  },
  {
    question: "Can I request a change of tutor if needed?",
    answer:
      "Yes. During your 3-day free trial—or at any point during your enrollment—you may request a different male or female tutor through our academic coordinator at no additional cost.",
  },
  {
    question: "Are parents allowed to observe online Quran classes?",
    answer:
      "Absolutely. We encourage parents to observe sessions, review monthly progress reports, and communicate with our academic coordinator regarding their child's learning milestones.",
  },
];

export default async function TeachersPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <FAQPageJsonLd faqs={TEACHER_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[
          { name: "Teachers & Safeguarding", href: "/teachers" },
        ]}
      />

      <PagesHero
        title="Qualified Male & Female Quran Teachers"
        description="Meet the academic standards, teaching methodology, and child-safeguarding commitments behind every live 1-on-1 lesson at Al Kahaf Academy."
        imageSrc="/images/islamic-academy-hall.jpg"
        imageAlt="Qualified Online Quran Teachers at Al Kahaf Academy"
        badge={{
          text: "Certified Huffaz, Qaris & Female Qariahs",
          icon: GraduationCap,
        }}
        primaryAction={{
          text: "Book Free Trial With a Tutor",
          href: "/free-trial",
        }}
        secondaryAction={{
          text: "Explore Our Courses",
          href: "/courses",
        }}
      />

      {/* Official Entity & Faculty Overview */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Faculty Excellence Since 2015
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              Scholarly Precision Combined With Compassionate Pedagogy
            </h2>
            <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
              {ENTITY_STATEMENT} A student&apos;s love for the Holy Quran is shaped deeply by the patience, character (Akhlaq), and mastery of their teacher. That is why we recruit only qualified male and female instructors who combine authentic Tajweed and Hifz credentials with modern, encouraging online teaching skills.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "Certified Hafiz, Qari, Hafiza & Qariah Instructors",
                "Fluent English, Arabic & Urdu Communication",
                "Dedicated Female Tutors for Sisters & Girls",
                "Trained in 1-on-1 Interactive Online Pedagogy",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm font-semibold text-[#2D1C13]">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 stroke-[3]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EAE3D6] space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Our 5-Step Teacher Vetting &amp; Selection Process
            </h3>
            <ol className="space-y-4">
              {[
                {
                  step: "1. Credential & Ijazah Verification",
                  desc: "Review of formal Islamic seminary degrees, Hifz certificates, and Tajweed qualifications.",
                },
                {
                  step: "2. Live Recitation & Makharij Examination",
                  desc: "Oral evaluation by senior scholars testing practical Tajweed, Sifaat, and stopping rules.",
                },
                {
                  step: "3. Pedagogy & Communication Assessment",
                  desc: "Demonstration lessons evaluating clarity in English, patience with young learners, and engagement.",
                },
                {
                  step: "4. Identity & Safeguarding Clearance",
                  desc: "Verification of identity records, professional references, and adherence to our code of conduct.",
                },
                {
                  step: "5. Ongoing Academic Supervision",
                  desc: "Regular quality audits, parent feedback reviews, and continuous curriculum training.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#C5A059] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-[#2D1C13]">{item.step}</p>
                    <p className="text-xs sm:text-sm text-[#5C4A3E] mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Faculty Specializations */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Specialized Departments
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              Dedicated Tutors for Every Learning Stage
            </h2>
            <p className="text-[#5C4A3E] text-base">
              We match each student with an instructor specialized in their age group, gender preference, and learning track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-[#EAE3D6] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Early Childhood &amp; Qaida Specialists
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Trained specifically to keep children ages 4–10 engaged using visual screen-sharing, phonetic games, and gentle encouragement during{" "}
                <Link href="/courses/noorani-qaida" className="text-[#9F7A38] font-bold hover:underline">
                  Noorani Qaida
                </Link>{" "}
                lessons.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#EAE3D6] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Senior Tajweed &amp; Qira&apos;at Tutors
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Certified Qaris and Qariahs who guide students through articulation points (Makharij), Sifaat, and complete Mushaf recitation in our{" "}
                <Link href="/courses/tajweed" className="text-[#9F7A38] font-bold hover:underline">
                  Tajweed course
                </Link>.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#EAE3D6] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Female Quran Tutors (Qariahs &amp; Hafizas)
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Dedicated female scholars providing a comfortable, private 1-on-1 learning space for sisters, mothers, and young girls in our{" "}
                <Link href="/courses/adults" className="text-[#9F7A38] font-bold hover:underline">
                  Adult &amp; Sisters program
                </Link>.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#EAE3D6] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Hifz &amp; Arabic Mentors
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Experienced Huffaz and Arabic instructors overseeing structured Sabaq/Sabaqi/Manzil retention in our{" "}
                <Link href="/courses/hifz" className="text-[#9F7A38] font-bold hover:underline">
                  Hifz program
                </Link>{" "}
                and{" "}
                <Link href="/courses/arabic" className="text-[#9F7A38] font-bold hover:underline">
                  Quranic Arabic track
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Child Safeguarding & Parent Policy */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="bg-[#FAF7F2] rounded-3xl p-8 md:p-12 border border-[#EAE3D6] grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
                <ShieldCheck className="w-4 h-4" />
                Child Safeguarding &amp; Parent Transparency Policy
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1C13]">
                Safe, Supervised &amp; Parent-Friendly Online Classrooms
              </h2>
              <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
                We take the safety and well-being of every child seriously. All lessons take place via official Zoom or Google Meet links managed by our academic team, with clear safeguarding boundaries:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2 text-sm text-[#2D1C13] font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Open-door policy: Parents can sit in or observe any live session</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 stroke-[3]" />
                  <span>All parent-academy communication is handled via official coordination channels</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Screen-shared digital Mushaf &amp; Qaida materials—no external unverified links</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Free tutor replacement anytime if your family prefers a different teaching style</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#EAE3D6] text-center space-y-4">
              <Monitor className="w-10 h-10 text-[#C5A059] mx-auto" />
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Experience a Live Class First
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A3E]">
                Meet your assigned tutor in a free 30-minute evaluation class and enjoy 3 days of free trial sessions before choosing a monthly plan.
              </p>
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white bg-[#C5A059] hover:bg-[#B38F46] text-sm transition-all shadow-md"
              >
                <span>Start 3-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher FAQs */}
      <section className="py-16 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-[#2D1C13] text-center">
            Questions About Our Tutors
          </h2>
          <div className="space-y-4">
            {TEACHER_FAQS.map((faq, idx) => (
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

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
