import { Landmark, ShoppingBag, Phone, HeartPulse, Rocket, Truck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";

const items = [
  { icon: Landmark, name: "Banking & Finance", slug: "banking-finance" },
  { icon: ShoppingBag, name: "E-commerce", slug: "e-commerce" },
  { icon: Phone, name: "Telecom", slug: "telecom" },
  { icon: HeartPulse, name: "Healthcare", slug: "healthcare" },
  { icon: Rocket, name: "Startups", slug: "startups" },
  { icon: Truck, name: "Logistics", slug: "logistics" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Industries"
          title={<>Trusted across <span className="text-gradient">industries</span></>}
          subtitle="Global domain expertise with a strong local presence in Mohali and Chandigarh."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it, i) => (
            <Link
              key={it.name}
              href={`/industries/${it.slug}`}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group glass rounded-2xl p-6 text-center animate-fade-up hover:-translate-y-1 hover:border-accent/40 transition-all block"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <it.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="mt-4 text-sm font-medium">{it.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
