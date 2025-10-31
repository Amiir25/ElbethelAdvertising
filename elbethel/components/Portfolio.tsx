"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ourPortfolio } from "@/constants/ourPortfolio";
import Title from "./Title";
import Link from "next/link";
import CTAButton from "./CTAButton";


const Portfolio = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ourPortfolio.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const portfolio = ourPortfolio[index];

  return (
    <section className="mt-40 overflow-hidden">

      <Title 
        normalTitle="Our"
        underlineTitle="Portfolio"
        subtitle="See how we help brands light up their identity" />

      <div className="relative w-full h-[60vh] md:h-[70vh] mt-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={portfolio.id}
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full">
            
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img src={ portfolio.image.src } alt=""
              className="w-full h-full object-cover" />
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation indicator */}
      <div className="flex items-center justify-center space-x-2 mt-6">
        {
          ourPortfolio.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all
                ${ i === index ? "bg-primary " : "bg-[#ff4000]/30" }`} />
          ))
        }
      </div>

      {/* CTA */}
      <Link href={'/'} >
        <CTAButton cta='More Projects' />
      </Link>
    </section>
  );
}

export default Portfolio;