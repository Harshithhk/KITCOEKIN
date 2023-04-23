import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import QuickLinksCard from "../sections/departments/civil/career/quickLinksCard"

const CivilEngineeringVocationalCourses = () => {

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
            Civil Engineering Vocational Courses
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

          <div className="flex justify-between sm:flex-col">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Courses under UGC-NSQF


              </div>
              <div className="mt-10 sm:mt-4 w-[700px] text-xl text-accent text-justify sm:w-full sm:text-base">
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Diploma in BIM Technology
                            </div>
                            
                        </div>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Certificate Course in BIM Fundamentals
                            </div>
                            
                        </div>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Certificate Course in BIM Advanced
                            </div>
                        </div>
                        <br/>
                        Department of Civil Engineering Kolhapur, KIT’s College of Engineering (Autonomous) has recently surveyed potential employability requirements of Service industry during COVID 19 scenario, It was noticed that remote handling of Construction and Engineering project and work from home (WFH) will be a preferred choice of most of the service industries serving public and private domain of design, construction and operation phases of the project.

Similar organizations were contacted and consulted for their opinion for launching a Skill development program that suits this scenario.
<br/><br/>
BIM Technologies, Australia is one of organization accepted KIT’s proposal to start educational programs to cater industry need in domain of BIM technology. For the last three years, the Department of Civil Engineering began to introduce departmental students with modeling phases of BIM with short term courses.

Now with Association of BIM Technologies, Australia, Department of Civil Engineering is introducing the first time in the Western part of India

<br/><br/>
A Diploma Program in BIM technology for a period of one year. This course is divided into two certificate programs.
<br/><br/>
<span className="font-semibold">Eligibility :</span> Diploma OR Degree in Civil Engineering and Mechanical Engineering, Last year students of Engineering also can apply.
<br/><br/>
<span className="font-semibold">Seats :</span> Single batch is of 30 students.
<br/><br/>
<span className="font-semibold">Course Schedule :</span> Sunday and Monday of each week for course duration (3-4 Hours of a day)
<dev className="grid grid-cols-1 gap-y-2 mt-6">
                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <div className="col-start-2 col-end-12 sm:col-start-3">Document For Syllabus</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    </div>  
                </dev> 
                <dev className="grid grid-cols-1 gap-y-2 mt-6">
                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <div className="col-start-2 col-end-12 sm:col-start-3">Document For Syllabus</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    </div>  
                </dev>
                <dev className="grid grid-cols-1 gap-y-2 mt-6 ">
                    <div className="pl-2 pr-2 hover:bg-slate-100 hover:cursor-pointer bg-white rounded-lg shadow-lg min-h-[50px] flex justify-between items-center ">
                        <div className=" "><span className="font-semibold">INQUIRY</span> https://forms.gle/UEpiTnFJcK6iziCe7</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </div>  
                </dev>
              </div>
            </div>
            <div className=" mt-16 ml-12 p-2 sm:ml-0 sm:p-0 sm:mt-12 ">   
                <div className="flex flex-col mb-16 justify-start sm:mx-1"><QuickLinksCard/> </div>     
                <img src="/images/Admission/skill-dev-program.jpg" className="rounded-xl shadow-md" alt="" />
                
               
                <div></div>
            </div>
          </div>
              
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
                                <div className="text-4xl sm:block 2xl:hidden">&#8595;</div>
                                <div className="text-justify sm:hidden">Feedback from various recruiters is received by the department
                                    from time to time. The majority of industry stakeholders stress the demand that students are not able
                                    to visualize engineering situations efficiently and professionally.
                                    Visualization and preparing necessary documentation, Drawing is required through the latest adopted technology by industries like BIM.
                                    CAD needs to be transformed into BIM models.
                                </div>
                                {/* row end */}
                        </div>
                        <div className="shadow-lg sm:block 2xl:hidden  grid grid-cols-1  w-[1100px] h-fit p-2  bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2  min-h-[55px] ">  
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
                                <div className="text-4xl sm:block 2xl:hidden">&#8595;</div>
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
                        <div className="shadow-lg sm:block 2xl:hidden  grid grid-cols-1  w-[1100px] h-fit p-2  bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2  min-h-[55px] ">  
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
        <div className="w-full -mt-24 pb-16 bg-white h-fit ">
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

        <section className="h-[564px] sm:h-fit sm:py-16 bg-[#24346D] mt-20 sm:mt-8  flex justify-center items-center relative overflow-hidden">
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-24 h-24 absolute top-[17.5%] left-[35%] z-10 sm:w-16 sm:h-16 sm:top-[10%] sm:left-[70%]"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-32 h-32 absolute top-[15%] left-[5%] z-10 sm:w-20 sm:h-20"
        alt=""
      />

      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-40 h-40 absolute top-[50%] left-[50%] z-10 sm:w-28 sm:h-28"
        alt=""
      />
      <img
        src="/images/AboutUs/bgcircle.png"
        className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
        alt=""
      />

      <section className="h-[250px] flex  z-20 sm:h-fit">
        {/* Card */}
        <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] sm:opacity-50">
          <div className="h-16 sm:h-8 flex w-full justify-between ">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 sm:h-[36px] sm:w-[36px] h-full"
                alt="Avatar.png"
              />
              <div className="ml-2 sm:ml-1 ">
                <h1 className="text-3xl text-accent font-bold sm:text-base">
                  Swapnil Jadhav
                </h1>
                <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 sm:h-8 sm:w-8 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2 text-justify sm:text-sm text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
        {/* Card */}
        <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] ">
          <div className="h-16 sm:h-8 flex w-full justify-between ">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 sm:h-[36px] sm:w-[36px] h-full"
                alt="Avatar.png"
              />
              <div className="ml-2 sm:ml-1 ">
                <h1 className="text-3xl text-accent font-bold sm:text-base">
                  Harshith Kelkar
                </h1>
                <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 sm:h-8 sm:w-8 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2 text-justify sm:text-sm text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
        {/* Card */}
        <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] sm:opacity-50">
          <div className="h-16 sm:h-8 flex w-full justify-between ">
            <div className="flex">
              <img
                src="/images/AboutUs/Avatar.png"
                className="w-16 sm:h-[36px] sm:w-[36px] h-full"
                alt="Avatar.png"
              />
              <div className="ml-2 sm:ml-1 ">
                <h1 className="text-3xl text-accent font-bold sm:text-base">
                  Rushikesh Patil
                </h1>
                <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
                  Software Engineer
                </div>
              </div>
            </div>
            <img
              src="/images/AboutUs/Quotes.svg"
              className="h-16 w-16 sm:h-8 sm:w-8 -translate-y-1"
              alt=""
            />
          </div>

          <div className="mt-2 text-justify sm:text-sm text-xl text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            minus reiciendis quae aspernatur soluta saepe incidunt culpa
            molestias, nesciunt maxime esse.
          </div>
        </div>
      </section>
    </section>
     
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default CivilEngineeringVocationalCourses
