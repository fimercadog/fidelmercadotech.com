"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, type ReactNode } from "react";

/**
 * On-load staggered entrance for the hero — plays once, above the fold, so
 * there's no visibility-gating concern. Framer Motion drives the cascade.
 */
export function HeroIntro({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children);

  if (reduce) {
    return <div className="flex max-w-3xl flex-col items-center gap-6">{items}</div>;
  }

  return (
    <motion.div
      className="flex max-w-3xl flex-col items-center gap-6"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-6"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
