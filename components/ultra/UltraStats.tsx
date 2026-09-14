"use client";

import React from "react";
import { Users, GraduationCap, Calendar, Award } from "lucide-react";

interface UltraStatsProps {
  dict?: any;
  counts?: {
    students: number;
    teachers: number;
    classes: number;
    experience: number;
  };
}

export default function UltraStats({ dict, counts }: UltraStatsProps) {
  const stats = [
    {
      label: dict?.students || "Active Students",
      value: counts?.students ? `${counts.students}+` : "500+",
      icon: Users,
      highlight: "Global Enrolled",
    },
    {
      label: dict?.teachers || "Sanad Certified Scholars",
      value: counts?.teachers ? `${counts.teachers}+` : "15+",
      icon: GraduationCap,
      highlight: "Al-Azhar Verified",
    },
    {
      label: dict?.classes || "Weekly Live Classes",
      value: counts?.classes ? `${counts.classes}+` : "120+",
      icon: Calendar,
      highlight: "1-on-1 Sessions",
    },
    {
      label: dict?.experience || "Years of Heritage",
      value: counts?.experience ? `${counts.experience}+` : "20+",
      icon: Award,
      highlight: "Trusted Excellence",
    },
  ];

  return (
    <section className="relative z-20 py-12 bg-[#06110C] border-b border-[#C5A059]/20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#0F261D]/80 to-[#07150F]/90 border border-[#C5A059]/30 hover:border-[#F5D88C] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md overflow-hidden"
              >
                {/* Subtle gold gradient accent on card top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5D88C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A382B] border border-[#C5A059]/40 flex items-center justify-center text-[#F5D88C] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#C5A059]/15 text-[#E4C882] border border-[#C5A059]/30">
                    {item.highlight}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FDF3B8] to-[#E5C378] mb-1">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-[#A7B9AF] font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
