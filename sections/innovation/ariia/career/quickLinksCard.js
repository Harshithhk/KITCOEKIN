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
       
        <QuickLinks.Plates  href="https://www.ariia.gov.in/Login">
          Login
        </QuickLinks.Plates>
        <QuickLinks.Plates logo="document" href="documents/innovation/ariia-framework-2021.pdf">
        ARIIA - Framework 2021
        </QuickLinks.Plates>
        <QuickLinks.Plates logo="document" href="documents/innovation/ari-c-10996-report.pdf">
        ARIIA 2020-21 Report
        </QuickLinks.Plates>
     

       
      </QuickLinks>
    </div>
  )
}

export default QuickLinksCard
