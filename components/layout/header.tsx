"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { useUltraMode } from "@/components/context/ultra-mode-context";

interface NavbarProps {
  lang?: string;
  dict?: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang = "en", dict }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathname = usePathname();
  const { isUltraMode, toggleUltraMode } = useUltraMode();

  const navigation = dict?.navigation || {
    home: "Home",
    about: "About",
    programs: "Programs",
    onlineClasses: "Online Classes",
    admissions: "Admissions",
    contact: "Contact",
    enrollNow: "Enroll Now",
  };

  const getLocalizedHref = (href: string) => {
    return `/${lang}${href === "/" ? "" : href}`;
  };

  const toggleLanguage = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    const segments = pathname.split("/");
    segments[1] = newLang;
    return segments.join("/");
  };

  return (
    <header
      className={`relative w-full z-50 transition-colors duration-500 ${
        isUltraMode
          ? "bg-[#06120C]/95 border-b border-[#C5A059]/40 backdrop-blur-md text-white"
          : "bg-[#FCFBF8] border-b border-[#EAE3D6] text-[#2D1C13]"
      }`}
    >
      <nav className="mx-auto lg:max-w-[1400px] w-full px-4 sm:px-10 md:px-12 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link
            href={getLocalizedHref("/")}
            className="relative flex items-center gap-2.5 sm:gap-3 py-1 group shrink-0"
          >
            <span
              className={`absolute -inset-2 rounded-full blur-xl transition-all ${
                isUltraMode ? "bg-[#C5A059]/35" : "bg-[#C5A059]/15"
              }`}
            />
            <Image
              src="/images/alkahaf-emblem.png"
              alt="Al Kahaf Academy"
              width={60}
              height={60}
              priority
              className="relative h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`font-serif font-bold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl tracking-tight whitespace-nowrap transition-colors ${
                isUltraMode ? "text-white" : "text-[#2D1C13]"
              }`}
            >
              Al Kahaf Academy
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul
            className={`hidden lg:flex gap-4 xl:gap-6 items-center font-medium transition-colors ${
              isUltraMode ? "text-[#E2ECE6]" : "text-[#2D1C13]"
            }`}
          >
            {[
              [navigation.home, "/"],
              [navigation.about, "/about"],
              [navigation.programs, "/programs"],
              [navigation.onlineClasses, "/online-classes"],
              [navigation.admissions, "/admissions"],
              [navigation.contact, "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={getLocalizedHref(href)}
                  className={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C5A059] after:transition-all hover:after:w-full ${
                    isUltraMode ? "hover:text-[#F5D88C]" : "hover:text-[#C5A059]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3.5">
            {/* T Button (Secret Ultra Mode Toggle) */}
            <button
              onClick={toggleUltraMode}
              type="button"
              title="Toggle Ultra Wow Mode (or press 'T' on keyboard)"
              className={`flex items-center justify-center w-9 h-9 rounded-full font-serif font-bold text-sm transition-all duration-300 active:scale-95 ${
                isUltraMode
                  ? "bg-gradient-to-r from-[#D4AF37] via-[#FDF3B8] to-[#D4AF37] text-[#0A1913] shadow-[0_0_18px_rgba(212,175,55,0.8)] scale-105 ring-2 ring-[#FDF3B8]"
                  : "border border-[#EAE3D6] bg-[#FAF7F2] text-[#2D1C13] hover:border-[#C5A059] hover:text-[#C5A059] hover:scale-105 shadow-sm"
              }`}
            >
              T
            </button>

            {/* Language Switcher */}
            <Link
              href={toggleLanguage()}
              className={`flex items-center gap-2 font-medium px-3 py-1.5 rounded-full border transition ${
                isUltraMode
                  ? "border-[#C5A059]/40 bg-[#0B1E17] text-[#E2ECE6] hover:text-[#F5D88C]"
                  : "border-[#EAE3D6] bg-[#FAF7F2] hover:bg-[#F5F1E8] text-[#2D1C13] hover:text-[#C5A059]"
              }`}
            >
              <Globe className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-bold">{lang === "fr" ? "EN" : "FR"}</span>
            </Link>

            {/* DESKTOP CTA */}
            <Link
              href={getLocalizedHref("/admissions")}
              className={`flex items-center h-11 px-7 rounded-full font-bold shadow-[0_4px_14px_rgba(197,160,89,0.35)] hover:-translate-y-0.5 active:scale-95 transition ${
                isUltraMode
                  ? "bg-gradient-to-r from-[#E5C378] via-[#FDF3B8] to-[#D4AF37] text-[#1A1206] shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                  : "bg-[#C5A059] hover:bg-[#B38F46] text-white"
              }`}
            >
              {navigation.enrollNow}
            </Link>
          </div>

          {/* HAMBURGER & MOBILE CONTROLS */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Mobile T Button */}
            <button
              onClick={toggleUltraMode}
              type="button"
              title="Toggle Ultra Mode"
              className={`flex items-center justify-center w-8 h-8 rounded-full font-serif font-bold text-xs transition-all active:scale-95 ${
                isUltraMode
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D88C] text-[#0A1913] shadow-[0_0_12px_rgba(212,175,55,0.7)] ring-1 ring-[#FDF3B8]"
                  : "border border-[#EAE3D6] bg-[#FAF7F2] text-[#2D1C13]"
              }`}
            >
              T
            </button>

            <Link
              href={toggleLanguage()}
              className={`flex items-center gap-1.5 font-medium px-3 py-1 rounded-full border transition ${
                isUltraMode
                  ? "border-[#C5A059]/40 bg-[#0B1E17] text-[#E2ECE6]"
                  : "border-[#EAE3D6] bg-[#FAF7F2] text-[#2D1C13]"
              }`}
            >
              <Globe className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-bold">{lang === "fr" ? "EN" : "FR"}</span>
            </Link>

            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className={`p-2 transition-colors active:scale-95 ${
                isUltraMode ? "text-white hover:text-[#F5D88C]" : "text-[#2D1C13] hover:text-[#C5A059]"
              }`}
              aria-label="Toggle Menu"
            >
              {openNavbar ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {openNavbar && (
          <div
            className={`mt-3 rounded-2xl backdrop-blur-xl border shadow-xl p-6 lg:hidden ${
              isUltraMode
                ? "bg-[#071610]/95 border-[#C5A059]/40 text-white"
                : "bg-white/95 border-[#EAE3D6] text-[#2D1C13]"
            }`}
          >
            <ul className="flex flex-col gap-4">
              {[
                [navigation.home, "/"],
                [navigation.about, "/about"],
                [navigation.programs, "/programs"],
                [navigation.onlineClasses, "/online-classes"],
                [navigation.admissions, "/admissions"],
                [navigation.contact, "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={getLocalizedHref(href)}
                    onClick={() => setOpenNavbar(false)}
                    className={`block py-2 transition font-medium ${
                      isUltraMode ? "hover:text-[#F5D88C]" : "hover:text-[#C5A059]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={getLocalizedHref("/admissions")}
              onClick={() => setOpenNavbar(false)}
              className="mt-5 flex justify-center items-center h-12 rounded-full bg-[#C5A059] text-white font-bold shadow-[0_4px_14px_rgba(197,160,89,0.35)] active:scale-95 transition-transform"
            >
              {navigation.enrollNow}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
