import Link from "next/link"
import React from "react"

const Overviews = () => {
  return (
    <section className="bg-[#f2f2f0] p-[50px] pt-[60px] flex justify-between pr-[5%] md:block  md:p-[0px] ">
      <section className="md:p-[16px]">
        <div className="flex items-center w-fit">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>

          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="ml-3 md:ml-2 w-fit  font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]"
          >
            WE ARE PROUD OF :

          </div>
        </div>
        <div className=" text-[#B94700] mt-8 text-justify md:mt-4  w-[516.36px] md:w-[95%] text-[20.9842px] leading-[31.48px] tracking-[0.005em] font-normal md:will-change-contents md:mx-auto md:text-base">
        The Alumni Association of Kolhapur Institute of Technology College of Engineering welcomes all its proud graduates to the community. Our mission is to build a strong alumni network and provide opportunities for continued professional development and networking. The landing page features a mini gallery of memorable moments from alumni events and activities, inviting alumni to reminisce about their time here. We hope for the continued success of our alumni association with your support and active participation. 
                <br />
                Stay connected with us for the latest updates and news about our upcoming events and initiatives.          </div>

       

      </section>

      {/* __________IMAGES__________ */}
      <div className="w-[719.46px] md:w-[100%] md:h-[269px] md:mt-4 md:p-[4px] md:mx-auto">
        <div className="flex justify-between mb-[14px]">

          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/AboutUs/about2.jpg)] bg-cover bg-center"></div>
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/AboutUs/about5.jpg)] bg-center bg-cover"></div>
          <a href="kit-gallery?Tab=16">
          <div className="flex items-center leading-[45px] tracking-[0.005em] italic hover:cursor-pointer hover:underline w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[#3E395A] text-[#FFFFFF] font-[700] text-center text-[29.9774px] md:text-xl">
            <div
              data-aos="zoom-in"
              data-aos-delay="20"
              className="w-[155px] md:w-[116px] md:h-[128px] m-auto"
            >
              See more what’s in here {">"}
              {">"}
            </div>
          </div>
          </a>

        </div>
        <div className="flex justify-between ">
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/AboutUs/about7.jpg)] bg-center bg-cover"></div>
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/AboutUs/about1.jpg)] bg-center bg-cover"></div>
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/HomePage/Polygon.png)] bg-center bg-cover"></div>
        </div>
      </div>
    </section>
  )
}

export default Overviews