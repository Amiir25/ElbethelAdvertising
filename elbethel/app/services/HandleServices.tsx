"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceProps {
  title: string,
  description: string,
  images: { image: string }[],
}


const HandleServices: React.FC<ServiceProps> = ({ title, description, images }) => {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = clientWidth * 0.9;
        const newScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
        scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    };

    const updateShadows = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateShadows();
        el.addEventListener("scroll", updateShadows);
        window.addEventListener("resize", updateShadows);
        return () => {
        el.removeEventListener("scroll", updateShadows);
        window.removeEventListener("resize", updateShadows);
        };
    }, []);

    return (
        <section className="relative py-16 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Titles */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{ title }</h1>
        <p className="text-xs md:text-sm text-gray-700 tracking-wider">{ description }</p>

        <div className="relative flex items-center justify-center mt-10">
            {/* Left Scroll Button */}
            {
              showLeft && (
              <button
              onClick={() => scroll("left")}
              className="absolute -left-5 z-20 bg-black/80 text-white rounded-full w-10 h-20
              flex items-center justify-center shadow-lg">
                  <ChevronLeft size={30} />
              </button>
              )
            }

            {/* Left Shadow */}
            <div className={`absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10
            pointer-events-none transition-opacity ${ showLeft ? "opacity-100" : "opacity-0" }`}></div>

            {/* Scrollable Images */}
            <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth px-2">
            {
              images.map((image, i) => (
                  <button key={i}
                  className="shrink-0 border-none rounded-2xl w-[320px] md:w-[480px]  h-[240] md:h-[320px]
                  overflow-hidden transition-transform duration-300 hover:scale-102">
                    <img src={ image.image } alt={`${ title } Image`}
                    className="rounded-2xl object-cover w-full h-full" />
                  </button>
              ))
            }
            </div>

            {/* Right Shadow */}
            <div className={`absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10
            pointer-events-none transition-opacity ${ showRight ? "opacity-100" : "opacity-0" }`}></div>

            {/* Right Scroll Button */}
            {
              showRight && (
              <button
              onClick={() => scroll("right")}
              className="absolute -right-5 z-20 bg-black/80 text-white rounded-full w-10 h-20
              flex items-center justify-center shadow-lg">
                  <ChevronRight size={30} />
              </button>
              )
            }
        </div>
        </section>
    );
}

export default HandleServices;
