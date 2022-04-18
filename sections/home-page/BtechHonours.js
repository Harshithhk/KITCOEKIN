import Image from "next/image"
const BtechHonours = () => {
  return (
    <section className="p-[50px] pt-[60px] pr-[5%]   flex md:block  md:p-[16px] ">
      <div className="w-fit">
        <div className="flex items-center w-fit">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
            NEW B.TECH HONOURS
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          className="flex-1 h-full md:hidden"
        >
          <img src="/images/HomePage/Btech-Honours/Btech Honours.svg"></img>
        </div>
      </div>
      <div className="w-[608px] ml-auto md:mx-auto md:w-fit">
        {/* ------------------BLOCK ----------------- */}
        <div
          data-aos="fade-in"
          data-aos-delay="0"
          className="flex w-[420px] md:w-[350px] md:h-[95px] h-[130px] bg-accent rounded-xl ml-auto md:mr-auto p-4  "
        >
          <Image
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
          data-aos="fade-in"
          data-aos-delay="10"
          className="relative flex w-[420px] md:w-[350px] md:h-[95px] h-[130px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE] rounded-xl ml-auto md:mr-auto p-4 mt-3 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full text text-[115px] text-white font-bold opacity-5 flex  items-center p-7">
            3.84
          </div>
          <Image
            src="/images/HomePage/Btech-Honours/Bub.svg"
            width={95}
            height={80}
          ></Image>
          <div className="flex flex-col items-center ml-12 font-bold text-white">
            <div className="text-5xl leading-none -translate-y-2 w-fit md:text-4xl">
              3.84
            </div>
            <div className="text-lg font-semibold text-center -translate-y-2  md:text-xs">
              Average GPA for admitted fall first years
            </div>
          </div>
        </div>
        {/* ------------------BLOCK ----------------- */}

        <div
          data-aos="fade-in"
          data-aos-delay="20"
          className="relative flex w-[420px] md:w-[350px] md:h-[95px] h-[130px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE] rounded-xl ml-auto md:mr-auto p-4 mt-3"
        >
          <div className="absolute top-0 left-0 w-full h-full text text-[115px] text-white font-bold opacity-5 flex  items-center p-7">
            86
          </div>
          <Image
            src="/images/HomePage/Btech-Honours/Bub.svg"
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
          data-aos="fade-in"
          data-aos-delay="30"
          className=" relative flex w-[420px] md:w-[350px] md:h-[95px] h-[130px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE] rounded-xl ml-auto md:mr-auto p-4 mt-3"
        >
          <div className="absolute top-0 left-0 w-full h-full text text-[115px] text-white font-bold opacity-5 flex  items-center p-7">
            400
          </div>
          <Image
            src="/images/HomePage/Btech-Honours/Blb.svg"
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
