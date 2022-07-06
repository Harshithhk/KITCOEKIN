import React from "react"
import Link from "next/link";
import AboutKit from "./about-kit";
import Accreditation from "./accreditation";
import BoardOfDirectors from "./board-of-directors";

const About = (props) => {
  
    return (
      <>
     <AboutKit nav1 = {props.nav1}/>
     <Accreditation  nav1 = {props.nav1}/>
     <BoardOfDirectors  nav1 = {props.nav1}/>
    </>
   
        );
};

export default About