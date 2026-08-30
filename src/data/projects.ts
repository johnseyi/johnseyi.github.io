export type Project = {
  name: string;
  icon: string;
  tag?: string;
  description: string;
  stack: string;
  live?: string;
  repo?: string;
};

export type FeaturedProject = Project & {
  images: { src: string; alt: string }[];
};

export const featuredProject: FeaturedProject = {
  name: "Okelcor Website",
  icon: "🌐",
  tag: "625 commits · flagship project",
  description:
    "A global tyre supply platform for Okelcor GmbH. Buyers get live order tracking with payment milestones, downloadable trade documents (proforma invoices, packing lists, commercial invoices), a 260+ product catalog with advanced filtering, Stripe Checkout, and instant quote requests. REX-certified export documentation, shipping to 40+ countries.",
  stack: "TypeScript · Next.js 15 · Tailwind v4",
  live: "https://www.okelcor.com",
  repo: "https://github.com/okelcor-gmbh/okelcor-website",
  images: [
    { src: "/projects/okelcor-order-tracking.jpg", alt: "Okelcor live order tracking with payment milestones" },
    { src: "/projects/okelcor-homepage.jpg", alt: "Okelcor homepage, global tyre supply" },
    { src: "/projects/okelcor-shop.jpg", alt: "Okelcor product catalog with filtering" },
  ],
};

export const clientProjects: Project[] = [
  {
    name: "Century Cinemax Platform",
    icon: "🎬",
    tag: "multi-tenant · 17 modules",
    description:
      "White-label cinema operating platform (Century Cinemax Uganda is tenant #1): Laravel modular monolith with 17 bounded modules, a low-bandwidth customer site tuned for 3G, an offline-capable POS/scanner PWA, EFRIS e-invoicing, and Mobile Money payments. Private repo — happy to walk through it.",
    stack: "PHP · Laravel · Next.js · PostgreSQL · Redis",
  },
  {
    name: "Okelcor API",
    icon: "⚙️",
    tag: "449 commits",
    description:
      "Laravel backend powering the Okelcor platform: Stripe + Adyen payments, 2FA, invoice PDF generation, VAT and EU trade documents, container tracking — 178 database migrations and counting.",
    stack: "PHP · Laravel 13 · PostgreSQL",
    repo: "https://github.com/okelcor-gmbh/okelcor-api",
  },
  {
    name: "Okelcor Partner",
    icon: "📲",
    tag: "offline-first PWA",
    description:
      "Sales-log PWA for overseas partners in Ghana, Nigeria, and the UAE — IndexedDB outbox with idempotent sync so retries never double-count revenue, multi-currency entries, offline phone + PIN auth. In production at partners.okelcor.com.",
    stack: "TypeScript · Next.js · IndexedDB · Service Worker",
    live: "https://partners.okelcor.com",
    repo: "https://github.com/okelcor-gmbh/okelcor-partner",
  },
  {
    name: "Vitorra Web",
    icon: "🏢",
    tag: "183 commits",
    description:
      "Full platform rebuild for Vitorra Holdings: migrated a legacy React/Firebase site into a Next.js + Laravel monorepo — from BRD and design system spec through to production.",
    stack: "TypeScript · Next.js 16 · Laravel · PostgreSQL",
    live: "https://vitorraweb.vercel.app",
    repo: "https://github.com/vitorraweb/vitorraweb",
  },
  {
    name: "Wellapath Mobile",
    icon: "📱",
    tag: "96 commits",
    description:
      "Clinical decision-support Flutter app for health workers in Nigeria — offline-first with Hive local storage, consuming a versioned clinical knowledge base built for low-connectivity settings.",
    stack: "Dart · Flutter · Hive",
    repo: "https://github.com/Wellapath-org/wellapath-mobile",
  },
  {
    name: "Wellapath Website",
    icon: "🩺",
    tag: "clinical-safety build gate",
    description:
      "Marketing site for wellapath.org where the build fails if any of 48 clinical danger-sign labels lacks clinician sign-off, a banned-word linter enforces \"never diagnose\" copy, and launch signups accept email or WhatsApp with E.164 dedupe.",
    stack: "TypeScript · Next.js · Neon Postgres · Resend",
    live: "https://wellapath-website-ivory.vercel.app",
    repo: "https://github.com/Wellapath-org/wellapath-website",
  },
  {
    name: "Munich Nightclub",
    icon: "🎧",
    tag: "Afro Zone Munich",
    description:
      "Venue site and admin panel for a Munich nightclub: 5-step booking flow with generated reference codes and email confirmations, a realtime bookings inbox via Supabase Realtime, and an RLS-protected admin.",
    stack: "TypeScript · Next.js · Supabase",
    live: "https://munich-nightclub.vercel.app",
    repo: "https://github.com/afrozonemunchen/munich-nightclub",
  },
  {
    name: "Takeover Creatives FC",
    icon: "⚽",
    tag: "headless CMS",
    description:
      "Website for a Kampala community football club: Next.js front end fed by a Laravel + Filament admin with role-based access, on-demand revalidation, and a full test suite — all animation in ~40 lines of IntersectionObserver.",
    stack: "TypeScript · Next.js 16 · Laravel · Filament",
    repo: "https://github.com/johnseyi/takeover-fc-website",
  },
];

export const personalProjects: Project[] = [
  {
    name: "Uganda HIE",
    icon: "🏥",
    tag: "BoU@60 Hackathon · built in 3 days",
    description:
      "National Health Information Exchange demo for the Bank of Uganda hackathon: six role-based portals, break-glass emergency access to locked records with audit flagging, patient consent controls, and a disease hotspot map.",
    stack: "TypeScript · Next.js",
    live: "https://cool-smakager-893ca4.netlify.app/moh",
    repo: "https://github.com/Uganda-Hie/uganda-hie",
  },
  {
    name: "Chicken Tonight",
    icon: "🍗",
    tag: "shipped in a day",
    description:
      "Ordering-platform prototype for a 15-outlet Kampala restaurant group: MTN Mobile Money payment flow, kitchen display system with per-ticket timers and station routing, live rider tracking, and a business analytics dashboard.",
    stack: "TypeScript · Next.js 16 · Zustand",
    live: "https://chicken-tonight.vercel.app",
    repo: "https://github.com/centurycinemax6/chicken-tonight",
  },
  {
    name: "Healthy Steps Foundation",
    icon: "💙",
    description:
      "Website and donation flow for a faith-based mental-health nonprofit in Wakiso, Uganda — Supabase-backed donations, PDF receipt generation, and zod-validated forms with transactional email.",
    stack: "TypeScript · Next.js · Supabase",
    live: "https://healthy-steps-foundation.vercel.app",
    repo: "https://github.com/johnseyi/healthy-steps-foundation",
  },
  {
    name: "Let's Talk About Autism",
    icon: "🧩",
    description: "An autism awareness and resource platform for families and caregivers.",
    stack: "TypeScript · Next.js",
    live: "https://www.letstalkaboutautism.org/",
    repo: "https://github.com/johnseyi/letstalkaboutautism",
  },
  {
    name: "Goodie Glow Guide",
    icon: "✨",
    description:
      "A 30-day skincare routine guide built for the African market, with a skin-type quiz, progress tracker, and code-gated paid access — deliberately zero-framework vanilla JS.",
    stack: "JavaScript · HTML/CSS",
    live: "https://goodie-glow-guide.vercel.app",
    repo: "https://github.com/johnseyi/goodie-glow-guide",
  },
];
