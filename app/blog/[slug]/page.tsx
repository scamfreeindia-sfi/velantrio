import { Metadata } from "next";
import { blogPosts } from "@/app/data/blog";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Velantrio Insights`,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              {post.category}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground border-y border-border py-4 mt-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>By {post.author}</span>
              </div>
            </div>
          </div>

          <div 
            className="mt-10 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 p-8 rounded-2xl border border-border bg-card shadow-xs">
            <h3 className="text-xl font-bold text-foreground mb-2">Discuss Your Operational Roadmap</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Explore how Velantrio can help your team optimize back-office workflows, reduce SLA latency, and guarantee 99.8%+ accuracy.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              <span>Speak with an Operations Specialist</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
