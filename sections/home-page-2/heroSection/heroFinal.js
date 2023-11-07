import React from 'react';
import { useEffect, useState } from 'react';

function HeroFinal(props) {

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
  
  //   React.useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSlideIndex((prevIndex) => (prevIndex + 1) % heros.length);
  //     }, 5000);
  
  //     return () => clearInterval(interval);
  // }, []);

    return (
<div className="relative md:bg-gradient-to-t md:from-slate-100  md:to-transparent md:rounded-bl-[150px] md:bg-opacity-5 overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('/images/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('/images/polygon-bg-element.svg')]">
  <div className="max-w-[85rem] mx-auto mt-4 px-4 py-10  ">

    <div class="-mx-4 flex flex-row">
                <div class=" px-4 w-4/12 flex flex-col items-start justify-center"> 
                <div class="hero-content ">
                    
                    <h1
                    class="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                    >
                    Fostering Your Launchpad for Success <br />
                    {/* Startup Website <br />
                    with TailGrids. */}
                    </h1>
                    <p class="text-body-color mb-8 max-w-[480px] text-base">
                    we are dedicated to nurturing your entrepreneurial journey. 
                    We offer the guidance, mentorship, and resources you need to transform your ideas into thriving ventures. 
                    
                    </p>
                    <ul class="flex flex-wrap items-center">
                    <li>
                        <a
                        href="javascript:void(0)"
                        class="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                        >
                        Get Started
                        </a>
                    </li>
                    <li>
                        <a
                        href="javascript:void(0)"
                        class="text-body-color hover:text-primary inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10"
                        >
                        <span class="mr-2">
                            <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="11" cy="11" r="11" fill="#f07c00" />
                            <rect
                                x="6.90906"
                                y="13.3636"
                                width="8.18182"
                                height="1.63636"
                                fill="white"
                            />
                            <rect
                                x="10.1818"
                                y="6"
                                width="1.63636"
                                height="4.09091"
                                fill="white"
                            />
                            <path
                                d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                                fill="white"
                            />
                            </svg>
                        </span>
                        Partner with us
                        </a>
                    </li>
                    </ul>
                    {/* <div class="clients pt-16">
                    <h6
                        class="text-body-color mb-2 flex items-center text-xs font-normal"
                    >
                        Some Of Our Clients
                        <span class="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                    </h6>
                    <div class="flex items-center">
                        <div class="mr-4 w-full py-3">
                        <img
                            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                            alt="ayroui"
                        />
                        </div>
                        <div class="mr-4 w-full py-3">
                        <img
                            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                            alt="graygrids"
                        />
                        </div>
                        <div class="mr-4 w-full py-3">
                        <img
                            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                            alt="uideck"
                        />
                        </div>
                    </div>
                    </div> */}
                </div>
                </div>
                <div class=" px-4 w-8/12  ">
                <div class="  lg:ml-auto  lg:text-right">
                {heros.map((hero,index)=>{
                    return(
                    <div class={`${index === slideIndex ? 'active' : 'hidden'} rounded-tl-[150px] mx-0 my-0 w-full h-[440px] bg-center bg-cover relative z-10 inline-block pt-11 lg:pt-0 ${hero} `}>
                    
                    <span class="absolute -left-8 -bottom-8 z-[-1]">
                        <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                        </svg>
                    </span>
                    </div>
                    )
                })}
                    
                </div>
                </div>
    </div> 
    
  </div>
</div>
    );
}

export default HeroFinal;