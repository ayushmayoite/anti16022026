import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "default";
  className?: string;
  style?: React.CSSProperties;
}

export function Container({ 
  children, 
  maxWidth = "default", 
  className, 
  style 
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    default: "max-w-7xl"
  };

  return (
    <div 
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}