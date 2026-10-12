# Al Kahaf Academy

The marketing site and admin dashboard for **Al Kahaf Academy**, an online Quran academy offering live Quran and Islamic education for kids, teens, and adults. Built with Next.js and backed by Supabase.

**Live site:** https://www.alkahafacademy.com

## What it includes

### Public website (`app/(site)`)

Full academy website: home, about, programs, online classes, physical classes, admissions, courses (with detail pages), blog (with detail pages), pricing, teachers, schedule, FAQ, free 3-day trial, enroll, and contact. Plus policy pages (privacy, terms), custom 404, robots.ts, sitemap.ts, and JSON-LD organization schema for SEO.

### Admin dashboard (`app/admin`)

Authenticated admin area with a login page and dashboard sections for **contacts**, **enrollments**, and the **newsletter** — all stored in Supabase.

### Integrations

- **Supabase** — database and auth for enrollments, contacts, and newsletter signups (`utils/supabase`, `middleware.ts`)
- **Resend** — transactional email for form submissions (`app/actions/send-email.ts`)
- **WhatsApp + live chat** — WhatsApp buttons, group invite button, and an on-site live chat widget
- **Analytics** — Vercel Analytics and Speed Insights

### Presentation

Framer Motion and GSAP animations, typed.js hero headlines, an "ultra" visual mode (particles, floating switcher), Arabic font support (Amiri, Scheherazade New, Lateef, Noto Naskh/Nastaliq), a full favicon/icon set, and dictionary-driven copy (`dictionaries/`, currently English).

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 · Supabase · Resend · Radix UI · Framer Motion · GSAP · typed.js · Vercel Analytics

## Getting started

```bash
git clone https://github.com/wizora-studio/ALKAHAF.git
cd ALKAHAF
npm install
```

Copy the example env file and fill in your keys:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Supabase publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side Supabase access (admin dashboard) |
| `RESEND_API_KEY` | Sending form notification emails |
| `NEXT_PUBLIC_ADMIN_EMAIL` | Where form submissions are routed |

Then:

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run lint    # lint
```

## Project structure

```
app/(site)/      # public academy pages
app/admin/       # admin login + dashboard (contacts, enrollments, newsletter)
app/actions/     # server actions (email sending)
components/      # layout, sections, UI primitives, "ultra" theme pieces
components/seo/  # JSON-LD structured data
dictionaries/    # localized copy
lib/             # blog data, courses data, SEO metadata, utils
middleware.ts    # Supabase session handling
utils/supabase/  # Supabase clients (browser, server, admin)
public/          # images, icons, fonts assets, llms.txt
```

## Deployment

The site deploys on Vercel. Set the environment variables from `.env.example` in the Vercel project settings, then connect the repository. Every push to `main` builds and deploys automatically.

---

Built by [Wizora Studio](https://wizora.studio)
