import React from "react";
import QuickLinks from "../../../components/QuickLinks"

const QuickLinksCard = () => {

    const [subLink1, setSubLink1] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLink3, setSubLink3] = React.useState(false)

    return(
        <div className={`w-auto  rounded-xl p-6 sm:p-2 mt-2 flex flex-col items-start  sm:items-start`}>
          
          <div className="md:text-2xl sm:p-4 text-[#24346D]  text-4xl font-bold flex h-fit sm:-ml-2 sm:mt-2">
            <div className="w-2 h-10 mr-4 sm:h-6 sm:mr-2 sm:mt-1 sm:w-[4px] rounded-md bg-primary"></div>
            Recent Files

          </div>

          <QuickLinks>

            <QuickLinks.Plates logo="document" href="#">Placement Data for Year 2021-22</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="/documents/placements/placement-summaryay-29-oct-2021.pdf">Placement Data for Year 2020-21</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="/documents/placements/placement-data-2019-20.pdf">Placement Data for Year 2019-20</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="/documents/placements/placement-data-2018-19.pdf">Placement Data for Year 2018-19</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="/documents/placements/placement-data-2017-18.pdf">Placement Data for Year 2017-18</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="/documents/placements/placement-data-2016-17.pdf">Placement Data for Year 2016-17</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="/documents/placements/placement-data-2015-16.pdf">Placement Data for Year 2015-16</QuickLinks.Plates>
            <QuickLinks.Plates logo="document" href="/documents/placements/placement-data-2014-15.pdf">Placement Data for Year 2014-15</QuickLinks.Plates>


          </QuickLinks>
         
        </div>
    )
}

export default QuickLinksCard;