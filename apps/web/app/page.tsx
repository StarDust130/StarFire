"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-[var(--color-bg)] selection:bg-[var(--color-accent)] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full flex flex-col relative overflow-hidden">
        {/* --- Hero Section --- */}
        <Hero />

        {/* Robot Image — Full Width Edge-to-Edge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: "easeOut" }}
          className="w-full relative min-h-[300px] sm:min-h-[450px] md:min-h-[550px] mt-4"
        >
          {/* A gradient overlay to smoothly transition the image into the dark social proof section below it */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a09] z-10 pointer-events-none translate-y-[2px]" />
          <Image
            src="https://images.unsplash.com/photo-1706076463257-20b41d9519f0?q=80&w=1632&auto=format&fit=crop"
            alt="Bhishma - Your AI Agent"
            fill
            className="object-cover object-center sm:object-contain sm:object-bottom pointer-events-none"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* --- Social Proof --- */}
        <div className="w-full bg-[#0a0a09] py-20 px-4 sm:px-8 text-white text-center relative z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-serif)] tracking-tight mb-10 text-balance text-white/90">
            Trusted to execute over 1,000,000 tasks daily
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              "Scraping Leads",
              "Applying to Jobs",
              "Processing Invoices",
              "Sending Cold Emails",
              "Monitoring Competitors",
            ].map((task) => (
              <span
                key={task}
                className="flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/90 text-xs sm:text-sm font-medium border border-white/10 transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                {task}
              </span>
            ))}
          </div>
        </div>

        {/* --- Features Section --- */}
        <div className="my-10 sm:my-20">
          <Features />
        </div>

        {/* --- How It Works Section --- */}
        <div className="my-10 sm:my-20">
          <HowItWorks />
        </div>

        {/* --- Pricing Section --- */}
        <div className="my-10 sm:my-20">
          <Pricing />
        </div>
      </main>

      <Footer />
    </div>
  );
}
