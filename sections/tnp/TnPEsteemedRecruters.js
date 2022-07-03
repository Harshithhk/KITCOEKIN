import React from "react"

const TnPEsteemedRecruiters = () => {
  let recruiters = [
    "bg-[url('/images/HomePage/Recruiters/Vector-0.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-1.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-2.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-3.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-4.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-5.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-6.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-7.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-8.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-9.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-10.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-11.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-12.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-13.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-14.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-15.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-16.png')]",
    "bg-[url('/images/HomePage/Recruiters/Vector-17.png')]",
  ]

  let avatars = [
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
    "/images/HomePage/Recruiters/avatar.png",
  ]

  return (
    <section className="p-[50px]   mt-16 bg-slate-100 md:p-[16px] bg-[url('/images/HomePage/Recruiters/Recruiters-bg.png')] bg-cover bg-center bg-no-repeat  ">
      <div className="flex items-center">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
          ESTEEMED RECRUITERS
        </div>
      </div>
      <div className="mt-14 p-11  w-full md:p-[16px] md:mt-0">
        <div className=" grid grid-cols-6 gap-5 h-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-[20px]">
          {recruiters.map((element) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              className={`cursor-pointer place-self-center hover:shadow-2xl hover:w-[190px] md:hover:w-[145px] rounded-[22px] h-[130px] w-[185px] bg-center  bg-no-repeat bg-cover ${element} shadow-sm md:w-[145px] md:h-[105px]`}
            ></div>
          ))}
        </div>

        <section className="p-4 md:p-2 md:bg-[#24346D] md:rounded-xl md:w-[95%] rounded-t-[100px] md:grid-cols-2 lg:grid-cols-3 grid grid-cols-5 gap-5  max-w-[1200px] bg-white mx-auto  mt-24 ">
          {avatars.map((element) => {
            return (
              <div className=" h-fit flex flex-col items-center">
                <div className=" md:h-28 md:w-28 h-40 w-40 overflow-hidden rounded-full ">
                  <img
                    src={element}
                    className="h-full w-full object-cover"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="w-full text-center font-bold mt-2 md:text-white">
                  Aaron
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </section>
  )
}

export default TnPEsteemedRecruiters
