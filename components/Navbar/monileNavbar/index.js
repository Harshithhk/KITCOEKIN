import React from "react"
import Link from "next/link";
import About from "./about";
import Admissions from "./admissions";
import SubNavList from "./subNavList";
import Departments from "./departments";
import Tnp from "./tnp";

const MonileNavbar = (props) => {
    const [nav1, setNav1] = React.useState(false);
    const [nav2, setNav2] = React.useState(false);
    return (
        <div className="absolute top-0 left-0 w-screen h-screen ">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="absolute z-10 w-full h-full transition-all duration-300 bg-slate-100 "
          ></div>
          <div className="z-20 absolute right-3 top-5 mr-2 text-[30px] font-bold text-primary">
            <div
              className="ml-auto space-y-2 HAMBURGER-ICON sm:block 2xl:hidden"
              onClick={() => props.setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-primary"></span>
              <span className="block ml-auto h-0.5 w-6 animate-pulse bg-primary"></span>
              <span className="block h-0.5 ml-auto w-5 animate-pulse bg-primary"></span>
            </div>
          </div>
          <ul className="z-20">
            
              <li onClick={() => (setNav1(!nav1))} className={nav2 ?"hidden":""}>
                <About nav1 = {nav1} />
              </li>
              <li onClick={() => (setNav2(!nav2))} className={ nav1 ?"hidden":""}>
                <Admissions nav1 = {nav1}  nav2 = {nav2} />
              </li>
              <li className={nav2 || nav1?"hidden":""}>
                <Departments nav1 = {nav1}  nav2 = {nav2}  />
              </li>
              <li className={nav2 || nav1?"hidden":""}>
                <Tnp nav1 = {nav1}  nav2 = {nav2}  />
              </li>
              <li className={nav2 || nav1?"hidden":""}>
              <h1 className={nav1 === true || nav2 === true ? "transform transition duration-300 translate-y-20 opacity-0 ease-out  relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent" : "transform transition duration-300 translate-y-0 opacity-1 ease-in relative z-20 w-full text-4xl font-bold text-center mt-14 sm:text-xl text-accent"}>
                  STAFFS{" "}
                  <img
                    src="/images/Milestones/.svg"
                    className="absolute"
                    alt=""
                  />
                </h1>
              </li>
              <SubNavList nav1 = {nav1} nav2 = {nav2} />
          </ul>
        </div>
        );
};

export default MonileNavbar