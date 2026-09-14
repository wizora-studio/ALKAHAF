"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles } from "lucide-react";

export default function UltraAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative z-20 flex items-center gap-3.5 bg-[#0D1E17]/80 backdrop-blur-md border border-[#C5A059]/40 px-4 py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <audio
        ref={audioRef}
        src="/audio/surah-kahf.mp3"
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />

      <button
        onClick={togglePlay}
        className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#B38728] via-[#FBF5B7] to-[#DAA520] flex items-center justify-center text-[#1C1305] shadow-[0_0_15px_rgba(218,165,32,0.6)] hover:scale-105 active:scale-95 transition shrink-0"
        title={isPlaying ? "Pause Noorani Recitation" : "Listen to Noorani Recitation"}
      >
        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
      </button>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#FBF5B7]" />
          <span className="text-xs font-serif font-bold text-[#FBF5B7] tracking-wide">
            Surah Al-Kahf Recitation
          </span>
        </div>
        <span className="text-[10px] text-[#A7B9AF]">
          {isPlaying ? "Live Noorani Audio Playing..." : "Click Play to experience live recitation"}
        </span>
      </div>

      {/* Animated Sound Wave Bars */}
      <div className="flex items-center gap-1 h-5 px-1 ml-1">
        {[40, 70, 100, 60, 85].map((h, i) => (
          <span
            key={i}
            className={`w-0.5 bg-gradient-to-t from-[#B38728] to-[#FBF5B7] rounded-full transition-all duration-300 ${
              isPlaying ? "animate-pulse" : "opacity-30"
            }`}
            style={{
              height: isPlaying ? `${h}%` : "30%",
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>

      <button
        onClick={toggleMute}
        className="text-[#A7B9AF] hover:text-[#FBF5B7] p-1 transition"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
