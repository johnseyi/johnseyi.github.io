import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#how", label: "How I build" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="sticky top-0 z-20 border-b backdrop-blur-md"
      style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--paper) 85%, transparent)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-baseline gap-2" style={{ color: "var(--ink)" }}>
          <span className="display text-[1rem] font-bold">John Oluwaseyi</span>
          <span className="hidden mono text-[0.72rem] sm:inline" style={{ color: "var(--muted)" }}>
            Full-Stack Engineer
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <nav aria-label="Primary" className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] font-medium transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-[0.85rem] font-semibold whitespace-nowrap transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)", color: "var(--paper)" }}
          >
            Get in touch
          </a>

          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-sm"
            style={{ borderColor: "var(--line)", color: "var(--muted)" }}
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
        </div>
      </div>
    </header>
  );
}
