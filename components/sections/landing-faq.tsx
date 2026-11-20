"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { GoldDivider } from "./landing-page-sections";

/**
 * FAQ accordion for the SEO landing pages, in the homepage FAQ section's
 * own visual language (cream band, ambient gold glow, white rounded
 * cards, gold border when open, first question open). The homepage FAQ
 * component reads its questions from the dictionary, so it cannot take a
 * page's own FAQs; this one takes them as props. All questions and
 * answers stay in the server-rendered HTML, and the FAQPage JSON-LD in
 * each page is untouched.
 */
export function FaqAccordion({
  faqs,
  eyebrow,
  title,
}: {
  faqs: { question: string; answer: string }[];
  eyebrow: string;
  title: string;
}) {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    if (openItems.includes(idx)) {
      setOpenItems(openItems.filter((i) => i !== idx));
    } else {
      setOpenItems([...openItems, idx]);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#EAE3D6] relative overflow-hidden">
      {/* Ambient gold glow, as on the homepage FAQ section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-10 relative z-10 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
            {eyebrow}
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
            {title}
          </h2>
          <GoldDivider align="center" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#C5A059] shadow-[0_8px_30px_rgba(197,160,89,0.12)]"
                    : "bg-white/80 hover:bg-white border-[#EAE3D6] hover:border-[#C5A059]/40 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3.5 pr-3">
                    <HelpCircle
                      className={`shrink-0 w-5 h-5 mt-0.5 transition-colors duration-300 ${
                        isOpen ? "text-[#C5A059]" : "text-[#7A685B]"
                      }`}
                    />
                    <span
                      className={`text-base sm:text-lg font-bold font-serif transition-colors duration-300 ${
                        isOpen ? "text-[#2D1C13]" : "text-[#5C4A3E]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <Minus className="shrink-0 w-5 h-5 text-[#C5A059]" />
                  ) : (
                    <Plus className="shrink-0 w-5 h-5 text-[#7A685B]" />
                  )}
                </button>
                {/* The answer stays in the DOM (and in the HTML) even when
                    collapsed, so the visible page still matches the FAQPage
                    schema, exactly as the old static FAQ wall did. */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[3.25rem] sm:pl-[3.75rem] text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
