"use client";

import React from "react";
import { motion } from "framer-motion";

type Direction = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  direction = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) => {
  const directions = {
    "fade-up": { y: 50, x: 0, opacity: 0 },
    "fade-down": { y: -50, x: 0, opacity: 0 },
    "fade-left": { y: 0, x: 50, opacity: 0 },
    "fade-right": { y: 0, x: -50, opacity: 0 },
    "zoom-in": { scale: 0.8, opacity: 0 },
  };

  const initial = directions[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={{
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth standard ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
