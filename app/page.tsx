import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Services } from "./Components/Services";
import { About } from "./Components/About";
import { WhyUs } from "./Components/WhyUs";
import { Process } from "./Components/Process";
import { Industries } from "./Components/Industries";
import { Testimonials } from "./Components/Testimonials";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

