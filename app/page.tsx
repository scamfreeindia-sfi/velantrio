import dynamic from "next/dynamic";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";

// Dynamic imports for below-the-fold components
const Services = dynamic(() => import("./Components/Services").then(mod => mod.Services));
const WhyUs = dynamic(() => import("./Components/WhyUs").then(mod => mod.WhyUs));
const Process = dynamic(() => import("./Components/Process").then(mod => mod.Process));
const About = dynamic(() => import("./Components/About").then(mod => mod.About));
const Industries = dynamic(() => import("./Components/Industries").then(mod => mod.Industries));
const Testimonials = dynamic(() => import("./Components/Testimonials").then(mod => mod.Testimonials));
const BlogSection = dynamic(() => import("./Components/BlogSection").then(mod => mod.BlogSection));
const Contact = dynamic(() => import("./Components/Contact").then(mod => mod.Contact));
const Footer = dynamic(() => import("./Components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <About />
        <Industries />
        <Testimonials />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
