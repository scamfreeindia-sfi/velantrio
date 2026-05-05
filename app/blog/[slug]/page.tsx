import { blogPosts } from "@/app/data/blog";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
              {post.category}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-y border-white/5 py-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-accent" />
                <span>By {post.author}</span>
              </div>
              <button className="ml-auto inline-flex items-center gap-2 hover:text-accent transition-colors">
                <Share2 className="h-5 w-5" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="mt-12 aspect-[21/9] rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-deep-blue/20 border border-white/10 flex items-center justify-center text-accent/30 font-bold text-3xl">
            {post.title}
          </div>

          <div 
            className="mt-12 prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 p-8 glass rounded-3xl border-accent/20">
             <h3 className="text-2xl font-bold mb-4">Want more insights?</h3>
             <p className="text-muted-foreground mb-6">Join our newsletter to receive the latest updates on BPO, KPO, and software solutions directly in your inbox.</p>
             <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform">
               Discuss Your Growth
             </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
