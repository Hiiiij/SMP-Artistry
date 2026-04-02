import Hero from "@/components/Hero";
import Services from "@/components/Services";

import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
