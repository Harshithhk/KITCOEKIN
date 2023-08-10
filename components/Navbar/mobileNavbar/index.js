import React from "react"
import Link from "next/link";
import About from "./about";
import Admissions from "./admissions";
import Departments from "./departments";
import Tnp from "./tnp";
import Notice from "./notice";
import Academics from "./academcis";
import ExamCell from "./examcell";
import Alumni from "./alumni";
import Committee from "./committees";
import LifeAtKit from "./lifeAtKit";
import Innovation from "./innovation";


const MobileNavbar = (props) => {
    const [nav1, setNav1] = React.useState(false);
    const [nav2, setNav2] = React.useState(false);
    const [nav3, setNav3] = React.useState(false);
    const [nav4, setNav4] = React.useState(false);
    const [nav5, setNav5] = React.useState(false);
    const [nav6, setNav6] = React.useState(false);
    const [nav7, setNav7] = React.useState(false);
    const [nav8, setNav8] = React.useState(false);

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
          
        <ul className="text-[#24346D] divide-y-2">
          <li className="flex flex-row justify-start gap-6 px-4 w-full   pb-6 pt-6">
          <Link href="/contact" passHref>
            <span className="flex ">
              <img src="/images/Navbar/Phone.svg" className="mr-2" alt="" />
              CONTACT
            </span>
                        
          </Link>
          <Link href="/apply-admission" passHref>
              <span className="flex">
                <img src="/images/Navbar/Mention.svg" className="mr-2" alt="" />
                APPLY
              </span>
          </Link>
          </li>
          <li>
              <About nav1 = {nav1} setNav1 = {setNav1} />
          </li>
          <li>
              <Admissions nav2 = {nav2} setNav2 = {setNav2} />
          </li>
          <li>
              <Departments  nav3 = {nav3} setNav3 = {setNav3}/>
          </li>
          <li>
            
              <Academics  nav4 = {nav4} setNav4 = {setNav4}/>
          </li>
          <li>
          
              <ExamCell  nav5 = {nav5} setNav5 = {setNav5}/>
          </li>
          <li>
              <Notice  />
          </li>
          <li>
              <Alumni  />
          </li>
          <li>
              <Tnp />
          </li>
          <li>
              <Committee nav6 = {nav6} setNav6 = {setNav6}/>
          </li>
          <li>
              <LifeAtKit nav7 = {nav7} setNav7 = {setNav7}/>
          </li>
          <li>
              <Innovation nav8 = {nav8} setNav8 = {setNav8}/>
          </li>
        </ul>
          

        </div>
      
          </div>
          
        
        );
};

export default MobileNavbar