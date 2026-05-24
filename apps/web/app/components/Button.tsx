"use client";

import React from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

// ✨ Small, reusable Button component
export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "btn";
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "outline"
        ? "btn-outline"
        : "";

  return (
    <button
      {...props}
      className={`${base} ${variantClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

// ✅ Use this for primary CTAs and consistent spacing across pages
