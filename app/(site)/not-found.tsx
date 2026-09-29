import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getDictionary } from "@/lib/dictionary";
import { BookOpen, Home, HelpCircle, Sparkles, ArrowRight } from "lucide-react";

export default async function NotFound() {
  const dict = await getDictionary();

  return (
    <main className="bg-[#FCFBF8] text-[#2D1C13] overflow-hidden min-h-screen flex flex-col justify-between">
      <Navbar dict={dict} />

      <section className="pt-36 pb-24 px-5 sm:px-10">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE3D6] shadow-xs text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-bold uppercase tracking-wider text-[#9F7A38]">
            Error 404 — Page Not Found
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#2D1C13]">
            We Couldn&apos;t Find That Page
          </h1>

          <p className="text-base sm:text-lg text-[#5C4A3E] max-w-xl mx-auto leading-relaxed">
            The page you are looking for may have been moved or does not exist on{" "}
            <strong className="text-[#2D1C13]">www.alkahafacademy.com</strong>. Explore our online Quran courses or start your 3-day free trial below.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 text-left">
            <Link
              href="/"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <span className="inline-flex items-center gap-3 font-bold text-sm text-[#2D1C13]">
                <Home className="w-4 h-4 text-[#C5A059]" />
                Return to Homepage
              </span>
              <ArrowRight className="w-4 h-4 text-[#9F7A38]" />
            </Link>

            <Link
              href="/courses"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <span className="inline-flex items-center gap-3 font-bold text-sm text-[#2D1C13]">
                <BookOpen className="w-4 h-4 text-[#C5A059]" />
                Browse Quran Courses
              </span>
              <ArrowRight className="w-4 h-4 text-[#9F7A38]" />
            </Link>

            <Link
              href="/free-trial"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <span className="inline-flex items-center gap-3 font-bold text-sm text-[#2D1C13]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Book 3-Day Free Trial
              </span>
              <ArrowRight className="w-4 h-4 text-[#9F7A38]" />
            </Link>

            <Link
              href="/faq"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D6] hover:border-[#C5A059] transition-all"
            >
              <span className="inline-flex items-center gap-3 font-bold text-sm text-[#2D1C13]">
                <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                Read Frequently Asked Questions
              </span>
              <ArrowRight className="w-4 h-4 text-[#9F7A38]" />
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}
