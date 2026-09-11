"use client";
import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, Loader2, Globe, ChevronDown } from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";
import { toast } from "sonner";
import PhoneInput from "@/components/ui/phone-input";

export default function ContactForm({ dict }: { dict: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If dict is contact.form, we need to adjust, but based on user request,
  // we expect the full contact dict now. Handle both cases for safety.
  const info = dict.info || {};
  const hours = dict.hours || {};
  const form = dict.form || dict; // Fallback if form-only dict is passed

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast.success(form.success);
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || form.error);
      }
    } catch (error) {
      toast.error(form.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 bg-[#FAF7F2] dark:bg-[#FAF7F2] border-y border-[#EAE3D6]">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info Side */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#2D1C13] mb-6">
                {info.title}
              </h2>
              <p className="text-[#5C4A3E] leading-relaxed text-lg font-medium">
                {info.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-[#EAE3D6] shadow-sm">
                <div className="w-12 h-12 bg-[#FAF5EC] border border-[#C5A059]/30 rounded-xl flex items-center justify-center text-[#C5A059] shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2D1C13] mb-1">
                    {info.visitCampus || "Global Online Academy"}
                  </h3>
                  <p className="text-sm text-[#5C4A3E] leading-relaxed">
                    Live Online Classes
                    <br />
                    Worldwide Access across all Time Zones
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-[#EAE3D6] shadow-sm">
                <div className="w-12 h-12 bg-[#FAF5EC] border border-[#C5A059]/30 rounded-xl flex items-center justify-center text-[#C5A059] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2D1C13] mb-1">
                    {info.callWhatsapp}
                  </h3>
                  <p className="text-sm text-[#5C4A3E]">
                    <a
                      href={`https://wa.me/923222597066?text=${encodeURIComponent(
                        info.whatsappMessage ||
                          "Assalamu Alaikum, I am contacting you from the website.",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C5A059] transition-colors font-bold"
                    >
                      +92 322 2597066
                    </a>
                  </p>
                  <p className="text-xs text-[#7A685B] mt-1 font-medium">
                    {info.availableTime || "WhatsApp Support Available 7 Days a Week"}
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Global Online Class Availability Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D6] shadow-[0_4px_20px_rgba(45,28,19,0.05)]">
              <h3 className="font-bold text-lg text-[#2D1C13] font-serif mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C5A059]" />{" "}
                {hours.title || "Online Class Availability"}
              </h3>
              <ul className="space-y-3 text-sm text-[#5C4A3E]">
                <li className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2]">
                  <span className="font-medium">{hours.liveClasses || "Live Online Classes"}</span>
                  <span className="font-bold text-[#C5A059]">{hours.liveClassesVal || "7 Days a Week"}</span>
                </li>
                <li className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2]">
                  <span className="font-medium">{hours.timings || "Class Timings"}</span>
                  <span className="font-bold text-[#2D1C13]">{hours.timingsVal || "Flexible 24/7 Slots"}</span>
                </li>
                <li className="flex justify-between items-center py-1.5">
                  <span className="font-medium">{hours.timezones || "Time Zones"}</span>
                  <span className="font-bold text-[#2D1C13]">{hours.timezonesVal || "UK, USA, Canada, Australia & Worldwide"}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_4px_25px_rgba(45,28,19,0.06)] border border-[#EAE3D6]">
            <h3 className="text-2xl font-bold font-serif text-[#2D1C13] mb-6">
              {form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#2D1C13]"
                  >
                    {form.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] outline-none transition-all bg-[#FAF7F2] text-[#2D1C13]"
                    placeholder={form.fullNamePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-[#2D1C13]"
                  >
                    {form.phone}
                  </label>
                  <PhoneInput
                    id="phone"
                    name="phone"
                    required
                    placeholder={form.phonePlaceholder}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="inquiry"
                  className="text-sm font-medium text-[#2D1C13]"
                >
                  {form.inquiryType || "Inquiry Type"}
                </label>
                <div className="relative">
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] outline-none transition-all bg-[#FAF7F2] text-[#2D1C13] appearance-none pr-10 cursor-pointer"
                  >
                    <option value="" disabled>
                      {form.inquiryPlaceholder || "Select Inquiry Type"}
                    </option>
                    <option value="General Inquiry">
                      {form.inquiryOptions?.general || "General Inquiry"}
                    </option>
                    <option value="Admissions">
                      {form.inquiryOptions?.admissions || "Admissions & Enrollment"}
                    </option>
                    <option value="Online Classes">
                      {form.inquiryOptions?.online || "Online Quran Classes"}
                    </option>
                    <option value="Programs">
                      {form.inquiryOptions?.programs || "Programs & Courses"}
                    </option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A685B] pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#2D1C13]"
                >
                  {form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] outline-none transition-all bg-[#FAF7F2] text-[#2D1C13] resize-none"
                  placeholder={form.messagePlaceholder}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#C5A059] text-white font-bold rounded-xl hover:bg-[#B38F46] transition-all shadow-[0_4px_14px_rgba(197,160,89,0.35)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {form.sending}
                  </>
                ) : (
                  <>
                    {form.submit} <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
