import { navLinks } from '@/assets/navLinks';
import logo from '../public/logo.webp';
import Link from 'next/link';
import { socialMedia } from '@/app/contact/assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className='mt-40 bg-linear-to-t from-[#ff4000]/50 via-transparent to-transparent
    pt-8 border-t border-gray-300'>
      
      <div className='flex flex-col md:flex-row gap-14 md:gap-20 md:items-center md:justify-around
      px-6 md:px-12 lg:px-24 xl:px-32'>
        
        {/*  */}
        <img src={ logo.src } alt="Elbethel Logo Image"
        className='max-w-40 md:max-w-80 mx-auto' /> 

        {/*  */}
        <div className='flex flex-col gap-2 text-xl'>
          {
            navLinks.map((link, i) => (
              <Link key={i} href={link.href}
              className='mx-auto hover:underline active:opacity-90'>
                { link.label }
              </Link>
            ))
          }
        </div>

        {/*  */}
        <div className='flex gap-6 text-xl md:text-2xl mx-auto'>
          {
            socialMedia.map((media, i) => (
              <Link key={i} href={ media.link } target='_blank' >
                <FontAwesomeIcon icon={ media.icon } />
              </Link>
            ))
          }
        </div>
      </div>
      
      {/*  */}
      <p className='mt-20 text-center text-xs md:text-sm text-white font-semibold
      p-2 tracking-wider'>
        &copy; 2025 Elbethel Advertising & Printing. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer
