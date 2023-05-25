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
import OthersMegaNavbar from "./othersMega"
import Academics from "./academics/index.js"
import ExamCell from "./examCell/index.js"

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
      className={`h-[75px]  sticky top-0 z-40  md:h-[88px] sm:h-12  flex items-center px-12 sm:px-6 ${
        router.route != "/" ? "bg-[#24346D]" : "bg-slate-50"
      }`}
    >
      {/* <div className="bg-white/50  h-full p-5 flex justify-center items-center rounded-b-xl "> */}
      <div
        className={`absolute h-[65px] w-[200px] sm:h-12 rounded-br-3xl  bg-white/70 top-0 left-0`}
      >
        <Link href="/" passHref>
          <img
            src={`${
              router.route != "/"
                ? "/images/Navbar/Logo.svg"
                : "/images/Navbar/Logo.svg"
            }`}
            className="h-16 py-1 ml-10 cursor-pointer sm:h-full"
            alt=""
            srcSet=""
          />
        </Link>
      </div>

      {/* </div> */}
      <ul
        className={`sm:hidden flex justify-between w-3/4 ml-auto text-lg ${
          router.route != "/" ? "text-white" : "text-[#666666]"
        } `}
      >       
          <About />    
          <Admissions />   
          <Departments />       
          <Academics />
          <ExamCell />
          <Link href="/contact" passHref>

            <li href="#" className="flex items-end cursor-pointer">
              <img src="/images/Navbar/Phone.svg" className="mr-2" alt="" />
              CONTACT
            </li>
          </Link>
          <Link href="/apply-admission" passHref>
            <li className="flex items-end cursor-pointer">
              <img src="/images/Navbar/Mention.svg" className="mr-2" alt="" />
              APPLY
            </li>
          </Link>
          <li href="#" className="flex items-center mt-[5px] cursor-pointer">
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
        // <OthersNavbar setOthersNavOpen = {setOthersNavOpen}/>
        <OthersMegaNavbar setOthersNavOpen={setOthersNavOpen} />
      )}

      <div
        className="ml-auto space-y-2 HAMBURGER-ICON sm:block 3xl:hidden 2xl:hidden"
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
      {isNavOpen && <MobileNavbar setIsNavOpen={setIsNavOpen} />}
    </nav>
  )
}

export default Navbar
