"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Phone } from "lucide-react";

interface FooterProps {
  lang?: string;
  dict?: any;
}

const Footer: React.FC<FooterProps> = ({ lang: propLang, dict }) => {
  const pathname = usePathname();
  const lang = propLang || pathname.split("/")[1] || "en";

  const getLocalizedHref = (href: string) => href;

  const footerDict = dict?.footer || {
    mission:
      "Al Kahaf Academy — online Quran and Islamic education for children and adults — official website: www.alkahafacademy.com. Shaping hearts and minds in the light of the Qur'an since 2015.",
    programsTitle: "Our Programs",
    quickLinksTitle: "Quick Links",
    stayConnectedTitle: "Stay Connected",
    copyright: "© Al Kahaf Academy. Licensed & Registered.",
    developedBy: "Developed by",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    available: "100% Online Quran Academy Worldwide",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61573956185952",
      instagram: "https://www.instagram.com/academiealkahafacademy",
    },
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
                alt="Al Kahaf Academy — Online Quran & Islamic Education"
                width={200}
                height={200}
                className="relative h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-[#5C4A3E] max-w-sm font-sans text-sm leading-relaxed">
              {footerDict.mission}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={
                  footerDict.social?.facebook ||
                  "https://www.facebook.com/profile.php?id=61573956185952"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Al Kahaf Academy Official Facebook Page"
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#EAE3D6] text-xs font-bold text-[#2D1C13] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                Facebook
              </a>
              <a
                href={
                  footerDict.social?.instagram ||
                  "https://www.instagram.com/academiealkahafacademy"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Al Kahaf Academy Official Instagram Profile"
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#EAE3D6] text-xs font-bold text-[#2D1C13] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#2D1C13] font-serif tracking-wide">
              {footerDict.programsTitle}
            </h4>
            <ul className="space-y-3 text-[#5C4A3E] font-sans text-sm">
              <li>
                <Link
                  href={getLocalizedHref("/courses/noorani-qaida")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  Noorani Qaida &amp; Nazra Online
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/courses/tajweed")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  Online Quran with Tajweed
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/courses/hifz")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  Online Hifz Quran Program
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/courses/islamic-studies")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  Islamic Studies &amp; Tarbiyah
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/courses/arabic")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  Quranic Arabic Language
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/courses/adults")}
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  Adult &amp; Sisters Quran Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#2D1C13] font-serif tracking-wide">
              {footerDict.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-[#5C4A3E] font-sans text-sm">
              <li>
                <Link
                  href={getLocalizedHref("/courses")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  All Courses
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
                  href={getLocalizedHref("/online-classes")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {dict?.navigation?.onlineClasses || "Online Classes"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/teachers")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Our Teachers &amp; Methodology
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/pricing")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Pricing &amp; Fee Plans
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/schedule")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  24/7 Class Schedule
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/free-trial")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Free 3-Day Trial
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/faq")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/blog")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Quran Learning Guides &amp; Blog
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
              <li>
                <Link
                  href={getLocalizedHref("/enroll")}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Enroll Now
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
                  <br /> Available 24/7 Globally (UK, USA, Canada, Australia &amp; Europe)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <a
                  href="https://wa.me/923222597066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A059] transition-colors font-medium"
                >
                  +92 322 2597066 (WhatsApp 24/7)
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#9F7A38] text-xs font-semibold">
                Official Site: www.alkahafacademy.com
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
