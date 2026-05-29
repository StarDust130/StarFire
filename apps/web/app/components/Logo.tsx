"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showText?: boolean;
  href?: string;
  className?: string;
  size?: number;
  ExtraText?: string;
};

export default function Logo({
  showText = true,
  href,
  className = "",
  size,
  ExtraText,
}: LogoProps) {
  const iconStyle = size ? { width: size, height: size } : undefined;
  const iconSizes = size ? `${size}px` : "(max-width: 640px) 32px, 40px";

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Responsive container: 32px on mobile, 40px on sm+ screens */}
      <div
        className="relative shrink-0 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105"
        style={iconStyle}
      >
        <Image
          src="/icon.png"
          alt="StarFire Logo"
          fill
          sizes={iconSizes}
          className="object-contain"
          priority
        />
      </div>
      {/* Responsive text: 20px on mobile, 24px on sm+ screens */}
      {showText && (
        <span className="text-white font-bold text-xl sm:text-2xl tracking-tight transition-opacity duration-300 group-hover:opacity-90">
          StarFire
          {ExtraText && (
            <span className=""> {ExtraText}</span>
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
