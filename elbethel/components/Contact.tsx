import React from 'react'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { contacts } from '@/constants/contact'

const Contact = () => {
  return (
    <section className='mt-40'>

      <Title
        normalTitle='Get In '
        underlineTitle='Touch'
        subtitle='Ready to bring your printing project to life? Contact us today for a quote' />

      <div className='mt-20 flex flex-col-reverse md:flex-row gap-x-20 gap-y-10'>
        {/* Contacts */}
        <div className='flex-1'>
          <h1 className='mb-6 text-lg md:text-xl font-semibold'>Contact Information</h1>
          {
            contacts.map((contact, i) => (
              <div key={i} className='flex items-center gap-2'>
                <FontAwesomeIcon icon={ contact.icon }
                className='text-2xl md:text-3xl text-white bg-primary px-2 py-4 rounded-xl my-2' />
                <div>
                  <h2 className='md:text-xl font-bold'>{ contact.title }</h2>
                  <p className='md:text-lg text-gray-600'>{ contact.description }</p>
                </div>
              </div>
            ))
          }
        </div>

        {/* Map */}
        <div className='flex-1'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6425717111774!2d38.78560547375236!3d9.004998389366797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85669aa1ef4d%3A0xa621df5b16dbdaaf!2sElbethel%20Advertising%20And%20Printing!5e0!3m2!1sen!2set!4v1761560675138!5m2!1sen!2set"
            width="600"
            height="450"
            style={{ border:0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='h-80 md:h-full rounded-2xl w-full'>
          </iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact