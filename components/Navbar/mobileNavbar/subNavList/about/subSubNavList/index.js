import React from "react"
import NIRF from "./NIRF";

const SubSubNavList = (props) => {
 
  if(props.nav1 === true){
      return(
        <NIRF nav1 = {props.nav1} />
      );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubNavList