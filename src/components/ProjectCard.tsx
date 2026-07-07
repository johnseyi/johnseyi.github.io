import { motion } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, accented }: { project: Project; accented?: boolean }) {
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
      whileHover={{ y: -4 }}
      className={`flex flex-col gap-2.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#15181b] p-6 shadow-[0_1px_2px_rgba(20,22,26,0.04),0_8px_24px_rgba(20,22,26,0.05)] transition-colors hover:border-emerald-700/30 dark:hover:border-emerald-400/30 ${
        accented ? "border-t-[3px] border-t-emerald-700 dark:border-t-emerald-400" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[1.3rem]" aria-hidden="true">{project.icon}</span>
        {project.tag && <span className="text-[0.75rem] font-semibold text-emerald-700 dark:text-emerald-400">{project.tag}</span>}
      </div>
      <h3 className="text-[1.08rem] font-bold text-neutral-900 dark:text-neutral-50">{project.name}</h3>
      <p className="flex-grow text-[0.95rem] text-neutral-500 dark:text-neutral-400">{project.description}</p>
      <span className="text-[0.8rem] text-neutral-500 dark:text-neutral-500">{project.stack}</span>
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
    </motion.article>
  );
}
