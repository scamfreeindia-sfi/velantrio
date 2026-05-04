import { Header } from "../Components/Header";
import { About as AboutSection } from "../Components/About";
import { Footer } from "../Components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="py-12 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gradient">
              About Velantrio
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              We are a global leader in specialized outsourcing, providing high-accuracy data validation and knowledge process solutions.
            </p>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
