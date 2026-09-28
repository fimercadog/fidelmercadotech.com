"use client";

import { useEffect, useState, Children, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * On-load staggered entrance for the hero — plays once, above the fold.
 * Mount check prevents SSR hydration mismatch between server-rendered HTML
 * and client Framer Motion animated state.
 */
export function HeroIntro({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex max-w-3xl flex-col items-center gap-6", className)}>
        {items.map((child, i) => (
          <div key={i} className="w-full flex flex-col gap-6">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("flex max-w-3xl flex-col items-center gap-6", className)}
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: { staggerChildren: 0.09, delayChildren: 0.05 },
        },
      }}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          className="w-full flex flex-col gap-6"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
