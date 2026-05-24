"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
          onClick={() => setIsVideoOpen(true)}
          variant="glass"
          className="w-full sm:w-auto px-8 py-4 sm:px-10 text-[15px] sm:text-base cursor-pointer"
        >
          See how it works
        </Button>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Close video modal cursor-pointer"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Container */}
              <div className="relative aspect-video w-full bg-[#0A0A0A] rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl cursor-pointer">
                <iframe
                  src="https://www.youtube.com/embed/EH9yR6T4ePI?start=63&autoplay=1&mute=0&rel=0&modestbranding=1&controls=0"
                  title="Bhishma Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="w-full h-full border-none pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
