import React from "react"
import Modal from "../../components/Modal"
import Testimonials2 from "../home-page/Testimonials"

const Testimonials = () => {
  return (
    <section className="h-[564px] sm:h-fit sm:py-16 bg-[#24346D] mt-20 sm:mt-20  flex justify-center items-center relative overflow-hidden">
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-24 h-24 absolute top-[17.5%] left-[35%] z-10 sm:w-16 sm:h-16 sm:top-[10%] sm:left-[70%]"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-32 h-32 absolute top-[15%] left-[5%] z-10 sm:w-20 sm:h-20"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-40 h-40 absolute top-[50%] left-[50%] z-10 sm:w-28 sm:h-28"
        alt=""
      />
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
        alt=""
      />

      <section className="h-[250px] flex  z-20 sm:h-fit">
        {/* Card */}
       <Testimonials2 />
        {/* Card */}
        <Testimonials2 />

        {/* Card */}
        <Testimonials2 />

      </section>
    </section>
  )
}

export default Testimonials
