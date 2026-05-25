"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-[#0a0a09] relative overflow-hidden selection:bg-[var(--color-accent)] selection:text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-8 left-8 sm:top-12 sm:left-12 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md z-50 group font-medium text-sm"
        aria-label="Go back"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      {/* Main Content - No Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full px-4"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://media.tenor.com/Nwt7H6RU_4sAAAAi/gojill-the-meow-dance.gif"
            alt="Anime Dance"
            className="w-full h-full object-cover"
          />
          {/* Inner border to cleanly crop the GIF edges */}
          <div className="absolute inset-0  pointer-events-none" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] text-white font-bold mb-3 tracking-tight text-center">
          No Terms.
        </h1>
        <p className="text-white/50 text-base font-medium text-center max-w-xs">
          Do whatever you want. The system is yours.
        </p>
      </motion.div>
    </div>
  );
}

