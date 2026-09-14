"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface UltraModeContextType {
  isUltraMode: boolean;
  toggleUltraMode: () => void;
  setUltraMode: (val: boolean) => void;
}

const UltraModeContext = createContext<UltraModeContextType>({
  isUltraMode: false,
  toggleUltraMode: () => {},
  setUltraMode: () => {},
});

export const UltraModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isUltraMode, setIsUltraMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("alkahaf_ultra_mode");
      if (saved === "true") {
        setIsUltraMode(true);
      }
    } catch {
      // ignore
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const active = document.activeElement;
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.tagName === "SELECT" ||
          (active as HTMLElement).isContentEditable)
      ) {
        return;
      }

      if (e.key === "t" || e.key === "T") {
        setIsUltraMode((prev) => {
          const next = !prev;
          try {
            localStorage.setItem("alkahaf_ultra_mode", String(next));
          } catch {
            // ignore
          }
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleUltraMode = useCallback(() => {
    setIsUltraMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("alkahaf_ultra_mode", String(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const setUltraMode = useCallback((val: boolean) => {
    setIsUltraMode(val);
    try {
      localStorage.setItem("alkahaf_ultra_mode", String(val));
    } catch {
      // ignore
    }
  }, []);

  return (
    <UltraModeContext.Provider value={{ isUltraMode: mounted ? isUltraMode : false, toggleUltraMode, setUltraMode }}>
      {children}
    </UltraModeContext.Provider>
  );
};

export const useUltraMode = () => useContext(UltraModeContext);
