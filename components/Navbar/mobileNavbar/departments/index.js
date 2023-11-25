import React, { useState, useEffect } from 'react'
import Link from "next/link";

const Departments = (props) => {
  const [nav1, setNav1] = React.useState(false);
  const [nav2, setNav2] = React.useState(false);
  const [nav3, setNav3] = React.useState(false);
  return (
    <ul className="px-4 w-full divide-y-2  pb-6 pt-6 ">
    <h3 onClick={() => (props.setNav3(!props.nav3))} className="font-bold text-xl flex items-center  text-bold mb-2">
      DEPARTMENTS
      <svg
        className={
          props.nav3 === true
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
    {props.nav3 === true ?
    <>
   
  
    <li>
      <Link passHref href="best-biotechnology-engineering-college-kolhapur-biotechnology-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Biotechnology Engineering</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-civil-engineering-college-kolhapur-civil-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Civil Engineering</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-environmental-engineering-college-kolhapur-environmental-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Civil & Environmental Engineering</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-cse-college-kolhapur-best-computer-science-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Computer Science & Engineering</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-cse-college-kolhapur-best-computer-science-business-systems">
      <span  className="block p-3 hover:bg-slate-200 ">Computer Science & Business Systems</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-cse-college-kolhapur-best-computer-science-engineering-data-science-college">
      <span  className="block p-3 hover:bg-slate-200 ">Computer Science Engineering - Data Science</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-cse-college-kolhapur-best-computer-science-engineering-artificial-intelligence-machine-learning">
      <span  className="block p-3 hover:bg-slate-200 ">Computer Science Engineering - Artificial Intelligence And Machine Learning
</span>
</Link>
    </li>
    <li>
      <Link passHref href="best-electrical-engineering-college-kolhapur-electrical-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Electrical Engineering</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-eandtc-engineering-college-kolhapur-etc-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Electronics & Telecomm Engineering</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-mechanical-engineering-college-kolhapur-mechanical-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Mechanical Engineering</span>
      </Link>
    </li>
    <li>
      <Link passHref href="best-basic-science-and-humanities-engineering-college-kolhapur-basic-science-and-humanities-engineering-college">
      <span  className="block p-3 hover:bg-slate-200 ">Basic Sciences & Humanities</span>
      </Link>
    </li>
    
    </>
    :null}
  </ul>
 
      );
};


export default Departments