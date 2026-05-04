import { industriesData } from "@/app/data/industries";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData[slug as keyof typeof industriesData];

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link 
            href="/industries" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Industries
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 glass rounded-2xl p-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Industry Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-gradient">{industry.title}</span> Outsourcing
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {industry.fullDescription}
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
                >
                  Discuss Your Needs
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {industry.benefits.map((benefit, i) => (
                <div key={i} className="glass rounded-3xl p-6 flex gap-5 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-24">
            <SectionHeader
              eyebrow="Specialized Services"
              align="left"
              title={<>Core <span className="text-gradient">Capabilities</span></>}
            />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.services.map((service, i) => (
                <div key={i} className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-accent/30 transition-all">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
