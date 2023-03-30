import React from "react"

const OurVision = () => {
  return (
    <section className="mt-52 mx-auto flex sm:flex-col w-[1407px] sm:w-[90%] sm:mt-8">
      <div
        data-aos="zoom-in"
        data-aos-delay="0"
        className="w-1/2 sm:w-[90%] sm:hidden"
      >
        <img
          src="/images/AboutUs/Vision.svg"
          className="w-[80%] m-auto"
          alt=""
        />
      </div>
      <div className="w-1/2 ml-12 sm:w-[100%] sm:ml-0">
        <div className="flex items-center w-full">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]"
          >
            OUR VISION @KIT
          </div>
        </div>
        <div className="w-1/2 sm:w-[100%]">
          <img
            data-aos="zoom-in"
            data-aos-delay="0"
            src="/images/AboutUs/Vision.svg"
            className="w-[80%]  m-auto sm:block 2xl:hidden"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          className="text-xl text-justify sm:mt-4  mt-8 text-[#24346D] font-semibold sm:text-base"
        >
build an active alumni network for lifelong learning, career dev, and social responsibility, contributing to our institution's growth.

<br />
          <br />
          foster community and promote values of excellence, innovation, and leadership through alumni engagement and collaboration.




        </div>
      </div>
    </section>
  )
}

export default OurVision
