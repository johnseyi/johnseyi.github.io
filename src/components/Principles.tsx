import { principles } from "../data/work";
import Reveal, { SectionHeading } from "./Reveal";

export default function Principles() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <SectionHeading
          kicker="How I build"
          title="Four rules I have earned the hard way"
          lead="Most of my work has been for businesses where a bug is not an inconvenience — it is a partner's commission, a customer stuck in a lobby, or a health worker given the wrong advice. These are the habits that came out of that."
        />
      </div>

      <div className="grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2" style={{ borderColor: "var(--line)", background: "var(--line)" }}>
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.05}>
            <div className="h-full p-7" style={{ background: "var(--surface)" }}>
              <span className="mono text-[0.78rem]" style={{ color: "var(--accent)" }}>
                {p.n}
              </span>
              <h3 className="mt-3 text-[1.08rem] font-bold" style={{ color: "var(--ink)" }}>
                {p.title}
              </h3>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
