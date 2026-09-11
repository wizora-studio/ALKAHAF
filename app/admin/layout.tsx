import "@/app/globals.css";
import { createClient } from "@/utils/supabase/server";
import AdminDashboardShell from "./components/AdminDashboardShell";
import { Toaster } from "sonner";

export const metadata = {
  title: "Admin Panel — Al Kahaf Academy",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/alkahaf-emblem.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
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
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        </head>
        <body>
          {children}
          <Toaster richColors position="top-right" />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body>
        <AdminDashboardShell userEmail={user.email || ""}>
          {children}
        </AdminDashboardShell>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
