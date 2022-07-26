import React from "react"

const Awsome = () => {
  return (
    <section className="w-full h-[346px] sm:h-fit mt-20 sm:mt-8  flex items-center">
      <div className="w-[160px] h-[160px] rounded-full border-2 bg-[#F8F7FC] absolute ml-[200px] mb-[330px] z-0 border-[#F8F7FC] flex justify-center items-center"></div>
      <section className="h-[290px] sm:h-fit z-10  w-[1407px] flex-wrap sm:w-[340px] mx-auto flex justify-center gap-20 md:gap-4">
        {/* BOX */}

        <div className=" w-[290px] shadow-xl h-fit bg-white  rounded-3xl p-4 sm:w-[165px] sm:p-2">
          <img
            src="/images/AboutUs/awesome.svg"
            className="w-16 h-16 sm:w-8 sm:h-8 -translate-x-3 sm:-translate-x-1"
            alt=""
          />
          <h1 className="text-[#24346D] sm:text-xl text-[26px] font-bold mt-1 sm:mt-0">
            DEPT.HEAD
          </h1>
          <div className="text-xl text-justify text-[#35457E] mt-2 sm:text-sm">
          Mr. Ajit S. Patil

          </div>
        </div>

        {/* BOX */}
        <div className=" w-[290px] h-fit shadow-xl bg-white  rounded-3xl p-4 sm:w-[165px]  sm:p-2">
          <img
            src="/images/AboutUs/awesome.svg"
            className="w-16 h-16 sm:w-8 sm:h-8 -translate-x-3 sm:-translate-x-1"
            alt=""
          />
          <h1 className="text-[#24346D] sm:text-xl text-[26px] font-bold mt-1 sm:mt-0">
            B.TECH
          </h1>
          <div className="text-xl text-justify text-[#35457E] mt-2 sm:text-sm">
            Intake : 60
          </div>
        </div>
        {/* BOX */}
        {/* <div className=" w-[290px] h-fit shadow-xl  bg-white  rounded-3xl p-4 sm:w-[165px] sm:mt-[10px] sm:p-2">
          <img
            src="/images/AboutUs/awesome.svg"
            className="w-16 h-16 sm:w-8 sm:h-8 -translate-x-3 sm:-translate-x-1"
            alt=""
          />
          <h1 className="text-[#24346D] sm:text-xl text-[26px] font-bold mt-1 sm:mt-0">
            M.TECH
          </h1>
          <div className="text-xl text-justify text-[#35457E] mt-2 sm:text-sm">
            Intake : 06
          </div>
        </div> */}
        {/* BOX */}
      </section>
    </section>
  )
}

export default Awsome
