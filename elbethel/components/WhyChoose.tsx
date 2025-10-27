import React from 'react'
import Title from './Title'
import { whyChoose } from '@/constants/whyChoose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhyChoose = () => {
  return (
    <section className='mt-20'>

      <Title
        normalTitle='Why Choose '
        underlineTitle='Elbethel'
        subtitle='Your trusted partner for all printing needs in Addis Ababa' />

        <div className='flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center'>
          {
            whyChoose.map((item, i) => (
              <div key={i} className='mt-10 w-80 md:w-120 px-8 py-4 text-center rounded-xl shadow-lg
              hover:shadow-2xl transition-all duration-300'>
                {/* Icon */}
                <div className='w-20 h-20 md:w-30 md:h-30 rounded-full mb-4
                bg-gradient-to-tl from-white via-amber-300 to-amber-300
                flex items-center justify-center mx-auto'>
                  <FontAwesomeIcon icon={ item.icon }
                  className='text-4xl md:text-5xl lg:text-6xl text-amber-800' />
                </div>

                <h2 className='text-xl md:text-2xl font-semibold'>{ item.title }</h2>
                <p className='mt-2 text-sm text-gray-600'>{ item.description }</p>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default WhyChoose