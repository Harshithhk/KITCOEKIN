import React from "react"
import Link from "next/link";
import About from "./about";
import Admissions from "./admissions";
import SubNavList from "./subNavList";
import Departments from "./departments";
import Tnp from "./tnp";
import Notice from "./notice";
import Others from "./others";

const MobileNavbar = (props) => {
    const [nav1, setNav1] = React.useState(false);
    const [nav2, setNav2] = React.useState(false);
    const [nav3, setNav3] = React.useState(false);
    const [nav4, setNav4] = React.useState(false);
    const [nav5, setNav5] = React.useState(false);
    return (
        <div className="absolute top-0 left-0 w-screen h-screen ">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="absolute z-10 w-full h-full transition-all overflow-y-scroll pb-10 duration-300 bg-slate-100 "
          >
            <div className="z-20 absolute right-3 top-5 mr-2 text-[30px] font-bold text-primary">
            <div
              className="ml-auto space-y-2 HAMBURGER-ICON sm:block 3xl:hidden 2xl:hidden"
              onClick={() => props.setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-primary"></span>
              <span className="block ml-auto h-0.5 w-6 animate-pulse bg-primary"></span>
              <span className="block h-0.5 ml-auto w-5 animate-pulse bg-primary"></span>
            </div>
          </div>
          <ul className="z-20 ">
            
            <li onClick={() => (setNav1(!nav1))} className={nav5 || nav4 || nav3 || nav2?"hidden":""}>
              <About nav1 = {nav1} />
            </li>
            <li onClick={() => (setNav2(!nav2))} className={ nav5 || nav4 || nav3  || nav1?"hidden":""}>
              <Admissions nav1 = {nav1}  nav2 = {nav2} />
            </li>
            <li  onClick={() => (setNav3(!nav3))} className={nav5 || nav4 || nav2 || nav1 ?"hidden":""}>
              <Departments nav1 = {nav1}  nav3 = {nav3} />
            </li>
            <li className={nav5 || nav4 || nav3 || nav2 || nav1 ?"hidden":""}>
              <Tnp nav1 = {nav1} />
            </li>
            <li className={nav5 || nav4 || nav3 || nav2 || nav1 ?"hidden":""}>
            <Notice nav1 = {nav1}  />
            </li>
            <li onClick={() => (setNav5(!nav5))} className={nav4 || nav3 || nav2 || nav1 ?"hidden":""}>
            <Others nav1 = {nav1}  nav5 = {nav5}  />
            </li>
            <SubNavList nav1 = {nav1} nav2 = {nav2}  nav3 = {nav3} nav4 = {nav4} nav5 = {nav5} />
        </ul>
          </div>
          
        
        </div>
        );
};

export default MobileNavbar