import React from "react"
import Link from "next/link";
import ExamCalendarUGPG from "./examCalendarUGPG";
import ExamTimetable from "./examTimetable";
import AdministrativeStaff from "./administrativeStaff";
import PaperSettingDocuments from "./paperSettingDocuments";
import Results from "./results";
import FacultyRemunerationFormat from "./FacultyRemunerationFormat";


const ExamCell = (props) => {


    return (
      
      <>
      <li>
        <AdministrativeStaff nav2 = {props.nav2} />
      </li>
      <li>
        <ExamTimetable nav2 = {props.nav2} />
      </li>
      <li >
        <Results nav2 = {props.nav2} />
      </li>
      <li >
        <ExamCalendarUGPG nav2 = {props.nav2} />
      </li>
      <li >
        <PaperSettingDocuments  nav2 = {props.nav2}/>
      </li>
      <li >
        <FacultyRemunerationFormat  nav2 = {props.nav2}/>
      </li>
    
    </>
   
        );
};

export default ExamCell