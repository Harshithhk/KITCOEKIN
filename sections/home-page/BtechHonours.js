import Image from "next/image"
import { useEffect, useState } from "react"
const BtechHonours = () => {
  const [active, setActive] = useState(0)

  return (
    <section
      id="btech"
      className=" bg-[#f2f2f0] scroll-snap-stop p-[50px] pt-[60px] pr-[5%]   flex md:block  md:p-[16px] "
    >
      <div className="w-fit">
        <div className="flex items-center w-fit">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="ml-3  md:ml-2 w-fit italic font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]"
          >
            NEW B.TECH HONOURS
          </div>
        </div>
        {active == 0 && (
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="flex-1 h-full md:hidden"
          >
            <img
              className="h-[90%] w-[90%] mt-8"
              src="/images/HomePage/Btech-Honours/Btech Honours.svg"
            ></img>
          </div>
        )}
        {active == 1 && (
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="flex-1 h-full md:hidden"
          >
            <img
              className="h-[90%] w-[90%] mt-8"
              src="/images/HomePage/Btech-Honours/Btech Honours.svg"
            ></img>
          </div>
        )}
        {active == 2 && (
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="flex-1 h-full md:hidden"
          >
            <img
              className="h-[90%] w-[90%] mt-8"
              src="/images/HomePage/Btech-Honours/Btech Honours.svg"
            ></img>
          </div>
        )}
        {active == 3 && (
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="flex-1 h-full md:hidden"
          >
            <img
              className="h-[90%] w-[90%] mt-8"
              src="/images/HomePage/Btech-Honours/Btech Honours.svg"
            ></img>
          </div>
        )}
      </div>
      <div className="w-[608px] ml-auto md:mx-auto md:w-full">
        {/* ------------------BLOCK ----------------- */}
        <div
          onClick={() => setActive(0)}
          style={{ background: active == 0 ? "#3D3859" : "" }}
          className="relative cursor-pointer flex w-[420px] md:w-[97.5%] md:h-[95px] h-[130px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE]  rounded-xl ml-auto md:mr-auto p-4 mt-3 overflow-hidden"
        >
          <div
            className={`absolute top-0 left-0 w-full h-full text text-[115px] text-white font-bold opacity-5 flex  items-center p-7 ${
              active == 0 && "opacity-0"
            }`}
          >
            1790
          </div>
          <Image
            className={`${active !== 0 && "opacity-0"}`}
            src="/images/HomePage/Btech-Honours/Bulb.svg"
            width={95}
            height={80}
          ></Image>
          <div className="flex flex-col items-center ml-12 font-bold text-white">
            <div className="text-5xl leading-none -translate-y-2 w-fit md:text-4xl">
              1790
            </div>
            <div className="text-lg font-semibold text-center -translate-y-2 md:text-xs">
              Projected 2022 first year fall enrollment
            </div>
          </div>
        </div>
        {/* ------------------BLOCK ----------------- */}

        <div
          onClick={() => setActive(1)}
          style={{ background: active == 1 ? "#3D3859" : "" }}
          className="relative cursor-pointer flex w-[420px] md:w-[97.5%] md:h-[95px] h-[130px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE] rounded-xl ml-auto md:mr-auto p-4 mt-3 overflow-hidden"
        >
          <div
            className={`absolute top-0 left-0 w-full h-full text text-[115px] text-white font-bold opacity-5 flex  items-center p-7 ${
              active == 1 && "opacity-0"
            }`}
          >
            3.84
          </div>
          <Image
            className={`${active != 1 && "opacity-0"}`}
            src="/images/HomePage/Btech-Honours/Bulb.svg"
            width={95}
            height={80}
          ></Image>
          <div className="flex flex-col items-center ml-12 font-bold text-white">
            <div className="text-5xl leading-none -translate-y-2 w-fit md:text-4xl">
              3.84
            </div>
            <div className="text-lg font-semibold text-center -translate-y-2 md:text-xs">
              Average GPA for admitted fall first years
            </div>
          </div>
        </div>
        {/* ------------------BLOCK ----------------- */}

        <div
          onClick={() => setActive(2)}
          style={{ background: active == 2 ? "#3D3859" : "" }}
          className="relative cursor-pointer flex w-[420px] md:w-[97.5%] md:h-[95px] h-[130px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE] rounded-xl ml-auto md:mr-auto p-4 mt-3"
        >
          <div
            className={`absolute top-0 left-0 w-full h-full text text-[115px] text-white font-bold opacity-5 flex  items-center p-7 ${
              active == 2 && "opacity-0"
            }`}
          >
            86
          </div>
          <Image
            className={`${active != 2 && "opacity-0"}`}
            src="/images/HomePage/Btech-Honours/Bulb.svg"
            width={95}
            height={80}
          ></Image>
          <div className="flex flex-col items-center ml-12 text-white">
            <div className="text-5xl leading-none -translate-y-2 w-fit md:text-4xl">
              86%
            </div>
            <div className="text-lg font-semibold text-center -translate-y-2 md:text-xs">
              First year students get financial aid
            </div>
          </div>
        </div>
        {/* ------------------BLOCK ----------------- */}

        <div
          onClick={() => setActive(3)}
          style={{ background: active == 3 ? "#3D3859" : "" }}
          className=" relative cursor-pointer flex w-[420px] md:w-[97.5%] md:h-[95px] h-[130px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE] rounded-xl ml-auto md:mr-auto p-4 mt-3"
        >
          <div
            className={`${
              active == 3 && "opacity-0"
            } absolute top-0 left-0 w-full h-full text text-[115px] text-white font-bold opacity-5 flex  items-center p-7`}
          >
            400
          </div>
          <Image
            className={`${active != 3 && "opacity-0"}`}
            src="/images/HomePage/Btech-Honours/Bulb.svg"
            width={95}
            height={80}
          ></Image>
          <div className="flex flex-col items-center ml-12 text-white">
            <div className="text-5xl leading-none -translate-y-2 w-fit md:text-4xl">
              400
            </div>
            <div className="text-lg font-semibold text-center -translate-y-2 md:text-xs">
              projected transfer fall 2022 enrollment
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BtechHonours
