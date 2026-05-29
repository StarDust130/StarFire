"use client";

import { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
};

export function Tooltip({
  children,
  content,
  position = "top",
  className = "",
}: TooltipProps) {
  // Map absolute positioning for the main bubble
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  // Map absolute positioning and border geometry for the arrow
  const pointerPositions = {
    top: "-bottom-1.5 left-1/2 -translate-x-1/2 border-b border-r",
    bottom: "-top-1.5 left-1/2 -translate-x-1/2 border-t border-l",
    left: "-right-1.5 top-1/2 -translate-y-1/2 border-t border-r",
    right: "-left-1.5 top-1/2 -translate-y-1/2 border-b border-l",
  };

  // Map transform origins for smooth spring-like scaling
  const animationOrigins = {
    top: "origin-bottom translate-y-1",
    bottom: "origin-top -translate-y-1",
    left: "origin-right translate-x-1",
    right: "origin-left -translate-x-1",
  };

  return (
    <div className="group relative flex items-center justify-center">
      {/* The Trigger Element */}
      {children}

      {/* The Tooltip Bubble */}
      <div
        className={`absolute z-[100] whitespace-nowrap rounded-xl border border-white/10 bg-[#0B0B0B] px-3.5 py-2 text-sm font-medium text-zinc-200 shadow-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 pointer-events-none scale-95 md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:translate-x-0 md:group-hover:translate-y-0 ${positions[position]} ${animationOrigins[position]} ${className}`}
      >
        {content}

        {/* The Directional Arrow */}
        <div
          className={`absolute h-3 w-3 -z-10 bg-[#0B0B0B] border-white/10 rotate-45 rounded-[2px] ${pointerPositions[position]}`}
        />
      </div>
    </div>
  );
}
