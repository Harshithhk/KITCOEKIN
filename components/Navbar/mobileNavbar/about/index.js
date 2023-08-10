import Link from "next/link";
import React from "react"

const About = (props) => {
    const [nav1, setNav1] = React.useState(false);
    const [nav2, setNav2] = React.useState(false);
    const [nav3, setNav3] = React.useState(false);
    return (
      <ul className="px-4 w-full divide-y-2   pb-6 pt-6 ">
      <h3 onClick={() => (props.setNav1(!props.nav1))} className="font-bold text-xl flex items-center  text-bold mb-2">
        About
        <svg
          className={
            props.nav1 === true
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
      {props.nav1 === true ?
      <><li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">About KitCOEK</span>
        </Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">Founder Trustees</span>
        </Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">Board Of Directors</span>
        </Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">Governing Council</span>
        </Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">Milestones</span>
        </Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">College Administration</span>
        </Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">Office Administration</span>
        </Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">Internal Quality Assurance Committee(IQAC)
</span>
</Link>
      </li>
      <li>
        <Link passHref href="">
        <span  className="block p-3 hover:bg-slate-200 ">Staff List</span>
        </Link>
      </li>
      <li>
          <h4 onClick={() => (setNav1(!nav1))} href="#" className="p-3 flex items-center hover:bg-slate-200 ">
            NIRF
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
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">KIT NIRF-2023 DCS ENGG</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">KIT NIRF-2023 DCS OVERALL</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">KIT NIRF-2022 DCS ENGG</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">KIT NIRF-2022 DCS OVERALL</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">Intellectual Property Right (IPR)</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">National Institutional Ranking Framework1</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">National Institutional Ranking Framework2</span>
              </Link>
            </li>
          </ul> : null}
      </li>
      <li>
          <h4 onClick={() => (setNav2(!nav2))} href="#" className="p-3 flex items-center hover:bg-slate-200 ">
          Accreditation
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
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">AICTE Approval</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">NBA & NAAC</span>
              </Link>
            </li>
          </ul> : null}
      </li>
      <li>
          <h4 onClick={() => (setNav3(!nav3))} href="#" className="p-3 flex items-center hover:bg-slate-200 ">
          Manditory Disclosure
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
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">Fee Proposal AY:2023-24</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">Mandatory Disclosures</span>
              </Link>
            </li>
            <li>
              <Link passHref href="">
              <span  className="block p-3 hover:bg-slate-200 ">	E Governance Policy</span>
              </Link>
            </li>
          </ul> : null}
      </li>
      
      </>
      :null}
    </ul>
   
        );
};

export default About