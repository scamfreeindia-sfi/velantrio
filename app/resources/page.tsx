import { Metadata } from "next";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { FileText, BookOpen, Download, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources Hub | Velantrio",
  description: "Industry articles, whitepapers, guides, and company updates to help you navigate the world of outsourcing.",
};

const categories = [
  { name: "All Resources", value: "all" },
  { name: "Whitepapers", value: "whitepapers" },
  { name: "Outsourcing Guides", value: "guides" },
  { name: "Industry Articles", value: "articles" },
  { name: "Compliance Updates", value: "updates" },
];

const resources = [
  {
    type: "Whitepaper",
    category: "whitepapers",
    icon: Download,
    title: "The Future of BPO: AI Integration & Human QA Benchmarks",
    desc: "How dual-layer verification models outperform pure AI or pure manual data operations in enterprise accuracy and cost savings.",
    date: "Aug 12, 2026",
    readTime: "15 min read"
  },
  {
    type: "Guide",
    category: "guides",
    icon: BookOpen,
    title: "Complete Guide to Healthcare & Medical Billing Outsourcing",
    desc: "A comprehensive checklist for healthcare systems looking to eliminate billing backlogs and ensure HIPAA compliance.",
    date: "Jul 28, 2026",
    readTime: "10 min read"
  },
  {
    type: "Article",
    category: "articles",
    icon: FileText,
    title: "5 Hidden Operational Costs of In-House Data Validation",
    desc: "Why scaling internal validation teams incurs high attrition, infrastructure drag, and supervisory overhead.",
    date: "Jul 15, 2026",
    readTime: "6 min read"
  },
  {
    type: "Update",
    category: "updates",
    icon: Bell,
    title: "Velantrio Adopts ISO/IEC 27001 Aligned Security Frameworks",
    desc: "An overview of our updated information security protocols, clean-desk policy, and physical security measures at our Mohali hub.",
    date: "Jun 30, 2026",
    readTime: "3 min read"
  },
  {
    type: "Guide",
    category: "guides",
    icon: BookOpen,
    title: "SLA Structuring: Best Practices for Procurement Teams",
    desc: "How operations and procurement leaders structure vendor SLAs to guarantee measurable accuracy and turnaround.",
    date: "Jun 14, 2026",
    readTime: "8 min read"
  },
  {
    type: "Article",
    category: "articles",
    icon: FileText,
    title: "Navigating GDPR Compliance with Offshore Delivery Hubs",
    desc: "A strategic overview of maintaining rigorous data sovereignty, encryption standards, and auditor access.",
    date: "May 22, 2026",
    readTime: "5 min read"
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Resources & Guides"
            title={<>Operational Knowledge & <span className="text-primary">Executive Guides</span></>}
            subtitle="Explore our library of whitepapers, SLA blueprints, and case analysis designed for operations directors and COOs."
          />

          {/* Category Filter */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c, i) => (
              <span
                key={c.value}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  i === 0 
                    ? "bg-primary text-primary-foreground border-primary shadow-xs" 
                    : "bg-card text-foreground/80 border-border hover:bg-muted"
                }`}
              >
                {c.name}
              </span>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res) => {
              const Icon = res.icon;
              return (
                <div
                  key={res.title}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                        <Icon className="h-3 w-3" />
                        {res.type}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-mono">{res.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold tracking-tight text-foreground mb-2 leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-border flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{res.date}</span>
                    <Link href="/contact" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                      <span>Access report</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
