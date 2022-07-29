import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"

import "swiper/css"
import Image from "next/image"

const CampusPlacement = () => {
  const [active, setActive] = useState(0)

  let placements = [
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
    "/images/TnP/Placement.jpg",
  ]

  SwiperCore.use([Autoplay])
  return (
    <section className="w-screen mt-16 h-fit md:mt-8 max-w-screen">
      <section className="flex w-[95%] justify-around h-fit mx-auto md:flex-col">
        <img src="/images/TnP/stats.png" className="md:hidden w-[65%]" alt="" />

        <div className="md:mt-8 md:w-full md:-translate-x-0 -translate-x-10 w-[550px] float-right bg-white rounded-2xl overflow-hidden ">
          <div className="h-16 bg-white flex items-center text-[#24346D] px-7 border-b border-[#24346D] font-bold text-xl">
            CAMPUS PLACEMENT IN LAST 3 YEARS
          </div>
          <div className="flex h-16 mx-10 border-b-2 ">
            <div
              onClick={() => setActive(0)}
              className={`transition-all cursor-pointer flex-1 h-full text-[#24346D] font-semibold text-base border-[#24346D] ${
                active == 0 && "border-b-4"
              }  flex items-center`}
            >
              2018-2019
            </div>
            <div
              onClick={() => setActive(1)}
              className={`transition-all cursor-pointer flex-1 h-full text-[#24346D] font-semibold text-base border-[#24346D] ${
                active == 1 && "border-b-4"
              }  flex items-center`}
            >
              2018-2019
            </div>
            <div
              onClick={() => setActive(2)}
              className={`transition-all cursor-pointer flex-1 h-full text-[#24346D] font-semibold text-base border-[#24346D] ${
                active == 2 && "border-b-4"
              }  flex items-center`}
            >
              2018-2019
            </div>
          </div>
          <div className="py-2 bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="mb-1 text-4xl font-bold text-primary">354</div>
            <div className="text-base font-normal text-accent">
              Total Job Offers Received
            </div>
          </div>
          <div className="py-2 bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="mb-1 text-4xl font-bold text-primary">101</div>
            <div className="text-base font-normal text-accent">
              No of Companies
            </div>
          </div>
          <div className="py-2 bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="mb-1 text-4xl font-bold text-primary">2.76 LPA</div>
            <div className="text-base font-normal text-accent">
              Average Pay Package (Rs.)
            </div>
          </div>
          <div className="py-2    bg-white flex justify-center  text-[#24346D] px-10 border-b border-slate-400 flex-col">
            <div className="mb-1 text-4xl font-bold text-primary">10 LPA</div>
            <div className="text-base font-normal text-accent">
              Highest Pay Package (Rs.)
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-10 pb-10 bg-white flex md:flex-col">
        <section className="md:overflow-x-scroll max-w-screen w-[50%] md:w-full">
          <section className="relative pt-10  z-30 w-full pb-20 mx-auto h-fit px-14 sm:px-4 sm:pb-10  ">
            <h1 className="text-2xl font-bold md:ml-0 ml-2 mb-4">
              Recent Files
            </h1>
            <div className="cursor-pointer flex items-center w-full h-16 p-2  text-center shadow-sm rounded-2xl bg-blue-50">
              <div className=" w-[34%] md:w-[50%] text-left pl-2 flex items-center">
                <div className="h-10 w-10 mr-2">
                  <img src="/images/tnp/Gallery-icon.png" alt="" />
                </div>
                Screeshot.png
              </div>
              <div className=" w-[33%] md:w-[35%] text-left pl-2">
                15 April, 2020
              </div>
              <div className=" w-[33%] md:w-[15%] text-left pl-2">4.5 Mb</div>
            </div>
            <div className="cursor-pointer flex items-center w-full h-16 p-2 mt-6 text-center shadow-sm rounded-2xl bg-blue-50">
              <div className=" w-[34%] md:w-[50%] text-left pl-2 flex items-center">
                <div className="h-10 w-10 mr-2">
                  <img src="/images/tnp/Gallery-icon.png" alt="" />
                </div>
                Screenshot.png
              </div>
              <div className=" w-[33%] md:w-[35%] text-left pl-2">
                15 April, 2020
              </div>
              <div className=" w-[33%] md:w-[15%] text-left pl-2">4.5 Mb</div>
            </div>
            <div className="cursor-pointer flex items-center w-full h-16 p-2 mt-6 text-center shadow-sm rounded-2xl bg-blue-50">
              <div className=" w-[34%] md:w-[50%] text-left pl-2 flex items-center">
                <div className="h-10 w-10 mr-2">
                  <img src="/images/tnp/Gallery-icon.png" alt="" />
                </div>
                Screeshot.png
              </div>
              <div className=" w-[33%] md:w-[35%] text-left pl-2">
                15 April, 2020
              </div>
              <div className=" w-[33%] md:w-[15%] text-left pl-2">4.5 Mb</div>
            </div>
            <div className="cursor-pointer flex items-center w-full h-16 p-2 mt-6 text-center shadow-sm rounded-2xl bg-blue-50">
              <div className=" w-[34%] md:w-[50%] text-left pl-2 flex items-center">
                <div className="h-10 w-10 mr-2">
                  <img src="/images/tnp/Gallery-icon.png" alt="" />
                </div>
                Screeshot.png
              </div>
              <div className=" w-[33%] md:w-[35%] text-left pl-2">
                15 April, 2020
              </div>
              <div className=" w-[33%] md:w-[5%]  text-left pl-2">4.5 Mb</div>
            </div>
          </section>
        </section>
        <div className="w-[50%] md:pt-0 rounded-xl  pt-10 md:w-full mr-4 overflow-hidden">
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
                <div className="overflow-hidden w-fit h-fit rounded-3xl">
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
      </section>
    </section>
  )
}

export default CampusPlacement
