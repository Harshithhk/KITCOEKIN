import React from "react"

const Testimonials = () => {
  return (
    <section className="h-[564px] bg-[#24346D] mt-20  flex justify-center items-center relative">
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-24 h-24 absolute top-[17.5%] left-[35%] z-10"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-32 h-32 absolute top-[15%] left-[5%] z-10"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-40 h-40 absolute top-[50%] left-[50%] z-10"
        alt=""
      />
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10"
        alt=""
      />

      <section className="h-[250px] flex z-20">
        {/* Card */}
        <div className="h-full mr-11 w-[420px] bg-white p-4 rounded-[30px]">
          <div className="h-16 flex w-full justify-between ">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 h-full"
                alt="Avatar.png"
              />
              <div className="ml-2">
                <h1 className="text-3xl text-accent font-bold">
                  Rushikesh Patil
                </h1>
                <div className="text-base text-[#6A6A6A]">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2 text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
        {/* Card */}
        <div className="h-full w-[420px] bg-white p-4 rounded-[30px] mr-11">
          <div className="h-16 flex w-full justify-between">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 h-full"
                alt="Avatar.png"
              />
              <div className="ml-2">
                <h1 className="text-3xl font-bold text-accent">
                  Rushikesh Patil
                </h1>
                <div className="text-base text-[#6A6A6A]">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2 text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
        {/* Card */}
        <div className="h-full w-[420px] bg-white p-4 rounded-[30px]">
          <div className="h-16 flex w-full justify-between">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 h-full"
                alt="Avatar.png"
              />
              <div className="ml-2">
                <h1 className="text-3xl font-bold text-accent">
                  Rushikesh Patil
                </h1>
                <div className="text-base text-[#6A6A6A]">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2 text-xl text-accent">
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
