import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0d0f11]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-50">
          <img
            src="https://avatars.githubusercontent.com/u/265010297?v=4"
            alt="John Oluwaseyi"
            className="h-8 w-8 rounded-full ring-2 ring-black/5 dark:ring-white/10"
          />
          <span className="font-[Sora] text-[1.02rem] font-bold">John Oluwaseyi</span>
        </a>

        <nav aria-label="Primary" className="hidden sm:flex gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-emerald-700 dark:bg-emerald-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 text-neutral-700 dark:text-neutral-200"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
