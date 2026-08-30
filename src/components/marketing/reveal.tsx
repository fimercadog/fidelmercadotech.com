"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle on-scroll fade-up. Progressive enhancement: server-render and
 * no-JS render the content fully visible. On mount, anything still below
 * the fold is hidden and then revealed (once) as it scrolls in. Content
 * already on screen at load stays put — no flash. Respects
 * prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"visible" | "hidden">("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight - 60;
    if (alreadyVisible) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
        state === "hidden" && "opacity-0 motion-safe:translate-y-6",
        className,
      )}
      style={{ transitionDelay: state === "hidden" ? undefined : `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
