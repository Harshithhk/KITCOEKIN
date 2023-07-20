import Link from "next/link"
import React from "react"

const Overviews = () => {
  return (
    <section className="bg-[#f2f2f0] p-[50px] grid grid-cols-2 lg:grid-cols-1 sm:p-0 sm:gap-10  gap-20">
     
      <div className="">
        <div className="flex items-center w-fit">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] sm:h-7 sm:w-1 rounded-lg"></div>

          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="ml-3 sm:ml-2 w-fit  font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  sm:text-[22px]"
          >
            WE ARE PROUD OF :

          </div>
        </div>
        <div className=" text-[#B94700] mt-8 text-justify sm:mt-4 w-fit sm:w-[95%] text-[20.9842px] leading-[31.48px] tracking-[0.005em] font-normal sm:will-change-contents sm:mx-auto sm:text-base">
          The Alumni Association of Kolhapur Institute of Technology College of Engineering welcomes all its proud graduates to the community. Our mission is to build a strong alumni network and provide opportunities for continued professional development and networking. The landing page features a mini gallery of memorable moments from alumni events and activities, inviting alumni to reminisce about their time here. We hope for the continued success of our alumni association with your support and active participation. 
                <br />
                Stay connected with us for the latest updates and news about our upcoming events and initiatives.          
          </div>
      </div>

      {/* __________IMAGES__________ */}
      <div className="grid grid-cols-3 pb-8 gap-2 ">
          <div className="w-52 h-52 sm:w-[116px] sm:h-[128px] bg-[url(/images/alumni/gallery/1.jpg)] bg-cover bg-center"></div>
          <div className="w-52 h-52 sm:w-[116px] sm:h-[128px] bg-[url(/images/alumni/gallery/2.jpg)] bg-center bg-cover"></div>
          <a href="kit-gallery?Tab=16">
            <div className="flex items-center leading-[45px] tracking-[0.005em] italic hover:cursor-pointer hover:underline w-52 h-52 sm:w-[116px] sm:h-[128px] bg-[#3E395A] text-[#FFFFFF] font-[700] text-center text-[29.9774px] sm:text-xl">
              <div
                data-aos="zoom-in"
                data-aos-delay="20"
                className="w-[155px] sm:w-[116px] sm:h-[128px] m-auto"
              >
                See more what’s in here {">"}
                {">"}
              </div>
            </div>
          </a>
          <div className="w-52 h-52 sm:w-[116px] sm:h-[128px] bg-[url(/images/alumni/gallery/3.jpg)] bg-center bg-cover"></div>
          <div className="w-52 h-52 sm:w-[116px] sm:h-[128px] bg-[url(/images/alumni/gallery/4.jpg)] bg-center bg-cover"></div>
          <div className="w-52 h-52 sm:w-[116px] sm:h-[128px] bg-[url(/images/HomePage/Polygon.jpg)] bg-center bg-cover"></div>
      </div>
    
    </section>
  )
}

export default Overviews
