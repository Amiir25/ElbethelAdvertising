import React from 'react'
import Title from './Title'
import { whyChoose } from '@/assets/whyChoose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhyChoose = () => {
  return (
    <section className='px-6 md:px-12 lg:px-24 xl:px-32 mt-40'>

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
                <div className='w-10 h-10 md:w-20 md:h-20 rounded-full mb-4
                bg-linear-to-tl from-white via-[#ff4000] to-[#ff4000]
                flex items-center justify-center mx-auto'>
                  <FontAwesomeIcon icon={ item.icon }
                  className='text-2xl md:text-3xl lg:text-4xl text-white' />
                </div>

                <h2 className='text-lg md:text-2xl font-semibold'>{ item.title }</h2>
                <p className='mt-2 text-xs md:text-sm text-gray-600 tracking-wider'>{ item.description }</p>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default WhyChoose