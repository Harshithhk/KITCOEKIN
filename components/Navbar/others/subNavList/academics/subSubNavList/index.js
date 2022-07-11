import React from "react"
import Link from "next/link";
import AicteIdeaLabKitcoek from "./aicteIdeaLabKitcoek";
import InternshipPolicy from "./internshipPolicy";
import AcademicCouncilMeetingProceedings from "./academicCouncilMeetingProceedings";
import AcademicCalendar from "./academicCalendar";

const SubSubNavList = (props) => {
 
  if(props.subNav1 === true){
      return(
        <AicteIdeaLabKitcoek subNav1 = {props.subNav1} />
      );
  }else if(props.subNav2 === true){
    return(
      <InternshipPolicy  subNav2 = {props.subNav2} />
    );
  }else if(props.subNav3 === true){
    return(
      <AcademicCouncilMeetingProceedings  subNav3 = {props.subNav3} />
    );
  }else if(props.subNav4 === true){
    return(
      <AcademicCalendar  subNav4 = {props.subNav4} />
    );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubNavList