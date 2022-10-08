import React from 'react';

function Hero2(props) {
    return (
        <>
              <img
        src="/images/HomePage/Hero/hero2.png"
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
              Upgrading
              <span className="text-[#F07C00] ml-[13px] italic"> Technology</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              className="h-24  md:h-16 mt-2 w-fit px-9 py-4 md:py-2  md:px-4  text-6xl md:text-5xl  text-[#5C5487]  md:translate-x-0"
            >
              Enriching Skills
            </div>
          </div>

          <div className=" text-xl font-bold text-accent ml-8 w-auto mt-7 md:text-sm md:w-[280px] md:translate-x-0  md:p-1 md:text-center md:text-white">
          We are proud to announce our new programs.
          </div>

       
            
          {/* <a href="#btech">
            <button className="text-2xl cursor-pointer italic font-bold text-white flex items-center rounded-md bg-[#F07C00] px-5 py-2 ml-8 mt-7 relative hover:bg-[#b3620c] md:translate-x-8">
              LET'S BEGIN
              <span className="ml-2 text-xl font-extrabold"> &gt;&gt;</span>
              
            </button>     
          </a> */}
          <div className="flex flex-col  gap-y-4 text-xl text-accent ml-8 w-auto mt-7 md:text-sm md:w-[280px] md:translate-x-0  md:p-1 md:text-center md:text-white">
            <div className='flex'>
           
              <svg xmlns="http://www.w3.org/2000/svg" className='mx-2  h-7 w-7' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>

              <div>
              B.TECH in Computer Science & Engineering<br></br><span className='text-[#F07C00]'> (Artificial Intelligence & Machine Learning)</span>

              </div>
            </div>
            <div className='flex'>
           
              <svg xmlns="http://www.w3.org/2000/svg" className='mx-2  h-7 w-7' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>

              <div>
              B.TECH in Computer Science & Engineering<br></br><span className='text-[#F07C00]'> (Data Science)</span>

              </div>
            </div>
          </div>
            
          <div className="w-40  flex justify-between h-fit md:left-1/4 items-center absolute sm:-bottom-10 bottom-[80px] left-[250px] ">
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(0)}}>
                  <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer">
                  <div className=" bg-slate-400  w-8 h-[3px]"></div>
                </div>
                <div className="flex justify-center items-center h-4 hover:cursor-pointer" onClick={()=>{props.setCount(2)}}>
                  <div className=" bg-slate-300  w-8 h-[2.5px] opacity-50"></div>
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

export default Hero2;