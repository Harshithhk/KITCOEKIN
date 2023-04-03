import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"
const Career = () => {
 
  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)
  const [accordion5, setAccordion5] = React.useState(false)


  let title1 = "ABET Accreditation"
  let discription1 = "ABET (Accreditation Board for Engineering and Technology) is a US-based non-profit organization that accredits programs in applied and natural science, computing, engineering, and engineering technology. Electrical engineering programs that are ABET-accredited meet the highest standards of education and have been rigorously evaluated for their curricula, faculty, facilities, and student outcomes."


  let title2 = "IEEE Accreditation"
  let discription2 = "The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE accreditation ensures that electrical engineering programs meet global standards for quality and relevance, and that graduates are well-prepared to succeed in their careers."


  let title3 = "ECUK Accreditation"
  let discription3 = "The Engineering Council UK (ECUK) is the regulatory body for the engineering profession in the United Kingdom. ECUK accreditation ensures that electrical engineering programs meet the highest standards of education and that graduates are well-prepared for professional engineering practice."


  let title4 = "JABEE Accreditation"
  let discription4 = "The Japan Accreditation Board for Engineering Education (JABEE) is an independent organization that accredits engineering programs in Japan. JABEE accreditation ensures that electrical engineering programs meet the highest standards of education and that graduates are well-prepared for professional engineering practice in Japan."

  let title5= "Engineers Australia Accreditation"
  let discription5 = "Engineers Australia is the national forum for the advancement of engineering in Australia. Accreditation by Engineers Australia ensures that electrical engineering programs meet the highest standards of education and that graduates are well-prepared for professional engineering practice in Australia."

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