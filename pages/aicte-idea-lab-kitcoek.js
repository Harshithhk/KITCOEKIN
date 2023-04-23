import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"


const AicteIdeaLab = () => {
  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
        <section className="flex flex-col h-[250px] bg-[#F8F7FC] items-center w-full relative">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
            alt=""
          />
          <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
          >
            KOLHAPUR INSTITURE OF TECHNOLOGY&apos;S
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] text-4xl sm:text-xl font-bold text-center text-white z-20"
          >
            COLLEGE OF ENGINEERING (AUTONOMOUS), KOLHAPUR
          </h1>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}

          <div className="flex justify-between sm:flex-col">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Motivation
              </div>
              <div className="mt-10 sm:mt-4 w-fit  text-center text-xl text-accent sm:w-full sm:text-base">
              our experiments should be the guiding principle of the new age learning- Engage, Explore,
               Experience, Express, and Excel. That is,
               students should engage in activities, events and projects according to their interests
               <br></br>
               <br></br>
               <p className="text-slate-400">-Hon’ble PM Sh. Narendra Modi</p>
              </div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Objective
              </div>
              <div className=" items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg  ">
                
                <div className="flex mt-2 mb-2">
                    <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className=" w-[80%] text-left  pl-2 text-primary">
                    Encouraging students for application of science, technology engineering and mathematics (STEM) fundamentals
                    </div>
                    
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                    <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className=" w-[80%] text-left  pl-2 text-primary">
                    Making the engineering students more curious, imaginative and creative; engineering education more engaging
                    </div>
                    
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className=" w-[80%] text-left  pl-2 text-primary">
                    Training in critical thinking, problem-solving, design thinking, collaboration, etc.
                    </div>
                    
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                    <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className=" w-[80%] text-left  pl-2 text-primary">
                    Create IDEA LAB Network (IDEALNET)
                    </div>
                    
                </div>
              
              </div>
            </div>
         
          </div>
        </section>
        
        <section className=" z-30 pt-16 w-[100%] overflow-clip mt-20 mx-auto pb-20 h-fit bg-[#F8F7FC]  sm:pb-10">
        <div className="flex items-center w-full ml-16 sm:ml-4">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
            Infrastructure
            </div>
        </div>
        <section className="relative rounded-3xl z-30 w-[100%] mx-auto pb-20 h-fit bg-[#F8F7FC] sm:p-4">
          
          <div className="flex flex-col items-center sm:flex-col">
           
          <div className=" shadow-lg items-center grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-[#F8F7FC] font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                    <div className="">Department</div>
                    <div className="">Name of Faculty</div>
                    <div className="">Contact Details</div> 
              </div>
        
              <div className="shadow-lg  grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                     {/* row end */}
                     <div className="">Name of Faculty</div>
                     <div className="grid grid-cols-1 divide-y">
                        <div>Apple Lab</div>
                        <div>Apple Lab</div>
                        <div>Apple Lab</div>
                     </div>
                     <div className="grid grid-cols-1 divide-y">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                     </div>
                     {/* row end */}
              </div>
              <div className="shadow-lg  grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                     {/* row end */}
                     <div className="">Name of Faculty</div>
                     <div className="grid grid-cols-1 divide-y">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                     </div>
                     <div className="grid grid-cols-1 divide-y">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                     </div>
                     {/* row end */}
              </div>
              <div className="shadow-lg  grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                     {/* row end */}
                     <div className="">Name of Faculty</div>
                     <div className="grid grid-cols-1 divide-y">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                     </div>
                     <div className="grid grid-cols-1 divide-y">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                     </div>
                     {/* row end */}
              </div>
         
          </div>
          
        </section>
        </section>
        
        <section className="pt-16 -mt-10 -mb-10 overflow-hidden bg-[#F8F7FC] max-w-screen">
      <div className="flex items-center w-full ml-16 sm:ml-4">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
         AICTE Idea Lab Team
        </div>
      </div>
      
      <section className="relative rounded-3xl z-30 w-[100%] mx-auto pb-20 h-fit bg-[#F8F7FC] sm:p-4">
          
          <div className="flex flex-col items-center sm:flex-col">
           
          <div className=" shadow-lg items-center grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-[#F8F7FC] font-semibold text-center rounded-lg sm:w-full justify-between  min-h-[55px] ">  
                    <div className="">Department</div>
                    <div className="">Name of Faculty</div>
                    <div className="">Contact Details</div> 
              </div>
        
              <div className="shadow-lg  grid grid-cols-3 divide-x  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between  min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Dr. Akshay  Thorwat</div>
                     <div >
                        Assoc. Professor and Head,
                        Dept. of Civil and Environmental Engg.
                     </div>
                     <div>Coordinator</div>
                     {/* row end */}
              </div>
              <div className="shadow-lg  grid grid-cols-3 divide-x  w-[1100px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full justify-between   min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Dr. Akshay  Thorwat</div>
                     <div >
                        Assoc. Professor and Head,
                        Dept. of Civil and Environmental Engg.
                     </div>
                     <div>Coordinator</div>
                     {/* row end */}
              </div><div className="shadow-lg  grid grid-cols-3 divide-x  w-[1100px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full justify-between min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Dr. Akshay  Thorwat</div>
                     <div >
                        Assoc. Professor and Head,
                        Dept. of Civil and Environmental Engg.
                     </div>
                     <div>Coordinator</div>
                     {/* row end */}
              </div><div className="shadow-lg  grid grid-cols-3 divide-x  w-[1100px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full justify-between   min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Dr. Akshay  Thorwat</div>
                     <div >
                        Assoc. Professor and Head,
                        Dept. of Civil and Environmental Engg.
                     </div>
                     <div>Coordinator</div>
                     {/* row end */}
              </div>
         
          </div>
          
        </section>
    </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default AicteIdeaLab
