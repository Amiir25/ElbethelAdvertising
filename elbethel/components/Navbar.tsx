"use client";

import { navLinks } from "@/assets/navLinks"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add style on page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 px-6 md:x-12 lg:px-24 xl:px-32 py-2
    flex items-center justify-between transition-all duration-200
    ${ isScrolled && 'bg-gray-900/95 border-b border-[#ff4000]' }`}>
      {/* Logo */}
      <Link href='/'>
        <img src="/logo.webp" alt="Elbethel Advertising Logo"
        className="w-24 md:w-28" />
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex">
        {
          navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link href={ link.href } key={ link.key }
              className={`px-2 py-1 font-semibold mx-1 hover:text-[#ff4000] 
                transition-all duration-200 rounded-xl text-white hover:opacity-90 active:opacity-100
              ${ isActive && 'bg-[#ff4000] hover:text-gray-100' }`} >
                { link.label }
              </Link>
            )
          })
        }
      </ul>

      {/* Humberger menu */}
      <FontAwesomeIcon icon={ faBars }
      onClick={ () => setShowNavLinks(true) }
      className="block md:hidden! text-white text-xl cursor-pointer z-10" />
      
      {/* Nav links for small screen */}
      <div className={`absolute top-0 -left-1000 bg-white/95 w-screen h-screen z-10
       ${ showNavLinks && 'left-0' }
       transition-all duration-300 ease-in-out`}>
        
        <FontAwesomeIcon icon={ faXmark }
        onClick={ () => setShowNavLinks(false) }
        className="float-right p-8 text-2xl" />

        {/* Nav links */}
        <ul className="w-fit mt-50 mx-auto">
          {
            navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link href={ link.href } key={ link.key }
                onClick={() => setShowNavLinks(false)}
                className={`block text-2xl my-2 w-fit px-2 py-1 rounded-xl
                ${ isActive && 'bg-[#ff4000] text-white hover:text-gray-100' }`} >
                  { link.label }
                </Link>
            )})
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
