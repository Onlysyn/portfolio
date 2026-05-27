"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const contributionLevels = [
  0, 1, 0, 2, 1, 0, 3, 1, 0, 2, 1, 0, 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 0, 1,
  0, 2, 1, 3, 0, 1, 2, 0, 1, 0, 2, 3, 1, 0, 2, 1, 0, 1, 2, 0, 1, 3, 2, 1,
  1, 0, 2, 1, 3, 0, 1, 2, 0, 1, 2, 0, 1, 3, 1, 0, 2, 1, 0, 2, 1, 0, 3, 2,
  0, 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 0, 1, 2, 0, 3, 1, 2, 0, 1, 2, 1, 0, 1,
  2, 0, 1, 3, 0, 2, 1, 0, 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 0, 1, 2, 0, 1, 3,
];

const levelClass: Record<number, string> = {
  0: "bg-background",
  1: "bg-accent/25",
  2: "bg-accent/55",
  3: "bg-accent",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid gap-10 border border-border bg-background/50 p-8 md:grid-cols-2 md:gap-12 md:p-12"
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }} className="space-y-6">
        <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">About</h2>

        <div className="space-y-4 text-text/85">
          <p>
            Frontend developer with a thing for clean code and even cleaner UIs. I&apos;ve shipped
            production projects across different industries — from content-driven websites to
            data-heavy dashboards. I care about the details most people skip: load states,
            transitions, the way a button feels when you click it.
          </p>
          <p>Currently building products under Sentratech Labs.</p>
        </div>

        <a
          href="#sentratech"
          className="inline-block border border-accent/40 bg-accent/10 px-3 py-1.5 font-[var(--font-heading)] text-xs uppercase tracking-[0.12em] text-accent transition hover:border-accent hover:bg-accent/20"
        >
          Founder · Sentratech Labs
        </a>

        <div className="space-y-2 text-sm text-text/80">
          <a
            href="mailto:selfsyntax@gmail.com"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <Mail size={15} />
            selfsyntax@gmail.com
          </a>
          <a
            href="tel:+2348160001092"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <Phone size={15} />
            +2348160001092
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="space-y-5 border border-border bg-background/80 p-5"
      >
        <div className="overflow-hidden rounded-3xl border border-border bg-background/70">
          <div className="relative aspect-[4/5]">
            <Image
              src="/pic.jpg"
              alt="Usman Musa Usman"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="border-t border-border px-4 py-3 text-sm text-text/80">
            Usman Musa Usman — frontend developer and founder of Sentratech Labs.
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between font-[var(--font-heading)] text-xs uppercase tracking-[0.12em] text-text/60">
          <span>Contribution activity</span>
          <span className="text-accent">2025 — 2026</span>
        </div>
        <div className="grid grid-cols-12 gap-[3px]">
          {contributionLevels.map((level, idx) => (
            <div
              key={idx}
              className={`aspect-square rounded-[2px] ${levelClass[level]}`}
              aria-hidden
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end gap-1.5 font-[var(--font-heading)] text-[10px] uppercase tracking-[0.1em] text-text/50">
          <span>Less</span>
          {[0, 1, 2, 3].map((level) => (
            <div key={level} className={`h-3 w-3 rounded-[2px] ${levelClass[level]}`} />
          ))}
          <span>More</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
