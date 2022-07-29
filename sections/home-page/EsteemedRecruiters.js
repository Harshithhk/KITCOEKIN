import React from "react"

const EsteemedRecruiters = () => {
  let recruiters =  [

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


  return (
    <section className="mt-16 bg-secondary py-4 -mb-20 ">
   
      <div className="ml-20 -mb-20  sm:ml-6 sm:mb-4  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
          ESTEEMED RECRUITERS
      </div>
      
      <section className="p-[50px] py-[160px]   bg-secondary md:p-[16px] bg-[url('/images/tnp/csm_worldmap_5832344b9b.png')]  bg-center bg-no-repeat  ">

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


      </div>
      </section>
      {/* --------- */}
      {/* <div className="w-fit  underline text-[#3D3859] text-lg font-bold italic -mt-24 mx-auto">
          See More {">"}
          {">"}
        </div>

        <section className="flex justify-around mt-24 text-center">
          <div className="flex flex-col items-center w-56 p-1 pb-3 cursor-pointer hover:bg-slate-300 rounded-3xl">
            <div className="h-[135px] md:h-28 bg-no-repeat bg-cover bg-[url('/images/HomePage/Recruiters/Arrow_Circle_Down.svg')]  w-32 md:w-24 md:bg-contain"></div>
            <h2 className="text-[#3D3859] underline text-lg italic font-bold mt-2 md:text-base md:mt-0">
              DOWNLOAD BROCHURE
            </h2>
          </div>
          <div className="flex flex-col items-center w-56 p-1 pb-3 cursor-pointer hover:bg-slate-300 rounded-3xl">
            <div className="h-[135px] md:h-28 bg-no-repeat bg-cover bg-[url('/images/HomePage/Recruiters/Phone.svg')]  w-32 md:w-24 md:bg-contain"></div>
            <h2 className="text-[#3D3859] underline text-lg italic font-bold mt-2  md:text-base md:mt-0">
              ADMISSION ENQUIRY
            </h2>
          </div>
          <div className="flex flex-col items-center w-56 p-1 pb-3 cursor-pointer hover:bg-slate-300 rounded-3xl">
            <div className="h-[135px] md:h-28 bg-no-repeat bg-cover bg-[url('/images/HomePage/Recruiters/Note.svg')]  w-32 md:w-24 md:bg-contain"></div>
            <h2 className="text-[#3D3859] underline text-lg italic font-bold mt-2  md:text-base md:mt-0">
              DTE CODE 6267
            </h2>
          </div>
        </section> */}
      {/* --------- */}
    </section>
  )
}

export default EsteemedRecruiters
