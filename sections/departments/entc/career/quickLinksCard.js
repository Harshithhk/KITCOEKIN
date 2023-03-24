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
          logo="dropDown"
          setSubLink={setSubLink3}
          subLink={subLink3}
        >
          Activities
          <QuickLinks.SubQuickLinks setSubLink={setSubLink3} subLink={subLink3}>
            <QuickLinks.SubPlates logo="document">
              Activity report 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/electronics-telecommunication/activities/activity-report-2019-20.pdf"
            >
              Activity report Clips 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates logo="document">
              Activity report 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates logo="document">
              Activity report 2018-19
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink4}
          subLink={subLink4}
        >
          Staff
          <QuickLinks.SubQuickLinks setSubLink={setSubLink4} subLink={subLink4}>
            <QuickLinks.SubPlates href="dept-of-electronics-telecommunication-engg-faculty">
              Staff
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/entc/activities/Consultancy%20and%20Technology%20development%20work.pdf"
            >
              Research And Consultancy
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/entc/activities/fdp.pdf"
            >
              FDP
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/entc/activities/publications.pdf"
            >
              Publications
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/entc/activities/book.pdf"
            >
              Book
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/entc/activities/patents.pdf"
            >
              Patents
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-electronics-telecommunication-engg-laboratories">
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
              href="documents/departments/electronics-telecommunication/placements/etc-placement-2020-21.pdf"
            >
              Placement 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/electronics-telecommunication/placements/etc-placement-record-2019-20.pdf"
            >
              Placement 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/electronics-telecommunication/placements/etc-placement-record.pdf"
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
              href="documents/departments/electronics-telecommunication/internship/etc-department-internship-info.pdf"
            >
              Internship 2020-21
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/electronics-telecommunication/internship/etc-internship-2019-20.pdf"
            >
              Internship 2019-20
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/electronics-telecommunication/internship/entc-intership-details.pdf"
            >
              Internship{" "}
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-electronics-telecommunication-engg-recruiters">
          Recruiters
        </QuickLinks.Plates>

        <QuickLinks.Plates href="dept-of-electronics-telecommunication-engg-mous">
          MOU'S
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-electronics-telecommunication-engg-po-peos">
          PO's & PEO'S
        </QuickLinks.Plates>
        <QuickLinks.Plates
          logo="dropDown"
          setSubLink={setSubLink5}
          subLink={subLink5}
        >
          Student Achievements
          <QuickLinks.SubQuickLinks setSubLink={setSubLink5} subLink={subLink5}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/electronics-telecommunication/activities/student-achievements-21-22.pdf"
            >
              Student Achievements 2021-22
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/departments/electronics-telecommunication/activities/student-achievements-20-21.pdf"
            >
              Student Achievements 2020-21
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>
        <QuickLinks.Plates href="kit-gallery?Tab=1">
          Department Gallery
        </QuickLinks.Plates>
        <QuickLinks.Plates href="dept-of-electronics-telecommunication-engg-newsletter">
          Newsletter
        </QuickLinks.Plates>
      </QuickLinks>
    </div>
  )
}

export default QuickLinksCard
