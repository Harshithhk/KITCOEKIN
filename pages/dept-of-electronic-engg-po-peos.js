import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/electronics/career/quickLinksCard"
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

    let Po = [{
		"Title": "PSO1: Engineering Knowledge :",
		"Body": "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems"
	},{
		"Title": "PO2: Problem analysis:",
		"Body": "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences."
	},{
		"Title": "PO3: Design/development of solutions:",
		"Body": "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations."
	},{
		"Title": "PO4: Conduct investigations of complex problems:",
		"Body": "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions."
	},{
		"Title": "PO5: Modern tool usage:",
		"Body": "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations."
	},{
		"Title": "PO6: The engineer and society:",
		"Body": "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
	},{
		"Title": "PO7: Environment and sustainability:",
		"Body": "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
	},{
		"Title": "PO8: Ethics:",
		"Body": "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice."
	},{
		"Title": "PO9: Individual and team work:",
		"Body": "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
	},{
		"Title": "PO10: Communication:",
		"Body": "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions."
	},{
		"Title": "PO11: Project management and finance:",
		"Body": "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
	},{
		"Title": "PO12: Life-long learning:",
		"Body": "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
	}
]
    let Pso = [{
		"Title": "PSO1: ",
		"Body": "Awareness about Electronics Industry focused design skills, software packages, Industry standards, workflow and work practices."
	},{
		"Title": "PSO2 :",
		"Body": "Hands-on experience with modelling, design, and implementation widely used in Electronics industry"
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
                        Faculty List
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> PO & PEO'S

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                PROGRAM OUTCOMES
                            </div>
                            {/* -------------- */}
                           

                            {Po.map((item, index) => {
                                return (
                                    <>
                                        
                                       
                                        <div className=" grid  divide-y  items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className=" my-3">
                                                {/* <div className="text-slate-400">Title</div> */}
                                                <div className="">{item.Title}</div>
                                            </div>
                                            <div className=" ">
                                                {/* <div className=" text-slate-400">Recruiter</div> */}
                                                <div className="text-justify">{item.Body}</div>
                                            </div>
                                        

                                        </div>
                                    </>
                                )
                            })}
                           <div className="mt-16 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                PROGRAMME SPECIFIC OUTCOMES
                            </div>

                            {Pso.map((item, index) => {
                                return (
                                    <>
                                        
                                       
                                        <div className=" grid  divide-y  items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className=" my-3">
                                                {/* <div className="text-slate-400">Title</div> */}
                                                <div className="">{item.Title}</div>
                                            </div>
                                            <div className=" ">
                                                {/* <div className=" text-slate-400">Recruiter</div> */}
                                                <div className="text-justify">{item.Body}</div>
                                            </div>
                                        

                                        </div>
                                    </>
                                )
                            })}

                            <div className="mt-16  sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                PEO'S
                            </div>

                            {Peo.map((item, index) => {
                                return (
                                    <>
                                        
                                       
                                        <div className=" grid  divide-y  items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className=" my-3">
                                                {/* <div className="text-slate-400">Title</div> */}
                                                <div className="">{item.Title}</div>
                                            </div>
                                            <div className=" ">
                                                {/* <div className=" text-slate-400">Recruiter</div> */}
                                                <div className="text-justify">{item.Body}</div>
                                            </div>
                                        

                                        </div>
                                    </>
                                )
                            })}

                          
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
