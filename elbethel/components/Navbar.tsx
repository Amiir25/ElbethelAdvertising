"use client";

import { navLinks } from "@/constants/navLinks"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Navbar = () => {

  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <nav className="relative px-6 md:x-12 lg:px-24 xl:px-32 py-2 md:py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href='/'>
        <img src="/logo.webp" alt="Elbethel Advertising Logo"
        className="w-24 md:w-32 lg:w-40" />
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex">
        {
          navLinks.map((link) => (
            <Link href={ link.href } key={ link.key }
            className="text-lg font-semibold mx-2 hover:text-[#ff4000]
            transition-all duration-200" >
              { link.label }
            </Link>
          ))
        }
      </ul>

      {/* Humberger menu */}
      <FontAwesomeIcon icon={ faBars }
      onClick={ () => setShowNavLinks(true) }
      className="block md:hidden! text-xl cursor-pointer z-10" />
      
      {/* Nav links for small screen */}
      <div className={`absolute top-0 -left-1000 bg-white w-screen h-screen z-10
       ${ showNavLinks && 'left-0' }
       transition-all duration-300 ease-in-out`}>
        
        <FontAwesomeIcon icon={ faXmark }
        onClick={ () => setShowNavLinks(false) }
        className="float-right p-4 text-2xl" />

        {/* Nav links */}
        <ul className="w-fit mt-50 mx-auto">
          {
            navLinks.map((link) => (
              <Link href={ link.href } key={ link.key }
              className="block text-2xl my-2" >
                { link.label }
              </Link>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
