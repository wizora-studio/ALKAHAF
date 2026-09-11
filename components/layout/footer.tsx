"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

interface FooterProps {
  lang?: string;
  dict?: any;
}

const Footer: React.FC<FooterProps> = ({ lang: propLang, dict }) => {
  const pathname = usePathname();
  const lang = propLang || pathname.split("/")[1] || "en";

  const getLocalizedHref = (href: string) => {
    return `/${lang}${href === "/" ? "" : href}`;
  };

  const footerDict = dict?.footer || {
    mission: "Shaping hearts and minds in the light of the Qur'an.",
    programsTitle: "Our Programs",
    quickLinksTitle: "Quick Links",
    stayConnectedTitle: "Stay Connected",
    copyright: "© Al Kahaf Academy. Licensed & Registered.",
    developedBy: "Developed by",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    available: "100% Online Quran Academy",
  };

  return (
    <footer className="relative bg-[#FAF7F2] dark:bg-[#FAF7F2] border-t border-[#EAE3D6] pt-24 pb-12 text-[#2D1C13] overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-[#EAE3D6]">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link
              href={getLocalizedHref("/")}
              className="relative inline-flex items-center"
            >
              <span className="absolute -inset-2 rounded-full bg-[#C5A059]/15 blur-xl"></span>
              <Image
                src="/images/alkahaf-logo.png"
                alt="Al Kahaf Academy"
                width={200}
                height={200}
                priority
                className="relative h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-[#5C4A3E] max-w-sm font-sans leading-relaxed">
              {footerDict.mission}
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#2D1C13] font-serif tracking-wide">
              {footerDict.programsTitle}
            </h4>
            <ul className="space-y-3 text-[#5C4A3E] font-sans">
              <li>
                <Link
                  href={getLocalizedHref("/programs")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {dict?.programsPage?.programs?.[1]?.title ||
                    "Quran with Tajweed"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/programs")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {dict?.programsPage?.programs?.[2]?.title || "Hifz Program"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/programs")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {dict?.programsPage?.programs?.[3]?.title ||
                    "Islamic Studies"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/programs")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  {dict?.programsPage?.programs?.[4]?.title ||
                    "Arabic Language"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#2D1C13] font-serif tracking-wide">
              {footerDict.quickLinksTitle}
            </h4>
            <ul className="space-y-3 text-[#5C4A3E] font-sans">
              <li>
                <Link
                  href={getLocalizedHref("/online-classes")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {dict?.navigation?.onlineClasses || "Online Classes"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/programs")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {dict?.navigation?.programs || "Programs"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/admissions")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {dict?.navigation?.admissions || "Admissions"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/contact")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {dict?.navigation?.contact || "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#2D1C13] font-serif tracking-wide">
              {footerDict.stayConnectedTitle}
            </h4>
            <ul className="space-y-4 text-[#5C4A3E] font-sans text-sm">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  Worldwide Live Online Classes
                  <br /> Available 24/7 Globally
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#C5A059] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>info@alkahafacademy.com</span>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#9F7A38] text-xs font-semibold">
                {footerDict.available}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center gap-4 text-sm text-[#7A685B]">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              {footerDict.copyright
                .replace("{year} ", "")
                .replace("{year}", "")}
            </p>
            <div className="flex gap-6">
              <Link
                href={getLocalizedHref("/privacy-policy")}
                className="hover:text-[#C5A059] transition-colors"
              >
                {footerDict.privacyPolicy}
              </Link>
              <Link
                href={getLocalizedHref("/terms-conditions")}
                className="hover:text-[#C5A059] transition-colors"
              >
                {footerDict.termsOfService}
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span>{footerDict.developedBy}</span>
            <a
              href="https://wizora.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-[#2D1C13] font-bold transition-colors"
            >
              wizora.studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MapPin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Footer;
