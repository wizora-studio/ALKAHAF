import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you requested could not be found on Al Kahaf Academy (www.alkahafacademy.com).",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CatchAllNotFoundPage() {
  notFound();
}
