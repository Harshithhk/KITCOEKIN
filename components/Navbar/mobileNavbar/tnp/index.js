import React, { useState, useEffect } from 'react'
import Link from "next/link";

const Tnp = (props) => {

    // const [header, setHeader] = useState(1)

    // useEffect(() => {
    //     const elementSelected =  document.getElementById("NavAdmissions");
    //     console.log("=================",elementSelected)
    //     // elementSelected.addEventListener('scroll',()=>{
    //     //  const offSet = elementSelected.childNodes[0].childNodes[0].offsetTop;
    //     //  if (offSet < 73) {
    //     //   return setHeader(1)
    //     // } else  {
    //     //   return setHeader(0)
    //     // }
    //     // });
    //   }, []);
    // console.log(props)
    return (
        <h1  className={props.nav1 === true ? "transform transition-all duration-300 opacity-0 ease-out  relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent flex flex-row justify-center " : "transform transition duration-500 translate-y-0 opacity-1 ease-in relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent flex flex-row justify-center"}>
        T&P CELL
        {/* <svg
          className={
            props.nav2 === true
              ? "transform relative   z-20 rotate-180 ml-2 h-5 w-5 text-primary group-hover:text-gray-500 transition  ease-out duration-200"
              : "transform relative  z-20 rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-primary group-hover:text-gray-500"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>  */}
      </h1>
   
        );
};

export default Tnp