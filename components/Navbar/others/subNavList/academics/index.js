import React from "react"
import Link from "next/link";
import AICTEIdeaLab from "./aicte-idea-lab-kitcoek";
import RulesRegulationPG from "./rulesRegulationPG";
import RulesRegulationUG from "./rulesRegulationUG";
import OnlineSyllabus from "./online-syllabus";
import MoodleLinks from "./moodleLinks";
import ContineoLinks from "./contineoLinks";
import InternshipPolicy from "./internshipPolicy";
import AcademicCouncilMeetingProceedings from "./academicCouncilMeetingProceedings";
import AcademicCalendar from "./academicCalendar";
import ModalitiesForAbsorptionOfStudentsFrom from "./modalitiesForAbsorptionOfStudentsFrom";
import KITCOEKVirtualLab from "./kITCOEKVirtualLab";
import SubSubNavList from "./subSubNavList";

const Academics = (props) => {


  const [subNav1, setSubNav1] = React.useState(false);
  const [subNav2, setSubNav2] = React.useState(false);
  const [subNav3, setSubNav3] = React.useState(false);
  const [subNav4, setSubNav4] = React.useState(false);

    return (
      
      <>
      <li onClick={() => (setSubNav1(!subNav1))} className={subNav2 || subNav3 || subNav4 ?"hidden":""}>
        <AICTEIdeaLab nav1 = {props.nav1} subNav1 = {subNav1}/>
      </li>
      <li className={subNav1 || subNav2 || subNav3 || subNav4?"hidden":""}>
        <RulesRegulationUG nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 || subNav2 || subNav3 || subNav4?"hidden":""}>
        <RulesRegulationPG nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 || subNav2 || subNav3  || subNav4?"hidden":""}>
        <OnlineSyllabus nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 || subNav2 || subNav3 || subNav4?"hidden":""}>
        <MoodleLinks nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 || subNav2 || subNav3 || subNav4 ?"hidden":""}>
        <ContineoLinks nav1 = {props.nav1}/>
      </li>
      <li className={subNav1 || subNav3 || subNav4?"hidden":""} onClick={() => (setSubNav2(!subNav2))}>
        <InternshipPolicy nav1 = {props.nav1} subNav2 = {subNav2}/>
      </li>
      <li className={subNav1 || subNav2  || subNav4?"hidden":""} onClick={() => (setSubNav3(!subNav3))}>
        <AcademicCouncilMeetingProceedings nav1 = {props.nav1} subNav3 = {subNav3}/>
      </li>
      <li className={subNav1 || subNav2 || subNav3 ?"hidden":""} onClick={() => (setSubNav4(!subNav4))} >
        <AcademicCalendar nav1 = {props.nav1} subNav4 = {subNav4} />
      </li>
      <li className={subNav1 || subNav2 || subNav3 || subNav4?"hidden":""} >
        <ModalitiesForAbsorptionOfStudentsFrom nav1 = {props.nav1}/>
      </li> 
      <li className={subNav1 || subNav2 || subNav3 || subNav4?"hidden":""}>
        <KITCOEKVirtualLab nav1 = {props.nav1}/>
      </li>
      <SubSubNavList subNav1 = {subNav1} subNav2 = {subNav2}  subNav3 = {subNav3} subNav4 = {subNav4} />
    
    </>
   
        );
};

export default Academics