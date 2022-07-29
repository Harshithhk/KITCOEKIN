import React from "react"

const MissionCards = () => {
  return (
    <section className="mt-16 flex flex-wrap mx-auto justify-between w-[1083px] sm:w-[340px] px-3 sm:p-1 sm:mt-8 min-h-[165px]">
      
      <div className="w-[500px]  h-auto bg-[#FEF6ED] px-9 py-10 rounded-[36px] relative sm:w-[160px]  sm:p-3 sm:rounded-xl ">
        <div className="absolute bg-primary w-16 h-16 rounded-full top-0 right-0 translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6"></div>
        <h1 className="font-bold text-primary text-5xl sm:text-lg">
          Our Mission
        </h1>
        <div className="text-xl  mt-5 sm:text-xs sm:mt-1">
        Technical knowledge, skills and research attitude in the field of Mechanical engineering to fulfill the needs of industry.




        </div>
      </div>

      <div className="w-[500px] h-auto bg-[#FEF6ED] px-9 py-10 rounded-[36px] relative sm:w-[160px]  sm:p-3 sm:rounded-xl ">
        <div className="absolute bg-primary w-16 h-16 rounded-full top-0 right-0 translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6"></div>
        <div className="md:hidden absolute  w-[300px] h-[300px] rounded-full -top-20 -right-16 translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6">
          <img src="/images/dart.png" alt="" className="h-full" />
        </div>
        <h1 className="font-bold text-primary text-5xl sm:text-lg">
          Our Mission
        </h1>
        <div className="text-xl  mt-5 sm:text-xs sm:mt-1">

        Social and ethical values to fulfill the needs of society.


        </div>
      </div>

      

      <div className="w-[500px] mt-14 sm:mt-3  h-auto bg-[#FEF6ED] px-9 py-10 rounded-[36px] relative sm:w-[160px]  sm:p-3 sm:rounded-xl ">
        <div className="absolute bg-primary w-16 h-16 rounded-full top-0 right-0 translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6"></div>
        <h1 className="font-bold text-primary text-5xl sm:text-lg">
          Our Mission
        </h1>
        <div className="text-xl  mt-5 sm:text-xs sm:mt-1">
        Spirit of entrepreneurship for nation building.

      </div>
      </div>
      
    </section>
  )
}

export default MissionCards