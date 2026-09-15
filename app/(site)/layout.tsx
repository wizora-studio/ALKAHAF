import React from "react";
import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Amiri,
  Scheherazade_New,
  Lateef,
  Noto_Naskh_Arabic,
  Poppins,
} from "next/font/google";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import "../globals.css";
import LiveChatWidget from "@/components/ui/live-chat-widget";
import Script from "next/script";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { UltraModeProvider } from "@/components/context/ultra-mode-context";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const lateef = Lateef({
  variable: "--font-lateef",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"], // Poppins supports Latin
  weight: ["400", "600", "700"],
});

export const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-nastaliq",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://alkahafacademy.com"),
    title: {
      default: "Al Kahaf Academy | Leading Quran & Islamic Institute in Montreal",
      template: "%s | Al Kahaf Academy",
    },
    description:
      "Trusted Online Quran education for children and adults worldwide. Live classes focusing on Tilawah, Tajweed, and character building (Tarbiyah).",
    keywords: [
      "Online Quran classes",
      "Online Quran Academy",
      "Learn Quran online",
      "Tajweed for children",
      "Live Islamic education",
      "Al Kahaf Academy",
      "Online Quran hifz",
      "Arabic classes for kids",
    ],
    authors: [{ name: "Al Kahaf Academy" }],
    creator: "Al Kahaf Academy",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://alkahafacademy.com",
      title: "Online Quran Classes | Register Now - Al Kahaf Academy",
      description:
        "Online Quran classes are specially designed for beginners and all ages. Learn Tilawah, Tajweed, and Islamic studies from qualified teachers. 3 Days Free Trial!",
      siteName: "Al Kahaf Academy",
      images: [
        {
          url: "https://alkahafacademy.com/images/og-preview.jpg",
          secureUrl: "https://alkahafacademy.com/images/og-preview.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: "Online Quran Classes | Register Now - Al Kahaf Academy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Online Quran Classes | Register Now - Al Kahaf Academy",
      description:
        "Online Quran classes are specially designed for beginners and all ages. Learn Tilawah, Tajweed, and Islamic studies from qualified teachers. 3 Days Free Trial!",
      images: ["https://alkahafacademy.com/images/og-preview.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "tuAS_SdU7pnZuwUBr0LQwfqP7Et_c_cVf39FkR8a0lo",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        { url: "/images/alkahaf-emblem.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getDictionary } = await import("@/lib/dictionary");
  const dict = await getDictionary();

  return (
    <html
      lang="en"
      className={`${notoNastaliq.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C5A059" />
        <link rel="image_src" href="https://alkahafacademy.com/images/og-preview.jpg" />
        <meta name="google-site-verification" content="AE2s4AgJTX7lAEZn6Cu9bWGr7VniZFCMO11qAkDjuXg" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9283Z62J9W"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9283Z62J9W');
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${amiri.variable} ${scheherazade.variable} ${lateef.variable} ${notoNaskh.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent focus:text-primary focus:font-bold focus:rounded-xl focus:shadow-2xl"
        >
          Skip to content
        </a>
        <UltraModeProvider>
          {children}
          <LiveChatWidget dict={dict} />
        </UltraModeProvider>
        <Toaster position="top-center" richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
