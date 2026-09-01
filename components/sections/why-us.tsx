"use client";
import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Heart,
  Shield,
  GraduationCap,
  Globe,
} from "lucide-react";

export default function WhyUs({ dict }: { dict: any }) {
  const icons = [
    <GraduationCap key="grad" className="w-6 h-6" />,
    <CheckCircle2 key="check" className="w-6 h-6" />,
    <Heart key="heart" className="w-6 h-6" />,
    <Shield key="shield" className="w-6 h-6" />,
    <Globe key="globe" className="w-6 h-6" />,
  ];

  const reasons = dict.reasons.map((reason: any, idx: number) => ({
    ...reason,
    icon: icons[idx],
  }));

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAF7F2] dark:bg-[#FAF7F2] border-y border-[#EAE3D6]">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-[#2D1C13] sm:text-4xl md:text-5xl leading-tight">
              {dict.title}{" "}
              <span className="text-[#C5A059] italic">{dict.highlight}</span>
            </h2>
            <p className="text-[#5C4A3E] text-lg leading-relaxed font-sans font-medium">
              {dict.description}
            </p>

            <div className="space-y-6 pt-4">
              {reasons.map((item: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-[#EAE3D6] flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D1C13] font-serif group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#5C4A3E] mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl"></div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white z-10 transform transition-transform hover:scale-[1.01] duration-500">
              <Image
                src="/images/online-quran-students.jpg"
                alt="Aisha Academy - Excellence in Quranic Education"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
