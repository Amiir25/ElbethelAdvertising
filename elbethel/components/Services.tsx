import { services } from '@/assets/services'
import Title from './Title'
import Link from 'next/link'
import CTAButton from './CTAButton'


const Services = () => {

  return (
    <section className='px-6 md:px-12 lg:px-24 xl:px-32 mt-40'>
      
      <Title 
        normalTitle='Our'
        underlineTitle='Services'
        subtitle='From custom prints to complete branding solutions, we deliver quality that speaks for your brand.' />

      {/*  */}
      <div className='flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-10'>
        {
          services.map((service, i) => (
            <div key={i} className='relative mt-10 flex flex-col items-center
            h-50 md:h-60 overflow-hidden group'>
              
              <div className='w-80 md:w-120 h-30 md:h-40 group-hover:h-60 transition-all duration-300'>
                <img src={ service.image.src } alt={service.title } className='rounded-xl w-full h-full object-cover' />
              </div>
              
              <div className='absolute bottom-0 w-80 md:w-120 transition-all duration-300
              group-hover:text-[#ff4000] group-hover:p-4 z-10'>
                <h1 className='text-xl font-bold'>{ service.title }</h1>
                <p className='text-sm'>{ service.description }</p>
              </div>
              
              {/* Bg color */}
              <div className='absolute -bottom-full w-full h-full bg-gradient-to-t from-white to-transparent
              group-hover:bottom-0 transition-all duration-300 ' />
            </div>
          ))
        }
      </div>

      {/* CTA */}
      <Link href={'/services'} >
        <CTAButton cta='View Details' />
      </Link>

    </section>
  )
}

export default Services