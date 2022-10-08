import React from "react";

const PlacementTeam = () => {
    let placementTeam = [
        {
          name: "Mr. Rutuparna P. Karkare",
          designation: "Biotechnology Engineering",
          img: "/images/TnP/placementTeam/r-p-karkare.jpg",
        },
        {
          name: "Mr. Guruprasad A. Chavan",
          designation: "Civil Engineering",
          img: "/images/TnP/placementTeam/guruprasad-chavan.jpg ",
        },
        {
          name: "Mr Chaitanya B. Pednekar ",
          designation: "Computer Science Engineering",
          img: "/images/TnP/placementTeam/chaitnya-b-pednekar.jpg",
        },
        {
          name: "Mr. Vivek K. Desai",
          designation: "Electronics Engineering",
          img: "/images/TnP/placementTeam/vivek-desai.jpg",
        },
      
        {
          name: "Mr. E. C. Patil",
          designation: "Electronics & Telecommunication Engineering",
          img: "/images/TnP/placementTeam/e-c-patil.jpg",
        },
        {
          name: "Mr. Vinay S. Prabhavalkar",
          designation: "Computer Science Engineering",
          img: "/images/TnP/placementTeam/vijay-s-prabhavlkar.jpg",
        },
        {
          name: "Mr. Pravin S.Gosavi",
          designation: "Mechanical Engineering",
          img: "/images/TnP/placementTeam/pravin-gosavi.jpg",
        },
        {
          name: "Mr. Ashish T. Patil ",
          designation: "Mechanical Engineering",
          img: "/images/TnP/placementTeam/ashish-patil.jpg",
        },
        {
            name: "Mr. Bharat C. Ingavale ",
            designation: "Environment Engineering  ",
            img: "/images/TnP/placementTeam/bharat-ingavale.jpg",
          }
      ]

    let OurStaff = [
        {
            name: "Mr.Arun S. Aswale",
            designation: "Laboratory Assistant",
            img: "/images/TnP/placementTeam/arun-aswale.jpg",
        },
        {
            name: "Mr. Tanaji Patil",
            designation: "Peon",
            img: "/images/TnP/placementTeam/tanaji-patil.jpg",
        },
    ]
    return(
        <section className="relative  z-30 w-full mx-auto pt-16 sm:pt-14 sm:-mt-2 pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
         
        <div className="flex items-center w-full sm:ml-2">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center sm:text-xl   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
            OUR VALUABLE TEAM MEMBERS
            </div>
          </div>
          <div className=" text-slate-400 text-xl sm:text-base  mt-12 text-right px-16 sm:px-2 shadow-lg w-fit rounded-lg h-16 items-center justify-center flex">Department Level Coordinators</div>
          <div className="flex flex-wrap  justify-center w-full mt-16 gap-x-16 gap-y-16 sm:mt-14 sm:gap-x-7 sm:gap-y-7">
            {placementTeam.map((image,index) => (
              <div  key={index} className="z-30 w-[190px] h-fit sm:w-[120px] flex flex-col items-center justify-center  rounded-lg overflow-hidden ">
                <img
               
                  src={image.img}
                  className="w-full h-fit sm:h-fit"
                  alt={image.img}
                />
                <div className="mx-auto text-lg font-semibold text-center py-2  sm:text-xs text-accent">
                  {image.name}
                </div>
                <div className="bg-primary w-10 h-[2px]   rounded-xl"></div>
                <h2 className="mx-auto text-base text-center py-2 w-fit text-accent-light sm:text-[11px]">
                  {image.designation}
                </h2>
              </div>
            ))}
          </div>
          <div className=" text-slate-400 text-xl sm:text-base  mt-12 text-right px-16 sm:px-2 shadow-lg w-fit rounded-lg h-16 items-center justify-center flex">Our Staff</div>
          <div className="flex flex-wrap  justify-center  w-full mt-16 gap-x-16 gap-y-16 sm:mt-14 sm:gap-x-7 sm:gap-y-7">
            {OurStaff.map((image,index) => (
              <div  key={index} className="z-30 w-[190px] h-fit sm:w-[120px] flex flex-col items-center justify-center  rounded-lg overflow-hidden ">
                <img
               
                  src={image.img}
                  className="w-full h-fit sm:h-fit"
                  alt={image.img}
                />
                <div className="mx-auto text-lg font-semibold text-center py-2  sm:text-xs text-accent">
                  {image.name}
                </div>
                <div className="bg-primary w-10 h-[2px]   rounded-xl"></div>
                <h2 className="mx-auto text-base text-center py-2 w-fit text-accent-light sm:text-[11px]">
                  {image.designation}
                </h2>
              </div>
            ))}
          </div>
        </section>
    )

};

export default PlacementTeam;