"use client";

import React from "react";
import { useUltraMode } from "@/components/context/ultra-mode-context";
import { Sparkles, EyeOff, RotateCcw } from "lucide-react";

export default function UltraFloatingSwitcher() {
  const { isUltraMode, toggleUltraMode } = useUltraMode();

  if (!isUltraMode) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow flex items-center gap-3 bg-[#0B1E17]/90 backdrop-blur-xl border border-[#C5A059] px-4 py-2.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.7)] text-white">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-ping" />
        <span className="text-xs font-serif font-bold text-[#F5D88C]">
          ✨ Ultra Mode Active
        </span>
      </div>

      <div className="h-4 w-[1px] bg-white/20" />

      <button
        onClick={toggleUltraMode}
        className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#F5D88C] bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/20 transition active:scale-95"
        title="Press 'T' key or click to return to Normal Mode"
      >
        <RotateCcw className="w-3.5 h-3.5 text-[#F5D88C]" />
        <span>Exit (T)</span>
      </button>
    </div>
  );
}
