type title = {
    normalTitle: string;
    underlineTitle: string;
    subtitle?: string
}

const Title = ({ normalTitle, underlineTitle, subtitle }: title) => {
  return (
    <section>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center'>
          { normalTitle } <span className='underline underline-offset-6 decoration-5 decoration-orange-700'>{ underlineTitle }</span>
        </h1>
        <p className='text-center text-sm md:text-base font-light mt-4'>
          { subtitle }
        </p>

    </section>
  )
}

export default Title