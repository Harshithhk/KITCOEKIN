import React from "react"
import Link from "next/link";
import AICTEIdeaLab from "./aicte-idea-lab-kitcoek";
import OnlineSyllabus from "./online-syllabus";
import AcademicCouncilMeetingProceedings from "./academicCouncilMeetingProceedings";
import AcademicCalendar from "./academicCalendar";
import SubSubNavList from "./subSubNavList";
import OtherPlatformLinks from "./otherPlatformLinks";
import ImportantDocuments from "./importantDocuments";

const Academics = (props) => {


  const [subNav1, setSubNav1] = React.useState(false);
  const [subNav3, setSubNav3] = React.useState(false);
  const [subNav4, setSubNav4] = React.useState(false);
  const [subNav5, setSubNav5] = React.useState(false);
  const [subNav6, setSubNav6] = React.useState(false);


    return (
      
      <>
      <li onClick={() => (setSubNav1(!subNav1))} className={ subNav3 || subNav4 || subNav5 || subNav6 ?"hidden":""}>
        <AICTEIdeaLab nav1 = {props.nav1} subNav1 = {subNav1}/>
      </li> 
      <li className={subNav1  || subNav3  || subNav4|| subNav5 || subNav6?"hidden":""}>
        <OnlineSyllabus nav1 = {props.nav1}/>
      </li>
      <li className={subNav1  || subNav3 || subNav4 || subNav6 ?"hidden":""}  onClick={() => (setSubNav5(!subNav5))} >
        <OtherPlatformLinks nav1 = {props.nav1} subNav5 = {subNav5} />
      </li>
      <li className={subNav1  || subNav3 || subNav4 || subNav5?"hidden":""} onClick={() => (setSubNav6(!subNav6))} >
        <ImportantDocuments nav1 = {props.nav1} subNav6 = {subNav6} />
      </li>

      <li className={subNav1   || subNav4|| subNav5 || subNav6?"hidden":""} onClick={() => (setSubNav3(!subNav3))}>
        <AcademicCouncilMeetingProceedings nav1 = {props.nav1} subNav3 = {subNav3}/>
      </li>
      <li className={subNav1  || subNav3 || subNav5 || subNav6?"hidden":""} onClick={() => (setSubNav4(!subNav4))} >
        <AcademicCalendar nav1 = {props.nav1} subNav4 = {subNav4} />
      </li>
      <SubSubNavList subNav1 = {subNav1}   subNav3 = {subNav3} subNav4 = {subNav4} subNav5 = {subNav5} subNav6 = {subNav6} />
    
    </>
   
        );
};

export default Academics