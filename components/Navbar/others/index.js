import React from "react"
import Link from "next/link";
import Academics from "./academics";
import ExamCell from "./enamCell";
import SubNavList from "./subNavList";
import Committees from "./committees";
import Notice from "./notice";
import LifeAtKit from "./lifeAtKit";
import InnovationEntrepreneurship from "./innovationEntrepreneurship";

const OthersNavbar = (props) => {
    const [nav1, setNav1] = React.useState(false);
    const [nav2, setNav2] = React.useState(false);
    const [nav3, setNav3] = React.useState(false);
    const [nav4, setNav4] = React.useState(false);
    const [nav5, setNav5] = React.useState(false);
    return (
        <div className="absolute top-0 left-0 w-full h-screen ">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="absolute z-10 w-full h-full transition-all overflow-y-scroll pb-10 duration-300 bg-slate-100 "
          >
            <div className="z-20 absolute right-3 top-5 mr-2 text-[30px] font-bold text-primary">
            <div
              className="ml-auto space-y-2 HAMBURGER-ICON hover:cursor-pointer"
              onClick={() => props.setOthersNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-primary"></span>
              <span className="block ml-auto h-0.5 w-6 animate-pulse bg-primary"></span>
              <span className="block h-0.5 ml-auto w-5 animate-pulse bg-primary"></span>
            </div>
          </div>
          <ul className="z-20 ">
            
            <li onClick={() => (setNav1(!nav1))} className={nav2 || nav3 || nav4 || nav5?"hidden":""}>
              <Academics nav1 = {nav1} />
            </li>
            <li onClick={() => (setNav2(!nav2))} className={ nav1 || nav3 || nav4 || nav5?"hidden":""}>
              <ExamCell nav1 = {nav1}  nav2 = {nav2} />
            </li>
            <li className={nav2 || nav1 || nav3 || nav4|| nav5?"hidden":""}>
              <Notice nav1 = {nav1}  nav2 = {nav2}  />
            </li>
            <li  onClick={() => (setNav3(!nav3))} className={nav2 || nav1 || nav4 || nav5?"hidden":""}>
              <Committees nav1 = {nav1}  nav3 = {nav3} />
            </li>
            <li onClick={() => (setNav4(!nav4))} className={nav2 || nav1 || nav3 || nav5?"hidden":""}>
              <LifeAtKit nav1 = {nav1}  nav4 = {nav4}  />
            </li>
            <li className={nav2 || nav1 || nav3 || nav4?"hidden":""} onClick={() => (setNav5(!nav5))}>
              <InnovationEntrepreneurship  nav1 = {nav1}  nav5 = {nav5}  />
            </li>
            <SubNavList nav1 = {nav1} nav2 = {nav2}  nav3 = {nav3}  nav4 = {nav4}  nav5 = {nav5}/>
        </ul>
          </div>
          
        
        </div>
        );
};

export default OthersNavbar