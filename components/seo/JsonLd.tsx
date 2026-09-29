import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

/**
 * Server-rendered JSON-LD structured data & visible Breadcrumb components for SEO.
 * Adds EducationalOrganization, WebSite, BreadcrumbList, FAQPage, Course, and Article schema.
 */

export const SITE_URL = "https://www.alkahafacademy.com";
export const SITE_NAME = "Al Kahaf Academy";
export const ENTITY_STATEMENT =
  "Al Kahaf Academy — online Quran and Islamic education for children and adults — official website: www.alkahafacademy.com.";
const LOGO_URL = `${SITE_URL}/images/alkahaf-logo.png`;

// ──────────────────────────────────────────────────────────
// Organization + WebSite (render once in layout)
// ──────────────────────────────────────────────────────────

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["Al-Kahaf Academy", "Alkahaf Academy"],
        url: SITE_URL,
        foundingDate: "2015",
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: LOGO_URL,
          width: 512,
          height: 512,
          caption: SITE_NAME,
        },
        image: { "@id": `${SITE_URL}/#logo` },
        description: ENTITY_STATEMENT,
        email: "info@alkahafacademy.com",
        telephone: "+923131491192",
        sameAs: [
          "https://www.facebook.com/share/177ec7697Z/",
          "https://www.instagram.com/alkahafacademy",
        ],
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Pakistan" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+923131491192",
          email: "info@alkahafacademy.com",
          contactType: "customer service",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Arabic", "Urdu"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: ENTITY_STATEMENT,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ──────────────────────────────────────────────────────────
// BreadcrumbList Schema + Visible Breadcrumb Bar
// ──────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav
        aria-label="Breadcrumb"
        className="bg-[#FAF7F2] border-b border-[#EAE3D6]/70 py-2.5 px-5 sm:px-10"
      >
        <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#7A685B] font-medium">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#C5A059] transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]/60" />
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-[#2D1C13] font-semibold"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// ──────────────────────────────────────────────────────────
// FAQPage (render on pages with visible FAQ content)
// ──────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ──────────────────────────────────────────────────────────
// Course (render on course/program detail pages)
// ──────────────────────────────────────────────────────────

export interface CourseData {
  name: string;
  description: string;
  url: string;
  price?: string;
}

export function CourseJsonLd({ course }: { course: CourseData }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: `${SITE_URL}${course.url}`,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT2H30M",
    },
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "USD",
      price: course.price || "25",
      url: `${SITE_URL}/pricing`,
    },
    inLanguage: "en",
    availableLanguage: ["English", "Arabic", "Urdu"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ──────────────────────────────────────────────────────────
// Article (render on blog/resource detail pages)
// ──────────────────────────────────────────────────────────

export interface ArticleData {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
}

export function ArticleJsonLd({ article }: { article: ArticleData }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: article.authorName,
      url: `${SITE_URL}/teachers`,
    },
    publisher: {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    image: article.image || `${SITE_URL}/images/og-preview.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${article.url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
