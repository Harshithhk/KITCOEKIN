import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/cse/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const CseEngineeringPeo = () => {

    let Peo = [{
        "Title": "PEO 1",
        "Body": " Graduates will excel in applying practical knowledge with strong theoretical background which will help them to meet higher professional carrier, corporate standards and also develop leadership and entrepreneurship."
      },{
        "Title": "PEO 2",
        "Body": "Graduates will have a solid foundation of core computer science, networking, algorithm and databases required to solve computer science and engineering problems."
      },{
        "Title": "PEO 3",
        "Body": "Graduates will inherit good scientific and engineering breadth particularly in bioinformatics, embedded systems, cyber security, wireless communication, data analytics and artificial intelligence so as to comprehend, analyze, design, and create novel software solutions for the real life problems."
      },{
        "Title": "PEO 4",
        "Body": "Graduates will possess knowledge of soft skills, business communication, professional and ethical attitude, entrepreneurship, teamwork skills, multidisciplinary approach and an ability to relate computer science and engineering issues to broader social context."
      },{
        "Title": "PEO 5",
        "Body": " Graduates will have a platform to identify and meet the challenges of software sector which will encourage them for research and development at national and international level. To create awareness among graduates on social, ethical and environmental issues."
      }
      ]

    let Po = [{
        "Title": "1. Engineering knowledge :",
        "Body": "Apply the knowledge of mathematics, basic science and in depth technical competence in computer science and engineering discipline to meet the solution of complex engineering problems."
      },{
        "Title": "2. Problem analysis :",
        "Body": "Identify, formulate, review various computer science research literature, and analyze complex engineering problems using basic principles of mathematics, natural sciences, and engineering sciences to reach substantiated conclusions"
      },{
        "Title": "3. Design/development of solutions :",
        "Body": "Designs of  software solutions for complex computer science and engineering problems and design system processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations."
      },{
        "Title": "4. Conduct investigations of complex problems :",
        "Body": "Use research-based knowledge and research methods in the field of computer science and engineering including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions"
      },{
        "Title": "5. Modern tool usage :",
        "Body": "Create, select, and apply appropriate techniques, resources, and software tools including prediction and modeling to complex engineering activities with an understanding of the limitations"
      },{
        "Title": "6. The engineer and society :",
        "Body": "Apply reasoning obtained from the contextual knowledge of computer science to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice"
      },{
        "Title": "7. Environment and sustainability :",
        "Body": "Understand the impact of the software solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
      },{
        "Title": "8. Ethics :",
        "Body": "Apply ethical principles and commit to professional ethics and responsibilities and norms of the computer science and engineering practice."
      },{
        "Title": "9.Individual and team work :",
        "Body": "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
      },{
        "Title": "10. Communication :",
        "Body": "Communicate effectively on complex computer engineering activities with the engineering community and with society at large, such as being able to make effective presentations, write effective reports and design documentation."
      },{
        "Title": "11. Project management and finance :",
        "Body": "Demonstrate knowledge and understanding of the software engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
      },{
        "Title": "12. Life-long learning :",
        "Body": "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of computer engineering and technological change."
      }
      ]
    let Pso = [{
		"Title": "PSO 1",
		"Body": "Learn and adapt the latest software technologies in the field of computer science and engineering."
	},{
		"Title": "PSO 2",
		"Body": " Identify and analyze real life problems and provide innovative software solutions."
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

export default CseEngineeringPeo
