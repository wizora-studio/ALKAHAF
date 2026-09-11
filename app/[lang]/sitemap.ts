import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alkahafacademy.com";
  const locales = ["fr", "en"];
  const routes = [
    "",
    "/about",
    "/admissions",
    "/enroll",
    "/contact",
    "/online-classes",
    "/pricing",
    "/programs",
    "/schedule",
    "/privacy-policy",
    "/terms-conditions",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
