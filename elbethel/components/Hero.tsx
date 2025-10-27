const Hero = () => {
  return (
    <section className='md:h-screen py-20 md:py-0 md:flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>
          Build Your Brand With Quality Printing
        </h1>
        <p className='mt-4 md:mt-8 text-lg md:text-2xl lg:text-4xl px-8 font-light'>We design and print everything, fast and affordable.</p>
        <button className='mt-10 px-10 py-4 text-amber-900 text-lg font-semibold bg-amber-300 rounded-xl tracking-wider
        hover:opacity-80 active:opacity-100 cursor-pointer '>
          View Our Services
        </button>
    </section>
  )
}

export default Hero