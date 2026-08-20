import { Landmark, ShieldCheck, Home, HeartPulse, Phone, ShoppingBag, Cloud, Scale, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";

const items = [
  { icon: Landmark, name: "Banking & Financial Services", desc: "KYC validation, loan document processing & compliance checks", slug: "banking" },
  { icon: ShieldCheck, name: "Insurance & Underwriting", desc: "Claims intake, policy data scrubbing & fraud mitigation", slug: "insurance" },
  { icon: Home, name: "Mortgage & Real Estate", desc: "Title review, escrow coordination & income verification", slug: "mortgage" },
  { icon: HeartPulse, name: "Healthcare Operations", desc: "HIPAA-compliant billing, medical claims & patient intake", slug: "healthcare" },
  { icon: Phone, name: "Telecom & Utilities", desc: "Customer acquisition, dispute resolution & plan upgrades", slug: "telecom" },
  { icon: ShoppingBag, name: "E-Commerce & Retail", desc: "24/7 omnichannel care, return management & order support", slug: "ecommerce" },
  { icon: Cloud, name: "B2B SaaS & Tech", desc: "Lead enrichment, data cleaning & tier-1 technical support", slug: "saas" },
  { icon: Scale, name: "Legal & Professional Services", desc: "Contract transcription, research summaries & records management", slug: "legal-services" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-12 sm:py-16 lg:py-20 border-b border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Sector Specializations"
          title={<>Tailored Operations Across <span className="text-primary">Key Sectors</span></>}
          subtitle="Specialized domain knowledge and stringent compliance frameworks customized for each industry."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <Link
              key={it.name}
              href={`/industries/${it.slug}`}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {it.name}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1 text-xs font-semibold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                <span>View sector blueprint</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
