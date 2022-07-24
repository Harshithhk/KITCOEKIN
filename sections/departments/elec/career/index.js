import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"


const Career = () => {

 

  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)

  let title1 = "Common Courses"
  let discription1 = "Data Structures,Computer Algorithms,Computer Network, Database Engineering, Operating Systems, MICROPROCESSOR" 
  
  return (
    <section className=" px-2   w-full pb-10 sm:w-full  sm:mt-8 flex  md:flex-col items-center">
      {/* HEADING */}
      <div className="flex flex-row gap-x-20  sm:px-0 px-2 sm:flex sm:flex-col">
        
       <div className=" w-5/6 rounded-xl  max-w-5xl    p-6 sm:w-full sm:ml-0 ml-10 ">
          {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
          <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px] sm:leading-normal">
            CONSTRUCT A <span className="text-primary "> STUNNING</span> CAREER
            PERSPECTIVE
          </div>
          <div className="mt-12  sm:w-full bg-transparent leading-[50px]  sm:mt-4">
            
            <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion1} accordion = {accordion1} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion4]}/>
            <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion2} accordion = {accordion2} setRestAccordion = {[setAccordion1,setAccordion3,setAccordion4]}/>
            <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion3} accordion = {accordion3} setRestAccordion = {[setAccordion2,setAccordion1,setAccordion4]}/>
            <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion4} accordion = {accordion4} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1]}/>
    
          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       

      </div>
      
    </section>
  )
}

export default Career
