import Title from '@/components/Title'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contacts, socialMedia } from './assets/assets'

const Contact = () => {
  return (
    <section className='px-6 md:px-12 lg:px-24 xl:px-32 pt-40 
    bg-linear-to-b from-gray-300 to-transparent'>
        <Title 
            normalTitle='Get In '
            underlineTitle='Touch'/>

        <div className='mt-20'>
            {/* Location */}
            <div className='flex items-center justify-center gap-4 md:gap-10'>
                
                <div className='p-2 md:p-4 bg-[#ff4000]/60 rounded text-center'>
                    <h1 className='font-bold mb-2'>Addis Ababa</h1>
                    <FontAwesomeIcon icon={ faLocationDot }
                    className='text-2xl md:text-4xl p-2 text-white animate-bounce' />
                </div>
                
                <p className='text-sm md:text-xl leading-4 md:leading-6'>
                    <span className='font-extrabold'>1.</span> Bole medhanialem, around Adey Ababa International Stadium
                    <br /><br />
                    <span className='font-extrabold'>2.</span> Summit, Figa mebrat
                </p>

            </div>

            {/* Phone & Email */}
            <div className='flex items-center justify-center gap-8 md:gap-12 mt-10'>
                {/*  */}
                {
                    contacts.map(contact => (
                        <div 
                        key={contact.id}
                        className='flex flex-col items-center justify-center'>
                            <FontAwesomeIcon icon={ contact.icon }
                            className='md:text-xl' />
                            <div>
                                <h2 className='text-center'>{ contact.name }</h2>
                                <p className='text-xs md:text-sm text-gray-700 tracking-wide'>{ contact.contactInfo }</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Social Media */}
            <div className='mt-20'>
                <Title 
                    normalTitle='Follow'
                    underlineTitle='Us'/>
                
                <div className='mt-10 flex items-center justify-center gap-6 md:gap-10'>
                    {
                        socialMedia.map(media => (
                            <a
                            href={ media.link } target='_blank'
                            key={media.id}
                            className='text-center cursor-pointer'>
                                <FontAwesomeIcon icon={ media.icon }
                                className='text-xl md:text-2xl lg:text-3xl' />
                                <p className='text-xs md:text-sm text-gray-700'>
                                    { media.name }
                                </p>
                            </a>
                        ))
                    }
                </div>
            </div>

            {/* Map */}
            <div className=''>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6425717111774!2d38.78560547375236!3d9.004998389366797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85669aa1ef4d%3A0xa621df5b16dbdaaf!2sElbethel%20Advertising%20And%20Printing!5e0!3m2!1sen!2set!4v1761560675138!5m2!1sen!2set"
                width="600"
                height="450"
                style={{ border:0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='mt-20 h-80 rounded-2xl w-full'>
            </iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact