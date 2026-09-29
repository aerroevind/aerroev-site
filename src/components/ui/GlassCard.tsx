"use client";

import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gradient-border" | "subtle";
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default: "glass-panel rounded-2xl",
    "gradient-border": "gradient-border",
    subtle: "glass-panel-subtle rounded-2xl",
  };

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -4,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      className={cn(
        variantStyles[variant],
        "relative overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(0,230,118,0.18)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
