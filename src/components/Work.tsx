import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clientProjects, personalProjects, featuredProject } from "../data/projects";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="work" ref={ref} className="mx-auto max-w-5xl border-t border-black/10 dark:border-white/10 px-6 py-16">
      <h2 className="mb-2 text-[1.7rem] font-bold text-neutral-900 dark:text-neutral-50">Client work</h2>
      <p className="mb-8 max-w-[60ch] text-neutral-500 dark:text-neutral-400">
        Production sites and APIs built for real businesses, not tutorials, not clones.
      </p>

      <FeaturedProject project={featuredProject} />

      <motion.div
        variants={grid}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {clientProjects.map((p) => (
          <ProjectCard key={p.name} project={p} accented />
        ))}
      </motion.div>

      <h2 className="mt-14 mb-8 text-[1.7rem] font-bold text-neutral-900 dark:text-neutral-50">
        Personal &amp; social-impact projects
      </h2>
      <motion.div
        variants={grid}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {personalProjects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </motion.div>
    </section>
  );
}
