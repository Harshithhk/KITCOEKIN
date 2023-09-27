import React from 'react';
import { useEffect, useState } from 'react';

function Hero6(props) {

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
<div class="relative md:bg-gradient-to-t md:from-slate-100  md:to-transparent md:rounded-bl-[150px] md:bg-opacity-5 overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('/images/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('/images/polygon-bg-element.svg')]">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10  ">
    <div class="max-w-2xl text-center mx-auto">

        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div class="flex justify-center">
            <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 " href="https://api.whatsapp.com/send?phone=+917030861199">
                Admission enquiry - <span className='text-green-600'>WhatsApp</span>
                <span class="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 ">
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                
                </span>
            </a>
            </div>

            <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1 class="block font-bold text-basic md:text-5xl text-6xl ">
                Let's Build
                <span class="bg-clip-text bg-gradient-to-tl from-orange-300 to-orange-600 text-transparent"> Together</span>
            </h1>
            </div>

            <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 md:text-base ">An institute established in May 1983, KITCOEK(Autonomous) reflects the vision of leading industrialists and educationalists</p>
            </div>

        

            <div class="mt-5 flex justify-center items-center gap-x-1 ">
            <span class="text-sm text-gray-600 ">Notice Board:</span>
            <span class="text-sm font-bold text-gray-900 ">new</span>
            <svg class="h-5 w-5 text-gray-300 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
            </svg>
            <a  class="inline-flex items-center gap-x-1.5 text-sm text-primary decoration-2 hover:underline font-medium" href="/notice">
            Stay Notified
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </a>
            </div>
        </div>

    </div>

    <div class="mt-10 relative mhds:hidden max-w-5xl mx-auto">
        {heros.map((hero,index)=>{
            return <div class={` ${index === slideIndex ? 'active' : 'hidden'}  w-full object-cover h-96 sm:h-[480px] ${hero} bg-no-repeat bg-center bg-cover rounded-xl`}></div>
        })}
      {/* <div class="absolute inset-0 w-full h-full">
        <div class="flex flex-col justify-center items-center w-full h-full">
          <a class="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black" href="#">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>
            Play the overview
          </a>
        </div>
      </div> */}

      <div class="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg ">
        <div class="bg-white w-48 h-48 rounded-lg "></div>
      </div>

      <div class="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div class="bg-white w-48 h-48 rounded-full "></div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Hero6;