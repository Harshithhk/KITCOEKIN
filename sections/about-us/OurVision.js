import React from "react"

const OurVision = () => {
  return (
    <section className="my-[120px] mx-auto flex sm:flex-col items-center justify-center cbq8v sm:w-[90%] md:my-8">
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
            className="w-[80%]  m-auto sm:block 3xl:hidden 2xl:hidden"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          className="text-xl text-justify sm:mt-4  mt-8 text-[#24346D]  sm:text-base"
        >
          To be the center of excellence in technical education and predered
          choise of Students, Facult, Industry and Society
          <br />
          <br />
          Building core theoretical and practical skills in the students and
          abreast them to be globally competent with the latest technologies,
          skills and developments emerging in the field of Engineering.
        </div>
      </div>
    </section>
  )
}

export default OurVision
