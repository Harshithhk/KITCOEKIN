import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Hero1(props) {

  const [slideIndex, setSlideIndex] = React.useState(3);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : heros.length - 1);
    } else {
      setSlideIndex(slideIndex < heros.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const heros = [
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-71.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-72.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-73.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-74.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-75.jpg"
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % heros.length);
    }, 5000);

    return () => clearInterval(interval);
}, []);

  return (
    <>
     <img
        src="/images/HomePage/herobg1.jpg"
        data-aos="zoom-in"
        data-aos-delay="20"
        className="h-[621px] md:block 3xl:hidden 2xl:hidden   object-cover  float-right"
        alt="Hero-Background.png"
        srcSet=""
      />
      <div className=" rounded-tl-full md:hidden 2xl:block  float-right bg-[#edebf7] w-2/3 h-full">
        <div className="flex justify-between items-center ">
          <button onClick={() => handleClick('left')} className="absolute left-5 top-1/2 sm:top-40  h-fit transform -translate-y-1/2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 rounded-full opacity-10 2xl:opacity-80 hover:bg-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={() => handleClick('right')} className="absolute right-5 z-30 top-1/2 sm:top-40 h-fit transform -translate-y-1/2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 rounded-full opacity-10 2xl:opacity-80 hover:bg-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg> </button>
        </div>
        <div className="absolute right-96  "><span className=" animate-wiggle2 grid grid-cols-7 gap-4 ">
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-black"></span>        
            </span>
        </div>
        
        {heros.map((hero, index) => (
          <div key={index} className={` animate-wiggle2 z-20 block   mt-20   h-[600px]  ${index === slideIndex ? 'active' : 'hidden'}`}>
            <img data-aos="zoom-in"
                data-aos-delay="20" 
                src={hero} 
                className=" rounded-lg pt-28 " alt="" />
          </div>
        ))}
      </div>

      <div className="absolute md:block  w-1/3 h-full md:h-[500px] md:w-screen left-[50px] md:left-0 -top-10 md:top-auto md:bottom-0  bg-opacity-60 flex  mt-10">
        <div className="mt-8 md:translate-x-0 relative">
          {/* TITLE */}
          <div className="sm:hidden flex flex-col italic font-extrabold md:flex md:justify-center md:items-center">
            <div
              data-aos="zoom-in"
              data-aos-delay="20"
              className=" h-20 md:h-16 w-fit px-9 py-4 md:py-2  md:px-4   text-6xl md:text-5xl flex justify-center items-center  text-[#5C5487] mx-auto  whitespace-nowrap"
            >
              What Will
              <span className="text-[#F07C00] ml-[13px] italic"> KITCOEK</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              className="h-20  md:h-16 mt-2 w-fit px-9 py-4 md:py-2  md:px-4  text-6xl md:text-5xl  text-[#5C5487]  md:translate-x-0"
            >
              Start In You
            </div>
          </div>

          <div className="sm:hidden text-base bg-opacity-60 rounded-xl bg-white text-accent ml-8 text-justify w-[50%] mt-7 md:text-sm md:w-[280px] md:translate-x-0  md:p-1 md:text-center md:text-white">
            A degree will give you the opportunity to develop transferable
            skills such as communication and problem-solving skills, while
            enhancing their ability to work as part of a team.
          </div>

          <a href="#btech">
            <button className="text-2xl sm:absolute sm:-bottom-96 cursor-pointer italic font-bold text-white flex items-center rounded-md bg-[#F07C00] px-5 py-2 ml-8 mt-7 relative hover:bg-[#b3620c] md:translate-x-8">
              LET'S BEGIN
              <span className="ml-2 text-xl font-extrabold"> &gt;&gt;</span>
            </button>
          </a>

          <div className="w-40  flex justify-between h-fit md:left-1/4 items-center absolute bottom-[80px] sm:-bottom-20 sm:hidden left-[120px]  ">
            <div
              className={` flex justify-center items-center h-4 hover:cursor-pointer`}
              onClick={() => {
                setSlideIndex(0)
              }}
            >
              <div className={`${slideIndex == 0 ? "bg-slate-600":"bg-slate-300" }  w-6 h-[2.5px] opacity-50`} ></div>
            </div>
            <div
              className={` flex justify-center items-center h-4 hover:cursor-pointer`}
              onClick={() => {
                setSlideIndex(1)
              }}
            >
              <div className={`${slideIndex == 1 ? "bg-slate-600":"bg-slate-300" }  w-6 h-[2.5px] opacity-50`} ></div>
            </div>
            <div
              className={` flex justify-center items-center h-4 hover:cursor-pointer`}
              onClick={() => {
                setSlideIndex(2)
              }}
            >
              <div className={`${slideIndex == 2 ? "bg-slate-600":"bg-slate-300" }  w-6 h-[2.5px] opacity-50`} ></div>
            </div>
            <div
              className={` flex justify-center items-center h-4 hover:cursor-pointer`}
              onClick={() => {
                setSlideIndex(3)
              }}
            >
              <div className={`${slideIndex == 3 ? "bg-slate-600":"bg-slate-300" }  w-6 h-[2.5px] opacity-50`} ></div>
            </div>
            <div
              className={` flex justify-center items-center h-4 hover:cursor-pointer`}
              onClick={() => {
                setSlideIndex(4)
              }}
            >
              <div className={`${slideIndex == 4 ? "bg-slate-600":"bg-slate-300" }  w-6 h-[2.5px] opacity-50`} ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero1
