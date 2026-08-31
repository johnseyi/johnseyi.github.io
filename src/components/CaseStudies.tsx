import { caseStudies, type CaseStudy } from "../data/work";
import { diagrams } from "./Diagrams";
import Reveal, { SectionHeading } from "./Reveal";

function Study({ study, index }: { study: CaseStudy; index: number }) {
  const Diagram = study.diagram ? diagrams[study.diagram] : null;

  return (
    <article className="border-t pt-14" style={{ borderColor: "var(--line)" }}>
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="mono text-[0.8rem]" style={{ color: "var(--accent)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-[clamp(1.4rem,2.8vw,2.05rem)] font-bold" style={{ color: "var(--ink)" }}>
            {study.client}
          </h3>
        </div>

        <p className="mt-2 mono text-[0.78rem]" style={{ color: "var(--muted)" }}>
          {study.place} · {study.role} · {study.period}
          {study.scale ? ` · ${study.scale}` : ""}
        </p>

        <p className="mt-5 max-w-[54ch] text-[1.15rem] font-medium leading-snug" style={{ color: "var(--ink)" }}>
          {study.tagline}
        </p>
      </Reveal>

      <div className="mt-9 grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <Reveal>
          <h4
            className="mb-3 mono text-[0.72rem] uppercase tracking-[0.14em]"
            style={{ color: "var(--muted)" }}
          >
            The constraint
          </h4>
          <p className="text-[0.98rem] leading-relaxed" style={{ color: "var(--muted)" }}>
            {study.constraint}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h4
            className="mb-3 mono text-[0.72rem] uppercase tracking-[0.14em]"
            style={{ color: "var(--muted)" }}
          >
            What I built
          </h4>
          <ul className="space-y-3">
            {study.built.map((b) => (
              <li key={b} className="flex gap-3 text-[0.98rem] leading-relaxed" style={{ color: "var(--ink)" }}>
                <span aria-hidden="true" className="mt-2 h-1 w-3 flex-none rounded-full" style={{ background: "var(--accent)" }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {Diagram && (
        <Reveal>
          <Diagram />
        </Reveal>
      )}

      {study.images && (
        <Reveal>
          <div className="my-8 grid gap-4 sm:grid-cols-3">
            {study.images.map((img, i) => (
              <figure key={img.src} className={i === 0 ? "sm:col-span-3" : ""}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full rounded-xl border object-cover"
                  style={{ borderColor: "var(--line)", aspectRatio: i === 0 ? "21 / 9" : "4 / 3" }}
                />
                <figcaption className="mt-2 text-[0.8rem]" style={{ color: "var(--muted)" }}>
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal>
        <div
          className="my-8 rounded-r-xl border-l-2 py-1 pl-5"
          style={{ borderColor: "var(--accent)" }}
        >
          <h4 className="mb-2 text-[1.02rem] font-bold" style={{ color: "var(--ink)" }}>
            {study.decision.title}
          </h4>
          <p className="max-w-[68ch] text-[0.98rem] leading-relaxed" style={{ color: "var(--muted)" }}>
            {study.decision.body}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pb-4">
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {study.stack.map((s) => (
              <li
                key={s}
                className="rounded-md border px-2.5 py-1 mono text-[0.74rem]"
                style={{ borderColor: "var(--line)", color: "var(--muted)" }}
              >
                {s}
              </li>
            ))}
          </ul>
          {study.links.length > 0 && (
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {study.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    className="text-[0.88rem] font-semibold underline-offset-4 hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
          {study.links.length === 0 && (
            <span className="text-[0.85rem]" style={{ color: "var(--muted)" }}>
              Private repository — happy to walk through the architecture in an interview.
            </span>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-12">
        <SectionHeading
          kicker="Selected work"
          title="Four systems, and the decisions behind them"
          lead="Each of these is running in production or in active build. I have written up the constraint that shaped it and the one decision I would defend in a code review, rather than a list of features."
        />
      </div>

      <div className="space-y-16">
        {caseStudies.map((s, i) => (
          <Study key={s.id} study={s} index={i} />
        ))}
      </div>
    </section>
  );
}
