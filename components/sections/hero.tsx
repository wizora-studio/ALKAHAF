"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  dict?: any;
  lang?: string;
}

export default function HeroSection({ dict, lang = "en" }: HeroSectionProps) {
  const hero = dict || {
    mainTitle: "Online Quran classes specially designed for all ages",
    subtitle: "One-to-One classes that is flexible & affordable",
    trialCta: "START YOUR FREE 3 DAYS TRIAL",
    contactUs: "Contact Us",
    features: [
      "1-on-1 Dedicated Tutors",
      "Flexible 24/7 Global Timings",
      "Male & Female Certified Teachers",
    ],
  };

  return (
    <section className="relative min-h-[520px] lg:min-h-[580px] py-14 sm:py-16 lg:py-20 flex items-center overflow-hidden bg-[#FCFBF8] border-b border-[#EAE3D6]">
      {/* Background Banner Image - 100% Clean Canvas without any noise or artifacts */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/aisha-hero-banner-clean.webp"
          alt="Aisha Academy Islamic Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-left lg:object-center"
        />
        {/* Responsive soft tint for mobile devices */}
        <div className="absolute inset-0 bg-[#FCFBF8]/85 sm:bg-[#FCFBF8]/60 lg:bg-transparent" />
      </div>

      {/* Ambient subtle glow */}
      <div className="absolute top-1/3 right-12 w-96 h-96 bg-[#C5A059]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 items-center">
          {/* Left spacer column on desktop (where the curved gold Islamic motif sits) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5" />

          {/* Right Content Area */}
          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left lg:pl-6 xl:pl-10 lg:translate-x-5">
            {/* Bismillah Calligraphy */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-6 flex justify-center lg:justify-start"
            >
              <div className="relative w-[280px] sm:w-[340px] md:w-[410px] h-12 sm:h-14">
                <Image
                  src="/images/bismillah.png"
                  alt="Bismillah ir-Rahman ir-Rahim"
                  fill
                  priority
                  className="object-contain object-center lg:object-left filter drop-shadow-sm opacity-90"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-serif font-bold text-[#2D1C13] leading-[1.18] tracking-tight mb-3 sm:mb-4"
            >
              {hero.mainTitle || "Online Quran classes specially designed for all ages"}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-lg sm:text-2xl md:text-[25px] font-sans font-medium text-[#5C4A3E] mb-7 sm:mb-9 leading-snug"
            >
              {hero.subtitle || "One-to-One classes that is flexible & affordable"}
            </motion.p>

            {/* CTA Buttons in Aisha Academy Theme */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href={`/${lang}/admissions`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#C5A059] hover:bg-[#B38F46] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(197,160,89,0.38)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.5)] hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>{hero.trialCta || "START YOUR FREE 3 DAYS TRIAL"}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 sm:py-4.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D1C13] border border-[#EAE3D6] font-bold text-sm sm:text-base transition shadow-sm hover:shadow hover:border-[#C5A059]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                {hero.contactUs || "Contact Us"}
              </Link>
            </motion.div>

            {/* Trust Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 pt-6 border-t border-[#EAE3D6] flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-[#5C4A3E]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]"></span>
                <span>⭐ Rated 4.9/5 by Families</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]"></span>
                <span>👥 1-on-1 Dedicated Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]"></span>
                <span>🕒 24/7 Global Flexible Slots</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
