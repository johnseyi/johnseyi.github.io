import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { label: "Commits shipped", target: 1165, suffix: "+" },
  { label: "Organizations", target: 5, suffix: "" },
  { label: "Projects shipped", target: 11, suffix: "" },
  { label: "Live in production", target: 5, suffix: "" },
];

function Stat({ label, target, suffix, active }: { label: string; target: number; suffix: string; active: boolean }) {
  const value = useCountUp(target, active);
  return (
    <div className="text-center">
      <span className="block font-[Sora] text-[clamp(1.6rem,3.4vw,2.2rem)] font-bold text-neutral-900 dark:text-neutral-50">
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-1 block text-[0.85rem] text-neutral-500 dark:text-neutral-400">{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-7 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <Stat key={s.label} {...s} active={inView} />
        ))}
      </motion.div>
    </section>
  );
}
