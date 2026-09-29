"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      disabled,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-full overflow-hidden";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#00E676] via-[#10ec87] to-[#22D3EE] text-[#050816] font-bold shadow-[0_0_25px_rgba(0,230,118,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] active:scale-[0.98]",
      secondary:
        "bg-gradient-to-b from-[#0F172A] to-[#050816] border border-white/15 text-foreground hover:border-[#00E676]/60 hover:shadow-[0_0_20px_rgba(0,230,118,0.25)] active:scale-[0.98]",
      accent:
        "bg-gradient-to-r from-[#22D3EE] to-[#00E676] text-[#050816] font-bold hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] active:scale-[0.98]",
      ghost:
        "text-muted hover:text-foreground hover:bg-white/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-3.5 gap-2.5 font-semibold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...(props as HTMLMotionProps<"button">)}
      >
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
