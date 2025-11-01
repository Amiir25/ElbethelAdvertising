const CallToAction = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 xl:px-32 mt-40">
        <div className="md:h-[70vh] flex flex-col md:flex-row items-center justify-center
        gap-x-40 border border-[#ff4000]/50 rounded p-4 md:px-10 md:py-8
        text-center md:text-left bg-gray-900 text-white">
            
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold w-60 md:w-120">
                Are you ready to shine? Let’s light up your brand.
            </h1>
            
            <a href="tel:+251911107495">
              <button className="mt-8 md:mt-0 bg-[#ff4000] px-4 py-2 md:px-20 md:py-10
              text-white text-xl md:text2xl lg:text-4xl tracking-wide cursor-pointer
              rounded hover:opacity-90 active:opacity-100">
                  Call Now
              </button>
            </a>

        </div>
    </section>
  )
}

export default CallToAction