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
  let discription1 = "ABET accreditation is recognized as the highest standard of achievement for post-secondary education programs in applied science, computing, engineering, and engineering technology. ABET accreditation ensures that the curriculum, faculty, facilities, and institutional support are of the highest quality, and that graduates are well-prepared to enter the workforce as competent and ethical professionals."

  
  let title2 = "IEEE Accreditation"
  let discription2 = "The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE accreditation ensures that an engineering program meets the highest standards of excellence in education, research, and innovation in the field of electronics and telecommunications."


  let title3 = "NATE Accreditation"
  let discription3 = "The National Association of Tower Erectors (NATE) is a non-profit organization dedicated to promoting safety and quality in the tower and antenna industry. NATE accreditation ensures that a telecommunications engineering program provides students with the knowledge and skills to work safely and effectively in the field."

  let title4 = "ACEJ Accreditation"
  let discription4 = "The Accreditation Commission for Education in Engineering and Technology (ACEJ) is a non-profit organization that evaluates engineering and engineering technology programs to ensure that they meet the highest standards of academic quality. ACEJ accreditation is recognized as a mark of excellence in the electronics and telecommunications engineering industry."


  let title5= "ECHE Accreditation"
  let discription5 = "The European Network for Accreditation of Engineering Education (ENAEE) is a non-profit organization that promotes and supports the accreditation of engineering education programs throughout Europe. The European Council for Accreditation of Engineering Programs (ECHE) is a part of ENAEE that specifically accredits programs in the fields of electronics and telecommunications engineering. ECHE accreditation ensures that a program meets the highest standards of quality in education and research, and that graduates are well-prepared to enter the global engineering workforce."

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