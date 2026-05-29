"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showText?: boolean;
  href?: string;
  className?: string;
  size?: number;
  extraText?: string;
};

export default function Logo({
  showText = true,
  href,
  className = "",
  size,
  extraText,
}: LogoProps) {
  const hasCustomSize = size !== undefined;

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      <div
        className={`relative shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          hasCustomSize ? "" : "w-8 h-8 sm:w-10 sm:h-10"
        }`}
        style={
          hasCustomSize
            ? { width: `${size}px`, height: `${size}px` }
            : undefined
        }
      >
        <Image
          src="/icon.png"
          alt="StarFire Logo"
          fill
          sizes={hasCustomSize ? `${size}px` : "(max-width: 640px) 32px, 40px"}
          className="object-contain"
          priority
        />
      </div>

      {showText && (
        <span className="text-white font-bold text-xl sm:text-2xl tracking-tight transition-opacity duration-300 group-hover:opacity-90 flex items-center">
          StarFire
          {extraText && (
            <span className="ml-1.5 font-bold ">
              {extraText}
            </span>
          )}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
      >
        {content}
      </Link>
    );
  }

  return content;
}
