"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MousePointerClick, CalendarCheck, GraduationCap, ArrowRight } from "lucide-react";

interface ThreeStepsProps {
  lang?: string;
  dict?: any;
}

export default function ThreeStepsAway({ lang = "en", dict }: ThreeStepsProps) {
  const t = dict?.threeSteps || {
    title: "You Are Only 3 Steps Away!",
    steps: [
      {
        title: "One click registration",
        description:
          "Register yourself or register your child with us today and take your first free trial classes. Simply fill out the form or chat now. No credit card required. It is as simple as ABC.",
      },
      {
        title: "Schedule free trial",
        description:
          "Upon receiving your registration, we will contact you back to set a convenient time for you and give you an overview of our online Quran classes process.",
      },
      {
        title: "Start taking your first class",
        description:
          "After you are satisfied, you can make a payment as we discussed in the trial session. Start taking your first online class with one of our Quran Teacher.",
      },
    ],
    button: "TAKE YOUR FIRST STEP NOW",
  };

  const getLocalizedHref = (href: string) => {
    return `/${lang}${href === "/" ? "" : href}`;
  };

  const stepIcons = [
    <MousePointerClick key="click" className="w-7 h-7" />,
    <CalendarCheck key="calendar" className="w-7 h-7" />,
    <GraduationCap key="grad" className="w-7 h-7" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF8] relative overflow-hidden border-b border-[#EAE3D6]">
      {/* Delicate Academy Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="inline-flex items-center gap-1.5 py-1 px-4 rounded-full bg-[#C5A059]/15 text-[#9F7A38] text-xs sm:text-sm font-semibold border border-[#C5A059]/30 tracking-wider uppercase mb-4">
            {lang === "fr" ? "Processus Simple" : "Simple & Fast Process"}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D1C13] tracking-tight">
            {t.title.includes("3 Steps") ? (
              <>
                {t.title.split("3 Steps")[0]}
                <span className="text-[#C5A059] italic">3 Steps</span>
                {t.title.split("3 Steps")[1]}
              </>
            ) : t.title.includes("3 étapes") ? (
              <>
                {t.title.split("3 étapes")[0]}
                <span className="text-[#C5A059] italic">3 étapes</span>
                {t.title.split("3 étapes")[1]}
              </>
            ) : (
              t.title
            )}
          </h2>

          {/* Academy Gold Divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#C5A059]/40 rounded-full" />
            <span className="w-14 h-[3px] bg-[#C5A059] rounded-full" />
            <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#C5A059]/40 rounded-full" />
          </div>
        </motion.div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 sm:mb-16">
          {t.steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl border border-[#EAE3D6] hover:border-[#C5A059]/50 p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(45,28,19,0.04)] hover:shadow-[0_12px_35px_rgba(197,160,89,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top-corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C5A059]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Step Icon & Number Badge */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/25 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {stepIcons[index % stepIcons.length]}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#2D1C13] text-[#C5A059] text-xs font-bold font-serif flex items-center justify-center border-2 border-white shadow-sm">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2D1C13] group-hover:text-[#C5A059] transition-colors mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#5C4A3E] leading-relaxed font-sans font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href={getLocalizedHref("/admissions")}
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#BD974E] to-[#B38F46] hover:from-[#B38F46] hover:to-[#9F7A38] text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_8px_25px_rgba(197,160,89,0.35)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            <span>{t.button}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
