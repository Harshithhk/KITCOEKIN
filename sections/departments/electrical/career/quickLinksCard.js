import React from "react";
import QuickLinks from "../../../../components/QuickLinks"

const QuickLinksCard = () => {

    const [subLink1, setSubLink1] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLink3, setSubLink3] = React.useState(false)

    return(
        <div className={`w-auto  rounded-xl p-6 sm:p-2 mt-2 flex flex-col items-start  sm:items-start`}>
          
          <div className="md:text-2xl sm:p-4 text-[#24346D]  text-4xl font-bold flex h-fit sm:-ml-2 sm:mt-2">
            <div className="w-2 h-10 mr-4 sm:h-6 sm:mr-2 sm:mt-1 sm:w-[4px] rounded-md bg-primary"></div>
            Quick Links
          </div>

          <QuickLinks>

            <QuickLinks.Plates logo="dropDown" setSubLink = {setSubLink3}  subLink = {subLink3}>
              Activities
              <QuickLinks.SubQuickLinks setSubLink = {setSubLink3}  subLink = {subLink3} >
                <QuickLinks.SubPlates logo="document" >Activity Report 2020-21</QuickLinks.SubPlates>
                <QuickLinks.SubPlates logo="document" href="documents/departments/electrical/Electro-talk%20Newsletter.pdf">Electro-talk Newsletter</QuickLinks.SubPlates>
              </QuickLinks.SubQuickLinks>
            </QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-electrical-engg-faculties">Staff</QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-electrical-engg-laboratories">Laboratories</QuickLinks.Plates>

            <QuickLinks.Plates logo="document" href="documents/departments/electrical/placement/Ele_Placement%20Data_2021_22.pdf">
              Placement
             
            </QuickLinks.Plates>

            <QuickLinks.Plates logo="document" href="documents/departments/electrical/Internship/Ele_Internship%20Details_2021_22.pdf">
              Internship
            
            </QuickLinks.Plates>

            <QuickLinks.Plates href="#">Recruiters</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="documents/departments/electrical/mou/MOU-Electrical%20Engineering.pdf">MOU'S</QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-electrical-engg-po-peo">PO's & PEO'S</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="documents/departments/electrical/activity/electrical-student-achievements.pdf">Student Achievements</QuickLinks.Plates>
            <QuickLinks.Plates>Department Gallery</QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-electrical-engg-press-release">Press Release</QuickLinks.Plates>

           

          </QuickLinks>
         
        </div>
    )
}

export default QuickLinksCard;