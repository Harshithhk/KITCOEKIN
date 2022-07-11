import React from "react"
import Link from "next/link";
import NCC from "./nCC";
import Cultural from "./cultural";
import Facilities from "./facilities";
import Feedback2021 from "./feedback2021";
import NationalServiceScheme from "./nationalServiceScheme";
import SubSubNavList from "./subSubNavList";


const LifeAtKit = (props) => {

  const [subNav1, setSubNav1] = React.useState(false);
    return (
      
      <>
      <li onClick={() => (setSubNav1(!subNav1))}>
        <Facilities nav4 = {props.nav4} subNav1 = {subNav1} />
      </li>
      <li className={subNav1 ?"hidden":""}>
        <Cultural nav4 = {props.nav4} />
      </li>
      <li className={subNav1 ?"hidden":""}>
        <NationalServiceScheme nav4 = {props.nav4} />
      </li>
      <li className={subNav1 ?"hidden":""}>
        <NCC nav4 = {props.nav4} />
      </li>
      <li className={subNav1 ?"hidden":""}>
        <Feedback2021  nav4 = {props.nav4}/>
      </li >
     <SubSubNavList nav4 = {props.nav4} subNav1 = {subNav1} />
    
    </>
   
        );
};

export default LifeAtKit