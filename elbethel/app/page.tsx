import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/RecentProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Testimonials2 from "@/components/Testimonials2";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      {/* <Testimonials2/> */}
      {/* <Portfolio/> */}
      <WhyChoose/>
      <Testimonials/>
      <Contact/>
    </>
  )
}
