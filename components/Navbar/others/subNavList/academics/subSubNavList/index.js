import React from "react"
import Link from "next/link";
import AicteIdeaLabKitcoek from "./aicteIdeaLabKitcoek";
import AcademicCouncilMeetingProceedings from "./academicCouncilMeetingProceedings";
import AcademicCalendar from "./academicCalendar";
import OtherPlatformLinks from "./OtherPlatformLinks";
import ImportantDocuments from "./importantDocuments";

const SubSubNavList = (props) => {
 
  if(props.subNav1 === true){
      return(
        <AicteIdeaLabKitcoek subNav1 = {props.subNav1} />
      );
  }else if(props.subNav3 === true){
    return(
      <AcademicCouncilMeetingProceedings  subNav3 = {props.subNav3} />
    );
  }else if(props.subNav4 === true){
    return(
      <AcademicCalendar  subNav4 = {props.subNav4} />
    );
  }else if(props.subNav5 === true){
    return(
      <OtherPlatformLinks  subNav5 = {props.subNav5} />
    );
  }else if(props.subNav6 === true){
    return(
      <ImportantDocuments  subNav6 = {props.subNav6} />
    );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubNavList