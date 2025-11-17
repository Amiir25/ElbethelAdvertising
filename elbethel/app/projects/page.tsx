"use client"

import bgProjects from './assets/bg-projects.webp';
import kb from './assets/kb.webp';
import { images } from './assets/assets'
import Title from '@/components/Title'
import { useState } from 'react';
import CallToAction from '@/components/CallToAction';
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Projects | Elbethel Advertising",
  description: "Explore Elbethel Advertising’s portfolio of LED signage, printing, branding, and advertising projects in Addis Ababa, Ethiopia.",
  keywords: [
    "signage portfolio Addis Ababa",
    "printing project examples Ethiopia",
    "branding portfolio Ethiopia",
    "LED signage completed projects",
    "vehicle branding samples Addis Ababa",
    "large format printing portfolio",
    "outdoor advertising examples Ethiopia",
    "interior branding completed work",
    "promotional printing examples",
    "Elbethel Advertising projects"
  ]
}

const page = () => {

    const[page, setPage] = useState(1);
    const IMAGE_PER_PAGE = 20;
    const visibleImages = images.slice(0, IMAGE_PER_PAGE * page);

    const handleMoreImg = () => {
        if (page < 3) setPage(prev => prev + 1);
    }

    return (
        <section className=''>
            {/* Hero */}
            <div
            style={{ backgroundImage: `url(${ bgProjects.src })` }}
            className="w-screen h-screen bg-cover md:bg-contain bg-right bg-no-repeat">
                <div className='w-full h-full px-6 md:px-12 lg:px24 xl:px-32 flex items-center
                bg-linear-to-r from-white via-white/60 md:via-white to-white/30 md:to-transparent'>
                    <div className='w-80 md:w-120 lg:w-180 mt-20 bg-whit'>
                        <h1 className='text-5xl md:text-7xl font-bold'>
                            Showcasing Brilliance in Every Project
                        </h1>
                        <p className='mt-8 text-xl md:text-2xl tracking-wider'>
                            A showcase of our best signage and printing projects — from bold
                            outdoor displays to elegant indoor branding.
                        </p>
                    </div>
                </div>
            </div>

            {/* First image */}
            <div className='mt-20 px-6 md:px-12 lg:px-24 xl:px-32'>
                <img src={ kb.src } alt="" className='rounded' />
                <p className='text-[10px] md:text-xs text-gray-600'>LED light box for KB International Drivers Training Center</p>
            </div>

            {/* Image Gallery */}
            <div className='mt-20 px-6 md:px-12 lg:px-24 xl:px-32'>
                <Title 
                    normalTitle='Explore Our '
                    underlineTitle='Work' />
                
                <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2'>
                    {
                        visibleImages.map((image, i) => (
                            <div key={i} className='max-w-40 md:max-w-60 lg:max-w-80'>
                                <img src={ image.src } alt='Elbethel previous work' loading='lazy'
                                className='w-full h-full object-cover' />
                            </div>
                        ))
                    }
                </div>

                {/* More Images button */}
                {
                    page < 3 &&
                    <button 
                    onClick={ handleMoreImg }
                    className='mt-2 md:mt-8 font-semibold bg-secondary text-white rounded
                    px-2 py-1 mx-auto cursor-pointer'>
                        See More Images
                    </button>
                }
            </div>

            {/* Call to action */}
            <CallToAction/>
        </section>
    )
}

export default page