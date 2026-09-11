"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, User, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function LiveChatWidget({
  lang = "en",
  dict,
}: {
  lang?: string;
  dict?: any;
}) {
  const isFrench = lang === "fr";
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const quickTopics = [
    {
      label: isFrench ? "📖 Cours d'essai gratuit" : "📖 Book Free Trial",
      text: isFrench
        ? "J'aimerais réserver une séance d'essai gratuite de 30 minutes."
        : "I would like to book a 30-minute free trial class for my child.",
    },
    {
      label: isFrench ? "💳 Forfaits & Tarifs" : "💳 Fee Plans ($25, $35, $45)",
      text: isFrench
        ? "J'aimerais avoir plus de détails sur vos forfaits et tarifs ($25, $35, $45)."
        : "I would like to inquire about your course fee plans ($25, $35, $45).",
    },
    {
      label: isFrench ? "⏰ Horaires Flexibles" : "⏰ Flexible Timings",
      text: isFrench
        ? "Quels sont les créneaux horaires disponibles selon notre fuseau horaire ?"
        : "What flexible class timings are available for our time zone?",
    },
  ];

  const handleStartChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const studentName = name.trim();
    const topicText = selectedTopic || (isFrench ? "Je souhaite m'inscrire aux cours de Coran en ligne." : "I am interested in online Quran classes and would like more details.");

    let message = "";
    if (studentName) {
      message = isFrench
        ? `Assalamu Alaikum Al Kahaf Academy!\n\nJe m'appelle *${studentName}*.\n${topicText}\n\nMerci de me donner les informations pour démarrer.`
        : `Assalamu Alaikum Al Kahaf Academy!\n\nMy name is *${studentName}*.\n${topicText}\n\nPlease provide me details to get started.`;
    } else {
      message = isFrench
        ? `Assalamu Alaikum Al Kahaf Academy!\n\n${topicText}\n\nMerci de me donner les informations pour démarrer.`
        : `Assalamu Alaikum Al Kahaf Academy!\n\n${topicText}\n\nPlease provide me details and schedule a free trial.`;
    }

    const waUrl = `https://wa.me/923222597066?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 border-2 border-white focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsating online ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] animate-ping opacity-25" />

          {/* Online green badge */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full z-20 shadow-sm" />

          {isOpen ? (
            <X className="w-7 h-7 relative z-10" />
          ) : (
            <FaWhatsapp className="w-8 h-8 relative z-10" />
          )}
        </motion.button>
      </div>

      {/* WhatsApp Name Prompt Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[360px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(45,28,19,0.2)] border border-[#EAE3D6] overflow-hidden flex flex-col font-sans"
          >
            {/* Header */}
            <div className="relative bg-[#25D366] text-white p-5 pt-6 pb-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                    {isFrench ? "Support WhatsApp 24/7" : "WhatsApp Live Support"}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-lg font-serif font-bold leading-snug">
                {isFrench
                  ? "Discutez en direct avec nous sur WhatsApp"
                  : "Chat directly with us on WhatsApp"}
              </h3>
              <p className="text-xs text-white/90 mt-1 font-medium">
                {isFrench
                  ? "Entrez votre nom pour démarrer instantanément la discussion :"
                  : "Enter your name to start chat with our coordinator:"}
              </p>
            </div>

            {/* Body */}
            <form onSubmit={handleStartChat} className="p-5 space-y-4 bg-[#FCFBF8]">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#2D1C13] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{isFrench ? "Votre Nom" : "Your Name"}</span>
                </label>
                <input
                  type="text"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isFrench ? "ex: Frère / Sœur Fatima" : "e.g. Abdullah, Sister Fatima"}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-[#EAE3D6] focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all text-[#2D1C13] shadow-sm font-medium"
                />
              </div>

              {/* Quick Topic Chips */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-[11px] font-bold text-[#7A685B] uppercase tracking-wider">
                  {isFrench ? "Sujet de votre demande (optionnel)" : "Topic (Optional)"}
                </label>
                <div className="flex flex-col gap-1.5">
                  {quickTopics.map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setSelectedTopic(
                          selectedTopic === topic.text ? "" : topic.text,
                        )
                      }
                      className={`px-3 py-2 rounded-xl text-xs text-left font-medium transition-all flex items-center justify-between border ${
                        selectedTopic === topic.text
                          ? "bg-[#FAF5EC] border-[#C5A059] text-[#2D1C13] shadow-sm font-bold"
                          : "bg-white border-[#EAE3D6] text-[#5C4A3E] hover:bg-[#FAF7F2]"
                      }`}
                    >
                      <span>{topic.label}</span>
                      {selectedTopic === topic.text && (
                        <span className="text-[#C5A059] text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-[0_4px_15px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer mt-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>{isFrench ? "Démarrer sur WhatsApp" : "Start Chat on WhatsApp"}</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
