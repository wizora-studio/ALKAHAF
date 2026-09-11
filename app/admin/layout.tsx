import "@/app/globals.css";
import { createClient } from "@/utils/supabase/server";
import AdminDashboardShell from "./components/AdminDashboardShell";
import { Toaster } from "sonner";

export const metadata = {
  title: "Admin Panel — Al Kahaf Academy",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user = null;
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user || null;
  } catch {
    user = null;
  }

  // Login page — no sidebar, full screen
  if (!user) {
    return (
      <html lang="en">
        <body>
          {children}
          <Toaster richColors position="top-right" />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <AdminDashboardShell userEmail={user.email || ""}>
          {children}
        </AdminDashboardShell>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
