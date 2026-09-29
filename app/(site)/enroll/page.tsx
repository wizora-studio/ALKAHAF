import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/header";
import { getDictionary } from "@/lib/dictionary";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import AdmissionsForm from "@/components/sections/admissions-form";
import Newsletter from "@/components/sections/newsletter";
import { CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Enroll Now — Start Your Online Quran Learning Journey",
  description:
    "Register online at Al Kahaf Academy for personalized 1-on-1 Quran classes. Choose Noorani Qaida, Tajweed, Hifz, Islamic Studies, or Arabic. Start with a 3-day free trial.",
  path: "/enroll",
  keywords: [
    "Enroll online Quran classes",
    "Register Al Kahaf Academy",
    "Book free Quran trial",
  ],
});

export default async function EnrollPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "Enroll Now", href: "/enroll" }]} />

      <PagesHero
        title="Enroll in Online Quran Classes"
        description={dict.admissions.hero.description}
        imageSrc="/images/boy-quran-admissions.jpg"
        imageAlt="Young student holding the Holy Quran"
        badge={{ text: dict.admissions.hero.badge, icon: CheckCircle }}
      />

      <AdmissionsForm dict={dict.admissions.form} lang="en" />

      <FAQSection dict={dict.faq} />

      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
