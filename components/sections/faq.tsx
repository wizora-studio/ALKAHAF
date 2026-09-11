"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FAQSection({ dict }: { dict: any }) {
  // Allow multiple items to be expanded or track active per column
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    if (openItems.includes(idx)) {
      setOpenItems(openItems.filter((i) => i !== idx));
    } else {
      setOpenItems([...openItems, idx]);
    }
  };

  const questions = dict.questions || [];
  const midPoint = Math.ceil(questions.length / 2);
  const leftColumn = questions.slice(0, midPoint);
  const rightColumn = questions.slice(midPoint);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF7F2] border-t border-[#EAE3D6]/60">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#FAF5EC] text-[#9F7A38] text-xs sm:text-sm font-bold uppercase tracking-wider border border-[#C5A059]/30 shadow-sm">
            {dict.tag || "Got Questions?"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D1C13]">
            {dict.title || "Frequently Asked Questions"}
          </h2>
          <p className="text-[#5C4A3E] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            {dict.subtitle || "Everything you need to know about our online classes, tutors, timings, and payments."}
          </p>
        </div>

        {/* 2-Column Responsive FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-5 md:gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((item: any, idx: number) => {
              const actualIdx = idx;
              const isOpen = openItems.includes(actualIdx);

              return (
                <div
                  key={actualIdx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#C5A059] shadow-[0_8px_30px_rgba(197,160,89,0.12)]"
                      : "bg-white/80 hover:bg-white border-[#EAE3D6] hover:border-[#C5A059]/40 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(actualIdx)}
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
                        {item.q}
                      </span>
                    </div>
                    <div
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#C5A059] text-white rotate-180"
                          : "bg-[#FAF5EC] text-[#C5A059] border border-[#C5A059]/30"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1">
                          <div className="h-px w-full bg-[#FAF5EC] mb-4"></div>
                          <p className="text-[#5C4A3E] text-sm sm:text-base leading-relaxed font-sans font-normal">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((item: any, idx: number) => {
              const actualIdx = midPoint + idx;
              const isOpen = openItems.includes(actualIdx);

              return (
                <div
                  key={actualIdx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#C5A059] shadow-[0_8px_30px_rgba(197,160,89,0.12)]"
                      : "bg-white/80 hover:bg-white border-[#EAE3D6] hover:border-[#C5A059]/40 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(actualIdx)}
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
                        {item.q}
                      </span>
                    </div>
                    <div
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#C5A059] text-white rotate-180"
                          : "bg-[#FAF5EC] text-[#C5A059] border border-[#C5A059]/30"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1">
                          <div className="h-px w-full bg-[#FAF5EC] mb-4"></div>
                          <p className="text-[#5C4A3E] text-sm sm:text-base leading-relaxed font-sans font-normal">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Direct Contact Box */}
        <div className="mt-14 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:px-8 sm:py-5 rounded-3xl bg-white border border-[#EAE3D6] shadow-[0_4px_20px_rgba(45,28,19,0.04)] max-w-xl mx-auto">
            <div className="text-center sm:text-left">
              <p className="font-bold text-[#2D1C13] text-sm sm:text-base font-serif">
                Have a question not answered here?
              </p>
              <p className="text-xs sm:text-sm text-[#7A685B] mt-0.5">
                Our support team is available 24/7 on WhatsApp to assist you.
              </p>
            </div>
            <a
              href="https://wa.me/923222597066?text=Assalamu%20Alaikum%20Al%20Kahaf%20Academy!%20I%20have%20a%20question%20regarding%20your%20online%20Quran%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
