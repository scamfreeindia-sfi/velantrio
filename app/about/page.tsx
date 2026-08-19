import { Metadata } from "next";
import { Header } from "../Components/Header";
import { About as AboutSection } from "../Components/About";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: "About Us | Velantrio",
  description: "Learn about Velantrio, founded by Pardeep Singh and led by CEO Ankit Sharma. High-accuracy BPO and KPO solutions.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="py-14 sm:py-18 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              About <span className="text-primary">Velantrio</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              We are an enterprise outsourcing and data operations company based in Mohali & Chandigarh, 
              providing guaranteed-accuracy tele-data validation, voice/non-voice support, and KPO research solutions.
            </p>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
