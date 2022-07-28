import React from "react"
import Link from "next/link";
import AdvisoryCommittee from "./guidelineProcedure"
import GuidelinesInternshipProjecAccounted from "./guidelinesInternshipProjecAccounted";

const InternshipPolicy = (props) => {

    return (
      
      <>
      <li>
        <AdvisoryCommittee subSubNav1 = {props.subSubNav1}/>
      </li>
      <li >
        <GuidelinesInternshipProjecAccounted subSubNav1 = {props.subSubNav1}/>
      </li>
      
    </>
   
        );
};

export default InternshipPolicy