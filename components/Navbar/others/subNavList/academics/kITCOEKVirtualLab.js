import React from "react"

const KITCOEKVirtualLab = (props) => {
    return (
      
  
    <h1 className={props.nav1 === false ? "transform transition duration-300 translate-y-20 opacity-0 ease-out  relative z-20 w-full text-2xl font-bold text-center mt-5 sm:text-xl text-accent flex flex-row justify-center" : "transform transition duration-300 translate-y-0 opacity-1 ease-in relative z-20 w-full text-3xl font-bold text-center mt-5 sm:text-xl text-accent flex flex-row justify-center"}>
    KITCOEK Virtual Lab

    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-1 h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
  </h1>

    )
  }

export default KITCOEKVirtualLab
