"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#EAE3D6]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] font-sans tracking-tight">
            {t.title}
          </h2>
          {/* Subtle underline accent matching design */}
          <div className="w-16 h-[3px] bg-[#E57373] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-14">
          {t.steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border-2 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 font-sans leading-snug">
                {step.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#555555] leading-relaxed font-sans">
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
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#E04E47] hover:bg-[#CC3E37] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_8px_25px_rgba(224,78,71,0.35)] hover:shadow-[0_10px_30px_rgba(224,78,71,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            {t.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
