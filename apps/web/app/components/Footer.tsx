"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="relative mt-20">
      {/* Bottom CTA Pre-footer */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 relative z-20 -mb-24">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-[2rem] p-8 sm:p-12 md:p-16 flex flex-col items-center text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#f2a60c]/20 blur-[80px]"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-serif)] text-white mb-6 relative z-10 text-balance">
            Ready to reclaim your time?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-sm sm:text-base relative z-10 text-balance">
            Join thousands of professionals who have already outsourced their
            boring workflows to StartFire. Get started today in under 2 minutes.
          </p>
          <Button
            href="/dashboard"
            variant="white"
            className="relative z-10 group px-8 py-4 text-black font-semibold rounded-full flex items-center hover:bg-white/90 transition-colors"
          >
            Start automating now
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="w-full bg-[#0a0a09] pt-40 pb-12 px-4 sm:px-8 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-8 mb-16">
            <div className="md:col-span-4 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-6">
                <Logo size={40} href="/" className="!gap-3" />
              </div>
              <p className="text-white/50 text-sm max-w-sm mb-8 leading-relaxed">
                The AI agent designed to automate the boring parts of your life,
                so you can focus on building the extraordinary.
              </p>
              <div className="flex gap-4">
                {/* X (Twitter) Icon */}
                <a
                  href="https://x.com/the_csyadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* GitHub Icon */}
                <a
                  href="https://github.com/StarDust130/StarFire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/* Email / Hire Me Icon */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="csyadav0513@email.com?subject=Saw%20your%20StarFire%20project🌟&body=Hello%20Chandrashekhar.%20Saw%20your%20StarFire%20project,%20love%20it,%20let's%20talk."
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 gap-8 text-center sm:text-left">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-white/90 mb-2">Product</h4>
                <a
                  href="/features"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Features
                </a>
                <a
                  href="/how-it-works"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  How it works
                </a>
                <a
                  href="/pricing"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="/docs"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Documentation
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-white/90 mb-2">Legal</h4>
                <a
                  href="/privacy"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              © {new Date().getFullYear()} Startfire AI Inc. All rights
              reserved.
            </p>
            <p>
              Created by{" "}
              <a
                href="http://chandrashekhar.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-300 hover:to-yellow-100 transition-all duration-300 group hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
              >
                ChandraShekhar{""} 🌟
                {/* Expanding yellow underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-yellow-400 to-yellow-200 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </p>
          </div>
        </div>

        {/* Animated Bottom Color Stripes */}
        {/* Animated Bottom Color Stripes - Sharp Block Marquee */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 sm:h-2 overflow-hidden">
          <motion.div
            className="flex w-[200%] h-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {/* Set 1 */}
            <div className="w-1/4 bg-[#c24d35]" />
            <div className="w-1/4 bg-[#f2a60c]" />
            <div className="w-1/4 bg-[#3e6d4c]" />
            <div className="w-1/4 bg-[#3d6091]" />

            {/* Set 2 (Duplicates for seamless loop) */}
            <div className="w-1/4 bg-[#c24d35]" />
            <div className="w-1/4 bg-[#f2a60c]" />
            <div className="w-1/4 bg-[#3e6d4c]" />
            <div className="w-1/4 bg-[#3d6091]" />
          </motion.div>
        </div>
      </footer>
    </div>
  );
}