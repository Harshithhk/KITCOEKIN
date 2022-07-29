import React from "react"
import Link from "next/link";
import AcademicCalendar1920 from "./academiCalendar1920";


const SubSubSubNavList = (props) => {
 
  if(props.subSubNav1 === true){
      return(
        <AcademicCalendar1920 subSubNav1 = {props.subSubNav1} />
      );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubSubNavList