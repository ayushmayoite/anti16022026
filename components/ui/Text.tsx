import React from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  className?: string;
  style?: React.CSSProperties;
}

export function Text({ children, size = "base", weight = "normal", className, style }: TextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm", 
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  };

  return (
    <p className={cn(sizeClasses[size], weightClasses[weight], "leading-relaxed", className)} style={style}>
      {children}
    </p>
  );
}