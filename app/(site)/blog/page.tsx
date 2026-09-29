import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PagesHero from "@/components/sections/pageshero";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Breadcrumbs, ENTITY_STATEMENT } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { BookOpen, ArrowRight, Clock, Calendar, UserCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Quran & Tajweed Learning Guides — Al Kahaf Academy Educational Blog",
  description:
    "Read scholar-reviewed guides on learning Quran with Tajweed, Noorani Qaida for beginners, realistic Hifz memorization timelines, and choosing a qualified online Quran tutor.",
  path: "/blog",
  keywords: [
    "Quran learning blog",
    "Tajweed guides for beginners",
    "Noorani Qaida vs Quran reading",
    "How long to memorize Quran",
    "Al Kahaf Academy guides",
  ],
});

export default async function BlogIndexPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "Guides & Blog", href: "/blog" }]} />

      <PagesHero
        title="Quran, Tajweed & Hifz Learning Guides"
        description="Practical, scholar-reviewed educational articles for parents, adult beginners, and students learning the Holy Quran online."
        imageSrc="/images/quran-rehal-still-life.jpg"
        imageAlt="Al Kahaf Academy Educational Guides & Blog"
        badge={{
          text: "Reviewed by Our Academic Council",
          icon: BookOpen,
        }}
        primaryAction={{
          text: "Book 3-Day Free Trial",
          href: "/free-trial",
        }}
        secondaryAction={{
          text: "Browse All Courses",
          href: "/courses",
        }}
      />

      {/* Editorial Authority Banner */}
      <section className="py-12 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              <UserCheck className="w-4 h-4" />
              Editorial &amp; Scholarly Review Policy
            </div>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              {ENTITY_STATEMENT} Every guide published in our learning hub is written and reviewed by certified Qaris, Qariahs, and Hifz supervisors to give families accurate, practical advice.
            </p>
          </div>
          <Link
            href="/teachers"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] text-xs font-bold text-[#2D1C13] shrink-0 transition-all"
          >
            <span>Meet Our Faculty Standards</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl p-7 border border-[#EAE3D6] hover:border-[#C5A059]/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#6E5C4F]">
                    <span className="px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 font-bold text-[#9F7A38]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2D1C13] leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#9F7A38] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#5C4A3E] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE3D6] space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#6E5C4F]">
                    <span className="font-semibold text-[#2D1C13]">{post.authorName}</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      {post.dateModified}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#2D1C13] bg-[#FAF7F2] hover:bg-[#C5A059] hover:text-white transition-all"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
