import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-16 mx-auto max-w-5xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-28 h-[22rem] w-[22rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent-2), transparent 70%)" }}
      />

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-5 inline-block rounded-full border border-black/10 dark:border-white/15 bg-neutral-50 dark:bg-white/5 px-3.5 py-1.5 text-[0.85rem] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400"
        >
          Full-Stack Developer · Kampala, Uganda
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-5 max-w-[18ch] text-[clamp(2.1rem,4.6vw,3.4rem)] font-bold leading-[1.1] text-neutral-900 dark:text-neutral-50"
        >
          I build production systems <span className="grad-text">real businesses run on.</span>
        </motion.h1>

        <motion.p variants={item} className="mb-4 max-w-[58ch] text-[1.15rem] text-neutral-600 dark:text-neutral-400">
          Web, mobile, and the backends underneath: TypeScript and Next.js, Flutter, PHP, and Fastify,
          all shaped by a background in networking and cybersecurity.
        </motion.p>

        <motion.p variants={item} className="mb-8 text-sm text-neutral-500 dark:text-neutral-500">
          Currently shipping features at{" "}
          <a href="https://github.com/Wellapath-org" target="_blank" rel="noopener" className="font-medium text-emerald-700 dark:text-emerald-400 hover:underline">
            Wellapath
          </a>
          , alongside freelance client work.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 dark:bg-emerald-400 px-6 py-3 text-sm font-semibold text-white dark:text-[#08201b] transition-transform hover:-translate-y-0.5"
          >
            See the work <span aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:leojohnseyi@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/15 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-neutral-50 transition-transform hover:-translate-y-0.5 hover:bg-neutral-50 dark:hover:bg-white/5"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
