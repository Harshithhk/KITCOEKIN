import React from "react"
import Link from "next/link";
import MoodleLinks from "./moodleLinks";
import ContineoLinks from "./contineoLinks";
import KITCOEKVirtualLab from "./kITCOEKVirtualLab";

const OtherPlatformLinks = (props) => {

    return (
      
      <>
      <li>
        <MoodleLinks subNav5 = {props.subNav5}/>
      </li>
      <li >
        <ContineoLinks subNav5 = {props.subNav5}/>
      </li>
      <li >
        <KITCOEKVirtualLab subNav5 = {props.subNav5}/>
      </li>
    </>
   
        );
};

export default OtherPlatformLinks