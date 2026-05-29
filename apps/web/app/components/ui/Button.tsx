"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost" | "glass" | "white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "btn group whitespace-nowrap";
  const variantClass = `btn-${variant}`;

  if (href) {
    return (
      <Link href={href} className={`${base} ${variantClass} ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={`${base} ${variantClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
