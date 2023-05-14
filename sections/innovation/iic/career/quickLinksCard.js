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
          setSubLink={setSubLink1}
          subLink={subLink1}
        >
          Policies
          <QuickLinks.SubQuickLinks setSubLink={setSubLink1} subLink={subLink1}>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/innovation/policies/institutional-innovation-&-startup-policy-2021.pdf"
            >
              Institutional Innovation & Startup Policy -2021
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/innovation/policies/national-innovation-&-startup-policy-2019.pdf"
            >
              National Innovation & Startup Policy 2019
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/innovation/policies/maharashtra-state-innovative-startup-policy-2018.pdf"
            >
              Maharashtra State Innovative Startup Policy 2018
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/innovation/policies/student-startp-policy-gujarat.pdf"
            >
              Student Startup Policy - Gujrat
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/innovation/policies/startup-india-kit-v5.pdf"
            >
              Startup India Kit
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/innovation/policies/patent-facilitators.pdf"
            >
              Patent Facilitators
            </QuickLinks.SubPlates>
            <QuickLinks.SubPlates
              logo="document"
              href="documents/innovation/policies/guidelines-for-startup-india-seed-fund-scheme.pdf"
            >
              Guidelines for Startup India Seed Fund Schemes
            </QuickLinks.SubPlates>
          </QuickLinks.SubQuickLinks>
        </QuickLinks.Plates>

        <QuickLinks.Plates logo="document" href="documents/innovation/iic-kitcoek-members.pdf">
          IIC-KITCOEK Members
        </QuickLinks.Plates>
        <QuickLinks.Plates logo="document" href="documents/innovation/iic-kitcoek-meetings.pdf">
          IIC-KITCOEK Meetings
        </QuickLinks.Plates>
        <QuickLinks.Plates logo="document" href="documents/innovation/iic-activities-conducted-year-20-21.pdf">
        Activities
        </QuickLinks.Plates>
        <QuickLinks.Plates logo="document" href="documents/innovation/action-plan-implemented-through-iic-at-hei.pdf">
        Action Plan
        </QuickLinks.Plates>

       
      </QuickLinks>
    </div>
  )
}

export default QuickLinksCard
