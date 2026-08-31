import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  // Render the content outright rather than fading it in — this also guarantees
  // nothing stays at opacity 0 if the viewport observer never fires.
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <Reveal>
      <p
        className="mb-3 mono text-[0.72rem] font-medium uppercase tracking-[0.16em]"
        style={{ color: "var(--accent)" }}
      >
        {kicker}
      </p>
      <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold" style={{ color: "var(--ink)" }}>
        {title}
      </h2>
      {lead && (
        <p className="mt-3 max-w-[62ch] text-[1.02rem] leading-relaxed" style={{ color: "var(--muted)" }}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
