import React from "react"
import Link from "next/link";
import KITNIRF2022DCSENGG from "./KITNIRF2022DCSENGG"
import IPR from "./IPR";
import KITNIRF2022DCSOVERALL from "./KITNIRF2022DCSOVERALL";
import NationalInstitutionalRankingFramework1 from "./NationalInstitutionalRankingFramework1";
import NationalInstitutionalRankingFramework2 from "./NationalInstitutionalRankingFramework2";

const NIRF = (props) => {
  
    return (
      
      <>
      <li>
        <KITNIRF2022DCSENGG subNav3 = {props.subNav3}/>
      </li>
      <li >
        <KITNIRF2022DCSOVERALL subNav3 = {props.subNav3}/>
      </li>
      <li >
        <IPR subNav3 = {props.subNav3}/>
      </li>
      <li >
        <NationalInstitutionalRankingFramework1 subNav3 = {props.subNav3}/>
      </li>
      <li >
        <NationalInstitutionalRankingFramework2 subNav3 = {props.subNav3}/>
      </li>
    </>
   
        );
};

export default NIRF