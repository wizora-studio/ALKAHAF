"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, Users, Wifi, Clock } from "lucide-react";

export default function ProgramsOverview({ dict }: { dict: any }) {
  const programs = [
    {
      ...(dict.nazra || dict.programs?.[0]),
      icon: <BookOpen className="w-8 h-8" />,
      link: "/programs#foundation",
    },
    {
      ...(dict.tajweed || dict.programs?.[1]),
      icon: <Users className="w-8 h-8" />,
      link: "/programs#tajweed",
    },
    {
      ...(dict.online || dict.programs?.[2]),
      icon: <Wifi className="w-8 h-8" />,
      link: "/online-classes",
    },
    {
      ...(dict.private || dict.programs?.[3]),
      icon: <Clock className="w-8 h-8" />,
      link: "/online-classes",
    },
  ].filter((p) => p && p.title);

  return (
    <section className="py-24 relative overflow-hidden bg-[#FCFBF8] dark:bg-[#FCFBF8]">
      {/* Light Mode Delicate Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#C5A059]/15 text-[#9F7A38] text-sm font-semibold border border-[#C5A059]/30 mb-2">
            {dict.offerings}
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#2D1C13] sm:text-4xl md:text-5xl drop-shadow-sm">
            {dict.title}
          </h2>
          <p className="text-[#5C4A3E] max-w-2xl mx-auto font-sans text-lg font-medium">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program: any, idx: number) => (
            <div
              key={idx}
              className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-[0_4px_20px_rgba(45,28,19,0.06)] border border-[#EAE3D6] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(197,160,89,0.15)] hover:border-[#C5A059]/50 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-[#C5A059] group-hover:text-[#9F7A38] transition-colors duration-300">
                  {program.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#2D1C13] mb-3 group-hover:text-[#C5A059] transition-colors">
                {program.title}
              </h3>
              <p className="text-[#5C4A3E] font-sans text-sm leading-relaxed mb-6">
                {program.description}
              </p>
              <Link
                href={program.link}
                className="inline-flex items-center text-[#C5A059] font-bold hover:text-[#9F7A38] transition-colors group/link"
                aria-label={`${dict.learnMore || "Learn more"} about ${program.title}`}
              >
                {dict.learnMore || "Learn more"}{" "}
                <span className="ml-2 transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
