"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { designTokens } from "@/lib/design-tokens";

interface SectionProps {
  children: React.ReactNode;
  background?: "primary" | "secondary" | "elevated" | "dark";
  paddingY?: number;
  className?: string;
  style?: React.CSSProperties;
  animate?: boolean;
}

export function Section({ 
  children, 
  background = "primary", 
  paddingY = 8, 
  className, 
  style,
  animate = true
}: SectionProps) {
  const backgroundClasses = {
    primary: "bg-white",
    secondary: "bg-neutral-100",
    elevated: "bg-gray-100",
    dark: "bg-neutral-800 text-white"
  };

  const sectionStyle: React.CSSProperties = {
    paddingTop: `${paddingY * 0.25}rem`,
    paddingBottom: `${paddingY * 0.25}rem`,
    transition: designTokens.animation.transitions.all,
    position: "relative",
    ...style
  };

  if (!animate) {
    return (
      <section 
        className={cn(backgroundClasses[background], "relative", className)}
        style={sectionStyle}
      >
        {children}
      </section>
    );
  }

  return (
    <motion.section 
      className={cn(backgroundClasses[background], "relative", className)}
      style={sectionStyle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div 
        className="absolute inset-0 opacity-0 animate-pulse"
        style={{
          background: `linear-gradient(135deg, transparent 0%, ${background === 'secondary' ? 'rgba(249, 250, 251, 0.5)' : 'rgba(255, 255, 255, 0.5)'} 50%, transparent 100%)`,
          animation: "sectionGlow 3s ease-in-out infinite"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}