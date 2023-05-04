import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/departments/career"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"
import { Section1 } from "../sections/admissions/vocationalCurses/section1"
import { Section2 } from "../sections/admissions/vocationalCurses/section2"

const VocationalCourses = () => {

    const [subLink, setSubLink] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLinkHover1, setSubLinkHover1] = React.useState(false)
    const [subLinkHover2, setSubLinkHover2] = React.useState(false)

  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
        <section className="flex flex-col h-[250px] items-center w-full relative">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
            alt=""
          />
          <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
          >
            Vocational Courses
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Vocational Courses
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}
        
        <Section2 />
        <Section1 />
         
              
        </section>
        <div className="w-full mt-16 pb-16 bg-white h-fit ">
                <div className="m-4 ">
                    <div className="pt-20 sm:pt-20 px-6 sm:px-0  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        Why Choose BIM as Career Option
                    </div>
                    <div className="flex flex-col items-center sm:flex-col">
           
                        <div className=" shadow-lg items-center grid grid-cols-2  w-[1100px] h-fit p-2 mt-6 bg-[#F8F7FC] font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                            <div className="">Trade</div>
                            <div className="">Skill Gap Identified</div>
                         
                        </div>
                
                        <div className="shadow-lg  grid grid-cols-2  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                                {/* row end */}
                                <div className="">Civil Engineering</div>
                                <div className="text-4xl sm:block 3xl:hidden 2xl:hidden">&#8595;</div>
                                <div className="text-justify sm:hidden">Feedback from various recruiters is received by the department
                                    from time to time. The majority of industry stakeholders stress the demand that students are not able
                                    to visualize engineering situations efficiently and professionally.
                                    Visualization and preparing necessary documentation, Drawing is required through the latest adopted technology by industries like BIM.
                                    CAD needs to be transformed into BIM models.
                                </div>
                                {/* row end */}
                        </div>
                        <div className="shadow-lg sm:block 3xl:hidden 2xl:hidden  grid grid-cols-1  w-[1100px] h-fit p-2  bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2  min-h-[55px] ">  
                                {/* row end */}
                                <div className="text-justify">Feedback from various recruiters is received by the department
                                    from time to time. The majority of industry stakeholders stress the demand that students are not able
                                    to visualize engineering situations efficiently and professionally.
                                    Visualization and preparing necessary documentation, Drawing is required through the latest adopted technology by industries like BIM.
                                    CAD needs to be transformed into BIM models.
                                </div>
                                {/* row end */}
                        </div>
                        <div className="shadow-lg  grid grid-cols-2  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                                {/* row end */}
                                <div className="">Construction Industry</div>
                                <div className="text-4xl sm:block 3xl:hidden 2xl:hidden">&#8595;</div>
                                <div className="text-justify sm:hidden">In a situation like COVID 19 remote working is possible through adopting
                                    BIM technology instead of physical availability on site.
                                    <br/><br/>
                                    Coordination and Clash detection between various Engineering services during Construction is a major challenge 
                                    for timely completion of construction tasks and activities.  Scope definition and contract management are key in 
                                    contractual disputes. BIM is a single-window solution. Skilled Human resource is not available for adoption of BIM.
                                    <br/><br/>
                                    Majority of AEC industries are working on BIM projects by developing BIM expertise based on their experience. 
                                    BIM technology is also an important skill to develop entrepreneurship skills  amongst the students by rendering
                                    their services to Medium and small scale consultants.    
                                </div>
                                {/* row end */}
                        </div>
                        <div className="shadow-lg sm:block 3xl:hidden 2xl:hidden  grid grid-cols-1  w-[1100px] h-fit p-2  bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2  min-h-[55px] ">  
                                {/* row end */}
                                <div className="text-justify">In a situation like COVID 19 remote working is possible through adopting
                                    BIM technology instead of physical availability on site.
                                    <br/><br/>
                                    Coordination and Clash detection between various Engineering services during Construction is a major challenge 
                                    for timely completion of construction tasks and activities.  Scope definition and contract management are key in 
                                    contractual disputes. BIM is a single-window solution. Skilled Human resource is not available for adoption of BIM.
                                    <br/><br/>
                                    Majority of AEC industries are working on BIM projects by developing BIM expertise based on their experience. 
                                    BIM technology is also an important skill to develop entrepreneurship skills  amongst the students by rendering
                                    their services to Medium and small scale consultants.
                                </div>
                                {/* row end */}
                        </div>
         
                    </div>
                </div>
        </div>
        <div className="w-full -mt-24 pb-16 -mb-10 bg-white h-fit ">
            <div className="m-4 ">
                    <div className="pt-20 sm:pt-20 px-6 sm:px-0  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        The Market Report on BIM
                    </div>
                    <div className="flex w-full items-center px-8 sm:px-0 ">  
                    <p className="w-full sm:w-full text-justify mt-8 sm:mt-4 h-fit text-xl sm:text-base text-[#24346D] font-semibold">
                    Building Information Modeling (BIM) is one of the major development that has been seen in Architectural, Engineering, Construction, and Operation (AECO) industry over the last two decades. Many countries have taken a shift towards BIM adoption. Government organizations have made BIM implementation mandatory for contractors while delivering their projects. Many countries like the United States, the United Kingdom, Singapore, China, the Scandinavian countries (Norway, Denmark, Finland, and Sweden, etc.), France, South Korea, etc. as adopted BIM technology at public level projects. Government bodies played an important role in encouraging the adoption and in spreading awareness of BIM by setting law, developing BIM standards, creating BIM guidelines that can be taken up by the private sector, and can be implemented. Cheng and Lu (2015) have conducted an extensive review of how several countries had invested their efforts in BIM technology and workflow diffusion in their projects.

<br /> <br />
India having a multi-billion dollar AECO industry and is the second-largest growing industry has tremendous potential and scope for growth of BIM. Although the nation has shown a significantly slow growth in BIM adoption due to many barriers in the current system as a whole it's changing rapidly. However, we witnessed inclination towards real estate, particularly residential real estate projects. According to sources, usage of BIM in the infrastructure and industrial development domains is gaining pace. AECO industry players’ states BIM usage, about sixty-eight percent on residential projects and highest usage was recorded in infrastructure sectors as per a study by RICS India (Sawhney et al. 2014).
        </p>

                    </div>
                    <div className="pt-20 sm:pt-20 px-6 sm:px-0 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        ARIIA 2021: FRAMEWORK

                    </div>
                    
                    <div className=" items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg  ">
                        <div className="text-left p-4 text-slate-600">Mechanism of Placement of Students</div>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Students will be Identified by Company based on projects executed at 1st Semester and Internship Performance in 2nd semester                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                                Autodesk the certification exam will be conducted and students will be Globally certified as Autodesk Certified User.
                            </div>
                            
                        </div>
                        <hr></hr>
                       
                    </div>
            </div> 
                        
        </div>

      
     
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default VocationalCourses
