import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined";
  padding?: number;
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ 
  children, 
  variant = "default", 
  padding = 6, 
  interactive = false,
  className, 
  style 
}: CardProps) {
  const variantClasses = {
    default: "bg-card border border-border shadow-sm",
    elevated: "bg-card shadow-md border border-border/50 hover:shadow-lg",
    outlined: "bg-transparent border-2 border-border hover:border-primary/50"
  };

  return (
    <div 
      className={cn(
        "rounded-lg transition-all duration-250 ease-out",
        variantClasses[variant],
        interactive && "hover:shadow-lg hover:-translate-y-1 cursor-pointer active:scale-[0.98]",
        className
      )}
      style={{
        padding: padding > 0 ? `${padding * 0.25}rem` : undefined,
        ...style
      }}
    >
      {children}
    </div>
  );
}