"use client";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./Services";

const stats = [
  { value: 99.5, suffix: "%", label: "Data Accuracy" },
  { value: 120, suffix: "+", label: "Global Clients" },
  { value: 850, suffix: "+", label: "Projects Delivered" },
  { value: 24, suffix: "/7", label: "Operations" },
];

function useCounter(target: number, active: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1600;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return v;
}

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const v = useCounter(value, active);
  const display = value % 1 === 0 ? Math.round(v).toString() : v.toFixed(1);
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <div className="text-4xl sm:text-5xl font-bold text-gradient">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden section-optimize">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="About Velantrio"
            align="left"
            title={<>Built for <span className="text-gradient">scale</span>, designed for trust.</>}
          />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Velantrio Group is a modern outsourcing partner combining BPO and KPO
            expertise with technology-driven workflows. We help fast-growing
            businesses and global enterprises offload critical operations
            without compromising quality, security, or speed.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From tele-data validation to advanced research, our trained teams
            integrate seamlessly with your stack, becoming an extension of your
            in-house operation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["ISO 27001", "GDPR Ready", "SOC 2", "PCI Aware"].map((b) => (
              <span key={b} className="glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
