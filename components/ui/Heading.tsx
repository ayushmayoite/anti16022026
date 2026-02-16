import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  weight?: "normal" | "medium" | "semibold" | "bold";
}

export function Heading({ level, children, className, style, weight = "normal" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  };

  return (
    <Tag
      className={cn(weightClasses[weight], className)}
      style={style}
    >
      {children}
    </Tag>
  );
}