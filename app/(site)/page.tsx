import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomeContent from "@/components/sections/HomeContent";
import { getDictionary } from "@/lib/dictionary";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const dict = await getDictionary();
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
      <Navbar dict={dict} />
      <HomeContent dict={dict} lang="en" totalStudents={totalStudents} />
      <Footer dict={dict} />
    </main>
  );
}
