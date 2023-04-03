import React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import AboutKit from "./about-kit"
import FountersTrustees from "./founder-trustees"
import BoardOfDirectors from "./board-of-directors"
import GoverningCouncil from "./governing-council"
import Milestones from "./milestones"
import CollegeAdministration from "./college-administration"
import OfficeAdministration from "./office-administration"
import IQAC from "./iqac"
import StaffList from "./staff-list"
import NIRF from "./NIRF"
import Accreditation from "./accreditation"
import ManditoryDisclosure from "./manditory-disclosure"



const About = () => {

  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  

  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const router = useRouter()

    return (
    <div className="mt-2 ">
          <li
            href="/about"
            className={`flex items-center   cursor-pointer  ${
              router.route != "/" ? "text-white" : "text-black"
            }`}
            onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
          >
            ABOUT
            <svg
                    className={
                      flyer === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
            </svg> 
          </li>
              <div
                  onMouseLeave={() => setFlyer(false)}
                  className={
                    flyer
                      ? " block translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <AboutKit/>
                      <FountersTrustees/>
                      <BoardOfDirectors/>
                      <GoverningCouncil/>
                      <Milestones/>
                      <CollegeAdministration/>
                      <OfficeAdministration/>
                      <IQAC/>
                      <StaffList/>
                      <NIRF/>
                      {/* <Accreditation/> */}
                      <ManditoryDisclosure/>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 flex">
                      
                        <a
                          href="https://youtu.be/KE526LqR8Oo"
                          className="-m-3 p-3 w-[50%] flex items-center rounded-md text-base font-medium text-[#24346D]  hover:bg-gray-100"
                        >
                       
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="ml-3">Watch Video</span>
                        </a>
                    
                     
                        <a
                          href="contact"
                          className="-m-3 p-3 ml-4 w-[50%] flex items-center rounded-md text-base font-medium text-[#24346D]  hover:bg-gray-100"
                        >
                         
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="ml-3">Contact Us</span>
                        </a>
                      
                    </div>
                  </div>
              </div>
          </div>    
    )
}

export default About
