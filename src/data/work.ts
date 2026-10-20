export type Link = { label: string; href: string };

export type CaseStudy = {
  id: string;
  client: string;
  place: string;
  role: string;
  period: string;
  scale?: string;
  tagline: string;
  constraint: string;
  built: string[];
  decision: { title: string; body: string };
  diagram?: "sync" | "tenancy" | "clinical";
  images?: { src: string; alt: string; caption: string }[];
  stack: string[];
  links: Link[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "okelcor",
    client: "Okelcor GmbH",
    place: "Munich, Germany",
    role: "Sole engineer",
    period: "Mar 2026 to present",
    scale: "1,300+ commits across 4 applications",
    tagline: "A tyre exporter's entire commercial operation, rebuilt as software.",
    constraint:
      "Okelcor ships tyres from Europe to more than 40 countries. Quotes, proforma invoices, packing lists and customs paperwork were moving by email and spreadsheet, and every order needed a human to assemble the document pack by hand.",
    built: [
      "A Next.js storefront with a 260+ product catalogue, filtering, and instant quote requests. 700+ commits, live at okelcor.com.",
      "A Laravel 13 API behind it: 178 migrations, ~75 admin controllers, Stripe and Adyen payments, Google 2FA, Pusher realtime, and a partner portal.",
      "Automated trade documents (proforma and commercial invoices, packing lists) generated as PDFs, plus VAT handling and EU export declarations.",
      "Customer-facing order tracking that exposes payment milestones and container movement, so buyers stop emailing to ask where their freight is.",
    ],
    decision: {
      title: "One backend, three front ends, no duplicated business rules",
      body:
        "Pricing, VAT treatment and document generation live only in the Laravel API. The storefront, the partner PWA and the React Native admin app all consume the same endpoints, so a change to how EU VAT is applied ships once rather than three times. The web front end talks to the API through a thin proxy layer rather than from the browser directly, which keeps credentials server-side and lets the public site cache aggressively.",
    },
    images: [
      {
        src: "/projects/okelcor-order-tracking.jpg",
        alt: "Okelcor order tracking interface showing payment milestones",
        caption: "Order tracking with payment milestones and downloadable trade documents",
      },
      {
        src: "/projects/okelcor-shop.jpg",
        alt: "Okelcor product catalogue with filtering",
        caption: "Catalogue: 260+ products with advanced filtering",
      },
      {
        src: "/projects/okelcor-homepage.jpg",
        alt: "Okelcor homepage",
        caption: "Storefront, built for B2B buyers in 40+ countries",
      },
    ],
    stack: ["TypeScript", "Next.js 16", "Laravel 13", "PHP 8.3", "PostgreSQL", "Stripe", "Adyen", "Tailwind v4"],
    links: [
      { label: "okelcor.com", href: "https://www.okelcor.com" },
      { label: "Storefront repo", href: "https://github.com/okelcor-gmbh/okelcor-website" },
      { label: "API repo", href: "https://github.com/okelcor-gmbh/okelcor-api" },
    ],
  },
  {
    id: "partner",
    client: "Okelcor Partner",
    place: "Ghana · Nigeria · UAE",
    role: "Sole engineer",
    period: "Aug 2026 · shipped in 5 days",
    scale: "In production at partners.okelcor.com",
    tagline: "Replacing paper sales books for partners on unreliable mobile data.",
    constraint:
      "Overseas partners were reporting daily sales on paper. Any replacement had to run on a cheap Android phone, keep working when the data connection disappears mid-submit, and never double-count a sale when the partner taps send again.",
    built: [
      "An installable PWA with an IndexedDB outbox. Sales are written locally first and the UI confirms immediately, online or not.",
      "A service worker that lets the app cold-start with no network, and phone + PIN authentication that validates against a locally held session.",
      "Per-partner scoping of local data, so a shared device never leaks one partner's figures to another.",
      "A head-office view where finance reconciles what came in, by partner and by currency.",
    ],
    decision: {
      title: "Every sale carries a client-generated ID, and the server dedupes on it",
      body:
        "The hard part of offline sync is not storing data locally, it is what happens on the fourth retry. Each sale is assigned an ID on the device before it is ever sent, and the API treats that ID as the unique key. A partner in Accra can lose signal mid-submit, retry four times, and the ledger still shows one sale. To make sure that path is actually exercised, the development build fails roughly one push in six on purpose, so the retry logic is tested every day rather than the first time a real partner hits a dead spot.",
    },
    diagram: "sync",
    stack: ["TypeScript", "Next.js", "IndexedDB", "Service Workers", "Laravel API"],
    links: [
      { label: "partners.okelcor.com", href: "https://partners.okelcor.com" },
      { label: "Repo", href: "https://github.com/okelcor-gmbh/okelcor-partner" },
    ],
  },
  {
    id: "cinemax",
    client: "Century Cinemax",
    place: "Kampala, Uganda",
    role: "Engineer, 2-person team · 74% of commits",
    period: "Jul 2026 to present",
    scale: "Multi-tenant platform, 17 bounded modules",
    tagline: "A cinema operating platform that keeps selling when the branch loses internet.",
    constraint:
      "A cinema chain needed ticketing, seating and point-of-sale that survive an internet outage at the branch, run acceptably on 3G for customers, and satisfy the Uganda Revenue Authority's EFRIS e-invoicing rules on every single transaction.",
    built: [
      "A Laravel modular monolith with 17 bounded modules, PostgreSQL 16, Redis queues via Horizon and websockets via Reverb, with module boundaries enforced in CI rather than by convention.",
      "I own catalog, scheduling, pricing, seating inventory and the booking engine, plus the head-office and branch console screens.",
      "A customer site rendered server-side and deliberately tuned for 3G, and a POS/scanner console that keeps taking tickets offline through an IndexedDB outbox.",
      "EFRIS fiscalization and Mobile Money payment callbacks, both handled through queued fan-out so a slow third party never blocks a sale.",
    ],
    decision: {
      title: "Fiscalization is a queue, not a blocking call",
      body:
        "URA's e-invoicing endpoint has to see every transaction, but it is not always fast and it is not always up. Making the sale wait on it would mean a queue of customers in the lobby whenever the tax authority has a bad afternoon. Instead the sale commits locally, and fiscalization fans out to a Redis-backed queue with retries. The same reasoning applies to Mobile Money callbacks: the payment provider's timing is not allowed to dictate the counter's throughput. Types are generated from an OpenAPI spec so the two Next.js apps cannot drift from the API contract.",
    },
    diagram: "tenancy",
    stack: ["Laravel 13", "PHP 8.4", "PostgreSQL 16", "Redis", "Next.js 15", "Turborepo", "Docker", "OpenAPI"],
    links: [],
  },
  {
    id: "wellapath",
    client: "WellaPath",
    place: "Lagos, Nigeria",
    role: "Mobile & platform engineer",
    period: "Nov 2025 to present",
    scale: "50 conditions · 76 clinical rules · 5,344 facilities",
    tagline: "Clinical decision support for health workers, running entirely on the phone.",
    constraint:
      "Health workers in low-connectivity Nigerian clinics needed triage support that works with no signal, never transmits patient information, and never crosses the line from guidance into diagnosis.",
    built: [
      "The Flutter app end-to-end: a four-stage on-device engine, Dio networking, and Hive storage that lets the app boot from last-known-good config when the network is gone.",
      "A versioned clinical knowledge base covering conditions, rules, a 295-token dictionary and 5,344 facility records, published as independently versioned artifacts so content ships without an app release.",
      "A 234-case validation bank with a deterministic generator, so a knowledge-base change can be regression-tested before it reaches a clinic.",
      "The public site, with launch signup by email or WhatsApp and phone numbers normalised to E.164 so the same person cannot register twice.",
    ],
    decision: {
      title: "The build refuses to ship copy a clinician has not signed off",
      body:
        "All 48 danger-sign labels carry a reviewed flag, and the production build fails while any of them is still false. A second linter blocks diagnostic language anywhere in rendered copy. The product is allowed to say seek care now, never you have X. In the app itself, a red-flag result overrides the scoring output rather than being averaged with it, and scoring runs on-device so no patient data is transmitted. Clinical safety became something the pipeline enforces instead of something a checklist promises.",
    },
    diagram: "clinical",
    stack: ["Flutter", "Dart", "Hive", "TypeScript", "Next.js", "Neon Postgres", "Python"],
    links: [
      { label: "Mobile repo", href: "https://github.com/Wellapath-org/wellapath-mobile" },
      { label: "Knowledge base", href: "https://github.com/Wellapath-org/wellapath-knowledge-base" },
      { label: "wellapath.org", href: "https://wellapath.org" },
    ],
  },
];

