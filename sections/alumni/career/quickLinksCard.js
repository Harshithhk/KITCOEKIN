import React, { useEffect } from "react";
import QuickLinks from "../../../components/QuickLinks"
import Modal from "../../../components/Modal2";
import { isUserSignedIn } from "../../../utils/auth";
const QuickLinksCard = (props) => {

    const [subLink1, setSubLink1] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLink3, setSubLink3] = React.useState(false)

    const [authText, setAuthText] = React.useState(null)

    useEffect(()=>{
      setAuthText(isUserSignedIn())
    },[])

    

    return(
        <div className={`w-auto  rounded-xl p-6 sm:p-2 mt-2 flex flex-col items-start  sm:items-start`}>
          
          <div className="md:text-2xl sm:p-4 text-[#24346D]  text-4xl font-bold flex h-fit sm:-ml-2 sm:mt-2">
            <div className="w-2 h-10 mr-4 sm:h-6 sm:mr-2 sm:mt-1 sm:w-[4px] rounded-md bg-primary"></div>
            Quick Links
          </div>

          <QuickLinks>

           
            <QuickLinks.Plates href="alumni-about">About Association</QuickLinks.Plates>
          
              {
                authText == 0 ? 
                  <QuickLinks.Plates setAuthText={setAuthText} authText = {authText}  setModalToggle = {props.setModalToggle} modalPath = "alumniAuth"> SignIn / SignUp  </QuickLinks.Plates>
                :
                  <QuickLinks.Plates setAuthText={setAuthText}  authText = {authText}> SignOut  </QuickLinks.Plates>
              }
           
              <div className={`${authText == 0 ? "hidden":"" }`}>
              <QuickLinks.Plates href="alumni-profile">Profile Page</QuickLinks.Plates>
            </div>
            <QuickLinks.Plates href="alumni-activities" focusLink="New">Activities</QuickLinks.Plates>
            <QuickLinks.Plates href="alumni-list">Alumni List</QuickLinks.Plates>
            <QuickLinks.Plates href="alumni-achievements">Achievements</QuickLinks.Plates>
            <QuickLinks.Plates href="kit-gallery?Tab=16">Gallery</QuickLinks.Plates>
            {/* <QuickLinks.Plates href="alumni-forum">Forums</QuickLinks.Plates> */}
            <QuickLinks.Plates href="contact">Contact Us</QuickLinks.Plates>

         
 
           

          </QuickLinks>
         
        </div>
    )
}

export default QuickLinksCard;