import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import GoogleMap from "@/components/sections/googlemap";
import { Breadcrumbs } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us — Get in Touch with Al Kahaf Academy (24/7 WhatsApp)",
  description:
    "Contact Al Kahaf Academy for inquiries about online Quran classes, free trial scheduling, fee plans, or course selection. Available 24/7 via WhatsApp (+92 322 2597066).",
  path: "/contact",
  keywords: [
    "Contact Al Kahaf Academy",
    "Al Kahaf Academy WhatsApp",
    "Online Quran academy contact",
  ],
});

export default async function ContactPage() {
  const dict = await getDictionary();

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar dict={dict} />
      <Breadcrumbs items={[{ name: "Contact Us", href: "/contact" }]} />

      <PagesHero
        title={dict.contact.hero.title}
        description={dict.contact.hero.description}
        imageSrc="/images/img3.jpg"
        badge={{ text: dict.contact.hero.badge, icon: Phone }}
      />

      <ContactForm dict={dict.contact} />

      <FAQSection dict={dict.faq} />

      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}
