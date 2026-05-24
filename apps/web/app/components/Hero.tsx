"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

// ✨ Hero section (animated, mobile-first)
export default function Hero() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto pt-16 sm:pt-24 md:pt-32 flex flex-col items-center px-4 sm:px-8">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-[var(--color-muted)] text-[11px] sm:text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-4 text-center"
      >
        Bhishma Learns Your Workflows
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="text-[var(--color-foreground)] text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-5xl font-[family-name:var(--font-playfair)] text-center"
      >
        Outsource the boring.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>Focus on the extraordinary.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-[var(--color-muted)] text-[15px] sm:text-base md:text-lg leading-[1.6] max-w-[680px] mt-6 text-center font-medium"
      >
        Bhishma is your personal AI agent that silently operates in the
        background. From finding the perfect job openings to automating your
        most repetitive tasks, Bhishma does the heavy lifting while you take all
        the credit.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-8 sm:mt-10 mb-8 sm:mb-16"
      >
        <Button
          className="group flex items-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 hover:scale-[1.02] active:scale-[0.98]"
          variant="primary"
        >
          Get Started for Free
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </section>
  );
}
