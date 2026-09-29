import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import FAQSection from "@/components/sections/faq";
import { Check, Clock, Calendar, Users, Monitor, ArrowRight, Globe } from "lucide-react";
import PagesHero from "@/components/sections/pageshero";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { Breadcrumbs } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Programs — Tajweed, Hifz, Noorani Qaida, Islamic Studies & Arabic",
  description:
    "Explore Al Kahaf Academy's online Quran programs: Noorani Qaida, Quran with Tajweed, Hifz memorization, Islamic Studies & Tarbiyah, Quranic Arabic, and adult classes.",
  path: "/programs",
  keywords: [
    "Online Quran Programs",
    "Quran with Tajweed online",
    "Hifz Quran online",
    "Islamic studies for kids online",
    "Quranic Arabic online",
    "Al Kahaf Academy programs",
  ],
});

export default async function ProgramsPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen font-sans selection:bg-[#C5A059] selection:text-white">
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "Programs", href: "/programs" }]} />

      <PagesHero
        title={dict.programsPage.hero.title}
        description={dict.programsPage.hero.description}
        imageSrc="/images/islamic-academy-hall.jpg"
        badge={{
          text: "100% Online Worldwide",
          icon: Globe,
        }}
        primaryAction={{
          text: "Book Free Trial",
          href: "/admissions",
        }}
        secondaryAction={{
          text: "View Fee Plans",
          href: "/pricing",
        }}
      />

      {/* Programs List Section */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 grid gap-8 md:gap-12">
          {/* Foundational Noorani Qaida Highlight */}
          <div
            id="foundation"
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_25px_rgba(45,28,19,0.05)] border border-[#EAE3D6] hover:border-[#C5A059] transition-all duration-300 flex flex-col lg:flex-row gap-10 group"
          >
            <div className="w-full lg:w-2/3 space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#FAF5EC] text-[#9F7A38] border border-[#C5A059]/30 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#C5A059]" /> Beginners &amp; Young Children (Ages 4+)
                </span>
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#FAF7F2] text-[#2D1C13] border border-[#EAE3D6] flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#C5A059]" /> 100% Online Live
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2D1C13] leading-tight group-hover:text-[#9F7A38] transition-colors">
                <Link href="/courses/noorani-qaida">
                  Noorani Qaida &amp; Beginner Nazra Reading
                </Link>
              </h2>
              <p className="text-[#5C4A3E] text-base sm:text-lg leading-relaxed font-medium">
                Step-by-step foundational Arabic alphabet, letter recognition, harakat, and word-joining rules designed to build confident Quran reading from day one.
              </p>

              <div className="flex flex-wrap gap-y-2 gap-x-8 text-sm font-semibold text-[#7A685B] pt-2 border-t border-[#FAF7F2]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  2, 3 or 5 Days/Week
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  30-35 min / Live 1-on-1 Class
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Arabic Alphabet & Makharij Basics",
                  "Harakat, Tanween & Madd Rules",
                  "Interactive Digital Qaida Screen-Sharing",
                  "Smooth Transition to Full Quran Nazra",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FAF5EC] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-[#2D1C13] text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col justify-center">
              <div className="bg-[#FAF7F2] rounded-2xl p-8 text-center border border-[#EAE3D6] h-full flex flex-col justify-center shadow-inner">
                <div className="text-[#7A685B] text-xs font-bold uppercase tracking-wider mb-2">
                  {dict.programsPage.tuition}
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-[#2D1C13] font-serif">
                    From $25
                  </span>
                  <span className="text-[#7A685B] font-medium text-sm">/month</span>
                </div>
                <div className="space-y-3">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 md:py-4 rounded-xl font-bold text-white text-center transition-all shadow-[0_4px_14px_rgba(197,160,89,0.35)] hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] bg-[#C5A059] hover:bg-[#B38F46] focus:outline-none"
                  >
                    <span>{dict.programsPage.joinNow}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/courses/noorani-qaida"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[#2D1C13] bg-white border border-[#EAE3D6] hover:border-[#C5A059] text-sm transition-all"
                  >
                    <span>View Course Syllabus</span>
                  </Link>
                </div>
                <p className="mt-4 text-xs text-[#7A685B] font-medium">
                  {dict.programsPage.siblingDiscount}
                </p>
              </div>
            </div>
          </div>

          {dict.programsPage.programs.map((program: any, idx: number) => (
            <div
              key={idx}
              id={program.id}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_25px_rgba(45,28,19,0.05)] border border-[#EAE3D6] hover:border-[#C5A059] transition-all duration-300 flex flex-col lg:flex-row gap-10 group"
            >
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#FAF5EC] text-[#9F7A38] border border-[#C5A059]/30 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C5A059]" /> All Ages Welcome (Kids & Adults)
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#FAF7F2] text-[#2D1C13] border border-[#EAE3D6] flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-[#C5A059]" /> {program.mode}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2D1C13] leading-tight group-hover:text-[#9F7A38] transition-colors">
                  <Link href={`/courses/${program.id}`}>
                    {program.title}
                  </Link>
                </h2>
                <p className="text-[#5C4A3E] text-base sm:text-lg leading-relaxed font-medium">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-y-2 gap-x-8 text-sm font-semibold text-[#7A685B] pt-2 border-t border-[#FAF7F2]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    {program.schedule}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    30-45 min / Live Online Class
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {program.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FAF5EC] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[#2D1C13] text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <div className="bg-[#FAF7F2] rounded-2xl p-8 text-center border border-[#EAE3D6] h-full flex flex-col justify-center shadow-inner">
                  <div className="text-[#7A685B] text-xs font-bold uppercase tracking-wider mb-2">
                    {dict.programsPage.tuition}
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-[#2D1C13] font-serif">
                      {program.price}
                    </span>
                    <span className="text-[#7A685B] font-medium text-sm">{program.period}</span>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 md:py-4 rounded-xl font-bold text-white text-center transition-all shadow-[0_4px_14px_rgba(197,160,89,0.35)] hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] bg-[#C5A059] hover:bg-[#B38F46] focus:outline-none"
                    >
                      <span>{dict.programsPage.joinNow}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/courses/${program.id}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[#2D1C13] bg-white border border-[#EAE3D6] hover:border-[#C5A059] text-sm transition-all"
                    >
                      <span>View Course Syllabus</span>
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-[#7A685B] font-medium">
                    {dict.programsPage.siblingDiscount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
