import React from "react"
import Modal from "../Modal"

const Testimonial = ({children}) => {
  return (
  

//   -------------

<section className="h-[564px] sm:h-fit sm:py-16 bg-[#24346D] mt-20 sm:mt-20  flex justify-center items-center relative overflow-hidden">
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
 {children}

</section>
</section>
  )
}

const DataCard = ({name,position,year,department,videoIframe})=>{
    return(
        <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] ">
        <div className="h-16 sm:h-8 flex w-full justify-between ">
          <div className="flex">
            {/* <img
              src="/images/AboutUs/Avatar.png"
              className="w-16 sm:h-[36px] sm:w-[36px] h-full"
              alt="Avatar.png"
            /> */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-16 sm:h-[36px] text-primary sm:w-[36px] h-full">
      <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
    </svg>
    
    
            <div className="ml-2 sm:ml-1 ">
              <h1 className="text-3xl text-accent font-bold sm:text-base">
                {name}
              </h1>
              <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
                {position}
              </div>
            </div>
          </div>
  

        </div>
       
        <div className="mt-2 sm:mt-4 relative text-justify sm:text-sm text-xl text-accent">
          Academic Year : {year}<br></br>
          Department: {department}
          <br></br>
          <Modal title={`${name}'s Testimonial `} body={        videoIframe          } >
          <button className="absolute sm:relative sm:py-1= sm:my-2 right-0  rounded-full inline-flex px-3 py-2 m-1  shadow-lg bg-orange-500 text-white">
                    <span className="flex-shrink-0 inline-flex item-center mr-2 sm:mr-1 justify-center leading-none bg-orange-300 rounded-full ">
    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd" />
                </svg>
              </span>
              Play Testimonial
          </button>
          </Modal>
        </div>
      </div>
    )
}

Testimonial.DataCard = DataCard;

export default Testimonial
