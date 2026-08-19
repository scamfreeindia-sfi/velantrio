import { blogPosts } from "@/app/data/blog";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles | Velantrio Outsourcing",
  description: "Expert advice on BPO, KPO, and data validation from the Velantrio team.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Knowledge Base"
            title={<>Industry <span className="text-primary">Insights & Analysis</span></>}
            subtitle="Explore our latest strategic articles on optimizing back-office operations, QA calibration, and global scale."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 font-medium">
                    <User className="h-3.5 w-3.5 text-primary" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-primary">
                    <span>Read full article</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
