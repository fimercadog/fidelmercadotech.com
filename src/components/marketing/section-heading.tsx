import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: 1 | 2;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  level = 2,
  className,
  dark = false,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">{eyebrow}</span>
      )}
      <Heading
        className={cn(
          level === 1 ? "text-4xl sm:text-5xl lg:text-6xl font-black" : "text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold",
          "leading-[1.08] tracking-tight",
        )}
        style={{ color: dark ? "#ffffff" : "#1a1a1a" }}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn(
          "max-w-2xl text-[15px] leading-7",
          align === "center" && "mx-auto",
          dark ? "text-white/65" : "text-[#666]",
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
