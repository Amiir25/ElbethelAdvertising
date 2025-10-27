"use client";

import { navLinks } from "@/constants/navLinks"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose"
import { useState } from "react"

const Navbar = () => {

  const [showNavLinks, setShowNavLinks] = useState(0);

  return (
    <nav className="relative px-6 md:x-12 lg:px-24 xl:px-32 flex items-center justify-between">
      {/* Logo */}
      <Link href='/'>
        <Image src='/logo.webp' alt="Elbethel Logo Image"
        width={60} height={30} className="" />
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex">
        {
          navLinks.map((link) => (
            <Link href={ link.href } key={ link.key }
            className="mx-2 hover:text-amber-300 transition-all duration-200" >
              { link.label }
            </Link>
          ))
        }
      </ul>

      {/* Humberger menu */}
      <FontAwesomeIcon 
      onClick={ () => setShowNavLinks(1) }
      icon={ faBars }
      className="md:hidden! cursor-pointer" />

      {/* Nav links for small screen */}
      <ul className={`hidden absolute top-0 -left-6 border w-screen h-screen bg-white z-10
       ${ showNavLinks === 1 && 'block' } `}>

        <FontAwesomeIcon
        onClick={ () => setShowNavLinks(0) }
        icon={ faClose }
        className="float-right p-4 text-xl font-bold" />

        <div className="w-full h-full flex flex-col items-center gap-4 mt-30">
          {
            navLinks.map((link) => (
              <Link href={ link.href } key={ link.key }
              className="block mx-2 text-xl
              hover:text-amber-300 transition-all duration-200" >
                { link.label }
              </Link>
            ))
          }
          <p>s { String(showNavLinks) }</p>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
