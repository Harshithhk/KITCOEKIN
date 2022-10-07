import React from "react"
import Link from "next/link";
import MegaNavbar from "../../MegaNavbar";
// import Academics from "./academics";
// import ExamCell from "./enamCell";
// import SubNavList from "./subNavList";
// import Committees from "./committees";
// import Notice from "./notice";
// import LifeAtKit from "./lifeAtKit";
// import InnovationEntrepreneurship from "./innovationEntrepreneurship";

const OthersNavbar = (props) => {
    const [nav1, setNav1] = React.useState(false);
    const [nav2, setNav2] = React.useState(false);
    const [nav3, setNav3] = React.useState(false);
    const [nav4, setNav4] = React.useState(false);
    const [nav5, setNav5] = React.useState(false);


    const MenuList = [
      {
        "title":"Academics",
        "subMenu1":[
          {
            "title":"",
            "links":["/online-syllabus"],
            "subMenu2":["Online Syllabus"],
          },
          {
            "title":"Other Online Platforms",
            "links":[""],
            "subMenu2":[
              "Moodle Link",
              "Contineo Link",
              "KITCOEK Virtual Lab"
            ]
          },
          {
            "title":"Rules & Regulations",
            "links":[""],
            "subMenu2":[
              "Undergraduate",
              "Postgraduate",
              "Modalities For Shivaji University Students"
            ]
          },
          {
            "title":"Internship Policy",
            "links":[""],
            "subMenu2":[
              "Guideline & Procedure",
              "Guidelines for Internship  ",
              
            ]
          },
          {
            "title":"Academic Documents",
            "links":[""],
            "subMenu2":[
              "Academic Calendar",
              "Academic Council Meeting Proceedings  ",
              
            ]
          },
                  ]
      },
      {
        "title":"Exam Cell",
        "subMenu1":[
          {
            "title":"",
            "links":["administration-staff"],
            "subMenu2":["Administrative Staff"]
          },
          {
            "title":"",
            "links":["semister-exam-timetable"],
            "subMenu2":["Exam Timetable"]
          },
          {
            "title":"",
            "links":["results"],
            "subMenu2":["Results"]
          },
          {
            "title":"",
            "links":[""],
            "subMenu2":["Exam Calendar UG & PG"]
          },
          {
            "title":"",
            "links":["paper-setting-documents"],
            "subMenu2":["Paper Setting Documents"]
          },
          {
            "title":"",
            "links":["remuneration-format"],
            "subMenu2":["Faculty Remuneration Format"]
          },
        
                  ]
      },
      {
        "title":"Committees",
        "subMenu1":[
          {
            "title":"",
            "links":["college-council"],
            "subMenu2":["Governance Committee"]
          },
          {
            "title":"",
            "links":["statutory-committee"],
            "subMenu2":["Statutory Committee"]
          },
          {
            "title":"",
            "links":["women-development"],
            "subMenu2":["Women Development Cell"]
          },
        
                  ]
      },
      {
        "title":"Life @ KIT",
        "subMenu1":[
          
          {
            "title":"",
            "links":["kit-student-club-activities"],
            "subMenu2":["Cultural"]
          },
          {
            "title":"",
            "links":["kit-nss-activities"],
            "subMenu2":["National Service Scheme (NSS)"]
          },
          {
            "title":"",
            "links":["kit-ncc-activities"],
            "subMenu2":["NCC"]
          },
          {
            "title":"",
            "links":[""],
            "subMenu2":["360 Degree Feedback 2020-2021"]
          },
          {
            "title":"Facilities",
            "links":["central-library","hostel-kit-college-of-engineering","gymkhana-kit-college-of-engineering-kolhapur","canteen"],
            "subMenu2":["Library","Hostel","Gymkhana","Canteen"]
          },
          
        
                  ]
      },
      {
        "title":"Innovation & Entrepreneurship",
        "subMenu1":[
          
          {
            "title":"",
            "links":["innovation-and-entrepreneurship-iic-kitcoek"],
            "subMenu2":["IIC-KITCOEK"]
          },
          {
            "title":"",
            "links":["https://sites.google.com/kitcoek.in/kite/home"],
            "subMenu2":["KITE"]
          },
          {
            "title":"",
            "links":["https://www.ecellkitcoek.com/"],
            "subMenu2":["E-Cell"]
          },
          {
            "title":"",
            "links":["innovation-and-entrepreneurship"],
            "subMenu2":["ARIIA"]
          },
          {
            "title":"AICTE Idea Lab",
            "links":["aicte-idea-lab-kitcoek,IdeaLab-ADVISORY-COMMITTEE,idealab-industry-connect,idealab-student-ambasadoors, "],
            "subMenu2":["Idea Lab","Advisory Committee","Mentor Committee","Industry Connect","Student Ambasadoors"]
          },
          
        
                  ]
      },
      
    ]


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
          <MegaNavbar MenuList = {MenuList}  />
          {/* <ul className="z-20 ">
            
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
        </ul> */}
          </div>
          
        
        </div>
        );
};

export default OthersNavbar