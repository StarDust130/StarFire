"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto pt-32 sm:pt-40 md:pt-48 pb-10 flex flex-col items-center px-4 sm:px-8">

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[var(--color-foreground)] text-[2.75rem] sm:text-5xl md:text-7xl  leading-[1.05] tracking-tight max-w-5xl font-[family-name:var(--font-serif)] text-center"
      >
        Outsource the boring.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>Focus on the extraordinary.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-[var(--color-muted)] text-[16px] sm:text-lg md:text-md leading-[1.6] max-w-[680px] mt-8 text-center text-balance"
      >
        Bhishma is your personal AI agent that silently operates in the
        background. From finding the perfect job openings to automating your
        repetitive tasks, Bhishma does the heavy lifting.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <Button
          href="/dashboard"
          variant="primary"
          className="w-full sm:w-auto px-8 py-4 sm:px-10 text-[15px] sm:text-base group"
        >
          Get Started for Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Button>
        <Button
          href="#how-it-works"
          variant="glass"
          className="w-full sm:w-auto px-8 py-4 sm:px-10 text-[15px] sm:text-base"
        >
          See how it works
        </Button>
      </motion.div>
    </section>
  );
}
