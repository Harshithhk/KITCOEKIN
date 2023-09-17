import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"
const Career = () => {
 
  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)
  const [accordion5, setAccordion5] = React.useState(false)

  
  let title1 = "Accreditation Board for Engineering and Technology "
  let discription1 = "ABET is a non-profit organization that accredits engineering programs worldwide. Their accreditation process is based on a set of criteria that evaluates programs on their curriculum, faculty, facilities, and student outcomes."


  let title2 = "Institute of Electrical and Electronics Engineers"
  let discription2 = "IEEE is a professional association for engineers that also accredits electronics engineering programs. Their accreditation process evaluates programs on their curriculum, faculty, facilities, and student outcomes, as well as their alignment with industry standards."


  let title3 = "Accreditation Commission for Electronics Engineering Technology "
  let discription3 = "ACET is a specialized accrediting agency that focuses on electronics engineering technology programs. Their accreditation process evaluates programs on their curriculum, faculty, facilities, and student outcomes, as well as their alignment with industry standards."

  let title4 = "Engineering Accreditation Commission "
  let discription4 = "EAC is a division of ABET that specifically accredits engineering programs. Their accreditation process evaluates programs on their curriculum, faculty, facilities, and student outcomes, as well as their alignment with industry standards."

  let title5= "National Association of Radio and Telecommunications Engineers "
  let discription5 = "NARTE is a professional association for engineers that offers certification programs in electronics engineering. Their certification process evaluates individuals' knowledge and skills in electronics engineering and verifies their competency in the field."

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