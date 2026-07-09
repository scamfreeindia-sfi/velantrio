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
  { name: "All", value: "all" },
  { name: "Industry Articles", value: "articles" },
  { name: "Whitepapers", value: "whitepapers" },
  { name: "Outsourcing Guides", value: "guides" },
  { name: "Company Updates", value: "updates" },
];

const resources = [
  {
    type: "Whitepaper",
    category: "whitepapers",
    icon: Download,
    title: "The Future of BPO: AI Integration & Automation",
    desc: "Discover how artificial intelligence is transforming traditional BPO operations and what it means for your business.",
    date: "Aug 12, 2026",
    readTime: "15 min read"
  },
  {
    type: "Guide",
    category: "guides",
    icon: BookOpen,
    title: "Complete Guide to Medical Billing Outsourcing",
    desc: "A comprehensive checklist and guide for healthcare providers looking to partner with a billing BPO.",
    date: "Jul 28, 2026",
    readTime: "10 min read"
  },
  {
    type: "Article",
    category: "articles",
    icon: FileText,
    title: "5 Hidden Costs of In-House Data Entry Teams",
    desc: "Why scaling an internal data entry team might be costing you more than you realize, and how to optimize.",
    date: "Jul 15, 2026",
    readTime: "6 min read"
  },
  {
    type: "Update",
    category: "updates",
    icon: Bell,
    title: "Velantrio Adopts ISO/IEC 27001 Aligned Processes",
    desc: "We are proud to announce our latest milestone in adopting information security best practices and aligning our operations.",
    date: "Jun 30, 2026",
    readTime: "3 min read"
  },
  {
    type: "Guide",
    category: "guides",
    icon: BookOpen,
    title: "SLA Optimization: Best Practices for Procurement",
    desc: "How procurement teams can structure SLAs with outsourcing vendors to guarantee performance and compliance.",
    date: "Jun 14, 2026",
    readTime: "8 min read"
  },
  {
    type: "Article",
    category: "articles",
    icon: FileText,
    title: "Navigating GDPR Compliance with Remote Teams",
    desc: "A strategic overview of maintaining data privacy when working with global distributed teams.",
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
            eyebrow="Resources Hub"
            title={<>Insights & <span className="text-gradient">Knowledge</span></>}
            subtitle="Explore our library of articles, whitepapers, and guides designed to help you optimize your outsourcing strategy."
          />

          {/* Category Filter (Visual only for mockup) */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((c, i) => (
              <button
                key={c.value}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0 
                    ? "bg-accent text-white shadow-[0_0_20px_rgba(var(--accent),0.3)]" 
                    : "glass text-muted-foreground hover:text-foreground hover:border-white/20"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <Link
                  href="#"
                  key={res.title}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="group glass rounded-3xl p-6 sm:p-8 animate-fade-up hover:border-accent/40 transition-all flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-foreground">
                      <Icon className="h-3 w-3" />
                      {res.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{res.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {res.desc}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{res.date}</span>
                    <span className="text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
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
