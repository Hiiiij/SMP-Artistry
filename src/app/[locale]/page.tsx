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
        <div className="px-4 sm:px-12">
          <Services />
          <About />
          <Gallery />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
