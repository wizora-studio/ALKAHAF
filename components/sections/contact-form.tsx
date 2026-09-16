"use client";
import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, Loader2, Globe, ChevronDown, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { sendContactEmail } from "@/app/actions/send-email";
import { toast } from "sonner";
import PhoneInput from "@/components/ui/phone-input";

export default function ContactForm({ dict }: { dict: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    url: string;
    name: string;
    phone: string;
    inquiry: string;
    message: string;
  } | null>(null);

  // If dict is contact.form, we need to adjust, but based on user request,
  // we expect the full contact dict now. Handle both cases for safety.
  const info = dict.info || {};
  const hours = dict.hours || {};
  const form = dict.form || dict; // Fallback if form-only dict is passed

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const name = (formData.get("name") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const inquiry = (formData.get("inquiry") as string)?.trim() || "General Inquiry";
    const message = (formData.get("message") as string)?.trim() || "";

    const whatsappMessage = `*New Contact Message - Al Kahaf Academy*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${name}
📞 *Phone / WhatsApp:* ${phone}
📋 *Inquiry Type:* ${inquiry}
💬 *Message:*
${message}
━━━━━━━━━━━━━━━━━━━━━━
Assalamu Alaikum Al Kahaf Academy, I have sent an inquiry from the website. Please assist me.`;

    const waUrl = `https://wa.me/923222597066?text=${encodeURIComponent(whatsappMessage)}`;

    setSubmittedData({
      url: waUrl,
      name,
      phone,
      inquiry,
      message,
    });

    // Attempt to open WhatsApp directly
    try {
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch (e) {
      console.error("Popup window error:", e);
    }

    toast.success("Connecting to WhatsApp...");

    // Background sync to email / DB
    try {
      await sendContactEmail(formData);
    } catch (err) {
      console.warn("Background notification notice:", err);
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
                {info.title || "Get in Touch"}
              </h2>
              <p className="text-[#5C4A3E] leading-relaxed text-lg font-medium">
                {info.description || "Have questions about our programs? Reach out to us directly."}
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
                    {info.callWhatsapp || "Call / WhatsApp"}
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
              {form.title || "Send a Message"}
            </h3>

            {submittedData ? (
              <div className="bg-[#FAF7F2] border-2 border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#25D366]/15 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <FaWhatsapp className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#2D1C13]">
                    Message Ready!
                  </h4>
                  <p className="text-sm text-[#5C4A3E] mt-2 max-w-md mx-auto">
                    Your inquiry has been prepared. Click below to continue directly on WhatsApp:
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#EAE3D6] text-left text-xs sm:text-sm text-[#2D1C13] space-y-1.5 max-w-md mx-auto shadow-sm">
                  <div><span className="font-bold text-[#7A685B]">Name:</span> {submittedData.name}</div>
                  <div><span className="font-bold text-[#7A685B]">Phone:</span> {submittedData.phone}</div>
                  <div><span className="font-bold text-[#7A685B]">Inquiry:</span> {submittedData.inquiry}</div>
                  {submittedData.message && (
                    <div><span className="font-bold text-[#7A685B]">Message:</span> {submittedData.message}</div>
                  )}
                </div>

                <div className="space-y-3 max-w-md mx-auto">
                  <a
                    href={submittedData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(37,211,102,0.35)] flex items-center justify-center gap-2.5 transition active:scale-95 text-base"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Open in WhatsApp (+92 322 2597066)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="w-full py-2 text-xs text-[#7A685B] hover:text-[#2D1C13] font-semibold transition"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-[#2D1C13]"
                    >
                      {form.fullName || "Full Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] outline-none transition-all bg-[#FAF7F2] text-[#2D1C13]"
                      placeholder={form.fullNamePlaceholder || "Your full name"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-[#2D1C13]"
                    >
                      {form.phone || "Phone / WhatsApp"}
                    </label>
                    <PhoneInput
                      id="phone"
                      name="phone"
                      required
                      placeholder={form.phonePlaceholder || "Phone number"}
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
                    {form.message || "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] outline-none transition-all bg-[#FAF7F2] text-[#2D1C13] resize-none"
                    placeholder={form.messagePlaceholder || "How can we help you?"}
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
                      <span>{form.sending || "Connecting..."}</span>
                    </>
                  ) : (
                    <>
                      <span>{form.submit || "Send Message"}</span> <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
