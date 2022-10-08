import React from 'react';

function Hero3(props) {
    return (
        <>
              <img
        src="/images/HomePage/Hero/hero3.png"
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
              Six Reasons TO Choose
              {/* <span className="text-[#F07C00] ml-[13px] italic"> Technology</span> */}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              className="h-24  md:h-16 mt-2 w-fit px-9 py-4 md:py-2  md:px-4  text-6xl md:text-5xl  text-[#5C5487]  md:translate-x-0"
            >
              
              <span className='text-[#F07C00] '>KIT</span> Engineering
            </div>
          </div>

          <div className="flex flex-col gap-y-2 text-xl text-accent ml-8 w-auto mt-7 md:text-sm md:w-[280px] md:translate-x-0  md:p-1 md:text-center md:text-white">
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='mx-2 text-[#F07C00] h-7 w-7' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Visionary Industrialist's College
            </div>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='mx-2 text-[#F07C00] h-7 w-7' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Great Placement Record and Support

            </div>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='mx-2 text-[#F07C00] h-7 w-7' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Faculty with Rich Experience

            </div>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='mx-2 text-[#F07C00] h-7 w-7' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Industry Integrated Up-to-Date Curriculum
            </div>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='mx-2 text-[#F07C00] h-7 w-7' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Vibrant Campus Life
            </div>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='mx-2 text-[#F07C00] h-7 w-7' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              State-of-the-art infrastructure
            </div>
          </div>

       
            
          {/* <a href="#btech">
            <button className="text-2xl cursor-pointer italic font-bold text-white flex items-center rounded-md bg-[#F07C00] px-5 py-2 ml-8 mt-7 relative hover:bg-[#b3620c] md:translate-x-8">
              LET'S BEGIN
              <span className="ml-2 text-xl font-extrabold"> &gt;&gt;</span>
              
            </button>     
          </a> */}
          <div className="w-40  flex justify-between h-fit md:left-1/4 items-center absolute bottom-[80px] sm:-bottom-20 left-[250px] ">
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(0)}}>
                  <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(1)}}>
                <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" >
                <div className=" bg-slate-400  w-8 h-[3px]"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(3)}}>
                  <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
                </div>
          </div>
       
       
        </div>
      </div>
        </>
    );
}

export default Hero3;