export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <p className="text-[0.85rem]" style={{ color: "var(--muted)" }}>
          Ayodele John Oluwaseyi — Full-Stack Engineer, Kampala, Uganda
        </p>
        <p className="mono text-[0.76rem]" style={{ color: "var(--muted)" }}>
          Built with React, TypeScript and Tailwind. Deployed from GitHub Actions.
        </p>
      </div>
    </footer>
  );
}
