import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
import {
  ArticleJsonLd,
  Breadcrumbs,
  ENTITY_STATEMENT,
  FAQPageJsonLd,
  SITE_URL,
} from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  BookOpen,
  Check,
  Clock,
  Calendar,
  UserCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Guide Not Found",
      description: "Explore Al Kahaf Academy's online Quran and Tajweed learning guides.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return buildPageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    keywords: [
      post.title,
      post.category,
      "Al Kahaf Academy",
      "Online Quran learning guide",
    ],
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const dict = await getDictionary();
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <ArticleJsonLd
        article={{
          headline: post.title,
          description: post.metaDescription,
          url: `/blog/${post.slug}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          authorName: post.authorName,
          image: `${SITE_URL}${post.image}`,
        }}
      />
      <FAQPageJsonLd faqs={post.faqs} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[
          { name: "Guides & Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Article Header */}
      <header className="pt-28 pb-12 md:pt-32 md:pb-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 font-bold text-[#9F7A38]">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[#6E5C4F] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-[#6E5C4F] font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              Updated {post.dateModified}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D1C13] leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Scholarly Review Byline */}
          <div className="pt-4 border-t border-[#EAE3D6] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#5C4A3E]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#C5A059]/40 flex items-center justify-center text-[#9F7A38] font-bold">
                AK
              </div>
              <div>
                <p className="font-bold text-[#2D1C13]">{post.authorName}</p>
                <p>{post.authorRole}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#EAE3D6]">
              <UserCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>
                Reviewed by: <strong className="text-[#2D1C13]">{post.reviewerName}</strong>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-12">
          {/* Key Takeaways Box */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#C5A059]/40 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              <Sparkles className="w-4 h-4" />
              Key Takeaways
            </div>
            <ul className="space-y-3">
              {post.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#2D1C13] font-medium">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-1 stroke-[3]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {post.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1C13]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-[#4A3A2F] leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="space-y-3 pt-2 pl-1">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#2D1C13] bg-white p-4 rounded-2xl border border-[#EAE3D6]"
                      >
                        <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-1 stroke-[3]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Related Course Callout */}
          <div className="bg-[#2D1C13] text-white rounded-3xl p-8 sm:p-10 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E6C786]">
              <BookOpen className="w-4 h-4" />
              Recommended 1-on-1 Course
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              {post.relatedCourseTitle}
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {ENTITY_STATEMENT} Practice live 1-on-1 with our certified male and female teachers and receive a personalized evaluation during your 3-day free trial.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={`/courses/${post.relatedCourseSlug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#2D1C13] bg-[#E6C786] hover:bg-white transition-all"
              >
                <span>View Course Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/free-trial"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                <span>Book 3-Day Free Trial</span>
              </Link>
            </div>
          </div>

          {/* Article FAQs */}
          <section className="space-y-5 pt-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1C13]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#EAE3D6] space-y-2"
                >
                  <h3 className="text-lg font-serif font-bold text-[#2D1C13]">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* Related Guides */}
      <section className="py-16 bg-white border-t border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1C13]">
              More Quran Learning Guides
            </h2>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-wider text-[#9F7A38] hover:underline"
            >
              View All Guides →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE3D6] hover:border-[#C5A059] transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9F7A38]">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C4A3E] line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D1C13] group-hover:text-[#9F7A38]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
