"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  X,
  Bot,
  Briefcase,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col bg-[var(--color-bg)]">
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
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="outline"
                className="hidden md:inline-flex text-sm"
              >
                Login
              </Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
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
              className="text-2xl font-semibold text-[var(--color-foreground)]"
            >
              Pricing
            </a>
            <SignInButton mode="modal">
              <Button variant="primary" className="mt-4 px-10 py-3 text-lg">
                Login
              </Button>
            </SignInButton>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full flex flex-col relative overflow-hidden">
        {/* --- Hero Section (refactored) --- */}
        <Hero />

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

        {/* --- Features Section (refactored) --- */}
        <Features />
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
