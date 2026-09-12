"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BookOpen, Clock } from "lucide-react";

interface HeroSectionProps {
  dict?: any;
  lang?: string;
}

export default function HeroSection({ dict, lang = "en" }: HeroSectionProps) {
  const isEn = lang === "en";

  const hero = dict || {
    mainTitle: "Online Quran classes specially designed for all ages",
    subtitle: "Flexible, affordable online classes for every age",
    trialCta: "START YOUR FREE 3 DAYS TRIAL",
    contactUs: "Contact Us",
  };

  return (
    <section className="relative w-full min-h-[520px] lg:min-h-[600px] bg-[#FCFBF8] border-b border-[#EAE3D6] overflow-hidden flex items-center">
      {/* Background Banner Image with Royal Islamic Arch & Golden Mandala */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/islamic-hero-banner.jpg"
          alt="Al Kahaf Academy Royal Islamic Arch Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-left"
        />
        {/* Soft atmospheric gradient blend towards right content */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FCFBF8]/90 hidden md:block" />
        {/* Responsive soft overlay on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF8]/30 via-[#FCFBF8]/75 to-[#FCFBF8]/95 md:hidden" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-14">
        <div className="grid md:grid-cols-12 lg:grid-cols-12 items-center gap-6 lg:gap-0">
          {/* Left panel — Majestic Holy Quran on Rehal inside the Royal Islamic Arch */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-5 items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              {/* Soft Golden Spiritual Halo behind the Quran */}
              <div className="absolute w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-full bg-[#C5A059]/25 blur-[50px] pointer-events-none -z-10" />

              {/* Photorealistic Holy Quran on Carved Rehal */}
              <div className="relative w-[280px] h-[250px] lg:w-[320px] lg:h-[290px] xl:w-[380px] xl:h-[340px] filter drop-shadow-[0_15px_30px_rgba(45,28,19,0.35)]">
                <Image
                  src="/images/quran-hero.png"
                  alt="Holy Quran on Handcrafted Rehal Stand"
                  fill
                  priority
                  quality={100}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Content Column — centered text */}
          <div className="md:col-span-7 lg:col-span-7 text-center flex flex-col items-center justify-center">
            {/* Bismillah Calligraphy — GOLD & PROMINENT */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 sm:mb-7"
            >
              <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-10 sm:h-12 lg:h-14">
                <Image
                  src="/images/bismillah-gold.png"
                  alt="Bismillah ir-Rahman ir-Rahim"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-serif font-bold text-[#2D1C13] leading-[1.14] tracking-tight mb-3 sm:mb-4 max-w-2xl"
            >
              {isEn ? (
                <>
                  Online Quran classes specially{" "}
                  <br className="hidden sm:inline" />
                  designed for all ages
                </>
              ) : (
                hero.mainTitle ||
                "Cours de Coran en ligne conçus pour tous les âges"
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg font-sans font-medium text-[#5C4A3E] mb-7 sm:mb-8"
            >
              {isEn
                ? "Flexible, affordable online classes for every age"
                : hero.subtitle ||
                  "Des cours particuliers en direct, flexibles et abordables"}
            </motion.p>

            {/* Action Buttons — matching reference exactly */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 w-full sm:w-auto"
            >
              <Link
                href={`/${lang}/admissions`}
                className="w-full sm:w-auto min-w-[210px] text-center px-8 py-3.5 sm:py-4 rounded-full bg-[#BA9955] hover:bg-[#A88744] text-white font-extrabold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(186,153,85,0.35)] hover:shadow-[0_8px_25px_rgba(186,153,85,0.5)] hover:-translate-y-0.5 active:translate-y-0"
              >
                {isEn ? (
                  <>
                    START YOUR FREE <br className="sm:inline" /> 3 DAYS TRIAL
                  </>
                ) : (
                  "COMMENCER L'ESSAI GRATUIT DE 3 JOURS"
                )}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="w-full sm:w-auto min-w-[170px] text-center px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D1C13] border-2 border-[#D4C9B4] font-bold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                {hero.contactUs || "Contact Us"}
              </Link>
            </motion.div>

            {/* Trust Badges Row with Dividers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-[#2D1C13]"
            >
              <div className="flex items-center gap-2.5">
                <Star className="w-5 h-5 text-[#C5A059]" />
                <div className="text-left">
                  <p className="leading-tight font-bold">Rated 4.9/5</p>
                  <p className="text-[11px] text-[#7A685B] font-medium">
                    by Families
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-8 bg-[#EAE3D6]" />

              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#C5A059]" />
                <div className="text-left">
                  <p className="leading-tight font-bold">1-on-1 Dedicated</p>
                  <p className="text-[11px] text-[#7A685B] font-medium">
                    Classes
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-8 bg-[#EAE3D6]" />

              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                <div className="text-left">
                  <p className="leading-tight font-bold">24/7 Global</p>
                  <p className="text-[11px] text-[#7A685B] font-medium">
                    Flexible Slots
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
