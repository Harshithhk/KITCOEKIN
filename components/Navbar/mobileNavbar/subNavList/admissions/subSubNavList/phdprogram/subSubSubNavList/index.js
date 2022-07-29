import React from "react"
import PhdCenterElectronics from "./PhdCenterElectronics";


const SubSubSubNavList = (props) => {
 
  if(props.nav1 === true){
      return(
        <PhdCenterElectronics nav1 = {props.nav1} />
      );
  }else{
    return(
      <></>
    );
  }

};

export default SubSubSubNavList