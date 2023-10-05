import React from 'react';
import { useEffect, useState } from 'react';

function Hero4(props) {

    const [slideIndex, setSlideIndex] = React.useState(3);

    const handleClick = (direction) => {
      if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : heros.length - 1);
      } else {
        setSlideIndex(slideIndex < heros.length - 1 ? slideIndex + 1 : 0);
      }
    };
  
    const heros = [
        "bg-[url('/images/HomePage/Hero/kit-college-of-engineering-kolhapur-71.jpg')]",
        "bg-[url('/images/HomePage/Hero/kit-college-of-engineering-kolhapur-72.jpg')]",
        "bg-[url('/images/HomePage/Hero/kit-college-of-engineering-kolhapur-73.jpg')]",
        "bg-[url('/images/HomePage/Hero/kit-college-of-engineering-kolhapur-74.jpg')]",
        "bg-[url('/images/HomePage/Hero/kit-college-of-engineering-kolhapur-75.jpg')]",
    ]
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % heros.length);
      }, 5000);
  
      return () => clearInterval(interval);
  }, []);

    return (
<div className="relative overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="max-w-2xl text-center mx-auto">
      {/* <h1 className="block text-5xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">What will KITCOEK Start In  <span className="text-blue-600"></span></h1>
       */}
      <h2 className="cpcm4 c9ob6 c08o3 text-basic">What will<span className="text-primary"> KITCoEK </span> start in you</h2>

      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Build your business here. Take it anywhere.</p>
    </div>

    <div className="mt-10 relative max-w-5xl mx-auto">
        {heros.map((hero,index)=>{
            return <div className={` ${index === slideIndex ? 'active' : 'hidden'} w-full object-cover h-96 sm:h-[480px] ${hero} bg-no-repeat bg-center bg-cover rounded-xl`}></div>
        })}
      {/* <div className="absolute inset-0 w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <a className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black" href="#">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>
            Play the overview
          </a>
        </div>
      </div> */}

      <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
        <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
      </div>

      <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Hero4;