import React from "react"
import Link from "next/link";
import Undergraduate from "./undergraduate";
import Postgraduate from "./postgraduate";
import Phdprogram from "./phdprogram";
import VocationalCourses from "./vocationalCourses";
import Scholarship from "./scholarship";
import SubSubNavList from "./subSubNavList";


const Admissions = (props) => {

  const [subNav1, setSubNav1] = React.useState(false);

    return (
      
      <>
      <li className={subNav1 ?"hidden":""}>
        <Undergraduate nav2 = {props.nav2} />
      </li>
      <li className={subNav1 ?"hidden":""}>
        <Postgraduate nav2 = {props.nav2} />
      </li>
      <li onClick={() => (setSubNav1(!subNav1))}>
        <Phdprogram  nav2 = {props.nav2} subNav1 = {subNav1} />
      </li>
      <li  className={subNav1 ?"hidden":""}>
        <VocationalCourses nav2 = {props.nav2} />
      </li>
      <li  className={subNav1 ?"hidden":""}>
        <Scholarship  nav2 = {props.nav2}/>
      </li >
   
      <SubSubNavList nav1={subNav1} />
    </>
   
        );
};

export default Admissions