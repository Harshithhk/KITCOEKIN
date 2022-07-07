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

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 500, delay: 20 })
  }, [])

  const router = useRouter()
  return (
    <nav
      className={`h-[75px] sticky top-0 z-50  md:h-[88px] sm:h-12  flex items-center px-12 sm:px-6 ${
        router.route != "/" ? "bg-[#24346D]" : "bg-slate-50"
      }`}
    >
<<<<<<< HEAD
      
      <Link href="/" passHref>
=======
      <Link href="/">
>>>>>>> finishing-new
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
<<<<<<< HEAD
        
        <Link href="#" passHref>
          <About/>       
        </Link>
        
        <Link href="#" passHref>
          <Admissions/>
        </Link>
        <Link href="/#" passHref>
          <Departments/>
=======
        <Link href="#">
          <About />
        </Link>

        <Link href="#">
          <Admissions />
        </Link>
        <Link href="/#">
          <Departments />
>>>>>>> finishing-new
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
        <li href="#" className="flex items-center cursor-pointer">
          <img src="/images/Navbar/Mention.svg" className="mr-2" alt="" />
          APPLY
        </li>
        <li
          href="#"
          className="flex items-center w-32 h-12  text-white rounded-[75px] bg-primary overflow-hidden px-4 py-2 cursor-pointer"
        >
          <img
            src="/images/Navbar/Search_Magnifying_Glass.svg"
            className="mr-2"
            alt=""
          />
          SEARCH
        </li>
      </ul>
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
<<<<<<< HEAD
        <MobileNavbar setIsNavOpen = {setIsNavOpen}/>
=======
        <div className="absolute top-0 left-0 w-screen h-screen ">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="absolute z-10 w-full h-full transition-all duration-300 bg-slate-100 "
          ></div>
          <div className="z-20 absolute right-3 top-5 mr-2 text-[30px] font-bold text-primary">
            <div
              className="ml-auto space-y-2 HAMBURGER-ICON sm:block 2xl:hidden"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-primary"></span>
              <span className="block ml-auto h-0.5 w-6 animate-pulse bg-primary"></span>
              <span className="block h-0.5 ml-auto w-5 animate-pulse bg-primary"></span>
            </div>
          </div>
          <ul className="z-20">
            <Link href="/about">
              <li>
                <h1 className="relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent">
                  ABOUT
                </h1>
              </li>
            </Link>
            <Link href="/milestones">
              <li>
                <h1 className="relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent">
                  MILESTONES
                </h1>
              </li>
            </Link>
            <Link href="/foundertrustees">
              <li>
                <h1 className="relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent">
                  FOUNDER TRUSTEES
                </h1>
              </li>
            </Link>
            <Link href="/best-cse-college-kolhapur-best-computer-science-engineering-data-science-college">
              <li>
                <h1 className="relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent">
                  DEPARTMENTS
                </h1>
              </li>
            </Link>
            <Link href="/stafflist">
              <li>
                <h1 className="relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent">
                  STAFFS{" "}
                  <img
                    src="/images/Milestones/.svg"
                    className="absolute"
                    alt=""
                  />
                </h1>
              </li>
            </Link>
          </ul>
        </div>
>>>>>>> finishing-new
      )}
    </nav>
  )
}

export default Navbar
