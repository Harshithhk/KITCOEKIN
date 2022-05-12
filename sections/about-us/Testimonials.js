import React from "react"

const Testimonials = () => {
  return (
    <section className="h-[564px] sm:h-fit sm:py-16 bg-[#24346D] mt-20 sm:mt-8  flex justify-center items-center relative overflow-hidden">
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-24 h-24 absolute top-[17.5%] left-[35%] z-10 sm:w-16 sm:h-16 sm:top-[10%] sm:left-[70%]"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-32 h-32 absolute top-[15%] left-[5%] z-10 sm:w-20 sm:h-20"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-40 h-40 absolute top-[50%] left-[50%] z-10 sm:w-28 sm:h-28"
        alt=""
      />
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
        alt=""
      />

      <section className="h-[250px] flex  z-20 sm:h-fit">
        {/* Card */}
        <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] sm:opacity-50">
          <div className="h-16 sm:h-8 flex w-full justify-between ">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 sm:h-[36px] sm:w-[36px] h-full"
                alt="Avatar.png"
              />
              <div className="ml-2 sm:ml-1 ">
                <h1 className="text-3xl text-accent font-bold sm:text-base">
                  Rushikesh Patil
                </h1>
                <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 sm:h-8 sm:w-8 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2  sm:text-sm text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
        {/* Card */}
        <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] ">
          <div className="h-16 sm:h-8 flex w-full justify-between ">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 sm:h-[36px] sm:w-[36px] h-full"
                alt="Avatar.png"
              />
              <div className="ml-2 sm:ml-1 ">
                <h1 className="text-3xl text-accent font-bold sm:text-base">
                  Rushikesh Patil
                </h1>
                <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 sm:h-8 sm:w-8 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2  sm:text-sm text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
        {/* Card */}
        <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] sm:opacity-50">
          <div className="h-16 sm:h-8 flex w-full justify-between ">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 sm:h-[36px] sm:w-[36px] h-full"
                alt="Avatar.png"
              />
              <div className="ml-2 sm:ml-1 ">
                <h1 className="text-3xl text-accent font-bold sm:text-base">
                  Rushikesh Patil
                </h1>
                <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 sm:h-8 sm:w-8 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2  sm:text-sm text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
      </section>
    </section>
  )
}

export default Testimonials
