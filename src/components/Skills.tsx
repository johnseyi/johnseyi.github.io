const groups = [
  { title: "Frontend", skills: ["TypeScript", "Next.js", "React", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js / Fastify", "PHP", "Supabase", "PostgreSQL"] },
  { title: "Mobile", skills: ["Flutter", "Dart"] },
  { title: "Other", skills: ["Networking & Cybersecurity", "Git / GitHub", "Vercel / Netlify"] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl border-t border-black/10 dark:border-white/10 px-6 py-16">
      <h2 className="mb-8 text-[1.7rem] font-bold text-neutral-900 dark:text-neutral-50">Skills</h2>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 text-[0.95rem] font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-black/10 dark:border-white/15 bg-neutral-50 dark:bg-white/5 px-3.5 py-1.5 text-[0.85rem] font-medium text-neutral-900 dark:text-neutral-50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
