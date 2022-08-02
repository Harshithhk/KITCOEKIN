import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Aos from "aos"
import "aos/dist/aos.css"
import About from "./about/index.js"
import Admissions from "./admissions/index.js"
import Departments from "./departments/index.js"
import MobileNavbar from "./mobileNavbar/index.js"
import OthersNavbar from "./others/index.js"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [othersNavOpen, setOthersNavOpen] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 500, delay: 20 })
  }, [])

  const router = useRouter()
  return (
    <nav 
    id="Navbar"
      className={`h-[75px] sticky top-0 z-50  md:h-[88px] sm:h-12  flex items-center px-12 sm:px-6 ${
        router.route != "/" ? "bg-[#24346D]" : "bg-slate-50"
      }`}
    >

      
      <Link href="/" passHref>

        <img
          src={`${
            router.route != "/"
              ? "/images/Navbar/Logo.svg"
              : "/images/Navbar/Logo.svg"
          }`}
          className="h-16 py-1 cursor-pointer sm:h-full"
          alt=""
          srcSet=""
        />
      </Link>
      <ul
        className={`sm:hidden flex justify-between w-3/4 ml-auto text-lg ${
          router.route != "/" ? "text-white" : "text-[#666666]"
        } `}
      >

        
        <Link href="#" passHref>
          <About/>       
        </Link>
        
        <Link href="#" passHref>
          <Admissions/>
        </Link>
        <Link href="/#" passHref>
          <Departments/>
        </Link>
        <Link href="/tnp" passHref>
          <li href="#" className="flex items-center cursor-pointer">
            T&P CELL
          </li>
        </Link>

        <li href="#" className="flex items-center cursor-pointer">
          <img src="/images/Navbar/Phone.svg" className="mr-2" alt="" />
          CONTACT
        </li>
        <Link href="/apply-admission" passHref>
        <li  className="flex items-center cursor-pointer">
          <img src="/images/Navbar/Mention.svg" className="mr-2" alt="" />
          APPLY
        </li>
        </Link>
        <li
          href="#"
          className="flex items-center cursor-pointer"        >
           <div
        className="ml-auto space-y-2 HAMBURGER-ICON "
        onClick={() => setOthersNavOpen((prev) => !prev)}
      >
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            router.route != "/" ? "bg-white" : "bg-primary"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            router.route != "/" ? "bg-white" : "bg-primary"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            router.route != "/" ? "bg-white" : "bg-primary"
          }`}
        ></span>
      </div>
        </li>
      </ul>
      {othersNavOpen && (
        <OthersNavbar setOthersNavOpen = {setOthersNavOpen}/>
      )}
      <div
        className="ml-auto space-y-2 HAMBURGER-ICON sm:block 2xl:hidden"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            router.route != "/" ? "bg-white" : "bg-[#24346D]"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            router.route != "/" ? "bg-white" : "bg-[#24346D]"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            router.route != "/" ? "bg-white" : "bg-[#24346D]"
          }`}
        ></span>
      </div>
      {isNavOpen && (
        <MobileNavbar setIsNavOpen = {setIsNavOpen}/>
      )}
    </nav>
  )
}

export default Navbar
