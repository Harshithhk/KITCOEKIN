import React, { useState, useEffect } from 'react'
import Link from "next/link";

const ExamCell = (props) => {
  const [nav1, setNav1] = React.useState(false);
  const [nav2, setNav2] = React.useState(false);
  const [nav3, setNav3] = React.useState(false);
  return (
    <ul className="px-4 w-full divide-y-2   pb-6 pt-6 ">
    <h3 onClick={() => (props.setNav5(!props.nav5))} className="font-bold text-xl flex items-center  text-bold mb-2">
      EXAM CELL
      <svg
        className={
          props.nav5 === true
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
    {props.nav5 === true ?
    <>
   
  
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Administrative Staff</span>
      </Link>
    </li>
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Exam Timetable</span>
      </Link>
    </li>
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Results</span>
      </Link>
    </li>
    <li>
        <h4 onClick={() => (setNav1(!nav1))}  className="p-3 flex items-center hover:bg-slate-200 ">
        Exam Calendar UG & PG
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
            <h5 onClick={() => (setNav2(!nav2))}  className="flex items-center p-3 hover:bg-slate-200 ">
            AY:2022-23
              <svg
                className={
                  nav2 === true
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
            </h5>
            {
              nav2 === true ? 
              <ul className="px-4 w-full divide-y-2  ">      
                <li>
                  <Link passHref href="">
                  <span  className="block p-3 hover:bg-slate-200 ">F.Y.B.Tech/M.Tech 2022-23 SEM-I</span>
                  </Link>
                </li>
                <li>
                  <Link passHref href="">
                  <span  className="block p-3 hover:bg-slate-200 ">T.Y.& Final Year B.Tech 2022-23 SEM-I</span>
                  </Link>
                </li>
              </ul>:null
            }
          </li>
          <li>
            <h5 onClick={() => (setNav3(!nav3))}  className="flex items-center p-3 hover:bg-slate-200 ">
            AY:2021-22
              <svg
                className={
                  nav3 === true
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
            </h5>
            {
              nav3 === true ? 
              <ul className="px-4 w-full divide-y-2  ">      
                <li>
                  <Link passHref href="">
                  <span  className="block p-3 hover:bg-slate-200 ">FY, DSY, SEM-I_21-22I</span>
                  </Link>
                </li>
                <li>
                  <Link passHref href="">
                  <span  className="block p-3 hover:bg-slate-200 ">SY,TY,Final Year B.Tech-21-22</span>
                  </Link>
                </li>
              </ul>:null
            }
          </li>
          
        </ul> : null}
    </li>
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Revised Rules and Regulations</span>
      </Link>
    </li>
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Paper Setting</span>
      </Link>
    </li>
    <li>
      <Link passHref href="">
      <span  className="block p-3 hover:bg-slate-200 ">Faculty Remuneration Format</span>
      </Link>
    </li>
    
    </>
    :null}
  </ul>
 
      );
};

export default ExamCell