import React from "react";
import { cn } from "../../lib/utils";

type InteractiveHoverButtonModernProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: React.ReactNode;
    hoverColor?: string;
    darkHoverColor?: string;
  };

export function InteractiveHoverButtonModern({
  href,
  children,
  className,
  onClick,
  hoverColor = "bg-neutral-950",
  darkHoverColor = "dark:bg-[var(--neon-2)]",
  ...props
}: InteractiveHoverButtonModernProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        `
        group relative inline-flex cursor-pointer
        overflow-hidden rounded-none
        border bg-surface/40
        px-4 py-2
        font-mono
        transition-all duration-300
        `,
        className
      )}
      {...props}
    >
      {/* Animated hover bubble */}
      <span
        className={cn(
          `
          absolute left-0 top-1/2
          h-2 w-2
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          transition-all duration-500 ease-out

          group-hover:left-1/2
          group-hover:h-[320%]
          group-hover:w-[320%]
          group-hover:-translate-x-1/2
          `,
          hoverColor,
          darkHoverColor
        )}
      />

      <span
        className="
            relative z-10
            flex flex-col
            items-start
            gap-1
            transition-colors duration-300
            group-hover:text-white
            w-full
        "
        >
        {children}
      </span>
    </a>
  );
}