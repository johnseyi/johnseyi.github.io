import { apps } from "../data/work";
import Reveal, { SectionHeading } from "./Reveal";

export default function Apps() {
  return (
    <section id="apps" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-10">
        <SectionHeading
          kicker="Mobile apps"
          title="Apps built for real phones on real networks"
          lead="Flutter, React Native and installable Android apps. Each one is designed around the device it actually runs on: a mid-range Android, a patchy connection, and a user who cannot afford to lose what they typed."
        />
      </div>

      <ul className="grid gap-5 md:grid-cols-2">
        {apps.map((app, i) => (
          <Reveal key={app.id} delay={i * 0.04}>
            <li
              className="flex h-full flex-col rounded-2xl border p-6"
              style={{ borderColor: "var(--line)" }}
            >
              <p className="mono text-[0.72rem] uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
                {app.kind}
              </p>
              <h3 className="mt-2 text-[1.3rem] font-bold" style={{ color: "var(--ink)" }}>
                {app.name}
              </h3>
              <p className="mt-1 mono text-[0.76rem]" style={{ color: "var(--muted)" }}>
                {app.platform}
              </p>

              <p className="mt-4 text-[1rem] font-medium leading-snug" style={{ color: "var(--ink)" }}>
                {app.tagline}
              </p>

              <ul className="mt-4 space-y-2.5">
                {app.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.93rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                    <span aria-hidden="true" className="mt-2 h-1 w-3 flex-none rounded-full" style={{ background: "var(--accent)" }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="mb-3 text-[0.82rem] font-semibold" style={{ color: "var(--ink)" }}>
                  {app.status}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {app.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border px-2.5 py-1 mono text-[0.72rem]"
                      style={{ borderColor: "var(--line)", color: "var(--muted)" }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {app.links.length > 0 ? (
                    app.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener"
                        className="text-[0.86rem] font-semibold underline-offset-4 hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        {l.label} ↗
                      </a>
                    ))
                  ) : (
                    <span className="text-[0.84rem]" style={{ color: "var(--muted)" }}>
                      Private repository. Happy to demo it in an interview.
                    </span>
                  )}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
