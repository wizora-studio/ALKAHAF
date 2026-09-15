import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createServerClient } from "@supabase/ssr";



async function getSupabaseUser(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll() {},
        },
      },
    );
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error("Supabase user error in middleware:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ── Admin Routes ──────────────────────────────────────────────
  if (pathname.startsWith("/admin")) {
    const user = await getSupabaseUser(request);

    // Already logged in → redirect away from login page to dashboard
    if (pathname === "/admin/login" && user) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    // Not logged in → redirect to login (except login page itself)
    if (pathname !== "/admin/login" && !user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // All good → refresh Supabase session & continue
    return await updateSession(request);
  }

  // ── Redirect legacy /fr and /en URLs to root clean URLs ───────
  if (
    pathname === "/fr" ||
    pathname === "/en" ||
    pathname.startsWith("/fr/") ||
    pathname.startsWith("/en/")
  ) {
    const cleanPath = pathname.replace(/^\/(?:fr|en)(\/|$)/, "/") || "/";
    const targetUrl = new URL(cleanPath, request.url);
    targetUrl.search = request.nextUrl.search;
    return NextResponse.redirect(targetUrl, 308);
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|site\\.webmanifest|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest)$).*)",
  ],
};
