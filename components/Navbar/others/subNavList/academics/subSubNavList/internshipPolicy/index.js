import React from "react"
import Link from "next/link";
import AdvisoryCommittee from "./guidelineProcedure"
import GuidelinesInternshipProjecAccounted from "./guidelinesInternshipProjecAccounted";

const InternshipPolicy = (props) => {

    return (
      
      <>
      <li>
        <AdvisoryCommittee subNav2 = {props.subNav2}/>
      </li>
      <li >
        <GuidelinesInternshipProjecAccounted subNav2 = {props.subNav2}/>
      </li>
      
    </>
   
        );
};

export default InternshipPolicy