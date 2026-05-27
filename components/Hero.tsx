"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border border-border bg-background/40 px-6 py-20 md:px-12"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        animate={{ backgroundPosition: ["0px 0px", "20px 20px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(rgb(230 237 243 / 0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative z-10 max-w-4xl space-y-5">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="font-[var(--font-heading)] text-4xl leading-tight text-text sm:text-5xl md:text-7xl"
        >
          Usman Musa Usman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="font-[var(--font-heading)] text-sm uppercase tracking-[0.2em] text-accent sm:text-base"
        >
          Frontend Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
          className="max-w-2xl text-base text-text/85 sm:text-lg md:text-xl"
        >
          I build interfaces that work — and ones people actually want to use.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.36 }}
          href="#work"
          className="inline-block border border-accent px-6 py-3 font-[var(--font-heading)] text-xs uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-background"
        >
          View Work
        </motion.a>
      </div>
    </section>
  );
}
