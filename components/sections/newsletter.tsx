"use client";

import React, { useState } from "react";
import { Mail, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/app/actions/send-email";

interface NewsletterProps {
  dict: any;
  lang: string;
}

export default function Newsletter({ dict, lang }: NewsletterProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const newsletterDict = dict.newsletter || {
    title: "Stay Updated",
    description:
      "Subscribe to our newsletter for the latest news, events, and educational tips.",
    placeholder: "Enter your email address",
    button: "Subscribe",
    success: "Successfully subscribed!",
    error: "Failed to subscribe. Please try again.",
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await subscribeNewsletter(formData);
      if (result.success) {
        toast.success(newsletterDict.success);
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || newsletterDict.error);
      }
    } catch (error) {
      toast.error(newsletterDict.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F5F0E6] to-[#FAF7F2] border border-[#EAE3D6] p-8 md:p-12 lg:p-16 shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          ></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#9F7A38] text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Join Our Community</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D1C13] leading-tight">
                {newsletterDict.title}
              </h2>
              <p className="text-[#5C4A3E] text-lg max-w-lg leading-relaxed font-sans font-medium">
                {newsletterDict.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:block relative group">
                <label htmlFor="newsletter-email" className="sr-only">
                  {newsletterDict.placeholder}
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#C5A059] transition-colors" />
                  </div>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    required
                    placeholder={newsletterDict.placeholder}
                    className="w-full pl-12 pr-4 sm:pr-36 py-3.5 sm:py-4 rounded-2xl bg-white border border-[#EAE3D6] text-[#2D1C13] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 focus:border-[#C5A059] transition-all shadow-sm text-sm sm:text-base"
                    aria-label={newsletterDict.placeholder}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto mt-3 sm:mt-0 sm:absolute sm:right-2 sm:top-2 sm:bottom-2 px-6 py-3.5 sm:py-0 rounded-xl bg-[#C5A059] text-white font-bold hover:bg-[#B38F46] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                  aria-label={
                    isSubmitting ? "Subscribing..." : newsletterDict.button
                  }
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>...</span>
                    </>
                  ) : (
                    newsletterDict.button
                  )}
                </button>
              </form>
              <p className="text-[#7A685B] text-xs px-2">
                * We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
