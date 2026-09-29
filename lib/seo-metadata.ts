import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/components/seo/JsonLd";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = path === "/" || path === "" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: `${SITE_URL}/images/og-preview.jpg`,
          secureUrl: `${SITE_URL}/images/og-preview.jpg`,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/images/og-preview.jpg`],
    },
  };
}
