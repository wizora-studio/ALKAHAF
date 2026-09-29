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
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { UltraModeProvider } from "@/components/context/ultra-mode-context";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  preload: false,
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["arabic"],
  weight: ["400", "700"],
  preload: false,
});

const lateef = Lateef({
  variable: "--font-lateef",
  subsets: ["arabic"],
  weight: ["400", "700"],
  preload: false,
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-nastaliq",
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.alkahafacademy.com"),
    title: {
      default: "Al Kahaf Academy | Online Quran & Islamic Education Worldwide",
      template: "%s | Al Kahaf Academy",
    },
    description:
      "Al Kahaf Academy — online Quran and Islamic education for children and adults — official website: www.alkahafacademy.com. Live 1-on-1 Tajweed, Hifz, Noorani Qaida, Arabic, and Islamic Studies classes worldwide.",
    keywords: [
      "Al Kahaf Academy",
      "alkahafacademy",
      "Online Quran classes",
      "Online Quran Academy",
      "Learn Quran online",
      "Online Tajweed classes",
      "Online Hifz classes",
      "Noorani Qaida online",
      "Female Quran teacher online",
      "Quranic Arabic online",
      "Islamic studies for kids online",
    ],
    authors: [{ name: "Al Kahaf Academy", url: "https://www.alkahafacademy.com" }],
    creator: "Al Kahaf Academy",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.alkahafacademy.com",
      title: "Al Kahaf Academy | Online Quran & Islamic Education Worldwide",
      description:
        "Al Kahaf Academy — online Quran and Islamic education for children and adults — official website: www.alkahafacademy.com. Start with a 3-Day Free Trial!",
      siteName: "Al Kahaf Academy",
      images: [
        {
          url: "https://www.alkahafacademy.com/images/og-preview.jpg",
          secureUrl: "https://www.alkahafacademy.com/images/og-preview.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: "Al Kahaf Academy — Online Quran & Islamic Education Worldwide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Al Kahaf Academy | Online Quran & Islamic Education Worldwide",
      description:
        "Al Kahaf Academy — online Quran and Islamic education for children and adults — official website: www.alkahafacademy.com. Start with a 3-Day Free Trial!",
      images: ["https://www.alkahafacademy.com/images/og-preview.jpg"],
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
    alternates: {
      canonical: "https://www.alkahafacademy.com",
    },
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
        <link rel="image_src" href="https://www.alkahafacademy.com/images/og-preview.jpg" />
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
        <OrganizationJsonLd />
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
