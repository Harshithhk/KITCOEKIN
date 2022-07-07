import React from "react"
import Link from "next/link";
import Undergraduate from "./undergraduate";
import Postgraduate from "./postgraduate";
import Phdprogram from "./phdprogram";
import VocationalCourses from "./vocationalCourses";
import Scholarship from "./scholarship";


const Admissions = (props) => {


    return (
      
      <>
      <li>
        <Undergraduate nav2 = {props.nav2} />
      </li>
      <li>
        <Postgraduate nav2 = {props.nav2} />
      </li>
      <li >
        <Phdprogram nav2 = {props.nav2} />
      </li>
      <li >
        <VocationalCourses nav2 = {props.nav2} />
      </li>
      <li >
        <Scholarship  nav2 = {props.nav2}/>
      </li>
   
    
    </>
   
        );
};

export default Admissions