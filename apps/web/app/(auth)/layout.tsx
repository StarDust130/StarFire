"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Dynamically determine the page type based on the URL
  const isSignUp =
    pathname?.includes("sign-up") ||
    pathname?.includes("signup") ||
    pathname?.includes("register");
  const isLogin = !isSignUp;

  // Dynamically assign the image based on the auth state
  const bgImage = isLogin ? "/img-1.avif" : "/img-2.avif";

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[var(--color-bg)] relative">
      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
        <Image
          src={bgImage}
          alt={`Bhishma abstract background for ${isLogin ? "login" : "signup"}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Left Pane - Auth Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative z-10 w-full">
        {/* Top Header */}
        <div className="absolute top-6 left-6 right-6 sm:top-12 sm:left-12 sm:right-12 flex justify-between items-center z-50">
          <Link
            href="/"
            className="flex items-center gap-2 text-[var(--color-foreground)]/70 hover:text-[var(--color-foreground)] transition-colors font-medium text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back
          </Link>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary-contrast)] font-bold font-[family-name:var(--font-serif)] transition-transform group-hover:scale-105 shadow-sm">
              B
            </div>
            <span className="text-[var(--color-foreground)] font-bold text-lg tracking-tight">
              Bhishma
            </span>
          </Link>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[440px] mt-16 lg:mt-0 flex items-center justify-center backdrop-blur-xl lg:backdrop-blur-none p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[var(--color-bg)]/60 lg:bg-transparent shadow-2xl lg:shadow-none border border-white/10 lg:border-none">
          {children}
        </div>
      </div>

      {/* Right Pane - Visuals */}
      <div className="hidden lg:flex relative flex-col justify-end p-12 lg:p-20 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[var(--color-accent)]/20 blur-[100px] pointer-events-none z-10"></div>

        <Image
          src={bgImage}
          alt={`Bhishma abstract background for ${isLogin ? "login" : "signup"}`}
          fill
          className="object-cover opacity-70"
          priority // Added priority to ensure the background loads immediately without layout shift
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

        <div className="relative z-10 mt-auto">
          <h2 className="text-4xl xl:text-5xl text-white font-[family-name:var(--font-serif)] mb-6 leading-tight">
            {isLogin ? (
              <>
                Welcome back.
                <br />
                Continue the extraordinary.
              </>
            ) : (
              <>
                Outsource the boring.
                <br />
                Focus on the extraordinary.
              </>
            )}
          </h2>
          <p className="text-white/70 text-lg max-w-md font-medium leading-relaxed">
            {isLogin
              ? "Log in to access your automated workflows and pick up exactly where you left off."
              : "Join thousands of modern professionals who let Bhishma handle their automated workflows."}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            {["Autonomous", "Tireless", "Fast"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold border border-white/10 backdrop-blur-md shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
