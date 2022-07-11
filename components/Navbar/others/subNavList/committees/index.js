import React from "react"
import Link from "next/link";
import GovernanceCommittee from "./governanceCommittee";
import StatutoryCommittee from "./statutoryCommittee";
import WomenDevelopmentCell from "./womenDevelopmentCell";



const Committees = (props) => {


    return (
      
      <>
      <li>
       <GovernanceCommittee nav3 = {props.nav3}/>
      </li>
      <li>
       <StatutoryCommittee nav3 = {props.nav3}/>
      </li>
      <li>
       <WomenDevelopmentCell nav3 = {props.nav3}/>
      </li>
    
    </>
   
        );
};

export default Committees