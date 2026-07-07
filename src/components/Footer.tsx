export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-black/10 dark:border-white/10 px-6 py-8 text-[0.85rem] text-neutral-500 dark:text-neutral-500">
      <p>&copy; {new Date().getFullYear()} John Oluwaseyi. Built with React, TypeScript, and Tailwind CSS. Hosted on GitHub Pages.</p>
    </footer>
  );
}
