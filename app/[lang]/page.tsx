import React from "react";
import Navbar from "@/components/layout/header";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/layout/footer";
import ProgramsOverview from "@/components/sections/programs-overview";
import WhyUs from "@/components/sections/why-us";
import CtaBanner from "@/components/sections/cta-banner";
import FAQSection from "@/components/sections/faq";
import StatCounter from "@/components/sections/counter";
import ThreeStepsAway from "@/components/sections/ThreeStepsAway";
import Newsletter from "@/components/sections/newsletter";
// import GoogleMap from "@/components/sections/googlemap";
import PricingPlans from "@/components/sections/PricingPlans";
import { getDictionary } from "@/lib/dictionary";
import ContactForm from "@/components/sections/contact-form";
import { createClient } from "@/utils/supabase/server";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  let totalStudents = 0;
  try {
    const supabase = await createClient();
    const [{ count: online }, { count: physical }] = await Promise.all([
      supabase.from("online_enrollments").select("*", { count: "exact", head: true }),
      supabase.from("physical_enrollments").select("*", { count: "exact", head: true }),
    ]);
    totalStudents = (online || 0) + (physical || 0);
  } catch {
    totalStudents = 0;
  }

  return (
    <main
      id="main-content"
      className="bg-white dark:bg-gray-950 overflow-hidden"
    >
      <Navbar lang={lang} dict={dict} />
      <HeroSection dict={dict.hero} lang={lang} />
      <StatCounter
        dict={dict.stats}
        counts={{
          students: totalStudents && totalStudents > 50 ? totalStudents : 50,
          teachers: 15,
          classes: 120,
          experience: 20,
        }}
      />

      <ProgramsOverview dict={dict.programs} lang={lang} />
      <WhyUs dict={dict.whyUs} />
      <ThreeStepsAway lang={lang} dict={dict} />
      <PricingPlans dict={dict.pricing} />
      <CtaBanner dict={dict.cta} />
      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      {/* <GoogleMap dict={dict.common} /> */}
      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
