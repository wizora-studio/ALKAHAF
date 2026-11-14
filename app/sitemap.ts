import { MetadataRoute } from "next";
import { COURSES_DATA } from "@/lib/courses-data";
import { BLOG_POSTS } from "@/lib/blog-data";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  lastModified?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alkahafacademy.com";

  // Per-page lastModified dates are the last git commit touching each page's
  // file (git log -1 --format=%cI), so Google sees real freshness per URL
  // instead of one shared hardcoded date.
  const staticRoutes: RouteConfig[] = [
    { path: "", priority: 1.0, changeFrequency: "daily", lastModified: "2026-11-11T16:34:42+05:00" },
    { path: "/courses", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/programs", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/online-classes", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/free-trial", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-11-12T19:34:58+05:00" },
    { path: "/admissions", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/pricing", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/teachers", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-11-12T19:34:58+05:00" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-11-12T19:34:58+05:00" },
    { path: "/about", priority: 0.75, changeFrequency: "monthly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/schedule", priority: 0.75, changeFrequency: "weekly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/online-quran-classes-uk", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/online-quran-classes-usa", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/online-quran-classes-canada", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/online-quran-classes-australia", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/online-quran-classes-europe", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T18:45:18+05:00" },
    { path: "/online-quran-classes-germany", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/online-quran-classes-france", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/online-quran-classes-netherlands", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-11-11T18:45:18+05:00" },
    { path: "/online-quran-classes-ireland", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-11-11T18:45:18+05:00" },
    { path: "/online-quran-classes-spain", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-11-11T18:45:18+05:00" },
    { path: "/online-quran-classes-italy", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-11-11T18:45:18+05:00" },
    { path: "/online-hifz-classes", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-12T19:34:58+05:00" },
    { path: "/quran-classes-for-kids", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/quran-classes-for-sisters", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/quran-classes-for-adults", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-11-11T17:46:21+05:00" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-15T16:27:11+05:00" },
    { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-15T16:27:11+05:00" },
  ];

  const courseRoutes: RouteConfig[] = COURSES_DATA.map((course) => ({
    path: `/courses/${course.slug}`,
    priority: 0.9,
    changeFrequency: "weekly",
    // All course pages share app/(site)/courses/[slug]/page.tsx
    lastModified: "2026-10-15T16:27:11+05:00",
  }));

  const blogRoutes: RouteConfig[] = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified: post.dateModified,
  }));

  // Fallback only for routes with no page file: the latest blog date.
  const latestBlogDate = BLOG_POSTS.reduce(
    (latest, post) => (post.dateModified > latest ? post.dateModified : latest),
    BLOG_POSTS[0]?.dateModified ?? "2026-11-14",
  );

  const allRoutes = [...staticRoutes, ...courseRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastModified ?? latestBlogDate),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
