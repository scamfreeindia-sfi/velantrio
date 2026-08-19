import React from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-foreground/85 shadow-2xs mb-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.18]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
