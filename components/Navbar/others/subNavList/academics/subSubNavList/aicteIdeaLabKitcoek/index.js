import React from "react"
import Link from "next/link";
import AdvisoryCommittee from "./advisoryCommittee"
import MentorCommittee from "./mentorCommittee";
import IndustryConnect from "./industryConnect";
import StudentAmbasadoors from "./studentAmbasadoors";

const aicteIdeaLabKitcoek = (props) => {

    return (
      
      <>
      <li>
        <AdvisoryCommittee subNav1 = {props.subNav1}/>
      </li>
      <li >
        <MentorCommittee subNav1 = {props.subNav1}/>
      </li>
      <li >
        <IndustryConnect subNav1 = {props.subNav1}/>
      </li>
      <li >
        <StudentAmbasadoors subNav1 = {props.subNav1}/>
      </li>
    </>
   
        );
};

export default aicteIdeaLabKitcoek