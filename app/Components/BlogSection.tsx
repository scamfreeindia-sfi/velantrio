import { blogPosts } from "@/app/data/blog";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 lg:py-32 border-b border-border bg-muted/20" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Industry Analysis & Strategy"
          title={<>Operational <span className="text-primary">Insights & Best Practices</span></>}
          subtitle="Expert perspectives on BPO governance, data validation protocols, and global outsourcing scale."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <span>Read analysis</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors shadow-2xs"
          >
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            <span>Browse all articles and case studies</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
