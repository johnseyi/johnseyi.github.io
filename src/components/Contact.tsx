export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-black/10 dark:border-white/10 px-6 py-16">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-12 text-center sm:p-8">
        <h2 className="mb-2 text-[1.7rem] font-bold text-neutral-900 dark:text-neutral-50">Let's build something.</h2>
        <p className="mx-auto mb-6 max-w-[60ch] text-neutral-500 dark:text-neutral-400">
          Open to freelance and full-time opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:leojohnseyi@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 dark:bg-emerald-400 px-6 py-3 text-sm font-semibold text-white dark:text-[#08201b] transition-transform hover:-translate-y-0.5"
          >
            leojohnseyi@gmail.com
          </a>
          <a
            href="https://github.com/johnseyi"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/15 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-neutral-50 transition-transform hover:-translate-y-0.5 hover:bg-white dark:hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
