const clients = [
  { name: "Okelcor GmbH", place: "Munich" },
  { name: "Century Cinemax", place: "Kampala" },
  { name: "WellaPath", place: "Lagos" },
  { name: "Vitorra Holdings", place: "Kampala" },
  { name: "Afro Zone", place: "Munich" },
  { name: "Bank of Uganda", place: "BoU@60 hackathon" },
];

export default function Clients() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="border-y py-7" style={{ borderColor: "var(--line)" }}>
        <p
          className="mb-5 mono text-[0.72rem] uppercase tracking-[0.16em]"
          style={{ color: "var(--muted)" }}
        >
          Built for
        </p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c) => (
            <li key={c.name}>
              <span className="block text-[0.95rem] font-semibold" style={{ color: "var(--ink)" }}>
                {c.name}
              </span>
              <span className="block text-[0.8rem]" style={{ color: "var(--muted)" }}>
                {c.place}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
