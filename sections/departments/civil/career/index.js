import React from "react"
import Accordion from "../../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"


const Career = () => {

 

  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)
  const [accordion5, setAccordion5] = React.useState(false)
  const [accordion6, setAccordion6] = React.useState(false)

  let title1 = "About Civil Engineering"
  let discription1 = 'Civil engineering is considered one of the core branches of engineering and is also oldest branch of engineering. Study of civil engineering includes study of all the basic facilities/services related to civilians. This include, but not limited to infrastructure facilities (roads, railway, dams, bridges, water distribution systems, sewerage systems, airports, harbors), having facilities, industrial facilities, military facilities etc.\n'+
  '\n'+
  'Civil engineering students learn to identify civil engineering problems, learn various methods of possible solutions, and managing & executing a suitable solution. In this process, they also learn advanced technologies prevailing in the industry.\n'+
  '\n'+
  'From the available principal subjects of civil engineering, considerable freedom exists for students to choose and concentrate in anyone of the following areas through the selection of suitable complementary courses. Few of the specializations are: Building materials and construction, Structural engineering, Geotechnical engineering, Hydraulics, water resources and irrigation engineering, Water supply and sanitary engineering, Transportation engineering, Town planning and architecture, Surveying, Estimation and specification, Management techniques, Computer application.'; 
  
  let title2 ="About Civil Engineering Department"
  let discription2 = 'The department of civil engineering was established in year 1988 with an intake capacity of 30 students. The intake capacity was then increased to 60 in the year 2007 & subsequently increased to 120 in year 2011. The department is equipped with total 10 labs with an investment of Rs. 1,36,93,135.86 which are used for various academics, research and consultancy works.\n'+
  '\n'+
  'The college has been accreditated by NAAC with 3.12 CGPA. The college has been granted autonomous status as well from the year 2017-18. The department of civil Engineering has accredited by NBA twice for three years terms 2005 and 2008 earlier. The Department is again maintaining an accreditated status since 2017.';
  
  let title3 ="Faculty"
  let discription3 ='The department has well qualified faculties, some with doctorate qualification. They continuously tilted and engaged to impart quality education to students. The faculties are a blend of industry and academics, they are involved in various activities like delivering expert lecture, arranging training programs, workshops etc .they also participate in social government initiatives such as Unnat Bharat Abhiyan, etc.';

  let title4 ="Consultancy"
  let discription4 ='The consultancy cell is actively providing services related to building material testing, structure design reviews, non – destructive testing, surveying, soil Investigation etc. The client list includes various government organization, government and private contractors, builders etc.';

  let title5 ="Students"
  let discription5 ='The students of department are actively participating and winning awards in competitions (projects computer/ paper presentations /sports) apart from achieving academic excellence. The department has large alumni network with graduate students working at various large private institutes with good ranks. They have also succeeded in competitive exams related to civil engineering. Certain students are also successful entrepreneurs.';

  let title6 ="Carrier Opportunities"
  let discription6 ="Civil Engineers can find jobs in Government departments, private and public sector industries, research and teaching institutions, etc. Job opportunities for civil engineers are expected to increase as fast as the average for all jobs, although the construction industry is vulnerable to fluctuations. The experts say there is a high demand for experienced civil engineers in developed and developing countries. Civil engineers are employed in all the major construction projects carried out by the state and central government, the railways, metros, private construction companies, military engineering services, consultancy services, etc. Civil engineering graduates can also go for research and take up teaching or they can open their own independent consultancy services. Depending upon the level, amount and focus of study and/or work experience undertaken, the following opportunities are available to Civil Engineering graduates"


  
  
  
  
  
  return (
    <section className=" px-2   w-full pb-10 sm:w-full  sm:mt-8 flex  md:flex-col items-center">
      {/* HEADING */}
      <div className="flex flex-row gap-x-20  sm:px-0 px-2 sm:flex sm:flex-col">
        
       <div className=" w-5/6 rounded-xl  max-w-5xl     p-6 sm:w-full sm:ml-0 ml-10 ">
          {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
          <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px] sm:leading-normal">
            CONSTRUCT A <span className="text-primary "> STUNNING</span> CAREER
            PERSPECTIVE
          </div>
          <div className="mt-12  sm:w-full bg-transparent leading-[50px]  sm:mt-4">
            
            <Accordion title = {title1} discription ={discription1} setAccordion = {setAccordion1} accordion = {accordion1} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion4,setAccordion5,setAccordion6]}/>
            <Accordion title = {title2} discription ={discription2} setAccordion = {setAccordion2} accordion = {accordion2} setRestAccordion = {[setAccordion1,setAccordion3,setAccordion4,setAccordion5,setAccordion6]}/>
            <Accordion title = {title3} discription ={discription3} setAccordion = {setAccordion3} accordion = {accordion3} setRestAccordion = {[setAccordion2,setAccordion1,setAccordion4,setAccordion5,setAccordion6]}/>
            <Accordion title = {title4} discription ={discription4} setAccordion = {setAccordion4} accordion = {accordion4} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1,setAccordion5,setAccordion6]}/>
            <Accordion title = {title5} discription ={discription5} setAccordion = {setAccordion5} accordion = {accordion5} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1,setAccordion4,setAccordion6]}/>
            <Accordion title = {title6} discription ={discription6} setAccordion = {setAccordion6} accordion = {accordion6} setRestAccordion = {[setAccordion2,setAccordion3,setAccordion1,setAccordion5,setAccordion4]}/>

          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       

      </div>
      
    </section>
  )
}

export default Career
