import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"


const Career = () => {

 

  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)
  const [accordion5, setAccordion5] = React.useState(false)
 
  let title1 = "ABET (Accreditation Board for Engineering and Technology)"
  let discription1 = ' ABET accreditation is a widely recognized program that accredits engineering, computing, and technology programs at the undergraduate and graduate level. ABET accreditation ensures that programs meet high-quality standards of education in these fields.';
  
  let title2 = "AACSB (Association to Advance Collegiate Schools of Business)"
  let discription2 = 'AACSB accreditation is a program that accredits business programs at the undergraduate and graduate level. AACSB accreditation ensures that business programs meet high-quality standards of education, research, and professional practice.';
  
  let title3 = "ACS (American Chemical Society)"
  let discription3 = 'The American Chemical Society is an organization that accredits chemistry programs at the undergraduate and graduate level. ACS accreditation ensures that chemistry programs meet high-quality standards of education, research, and professional practice.';
  
  let title4 = "NASPAA (Network of Schools of Public Policy, Affairs, and Administration)"
  let discription4 = 'NASPAA accreditation is a program that accredits public administration and policy programs at the undergraduate and graduate level. NASPAA accreditation ensures that public policy and administration programs meet high-quality standards of education, research, and professional practice.';

  let title5 = "ACEJMC (Accrediting Council on Education in Journalism and Mass Communications)"
  let discription5 = 'ACEJMC accreditation is a program that accredits journalism and mass communication programs at the undergraduate and graduate level. ACEJMC accreditation ensures that journalism and mass communication programs meet high-quality standards of education, research, and professional practice.';

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
            
          <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion1} accordion = {accordion1} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion4,setAccordion5]}/>
          <Accordion title = {title2} discription ={discription2} setAccordion = {setAccordion2} accordion = {accordion2} setRestAccordion = {[setAccordion1,setAccordion3,setAccordion4,setAccordion5]}/>
          <Accordion title = {title3} discription ={discription3} setAccordion = {setAccordion3} accordion = {accordion3} setRestAccordion = {[setAccordion2,setAccordion1,setAccordion4,setAccordion5]}/>
          <Accordion title = {title4} discription ={discription4} setAccordion = {setAccordion4} accordion = {accordion4} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1,setAccordion5]}/>
          <Accordion title = {title5} discription ={discription5} setAccordion = {setAccordion5} accordion = {accordion5} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1,setAccordion4]}/>

          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       

      </div>
      
    </section>
  )
}

export default Career
