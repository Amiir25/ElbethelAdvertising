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
            x: ["0%", "-20%"], // slide half the width, since we duplicated the list
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // adjust speed (higher = slower)
            ease: "linear",
          }}
        >
          {
            loopedProducts.map((product, i) => (
              <li key={i}
                className="shrink-0 mx-8 h-full
                flex flex-col items-center justify-center">
                
                <img src={ product.image.src } alt={`${ product.name } product image`}
                className="w-60 md:w-80" />
                
                <div className="mt-2 w-full">
                  <h1 className="text-xl md:text-2xl font-semibold">{ product.name }</h1>
                  {/* <p className="text-gray-700">{ product.description }</p> */}
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