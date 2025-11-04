import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import WhyChoose from "@/components/WhyChoose";
import Products from "@/components/Products";
import CallToAction from "@/components/CallToAction";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <OurWork/>
      <WhyChoose/>
      <Products/>
      <CallToAction/>
      {/* <Testimonials/> */}
      <Contact/>
    </>
  );
}
