import Image from "next/image"

const HeroSectionUpdated = () => {
  return (
    <section className=" h-[621px] md:h-[calc(100vh-88px)] w-full overflow-hidden  relative mb-4  md:mb-0 md:overflow-hidden">
      <img
        src="/images/HomePage/herobg1.png"
        data-aos="zoom-in"
        data-aos-delay="20"
        className="h-[621px]   object-cover float-right"
        alt="Hero-Background.png"
        srcSet=""
      />
      <div className="absolute md:block w-[580px] h-full md:h-[500px] md:w-screen left-[50px] md:left-0 top-0 md:top-auto md:bottom-0  bg-opacity-60 flex  mt-10">
        <div className="mt-8 md:translate-x-0">
          {/* TITLE */}
          <div className="flex flex-col italic font-extrabold md:flex md:justify-center md:items-center">
            <div
              data-aos="zoom-in"
              data-aos-delay="20"
              className="bg-slate-50 h-24 md:h-16 w-fit px-9 py-4 md:py-2  md:px-4   text-7xl md:text-5xl flex justify-center items-center  text-[#5C5487] mx-auto  whitespace-nowrap"
            >
              What Will
              <span className="text-[#F07C00] ml-[13px] italic"> KIT</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              className="bg-slate-50 h-24  md:h-16 mt-2 w-fit px-9 py-4 md:py-2  md:px-4  text-7xl md:text-5xl  text-[#5C5487]  md:translate-x-0"
            >
              Start In You
            </div>
          </div>

          <div className=" text-lg text-accent ml-8 w-auto mt-7 md:text-sm md:w-[280px] md:translate-x-0  md:p-1 md:text-center md:text-white">
            Et dolor sed sed leo eget leo turpis id. Vel viverra id velit, in
            feugiat et feugiat. Quisque amet pulvinar urna lacus, risus
            tincidunt. Sollicitudin diam integer sagittism
          </div>

          <button className="text-2xl cursor-pointer italic font-bold text-white flex items-center bg-[#F07C00] px-5 py-2 ml-8 mt-7 relative hover:bg-[#b3620c] md:translate-x-8">
            LET'S BEGIN
            <span className="ml-2 text-xl font-extrabold"> &gt;&gt;</span>
            <div className="w-28  flex justify-between h-fit md:left-1/4 items-center absolute bottom-[-40px] left-[50%] ">
              <div className=" bg-slate-50  w-8 h-[3px]"></div>
              <div className=" bg-slate-50  w-8 h-[2.5px] opacity-50"></div>
              <div className=" bg-slate-50  w-8 h-[2.5px] opacity-50"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionUpdated
