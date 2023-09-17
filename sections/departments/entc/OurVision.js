import React from "react"

const OurVision = () => {
  return (
    <section className=" mx-auto flex sm:flex-col items-center justify-center w-[80%] sm:w-[90%] sm:mt-16 mb-36 sm:mb-16">
      <div className="w-1/2 sm:w-[90%] sm:hidden">
        <img
          src="/images/AboutUs/Vision.svg"
          className="w-[80%] m-auto"
          alt=""
        />
      </div>
      <div className="w-1/2 ml-12 sm:w-[100%] flex flex-col items-center justify-center sm:ml-0">
        <div className="flex items-center w-full">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
            OUR VISION @KIT
          </div>
        </div>
        <div className="w-1/2 sm:w-[100%]">
          <img
            src="/images/AboutUs/Vision.svg"
            className="w-[80%]  m-auto sm:block 3xl:hidden 2xl:hidden"
            alt=""
          />
        </div>
        <div className="text-xl text-justify pr-12 sm:pr-0  sm:mt-4  mt-8 text-[#24346D] font-semibold sm:font-normal sm:text-base">
        To Develop As A Center Of Excellence In Electronics & Telecommunication Engineering And The Preferred Choice Of Faculty-students-industry And Society At Global Level.        
               </div>
      </div>

      
    </section>
  )
}

export default OurVision
