import React from "react"
import Link from "next/link";
import AcademicCalendar2122 from "./academicCalendar2122"
import AcademicCalendar1920 from "./academicCalendar1920";
import SubSubSubNavList from "./subSubSubNavList";

const AcademicCalendar = (props) => {
  const [subSubNav1, setSubSubNav1] = React.useState(false);

    return (
      
      <>
      <li className={ subSubNav1 ?"hidden":""}>
        <AcademicCalendar2122 subNav4 = {props.subNav4}  />
      </li>
      <li onClick={() => (setSubSubNav1(!subSubNav1))} >
        <AcademicCalendar1920 subNav4 = {props.subNav4} subSubNav1 = {subSubNav1}/>
      </li>
      <SubSubSubNavList subSubNav1 = {subSubNav1}  />

      
    </>
   
        );
};

export default AcademicCalendar