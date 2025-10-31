"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/constants/products";
import Title from "./Title";
import Link from "next/link";
import CTAButton from "./CTAButton";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hana Mekonnen",
    role: "Marketing Director, Addis Brew Coffee Co.",
    image: "/img/clients/hana-mekonnen.webp",
    message:
      "Working with AppWorks was a game-changer for our brand. Their team reimagined our website and helped us reach new audiences.",
  },
  {
    id: 2,
    name: "Dawit Tesfaye",
    role: "CEO, EthioLogix Solutions",
    image: "/img/clients/dawit-tesfaye.webp",
    message:
      "AppWorks delivered beyond expectations. Their technical expertise and strategic insight helped us scale efficiently.",
  },
  {
    id: 3,
    name: "Selam Abebe",
    role: "Creative Lead, Nile Fashion House",
    image: "/img/clients/selam-abebe.webp",
    message:
      "AppWorks brought our brand to life with stunning visuals and a clean, intuitive app design.",
  },
  {
    id: 4,
    name: "Fikru Alemu",
    role: "Operations Manager, GreenTech Ethiopia",
    image: "/img/clients/fikru-alemu.webp",
    message:
      "AppWorks was there at every step. Their team is responsive, knowledgeable, and invested in our success.",
  },
  {
    id: 5,
    name: "Nathan Haile",
    role: "Founder, Yegna Fitness",
    image: "/img/clients/nathan-haile.webp",
    message:
      "AppWorks built our mobile platform with care and precision. Beautiful, easy to use, and engaging.",
  },
];

const Products = () => {

  // Duplicate products to create seamless loop illusion
  const loopedProducts = [...products, ...products];

  return (
    <section className="mt-40 overflow-hidden">

      <Title
        normalTitle="Products For"
        underlineTitle="Sell"
        subtitle="Everything you need to build and maintain exceptional Printing." />

      {/* Continuous sliding wrapper */}
      <div className="mt-10 w-full overflow-hidden">
        <motion.ul
          className="flex gap-6 w-max"
          animate={{
            x: ["0%", "-50%"], // slide half the width, since we duplicated the list
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // adjust speed (higher = slower)
            ease: "linear",
          }}
        >
          {
            loopedProducts.map((product) => (
              <li key={`${product.id}-${Math.random()}`}
                className="shrink-0 w-80 md:w-120 shadow-xl p-2">
                
                <img src={ product.image.src } alt="" />
                
                <div className="mt-2">
                  <h1 className="text-lg font-semibold">{ product.name }</h1>
                  <p className="text-gray-700">{ product.description }</p>
                </div>
              </li>
            ))
          }
        </motion.ul>
      </div>

      {/* CTA button */}
      <Link href={'/'}>
          <CTAButton cta={ 'Explore All Products' } />
      </Link>
    </section>
  );
}

export default Products;
   

































// import Title from "./Title"

// const Products = () => {
//   return (
//     <section>

//         <Title
//             normalTitle="Products For"
//             underlineTitle="Sell"
//             subtitle="Everything you need to build and maintain exceptional Printing"/>

//         <div>

//         </div>

//         {/* CTA */}
//         <button>
//             Explore All Products
//         </button>
//     </section>
//   )
// }

// export default Products