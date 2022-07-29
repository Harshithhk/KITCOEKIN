import React from "react"
import Link from "next/link";
import FYBTechFYMtechDSE from "./fYBTechFYMtechDSE"
import SYTYBTechFinalYear from "./sYTYBTechFinalYear";
import AcademicCalendarSemI2021 from "./academicCalendarSemI2021";
import AutonomousSemesterII from "./autonomousSemesterII";


const AcademicCalendar1920 = (props) => {
  
    return (
      
      <>
      <li>
        <FYBTechFYMtechDSE subSubNav3 = {props.subSubNav3}/>
      </li>
      <li >
        <SYTYBTechFinalYear subSubNav3 = {props.subSubNav3}/>
      </li>
      <li >
        <AcademicCalendarSemI2021 subSubNav3 = {props.subSubNav3}/>
      </li>
      <li >
        <AutonomousSemesterII subSubNav3 = {props.subSubNav3}/>
      </li>

    </>
   
        );
};

export default AcademicCalendar1920