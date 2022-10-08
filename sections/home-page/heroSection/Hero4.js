import React from 'react';

function Hero4(props) {
    return (
        <>
              <img
        src="/images/HomePage/Hero/hero42.png"
        data-aos="zoom-in"
        data-aos-delay="20"
        className="h-[621px]   object-cover float-right"
        alt="Hero-Background.png"
        srcSet=""
      />
      <div className="absolute md:block w-[580px] h-full md:h-[500px] md:w-screen left-[50px] md:left-0 top-0 md:top-auto md:bottom-0  bg-opacity-60 flex  mt-10">
        <div className="mt-8 md:translate-x-0 relative">
          {/* TITLE */}
          <div className="flex flex-col italic font-extrabold md:flex md:justify-center md:items-center">
            <div
              data-aos="zoom-in"
              data-aos-delay="20"
              className=" h-24 md:h-16 w-fit px-9 py-4 md:py-2  md:px-4   text-6xl md:text-5xl flex justify-center items-center  text-[#5C5487] mx-auto  whitespace-nowrap"
            >
              Proudly 
              <span className="text-[#F07C00] ml-[13px] italic"> Hosting</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              className="h-24  md:h-16 mt-2 w-fit px-9 py-4 md:py-2  md:px-4  text-6xl md:text-5xl  text-[#5C5487]  md:translate-x-0"
            >
              
              Smart India 
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              className="h-24  md:h-16 mt-2 w-fit px-9 py-4 md:py-2  md:px-4  text-6xl md:text-5xl  text-[#5C5487]  md:translate-x-0"
            >
              Hackathon 2022 
            </div>
          </div>

          <div className=" text-xl text-accent ml-8 w-auto mt-7 md:text-sm md:w-[280px] md:translate-x-0  md:p-1 md:text-center md:text-white">
          25th & 26th Of August 2022  
          </div>

       
            
          <a href="#btech">
            <button className="text-2xl cursor-pointer italic font-bold text-white flex items-center rounded-md bg-[#F07C00] px-5 py-2 ml-8 mt-7 relative hover:bg-[#b3620c] md:translate-x-8">
              REGISTER
              <span className="ml-2 text-xl font-extrabold"> &gt;&gt;</span>
              
            </button>     
          </a>
          <div className="w-40  flex justify-between h-fit md:left-1/4 items-center absolute bottom-[80px] sm:-bottom-20 left-[250px] ">
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(0)}}>
                  <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(1)}}>
                <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(2)}}>
                  <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer">
                <div className=" bg-slate-400  w-8 h-[3px]"></div>
                </div>
          </div>
       
       
        </div>
      </div>
        </>
    );
}

export default Hero4;