export type App = {
  id: string;
  name: string;
  kind: string;
  platform: string;
  status: string;
  tagline: string;
  features: string[];
  stack: string[];
  links: Link[];
};

export const apps: App[] = [
  {
    id: "wellapath-app",
    name: "WellaPath",
    kind: "Clinical decision support",
    platform: "Flutter · Android & iOS",
    status: "Android build in Google Play internal testing",
    tagline: "Triage guidance for health workers in Nigerian clinics, built to work with no signal at all.",
    features: [
      "A four-stage decision engine that runs entirely on the phone, so no patient data ever leaves the device.",
      "Boots from last-known-good config stored in Hive when the network is gone, and picks up new clinical content without an app release.",
      "Red-flag results override the scoring output instead of being averaged with it.",
    ],
    stack: ["Flutter", "Dart", "Hive", "Dio"],
    links: [
      { label: "Repo", href: "https://github.com/Wellapath-org/wellapath-mobile" },
      { label: "wellapath.org", href: "https://wellapath.org" },
    ],
  },
  {
    id: "okelcor-ops",
    name: "Okelcor Ops",
    kind: "Operations companion app",
    platform: "React Native · Expo · Android & iOS",
    status: "v1 to live chat in four days",
    tagline: "The tyre exporter's back office in the team's pocket: orders, quotes, customers and security.",
    features: [
      "Sign-in with 2FA and recovery codes, a biometric app lock, and tokens held in the device's secure store.",
      "Live customer chat over Crisp with Pusher realtime and an online/offline presence toggle.",
      "Push notifications that open the exact order or quote they are about, plus unread badge counts.",
      "Orders, quotes, an email-style inbox, a revenue dashboard, quick actions and dark mode.",
    ],
    stack: ["React Native 0.86", "Expo 57", "TypeScript", "TanStack Query", "NativeWind", "EAS"],
    links: [],
  },
  {
    id: "okelcor-partner-app",
    name: "Okelcor Partner",
    kind: "Offline-first sales log",
    platform: "Android (Trusted Web Activity) · installable PWA",
    status: "Live with partners in Ghana and Nigeria · signed Play bundle ready",
    tagline: "Partners log daily sales on cheap Android phones, online or not, and nothing is ever counted twice.",
    features: [
      "Sales are written to an IndexedDB outbox first and synced with client-generated IDs, so retries never duplicate a sale.",
      "Cold-starts with no network, with phone + PIN auth against a locally held session.",
      "Packaged for Google Play with Bubblewrap and verified through Digital Asset Links, so a web deploy updates the app without a store release.",
    ],
    stack: ["Next.js", "TypeScript", "Service Workers", "IndexedDB", "Bubblewrap"],
    links: [{ label: "partners.okelcor.com", href: "https://partners.okelcor.com" }],
  },
  {
    id: "kampala-pressure",
    name: "Kampala Pressure",
    kind: "Mobile-first life game",
    platform: "React · TypeScript · phone-first web",
    status: "In build · personal project",
    tagline: "One week of life in Kampala, three different starting points, and rent due on Friday.",
    features: [
      "A content-driven decision engine: new lives, events and endings are added as data, with no engine changes.",
      "Balance simulations in the test suite report win rates for every life, so difficulty is measured, not guessed.",
      "A bottom-tab phone layout with in-game chats, and a shareable 1080×1080 result card through the Web Share API.",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Vitest", "SVG"],
    links: [],
  },
];

export const principles = [
  {
    n: "01",
    title: "Retries have to be free",
    body:
      "Anything that crosses a bad network gets an idempotency key before it leaves the device. If pressing send twice can cost someone money, the design is wrong.",
  },
  {
    n: "02",
    title: "Store what the user typed",
    body:
      "Partners log sales in naira, cedis, shillings, dirhams, euros or dollars. The app stores the amount exactly as entered with its currency and converts nothing. Finance applies one rate, once, and can defend it later.",
  },
  {
    n: "03",
    title: "Put the safety rule in the pipeline",
    body:
      "A rule that lives in a checklist gets skipped on a busy week. A rule that fails the build does not. Unreviewed clinical copy cannot reach production because the build will not produce an artifact.",
  },
  {
    n: "04",
    title: "Assume the third party is down",
    body:
      "Tax authorities, payment providers and carriers all have bad days. None of them should be able to stop a customer paying, so their calls fan out to queues with retries rather than blocking the transaction.",
  },
];

export type Shipped = {
  year: string;
  name: string;
  what: string;
  stack: string;
  live?: string;
  repo?: string;
};

export const alsoShipped: Shipped[] = [
  {
    year: "2026",
    name: "Vitorra Holdings",
    what:
      "Full platform rebuild for a Ugandan distribution group, migrating a legacy React/Firebase site into a Next.js + Laravel monorepo, from business requirements through to production.",
    stack: "Next.js 16 · Laravel · PostgreSQL",
    live: "https://vitorraweb.vercel.app",
    repo: "https://github.com/vitorraweb/vitorraweb",
  },
  {
    year: "2026",
    name: "Uganda Health Information Exchange",
    what:
      "Bank of Uganda BoU@60 hackathon build, solo in three days: six role-based portals, patient consent controls, and break-glass emergency access to locked records with audit flagging.",
    stack: "Next.js · TypeScript",
    live: "https://cool-smakager-893ca4.netlify.app/moh",
    repo: "https://github.com/Uganda-Hie/uganda-hie",
  },
  {
    year: "2026",
    name: "Afro Zone Munich",
    what:
      "Venue site and admin panel for a Munich nightclub, with table booking, generated reference codes, a realtime bookings inbox, and row-level security protecting the admin.",
    stack: "Next.js · Supabase",
    live: "https://munich-nightclub.vercel.app",
    repo: "https://github.com/afrozonemunchen/munich-nightclub",
  },
  {
    year: "2026",
    name: "Chicken Tonight",
    what:
      "Ordering platform concept for a 15-outlet Kampala restaurant group, built in a day: MTN Mobile Money flow, kitchen display system with per-ticket timers, live rider tracking.",
    stack: "Next.js · Zustand",
    live: "https://chicken-tonight.vercel.app",
    repo: "https://github.com/centurycinemax6/chicken-tonight",
  },
  {
    year: "2026",
    name: "Takeover Creatives FC",
    what:
      "Headless CMS build for a community football club, pairing a Laravel Filament admin with role-based access and on-demand revalidation, covered by a full test suite.",
    stack: "Next.js 16 · Laravel · Filament",
    repo: "https://github.com/johnseyi/takeover-fc-website",
  },
  {
    year: "2026",
    name: "Healthy Steps Foundation",
    what:
      "Site and donation flow for a mental-health nonprofit, with pledges validated by zod, stored in Supabase, and receipted with a server-generated PDF.",
    stack: "Next.js · Supabase · Resend",
    live: "https://healthystepsfoundation.org",
    repo: "https://github.com/healthystepfoundation/healthy-steps-foundation",
  },
];

export const stackGroups = [
  {
    title: "Shipping daily",
    items: "TypeScript · Next.js 15/16 · React 19 · Laravel 13 · PHP 8.3 · PostgreSQL · Tailwind v4",
  },
  {
    title: "Mobile",
    items: "Flutter · Dart · Hive · React Native (Expo) · biometric auth · push notifications",
  },
  {
    title: "Offline & sync",
    items: "IndexedDB outboxes · service workers · idempotent sync · low-bandwidth SSR · cached-config boot",
  },
  {
    title: "Payments & compliance",
    items: "Stripe · Adyen · MTN Mobile Money · EFRIS fiscalization (URA) · VAT & EU export declarations · multi-currency",
  },
  {
    title: "Infrastructure",
    items: "AWS (ECS Fargate, RDS, S3, CloudFront) · Docker · Redis / Horizon · GitHub Actions · Vercel · Netlify",
  },
  {
    title: "Security",
    items: "OAuth 2.0 · JWT · RBAC · 2FA · Supabase row-level security · BSc Networking & Cybersecurity",
  },
];
