"use client"

import About from '@/components/About';
import Title from '@/components/Title';
import { clients, images, missions } from './assets/assets';
import { motion } from 'framer-motion';
import WhyChoose from '@/components/WhyChoose';
import CallToAction from '@/components/CallToAction';

const AboutPage = () => {

    // Contious slide for clients section
    const loopClients = [...clients, ...clients];

    return (
        <section className="">

            {/* Hero */}
            <div
            style={{ backgroundImage: `url(${ images.bgImage.src })` }}
            className="w-screen h-screen bg-cover md:bg-contain bg-right bg-no-repeat">
                <div className='w-full h-full px-6 md:px-12 lg:px24 xl:px-32 flex items-center
                bg-linear-to-r from-white via-white/60 md:via-white to-white/30 md:to-transparent'>
                    <div className='w-80 md:w-120 lg:w-180 mt-20 bg-whit'>
                        <h1 className='text-5xl md:text-7xl font-bold'>
                            Lighting Up Brands Across Ethiopia
                        </h1>
                        <p className='mt-8 text-xl md:text-2xl tracking-wider'>
                            We blend creativity and technology to deliver eye-catching, premium printing
                            solutions that make brands shine.
                        </p>
                    </div>
                </div>
            </div>

             {/* Image - 1 */}
            <img src={ images.image1.src } alt="Image showing work at Elbethel Advertising"
            className='mt-20 w-80 md:w-[800px] mx-auto' />

            {/* Our Story */}
            <About/>

            {/* Mission, Vision, and Values */}
            <div className='px-6 md:px-12 lg:px-24 xl:px-32 mt-40'>
                <Title 
                    normalTitle='Mission, Vision & '
                    underlineTitle='Values'/>

                <div className='mt-10 w-180 md:w-120 mx-auto text-sm md:text-lg tracking-wide'>
                    {
                        missions.map((mission, i) => (
                            <div key={i} className='my-8'>
                                <h1 className='text-xl font-black mb-2 text-gray-600'>
                                    { mission.title }
                                </h1>
                                <p>{ mission.description }</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Image - 2 */}
            <img src={ images.image2.src } alt="Image showing work at Elbethel Advertising"
            className='mt-20 w-80 md:w-[800px] mx-auto' />

            {/* Clients */}
            <div className='mt-40 overflow-hidden'>
                
                <Title 
                    normalTitle='Our'
                    underlineTitle='Clients'/>
                
                <div className='mt-10 w-full overflow-hidden'>
                    <motion.ul className='flex items-center gap-10 md:gap-20 w-max'
                        animate={{ x: ['0%', '-50%'] }} 
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 40,
                            ease: 'linear',
                        }}>

                        {
                            loopClients.map((client, i) => (
                                <div key={i} className='my-8'>
                                    <div className='w-30'>
                                        <img src={ client.image.src } alt={`${ client.name } Logo Image`}
                                        className='w-full h-full object-cover' />
                                    </div>
                                    {/* <h3>{ client.name }</h3> */}
                                </div>
                            ))
                        }

                    </motion.ul>
                </div>
            </div>

            {/* Why Choose Elbethel */}
            <WhyChoose/>

            {/* Image - 3 */}
            <img src={ images.image3.src } alt="Image showing work at Elbethel Advertising"
            className='mt-20 w-80 md:w-[800px] mx-auto' />

            {/* Call to action */}
            <div className='pb-18'>
                <CallToAction/>
            </div>

        </section>
    )
}

export default AboutPage;