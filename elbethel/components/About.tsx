"use client"

import { useState } from 'react'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';

const About = () => {
  
  const [expand, setExpand] = useState(false);

  return (
    <section className='px-6 md:px-12 lg:px-24 xl:px-32 mt-20'>

      <Title 
        normalTitle='Our'
        underlineTitle='Story' />

      <div className={` relative overflow-hidden ${ expand ? 'max-h-300' : 'max-h-80' }
      transition-all duration-500 `}>
        <p className='mt-10 text-sm md:text-lg tracking-wide md:w-180 mx-auto text-justify'>
          Elbethel Advertising is a creative advertising and printing company based in Addis Ababa, Ethiopia, specializing in LED signage, light boxes, and high-quality
          digital printing solutions. We help businesses stand out through eye-catching indoor and outdoor advertising materials designed to make every brand shine.
          <br /><br />
          Our core expertise includes LED lighting letters, light boxes, indoor and outdoor signage, wall branding, and large-format digital printing. In addition,
          we produce custom banners, interior signs, vehicle graphics, and personalized promotional items such as T-shirts, pens, medals, and key holders.
          <br /><br />
          Beyond design and production, Elbethel also supplies advertising and printing materials—including acrylic bending machines, power supplies, neon tubes, CNC routers,
          and laser cutting machines—helping other businesses create and maintain their own signage projects.
          <br /><br />
          Driven by creativity, quality, and precision, we’re committed to delivering innovative visual solutions that help brands light up their message and leave
          a lasting impression.
        </p>

        {/* Shadow */}
        {
          !expand &&
          <div className='absolute bottom-0 md:bottom-6 left-0 w-full h-16
          bg-gradient-to-t from-white to-transparent'></div>
        }
      </div>

      {/* Read more button */}
      <button
      onClick={ () => setExpand(!expand) }
      className='w-fit mx-auto mt-4 md:text-lg font-semibold tracking-wide cursor-pointer
      px-2 py-1 rounded flex items-center justify-center gap-2 border border-secondary'>
        { expand ? 'Read Less' : 'Read More' }
        <FontAwesomeIcon icon={ expand ? faArrowUp : faArrowDown } 
        className='transition-all duration-500' />
      </button>
    </section>
  )
}

export default About