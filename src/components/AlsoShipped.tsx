import { alsoShipped } from "../data/work";
import Reveal, { SectionHeading } from "./Reveal";

export default function AlsoShipped() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <SectionHeading
          kicker="Also shipped"
          title="Other things that went live"
          lead="Client builds, a hackathon entry, and nonprofit work — smaller in scope, but each one deployed and used."
        />
      </div>

      <ul>
        {alsoShipped.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.03}>
            <li className="border-t py-6" style={{ borderColor: "var(--line)" }}>
              <div className="grid gap-3 sm:grid-cols-[5.5rem_minmax(0,1fr)]">
                <span className="mono text-[0.8rem]" style={{ color: "var(--muted)" }}>
                  {p.year}
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-bold" style={{ color: "var(--ink)" }}>
                    {p.name}
                  </h3>
                  <p className="mt-1.5 max-w-[68ch] text-[0.96rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                    {p.what}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="mono text-[0.76rem]" style={{ color: "var(--muted)" }}>
                      {p.stack}
                    </span>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener"
                        className="text-[0.85rem] font-semibold underline-offset-4 hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        Live ↗
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener"
                        className="text-[0.85rem] font-semibold underline-offset-4 hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
