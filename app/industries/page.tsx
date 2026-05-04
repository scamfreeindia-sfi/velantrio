import { industriesData } from "@/app/data/industries";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  const industries = Object.values(industriesData);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Our Expertise"
            title={<>Tailored Solutions for <span className="text-gradient">Every Industry</span></>}
            subtitle="Explore how Velantrio's specialized outsourcing services empower businesses across diverse sectors."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="group glass rounded-3xl p-8 animate-fade-up hover:border-accent/40 transition-all flex flex-col h-full"
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{industry.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed flex-grow">
                    {industry.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Explore Solutions
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
