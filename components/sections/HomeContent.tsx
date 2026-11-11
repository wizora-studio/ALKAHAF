"use client";

import React from "react";
import HeroSection from "@/components/sections/hero";
import UltraHero from "@/components/ultra/UltraHero";
import StatCounter from "@/components/sections/counter";
import UltraStats from "@/components/ultra/UltraStats";
import ProgramsOverview from "@/components/sections/programs-overview";
import WhyUs from "@/components/sections/why-us";
import ThreeStepsAway from "@/components/sections/ThreeStepsAway";
import PricingPlans from "@/components/sections/PricingPlans";
import Testimonials from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";
import FAQSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import UltraFloatingSwitcher from "@/components/ultra/UltraFloatingSwitcher";
import { useUltraMode } from "@/components/context/ultra-mode-context";

interface HomeContentProps {
  dict: any;
  lang: string;
  totalStudents: number;
}

export default function HomeContent({ dict, lang, totalStudents }: HomeContentProps) {
  const { isUltraMode } = useUltraMode();

  return (
    <>
      <UltraFloatingSwitcher />

      {isUltraMode ? (
        <>
          <UltraHero dict={dict?.hero} lang={lang} />
          <UltraStats
            dict={dict?.stats}
            counts={{
              students: totalStudents,
              teachers: 15,
              classes: 120,
              experience: 10,
            }}
          />
        </>
      ) : (
        <>
          <HeroSection dict={dict?.hero} lang={lang} />
          <StatCounter
            dict={dict?.stats}
            counts={{
              students: totalStudents,
              teachers: 15,
              classes: 120,
              experience: 10,
            }}
          />
        </>
      )}

      <ProgramsOverview dict={dict?.programs} lang={lang} />
      <WhyUs dict={dict?.whyUs} />
      <ThreeStepsAway lang={lang} dict={dict} />
      <PricingPlans dict={dict?.pricing} />
      <Testimonials />
      <CtaBanner dict={dict?.cta} />
      <FAQSection dict={dict?.faq} />
      <ContactForm dict={dict?.contact} />
      <Newsletter dict={dict} lang={lang} />
    </>
  );
}
