import React from "react"
import ReactPlayer from "react-player"
import DefaultLayout from "../components/DefaultLayout"
import Awsome from "../sections/about-us/Awsome"
import OurVision from "../sections/about-us/OurVision"
import AboutUs from "../sections/about-us/AboutUs"
import MissionCards from "../sections/about-us/MissionCards"
import Testimonials from "../sections/about-us/Testimonials"
import Footer from "../sections/home-page/Footer"
const about = () => {
  return (
    <DefaultLayout>
      <div className="w-full">
        <section className="flex flex-col items-center w-full relative">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10"
            alt=""
          />
          <div className="absolute w-full h-[500px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1 className="w-[75%] mt-14  text-4xl font-bold text-center text-white z-20">
            KOLHAPUR INSTITURE OF TECHNOLOGY'S
          </h1>
          <h1 className="w-[75%] text-4xl font-bold text-center text-white z-20">
            COLLEGE OF ENGINEERING (AUTONOMOUS), KOLHAPUR
          </h1>

          <div className="z-10  mt-14 w-[1407px]">
            <img
              src="/images/AboutUs/IMAGE-GALLARY.png"
              className="w-full h-full"
              alt=""
            />
          </div>
        </section>
        <AboutUs />
        <Awsome />
        <OurVision />
        <MissionCards />
        <Testimonials />
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default about

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
