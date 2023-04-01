import React from "react"

const MissionCards = () => {
  return (
    <section className="mt-16 flex flex-wrap mx-auto gap-y-14 justify-between w-[1083px] sm:w-auto px-3 sm:p-0 sm:mt-8 min-h-[165px]">
      <div className="w-[500px] h-auto bg-[#FEF6ED] px-9 py-10 rounded-[36px] relative sm:w-[165px] sm:h-fit sm:p-3 sm:rounded-xl min-h-[215px]">
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-primary translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6"></div>
        <h1 className="text-5xl font-bold text-primary sm:text-lg">
          Our Mission
        </h1>
        <div className="mt-5 text-xl sm:text-xs sm:mt-1">
        Facilitating alumni networking and relationships, promoting personal and professional growth.
 <br />
          <br />
        </div>
      </div>

      <div className="w-[500px] h-auto bg-[#FEF6ED] px-9 py-10 rounded-[36px] relative sm:w-[165px] sm:h-fit sm:p-3 sm:rounded-xl min-h-[215px]">
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-primary translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6"></div>
        <div className="md:hidden absolute  w-[300px] h-[300px] rounded-full -top-20 -right-16 translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6">
          <img
            data-aos="zoom-in"
            data-aos-delay="0"
            src="/images/dart.png"
            alt=""
            className="h-full"
          />
        </div>
        <h1 className="text-5xl font-bold text-primary sm:text-lg">
          Our Mission
        </h1>
        <div className="mt-5 text-xl sm:text-xs sm:mt-1">
          Providing professional development resources, workshops, and mentorship opportunities <br /> <br />
        </div>
      </div>

      <div className="w-[500px] h-auto bg-[#FEF6ED] px-9 py-10 rounded-[36px] relative sm:w-[165px] sm:h-fit sm:p-3 sm:rounded-xl min-h-[215px]">
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-primary translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6"></div>
        <h1 className="text-5xl font-bold text-primary sm:text-lg">
          Our Mission
        </h1>
        <div className="mt-5 text-xl sm:text-xs sm:mt-1">
        Encouraging social responsibility and community engagement through volunteer work and philanthropy <br />
          <br />
        </div>
      </div>

      <div className="w-[500px] h-auto bg-[#FEF6ED] px-9 py-10 rounded-[36px] relative sm:w-[165px] sm:h-fit sm:p-3 sm:rounded-xl min-h-[215px]">
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-primary translate-x-1/3 -translate-y-1/3 sm:-translate-x-0 sm:-translate-y-1/3 sm:w-6 sm:h-6"></div>
        <h1 className="text-5xl font-bold text-primary sm:text-lg">
          Our Mission
        </h1>
        <div className="mt-5 text-xl sm:text-xs sm:mt-1">
        Fostering institutional ties and supporting student initiatives.


<br />
          <br />
        </div>
      </div>
    </section>
  )
}

export default MissionCards