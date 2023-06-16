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
import ImageGrid from "../sections/about-us/imageGrid"
import Testimonial from "../components/Testimonial"

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
      <div className="relative w-full overflow-hidden">
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
            className="w-[75%] mt-14 sm:text-2xl  text-4xl font-bold text-center text-white z-20"
          >
            About KIT
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <a href="/">
              <span className="hover:text-primary hover:cursor-pointer">
                {" "}
                Home
              </span>{" "}
            </a>
            <span className="">|</span> About KIT
          </h6>

          <div
            className="z-10  mt-14 w-[1407px] sm:w-[95%] sm:mt-8 cursor-pointer"
            // onClick={() => setGallary(true)}
          >
            <ImageGrid />
            {/* <img
              src="/images/AboutUs/IMAGE-GALLARY-1.png"
              className="w-full h-full sm:block xxl:hidden"
              alt=""
            /> */}
            {/* <img
              src="/images/AboutUs/Gallary-mobile-1.png"
              className="w-full h-full sm:block xxl:hidden"
              alt=""
            /> */}
          </div>
        </section>
        <AboutUs />
        {/* <Awsome /> */}
        <Accreditation />
        <div className="mt-4">
          <OurVision />
        </div>
        <div className="px-6 md:px-1">
          <StatisticsNew />
        </div>
        <MissionCards />
            <Testimonial>
            <Testimonial.DataCard name="Murlidhar " position="wipro technology (cloud architect)" year="2007"  department="Computer Science And Engineering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/6L2T1G_QDWQ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)|MURLIDHAR PARULEKAR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>} />
        <Testimonial.DataCard name="Chetan" position="Marine Engineers" year="2008"  department="Mechanical Engineering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/6GpqIypfb78?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;s College of Engineering (Autonomous) | Chetan Mirajkar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>} />

        <Testimonial.DataCard name="Shivani" position="software developer (KPIT)" year="2016"  department="Electronic and Telecomm Engineering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/Eof29x_3uqk?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)| Miss. Shivani Chougule" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>} />

            </Testimonial>
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
