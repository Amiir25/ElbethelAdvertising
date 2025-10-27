import { services } from '@/constants/services'
import Image from 'next/image'
import React from 'react'
import Title from './Title'

const Services = () => {
  return (
    <section className='mt-20'>
      
      <Title 
        normalTitle='Our'
        underlineTitle='Services'
        subtitle='From custom prints to complete branding solutions, we deliver quality that speaks for your brand.' />

      {/*  */}
      <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-10'>
        {
          services.map((service, i) => (
            <div key={i} className='mt-10 w-80 md:w-120'>
              <div className='w-full h-60'>
                <Image src={service.image} alt={service.title} className='' />
              </div>
              <div className='-mt-20'>
                <h1 className='text-xl font-bold'>{ service.title }</h1>
                <p className='text-sm'>{ service.description }</p>
              </div>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Services