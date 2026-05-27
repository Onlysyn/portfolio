"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.12 }}
      className="space-y-6 border border-border bg-background/50 p-8"
    >
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-[var(--font-heading)] text-2xl md:text-3xl"
      >
        Let&apos;s build something.
      </motion.h2>

      <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut", delay: 0.06 }} className="flex flex-col gap-4 text-text/85">
        <a
          className="inline-flex items-center gap-2 transition hover:text-accent"
          href="mailto:selfsyntax@gmail.com"
        >
          <Mail size={18} /> selfsyntax@gmail.com
        </a>
        <a
          className="inline-flex items-center gap-2 transition hover:text-accent"
          href="tel:+2348160001092"
        >
          <Phone size={18} /> +2348160001092
        </a>
        <a
          className="inline-flex items-center gap-2 transition hover:text-accent"
          href="https://github.com/onlysyn"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={18} /> github.com/onlysyn
        </a>
      </motion.div>
    </motion.section>
  );
}
