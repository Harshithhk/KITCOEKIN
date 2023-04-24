import React from "react"
import QuickLinks from "../../../../components/QuickLinks"

const QuickLinksCard = () => {
  const [subLink1, setSubLink1] = React.useState(false)
  const [subLink2, setSubLink2] = React.useState(false)
  const [subLink3, setSubLink3] = React.useState(false)

  return (
    <div
      className={`w-auto  rounded-xl p-6 sm:p-2 mt-2 flex flex-col items-start  sm:items-start`}
    >
      <div className="md:text-2xl sm:p-4 text-[#24346D]  text-4xl font-bold flex h-fit sm:-ml-2 sm:mt-2">
        <div className="w-2 h-10 mr-4 sm:h-6 sm:mr-2 sm:mt-1 sm:w-[4px] rounded-md bg-primary"></div>
        Quick Links
      </div>

      <QuickLinks>
        <QuickLinks.Plates logo="document" href="documents/departments/biotechnology/activities/Activities-Bio-2021-22.pdf">
          Activities
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-biotechnology-engg-faculty">
          Staff
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-biotechnology-engg-laboratories">
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
              href="documents/departments/biotechnology/placements/Placements Jobs_2021-22.pdf"
            >
              Jobs
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/biotechnology/placements/Higher education placement_2021-22.pdf"
            >
              Placement for Higher Education
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
              href="documents/departments/biotechnology/internship/Internship 21-22.pdf"
            >
              Internship 2021-22
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/biotechnology/internship/Internship 20-21.pdf"
            >
              Internship 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/biotechnology/internship/internship-students-training-details-ay-2019-20.pdf"
            >
              Internship 2019-20
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>

        <QuickLinks.Plates href="dept-of-biotechnology-engg-recruiters">
          Recruiters
        </QuickLinks.Plates>
        <QuickLinks.Plates logo="document" href="documents/departments/biotechnology/mou/MOU.pdf">
          MOU'S
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-biotechnology-po-peo">
          PO's & PEO'S
        </QuickLinks.Plates>
        <QuickLinks.Plates
          logo="document"
          href="documents/departments/biotechnology/achivements/Student Acheivement.pdf"
        >
          Student Achievements
        </QuickLinks.Plates>
        <QuickLinks.Plates href="kit-gallery?Tab=1">
          Department Gallery
        </QuickLinks.Plates>

        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink3}
          subLink={subLink3}
        >
          Alumni
          <QuickLinks.SubQuickLinks setSubLink={setSubLink3} subLink={subLink3}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/biotechnology/alumni/Alumni activities 2021-22.pdf"
            >
              Alumni Activities
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/biotechnology/alumni/biotech-8-alumni-success-stories.pdf"
            >
              Alumni Success Stories
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
      </QuickLinks>
    </div>
  )
}

export default QuickLinksCard
