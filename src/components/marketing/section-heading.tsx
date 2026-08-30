import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: 1 | 2;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  level = 2,
  className,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow ? <span className="fmt-eyebrow">{eyebrow}</span> : null}
      <Heading
        className={cn(
          level === 1 ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
          "leading-[1.1]",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className={cn("max-w-2xl text-base leading-7 text-muted-foreground", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
