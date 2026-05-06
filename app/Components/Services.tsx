"use client";
import { Phone, Headphones, MessageSquare, Database, BarChart3, Banknote, Sparkles, Code2 } from "lucide-react";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Sparkles,
    title: "Tele Data Validation",
    desc: "Verify, clean, and enrich your customer data with industry-leading accuracy.",
    primary: true,
  },
  { icon: Code2, title: "Web Development", desc: "Modern websites, web apps, and dashboards built with cutting-edge tech." },
  { icon: Phone, title: "Voice Process", desc: "Inbound & outbound call handling, sales support, and customer care." },
  { icon: MessageSquare, title: "Non-Voice Support", desc: "Email, chat, and ticketing services with rapid response times." },
  { icon: Database, title: "Data Entry & Processing", desc: "High-volume, high-accuracy data operations across formats." },
  { icon: BarChart3, title: "KPO Services", desc: "Research, financial analysis, and knowledge-driven business support." },
  { icon: Banknote, title: "Loan Processing", desc: "End-to-end loan documentation, verification, and back office." },
  { icon: Headphones, title: "24/7 Customer Care", desc: "Always-on support that scales with your business needs." },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 section-optimize">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title={<>Best-in-class <span className="text-gradient">software & BPO</span> solutions</>}
          subtitle="Top-rated BPO, KPO, and design services serving Mohali, Chandigarh, and global clients."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  primary,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  primary?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const ticking = useRef(false);

  const onEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const onMove = (e: React.MouseEvent) => {
    if (!ticking.current && rectRef.current) {
      window.requestAnimationFrame(() => {
        const el = ref.current;
        const r = rectRef.current;
        if (!el || !r) return;
        
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  const onLeave = () => {
    rectRef.current = null;
    if (ref.current) {
      ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${delay}ms`, transition: "transform 300ms cubic-bezier(.2,.8,.2,1)" }}
      className={`group relative glass rounded-3xl p-7 animate-fade-up overflow-hidden ${
        primary ? "ring-1 ring-accent/40" : ""
      }`}
    >
      {/* Glow */}
      <div className={`absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity ${primary ? "bg-accent/40" : "bg-primary/40"}`} />

      {primary && (
        <div className="absolute top-5 right-5 text-[10px] uppercase tracking-wider text-accent border border-accent/40 rounded-full px-2 py-0.5">
          Flagship
        </div>
      )}

      <div className={`relative h-14 w-14 rounded-2xl flex items-center justify-center mb-5 ${
        primary
          ? "bg-gradient-to-br from-accent to-primary shadow-[var(--shadow-cyan)]"
          : "bg-gradient-to-br from-primary/30 to-deep-blue/30 border border-white/10"
      }`}>
        <Icon className={`h-6 w-6 ${primary ? "text-background" : "text-accent"}`} />
      </div>

      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>

      <div className="mt-6 flex items-center text-sm text-accent opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
        Learn more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

