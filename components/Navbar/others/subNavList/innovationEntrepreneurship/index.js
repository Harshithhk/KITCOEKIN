import React from "react"
import Link from "next/link";
import ARIIA from "./aRIIA";
import KITE from "./kITE";
import IICKITCOEK from "./iICKITCOEK";
import ECell from "./eCell";



const InnovationEntrepreneurship = (props) => {


    return (
      
      <>
      <li>
        <IICKITCOEK nav5 = {props.nav5} />
      </li>
      <li>
        <KITE nav5 = {props.nav5} />
      </li>
      <li >
        <ECell nav5 = {props.nav5} />
      </li>
      <li >
        <ARIIA nav5 = {props.nav5} />
      </li>
    
    </>
   
        );
};

export default InnovationEntrepreneurship