import React from "react"
import Link from "next/link";
import Meeting1 from "./meeting1"
import Meeting2 from "./meeting3";
import Meeting3 from "./meeting2";
import Meeting4 from "./meeting4";
import Meeting5 from "./meeting5";

const AcademicCouncilMeetingProceedings = (props) => {
  
    return (
      
      <>
      <li>
        <Meeting1 subNav3 = {props.subNav3}/>
      </li>
      <li >
        <Meeting2 subNav3 = {props.subNav3}/>
      </li>
      <li >
        <Meeting3 subNav3 = {props.subNav3}/>
      </li>
      <li >
        <Meeting4 subNav3 = {props.subNav3}/>
      </li>
      <li >
        <Meeting5 subNav3 = {props.subNav3}/>
      </li>
    </>
   
        );
};

export default AcademicCouncilMeetingProceedings