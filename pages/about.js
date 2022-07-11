import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import DefaultLayout from "../components/DefaultLayout"
import Awsome from "../sections/about-us/Awsome"
import OurVision from "../sections/about-us/OurVision"
import AboutUs from "../sections/about-us/AboutUs"
import MissionCards from "../sections/about-us/MissionCards"
import Testimonials from "../sections/about-us/Testimonials"
import Footer from "../sections/home-page/Footer"
import Accreditation from "../sections/home-page/Accredations"
import Statistics from "../sections/home-page/Statistics"
import StatisticsNew from "../sections/home-page/StatisticsNew"
import Gallaryslider from "../components/Gallary-slider"

let images = [
  "/images/Gallary-1png.png",
  "/images/Gallary-2.png",
  "/images/Gallary-3.png",
  "/images/Gallary-2.png",
]

const About = () => {
  const [gallary, setGallary] = useState(false)

  useEffect(() => {
    console.log(gallary)
    return () => {}
  }, [gallary])

  return (
    <DefaultLayout>
      <div className="w-full relative">
        {gallary && <Gallaryslider images={images} setGallary={setGallary} />}
        <section className="relative flex flex-col items-center w-full">
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
          <div className="absolute w-full h-[500px] top-0 left-0 bg-[#24346D] z-0"></div>
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

          <div
            className="z-10  mt-14 w-[1407px] sm:w-[95%] sm:mt-8 cursor-pointer"
            onClick={() => setGallary(true)}
          >
            <img
              src="/images/AboutUs/IMAGE-GALLARY-1.png"
              className="w-full h-full sm:hidden 2xl:block"
              alt=""
            />
            <img
              src="/images/AboutUs/Gallary-mobile-1.png"
              className="w-full h-full sm:block 2xl:hidden"
              alt=""
            />
          </div>
        </section>
        <AboutUs />
        <Awsome />
        <Accreditation />
        <div className="mt-4">
          <OurVision />
        </div>
        <div className="px-6 md:px-1">
          <StatisticsNew />
        </div>
        <MissionCards />
        <Testimonials />
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default About

{
  /* <div className="mt-10 ">
          <ReactPlayer
            style={{ borderRadius: "16px", overflow: "hidden" }}
            light={true}
            // playing={true}
            controls={true}
            width={"700px"}
            height={"360px"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div> */
}
