import { motion } from "framer-motion";
import type { FeaturedProject as FeaturedProjectType } from "../data/projects";

export default function FeaturedProject({ project }: { project: FeaturedProjectType }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mb-10 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#15181b] shadow-[0_1px_2px_rgba(20,22,26,0.04),0_8px_24px_rgba(20,22,26,0.05)]"
    >
      <div className="grid grid-cols-1 gap-1 p-1.5 sm:grid-cols-3">
        {project.images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-full w-full rounded-xl object-cover"
          />
        ))}
      </div>

      <div className="p-7 sm:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="text-[1.3rem]" aria-hidden="true">{project.icon}</span>
          <h3 className="text-[1.25rem] font-bold text-neutral-900 dark:text-neutral-50">{project.name}</h3>
          <span className="text-[0.75rem] font-semibold text-emerald-700 dark:text-emerald-400">{project.tag}</span>
        </div>
        <p className="mb-4 max-w-[70ch] text-[0.98rem] text-neutral-500 dark:text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap items-center gap-5">
          <span className="text-[0.85rem] text-neutral-500 dark:text-neutral-500">{project.stack}</span>
          <div className="flex gap-4 text-sm font-semibold">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener" className="text-emerald-700 dark:text-emerald-400 hover:underline">
                Live ↗
              </a>
            )}
            <a href={project.repo} target="_blank" rel="noopener" className="text-emerald-700 dark:text-emerald-400 hover:underline">
              Repo →
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
