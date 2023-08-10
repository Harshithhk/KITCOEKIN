import React, { useState, useEffect } from 'react'
import Link from "next/link";

const Committee = (props) => {
  const [nav1, setNav1] = React.useState(false);
  const [nav2, setNav2] = React.useState(false);
  const [nav3, setNav3] = React.useState(false);
  return (
    <ul className="px-4 w-full   pb-6 pt-6 ">
    <h3 onClick={() => (props.setNav6(!props.nav6))} className="font-bold text-xl flex items-center  text-bold mb-2">
      COMMITTEES
      <svg
        className={
          props.nav6 === true
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
      </svg> 
    </h3>
    {props.nav6 === true ?
    <>
   
  
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Governance Committee</span>
      </Link>
    </li>
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Statutory Committee</span>
      </Link>
    </li>
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Women Development Cell</span>
      </Link>
    </li>
 
    </>
    :null}
  </ul>
 
      );
};


export default Committee