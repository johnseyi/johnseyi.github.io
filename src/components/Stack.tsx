import { stackGroups } from "../data/work";
import Reveal, { SectionHeading } from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <SectionHeading
          kicker="Stack"
          title="What I reach for, and what I have shipped with it"
          lead="Everything listed here is in something that runs in production, not something I have read about."
        />
      </div>

      <dl>
        {stackGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.04}>
            <div className="grid gap-2 border-t py-5 sm:grid-cols-[13rem_minmax(0,1fr)]" style={{ borderColor: "var(--line)" }}>
              <dt className="text-[0.95rem] font-bold" style={{ color: "var(--ink)" }}>
                {g.title}
              </dt>
              <dd className="mono text-[0.86rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                {g.items}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
