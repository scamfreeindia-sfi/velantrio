import { blogPosts } from "@/app/data/blog";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Insights & Articles",
  description: "Expert advice on BPO, KPO, and data validation from the Velantrio team.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Knowledge Base"
            title={<>Industry <span className="text-gradient">Insights</span></>}
            subtitle="Explore our latest articles on how to optimize your business operations and scale globally."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group glass rounded-3xl overflow-hidden flex flex-col md:flex-row h-full animate-fade-up border-white/5 hover:border-accent/30 transition-all"
              >
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">
                     {post.category}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                    <span className="glass px-2 py-1 rounded-md">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed flex-grow">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
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
