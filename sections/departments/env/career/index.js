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

  let title1 = "Scope and Opportunities"
  let discription1 ='Over the centuries, the conditions of existence are experiencing tremendous pressure as a result of Urbanization, industrialization and population explosion. Over use and depletion of environmental resources results in pollution. Environment provides basic needs of water, air, soil required for sustainment of life on earth. Therefore study of the environmental problems and satisfactory technological solutions has become an urgent need. Protection, conservation, sustainment and clean environment are a Global need.\n'+
  '\n'+
  'Environmental engineering is a branch of engineering giving consideration to basic human needs and hence encompasses other disciplines mainly Civil Engineering and to some extent Chemical Engineering. It is an application of different technologies and engineering principles for the improvement of natural environment, healthy living conditions to human and to give assured solutions to remediate pollution in a sound manner.\n'+
  '\n'+
  'With rapid industrialization, urbanization and population explosion, there is increase in environmental problems and its complexity. These problems have drawn significant attention at Local, National and Global levels demanding urgent need of technocrats who are capable of mitigating, eliminating the problems which may be threat to planet earth. The large numbers of opportunities in this field have local as well as global dimensions. Thus as a result, graduates get attractive opportunities in India as well as overseas\n'+
  '\n'+
  'The scope and course content has opened manifold opportunities for the Environmental Engineering Graduates in Professional career and Competitive exams like GATE, GRE, TOPEL, GMAT, MPSC, UPSC, ILTES etc.\n'+
  '\n'+
  'Graduates of Environmental Engineering may opt for higher studies in IIT’s, NIT’s, Research Institutes and renowned Universities in India as well as advanced foreign countries like USA, UK, Canada, Germany, Australia etc. Thus tremendous awareness about Environmental Problems have created and provided enormous opportunities and promising career.'; 
  
  let title2 ="Area of Study"
  let discription2 = 'Environmental Engineering field is multifaceted hence all major subjects of Civil Engineering and allied branches are incorporated in the curriculum.\n'+
  '\n'+
  'Looking at the recent developments, needs & new challenges in the field of Environmental Engineering at Local, National & International level, new subjects are included in the syllabus. The curriculum of B.Tech Environmental Engineering encompasses all basic engineering subjects, all essential subjects of Civil Engineering and emphasizes on core subjects of Environmental Engineering. This creates sound knowledge base and suitability to work in diverse engineering fields.';

  let title3 ="Graduates of Environmental Engineers Have Manifolds Opportunities"
  let discription3 ='1.Government and semi government sector:\n'+
  'Central Pollution Control Board (CPCB)\n'+
  'Maharashtra Pollution Control Board (MPCB)\n'+
  'Maharashtra Energy Development Agency (MEPA)\n'+
  'Ministry of Environmental and Forest (MoEF)\n'+
  'Municipal Corporations, Municipal Councils, Zilla Parishad etc\n'+
  '2.Industries:\n'+
  'Civil: construction, infrastructure, etc\n'+
  'Mechanical, Foundry, Automobile\n'+
  'Chemical and fertilizer, Petrochemical, Paint etc\n'+
  'Agro based: Sugar, Distillery, Dairy etc.\n'+
  'Textile\n'+
  'Pharmaceutical, Biotechnology, Food Processing\n'+
  'Leather and tannery\n'+
  'Paper and pulp\n'+
  'Software companies: Infosys, TCS, Cognizant etc\n'+
  '3.Research and Development:\n'+
  'NEERI {National Environmental Engineering Research Institute}\n'+
  'IISc { Indian Institute of Science}\n'+
  'IIT and NITS\n'+
  'CWPRS {Central Water and Power research Station}\n'+
  '4.Consultancy and Entrepreneurship:\n'+
  'Offering services to Central Government, State Government, Corporations, CPCB , MPCB, and various Industries.';

  let title4 ="Salient Features Of Department"
  let discription4 ='B.Tech in Environmental Engineering is the FIRST and ONLY Course in Maharashtra\n'+
  'Highly qualified and experience Faculty with industrial background\n'+
  'Effective teaching learning process and Excellent University Results & Ranks\n'+
  'Well equipped and modern laboratories\n'+
  'Alumni working at high positions in Central-State Government Departments, top Multinational Companies in India & Abroad\n'+
  'Sound consultancy base (DPR worth of Rs. 250 Crores) and excellent revenue generation.\n'+
  'Funded projects from various Government bodies\n'+
  'Coaching for competitive exams like GATE,MPSC,UPSC,GRE,TOFFEL,IELTS.\n'+
  'Strong Institute & Industry interactions and placements\n'+
  'Entrepreneurship skill development programs and Alumni as entrepreneurs';
  

  
  
  
  
  
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
           
          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       

      </div>
      
    </section>
  )
}

export default Career
