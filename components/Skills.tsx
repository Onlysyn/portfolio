"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    skills: ["Supabase", "Sanity CMS", "Chart.js"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Figma", "jsPDF", "Formspree"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-[var(--font-heading)] text-2xl md:text-3xl"
      >
        Skills
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-background/50 p-6"
          >
            <h3 className="mb-4 text-sm uppercase tracking-[0.18em] text-text/60">
              {group.title}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/80 px-3 py-2 text-sm text-text/85 transition hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
