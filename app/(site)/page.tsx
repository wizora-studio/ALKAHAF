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

export const metadata: Metadata = buildPageMetadata({
  title: "Al Kahaf Academy | Online Quran & Islamic Education Worldwide",
  description:
    "Al Kahaf Academy — online Quran and Islamic education for children and adults — official website: www.alkahafacademy.com. Live 1-on-1 Tajweed, Hifz, Noorani Qaida, Arabic, and Islamic Studies classes worldwide.",
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
});

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
