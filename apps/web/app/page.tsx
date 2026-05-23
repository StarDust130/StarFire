"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import {
  ArrowRight,
  Menu,
  X,
  Bot,
  Briefcase,
  Zap,
  CheckCircle2,
} from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${playfair.variable} ${inter.variable} min-h-dvh flex flex-col bg-[#e8e6e1] font-[family-name:var(--font-inter)]`}
    >
      {/* Top Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 w-full z-50 px-4 sm:px-8 py-4 flex items-center justify-between pointer-events-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 z-50 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-white font-bold font-[family-name:var(--font-playfair)]">
            B
          </div>
          <span className="text-[#1a1a1a] font-bold text-lg tracking-tight">
            Bhishma
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a4742]">
          <a
            href="#features"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            How it Works
          </a>
          <a href="#pricing" className="hover:text-[#1a1a1a] transition-colors">
            Pricing
          </a>
        </div>

        {/* Desktop Login & Mobile Hamburger */}
        <div className="flex items-center gap-3 z-50">
          <button className="hidden md:block px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-[#1a1a1a] text-sm font-semibold hover:bg-white hover:shadow-lg transition-all cursor-pointer border border-[#ddd9d3]">
            Login
          </button>
          <button
            className="md:hidden p-2 text-[#1a1a1a] bg-white/60 backdrop-blur-md rounded-full border border-[#ddd9d3] transition-all cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#e8e6e1]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 pt-16"
          >
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#features"
              className="text-2xl font-semibold text-[#1a1a1a]"
            >
              Features
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#how-it-works"
              className="text-2xl font-semibold text-[#1a1a1a]"
            >
              How it Works
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#pricing"
              className="text-2xl font-semibold text-[#1a1a1a]"
            >
              Pricing
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-10 py-3 rounded-full bg-[#1a1a1a] text-white text-lg font-semibold shadow-xl cursor-pointer"
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full flex flex-col relative overflow-hidden">
        {/* --- Hero Section --- */}
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-16 sm:pt-24 md:pt-32 flex flex-col items-center px-4 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-[#8a8580] text-[11px] sm:text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-4 text-center"
          >
            Bhishma Learns Your Workflows
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#1a1a1a] text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-5xl font-[family-name:var(--font-playfair)] text-center"
          >
            Outsource the boring.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Focus on the extraordinary.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-[#4a4742] text-[15px] sm:text-base md:text-lg leading-[1.6] max-w-[680px] mt-6 text-center font-medium"
          >
            Bhishma is your personal AI agent that silently operates in the
            background. From finding the perfect job openings to automating your
            most repetitive tasks, Bhishma does the heavy lifting while you take
            all the credit.
          </motion.p>

          {/* CTA: Get Started */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 sm:mt-10 mb-8 sm:mb-16"
          >
            <button className="group flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-[#1a1a1a] text-white text-sm sm:text-base font-semibold hover:bg-[#2a2a2a] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-2xl shadow-black/20">
              Get Started for Free
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Robot Image — Full Width Edge-to-Edge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: "easeOut" }}
          className="w-full relative min-h-[250px] sm:min-h-[450px] md:min-h-[550px]"
        >
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
        <div className="w-full bg-[#1a1a1a] py-16 px-4 sm:px-8 text-white text-center relative z-20">
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-playfair)] tracking-tight mb-8">
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
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/10"
              >
                <CheckCircle2 className="w-4 h-4 text-[#e9a319]" />
                {task}
              </span>
            ))}
          </div>
        </div>

        {/* --- Features Section --- */}
        <div
          id="features"
          className="w-full bg-[#f4f3f0] py-20 sm:py-32 px-4 sm:px-8 border-t border-[#ddd9d3] relative z-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] font-[family-name:var(--font-playfair)] tracking-tight mb-4">
                What can Bhishma do?
              </h2>
              <p className="text-[#6a665f] text-base md:text-lg max-w-2xl mx-auto font-medium">
                Delegate your digital chores. Bhishma connects to your
                workflows, understands your intent, and executes flawlessly on
                your behalf.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#eceAE3] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e9a319]/20 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-[#c58a15]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  Job Hunting, Automated
                </h3>
                <p className="text-[#6a665f] leading-relaxed text-sm md:text-base">
                  Tell Bhishma your ideal role. It will continuously scour job
                  boards, match descriptions to your resume, and autonomously
                  apply on your behalf.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#eceAE3] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#4a7c59]/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#3c6648]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  Tireless Repetition
                </h3>
                <p className="text-[#6a665f] leading-relaxed text-sm md:text-base">
                  Data entry, form filling, scraping, or web driving. Define the
                  sequence once, and Bhishma executes it flawlessly millions of
                  times without fatigue.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#eceAE3] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#4a6fa5]/20 flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-[#3a5884]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  Autonomous Execution
                </h3>
                <p className="text-[#6a665f] leading-relaxed text-sm md:text-base">
                  Not just a chatbot. Bhishma spins up headless browsers,
                  authenticates, and navigates complex UI interfaces to get
                  actual work done for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="w-full bg-[#1a1a1a] pt-16 pb-8 px-4 sm:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1a1a1a] font-bold font-[family-name:var(--font-playfair)]">
                  B
                </div>
                <span className="text-white font-bold text-xl tracking-tight">
                  Bhishma AI
                </span>
              </div>
              <p className="text-white/60 text-sm max-w-xs text-center md:text-left">
                The AI agent designed to automate the boring parts of your life,
                so you can focus on building the extraordinary.
              </p>
            </div>

            <div className="flex gap-12 sm:gap-16">
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold mb-2">Product</h4>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Security
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold mb-2">Company</h4>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Bhishma AI Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Color Stripes */}
        <div className="absolute bottom-0 left-0 w-full flex h-1.5 sm:h-2">
          <div className="flex-1 bg-[#c8553d]" />
          <div className="flex-1 bg-[#e9a319]" />
          <div className="flex-1 bg-[#4a7c59]" />
          <div className="flex-1 bg-[#4a6fa5]" />
        </div>
      </footer>
    </div>
  );
}
