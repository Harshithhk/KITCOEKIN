import React from "react"
import Link from "next/link";
import ComputerScienceEngineering from "./computerScienceEngineering";
import BiotechnologyEngineering from "./biotechnologyEngineering"
import CivilEngineering from "./civilEngineering"
import ComputerScienceEngineeringBusiness from "./computerScienceEngineeringBusiness"
import CivilEnvironmentalEngineering from "./civilEnvironmentalEngineering"
import ComputerScienceEngineeringDataScience from "./computerScienceEngineeringDataScience"
import ComputerScienceEngineeringAIML from "./computerScienceEngineeringAIML"
import ElectricalEngineering from "./electricalEngineering"
import ElectronicsEngineering from "./electronicsEngineering"
import ElectronicsTelecommEngineering from "./electronicsTelecommEngineering"
import MechanicalEngineering from "./mechanicalEngineering"
import BasicSciencesHumanities from "./basicSciencesHumanities"


const Departments = (props) => {


    return (
    
      <>
      <li>
       <BiotechnologyEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <CivilEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <CivilEnvironmentalEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <ComputerScienceEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <ComputerScienceEngineeringBusiness nav3 = {props.nav3}/>
      </li>
      <li>
       <ComputerScienceEngineeringDataScience nav3 = {props.nav3}/>
      </li>
      <li>
       <ComputerScienceEngineeringAIML nav3 = {props.nav3}/>
      </li>
      <li>
       <ElectricalEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <ElectronicsEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <ElectronicsTelecommEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <MechanicalEngineering nav3 = {props.nav3}/>
      </li>
      <li>
       <BasicSciencesHumanities nav3 = {props.nav3}/>
      </li>

   
   
    
    </>
   
        );
};

export default Departments