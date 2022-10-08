import React from "react"

const TnPEsteemedRecruiters = () => {
  let recruiters = [

    "bg-[url('/images/recruiters/recruiters-01.png')]",
    "bg-[url('/images/recruiters/recruiters-02.png')]",
    "bg-[url('/images/recruiters/recruiters-03.png')]",
    "bg-[url('/images/recruiters/recruiters-04.png')]",
    "bg-[url('/images/recruiters/recruiters-05.png')]",
    "bg-[url('/images/recruiters/recruiters-06.png')]",
    "bg-[url('/images/recruiters/recruiters-07.png')]",
    "bg-[url('/images/recruiters/recruiters-08.png')]",
    "bg-[url('/images/recruiters/recruiters-09.png')]",
    "bg-[url('/images/recruiters/recruiters-10.png')]",
    "bg-[url('/images/recruiters/recruiters-11.png')]",
    "bg-[url('/images/recruiters/recruiters-12.png')]",
    "bg-[url('/images/recruiters/recruiters-13.png')]",
    "bg-[url('/images/recruiters/recruiters-14.png')]",
    "bg-[url('/images/recruiters/recruiters-15.png')]",
    "bg-[url('/images/recruiters/recruiters-16.png')]",
    "bg-[url('/images/recruiters/recruiters-17.png')]",
    "bg-[url('/images/recruiters/recruiters-18.png')]",
  ]

  // let avatars = [
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  //   "/images/recruiters/recruiters-01.png
  // ]
  let avatars = [
    "/images/TnP/vp.jpg",
    "/images/TnP/gc.jpg",
    "/images/TnP/pg.jpg",
    "/images/TnP/vp.jpg",
    "/images/TnP/pg.jpg",
    "/images/TnP/gc.jpg",
    "/images/TnP/vp.jpg",
    "/images/TnP/pg.jpg",
    "/images/TnP/gc.jpg",
    "/images/TnP/vp.jpg",
  ]

  return (
  <section className="-mt-10 bg-secondary py-4 -mb-20 ">
   
            <div className="ml-20 -mb-20  sm:ml-6 sm:mb-4  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                ESTEEMED RECRUITERS
              </div>
    <section className="p-[50px] py-[160px]   bg-secondary md:p-[16px] bg-[url('/images/TnP/csm_worldmap_5832344b9b.png')]  bg-center bg-no-repeat  ">
     
      <div className=" p-11  w-full md:p-[16px] md:mt-0">
        <div className=" grid grid-cols-6 gap-5 divide-x-2 divide-y-2 backdrop-blur-[.5px] sm:backdrop-blur-0  h-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-[20px]">
          {recruiters.map((element,index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay="0"
              className={`cursor-pointer place-self-center  hover:shadow-2xl hover:w-[190px] md:hover:w-[145px] rounded-[22px] h-[130px] w-[185px] bg-center  bg-no-repeat bg-cover ${element} shadow-sm md:w-[145px] md:h-[105px]`}
            ></div>
          ))}
        </div>

        {/* <section className="p-4 md:p-2 md:bg-[#24346D] md:rounded-xl md:w-[95%] rounded-t-[100px] md:grid-cols-2 lg:grid-cols-3 grid grid-cols-5 gap-5  max-w-[1200px] bg-white mx-auto  mt-24 ">
          {avatars.map((element) => {
            return (
              <div className=" h-fit flex flex-col items-center">
                <div className=" md:h-28 md:w-28 h-40 w-40 overflow-hidden rounded-full ">
                  <img
                    src={element}
                    className="h-full w-full object-cover"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="w-[70%] text-center font-bold mt-2 md:text-white">
                  Mr. Vinay S. Prabhavalkar{" "}
                </div>
              </div>
            )
          })}
        </section> */}
      </div>
    </section>
    </section>
  )
}

export default TnPEsteemedRecruiters
