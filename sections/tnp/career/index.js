import React from "react"
import Accordion from "../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"


const Career = () => {

 

  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)

  let title1 = "----Title----"
  let discription1 = "----Body-----" 
  
  return (
    <section className=" px-2   w-full pb-10 sm:w-full  sm:mt-8 flex  md:flex-col items-center">
      {/* HEADING */}
      <div className="flex flex-row gap-x-20  sm:px-0 px-2 sm:flex sm:flex-col">
        
       <div className=" w-5/6 rounded-xl  max-w-5xl    p-6 sm:w-full sm:ml-0 ml-10 ">
          {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
          <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px] sm:leading-normal">
          CAMPUS <span className="text-primary "> PLACEMENT </span> IN LAST 3 YEARS
          </div>
          <div className="mt-12  sm:w-full bg-transparent leading-[50px]  sm:mt-4">
           
           
           <div className="grid grid-cols-1 bg-white rounded-xl items-center text-center justify-center">
            <div className="grid grid-cols-3 items-center justify-center text-center">
            <div>ssa</div>
            <div>ssa</div>
            <div>ssa</div>
            </div>
            <div className="grid grid-rows-3">
              <div>ssa</div>
              <div>ssa</div>
              <div>ssa</div>
            </div>
           </div>
            
          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       

      </div>
      
    </section>
  )
}

export default Career
