import React from "react"
import QuickLinks from "../../../../components/QuickLinks"

const QuickLinksCard = () => {
  const [subLink1, setSubLink1] = React.useState(false)
  const [subLink2, setSubLink2] = React.useState(false)
  const [subLink3, setSubLink3] = React.useState(false)
  const [subLink4, setSubLink4] = React.useState(false)
  const [subLink5, setSubLink5] = React.useState(false)
  return (
    <div
      className={`w-auto  rounded-xl p-6 sm:p-2 mt-2 flex flex-col items-start  sm:items-start`}
    >
      <div className="md:text-2xl sm:p-4 text-[#24346D]  text-4xl font-bold flex h-fit sm:-ml-2 sm:mt-2">
        <div className="w-2 h-10 mr-4 sm:h-6 sm:mr-2 sm:mt-1 sm:w-[4px] rounded-md bg-primary"></div>
        Quick Links
      </div>

      <QuickLinks>
        <QuickLinks.Plates
          setSubLink={setSubLink3}
          subLink={subLink3}
          logo="dropDown"
        >
          Activities
          <QuickLinks.SubQuickLinks setSubLink={setSubLink3} subLink={subLink3}>
            <QuickLinks.SubPlates
              href="/documents/departments/environmental/activity/Departmental Activities for AY 2021-22.pdf"
              logo="document"
            >
              AY:2021-22
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              href="/documents/departments/environmental/activity/Departmental Activities for AY 2020-21.pdf"
              logo="document"
            >
              AY:2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              href="/documents/departments/environmental/activity/Departmental Activities for AY 2019-20.pdf"
              logo="document"
            >
              AY:2019-20
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-environmental-engg-faculty">
          Staff
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-environmental-engg-laboratory">
          Laboratories
        </QuickLinks.Plates>

        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink1}
          subLink={subLink1}
        >
          Placement
          <QuickLinks.SubQuickLinks setSubLink={setSubLink1} subLink={subLink1}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/placements/env-placement-record-2021-22.pdf"
            >
              Placement 2021-22
            </QuickLinks.SubPlates>
         
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/placements/env-placement-record-2019-20.pdf"
            >
              Placement 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/placements/env-placement-record-2018-19.pdf"
            >
              Placement 2018-19
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>

        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink2}
          subLink={subLink2}
        >
          Internship
          <QuickLinks.SubQuickLinks setSubLink={setSubLink2} subLink={subLink2}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/internship/Internship Data 2020-21.pdf"
            >
              Internship 2021-22
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates 
              logo="document"
              href="documents/departments/environmental/internship/Internship Data 2021-22.pdf"
            >
              Internship 2020-21
            </QuickLinks.SubPlates>
      
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>

        <QuickLinks.Plates href="dept-of-environmental-engg-recruiters">
          Recruiters
        </QuickLinks.Plates>
        <QuickLinks.Plates logo="document" href="documents/departments/environmental/mou/MoUs - Civil and Environmental Engineering.pdf">
          MOU'S
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-environmental-engg-po-peos">
          PO's & PEO'S
        </QuickLinks.Plates>

        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink4}
          subLink={subLink4}
        >
          Student Achievement
          <QuickLinks.SubQuickLinks setSubLink={setSubLink4} subLink={subLink4}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/achivement/Students Achievement 2019-2020.pdf"
            >
              Students Achievements in 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/achivement/Students Achievement 2020-2021.pdf"
            >
              Students Achievements 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/achivement/Students Achievement 2021-22.pdf"
            >
              Students Achievements 2021-22
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
        <QuickLinks.Plates href="kit-gallery?Tab=1">
          Department Gallery
        </QuickLinks.Plates>

        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink5}
          subLink={subLink5}
        >
          Consultancy Services
          <QuickLinks.SubQuickLinks setSubLink={setSubLink5} subLink={subLink5}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/consultancy/Consultancy services 2021-22.pdf"
            >
              Consultancy Services
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/environmental/consultancy/Departmental Consultancy Activities.pdf"
            >
              Consultancy Activities
            </QuickLinks.SubPlates>
         
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
      </QuickLinks>
    </div>
  )
}

export default QuickLinksCard
