import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"

import "swiper/css"
import Image from "next/image"

const CampusPlacement = () => {
  let placements = [
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
  ]

  SwiperCore.use([Autoplay])
  return (
    <section className=" h-fit mt-16 md:mt-8   max-w-screen w-screen">
      <section className="flex w-[95%] justify-around h-fit mx-auto md:flex-col">
        {/* <img src="/images/TnP/stats.png" className="md:hidden w-[65%]" alt="" /> */}
        <div className="w-[65%] md:w-full mr-4 overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {placements.map((element) => (
              <SwiperSlide>
                <div className="w-fit h-fit rounded-3xl overflow-hidden">
                  <Image
                    src={element}
                    alt="Picture of the author"
                    width={800}
                    height={500}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:mt-8 md:w-full md:-translate-x-0 -translate-x-10 w-[550px] float-right bg-white rounded-2xl overflow-hidden ">
          <div className="h-16 bg-white flex items-center text-[#24346D] px-7 border-b border-[#24346D] font-bold text-xl">
            CAMPUS PLACEMENT IN LAST 3 YEARS
          </div>
          <div className="mx-10 flex h-16 border-b-2 ">
            <div className="flex-1 h-full text-[#24346D] font-semibold text-base border-[#24346D] border-b-4  flex items-center">
              2018-2019
            </div>
            <div className="flex-1 h-full text-[#24346D] font-semibold text-base border-slate-300 border-b-2  flex items-center">
              2018-2019
            </div>
            <div className="flex-1 h-full text-[#24346D] font-semibold text-base border-slate-300 border-b-2  flex items-center">
              2018-2019
            </div>
          </div>
          <div className="py-2 bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="text-4xl text-primary font-bold mb-1">354</div>
            <div className="text-base text-accent font-normal">
              Total Job Offers Received
            </div>
          </div>
          <div className="py-2 bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="text-4xl text-primary font-bold mb-1">101</div>
            <div className="text-base text-accent font-normal">
              No of Companies
            </div>
          </div>
          <div className="py-2 bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="text-4xl text-primary font-bold mb-1">2.76 LPA</div>
            <div className="text-base text-accent font-normal">
              Average Pay Package (Rs.)
            </div>
          </div>
          <div className="py-2    bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="text-4xl text-primary font-bold mb-1">10 LPA</div>
            <div className="text-base text-accent font-normal">
              Highest Pay Package (Rs.)
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default CampusPlacement
