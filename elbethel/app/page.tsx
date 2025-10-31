import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <WhyChoose/>
      <Products/>
      <Testimonials/>
      <Contact/>
    </>
  );
}
