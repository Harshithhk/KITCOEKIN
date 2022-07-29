import React from "react"
import Link from "next/link";
import PhdResearchCenters from "./PhdResearchCenters";
import AdmissionForm from "./AdmissionForm";
import RulesRegulations from "./RulesRegulations";
import SubSubSubNavList from "./subSubSubNavList";

const Phdprogram = (props) => {
  
  const [subNav1, setSubNav1] = React.useState(false);

    return (
      
      <>
    
      <li  className={subNav1 ?"hidden":""}>
        <AdmissionForm subNav3 = {props.subNav3}/>
      </li>
      <li  className={subNav1 ?"hidden":""}>
        <RulesRegulations subNav3 = {props.subNav3}/>
      </li>
      <li onClick={() => (setSubNav1(!subNav1))}>
        <PhdResearchCenters subNav3 = {props.subNav3}  subNav1 = {subNav1}/>
      </li>
      <SubSubSubNavList nav1 = {subNav1} />
    </>
   
        );
};

export default Phdprogram