import React from "react";
import AlumniAuthModal from "./alumniAuthModal"
import ForumModal from "./forumModal"
export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(true);
  switch(props.modalToggle){
    case "alumniAuth" : return(<AlumniAuthModal modalToggle ={props.modalToggle}  setModalToggle ={ props.setModalToggle} />);
    case "forumModal" : return(<ForumModal ForumData = {props.ForumData} modalToggle ={props.modalToggle}  setModalToggle ={ props.setModalToggle} />);

    default: return(<></>);
  }
 
}