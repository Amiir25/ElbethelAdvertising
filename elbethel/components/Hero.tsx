import elbethelAdvert from '../public/elbethel-advert.webp';

const Hero = () => {
  return (
    <section style={{ backgroundImage: `url(${ elbethelAdvert.src })` }}
    className='h-screen bg-cover bg-right md:bg-center bg-no-repeat bg-fixed'>
        
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col items-center justify-center text-center
        w-full h-full bg-gray-900/80 text-white'>
          <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold md:mt-10 md:px-10'>
            Build Your Brand With Quality Printing
          </h1>
          
          <p className='mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl px-8 font-light tracking-wide'>
            We design and print everything, fast and affordable.
          </p>
          
          <button className='mt-10 px-10 py-4 text-white text-lg font-semibold bg-primary rounded-xl tracking-wider
          hover:opacity-80 active:opacity-100 cursor-pointer '>
            View Our Services
          </button>
        </div>

    </section>
  )
}

export default Hero