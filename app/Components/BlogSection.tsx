import { blogPosts } from "@/app/data/blog";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Latest News"
          title={<>Industry <span className="text-gradient">Insights</span></>}
          subtitle="Stay updated with the latest trends in outsourcing and technology."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-3xl p-6 flex flex-col h-full animate-fade-up hover:border-accent/30 transition-all"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 flex items-center justify-center text-accent/20 font-bold text-2xl mb-6 overflow-hidden">
                <div className="group-hover:scale-110 transition-transform duration-500">{post.category}</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {post.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                Read More
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            View all insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
