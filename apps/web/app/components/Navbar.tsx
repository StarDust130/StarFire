"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Show, UserButton } from "@clerk/nextjs";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)] py-3 px-4 sm:px-8" : "bg-transparent py-5 px-4 sm:px-8"
        } flex items-center justify-between pointer-events-auto`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary-contrast)] font-bold font-[family-name:var(--font-serif)] transition-transform group-hover:scale-105 shadow-sm">
            B
          </div>
          <span className="text-[var(--color-foreground)] font-bold text-lg tracking-tight">
            Bhishma
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[var(--color-muted)]">
          <a href="/#features" className="hover:text-[var(--color-primary)] transition-colors">
            Features
          </a>
          <a href="/#how-it-works" className="hover:text-[var(--color-primary)] transition-colors">
            How it Works
          </a>
          <a href="/#pricing" className="hover:text-[var(--color-primary)] transition-colors">
            Pricing
          </a>
        </nav>

        {/* Desktop Login & Mobile Hamburger */}
        <div className="flex items-center gap-3 z-50">
          <Show when="signed-out">
            <div className="hidden md:flex items-center gap-2">
              <Button href="/sign-in" variant="ghost" className="text-sm px-4">
                Log in
              </Button>
              <Button href="/sign-up" variant="primary" className="text-sm px-6 py-2.5">
                Get Started
              </Button>
            </div>
          </Show>
          <Show when="signed-in">
            <div className="hidden md:flex items-center gap-4">
              <Button href="/dashboard" variant="primary" className="text-sm px-6 py-2.5">
                Dashboard
              </Button>
              <UserButton />
            </div>
          </Show>
          
          <button
            className="md:hidden p-2.5 text-[var(--color-foreground)] bg-white/60 backdrop-blur-md rounded-full border border-[var(--color-border)] shadow-sm transition-all focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 pt-16 px-6"
          >
            <a onClick={() => setMobileMenuOpen(false)} href="/#features" className="text-3xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">
              Features
            </a>
            <a onClick={() => setMobileMenuOpen(false)} href="/#how-it-works" className="text-3xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">
              How it Works
            </a>
            <a onClick={() => setMobileMenuOpen(false)} href="/#pricing" className="text-3xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">
              Pricing
            </a>
            
            <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
              <Show when="signed-out">
                <Button onClick={() => setMobileMenuOpen(false)} href="/sign-up" variant="primary" className="w-full py-4 text-lg">
                  Get Started for Free
                </Button>
                <Button onClick={() => setMobileMenuOpen(false)} href="/sign-in" variant="outline" className="w-full py-4 text-lg bg-white/50">
                  Log In
                </Button>
              </Show>
              <Show when="signed-in">
                <Button onClick={() => setMobileMenuOpen(false)} href="/dashboard" variant="primary" className="w-full py-4 text-lg">
                  Go to Dashboard
                </Button>
                <div className="flex justify-center mt-4">
                  <UserButton />
                </div>
              </Show>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}