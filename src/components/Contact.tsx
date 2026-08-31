import Reveal from "./Reveal";

/**
 * To offer the CV as a download: drop the PDF at public/John-Oluwaseyi-CV.pdf
 * and set this to "/John-Oluwaseyi-CV.pdf". Left null so the button never 404s.
 */
const CV_URL: string | null =  "/John-Oluwaseyi-CV.pdf";

const links = [
  { label: "GitHub", href: "https://github.com/johnseyi", detail: "github.com/johnseyi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/johnoluwaseyi", detail: "in/johnoluwaseyi" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-8">
      <Reveal>
        <div className="rounded-2xl border p-8 sm:p-12" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
          <p
            className="mb-3 mono text-[0.72rem] font-medium uppercase tracking-[0.16em]"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>
          <h2 className="max-w-[24ch] text-[clamp(1.6rem,3vw,2.3rem)] font-bold" style={{ color: "var(--ink)" }}>
            If any of this is the kind of problem your team has, let us talk.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[1.02rem] leading-relaxed" style={{ color: "var(--muted)" }}>
            I am open to full-stack engineering roles, remote or in Kampala, and to contract work.
            The fastest way to reach me is email, and I reply the same day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:leojohnseyi@gmail.com"
              className="rounded-full px-6 py-3 text-[0.92rem] font-semibold transition-opacity hover:opacity-85"
              style={{ background: "var(--accent)", color: "var(--paper)" }}
            >
              leojohnseyi@gmail.com
            </a>
            {CV_URL && (
              <a
                href={CV_URL}
                className="rounded-full border px-6 py-3 text-[0.92rem] font-semibold"
                style={{ borderColor: "var(--line)", color: "var(--ink)" }}
              >
                Download CV
              </a>
            )}
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="rounded-full border px-6 py-3 text-[0.92rem] font-semibold"
                style={{ borderColor: "var(--line)", color: "var(--ink)" }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
