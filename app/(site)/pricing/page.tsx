import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Pricing from "@/components/sections/pricing";
import Newsletter from "@/components/sections/newsletter";
import FAQSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import { getDictionary } from "@/lib/dictionary";
import { Breadcrumbs } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing & Plans — Affordable Online Quran Classes ($25–$45/mo)",
  description:
    "Transparent, affordable online Quran and Islamic studies fee plans starting from $25/month. Choose 2, 3, or 5 days/week with sibling discounts and a 3-day free trial.",
  path: "/pricing",
  keywords: [
    "Online Quran classes pricing",
    "Quran academy fee plans",
    "Affordable online Quran tutor",
    "Al Kahaf Academy pricing",
  ],
});

export default async function PricingPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "Pricing & Plans", href: "/pricing" }]} />

      <section className="py-14 md:py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            {dict.pricing.title}{" "}
            <span className="text-accent italic">{dict.pricing.highlight}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            {dict.pricing.description}
          </p>
        </div>
      </section>

      <Pricing dict={dict.pricing} />

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
