import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"
const Career = () => {
 
  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)
  const [accordion5, setAccordion5] = React.useState(false)


  let title1 = "Electrical Engineering Program"
  let discription1 = "This program offers students the opportunity to gain in-depth knowledge of electrical engineering principles and practical skills. The curriculum includes courses on power systems, electronics, control systems, and more"


  let title2 = "State-of-the-Art Laboratories"
  let discription2 = "Our department has well-equipped laboratories for hands-on learning, including electrical machines, power electronics, and control systems. Students can apply theoretical knowledge to real-world applications and gain practical experience"


  let title3 = "Industry Collaboration"
  let discription3 = "We have strong partnerships with electrical engineering companies in Maharashtra, providing opportunities for internships, industrial visits, and collaborative research projects. This helps students to bridge the gap between academic theory and industry practices"


  let title4 = "Faculty Expertise"
  let discription4 = "Our faculty members are experienced professionals in the electrical engineering field with strong academic backgrounds. They bring real-world knowledge and expertise into the classroom, enriching the learning experience for students.  ."

  let title5= "Research Opportunities"
  let discription5 = "Our department provides opportunities for research in various areas of electrical engineering, including renewable energy, power systems, control systems, and more. Students have access to state-of-the-art facilities and equipment to conduct research and contribute to scientific knowledge"

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