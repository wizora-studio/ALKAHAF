"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Globe2, Plus } from "lucide-react";
import { getAutomaticCurrency, type Currency } from "@/lib/currency";
const basePrices = [25, 35, 45];
const plusPrice = 15;

const PricingSection = ({ dict }: { dict: any }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    setCurrency(getAutomaticCurrency());
  }, []);

  const rawPlans = [
    {
      ...(dict.plans?.days2 || dict.plans?.group || dict.plans?.online),
      priceIndex: 0,
      highlight: false,
    },
    {
      ...(dict.plans?.days3 || dict.plans?.private),
      priceIndex: 1,
      highlight: true, // 3 Days a Week is popular
    },
    {
      ...(dict.plans?.days5 || dict.plans?.weekend || dict.plans?.weekend_morning),
      priceIndex: 2,
      highlight: false,
    },
  ].filter((p) => p && p.name);

  return (
    <section className="py-24 bg-[#FAF7F2] dark:bg-[#FAF7F2] relative overflow-hidden border-b border-[#EAE3D6]">
      {/* BG Blurs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
        <div className="flex flex-col space-y-12">
          <div className="flex gap-4 flex-col items-center">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <span className="text-[#C5A059] font-bold tracking-wider uppercase text-sm">
                {dict.highlight}
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl text-[#2D1C13] font-bold font-serif">
                {dict.title} {dict.highlight}
              </h2>
            </div>
            <p className="text-[#5C4A3E] text-center max-w-2xl mx-auto font-medium">
              {dict.description}
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rawPlans.map((plan, index) => (
              <PriceCard
                key={index}
                {...plan}
                basePrice={basePrices[plan.priceIndex]}
                currencySymbol={currency === "EUR" ? "€" : "$"}
                popularText={dict.popular}
                enrollText="Enroll Now"
                plusArabic={dict.plusArabic || "Arabic"}
                plusUrdu={dict.plusUrdu || "Urdu"}
              />
            ))}
          </div>

          {/* Timezone Note */}
          <div className="text-center pt-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#EAE3D6] text-xs sm:text-sm text-[#5C4A3E] font-medium shadow-sm">
              <Globe2 className="w-4 h-4 text-[#C5A059]" />
              <span>
                <strong>UK (GMT/BST)</strong>, <strong>USA & Canada (EST/CST/PST)</strong>, <strong>Australia (AEST/AWST)</strong>, and <strong>Europe (CET)</strong> time zones fully supported worldwide.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function PlusAddOns({
  plusArabic,
  plusUrdu,
  selected,
  onToggle,
}: {
  plusArabic: string;
  plusUrdu: string;
  selected: string[];
  onToggle: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const options = [
    { value: "arabic", label: plusArabic },
    { value: "urdu", label: plusUrdu },
  ];
  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-[#C5A059]/50 bg-[#FAF5EC] text-[#9F7A38] text-xs font-bold hover:bg-[#C5A059] hover:text-white transition-colors"
      >
        <Plus
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
        <span>Add Arabic or Urdu</span>
      </button>
      {open && (
        <>
          <div className="mt-2 flex flex-wrap gap-2">
            {options.map((option) => {
              const active = selected.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onToggle(option.value)}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                    active
                      ? "bg-[#C5A059] text-white border-[#C5A059]"
                      : "bg-white text-[#9F7A38] border-[#C5A059]/50 hover:border-[#C5A059]"
                  }`}
                >
                  + {option.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[11px] text-[#7A685B] font-medium">
            Adds ${plusPrice}/month per language.
          </p>
        </>
      )}
    </div>
  );
}

function PriceCard({
  name,
  basePrice,
  currencySymbol,
  period,
  description,
  features,
  highlight = false,
  popularText,
  enrollText,
  plusArabic,
  plusUrdu,
}: {
  name: string;
  basePrice: number;
  currencySymbol: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  popularText: string;
  enrollText: string;
  plusArabic: string;
  plusUrdu: string;
}) {
  const [selected, setSelected] = React.useState<string[]>([]);
  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  const totalPrice = basePrice + plusPrice * selected.length;
  return (
    <div
      className={`relative flex flex-col p-6 sm:p-8 rounded-3xl transition-all duration-300 h-full ${
        highlight
          ? "bg-white shadow-[0_10px_35px_rgba(197,160,89,0.2)] scale-105 border-2 border-[#C5A059] z-10"
          : "bg-white/90 border border-[#EAE3D6] shadow-[0_4px_20px_rgba(45,28,19,0.05)] hover:shadow-[0_8px_30px_rgba(197,160,89,0.12)] hover:bg-white hover:-translate-y-1 hover:border-[#C5A059]/40"
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
          {popularText}
        </div>
      )}

      <h3 className="text-xl font-bold text-[#2D1C13] font-serif mb-2">
        {name}
      </h3>
      <p className="text-sm text-[#5C4A3E] mb-6 min-h-[40px]">
        {description}
      </p>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-[#2D1C13]">{currencySymbol}{totalPrice}</span>
        <span className="text-[#7A685B] font-medium">
          {period}
        </span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f: string, i: number) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-[#5C4A3E]"
          >
            <div className="mt-0.5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 p-1 flex-shrink-0">
              <Check className="w-3 h-3 text-[#C5A059]" />
            </div>
            <span className="leading-snug font-medium">{f}</span>
          </li>
        ))}
      </ul>

      <PlusAddOns
        plusArabic={plusArabic}
        plusUrdu={plusUrdu}
        selected={selected}
        onToggle={toggle}
      />

      <Link
        href="/admissions"
        className={`block w-full py-3 rounded-xl font-bold text-center transition-all shadow-md active:scale-95 ${
          highlight
            ? "bg-[#C5A059] text-white hover:bg-[#B38F46] hover:shadow-lg shadow-[0_4px_14px_rgba(197,160,89,0.35)]"
            : "bg-[#FAF7F2] text-[#2D1C13] border border-[#EAE3D6] hover:bg-white hover:border-[#C5A059]"
        }`}
      >
        {enrollText}
      </Link>
    </div>
  );
}

export default PricingSection;
