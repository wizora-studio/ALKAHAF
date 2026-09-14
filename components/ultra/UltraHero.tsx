"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Award, ArrowRight } from "lucide-react";
import UltraParticles from "./UltraParticles";
import UltraAudioPlayer from "./UltraAudioPlayer";

interface UltraHeroProps {
  dict?: any;
  lang?: string;
}

export default function UltraHero({ dict, lang = "en" }: UltraHeroProps) {
  const isEn = lang === "en";

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] bg-gradient-to-b from-[#05110B] via-[#0A1D15] to-[#040C08] text-white overflow-hidden flex items-center border-b border-[#C5A059]/30">
      {/* Dynamic Stardust Particles Canvas */}
      <UltraParticles />

      {/* Radiant Background Islamic Rays & Glowing Rings */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Central Luminous Sunburst Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#C5A059]/20 via-[#E4C882]/10 to-transparent blur-[120px]" />
        
        {/* Sacred Islamic Arch Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Top & Bottom Gold Vignettes */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 lg:py-20">
        <div className="grid md:grid-cols-12 items-center gap-10 lg:gap-12">
          
          {/* Left Column — 3D Floating Holy Quran with Celestial Noor Aura */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Spinning Sacred Light Rings behind Quran */}
              <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#C5A059]/30 animate-[spin_40s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[260px] h-[260px] lg:w-[350px] lg:h-[350px] rounded-full border border-dashed border-[#F5D88C]/20 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
              
              {/* Luminous Noor Glow Center */}
              <div className="absolute w-[240px] h-[240px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-tr from-[#D4AF37]/35 via-[#FFF2B2]/20 to-transparent blur-[60px] pointer-events-none" />

              {/* Floating Quran Image with Gentle Levitation Motion */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [0, 0.5, -0.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[300px] h-[270px] sm:w-[360px] sm:h-[320px] lg:w-[440px] lg:h-[390px] filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] drop-shadow-[0_0_25px_rgba(197,160,89,0.35)]"
              >
                <Image
                  src="/images/quran-hero.png"
                  alt="Majestic Holy Quran on Rehal Stand"
                  fill
                  priority
                  quality={100}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Audio Recitation Widget below the Quran */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 w-full max-w-sm flex justify-center"
            >
              <UltraAudioPlayer />
            </motion.div>
          </div>

          {/* Right Column — Royal Content & Typography */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Shimmering Bismillah Calligraphy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 sm:mb-6"
            >
              <div className="relative w-[280px] sm:w-[350px] lg:w-[420px] h-11 sm:h-13 lg:h-14">
                <Image
                  src="/images/bismillah-gold.png"
                  alt="Bismillah ir-Rahman ir-Rahim"
                  fill
                  priority
                  className="object-contain object-center md:object-left filter drop-shadow-[0_0_15px_rgba(245,216,140,0.5)]"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight leading-[1.12] mb-4 text-white"
            >
              {isEn ? (
                <>
                  Connect Your Heart to the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBF5B7] via-[#E4C882] to-[#B38728] drop-shadow-[0_2px_10px_rgba(218,165,32,0.4)]">
                    Divine Light
                  </span>{" "}
                  of the Holy Quran
                </>
              ) : (
                <>
                  Connectez Votre Cœur à la{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBF5B7] via-[#E4C882] to-[#B38728]">
                    Lumière Divine
                  </span>{" "}
                  du Saint Coran
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-[#C8D7CE] font-sans max-w-xl mb-8 leading-relaxed"
            >
              {isEn
                ? "Immerse your family in personalized 1-on-1 Quranic learning with world-certified Azhari scholars. Master Tajweed, memorization, and Arabic from the comfort of your home."
                : "Offrez à votre famille un apprentissage coranique d'excellence avec des érudits certifiés d'Al-Azhar. Maîtrisez le Tajweed et la mémorisation chez vous."}
            </motion.p>

            {/* Ultra CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full"
            >
              <Link
                href={`/${lang}/admissions`}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-[#1A1206] bg-gradient-to-r from-[#E5C378] via-[#FDF3B8] to-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>{dict?.trialCta || (isEn ? "START 3-DAY FREE TRIAL" : "COMMENCER L'ESSAI GRATUIT")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/${lang}/online-classes`}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-base text-[#F5D88C] bg-white/5 hover:bg-white/10 border border-[#C5A059]/40 hover:border-[#C5A059] backdrop-blur-md transition-all duration-300 hover:scale-102"
              >
                {isEn ? "Explore Interactive Classes" : "Découvrir les Cours"}
              </Link>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full max-w-lg"
            >
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl sm:text-2xl font-bold font-serif text-[#FBF5B7]">4.9 / 5</span>
                <span className="text-[11px] sm:text-xs text-[#A7B9AF]">★ 1,200+ Reviews</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl sm:text-2xl font-bold font-serif text-[#FBF5B7]">1-on-1</span>
                <span className="text-[11px] sm:text-xs text-[#A7B9AF]">Azhari Scholars</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl sm:text-2xl font-bold font-serif text-[#FBF5B7]">35+</span>
                <span className="text-[11px] sm:text-xs text-[#A7B9AF]">Countries Served</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
