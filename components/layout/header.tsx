"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  lang?: string;
  dict?: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang = "en", dict }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathname = usePathname();

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
    <header className="relative w-full z-50 bg-[#FCFBF8] border-b border-[#EAE3D6]">
      <nav className="mx-auto lg:max-w-[1400px] w-full px-5 sm:px-10 md:px-12 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link
            href={getLocalizedHref("/")}
            className="relative flex items-center py-1"
          >
            <span className="absolute -inset-2 rounded-full bg-[#C5A059]/15 blur-xl"></span>
            <Image
              src="/images/logo-bg-re.png"
              alt="Al Kahaf Academy"
              width={160}
              height={127}
              priority
              className="relative h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-6 items-center text-[#2D1C13] font-medium">
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
                  className="relative hover:text-[#C5A059] transition-colors
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#C5A059] after:transition-all
                  hover:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <Link
              href={toggleLanguage()}
              className="flex items-center gap-2 text-[#2D1C13] hover:text-[#C5A059] font-medium px-3 py-1.5 rounded-full border border-[#EAE3D6] bg-[#FAF7F2] hover:bg-[#F5F1E8] transition"
            >
              <Globe className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-bold">{lang === "fr" ? "EN" : "FR"}</span>
            </Link>

            {/* DESKTOP CTA */}
            <Link
              href={getLocalizedHref("/admissions")}
              className="flex items-center h-11 px-7 rounded-full
              bg-[#C5A059] hover:bg-[#B38F46] text-white font-bold
              shadow-[0_4px_14px_rgba(197,160,89,0.35)]
              hover:-translate-y-0.5 active:scale-95 transition"
            >
              {navigation.enrollNow}
            </Link>
          </div>

          {/* HAMBURGER */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={toggleLanguage()}
              className="flex items-center gap-1.5 text-[#2D1C13] hover:text-[#C5A059] font-medium px-3 py-1 rounded-full border border-[#EAE3D6] bg-[#FAF7F2] transition"
            >
              <Globe className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-bold">{lang === "fr" ? "EN" : "FR"}</span>
            </Link>
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className="p-2 text-[#2D1C13] hover:text-[#C5A059] transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              {openNavbar ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {openNavbar && (
          <div
            className="mt-3 rounded-2xl bg-white/95 backdrop-blur-xl
            border border-[#EAE3D6] shadow-xl p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4 text-[#2D1C13]">
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
                    className="block py-2 hover:text-[#C5A059] transition font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={getLocalizedHref("/admissions")}
              onClick={() => setOpenNavbar(false)}
              className="mt-5 flex justify-center items-center h-12 rounded-full
              bg-[#C5A059] text-white font-bold shadow-[0_4px_14px_rgba(197,160,89,0.35)] active:scale-95 transition-transform"
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
