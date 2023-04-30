import React from "react"

function Hero5(props) {
  return (
    <section className="flex">
      <div className=" md:block  w-[580px] h-full md:h-[500px] md:w-screen left-[50px] md:left-0 top-0 md:top-auto md:bottom-0  bg-opacity-60 flex  mt-10">
        <div className="mt-8 md:translate-x-0 relative">
          {/* TITLE */}
          <div className="sm:hidden flex flex-col italic font-extrabold md:flex md:justify-center md:items-center">
            <div
              data-aos="zoom-in"
              data-aos-delay="20"
              className=" h-24 md:h-16 w-fit px-9 py-4 md:py-2  md:px-4   text-7xl md:text-5xl flex justify-center items-center  text-[#5C5487] mx-auto  whitespace-nowrap"
            >
              What Will
              <span className="text-[#F07C00] ml-[13px] italic"> KITCOEK</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              className="h-24  md:h-16 mt-2 w-fit px-9 py-4 md:py-2  md:px-4  text-7xl md:text-5xl  text-[#5C5487]  md:translate-x-0"
            >
              Start In You
            </div>
          </div>

          <div className="sm:hidden text-lg text-accent ml-8 w-[70%] mt-7 md:text-sm md:w-[280px] md:translate-x-0  md:p-1 md:text-center md:text-white">
            A degree will give you the opportunity to develop transferable
            skills such as communication and problem-solving skills, while
            enhancing their ability to work as part of a team.
          </div>

          <a href="#btech">
            <button className="text-2xl sm:absolute sm:-bottom-96 cursor-pointer italic font-bold text-white flex items-center rounded-md bg-[#F07C00] px-5 py-2 ml-8 mt-7 relative hover:bg-[#b3620c] md:translate-x-8">
              LET'S BEGIN
              <span className="ml-2 text-xl font-extrabold"> &gt;&gt;</span>
            </button>
          </a>

          <div className="w-40  flex justify-between h-fit md:left-1/4 items-center absolute bottom-[80px] sm:-bottom-20 sm:hidden left-[250px]  ">
            <div className="flex justify-center items-center h-4 hover:cursor-pointer">
              <div className=" bg-slate-400  w-8 h-[3px]"></div>
            </div>
            <div
              className="flex justify-center items-center h-4 hover:cursor-pointer"
              onClick={() => {
                props.setCount(1)
              }}
            >
              <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
            </div>
            <div
              className="flex justify-center items-center h-4 hover:cursor-pointer"
              onClick={() => {
                props.setCount(2)
              }}
            >
              <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
            </div>
            <div
              className="flex justify-center items-center h-4 hover:cursor-pointer"
              onClick={() => {
                props.setCount(3)
              }}
            >
              <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/HomePage/herobg1.jpg"
        data-aos="zoom-in"
        data-aos-delay="20"
        className="h-[621px] w-full   object-cover  float-right"
        alt="Hero-Background.png"
        srcSet=""
      />
    </section>
  )
}

export default Hero5
