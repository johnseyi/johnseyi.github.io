import { motion } from "framer-motion";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-[52rem]">
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.8rem] font-medium"
          style={{ borderColor: "var(--line)", color: "var(--muted)" }}
        >
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
          Open to full-stack engineering roles — remote or Kampala
        </motion.p>

        <motion.h1
          variants={item}
          className="text-[clamp(2.2rem,5.4vw,3.75rem)] font-extrabold leading-[1.06]"
          style={{ color: "var(--ink)" }}
        >
          I build the systems<br className="hidden sm:inline" />businesses actually run on.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-[58ch] text-[1.15rem] leading-relaxed"
          style={{ color: "var(--ink)" }}
        >
          Four are in production right now: a B2B export platform for a German tyre exporter, a
          multi-tenant cinema operating system in Uganda, an offline sales network running across
          three countries, and clinical decision support for Nigerian health workers.{" "}
          <span style={{ color: "var(--muted)" }}>On most of them I was the only engineer.</span>
        </motion.p>

        <motion.p variants={item} className="mt-5 max-w-[58ch] text-[1.02rem] leading-relaxed" style={{ color: "var(--muted)" }}>
          My work concentrates on the parts that break once software leaves the demo: sync that
          survives a dead connection, payments that clear over Mobile Money as readily as a card,
          money held in six currencies at once, and invoices a revenue authority will accept.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full px-6 py-3 text-[0.92rem] font-semibold transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "var(--paper)" }}
          >
            Read the case studies
          </a>
          <a
            href="mailto:leojohnseyi@gmail.com"
            className="rounded-full border px-6 py-3 text-[0.92rem] font-semibold transition-colors"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            leojohnseyi@gmail.com
          </a>
          <a
            href="https://github.com/johnseyi"
            target="_blank"
            rel="noopener"
            className="px-2 py-3 text-[0.92rem] font-semibold underline-offset-4 hover:underline"
            style={{ color: "var(--muted)" }}
          >
            GitHub ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
