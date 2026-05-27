"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Work() {
  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: 0.12 }}
      className="space-y-8"
    >
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-[var(--font-heading)] text-2xl md:text-3xl"
      >
        Selected Work
      </motion.h2>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}
