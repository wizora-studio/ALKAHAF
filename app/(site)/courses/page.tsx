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
import { COURSES_DATA } from "@/lib/courses-data";
import { Breadcrumbs, ENTITY_STATEMENT } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  BookOpen,
  Clock,
  Calendar,
  Check,
  ArrowRight,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Quran & Islamic Courses — Noorani Qaida, Tajweed, Hifz & Arabic",
  description:
    "Browse all online Quran and Islamic courses at Al Kahaf Academy: Noorani Qaida for beginners, Quran with Tajweed, Hifz memorization, Islamic Studies, Quranic Arabic, and Adult classes.",
  path: "/courses",
  keywords: [
    "Online Quran courses",
    "Noorani Qaida course online",
    "Online Tajweed course",
    "Online Hifz course",
    "Islamic studies course for kids",
    "Quranic Arabic course",
    "Al Kahaf Academy courses",
  ],
});

export default async function CoursesHubPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "Courses", href: "/courses" }]} />

      <PagesHero
        title="Online Quran & Islamic Courses"
        description="Structured 1-on-1 online courses designed for children, teens, adults, and sisters worldwide. Every course starts with a free 3-day evaluation trial."
        imageSrc="/images/islamic-academy-hall.jpg"
        imageAlt="Online Quran and Islamic Courses at Al Kahaf Academy"
        badge={{
          text: "6 Core Learning Tracks • All Ages",
          icon: BookOpen,
        }}
        primaryAction={{
          text: "Start 3-Day Free Trial",
          href: "/free-trial",
        }}
        secondaryAction={{
          text: "Compare Fee Plans",
          href: "/pricing",
        }}
      />

      {/* Entity & Academic Standards Intro */}
      <section className="py-12 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#EAE3D6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                Academic Standards &amp; Official Curriculum
              </p>
              <p className="text-sm sm:text-base text-[#2D1C13] font-medium leading-relaxed">
                {ENTITY_STATEMENT} Each course below includes a dedicated syllabus, 1-on-1 live instruction via Zoom or Google Meet, certified male and female teachers, and monthly progress tracking.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/teachers"
                className="px-5 py-2.5 rounded-xl bg-white border border-[#EAE3D6] hover:border-[#C5A059] text-xs sm:text-sm font-bold text-[#2D1C13] transition-colors"
              >
                Teacher Qualifications
              </Link>
              <Link
                href="/schedule"
                className="px-5 py-2.5 rounded-xl bg-white border border-[#EAE3D6] hover:border-[#C5A059] text-xs sm:text-sm font-bold text-[#2D1C13] transition-colors"
              >
                24/7 Class Timings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              Choose the Right <span className="text-[#C5A059] italic">Learning Path</span>
            </h2>
            <p className="text-[#5C4A3E] text-base sm:text-lg font-medium">
              Click any course below to explore its full module-by-module curriculum, prerequisites, learning outcomes, and frequently asked questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES_DATA.map((course) => (
              <article
                key={course.slug}
                className="bg-white rounded-3xl p-8 border border-[#EAE3D6] hover:border-[#C5A059] shadow-[0_4px_25px_rgba(45,28,19,0.05)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FAF5EC] text-[#9F7A38] border border-[#C5A059]/30">
                      {course.heroBadge}
                    </span>
                    <span className="text-sm font-serif font-bold text-[#2D1C13]">
                      {course.durationAndFormat.startingPrice}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors leading-snug">
                    <Link href={`/courses/${course.slug}`}>
                      {course.shortTitle}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#5C4A3E] leading-relaxed">
                    {course.heroSubtitle}
                  </p>

                  <div className="pt-3 border-t border-[#EAE3D6]/70 space-y-2 text-xs font-semibold text-[#7A685B]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{course.durationAndFormat.sessionLength}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{course.durationAndFormat.frequency}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {course.learningOutcomes.slice(0, 3).map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#2D1C13] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5 stroke-[3]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE3D6]/70 flex flex-col gap-2.5">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white bg-[#C5A059] hover:bg-[#B38F46] text-sm transition-all shadow-sm"
                  >
                    <span>Explore Full Course Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/free-trial"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-[#2D1C13] bg-[#FAF7F2] hover:bg-white border border-[#EAE3D6] hover:border-[#C5A059] text-xs transition-all"
                  >
                    <span>Book 3-Day Free Trial</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding & Female Tutors Highlight */}
      <section className="py-16 bg-white border-t border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-2">
            <Users className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-lg font-serif font-bold text-[#2D1C13]">
              Male &amp; Female Certified Tutors
            </h3>
            <p className="text-sm text-[#5C4A3E] leading-relaxed">
              Choose a certified male Qari/Hafiz or a dedicated female Qariah/Hafiza for sisters and young girls.{" "}
              <Link href="/teachers" className="text-[#9F7A38] font-bold hover:underline">
                Learn about our teachers →
              </Link>
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-2">
            <Globe className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-lg font-serif font-bold text-[#2D1C13]">
              24/7 Global Time Zones
            </h3>
            <p className="text-sm text-[#5C4A3E] leading-relaxed">
              Classes are scheduled around your local time zone in the UK, USA, Canada, Australia, and Europe.{" "}
              <Link href="/schedule" className="text-[#9F7A38] font-bold hover:underline">
                View class schedule →
              </Link>
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-lg font-serif font-bold text-[#2D1C13]">
              Transparent Monthly Plans
            </h3>
            <p className="text-sm text-[#5C4A3E] leading-relaxed">
              Plans start at $25/month with family &amp; sibling discounts and no long-term contracts.{" "}
              <Link href="/pricing" className="text-[#9F7A38] font-bold hover:underline">
                See fee plans →
              </Link>
            </p>
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
