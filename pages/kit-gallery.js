import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/departments/career"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"
import Gallery from "../sections/lifeAtKit/cultural/gallery"
import Team from "../sections/team"

const KitGallery = () => {

    const [subLink, setSubLink] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLinkHover1, setSubLinkHover1] = React.useState(false)
    const [subLinkHover2, setSubLinkHover2] = React.useState(false)

  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
        <section className="flex flex-col h-[250px] items-center w-full relative">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
            alt=""
          />
          <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
          >
            KOLHAPUR INSTITURE OF TECHNOLOGY&apos;S
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] text-4xl sm:text-xl font-bold text-center text-white z-20"
          >
            COLLEGE OF ENGINEERING (AUTONOMOUS), KOLHAPUR
          </h1>
        </section>
        {/*---------------------------------------------------------------------pb-20  px-14 sm:px-4 sm:pb-10----------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative  z-30 w-[100%] pb-20 -mb-10 mx-auto h-fit bg-secondary "> 
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}
          <div className=" flex flex-row  justify-center items-center absolute -top-11 w-[100%] h-20 bg-transparent ">
            <div className="flex flex-row text-slate-400 items-center justify-evenly rounded-xl shadow-2xl h-20 w-3/4 bg-white">
              <div className="flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2">All</div>
              <div className="flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2">About-KIT</div>
              <div className="flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2">
                Departments
                <svg
                    className={
                       false
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition mt-1 ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
              </div>
              <div className="flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2">Cultural</div>
              <div className="flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2">Library</div>
              <div className="flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2">Hostel</div>
            </div>
          </div>
        
        <Gallery /> 
   
        </section>
        

     
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default KitGallery
