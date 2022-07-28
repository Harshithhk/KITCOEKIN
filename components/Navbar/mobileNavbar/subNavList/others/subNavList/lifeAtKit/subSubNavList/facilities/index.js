import React from "react"
import Link from "next/link";
import Library from "./library"
import Hostel from "./hostel";
import Gymkhana from "./gymkhana";
import Canteen from "./canteen";

const Facilities = (props) => {
  

    return (
      
      <>
      <li  >
        <Library subNav1 = {props.subNav1}/>
      </li>
      <li >
        <Hostel subNav1 = {props.subNav1}/>
      </li>
      <li >
        <Gymkhana subNav1 = {props.subNav1}/>
      </li>
      <li >
        <Canteen subNav1 = {props.subNav1}/>
      </li>
    </>
   
        );
};

export default Facilities