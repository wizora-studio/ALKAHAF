import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"], // Protecting sensitive or internal routes
    },
    sitemap: "https://www.alkahafacademy.com/sitemap.xml",
  };
}
