import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PagesHero from "@/components/sections/pageshero";
import AdmissionsForm from "@/components/sections/admissions-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import { Breadcrumbs, ENTITY_STATEMENT, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { Sparkles, Check, Calendar, ShieldCheck, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a 3-Day Free Online Quran Trial — No Credit Card Required",
  description:
    "Try 3 free live 1-on-1 online Quran classes at Al Kahaf Academy with certified male or female teachers. Includes level assessment, Tajweed evaluation, and custom study plan.",
  path: "/free-trial",
  keywords: [
    "Free online Quran trial",
    "3 day free Quran classes",
    "Free Tajweed assessment class",
    "Online Quran tutor free trial",
    "Al Kahaf Academy free trial",
  ],
});

const TRIAL_FAQS = [
  {
    question: "Is a credit card required for the 3-day free trial?",
    answer:
      "No. You do not need to enter any payment or credit card details to book and complete your 3-day free trial at Al Kahaf Academy.",
  },
  {
    question: "What happens during the 3 free trial sessions?",
    answer:
      "Day 1 covers a friendly reading and Makharij assessment with your assigned tutor. Day 2 introduces a live interactive lesson in your chosen track (Noorani Qaida, Tajweed, Hifz, or Islamic Studies). Day 3 reviews progress and provides parents or adult students with a recommended weekly learning plan.",
  },
  {
    question: "Can I request a female Quran tutor for my free trial?",
    answer:
      "Yes. Simply mention your preference on the registration form or via WhatsApp, and we will schedule your trial sessions with a certified female Qariah or Hafiza.",
  },
];

export default async function FreeTrialPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen">
      <FAQPageJsonLd faqs={TRIAL_FAQS} />
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "3-Day Free Trial", href: "/free-trial" }]} />

      <PagesHero
        title="Start Your 3-Day Free Online Quran Trial"
        description="Experience three live 1-on-1 sessions with a certified male or female Quran tutor—including a personalized Tajweed and level evaluation—before choosing any monthly plan."
        imageSrc="/images/online-quran-students.jpg"
        imageAlt="3-Day Free Online Quran Trial at Al Kahaf Academy"
        badge={{
          text: "No Credit Card Required • 1-on-1 Live Classes",
          icon: Sparkles,
        }}
        primaryAction={{
          text: "Book Free Trial Below",
          href: "#trial-registration",
        }}
        secondaryAction={{
          text: "Compare Monthly Plans",
          href: "/pricing",
        }}
      />

      {/* What Happens in the 3-Day Trial */}
      <section className="py-16 md:py-20 bg-white border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              How Your Free Trial Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              Three Live 30-Minute Sessions With Zero Obligation
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A3E]">
              {ENTITY_STATEMENT} We want every parent and student to feel completely confident in our teaching style before enrolling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EAE3D6] space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
                <Calendar className="w-3.5 h-3.5" />
                Trial Day 1
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Friendly Introduction &amp; Level Assessment
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Meet your assigned male or female tutor on Zoom or Google Meet. We gently assess letter recognition, Makharij, and reading fluency to identify the ideal starting module.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EAE3D6] space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
                <Users className="w-3.5 h-3.5" />
                Trial Day 2
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Interactive Screen-Shared Lesson
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Experience a full 1-on-1 lesson in your chosen course—whether{" "}
                <Link href="/courses/noorani-qaida" className="text-[#9F7A38] font-bold hover:underline">
                  Noorani Qaida
                </Link>
                ,{" "}
                <Link href="/courses/tajweed" className="text-[#9F7A38] font-bold hover:underline">
                  Quran with Tajweed
                </Link>
                , or{" "}
                <Link href="/courses/hifz" className="text-[#9F7A38] font-bold hover:underline">
                  Hifz Memorization
                </Link>
                —plus daily Duas and Tarbiyah.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EAE3D6] space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-xs font-bold text-[#9F7A38]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Trial Day 3
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D1C13]">
                Personalized Study Plan &amp; Schedule Selection
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Receive feedback on strengths, recommended weekly frequency (2, 3, or 5 days/week), and lock in your preferred local time slots if you decide to continue.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE3D6] grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "No credit card or upfront payment",
              "Choice of male or female certified tutor",
              "Available in USA, UK, Canada, Europe & AU time zones",
              "Free tutor switch anytime during trial",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#2D1C13]">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0 stroke-[3]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is the trial for? — audience entry points */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
              Who Is the Trial For?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D1C13]">
              A Free Trial Made for Every Learner
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A3E]">
              The 3-day free trial works the same for everyone — one
              dedicated teacher, a level assessment, and a plan built around
              you. Choose the page made for your learner first:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/quran-classes-for-kids"
              className="p-7 rounded-3xl bg-white border border-[#EAE3D6] hover:border-[#C5A059] transition-all group space-y-3"
            >
              <h3 className="text-xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors">
                For Kids (Ages 5–15)
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Patient teachers, 30-minute lessons after school, female
                teachers for girls, and monthly progress reports for parents.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9F7A38]">
                Kids classes
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/quran-classes-for-sisters"
              className="p-7 rounded-3xl bg-white border border-[#EAE3D6] hover:border-[#C5A059] transition-all group space-y-3"
            >
              <h3 className="text-xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors">
                For Sisters &amp; Girls
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Certified female teachers (Qariah &amp; Hafiza), private
                1-on-1 classes, and flexible timings in your time zone.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9F7A38]">
                Sisters classes
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/quran-classes-for-adults"
              className="p-7 rounded-3xl bg-white border border-[#EAE3D6] hover:border-[#C5A059] transition-all group space-y-3"
            >
              <h3 className="text-xl font-serif font-bold text-[#2D1C13] group-hover:text-[#9F7A38] transition-colors">
                For Adults
              </h3>
              <p className="text-sm text-[#5C4A3E] leading-relaxed">
                Start from the Arabic alphabet even if you never learned to
                read — new Muslims welcome, with evening and weekend slots.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9F7A38]">
                Adult classes
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <div id="trial-registration" className="scroll-mt-24">
        <AdmissionsForm dict={dict.admissions.form} lang="en" />
      </div>

      {/* Trial FAQs */}
      <section className="py-16 bg-white border-t border-[#EAE3D6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-[#2D1C13] text-center">
            Free Trial Questions
          </h2>
          <div className="space-y-4">
            {TRIAL_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE3D6] space-y-2"
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

      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
