import React from "react";
import QuickLinks from "../../../../components/QuickLinks"

const QuickLinksCard = () => {

    const [subLink1, setSubLink1] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLink3, setSubLink3] = React.useState(false)
    const [subLink4, setSubLink4] = React.useState(false)
    const [subLink5, setSubLink5] = React.useState(false)

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
                <QuickLinks.SubPlates logo="document"
                  href="documents/departments/bsh/activity-report-2019-20 .pdf"
                >Activity Report 2019-20</QuickLinks.SubPlates>
              </QuickLinks.SubQuickLinks>
            </QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-mechanical-engg-faculty">
              Staff
            </QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-mechanical-engg-laboratories">Laboratories</QuickLinks.Plates>
     
            <QuickLinks.Plates href="kit-gallery?Tab=1">Department Gallery</QuickLinks.Plates>

           

          </QuickLinks>
         
        </div>
    )
}

export default QuickLinksCard;