"use client"
import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Velantrio cut our data validation costs by 55% while improving accuracy. They feel like part of our team.",
    name: "Aarav Mehta",
    role: "Head of Operations, FinPath",
  },
  {
    quote: "Onboarding took less than a week. Their KPO research team consistently delivers analyst-grade output.",
    name: "Sophia Chen",
    role: "VP Strategy, NorthBay Capital",
  },
  {
    quote: "Reliable, secure, and incredibly responsive. Our customer satisfaction scores jumped 18 points.",
    name: "Daniel Okafor",
    role: "COO, Brightcart",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What clients <span className="text-gradient">say</span></>}
        />

        <div className="mt-12 relative min-h-[22rem] sm:min-h-[16rem]">
          {items.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 glass rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <Quote className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
              <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-semibold text-background">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-accent" : "w-2 bg-white/20"
              }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
