import React from "react"
import Link from "next/link";
import RulesRegulationUG from "./rulesRegulationUG";
import RulesRegulationPG from "./rulesRegulationPG";
import ModalitiesForAbsorptionOfStudentsFrom from "./modalitiesForAbsorptionOfStudentsFrom";
import SubSubSubNavList from "./subSubSubNavList";
import InternshipPolicy from "./internshipPolicy";

const ImportantDocuments = (props) => {
  const [subSubNav1, setSubSubNav1] = React.useState(false);
    return (
      
      <>
      <li className={ subSubNav1 ?"hidden":""}>
        <RulesRegulationUG subNav6 = {props.subNav6}/>
      </li>
      <li className={ subSubNav1 ?"hidden":""}>
        <RulesRegulationPG subNav6 = {props.subNav6}/>
      </li>
      <li className={ subSubNav1 ?"hidden":""}>
        <ModalitiesForAbsorptionOfStudentsFrom subNav6 = {props.subNav6}/>
      </li>
      <li onClick={() => (setSubSubNav1(!subSubNav1))}>
        <InternshipPolicy subNav6 = {props.subNav6} subSubNav1 = {subSubNav1}/>
      </li>
      <SubSubSubNavList subSubNav1 = {subSubNav1}  />
    </>
   
        );
};

export default ImportantDocuments