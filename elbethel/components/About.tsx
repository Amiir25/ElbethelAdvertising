import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <section className='mt-20'>

      <Title 
        normalTitle='Our'
        underlineTitle='Story' />

      <p className='mt-10 text-sm md:text-lg tracking-wide md:w-180 mx-auto text-justify'>
        Elbethel Advertising is a leading advertising and printing company based in Addis Ababa, Ethiopia, specializing in neon lights, light boxes, and custom signage
        solutions that bring brands to life. We also supply a wide range of advertising and printing materials and equipment, including acrylic bending machines, power
        supplies, neon tubes, CNC routers, and laser cutting machines.
        <br /><br />
        With a strong focus on creativity, quality, and innovation, Elbethel helps businesses of all sizes stand out with eye-catching illuminated signs and professional
        printing services. Our mission is to provide reliable products, expert craftsmanship, and modern solutions that empower our clients to showcase their brand in the
        brightest light.
      </p>
    </section>
  )
}

export default About