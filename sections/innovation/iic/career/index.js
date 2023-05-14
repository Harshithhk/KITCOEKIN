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
    <section className=" px-2   w-full pb-10 sm:w-full  sm:mt-8 flex  md:flex-col items-center">
      {/* HEADING */}
      <div className="flex flex-row gap-x-20  sm:px-0 px-2 sm:flex sm:flex-col">
        
       <div className=" w-5/6 rounded-xl  max-w-5xl    p-6 sm:w-full sm:ml-0 ml-10 ">
          {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
         
          <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                ABOUT IIC


              </div>
              <div className="mt-10 sm:mt-4 w-[700px] text-xl text-accent text-justify sm:w-full sm:text-base">
              Ministry of Education (MoE), Govt. of India has established 'MoE's Innovation Cell (MIC) to systematically foster the culture of Innovation among all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are informative years.
              <br/><br/>
              MIC has envisioned encouraging creation of 'Institution's Innovation Council (IICs) across selected HEIs. A network of IICs are established to promote innovation and entrepreneurship in the Institution through multitudinous modes leading to an innovation promotion ecosystem in the campuses. MIC has established Institution's Innovation Council in more than 2200 Instiutions till November 2020.


              </div>
        </div>

{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col mt-4 justify-center"> <QuickLinksCard /></div>
       
      </div>
      
    </section>
  )
}
export default Career