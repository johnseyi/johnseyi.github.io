export type Project = {
  name: string;
  icon: string;
  tag?: string;
  description: string;
  stack: string;
  live?: string;
  repo: string;
};

export const clientProjects: Project[] = [
  {
    name: "Okelcor Website",
    icon: "🌐",
    tag: "546 commits",
    description: "Client website for Okelcor GmbH. A production Next.js and TypeScript site, live on a custom domain.",
    stack: "TypeScript · Next.js",
    live: "https://www.okelcor.com",
    repo: "https://github.com/okelcor-gmbh/okelcor-website",
  },
  {
    name: "Okelcor API",
    icon: "⚙️",
    tag: "339 commits",
    description: "Backend API powering the Okelcor platform.",
    stack: "PHP",
    repo: "https://github.com/okelcor-gmbh/okelcor-api",
  },
  {
    name: "Vitorra Web",
    icon: "🌐",
    tag: "138 commits",
    description: "Client web platform built with Next.js and TypeScript.",
    stack: "TypeScript · Next.js",
    live: "https://vitorraweb.vercel.app",
    repo: "https://github.com/vitorraweb/vitorraweb",
  },
  {
    name: "Munich Nightclub",
    icon: "🎧",
    tag: "Afro Zone Munich",
    description: "Venue site and admin panel, built with Next.js and Supabase.",
    stack: "TypeScript · Supabase",
    live: "https://munich-nightclub.vercel.app",
    repo: "https://github.com/afrozonemunchen/munich-nightclub",
  },
  {
    name: "Wellapath Mobile",
    icon: "📱",
    tag: "89 commits",
    description: "Clinic decision-support system. A Flutter mobile app.",
    stack: "Dart · Flutter",
    repo: "https://github.com/Wellapath-org/wellapath-mobile",
  },
];

export const personalProjects: Project[] = [
  {
    name: "Goodie Glow Guide",
    icon: "✨",
    description: "A 30-day skincare routine guide built for the African market, with a skin-type quiz and progress tracker.",
    stack: "JavaScript · HTML/CSS",
    repo: "https://github.com/johnseyi/goodie-glow-guide",
  },
  {
    name: "Healthy Steps Foundation",
    icon: "💙",
    description: "Website for a faith-based mental health nonprofit in Wakiso, Uganda.",
    stack: "TypeScript · Next.js",
    live: "https://healthystepsfoundation.netlify.app",
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
];
