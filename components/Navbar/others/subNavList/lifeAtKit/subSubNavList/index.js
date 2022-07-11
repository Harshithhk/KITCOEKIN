import React from "react"
import Link from "next/link";
import Facilities from "./facilities";

const SubSubNavList = (props) => {
 
  if(props.subNav1 === true){
      return(
        <Facilities subNav1 = {props.subNav1} />
      );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubNavList