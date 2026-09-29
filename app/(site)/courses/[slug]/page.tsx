import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PagesHero from "@/components/sections/pageshero";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { COURSES_DATA, getCourseBySlug } from "@/lib/courses-data";
import {
  Breadcrumbs,
  CourseJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import {
  BookOpen,
  Check,
  Clock,
  Calendar,
  Monitor,
  ShieldCheck,
  Users,
  ArrowRight,
  GraduationCap,
  HelpCircle,
} from "lucide-react";

export async function generateStaticParams() {
  return COURSES_DATA.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return buildPageMetadata({
      title: "Course Not Found",
      description: "The requested course could not be found.",
      path: `/courses/${slug}`,
    });
  }

  return buildPageMetadata({
    title: course.metaTitle,
    description: course.metaDescription,
    path: `/courses/${course.slug}`,
    keywords: [
      course.shortTitle,
      course.metaTitle,
      "Al Kahaf Academy",
      "online Quran classes",
      "1-on-1 Quran tutor",
    ],
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const dict = await getDictionary();
  const relatedCourseObjects = course.relatedCourses
    .map((relSlug) => getCourseBySlug(relSlug))
    .filter(Boolean);

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <CourseJsonLd
        course={{
          name: course.title,
          description: course.metaDescription,
          url: `/courses/${course.slug}`,
          price: course.durationAndFormat.priceNumber,
        }}
      />
      <FAQPageJsonLd faqs={course.faqs} />
      <Navbar dict={dict} />
      <Breadcrumbs
        items={[
          { name: "Courses", href: "/courses" },
          { name: course.shortTitle, href: `/courses/${course.slug}` },
        ]}
      />

      <PagesHero
        title={course.title}
        description={course.heroSubtitle}
        imageSrc="/images/islamic-academy-hall.jpg"
        imageAlt={course.title}
        badge={{
          text: course.heroBadge,
          icon: BookOpen,
        }}
        primaryAction={{
          text: "Start 3-Day Free Trial",
          href: "/free-trial",
        }}
        secondaryAction={{
          text: "View Monthly Fee Plans",
          href: "/pricing",
        }}
      />

      {/* Course Overview & Format Sidebar */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                Course Overview
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
                About the {course.shortTitle} Course
              </h2>
              <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed">
                {course.overview}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                Who This Course Is For
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.whoIsItFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] flex items-start gap-3"
                  >
                    <Users className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#2D1C13]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30 space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
                Prerequisites
              </p>
              <p className="text-sm text-[#2D1C13] font-medium">
                {course.prerequisites}
              </p>
            </div>

            {/* Learning Outcomes */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
                What Students Will Achieve (Learning Outcomes)
              </h3>
              <ul className="space-y-3">
                {course.learningOutcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#5C4A3E] font-medium"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sticky Summary Card */}
          <aside className="lg:col-span-1">
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EAE3D6] shadow-sm space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A685B]">
                  Course Tuition
                </span>
                <div className="text-3xl font-serif font-bold text-[#2D1C13] mt-1">
                  {course.durationAndFormat.startingPrice}
                </div>
                <p className="text-xs text-[#7A685B] mt-1">
                  Includes 3-Day Free Trial • No long-term contract
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#EAE3D6] text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#2D1C13]">Session Length</p>
                    <p className="text-[#5C4A3E]">{course.durationAndFormat.sessionLength}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#2D1C13]">Weekly Schedule</p>
                    <p className="text-[#5C4A3E]">{course.durationAndFormat.frequency}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#2D1C13]">Class Format</p>
                    <p className="text-[#5C4A3E]">{course.durationAndFormat.mode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#2D1C13]">Instructors</p>
                    <p className="text-[#5C4A3E]">Certified Male &amp; Female Tutors</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Link
                  href="/free-trial"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white bg-[#C5A059] hover:bg-[#B38F46] transition-all shadow-md"
                >
                  <span>Book 3-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[#2D1C13] bg-white border border-[#EAE3D6] hover:border-[#C5A059] text-sm transition-all"
                >
                  <span>Compare All Fee Plans</span>
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-[#5C4A3E] hover:text-[#C5A059] text-xs transition-colors"
                >
                  <span>Check 24/7 Time Zone Slots →</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Structured Curriculum Modules */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Structured Syllabus
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              Curriculum Sequence &amp; Learning Modules
            </h2>
            <p className="text-[#5C4A3E] text-base">
              Students progress step by step through each module with regular evaluations and personalized teacher feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {course.curriculum.map((mod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#EAE3D6] shadow-xs space-y-4"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
                  {mod.moduleNumber}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                  {mod.title}
                </h3>
                <ul className="space-y-2.5 pt-2">
                  {mod.topics.map((topic, tIdx) => (
                    <li
                      key={tIdx}
                      className="flex items-start gap-2.5 text-sm text-[#5C4A3E]"
                    >
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology & Safeguarding */}
      <section className="py-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <GraduationCap className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              How Our Teachers Deliver This Course
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              {course.teacherApproach}
            </p>
            <div className="pt-2">
              <Link
                href="/teachers"
                className="text-sm font-bold text-[#9F7A38] hover:underline"
              >
                Read about our Teacher Qualifications &amp; Selection Standards →
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE3D6] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="text-2xl font-serif font-bold text-[#2D1C13]">
              Parent Visibility &amp; Safeguarding
            </h3>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              {course.safeguardingNote}
            </p>
            <div className="pt-2">
              <Link
                href={`/blog/${course.relatedGuideSlug}`}
                className="text-sm font-bold text-[#9F7A38] hover:underline"
              >
                Related Guide: {course.relatedGuideTitle} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course-Specific FAQs (Visible HTML matching FAQPage Schema) */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
              <HelpCircle className="w-3.5 h-3.5" />
              Course FAQs
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2D1C13]">
              Frequently Asked Questions — {course.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, idx) => (
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
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D1C13]">
              Related Online Courses
            </h2>
            <Link
              href="/courses"
              className="text-sm font-bold text-[#9F7A38] hover:underline"
            >
              View All 6 Courses →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedCourseObjects.map((rel: any) => (
              <Link
                key={rel.slug}
                href={`/courses/${rel.slug}`}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all group space-y-2"
              >
                <span className="text-xs font-bold text-[#9F7A38]">
                  {rel.durationAndFormat.startingPrice}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors">
                  {rel.shortTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4A3E] line-clamp-2">
                  {rel.heroSubtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
