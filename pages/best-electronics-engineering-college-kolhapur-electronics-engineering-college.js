import React from "react"
import ReactPlayer from "react-player"
import DefaultLayout from "../components/DefaultLayout"
import Awsome from "../sections/departments/electronics/Awsome"
import OurVision from "../sections/departments/electronics/OurVision"
import ImageGrid from "../sections/departments/electronics/imageGrid"
import Hod from "../sections/departments/electronics/hod"
import Career from "../sections/departments/electronics/career"
import MissionCards from "../sections/departments/electronics/MissionCards"
import Testimonials from "../sections/departments/electronics/Testimonials"
import Footer from "../sections/home-page/Footer"
// import Career from "../sections/departments/career"
// import Hod from "../sections/departments/hod"
import TnP from "./tnp"
import TestimonialSlider from "../components/TestimonialsSlider"
const ElectronicsEngineering = () => {
  const testimonials = [
    {
      name: "-------------",
      position: "-------------",
      year: "-------------",
      department: "------------- -------------",
      videoIframe: <></>
    },
    {
      name: "-------------",
      position: "-------------",
      year: "-------------",
      department: "------------- -------------",
      videoIframe: <></>
    },
    {
      name: "-------------",
      position: "-------------",
      year: "-------------",
      department: "------------- -------------",
      videoIframe: <></>
    }
  ];
  
  return (
    <DefaultLayout>
      <div className="w-full">
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
            Department of Electronics Engineering
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-xl font-bold text-center text-slate-300 z-20"
          >
             Home | Electronics Engineering Department
          </h6>

          <div className="z-10  mt-14 w-[1407px] sm:w-[95%] sm:mt-8">
            {/* <img
              src="/images/Department/DepartmentGalary.png"
              className="w-full h-full sm:hidden 2xl:block"
              alt=""
            />
            <img
              src="/images/AboutUs/Gallary-mobile.png"
              className="w-full h-full sm:block 3xl:hidden 2xl:hidden"
              alt=""
            /> */}
            <ImageGrid />
          </div>
        </section>
        <section className="mt-16 mx-auto  w-[1407px] sm:w-[90%] sm:mt-8"></section>
        <Career />
        <Hod />
        <Awsome />
        <OurVision />
        <MissionCards />
        <TestimonialSlider testimonials = { testimonials} />
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default ElectronicsEngineering

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
