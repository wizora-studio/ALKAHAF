import React from "react";
import type { Metadata } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomeContent from "@/components/sections/HomeContent";
import { getDictionary } from "@/lib/dictionary";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const revalidate = 3600;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Online Quran Classes for Kids & Adults | Al Kahaf Academy",
    description:
      "Live 1-on-1 online Quran classes with Tajweed, Hifz & Noorani Qaida. Certified male & female teachers, flexible 24/7 timings. Start a free 3-day trial.",
    path: "/",
    keywords: [
      "Al Kahaf Academy",
      "alkahafacademy",
      "online Quran classes",
      "online Quran academy",
      "learn Quran online",
      "online Tajweed classes",
      "online Hifz classes",
      "Noorani Qaida online",
      "female Quran teacher online",
    ],
  }),
  // Absolute title: the layout title template ("%s | Al Kahaf Academy")
  // would otherwise append the brand a second time. This renders exactly
  // the title above, with no duplication.
  title: {
    absolute: "Online Quran Classes for Kids & Adults | Al Kahaf Academy",
  },
};

export default async function Page() {
  const dict = await getDictionary();
  let totalStudents = 0;
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
    if (supabaseUrl && supabaseKey) {
      const supabase = createSupabaseClient(supabaseUrl, supabaseKey);
      const [{ count: online }, { count: physical }] = await Promise.all([
        supabase.from("online_enrollments").select("*", { count: "exact", head: true }),
        supabase.from("physical_enrollments").select("*", { count: "exact", head: true }),
      ]);
      totalStudents = (online || 0) + (physical || 0);
    }
  } catch {
    totalStudents = 0;
  }

  const faqItems = (dict.faq?.questions || []).map((item: { q: string; a: string }) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <main
      id="main-content"
      className="bg-white dark:bg-gray-950 overflow-hidden"
    >
      {faqItems.length > 0 && <FAQPageJsonLd faqs={faqItems} />}
      <Navbar dict={dict} />
      <HomeContent dict={dict} lang="en" totalStudents={totalStudents} />
      <Footer dict={dict} />
    </main>
  );
}
