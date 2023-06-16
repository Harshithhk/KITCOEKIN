import React from "react"
import QuickLinksCard from "./quickLinksCard"


const Career = (props) => {

 

  const [accordion1, setAccordion1] = React.useState(true)
  const [accordion2, setAccordion2] = React.useState(false)
  const [accordion3, setAccordion3] = React.useState(false)
  const [accordion4, setAccordion4] = React.useState(false)
  const [accordion5, setAccordion5] = React.useState(false)

  let title1 = "Our Initiatives"
  let discription1 = 'Spoken Tutorial\n'+
      'The Spoken Tutorial Project is about teaching and learning a particular FOSS (Free and Open Source Software) like Linux, Scilab, LaTeX, PHP & MySQL, Java, C/C++, LibreOffice etc. via an easy Video tool - Spoken Tutorials.\n'+
      '\n'+
      'We are conducting several workshops in collaboration with Spoken Tutorial, IIT Bombay and also conduct spoken tutorial certification exam for student’s development.\n'+
      '\n'+
      'NPTEL(National Programme for Technology Enhanced Learning)\n'+
      'National Programme for Technology Enhanced Learning is a joint initiative from IITs and IISc to offer online courses and certification in various topic.\n'+
      '\n'+
      'We have started NPTEL local chapter in the year 2018. The faculty members and students of our department have completed their online certification exam under this chapter\n'+
      '\n'+
      'Project Based Learning (PBL)\n'+
      'PBL prepares students for academic, personal, and career success, and readies young people to rise to the challenges of their lives and the world they will inherit.\n'+
      '\n'+
      'We have incorporated Project based Learning(PBL) method in our curriculum so that our student can utilize the problem solving approach in their studies.';

  let title2 = "Common Courses"
  let discription2 = "Data Structures,Computer Algorithms,Computer Network, Database Engineering, Operating Systems, MICROPROCESSOR"

  let title3 = "Specialized Courses"
  let discription3 = "Natural Laguage Processing, Data Analytics, High Performance Computing, Software Testing and Quality Assurance, Digital Image Processing, Internet of Things, Cloud Computing and Software Defined Network"
  
  let title4 = "Application Areas"
  let discription4 = "Software Development, Web Development, Mobile Aapplication Development, Software Testing, Quality Assurance, Network Administration."
  
  let title5 = "Career Opportunities"
  let discription5 = "Software Engineer, DataBase Administrator, Computer Hardware Engineer, Web Developer, Project Manager, Computer Science Blogger, Computer Network Architect, Network Engineer, Software Analyst, Programmer, Online Marketer."

  return (
    <section className=" px-2   w-full pb-10 sm:w-full  sm:mt-8 flex  md:flex-col items-center">
      {/* HEADING */}
      <div className="flex flex-row gap-x-20  sm:px-0 px-2 sm:flex sm:flex-col">
        
       <div className=" w-5/6 rounded-xl  max-w-5xl    p-6 sm:w-full sm:ml-0 ml-10 ">
          {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
          <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px] sm:leading-normal">
            CONSTRUCTING A <span className="text-primary "> BENIFIT</span> For ALL ALUMNI!
          </div>
          <div className="mt-12  sm:w-full bg-transparent leading-[50px]  sm:mt-4">
          <iframe className="w-[700px] h-[320px] sm:w-auto rounded-lg" src="https://www.youtube.com/embed/6L2T1G_QDWQ?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)|MURLIDHAR PARULEKAR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard setModalToggle = {props.setModalToggle} /></div>
       

      </div>
      
    </section>
  )
}

export default Career
