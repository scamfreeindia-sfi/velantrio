"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 gap-2 ${
            scrolled
              ? "shadow-[0_10px_40px_-10px_oklch(0.1_0.05_270_/_0.6)]"
              : ""
          }`}
        >
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-accent via-primary to-deep-blue shadow-[var(--shadow-glow)] flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Velantrio"
                width={32}
                height={32}
                className="rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold tracking-tight text-foreground">
                Velantrio
              </span>
              <span className="text-[10px] text-accent/80 font-semibold uppercase tracking-widest -mt-0.5">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="#contact"
              className="hidden md:inline-flex items-center rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-sm font-medium shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              Get a Quote
            </Link>

            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3 animate-fade-up">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground py-1"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-sm font-medium text-center"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}