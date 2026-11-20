import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Languages,
  ArrowRight,
  Video,
  Clock,
  CalendarCheck,
  Gift,
  type LucideIcon,
} from "lucide-react";
import type { CourseDetail } from "@/lib/courses-data";

/**
 * Shared design pieces for the SEO landing pages (country, audience and
 * Hifz pages). They reuse the homepage's own design language: cream and
 * white bands, Playfair serif headings, gold (#C5A059) accents, the
 * three-part gold divider, and the rich program-card style from
 * ProgramsOverview. No content, price, link or heading text is changed
 * here; every page passes its own copy in as props.
 */

/* The three-part gold divider from the homepage program section. */
export function GoldDivider({ align = "center" }: { align?: "left" | "center" }) {
  return (
    <div
      className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
    >
      <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#C5A059]/40 rounded-full" />
      <span className="w-14 h-[3px] bg-[#C5A059] rounded-full" />
      <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#C5A059]/40 rounded-full" />
    </div>
  );
}

/* A thin strip of true facts, placed right under the hero so the page does
 * not open with a wall of text. Every fact comes from the pages' own copy. */
export function TrustStrip() {
  const facts = [
    {
      icon: Video,
      title: "Live 1-on-1 classes",
      sub: "with a dedicated teacher",
    },
    {
      icon: Clock,
      title: "30-minute lessons",
      sub: "same time every week",
    },
    {
      icon: CalendarCheck,
      title: "7 days a week",
      sub: "morning, evening, weekend",
    },
    {
      icon: Gift,
      title: "Free 3-day trial",
      sub: "no payment taken",
    },
  ];

  return (
    <section className="bg-white border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
        {facts.map((fact) => (
          <div key={fact.title} className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
              <fact.icon className="w-5 h-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-[#2D1C13] leading-snug">
                {fact.title}
              </span>
              <span className="block text-xs text-[#7A685B] leading-snug">
                {fact.sub}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const PROGRAM_STYLE: Record<
  string,
  { icon: LucideIcon; badge: string; popular: boolean }
> = {
  "noorani-qaida": { icon: BookOpen, badge: "Foundation", popular: false },
  tajweed: { icon: Sparkles, badge: "Most Popular", popular: true },
  hifz: { icon: GraduationCap, badge: "Memorization", popular: false },
  arabic: { icon: Languages, badge: "Language", popular: false },
};

/**
 * The program grid in the homepage's own card language: icon tile that
 * turns gold on hover, badge pill, serif title, and a gold link pill.
 * Takes the page's own courses, eyebrow, title and subtitle.
 */
export function ProgramCards({
  courses,
  eyebrow,
  title,
  subtitle,
}: {
  courses: (CourseDetail | undefined)[];
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const list = courses.filter((c): c is CourseDetail => Boolean(c));

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6] relative overflow-hidden">
      {/* Ambient gold glow, as on the homepage program section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10">
        <div className="max-w-3xl mx-auto mb-12 space-y-3 text-center">
          <span className="inline-flex items-center gap-1.5 py-1 px-4 rounded-full bg-[#C5A059]/15 text-[#9F7A38] text-xs sm:text-sm font-semibold border border-[#C5A059]/30 tracking-wider uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13] tracking-tight">
            {title}
          </h2>
          <GoldDivider align="center" />
          <p className="text-[#5C4A3E] text-base pt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {list.map((course) => {
            const style = PROGRAM_STYLE[course.slug] ?? {
              icon: BookOpen,
              badge: "Course",
              popular: false,
            };
            const Icon = style.icon;
            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className={`group relative bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 ${
                  style.popular
                    ? "border-[#C5A059]/60 shadow-[0_8px_30px_rgba(197,160,89,0.18)] ring-1 ring-[#C5A059]/30"
                    : "border-[#EAE3D6] hover:border-[#C5A059]/50 shadow-[0_4px_20px_rgba(45,28,19,0.04)] hover:shadow-[0_16px_35px_rgba(197,160,89,0.15)]"
                }`}
              >
                {/* Gold corner glow on hover */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#C5A059]/12 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F5EEDD] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(197,160,89,0.35)] transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`py-1 px-3 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                        style.popular
                          ? "bg-[#C5A059] text-white"
                          : "bg-[#FAF5EC] text-[#9F7A38] border border-[#C5A059]/25"
                      }`}
                    >
                      {style.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#9F7A38]">
                    {course.durationAndFormat.startingPrice} •{" "}
                    {course.durationAndFormat.frequency}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors leading-snug mt-1 mb-2">
                    {course.shortTitle}
                  </h3>
                  <p className="text-sm text-[#5C4A3E] leading-relaxed">
                    {course.heroSubtitle}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-[#FAF5EC]/80 group-hover:bg-[#C5A059] text-[#9F7A38] group-hover:text-white border border-[#C5A059]/25 group-hover:border-[#C5A059] text-xs sm:text-sm font-bold transition-all duration-300">
                  <span>Explore {course.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
