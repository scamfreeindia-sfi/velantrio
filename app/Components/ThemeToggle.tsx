"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored === "dark";
    setDark(isDark);
    apply(isDark);
  }, []);

  const apply = (isDark: boolean) => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.add("dark");
      body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
    }
  };

  const toggle = () => {
    const next = !dark;
    setDark(next);
    apply(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center hover:border-primary/40 transition-colors text-foreground cursor-pointer shadow-xs"
    >
      <Sun className={`h-4 w-4 absolute transition-all duration-200 ${dark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100 text-amber-500"}`} />
      <Moon className={`h-4 w-4 absolute transition-all duration-200 ${dark ? "opacity-100 rotate-0 scale-100 text-primary" : "opacity-0 -rotate-90 scale-50"}`} />
    </button>
  );
}
