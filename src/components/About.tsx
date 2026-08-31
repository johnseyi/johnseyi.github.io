import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
        <Reveal>
          <img
            src="https://avatars.githubusercontent.com/u/265010297?v=4"
            alt="John Oluwaseyi"
            width={224}
            height={224}
            className="h-40 w-40 rounded-2xl border object-cover sm:h-56 sm:w-56"
            style={{ borderColor: "var(--line)" }}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p
            className="mb-3 mono text-[0.72rem] font-medium uppercase tracking-[0.16em]"
            style={{ color: "var(--accent)" }}
          >
            About
          </p>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold" style={{ color: "var(--ink)" }}>
            Kampala-based, and used to being the only engineer in the room
          </h2>

          <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              I studied Networking and Cybersecurity at ISBAT University, which is mostly why I think
              about how a system fails before I think about how it looks. It is also why row-level
              security, two-factor auth and least-privilege access tend to show up in my first commit
              rather than a later hardening pass.
            </p>
            <p>
              Most of my work has been as the sole engineer on the project. That means owning the
              database schema, the deploy pipeline, and the conversation with the client about what
              we are actually building, then living with every one of those decisions afterwards. On
              the Century Cinemax platform I work in a two-person team with module ownership, ADRs
              and CI-enforced boundaries, which I enjoy just as much.
            </p>
            <p>
              The problems I like have a real constraint attached: a partner on 3G in Accra, a
              currency that is not the dashboard's currency, a revenue authority that needs a signed
              invoice before a customer can walk into a cinema. Building for those conditions has
              made me a better engineer for the easy ones.
            </p>
          </div>

          <p className="mt-6 mono text-[0.82rem]" style={{ color: "var(--muted)" }}>
            BSc Networking &amp; Cybersecurity, ISBAT University · Diploma in Cybersecurity, AltSchool Africa
          </p>
        </Reveal>
      </div>
    </section>
  );
}
