import React from "react"
import Link from "next/link";
import AboutKit from "./about-kit";
import Accreditation from "./accreditation";
import BoardOfDirectors from "./board-of-directors";
import FountersTrustees from "./founder-trustees";
import GoverningCouncil from "./governing-council";
import Milestones from "./milestones";
import CollegeAdministration from "./college-administration";
import OfficeAdministration from "./office-administration";
import IQAC from "./iqac";
import StaffList from "./staff-list";
import NIRF from "./NIRF";
import ManditoryDisclosure from "./manditory-disclosure";
import SubSubNavList from "./subSubNavList";

const About = (props) => {


  const [subNav1, setSubNav1] = React.useState(false);

    return (
      
      <>
      <li className={subNav1 ?"hidden":""}>
        <AboutKit nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <FountersTrustees nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <BoardOfDirectors nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <GoverningCouncil nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <Milestones nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <CollegeAdministration nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <OfficeAdministration nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <IQAC nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 ?"hidden":""}>
        <StaffList nav1 = {props.nav1}/>
      </li>
      <li onClick={() => (setSubNav1(!subNav1))} >
        <NIRF nav1 = {props.nav1} subNav1 = {subNav1}/>
      </li>
      {/* <li className={subNav1 ?"hidden":""}>
        <Accreditation nav1 = {props.nav1}/>
      </li> */}
      <li className={subNav1 ?"hidden":""}>
        <ManditoryDisclosure nav1 = {props.nav1}/>
      </li>
      <SubSubNavList nav1={subNav1} />
    </>
   
        );
};

export default About