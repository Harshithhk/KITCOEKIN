import React from "react"
import Link from "next/link";
import AboutKit from "./about";
import Admissions from "./admissions";
import Departments from "./departments";

const SubNavList = (props) => {
 
  if(props.nav1 === true){
      return(
        <AboutKit nav1 = {props.nav1} />
      );
  }else if(props.nav2 === true){
    return(
      <Admissions  nav2 = {props.nav2} />
    );
  }else if(props.nav3=== true){
    return(
      <Departments  nav3 = {props.nav3} />
    );
  }else{
    return(
      <></>
    );
  }

};

export default SubNavList