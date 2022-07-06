import React from "react"
import Link from "next/link";
import AboutKit from "./about";
import AdmissionUndergraduate from "./admissions/admissions-udergraduate";

const SubNavList = (props) => {
 
  if(props.nav1 === true){
      return(
        <AboutKit nav1 = {props.nav1} />
      );
  } if(props.nav2 === true){
    return(
      <AdmissionUndergraduate  nav2 = {props.nav2} />
    );
  }else{
    return(
      <AboutKit nav1 = {props.nav1} />
    );
  }

};

export default SubNavList