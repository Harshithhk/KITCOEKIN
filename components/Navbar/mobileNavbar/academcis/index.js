import React, { useState, useEffect } from 'react'
import Link from "next/link";

const Academics = (props) => {
  const [nav1, setNav1] = React.useState(false);
  const [nav2, setNav2] = React.useState(false);
  const [nav3, setNav3] = React.useState(false);
  const [nav4, setNav4] = React.useState(false);
  const [nav5, setNav5] = React.useState(false);

  return (
    <ul className="px-4 w-full divide-y-2   pb-6 pt-6 ">
    <h3 onClick={() => (props.setNav4(!props.nav4))} className="font-bold text-xl flex items-center  text-bold mb-2">
      ACADEMICS
      <svg
        className={
          props.nav4 === true
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
    {props.nav4 === true ?
    <>
   
  
    <li>
      <Link passHref href="documents/home/ug.pdf">
      <span  className="block p-3 hover:bg-slate-200 ">Rules & Regulation UG</span>
      </Link>
    </li>
    <li>
      <Link passHref href="documents/home/pg.pdf">
      <span  className="block p-3 hover:bg-slate-200 ">Rules & Regulation PG</span>
      </Link>
    </li>
    <li>
        <h4 onClick={() => (setNav1(!nav1))}  className="p-3 flex items-center hover:bg-slate-200 ">
        Online Syllabus
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
            <Link passHref href="online-syllabus">
            <span  className="block p-3 hover:bg-slate-200 ">Online Syllabus</span>
            </Link>
          </li>     
          <li>
            <Link passHref href="online-syllabus-old">
            <span  className="block p-3 hover:bg-slate-200 ">2022-23 Scheme</span>
            </Link>
          </li>
          <li>
            <Link passHref href="old_2017_online-syllabus">
            <span  className="block p-3 hover:bg-slate-200 ">2017-old Scheme</span>
            </Link>
          </li>
 
          
        </ul> : null}
    </li>
    <li>
      <Link passHref href="http://210.212.172.190/links/index.html">
      <span  className="block p-3 hover:bg-slate-200 ">Moodle Links</span>
      </Link>
    </li>
    <li>
      <Link passHref href="https://210.212.172.178/sims/">
      <span  className="block p-3 hover:bg-slate-200 ">Contineo Links</span>
      </Link>
    </li>
    <li>
        <h4 onClick={() => (setNav2(!nav2))}  className="p-3 flex items-center hover:bg-slate-200 ">
        Internship Policy
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
        </h4>
        {nav2 === true ? 
        <ul className="px-4 w-full divide-y-2  ">      
          <li>
            <Link passHref href="documents/academics/internship-policy/kit-internship-policy-2020.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Guideline & Procedure</span>
            </Link>
          </li>
          <li>
            <Link passHref href="documents/academics/internship-policy/guidelines-for-internship-and-project-accounted-throgh-kite.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Guidelines for Internship & Project Accounted</span>
            </Link>
          </li>
 
          
        </ul> : null}
    </li>
    <li>
        <h4 onClick={() => (setNav3(!nav3))}  className="p-3 flex items-center hover:bg-slate-200 ">
        Academic Council Meeting Proceedings
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
        </h4>
        {nav3 === true ? 
        <ul className="px-4 w-full divide-y-2  ">      
          <li>
            <Link passHref href="documents/academics/academic-council/AC%20Proceedings%20Nov%2027,%202021.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Meeting 27-11-2021</span>
            </Link>
          </li>
          <li>
            <Link passHref href="documents/academics/academic-council/academic-council-meet-5-9-july-2020.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Meeting 5 - 9-July-2020</span>
            </Link>
          </li>
          <li>
            <Link passHref href="documents/academics/academic-council/academic-council-meet-1-21-July-2017.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Meeting 4 - 5-Oct-2019</span>
            </Link>
          </li>
          <li>
            <Link passHref href="documents/academics/academic-council/academic-council-meet-2-6-July-2018.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Meeting 3 - 2-March-2019</span>
            </Link>
          </li>
          <li>
            <Link passHref href="documents/academics/academic-council/academic-council-meet-3-2-march-2019.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Meeting 2 - 6-July-2018</span>
            </Link>
          </li>
          <li>
            <Link passHref href="documents/academics/academic-council/academic-council-meet-4-5-oct-2019.pdf">
            <span  className="block p-3 hover:bg-slate-200 ">Meeting 1 - 21-July-2017</span>
            </Link>
          </li>
     
        </ul> : null}
    </li>
    <li>
        <h4 onClick={() => (setNav4(!nav4))}  className="p-3 flex items-center hover:bg-slate-200 ">
        Academic Calendar
          <svg
            className={
              nav4 === true
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
        {nav4 === true ? 
        <ul className="px-4 w-full divide-y-2  ">      
          <li>
            <h5 onClick={() => (setNav5(!nav5))}  className="flex items-center p-3 hover:bg-slate-200 ">
            Academic Calendar 2022-2023
              <svg
                className={
                  nav5 === true
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
              nav5 === true ? 
              <ul className="px-4 w-full divide-y-2  ">      
                <li>
                  <Link passHref href="documents/academics/academic-calender/Academic22_23/13-01-2023%20Updated%20Academic%20Calender%202022-23%20Sem-II%20(TY%20B.Tech,%20B.%20Tech.).pdf">
                  <span  className="block p-3 hover:bg-slate-200 ">SEM-II -TY B.Tech, B. Tech.</span>
                  </Link>
                </li>
                <li>
                  <Link passHref href="documents/academics/academic-calender/Academic22_23/Academic%20Calender%202022-23%20Sem-II%20(FY%20B.Tech,FY%20M.Tech).pdf">
                  <span  className="block p-3 hover:bg-slate-200 ">SEM-II -FY B.Tech, M.Tech</span>
                  </Link>
                </li>
                <li>
                  <Link passHref href="documents/academics/academic-calender/Academic22_23/13.01.2023%20Updated%20Academic%20Calender%202022-23%20Sem-II%20(SY%20B.Tech,%20DSE).pdf">
                  <span  className="block p-3 hover:bg-slate-200 ">SEM-II -SY B.Tech, DSE.</span>
                  </Link>
                </li>
                <li>
                  <Link passHref href="documents/academics/academic-calender/Academic22_23/Academic%20Calender%202022-23%20Sem-I%20(FY%20B.Tech,%20%20FY%20MTech).pdf">
                  <span  className="block p-3 hover:bg-slate-200 ">SEM-I -FY B.Tech, FY M.Tech.</span>
                  </Link>
                </li>
                <li>
                  <Link passHref href="documents/academics/academic-calender/Academic22_23/Academic%20Calender%20AY_2022-23%20Sem-I%20(SY%20B.Tech,%20DSE).pdf">
                  <span  className="block p-3 hover:bg-slate-200 ">SEM-I -SY,DSY B.Tech</span>
                  </Link>
                </li>
                <li>
                  <Link passHref href="documents/academics/academic-calender/Academic22_23/12-08-2022%20Final%20Academic%20Calender%202022-23%20Sem-I%20(TY%20B.Tech,%20B.%20Tech.).pdf">
                  <span  className="block p-3 hover:bg-slate-200 ">SEM-I -TY, Final Year B.Tech</span>
                  </Link>
                </li>
              </ul>:null
            }
          </li>
          
        </ul> : null}
    </li>
    <li>
      <Link passHref href="documents/home/modalities.pdf">
      <span  className="block p-3 hover:bg-slate-200 ">Modalities for Absorption of Students from Affiliated (shivaji University) Pattern to Autonomous</span>
      </Link>
    </li>
    <li>
      <Link passHref href="http://210.212.172.182/index.html">
      <span  className="block p-3 hover:bg-slate-200 ">KITCOEK Virtual Lab</span>
      </Link>
    </li>
    </>
    :null}
  </ul>
 
      );
};

export default Academics