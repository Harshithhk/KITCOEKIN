import React from "react"
import Link from "next/link";
import InternshipPolicy from "./internshipPolicy";


const SubSubSubNavList = (props) => {
 
  if(props.subSubNav1 === true){
      return(
        <InternshipPolicy subSubNav1 = {props.subSubNav1} />
      );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubSubNavList