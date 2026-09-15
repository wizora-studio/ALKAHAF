import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import { Clock, Calendar, Globe, Sparkles } from "lucide-react";
import Newsletter from "@/components/sections/newsletter";
import ContactForm from "@/components/sections/contact-form";
import { getDictionary } from "@/lib/dictionary";

export default async function SchedulePage() {
  const dict = await getDictionary();

  return (
    <main className="bg-[#FCFBF8] min-h-screen">
      <Navbar dict={dict} />

      <section className="py-16 md:py-20 bg-gradient-to-br from-[#FCFBF8] via-[#FAF7F2] to-[#F5F0E6] border-b border-[#EAE3D6]">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#9F7A38] text-sm font-bold mb-4">
            <Globe className="w-4 h-4" />
            <span>24/7 Global Online Class Schedule</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D1C13] mb-6">
            {dict.schedulePage.title}
          </h1>
          <p className="text-xl text-[#5C4A3E] max-w-3xl mx-auto font-sans font-medium">
            {dict.schedulePage.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FAF7F2]">
        <div className="mx-auto max-w-3xl px-5">
          <div className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(45,28,19,0.06)] overflow-hidden border border-[#EAE3D6]">
            <div className="bg-[#C5A059] p-6 text-white text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-white" />
              <h2 className="text-2xl font-bold font-serif">
                {dict.schedulePage.weeklySchedule}
              </h2>
              <p className="text-white/90 text-sm font-medium">
                Live Classes across UK (GMT/BST), USA & Canada (EST/PST), Australia (AEST), and Europe (CET)
              </p>
            </div>
            <div className="divide-y divide-[#EAE3D6]">
              <ScheduleRow
                day={dict.schedulePage.days.monday}
                time="Morning, Afternoon & Evening Slots"
              />
              <ScheduleRow
                day={dict.schedulePage.days.tuesday}
                time="Morning, Afternoon & Evening Slots"
              />
              <ScheduleRow
                day={dict.schedulePage.days.wednesday}
                time="Morning, Afternoon & Evening Slots"
              />
              <ScheduleRow
                day={dict.schedulePage.days.thursday}
                time="Morning, Afternoon & Evening Slots"
              />
              <ScheduleRow
                day={dict.schedulePage.days.friday}
                time="Flexible Custom Slots Available"
                highlight
              />
              <ScheduleRow
                day={dict.schedulePage.days.saturday}
                time="Weekend Batches & Online Classes"
                highlight
              />
              <ScheduleRow
                day={dict.schedulePage.days.sunday}
                time="Weekend Batches & Online Classes"
                highlight
              />
            </div>
          </div>

          <div className="mt-12 text-center text-[#5C4A3E] font-medium">
            <p>{dict.schedulePage.note || "Note: Online classes can be scheduled at any custom time that suits your family."}</p>
          </div>
        </div>
      </section>

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang="en" />
      <Footer dict={dict} />
    </main>
  );
}

function ScheduleRow({ day, time, highlight = false }: any) {
  return (
    <div
      className={`flex justify-between items-center p-6 ${
        highlight
          ? "bg-[#FAF7F2]"
          : "hover:bg-[#FAF7F2]"
      } transition-colors`}
    >
      <div className="flex items-center gap-4">
        <Calendar
          className={`w-5 h-5 ${
            highlight ? "text-[#C5A059]" : "text-gray-400"
          }`}
        />
        <span
          className={`font-medium ${
            highlight
              ? "text-[#2D1C13] font-bold"
              : "text-[#5C4A3E]"
          }`}
        >
          {day}
        </span>
      </div>
      <span
        className={`font-bold ${
          highlight
            ? "text-[#C5A059]"
            : "text-[#2D1C13]"
        }`}
      >
        {time}
      </span>
    </div>
  );
}
