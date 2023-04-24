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
        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink3}
          subLink={subLink3}
        >
          Activities
          <QuickLinks.SubQuickLinks setSubLink={setSubLink3} subLink={subLink3}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/cse/activities/activity-report-2021-22.pdf"
            >
              Activity Report 2021-22
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/cse/activities/activity-report-2020-21.pdf"
            >
              Activity Report 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/cse/downloads/all-activities-ay-2019-2020.pdf"
            >
              Activity Report 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates logo="document">
              Activity Report 2018-19
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
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
              href="documents/departments/cse/placements/cse-placement-data-master-ay-2020-21.pdf "
            >
              {" "}
              Placement 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/cse/placements/cse-placement-details.pdf "
            >
              Placement 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/cse/placements/cse-placements-2018-19.pdf"
            >
              Placement 2018-19
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
        <QuickLinks.Plates
          logo="document"
          href="documents//departments/cseBusiness/syllabus/CSBS Syllabus.pdf"
        >
          Syllabus
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
              href="documents/departments/cse/internship/cse-department-internship-info.pdf "
            >
              Internship 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/cse/internship/cse-internship-details-2019-20.pdf "
            >
              Internship 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href=" documents/departments/cse/internship/cse-internship-details-2018-19.pdf"
            >
              Internship 2018-19
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>

        <QuickLinks.Plates href="dept-of-biotechnology-engg-recruiters">
          Recruiters
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-biotechnology-engg-mous">
          MOU'S
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-biotechnology-po-peo">
          PO's & PEO'S
        </QuickLinks.Plates>
        <QuickLinks.Plates
          logo="document"
          href="documents//departments/cse/activities/cse-student-achievement-details.pdf"
        >
          Student Achievements
        </QuickLinks.Plates>
        <QuickLinks.Plates href="kit-gallery?Tab=1">
          Department Gallery
        </QuickLinks.Plates>
        <QuickLinks.Plates>Press Release</QuickLinks.Plates>
      </QuickLinks>
    </div>
  )
}

export default QuickLinksCard
