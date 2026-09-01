"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Calendar, Laptop, Users, Globe2 } from "lucide-react";
import Link from "next/link";
import { getAutomaticCurrency, type Currency } from "@/lib/currency";
const usdPrices = ["$25", "$35", "$45"];
const eurPrices = ["€25", "€35", "€45"];

const PricingPlans = ({ dict }: { dict: any }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    setCurrency(getAutomaticCurrency());
  }, []);

  const rawPlans = [
    {
      ...(dict.plans?.days2 || dict.plans?.group || dict.plans?.online),
      popular: false,
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: <Laptop className="w-6 h-6" />,
      priceIndex: 0,
    },
    {
      ...(dict.plans?.days3 || dict.plans?.private),
      popular: true,
      gradient: "from-amber-400/20 to-orange-500/20",
      icon: <Users className="w-6 h-6" />,
      priceIndex: 1,
    },
    {
      ...(dict.plans?.days5 || dict.plans?.weekend || dict.plans?.weekend_morning),
      popular: false,
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: <Calendar className="w-6 h-6" />,
      priceIndex: 2,
    },
  ].filter((p) => p && p.name);

  return (
    <section className="py-24 bg-[#FAF7F2] relative overflow-hidden border-b border-[#EAE3D6]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2D1C13]">
            {dict.title}{" "}
            <span className="text-[#C5A059] italic">
              {dict.highlight}
            </span>
          </h2>
          <p className="mt-4 text-[#5C4A3E] max-w-xl mx-auto font-medium">
            {dict.description}
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rawPlans.map((plan, index) => {
            const currentPrice = (currency === "EUR" ? eurPrices : usdPrices)[plan.priceIndex];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`
                  relative p-8 rounded-3xl border backdrop-blur-xl flex flex-col h-full
                  transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-white border-[#C5A059] shadow-[0_10px_35px_rgba(197,160,89,0.2)] scale-105 z-10"
                      : "bg-white/90 border-[#EAE3D6] shadow-[0_4px_20px_rgba(45,28,19,0.05)] hover:border-[#C5A059]/50 hover:shadow-[0_8px_30px_rgba(197,160,89,0.12)]"
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C5A059] text-white font-bold px-4 py-1 rounded-full text-xs uppercase shadow-md tracking-wider">
                    {dict.popular}
                  </div>
                )}

                {/* Header */}
                <div
                  className={`
                  w-12 h-12 rounded-2xl flex items-center justify-center mb-6
                  bg-[#FAF5EC] border border-[#C5A059]/30 text-[#C5A059] shadow-sm
                `}
                >
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#2D1C13] mb-2 font-serif">
                  {plan.name}
                </h3>
                <p className="text-[#5C4A3E] text-sm mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-[#2D1C13]">
                    {currentPrice}
                  </span>
                  <span className="text-[#7A685B] font-medium">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#C5A059]" />
                      </div>
                      <span className="text-[#5C4A3E] text-sm leading-snug font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <Link
                  href="/admissions#admission-form"
                  className={`
                    w-full py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-md active:scale-95
                    ${
                      plan.popular
                        ? "bg-[#C5A059] hover:bg-[#B38F46] text-white shadow-[0_4px_14px_rgba(197,160,89,0.35)]"
                        : "bg-[#FAF7F2] text-[#2D1C13] border border-[#EAE3D6] hover:bg-white hover:border-[#C5A059]"
                    }
                  `}
                  aria-label={`${dict.enrollNow || "Enroll Now"} in ${plan.name}`}
                >
                  {dict.enrollNow || "Enroll Now"}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Global Timezones Support Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#EAE3D6] text-xs sm:text-sm text-[#5C4A3E] font-medium shadow-sm">
            <Globe2 className="w-4 h-4 text-[#C5A059]" />
            <span>
              <strong>UK (GMT/BST)</strong>, <strong>USA & Canada (EST/CST/PST)</strong>, <strong>Australia (AEST/AWST)</strong>, and <strong>Europe (CET)</strong> time zones fully supported worldwide.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
