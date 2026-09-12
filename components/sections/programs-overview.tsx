"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Users, GraduationCap, ArrowRight, Check } from "lucide-react";

interface ProgramsOverviewProps {
  dict: any;
  lang?: string;
}

export default function ProgramsOverview({ dict, lang = "en" }: ProgramsOverviewProps) {
  const isFr = dict?.offerings?.toLowerCase().includes("offre") || lang === "fr";

  const programs = [
    {
      ...(dict.nazra || dict.programs?.[0]),
      icon: <BookOpen className="w-7 h-7" />,
      badge: isFr ? "Fondation" : "Foundation",
      popular: false,
      link: "/programs#foundation",
    },
    {
      ...(dict.tajweed || dict.programs?.[1]),
      icon: <Sparkles className="w-7 h-7" />,
      badge: isFr ? "Le Plus Populaire" : "Most Popular",
      popular: true,
      link: "/programs#tajweed",
    },
    {
      ...(dict.online || dict.programs?.[2]),
      icon: <Users className="w-7 h-7" />,
      badge: isFr ? "Interactif" : "Group Interactive",
      popular: false,
      link: "/online-classes",
    },
    {
      ...(dict.private || dict.programs?.[3]),
      icon: <GraduationCap className="w-7 h-7" />,
      badge: isFr ? "Flexible" : "1-on-1 Flexible",
      popular: false,
      link: "/online-classes",
    },
  ].filter((p) => p && p.title);

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-[#FCFBF8]">
      {/* Light Mode Delicate Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <span className="inline-flex items-center gap-1.5 py-1 px-4 rounded-full bg-[#C5A059]/15 text-[#9F7A38] text-xs sm:text-sm font-semibold border border-[#C5A059]/30 tracking-wider uppercase mb-2">
            {dict.offerings || "Our Offerings"}
          </span>

          <h2 className="text-3xl font-serif font-bold text-[#2D1C13] sm:text-4xl md:text-5xl drop-shadow-xs tracking-tight">
            {dict.title?.includes("Programs") ? (
              <>
                Our <span className="text-[#C5A059] italic">Programs</span>
              </>
            ) : dict.title?.includes("Programmes") ? (
              <>
                Nos <span className="text-[#C5A059] italic">Programmes</span>
              </>
            ) : (
              dict.title || "Our Programs"
            )}
          </h2>

          {/* Golden Islamic Divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#C5A059]/40 rounded-full" />
            <span className="w-14 h-[3px] bg-[#C5A059] rounded-full" />
            <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#C5A059]/40 rounded-full" />
          </div>

          <p className="text-[#5C4A3E] max-w-2xl mx-auto font-sans text-base sm:text-lg font-normal pt-2 leading-relaxed">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {programs.map((program: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 ${
                program.popular
                  ? "border-[#C5A059]/60 shadow-[0_8px_30px_rgba(197,160,89,0.18)] ring-1 ring-[#C5A059]/30"
                  : "border-[#EAE3D6] hover:border-[#C5A059]/50 shadow-[0_4px_20px_rgba(45,28,19,0.04)] hover:shadow-[0_16px_35px_rgba(197,160,89,0.15)]"
              }`}
            >
              {/* Subtle top-corner gold accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#C5A059]/12 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Row: Icon and Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F5EEDD] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(197,160,89,0.35)] transition-all duration-300 shadow-xs">
                    {program.icon}
                  </div>
                  <span
                    className={`py-1 px-3 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-2xs ${
                      program.popular
                        ? "bg-[#C5A059] text-white"
                        : "bg-[#FAF5EC] text-[#9F7A38] border border-[#C5A059]/25"
                    }`}
                  >
                    {program.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold font-serif text-[#2D1C13] group-hover:text-[#C5A059] transition-colors leading-snug mb-2.5">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-[#5C4A3E] font-sans text-sm leading-relaxed mb-5">
                  {program.description}
                </p>

                {/* Feature Highlights with Checkmarks */}
                {program.features && program.features.length > 0 && (
                  <ul className="space-y-2 py-4 border-t border-[#EAE3D6]/70">
                    {program.features.map((feature: string, fIdx: number) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs text-[#5C4A3E] font-medium"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#FAF5EC] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Interactive Link Pill */}
              <Link
                href={program.link}
                className="mt-6 inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-[#FAF5EC]/80 group-hover:bg-[#C5A059] text-[#9F7A38] group-hover:text-white border border-[#C5A059]/25 group-hover:border-[#C5A059] text-xs sm:text-sm font-bold transition-all duration-300 shadow-2xs"
                aria-label={`${dict.learnMore || "Learn more"} about ${program.title}`}
              >
                <span>{dict.learnMore || "Learn more"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
