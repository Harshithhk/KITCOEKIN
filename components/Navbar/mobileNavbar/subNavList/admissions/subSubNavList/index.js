import React from "react"
import Phdprogram from "./phdprogram";

const SubSubNavList = (props) => {
 
  if(props.nav1 === true){
      return(
        <Phdprogram nav1 = {props.nav1} />
      );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubNavList