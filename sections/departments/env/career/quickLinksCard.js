import React from "react";
import QuickLinks from "../../../../components/QuickLinks"

const QuickLinksCard = () => {

    const [subLink1, setSubLink1] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLink3, setSubLink3] = React.useState(false)
    const [subLink4, setSubLink4] = React.useState(false)

    return(
        <div className={`w-auto  rounded-xl p-6 sm:p-2 mt-2 flex flex-col items-start  sm:items-start`}>
          
          <div className="md:text-2xl sm:p-4 text-[#24346D]  text-4xl font-bold flex h-fit sm:-ml-2 sm:mt-2">
            <div className="w-2 h-10 mr-4 sm:h-6 sm:mr-2 sm:mt-1 sm:w-[4px] rounded-md bg-primary"></div>
            Quick Links
          </div>

          <QuickLinks>

            <QuickLinks.Plates setSubLink = {setSubLink3} subLink = {subLink3} logo="dropDown" >
              Activities
              <QuickLinks.SubQuickLinks setSubLink = {setSubLink3} subLink = {subLink3} >
                <QuickLinks.SubPlates href="/documents/departments/environmental/activity/important-workshops-and-seminars-06-february-2020-to-25-february-2021.pdf" logo="document" >Important Workshops 2020-21</QuickLinks.SubPlates>
                <QuickLinks.SubPlates href="/documents/departments/environmental/activity/env-sci-dept-activities-organized-during-last-three-years.pdf" logo="document" >Activities organized Last 3 Years</QuickLinks.SubPlates>
              </QuickLinks.SubQuickLinks>
            </QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-environmental-engg-faculty">Staff</QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-environmental-engg-laboratory">Laboratories</QuickLinks.Plates>

            <QuickLinks.Plates logo="dropDown" setSubLink = {setSubLink1} subLink = {subLink1}>
              Placement
              <QuickLinks.SubQuickLinks setSubLink = {setSubLink1}  subLink = {subLink1} >
                <QuickLinks.SubPlates logo="document" >Placement 2021-22</QuickLinks.SubPlates>
                <QuickLinks.SubPlates logo="document" >Placement 2020-21</QuickLinks.SubPlates>
                <QuickLinks.SubPlates logo="document" >Placement 2019-20</QuickLinks.SubPlates>
                <QuickLinks.SubPlates logo="document" >Placement 2018-19</QuickLinks.SubPlates>
              </QuickLinks.SubQuickLinks>
            </QuickLinks.Plates>

            <QuickLinks.Plates logo="dropDown" setSubLink = {setSubLink2} subLink = {subLink2}>
              Internship
              <QuickLinks.SubQuickLinks setSubLink = {setSubLink2}  subLink = {subLink2} >
                <QuickLinks.SubPlates logo="document">Internship 2020-21</QuickLinks.SubPlates>
                <QuickLinks.SubPlates logo="document">Internship 2019-20</QuickLinks.SubPlates>
                <QuickLinks.SubPlates logo="document">Internships</QuickLinks.SubPlates>
              </QuickLinks.SubQuickLinks>
            </QuickLinks.Plates>

            <QuickLinks.Plates href="dept-of-environmental-engg-recruiters">Recruiters</QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-environmental-engg-mous">MOU'S</QuickLinks.Plates>
            <QuickLinks.Plates href="dept-of-environmental-engg-po-peos">PO's & PEO'S</QuickLinks.Plates>
            
            <QuickLinks.Plates logo="dropDown" setSubLink = {setSubLink4}  subLink = {subLink4}>
              Student Achievement
              <QuickLinks.SubQuickLinks setSubLink = {setSubLink4}  subLink = {subLink4} >
                <QuickLinks.SubPlates logo="document">Students Achievements in 2019-20</QuickLinks.SubPlates>
                <QuickLinks.SubPlates logo="document">Students Achievements</QuickLinks.SubPlates>
              </QuickLinks.SubQuickLinks>
            </QuickLinks.Plates>
            <QuickLinks.Plates>Department Gallery</QuickLinks.Plates>

            <QuickLinks.Plates  logo="document">
              Vocational Courses
              
            </QuickLinks.Plates>

          </QuickLinks>
         
        </div>
    )
}

export default QuickLinksCard;