import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/electrical/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const ElectronicsEngineeringPeo = () => {

    let Peo =[{
		"Title": "1. Preparation :",
		"Body": "Graduate will excel in career using knowledge of Electronics Engineering."
	},{
		"Title": "2. Core :",
		"Body": "Graduate will exhibit abilities to analyze, design, experiment, simulate and evaluate system performance in Electronics Engineering."
	},{
		"Title": "3. Breadth:",
		"Body": "Graduate will be empowered with good scientific and engineering breadth viz. Electrical Engineering, Computer Science and Industrial Management so as to comprehend, identify, analyze, design and create novel products."
	},{
		"Title": "4. professionalism :",
		"Body": "Graduate will inculcate high ethical standards, strong sense of professionalism viz. effective communication skills, teamwork, multidisciplinary projects in global and social context."
	},{
		"Title": "5. Learning environment :",
		"Body": "Graduate will enjoy the freedom to upgrade learning environment to meet career objectives and Industry needs so as to peruse excellence, leadership and lifelong learning needed for a successful professional career in Electronics Engineering."
	}
]

let Activities1 = [
    {
        "SrNo": 1,
        "EventTitle": "one week online FDP  sponsored by AICTE-ISTE Induction/Refresher Program on Design and development of Automated system using PLC from",
        "Date": "14 May 2021 - 19 May 2021"
    },
    {
        "SrNo": 2,
        "EventTitle": "Brain hunter event ",
        "Date": "14 May 2021 - 5 Apr 2021"
    }
  ]
 
let Activities2 = [
    {
        "SrNo": 1,
        "EventTitle": "3LevelQuiz Competition Brain charger under  Pioneer 2020",
        "Date": "15/02/20 & 16/02/20",
        "Instructor":"Swetha H. S. ,Richa A. Belgaonkar",
        "Participants":"All UG students from Kolhapur district"
    },
    {
        "SrNo": 2,
        "EventTitle": "Industrial visit to Power Engineers ",
        "Date": "30/01/20",
        "Instructor":"Mr. JM Kane",
        "Participants":"SY – Electrical engineering students"
    }
  ]

    

    return (
        <DefaultLayout>
            <div className="w-full ">
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
                        Electrical Engineering Activities
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span>Activities

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                DEPARTMENT ACTIVITIES
                            </div>
                            {/* -------------- */}
                           
                            <div className="sm:hidden  gap-x-5 grid grid-cols-3 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                      <div className=" sm:hidden ml-20">Sr.No.</div>
                      <div className=" ">Event Title</div>
                      <div className=" ">Date</div>
                      
                  </div> 

                    {Activities1.map((item, index) => {
                      return (
                        <>
                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                            <div className="">{item.EventTitle}</div>
                            <div className="">{item.Date}</div>
                        </div>
                        <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                        
                          <div className="grid grid-cols-2">
                            <div className="text-slate-400">Sr.No.</div>   
                            <div className="">{item.SrNo}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Event Title</div>
                            <div className="">{item.EventTitle}</div>      
                          </div>
                      
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Date</div> 
                            <div className="">{item.Date}</div>      
                          </div>
                        </div>
                        </>
                      )
                    })}
                           <div className="mt-16 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                PIONEER 2020 BRAIN CHARGER EVENT
                            </div>

                            <div className="sm:hidden  gap-x-5 grid grid-cols-5 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                      <div className=" sm:hidden ml-20">Sr.No.</div>
                      <div className=" ">Event Title</div>
                      <div className=" ">Date</div>
                      <div className=" ">Instructor</div>
                      <div className=" ">Participants</div>

                      
                  </div> 

                    {Activities2.map((item, index) => {
                      return (
                        <>
                        <div className="sm:hidden grid grid-cols-5 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                            <div className="">{item.EventTitle}</div>
                            <div className="">{item.Date}</div>
                            <div className="">{item.Instructor}</div>
                            <div className="">{item.Participants}</div>

                        </div>
                        <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                        
                          <div className="grid grid-cols-2">
                            <div className="text-slate-400">Sr.No.</div>   
                            <div className="">{item.SrNo}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Event Title</div>
                            <div className="">{item.EventTitle}</div>      
                          </div>
                      
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Date</div> 
                            <div className="">{item.Date}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Instructor</div> 
                            <div className="">{item.Instructor}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Participants</div> 
                            <div className="">{item.Participants}</div>      
                          </div>
                        </div>
                        </>
                      )
                    })}

                            <div className="mt-16  sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                LIST OF WORKSHOP/ SEMINAR/STTP/WEBINAR CONDUCTED
                                                            </div>

                          
                                        
                                       
                                                            <a href="documents/departments/electrical/activity/LIST OF WORKSHOP.pdf" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</a>
                          
                          
                        </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard/>  </div>


                    </div>
                   
                    
                </section>
                <Footer />
            </div>
        </DefaultLayout>
    )
}

export default ElectronicsEngineeringPeo
