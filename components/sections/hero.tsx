"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Star, Clock, PhoneCall, Globe, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  dict?: any;
  lang?: string;
}

export default function HeroSection({ dict, lang = "en" }: HeroSectionProps) {
  const isEn = lang === "en";

  const hero = dict || {
    mainTitle: "Online Quran classes specially designed for all ages",
    subtitle:
      "Flexible, affordable online classes for every age — tailored pace, certified female tutors, and a nurturing environment.",
    trialCta: "START YOUR FREE 3 DAYS TRIAL",
    contactUs: "Contact Us",
  };

  return (
    <section className="relative w-full py-6 sm:py-8 lg:py-10 bg-[#FAF7F2] border-b border-[#EAE3D6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Editorial Container Card */}
        <div className="relative w-full rounded-3xl lg:rounded-[36px] bg-[#FCFBF8] border border-[#EAE3D6] shadow-[0_8px_35px_rgba(45,28,19,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            
            {/* ================= LEFT COLUMN: Editorial Sandstone Panel ================= */}
            <div className="lg:col-span-4 xl:col-span-4 bg-[#C4BAA3] relative p-8 sm:p-10 flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-[#B3A890]">
              {/* Subtle Islamic Geometric Lattice Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zm0 30l15 15-15 15-15-15 15-15zM0 30l15 15-15 15-15-15 15-15zm60 0l15 15-15 15-15-15 15-15z' fill='%232D1C13' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Watermark Calligraphy in Background */}
              <div className="absolute right-4 bottom-20 opacity-10 pointer-events-none select-none font-arabic text-8xl text-[#2D1C13]">
                اقرأ
              </div>

              {/* Top Meta Area */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-4 py-1 rounded-full bg-[#2D1C13] text-white text-[11px] font-bold tracking-widest uppercase shadow-sm">
                    EST. 2015
                  </span>
                </div>

                <div className="pt-2">
                  <p className="font-arabic text-2xl text-[#2D1C13] font-bold tracking-wide">
                    القرآن الكريم
                  </p>
                  <div className="w-12 h-[1.5px] bg-[#2D1C13]/30 mt-2 mb-4" />
                  <p className="text-xs sm:text-sm text-[#3D3126] font-medium leading-relaxed max-w-xs">
                    {isEn
                      ? "Authentic learning rooted in tradition, delivered with modern care for families across the globe."
                      : "Un apprentissage authentique enraciné dans la tradition, dispensé avec une bienveillance moderne pour les familles du monde entier."}
                  </p>
                </div>
              </div>

              {/* Bottom Community Badge */}
              <div className="relative z-10 pt-8 mt-auto">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#9F7A38]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-[#2D1C13] leading-tight">
                      Global Community
                    </p>
                    <p className="text-[10px] text-[#5C4A3E] font-medium">
                      30+ Countries Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CENTER COLUMN: Main Editorial Content ================= */}
            <div className="lg:col-span-5 xl:col-span-5 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center bg-[#FCFBF8] text-center lg:text-left">
              {/* Bismillah with Ornamental Rule */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-8 sm:w-14 h-[1px] bg-[#C5A059]/40" />
                <span className="font-arabic text-lg sm:text-xl text-[#2D1C13] font-bold tracking-wider">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>
                <div className="w-8 sm:w-14 h-[1px] bg-[#C5A059]/40" />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-serif font-bold text-[#2D1C13] leading-[1.12] tracking-tight mb-4">
                Online Quran <br className="hidden sm:inline" />
                classes <br className="hidden sm:inline" />
                specially designed <br />
                <span className="italic font-normal text-[#C5A059] font-serif">
                  for all ages
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-[#5C4A3E] font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                {isEn
                  ? "Flexible, affordable online classes for every age — tailored pace, certified female tutors, and a nurturing environment."
                  : "Des cours en ligne flexibles et abordables pour tous les âges — rythme adapté, enseignantes certifiées et cadre bienveillant."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href={`/${lang}/admissions`}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#BA9955] hover:bg-[#A88744] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(186,153,85,0.38)] hover:shadow-[0_12px_30px_rgba(186,153,85,0.5)] hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <span>{hero.trialCta || "START YOUR FREE 3 DAYS TRIAL"}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D1C13] border border-[#EAE3D6] font-bold text-xs sm:text-sm transition shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                  {hero.contactUs || "Contact Us"}
                </Link>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: Features & Consultation Card ================= */}
            <div className="lg:col-span-3 xl:col-span-3 p-8 sm:p-10 lg:p-8 xl:p-10 bg-[#FCFBF8] border-t lg:border-t-0 lg:border-l border-[#EAE3D6] flex flex-col justify-between gap-8">
              {/* Feature List */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#EAE3D6] bg-[#FAF7F2] flex items-center justify-center text-[#9F7A38] flex-shrink-0 shadow-sm">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2D1C13]">Live 1-on-1</p>
                    <p className="text-xs text-[#7A685B]">Private sessions</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#EAE3D6] bg-[#FAF7F2] flex items-center justify-center text-[#9F7A38] flex-shrink-0 shadow-sm">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2D1C13]">4.9/5 Rating</p>
                    <p className="text-xs text-[#7A685B]">Loved by families</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#EAE3D6] bg-[#FAF7F2] flex items-center justify-center text-[#9F7A38] flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2D1C13]">24/7 Slots</p>
                    <p className="text-xs text-[#7A685B]">Any timezone</p>
                  </div>
                </div>
              </div>

              {/* Need Help Consultation Card */}
              <Link
                href={`/${lang}/contact`}
                className="group block p-5 rounded-2xl bg-[#2D1C13] hover:bg-[#23150D] text-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold tracking-wider uppercase">
                    NEED HELP?
                  </span>
                </div>
                <p className="text-xs text-white/85 font-medium leading-snug group-hover:text-white">
                  {isEn
                    ? "Book a free consultation with our academic advisors."
                    : "Réservez une consultation gratuite avec nos conseillers."}
                </p>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
