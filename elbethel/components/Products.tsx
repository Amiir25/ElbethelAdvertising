"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/assets/products";
import Title from "./Title";
import Link from "next/link";
import CTAButton from "./CTAButton";

const Products = () => {

  // Duplicate products to create seamless loop illusion
  const loopedProducts = [...products, ...products];

  return (
    <section className="px-6 md:px-12 lg:px-24 xl:px-32 mt-40 overflow-hidden">

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