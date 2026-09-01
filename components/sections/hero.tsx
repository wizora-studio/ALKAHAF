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
    <section className="relative w-full min-h-[580px] lg:min-h-[620px] bg-[#FCFBF8] border-b border-[#EAE3D6] overflow-hidden flex items-center">
      {/* Background Banner Image with Left Mandala Curve */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/aisha-hero-mandala-banner.webp"
          alt="Aisha Academy Islamic Mandala Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-left lg:object-center"
        />
        {/* Responsive soft overlay on mobile */}
        <div className="absolute inset-0 bg-[#FCFBF8]/85 sm:bg-[#FCFBF8]/50 lg:bg-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 items-center">
          {/* Left spacer for the curved Islamic mandala artwork */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4" />

          {/* Right Content Column */}
          <div className="lg:col-span-8 xl:col-span-8 text-center flex flex-col items-center justify-center lg:pl-8 xl:pl-12">
            {/* Bismillah Calligraphy */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-6"
            >
              <div className="relative w-[240px] sm:w-[300px] md:w-[340px] h-10 sm:h-12">
                <Image
                  src="/images/bismillah.png"
                  alt="Bismillah ir-Rahman ir-Rahim"
                  fill
                  priority
                  className="object-contain object-center filter drop-shadow-sm opacity-90"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-serif font-bold text-[#2D1C13] leading-[1.16] tracking-tight mb-3 sm:mb-4 max-w-2xl"
            >
              {isEn ? (
                <>
                  Online Quran classes specially <br className="hidden sm:inline" />
                  designed for all ages
                </>
              ) : (
                hero.mainTitle || "Cours de Coran en ligne conçus pour tous les âges"
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-sans font-medium text-[#5C4A3E] mb-7 sm:mb-9"
            >
              {isEn
                ? "Flexible, affordable online classes for every age"
                : hero.subtitle || "Des cours particuliers en direct, flexibles et abordables"}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 w-full sm:w-auto"
            >
              <Link
                href={`/${lang}/admissions`}
                className="w-full sm:w-auto min-w-[210px] text-center px-8 py-3.5 sm:py-4 rounded-full bg-[#BA9955] hover:bg-[#A88744] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(186,153,85,0.35)] hover:shadow-[0_8px_25px_rgba(186,153,85,0.5)] hover:-translate-y-0.5 active:translate-y-0"
              >
                {isEn ? (
                  <>
                    START YOUR FREE <br className="hidden sm:inline" /> 3 DAYS TRIAL
                  </>
                ) : (
                  "COMMENCER L'ESSAI GRATUIT DE 3 JOURS"
                )}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="w-full sm:w-auto min-w-[170px] text-center px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#FAF7F2] text-[#9F7A38] border border-[#C5A059] font-bold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
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
                  <p className="text-[11px] text-[#7A685B] font-medium">by Families</p>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-8 bg-[#EAE3D6]" />

              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#C5A059]" />
                <div className="text-left">
                  <p className="leading-tight font-bold">1-on-1 Dedicated</p>
                  <p className="text-[11px] text-[#7A685B] font-medium">Classes</p>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-8 bg-[#EAE3D6]" />

              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                <div className="text-left">
                  <p className="leading-tight font-bold">24/7 Global</p>
                  <p className="text-[11px] text-[#7A685B] font-medium">Flexible Slots</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
