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

  const staticRoutes: RouteConfig[] = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/courses", priority: 0.95, changeFrequency: "weekly" },
    { path: "/programs", priority: 0.9, changeFrequency: "weekly" },
    { path: "/online-classes", priority: 0.9, changeFrequency: "weekly" },
    { path: "/free-trial", priority: 0.9, changeFrequency: "weekly" },
    { path: "/admissions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.85, changeFrequency: "weekly" },
    { path: "/teachers", priority: 0.85, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" },
    { path: "/schedule", priority: 0.75, changeFrequency: "weekly" },
    { path: "/enroll", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
  ];

  const courseRoutes: RouteConfig[] = COURSES_DATA.map((course) => ({
    path: `/courses/${course.slug}`,
    priority: 0.9,
    changeFrequency: "weekly",
  }));

  const blogRoutes: RouteConfig[] = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified: post.dateModified,
  }));

  const allRoutes = [...staticRoutes, ...courseRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastModified ?? "2025-09-28"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
