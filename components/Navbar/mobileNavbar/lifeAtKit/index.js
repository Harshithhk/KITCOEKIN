import React, { useState, useEffect } from 'react'
import Link from "next/link";

const LifeAtKit = (props) => {
  const [nav1, setNav1] = React.useState(false);
  const [nav2, setNav2] = React.useState(false);
  const [nav3, setNav3] = React.useState(false);
  const [nav4, setNav4] = React.useState(false);
  const [nav5, setNav5] = React.useState(false);

  return (
    <ul className="px-4 w-full divide-y-2   pb-6 pt-6 ">
    <h3 onClick={() => (props.setNav7(!props.nav7))} className="font-bold text-xl flex items-center  text-bold mb-2">
      LIFE @ KIT
      <svg
        className={
          props.nav7 === true
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
    {props.nav7 === true ?
    <>
   
  
    <li>
      <Link passHref href="kit-student-club-activities">
      <span  className="block p-3 hover:bg-slate-200 ">Cultural</span>
      </Link>
    </li>
    <li>
      <Link passHref href="kit-nss-activities">
      <span  className="block p-3 hover:bg-slate-200 ">National Service Scheme (NSS)</span>
      </Link>
    </li>
    <li>
      <Link passHref href="kit-ncc-activities">
      <span  className="block p-3 hover:bg-slate-200 ">NCC</span>
      </Link>
    </li>
    <li>
      <Link passHref href="documents/home/Technique%202022.pdf">
      <span  className="block p-3 hover:bg-slate-200 ">Technique-2022</span>
      </Link>
    </li>
    <li>
      <Link passHref href="documents/home/vilaskarjinni-360-degree-feedback.pdf">
      <span  className="block p-3 hover:bg-slate-200 ">360 Degree Feedback 2020-2021</span>
      </Link>
    </li> 
    <li>
        <h4 onClick={() => (setNav1(!nav1))}  className="p-3 flex items-center hover:bg-slate-200 ">
        Facilities
          <svg
            className={
              nav1 === true
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
        </h4>
        {nav1 === true ? 
        <ul className="px-4 w-full divide-y-2  ">      
          <li>
            <Link passHref href="central-library">
            <span  className="block p-3 hover:bg-slate-200 ">Library</span>
            </Link>
          </li>
          <li>
            <Link passHref href="hostel-kit-college-of-engineering">
            <span  className="block p-3 hover:bg-slate-200 ">Hostel</span>
            </Link>
          </li>
          <li>
            <Link passHref href="gymkhana-kit-college-of-engineering-kolhapur">
            <span  className="block p-3 hover:bg-slate-200 ">Gymkhana</span>
            </Link>
          </li>
          <li>
            <Link passHref href="canteen">
            <span  className="block p-3 hover:bg-slate-200 ">Canteen</span>
            </Link>
          </li>
          
        </ul> : null}
    </li>
  
    </>
    :null}
  </ul>
 
      );
};

export default LifeAtKit