"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, type ReactNode } from "react";

/**
 * On-load staggered entrance for the hero — plays once, above the fold, so
 * there's no visibility-gating concern. Framer Motion drives the cascade.
 *
 * `useReducedMotion()` resolves after mount and can differ from its SSR
 * default, so the DOM shape must stay identical between server and client —
 * reduced motion is applied by zeroing the animation values inside the
 * variants, never by branching to a different element tree (that was
 * causing a hydration mismatch on the hero).
 */
export function HeroIntro({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children);

  return (
    <motion.div
      className="flex max-w-3xl flex-col items-center gap-6"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: reduce ? 0 : 0.05 } } }}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-6"
          variants={{
            hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
            show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
