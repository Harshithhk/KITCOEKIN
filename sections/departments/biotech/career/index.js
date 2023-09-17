import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"
const Career = () => {
 
  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)


  let title1 = "Accreditation Board for Engineering and Technology"
  let discription1 = "ABET is a nonprofit organization that accredits degree programs in engineering, applied science, computing, and engineering technology. Accreditation from ABET indicates that the biotechnology department meets high standards of quality and prepares graduates to enter the profession."

  let title2 = "Commission on Accreditation of Allied Health Education Programs"
  let discription2 = " CAAHEP is a nonprofit organization that accredits educational programs in the health sciences, including biotechnology. Accreditation from CAAHEP ensures that the biotechnology program meets nationally recognized standards and prepares students for employment in the field."

  let title3 = "National Accrediting Agency for Clinical Laboratory Sciences"
  let discription3 = "NAACLS is a nonprofit organization that accredits educational programs in clinical laboratory sciences, including biotechnology. Accreditation from NAACLS indicates that the biotechnology program meets rigorous standards and prepares graduates to work in clinical laboratories."

  let title4 = "International Society for Pharmaceutical Engineering"
  let discription4="ISPE is a professional organization for individuals working in the pharmaceutical and biotechnology industries. Accreditation from ISPE indicates that the biotechnology program meets industry standards and provides students with the skills and knowledge needed to work in the field."


  return (
    <section className=" px-2   w-full pb-10 sm:w-full  sm:mt-8 flex  md:flex-col items-center justify-center">
      {/* HEADING */}
      <div className="flex flex-row gap-x-20  sm:px-0 px-2 sm:flex sm:flex-col">
        
       <div className=" w-5/6 rounded-xl  max-w-5xl    p-6 sm:w-full sm:ml-0 ml-10 ">
          {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
          <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px] sm:leading-normal">
            CONSTRUCT A <span className="text-primary "> STUNNING</span> CAREER
            PERSPECTIVE
          </div>
          <div className="mt-12  sm:w-full bg-transparent leading-[50px]  sm:mt-4">

            <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion4} accordion = {accordion4} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1]}/>
    
            <Accordion title = {title2} discription ={discription2} setAccordion = {setAccordion2} accordion = {accordion2} setRestAccordion = {[setAccordion1,setAccordion3,setAccordion4]}/>
            <Accordion title = {title3} discription ={discription3} setAccordion = {setAccordion3} accordion = {accordion3} setRestAccordion = {[setAccordion2,setAccordion1,setAccordion4]}/>
            <Accordion title = {title4} discription ={discription4} setAccordion = {setAccordion4} accordion = {accordion4} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1]}/>

          </div>
        </div>

{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       
      </div>
      
    </section>
  )
}
export default Career