import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"


const Career = () => {

 

  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  

  let title1 = "Introduction Mechanical Department"
  let discription1 = 'The Department of Mechanical Engineering was established in the year 2002 with an intake of 30 students and at present the intake is increased to 120. The Department is conducting one PG programs viz. M.Tech (CAD/CAM/CAE). Due to the untiring efforts of its enthusiastic, dedicated, experienced faculty and staff and with the support of the management, all its stake holders inclusive of students, the society and the industry, the Department has risen to be recognized as one of the most sought after courses in south Maharashtra. The Department was accredited first time by NBA New Delhi in the year 2008 and second time in the year 2018\n'+
  '\n'+
  'The Department set its Mission, Goals and Objectives in line with the Vision and mission of the institute and to a great extent has achieved them as evident from the overall development of the Department as well as all round development of its major stake holders – its students.';
  let title2 = "Salient Features"
  let discription2 = 'Experienced, Qualified and dedicated faculty through continuous up gradation of skills and knowledge through faculty development programs and STTP\'s and research\n'+
  'Departmental advisory Board comprising of prominent industrialists and academicians for continuous interaction and inputs from industry and reputed institutes\n'+
  'All Departmental faculties are strongly connected to industries under INFACO (Industry Faculty Connect) to upgrade their technical skills through MoUs with industries.\n'+
  'TATA Tech Ready Engineers training programme for all Mechanical Engineering students.\n'+
  'Module Based Learning is carried out to expose the students to the actual practices industries\n'+
  'Project Based Learning (PBL) is implemented for all Mechanical Engineering students to nurture critical thinking and problem solving skills of the students to develop creative and innovative products\n'+
  'Excellent Academic performance in University and other competitive exams like GATE, GRE, TOEFL, CAT etc.\n'+
  'Excellent record of placement of students in best of MNC\'s and corporate like Mercedes Benz, Cummins, Tata Technology, John Deere etc.\n'+
  'Effective Industry Institute Interaction through Industry sponsored projects, training in reputed industries through internship\n'+
  'Professional society activities through SAEINDIA, ASM, ISHRAE, ISNEE, ISNT, BeTIC, MECHANAS, LAMPS, Mechatronics club.\n'+
  'Students have prominent achievements in BAJA, Go-kart and International CanSat Competition 2016 at Texas, USA\n'+
  'The students have been contributing in co-curricular and extracurricular activities regularly and brought laurels to the Department as well as the institute.\n'+
  'Workshops, value added training programs, seminars and guest lectures by prominent experts from industry and professional societies for students.\n'+
  'We promise all the stakeholders enthusiasm and all round efforts to make our students achieve higher goals and bring glory to the Department.';



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
            
            <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion1} accordion = {accordion1} setRestAccordion = {[setAccordion2]}/>
            <Accordion title = {title2} discription ={discription2} setAccordion = {setAccordion2} accordion = {accordion2} setRestAccordion = {[setAccordion1]}/>
       
          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       

      </div>
      
    </section>
  )
}

export default Career
