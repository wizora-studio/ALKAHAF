"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Monitor, MapPin, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { sendEnrollmentEmail } from "@/app/actions/send-email";
import { toast } from "sonner";
import PhoneInput from "@/components/ui/phone-input";
import CountrySelect from "@/components/ui/country-select";

export default function AdmissionsForm({
  dict,
  lang = "en",
}: {
  dict: any;
  lang?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("US");
  const [submittedData, setSubmittedData] = useState<{
    url: string;
    studentName: string;
    program: string;
    parentName: string;
    phone: string;
  } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formData.append("learningMode", "online");
    formData.append("classType", "online");

    const studentName = (formData.get("studentName") as string)?.trim() || "";
    const age = (formData.get("age") as string)?.trim() || "";
    const genderKey = (formData.get("gender") as string)?.trim() || "";
    const parentName = (formData.get("parentName") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const country = (formData.get("country") as string)?.trim() || "";
    const city = (formData.get("city") as string)?.trim() || "";
    const programKey = (formData.get("program") as string)?.trim() || "";
    const preferredDaysKey = (formData.get("preferredDays") as string)?.trim() || "";
    const preferredTimeKey = (formData.get("preferredTime") as string)?.trim() || "";
    const message = (formData.get("message") as string)?.trim() || "";

    const genderLabels: Record<string, string> = {
      male: dict?.male || "Male",
      female: dict?.female || "Female",
    };

    const programLabels: Record<string, string> = {
      nazra: dict?.nazra || "Noorani Qaida / Nazra",
      hifz: dict?.hifz || "Quran Memorization (Hifz)",
      tajweed: dict?.tajweed || "Quran with Tajweed",
      arabic: dict?.arabic || "Arabic Language",
      islamic_studies: dict?.islamicStudies || "Islamic Studies",
    };

    const daysLabels: Record<string, string> = {
      weekdays: dict?.weekdays || "Weekdays (Mon - Fri)",
      weekend: dict?.weekends || "Weekends (Sat - Sun)",
      flexible: dict?.flexible || "Flexible Schedule",
    };

    const timeLabels: Record<string, string> = {
      morning: dict?.morning || "Morning",
      afternoon: dict?.afternoon || "Afternoon",
      evening: dict?.evening || "Evening",
    };

    const genderDisplay = genderLabels[genderKey] || genderKey;
    const programDisplay = programLabels[programKey] || programKey;
    const daysDisplay = daysLabels[preferredDaysKey] || preferredDaysKey;
    const timeDisplay = timeLabels[preferredTimeKey] || preferredTimeKey;
    const locationDisplay = [city, country].filter(Boolean).join(", ");

    const whatsappMessage = `*New Admission Application - Al Kahaf Academy*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Student Information:*
• *Name:* ${studentName}
• *Age:* ${age} years old
• *Gender:* ${genderDisplay}

👨‍👩‍👧 *Contact Details:*
• *Parent / Guardian:* ${parentName}
• *Phone / WhatsApp:* ${phone}
• *Location:* ${locationDisplay || "Not specified"}

📖 *Program & Schedule:*
• *Program:* ${programDisplay}
• *Preferred Days:* ${daysDisplay}
• *Time Slot:* ${timeDisplay}
• *Mode:* Online Classes

${message ? `💬 *Notes / Questions :*\n${message}\n━━━━━━━━━━━━━━━━━━━━━━\n` : "━━━━━━━━━━━━━━━━━━━━━━\n"}Assalamu Alaikum Al Kahaf Academy, I have submitted my admission application. Please schedule my 3-day free trial session.`;

    const waUrl = `https://wa.me/923222597066?text=${encodeURIComponent(whatsappMessage)}`;

    // Store state for UI confirmation
    setSubmittedData({
      url: waUrl,
      studentName,
      program: programDisplay,
      parentName,
      phone,
    });

    // Attempt to open WhatsApp directly
    try {
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch (e) {
      console.error("Popup window error:", e);
    }

    try {
      const result = await sendEnrollmentEmail(formData);
      if (result.success) {
        toast.success("Application submitted! Opening WhatsApp...");
        formElement.reset();
      } else {
        toast.info("Application ready! Please send the message on WhatsApp.");
      }
    } catch (error) {
      toast.info("Application ready! Please send the message on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      id="admission-form"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 dark:text-white drop-shadow-sm">
            {dict.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Mode Selector */}
          <div className="grid grid-cols-1 border-b border-gray-100 dark:border-gray-700">
            <button
              type="button"
              className="p-6 flex flex-col sm:flex-row items-center justify-center gap-3 bg-primary/5 text-primary border-b-2 border-primary"
            >
              <div className="p-2.5 rounded-full bg-primary text-white shadow-md shadow-primary/20">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-bold">{dict.online || "Online Classes"}</span>
                <span className="text-xs opacity-80">{dict.onlineDesc || "Live Online Classes"}</span>
              </div>
            </button>
          </div>

          {submittedData ? (
            <div className="p-8 sm:p-14 text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 dark:text-white">
                  Application Submitted Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto text-base">
                  Thank you! Admission details for {submittedData.studentName} have been prepared for WhatsApp.
                </p>
              </div>

              {/* Admission summary card */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 text-left text-sm space-y-2.5 shadow-sm">
                <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">Student:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{submittedData.studentName}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">Program:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{submittedData.program}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">Parent / Contact:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{submittedData.parentName}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500 dark:text-gray-400">Phone:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{submittedData.phone}</span>
                </div>
              </div>

              {/* WhatsApp Action */}
              <div className="pt-2 max-w-md mx-auto space-y-3">
                <a
                  href={submittedData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 text-base sm:text-lg cursor-pointer"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>Send Details on WhatsApp</span>
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  If WhatsApp did not open automatically, click the button above to send your details to +92 322 2597066.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="text-sm font-semibold text-primary hover:underline cursor-pointer"
                >
                  ← Submit another application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-12 space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  1
                </span>
                {dict.studentInfo || "Student Information"}
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="studentName"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.fullName || "Full Name"}
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder={dict.fullNamePlaceholder || "Enter student's full name"}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="age"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.age || "Age"}
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="3"
                    max="100"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder={dict.agePlaceholder || "Enter student's age"}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="gender"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.gender || "Gender"}
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      name="gender"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="">{dict.genderLabel || "Select Gender"}</option>
                      <option value="male">{dict.male || "Male"}</option>
                      <option value="female">{dict.female || "Female"}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Parent / Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  2
                </span>
                {dict.parentInfo || "Contact Information"}
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="parentName"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.parentName || "Parent / Guardian / Contact Name"}
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder={dict.parentNamePlaceholder || "Enter contact name"}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.phone || "Phone / WhatsApp Number"}
                  </label>
                  <PhoneInput
                    id="phone"
                    name="phone"
                    required
                    selectedCountryCode={selectedCountryCode}
                    onCountryChange={(c) => setSelectedCountryCode(c.code)}
                    placeholder={dict.phonePlaceholder}
                    searchPlaceholder={dict.searchCountryPlaceholder || "Search country or code..."}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.country || "Country"}
                  </label>
                  <CountrySelect
                    id="country"
                    name="country"
                    required
                    value={selectedCountryCode}
                    onCountryChange={(c) => setSelectedCountryCode(c.code)}
                    placeholder={dict.countryPlaceholder || "Select Country"}
                    searchPlaceholder={dict.searchCountryPlaceholder || "Search country..."}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.city || "City"}
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder={dict.cityPlaceholder || "Enter your city"}
                  />
                </div>
              </div>
            </div>

            {/* Course Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  3
                </span>
                {dict.courseInfo || dict.programSelection || "Program & Schedule"} ({dict.online || "Online Classes"})
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="program"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.selectProgram || dict.program || "Select Program"}
                  </label>
                  <div className="relative">
                    <select
                      id="program"
                      name="program"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="">{dict.chooseProgram || "Choose a Program"}</option>
                      <option value="nazra">{dict.nazra || "Noorani Qaida / Nazra"}</option>
                      <option value="hifz">{dict.hifz || "Quran Memorization (Hifz)"}</option>
                      <option value="tajweed">{dict.tajweed || "Quran with Tajweed"}</option>
                      <option value="arabic">{dict.arabic || "Arabic Language"}</option>
                      <option value="islamic_studies">
                        {dict.islamicStudies || "Islamic Studies"}
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="preferredDays"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.preferredDays || "Preferred Days"}
                  </label>
                  <div className="relative">
                    <select
                      id="preferredDays"
                      name="preferredDays"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="weekdays">{dict.weekdays || "Weekdays (Mon - Fri)"}</option>
                      <option value="weekend">{dict.weekends || "Weekends (Sat - Sun)"}</option>
                      <option value="flexible">{dict.flexible || "Flexible Schedule"}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="preferredTime"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {dict.preferredTime || "Preferred Time Slot"}
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="morning">{dict.morning || "Morning"}</option>
                      <option value="afternoon">{dict.afternoon || "Afternoon"}</option>
                      <option value="evening">{dict.evening || "Evening"}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {dict.notes || dict.message || "Questions or Special Notes (Optional)"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 resize-none"
                placeholder={dict.notesPlaceholder || dict.messagePlaceholder || "Tell us about your learning goals..."}
              ></textarea>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{dict?.sending || dict?.submitting || "Processing Application..."}</span>
                  </>
                ) : (
                  <>
                    <span>{dict?.submit || "Submit Admission Application"}</span>
                    <Check className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2 font-medium">
                <FaWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>
                  Upon submission, your details will be sent to WhatsApp to schedule your 3-day free trial.
                </span>
              </p>
            </div>

            <p className="text-center text-xs text-gray-400 dark:text-gray-500">
              {dict?.confMsg || "Your information is protected. We will never share your details."}
            </p>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
