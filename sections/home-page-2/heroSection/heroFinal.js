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
<div className="relative md:bg-gradient-to-t  md:from-slate-100 py-14 md:to-transparent md:rounded-bl-[150px] md:bg-opacity-5 overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('/images/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('/images/polygon-bg-element.svg')]">
  <div className="max-w-[85rem] mx-auto mt-4 px-4 py-10  ">

    <div class="-mx-4 flex flex-row  sm:flex-col-reverse sm:-mt-20  ">
                <div class=" px-4  sm:w-full w-4/12 z-[11]  flex flex-col items-start justify-center"> 
                <div class="hero-content ">
                    
                <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-basic md:text-5xl text-6xl bg-white bg-opacity-25 rounded-xl ">
                KITCOEK 
                <span className="bg-clip-text bg-gradient-to-tl from-orange-300 to-orange-600 text-transparent"> (Autonomous)</span>
            </h1>
            </div>

            <div className="mt-5 mb-8 max-w-3xl text-center mx-auto mr-3">
            <p className="text-lg text-gray-600 md:text-base bg-white bg-opacity-30 rounded-xl">An institute established in May 1983, KITCOEK(Autonomous) reflects the vision of leading industrialists and educationalists</p>
            </div>  
                    {/* <p class="text-body-color mb-8 max-w-[480px] text-base">
                    An institute established in May 1983, KITCOEK(Autonomous) reflects the vision of leading industrialists and educationalists
                    
                    </p> */}
                    <ul class="flex flex-col items-center">
                    <li>
                    <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 " href="https://api.whatsapp.com/send?phone=+917030861199">
                Admission enquiry - <span className='text-green-600'>WhatsApp</span>
                <span className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 ">
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                
                </span>
            </a>
            </div>
                    </li>
                    <li>
                    <div className="mt-5 flex justify-center items-center gap-x-1 ">
                        <span className="text-sm text-gray-600 ">Notice Board:</span>
                        <span className="text-sm font-bold text-gray-900 ">new</span>
                        <svg className="h-5 w-5 text-gray-300 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round"/>
                        </svg>
                        <a  className="inline-flex items-center gap-x-1.5 text-sm text-primary decoration-2 hover:underline font-medium" href="/notice">
                            Stay Notified
                            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </a>
                    </div>
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
                <div class=" px-4 w-8/12  sm:w-full sm:py-4 ">
                <div class="  lg:ml-auto  lg:text-right">
                {heros.map((hero,index)=>{
                    return(
                        // rounded-tl-[150px]
                    <div class={`${index === slideIndex ? 'active' : 'hidden'} rounded-xl mx-0 my-0 w-full h-[380px] sm:px-2 sm:h-[170px] bg-center bg-cover relative z-10 inline-block pt-11 lg:pt-0 ${hero} `}>
                    
                    <span class="absolute mhds:hidden -left-8 -bottom-8 z-[-1]">
                        <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        
                        >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#F07C00" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#F07C00" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#F07C00" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#F07C00" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#F07C00" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#F07C00" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#F07C00" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#F07C00" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#F07C00" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#F07C00" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#F07C00" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#F07C00" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#F07C00" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#F07C00" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#F07C00" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#F07C00" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#F07C00" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#F07C00" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#F07C00" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#F07C00" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#F07C00" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#F07C00" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#F07C00" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#F07C00" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#F07C00" />
                        </svg>
                    </span>
                    </div>
                    )
                })}
                    <div className="absolute top-0 right-0 z-[-1] mhds:hidden opacity-30 lg:opacity-100">
                        <svg
                            width="450"
                            height="556"
                            viewBox="0 0 450 556"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                            cx="277"
                            cy="63"
                            r="225"
                            fill="url(#paint0_linear_25:217)"
                            />
                            <circle
                            cx="17.9997"
                            cy="182"
                            r="18"
                            fill="url(#paint1_radial_25:217)"
                            />
                            <circle
                            cx="76.9997"
                            cy="288"
                            r="34"
                            fill="url(#paint2_radial_25:217)"
                            />
                            <circle
                            cx="325.486"
                            cy="302.87"
                            r="180"
                            transform="rotate(-37.6852 325.486 302.87)"
                            fill="url(#paint3_linear_25:217)"
                            />
                            <circle
                            opacity="0.8"
                            cx="184.521"
                            cy="315.521"
                            r="132.862"
                            transform="rotate(114.874 184.521 315.521)"
                            stroke="url(#paint4_linear_25:217)"
                            />
                            <circle
                            opacity="0.8"
                            cx="356"
                            cy="290"
                            r="179.5"
                            transform="rotate(-30 356 290)"
                            stroke="url(#paint5_linear_25:217)"
                            />
                            <circle
                            opacity="0.8"
                            cx="191.659"
                            cy="302.659"
                            r="133.362"
                            transform="rotate(133.319 191.659 302.659)"
                            fill="url(#paint6_linear_25:217)"
                            />
                            <defs>
                            <linearGradient
                                id="paint0_linear_25:217"
                                x1="-54.5003"
                                y1="-178"
                                x2="222"
                                y2="288"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient
                                id="paint1_radial_25:217"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                            >
                                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
                            </radialGradient>
                            <radialGradient
                                id="paint2_radial_25:217"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                            >
                                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
                            </radialGradient>
                            <linearGradient
                                id="paint3_linear_25:217"
                                x1="226.775"
                                y1="-66.1548"
                                x2="292.157"
                                y2="351.421"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_25:217"
                                x1="184.521"
                                y1="182.159"
                                x2="184.521"
                                y2="448.882"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_25:217"
                                x1="356"
                                y1="110"
                                x2="356"
                                y2="470"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint6_linear_25:217"
                                x1="118.524"
                                y1="29.2497"
                                x2="166.965"
                                y2="338.63"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 z-[-1] opacity-60 mhds:hidden lg:opacity-100">
                    <svg
                        width="364"
                        height="201"
                        viewBox="0 0 364 201"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                        stroke="url(#paint0_linear_25:218)"
                        />
                        <path
                        d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                        stroke="url(#paint1_linear_25:218)"
                        />
                        <path
                        d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                        stroke="url(#paint2_linear_25:218)"
                        />
                        <path
                        d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                        stroke="url(#paint3_linear_25:218)"
                        />
                        <circle
                        opacity="0.8"
                        cx="214.505"
                        cy="60.5054"
                        r="49.7205"
                        transform="rotate(-13.421 214.505 60.5054)"
                        stroke="url(#paint4_linear_25:218)"
                        />
                        <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
                        <defs>
                        <linearGradient
                            id="paint0_linear_25:218"
                            x1="184.389"
                            y1="69.2405"
                            x2="184.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_25:218"
                            x1="156.389"
                            y1="69.2405"
                            x2="156.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_25:218"
                            x1="125.389"
                            y1="69.2405"
                            x2="125.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_25:218"
                            x1="93.8507"
                            y1="67.2674"
                            x2="89.9278"
                            y2="210.214"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_25:218"
                            x1="214.505"
                            y1="10.2849"
                            x2="212.684"
                            y2="99.5816"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" />
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                        </linearGradient>
                        <radialGradient
                            id="paint5_radial_25:218"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(220 63) rotate(90) scale(43)"
                        >
                            <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" stopOpacity="0.08" />
                        </radialGradient>
                        </defs>
                    </svg>
                    </div>
                </div>
                </div>
    </div> 
    
  </div>
</div>
    );
}

export default HeroFinal;