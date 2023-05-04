import React from "react"
import ReactPlayer from "react-player"
import DefaultLayout from "../components/DefaultLayout"
import Awsome from "../sections/departments/entc/Awsome"
import OurVision from "../sections/departments/entc/OurVision"
import AboutUs from "../sections/about-us/AboutUs"
import MissionCards from "../sections/departments/entc/MissionCards"
import Testimonials from "../sections/departments/entc/Testimonials"
import Footer from "../sections/home-page/Footer"
import Career from "../sections/departments/entc/career"
import Hod from "../sections/departments/entc/hod"
import ImageGrid from "../sections/departments/entc/imageGrid"

import TnP from "./tnp"
import Testimonial from "../components/Testimonial"
const EntcEngineering = () => {
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
            Electronics & Telecommunication Engineering
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-xl font-bold text-center text-slate-300 z-20"
          >
             Home | Electronics & Telecommunication
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
            <Testimonial>

            <Testimonial.DataCard name="Shivani" position="software developer (KPIT)" year="2016"  department="Electronics and Telecomm Engneering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/Eof29x_3uqk?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)| Miss. Shivani Chougule" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} />




<Testimonial.DataCard name="Omkar" position="senoir analist(capgemini)" year="2021"  department="Electronics and Telecomm Engneering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/-ZwvS2x4dMk?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;s College of Engineering (Autonomous) | Omkar Bamne" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} />


<Testimonial.DataCard name="Abhishek" position="Seagate" year="2018"  department="Electronics and Telecomm Engneering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit " src="https://www.youtube.com/embed/eSwZ6UGS3tc?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)|ABHISHEK VERNEKAR" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} />
            </Testimonial>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default EntcEngineering

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
