"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Show, UserButton } from "@clerk/nextjs";
import Button from "./ui/Button";
import Logo from "./Logo";
import { dark } from "@clerk/ui/themes";

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
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 px-4 sm:px-8"
            : "bg-transparent py-5 px-4 sm:px-8"
        } flex items-center justify-between pointer-events-auto`}
      >
        {/* Logo */}
        <div className="z-50">
          <Logo
            href="/"
            size={32}
            className="group transition-transform group-hover:scale-105"
          />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-white/70">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How it Works
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </nav>

        {/* Desktop Login & Mobile Hamburger */}
        <div className="flex items-center gap-3 z-50">
          <Show when="signed-out">
            <div className="hidden md:flex items-center gap-2">
              <Button
                href="/dashboard"
                variant="primary"
                className="text-sm px-6 py-2.5"
              >
                Get Started
              </Button>
            </div>
          </Show>
          <Show when="signed-in">
            <div className="hidden md:flex items-center gap-4">
              <Button
                href="/dashboard"
                variant="primary"
                className="text-sm px-6 py-2.5"
              >
                Dashboard
              </Button>

              <UserButton
                appearance={{
                  theme: dark,
                }}
              />
            </div>
          </Show>

          <button
            className="md:hidden p-2.5 text-white bg-white/5 backdrop-blur-md rounded-full transition-all focus:outline-none hover:bg-white/10"
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 pt-16 px-6"
          >
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#features"
              className="text-3xl font-bold text-white hover:text-[#f2a60c] transition-colors"
            >
              Features
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#how-it-works"
              className="text-3xl font-bold text-white hover:text-[#f2a60c] transition-colors"
            >
              How it Works
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#pricing"
              className="text-3xl font-bold text-white hover:text-[#f2a60c] transition-colors"
            >
              Pricing
            </a>

            <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
              <Show when="signed-out">
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  href="/sign-up"
                  variant="primary"
                  className="w-full py-4 text-lg"
                >
                  Get Started for Free
                </Button>
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  href="/sign-in"
                  variant="outline"
                  className="w-full py-4 text-lg bg-white/5 text-white border border-white/20 hover:bg-white/10"
                >
                  Log In
                </Button>
              </Show>
              <Show when="signed-in">
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  href="/dashboard"
                  variant="primary"
                  className="w-full py-4 text-lg"
                >
                  Go to Dashboard
                </Button>
              </Show>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
