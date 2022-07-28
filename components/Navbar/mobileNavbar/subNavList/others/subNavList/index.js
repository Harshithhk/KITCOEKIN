import React from "react"
import Link from "next/link";
import Academics from "./academics";
import ExamCell from "./examCell";
import Committees from "./committees";
import LifeAtKit from "./lifeAtKit";
import InnovationEntrepreneurship from "./innovationEntrepreneurship";

const SubNavList = (props) => {
 
  if(props.nav1 === true){
      return(
        <Academics nav1 = {props.nav1} />
      );
  }else if(props.nav2 === true){
    return(
      <ExamCell  nav2 = {props.nav2} />
    );
  }else if( props.nav3=== true){
    return(
      <Committees   nav3 = {props.nav3} />
    );
  }else if( props.nav4=== true){
    return(
      <LifeAtKit   nav4 = {props.nav4} />
    );
  }else if( props.nav5=== true){
    return(
      <InnovationEntrepreneurship   nav5 = {props.nav5} />
    );
  }else{
    return(
      <></>
    );
  }

};

export default SubNavList