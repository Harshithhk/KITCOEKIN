import DefaultLayout from "../components/DefaultLayout"
import BiotechnologyEngineering from "../components/Navbar/departments/biotechnologyEngineering"
import QuickLinks from "../components/QuickLinks"
import Career from "../sections/departments/biotech/career"
import QuickLinksCard from "../sections/departments/biotech/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const BiotechnologyEngineeringPeo = () => {
    let Peo = [{
		"Title": "1.Preparation ",
		"Body": "To prepare Biotechnology Engineering students, To excel in higher studies in Biotechnology engineering and management, To succeed in all Biotechnology industrial areas through global and rigorous education."
	},{
		"Title": "2.Core Competence",
		"Body": "To provide students of Biotechnology Engineering with a solid foundation in the thrust areas such as Bioprocesses, Molecular Biology, Genetic Engineering, Pharmaceutical Biotechnology etc. required to work in Biotechnology industries.        "
	},{
		"Title": "3.Breadth",
		"Body": "To train Biotechnology Engineering students with good scientific and engineering breadth particularly in Bioinformatics, Biostatistics, Biomedical Engineering, Food Technology, Medical Biotechnology so as to comprehend, analyze, design and create novel product and solutions to real life problems."
	},{
		"Title": "4.professionalism ",
		"Body": "To inculcate in Biotechnology Engineering students, Professional and ethical attitude, effective communication, teamwork skills, entrepreneurship skills with multidisciplinary approach , An ability to relate engineering issues in biotechnology for the welfare of mankind and environment."
	},{
		"Title": "5.Learning environment",
		"Body": "To provide student of Biotechnology Engineering with better social and academic environment aware of excellence, leadership, intellectual property rights, written ethical guidelines, and the life-long learning needed for a successful professional career."
	}
]

let Po = [{
    "Title": "1.Engineering Knowledge :",
    "Body": "Apply the knowledge of mathematics, basic science and in depth technical competence in Biotechnology engineering discipline to meet the solution of complex engineering problems."
},{
    "Title": "2.Problem Analysis :",
    "Body": "Identify, formulate, review various biological science research literature, and analyze complex engineering problems using basic principles of mathematics, biological sciences, and engineering sciences to achieve desired goals."
},{
    "Title": "3.Design/Development of Solutions :",
    "Body": "Design complex processes to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability and sustainability."
},{
    "Title": "4.Conduct investigation of complex problems :",
    "Body": "Use research-based knowledge and research methods in the field of Biotechnology engineering to conduct experiments, analyze and interpret the data, design the equipments and processes as per the specifications and needs of biotech industries."
},{
    "Title": "5.Modern tool usage :",
    "Body": "Create, select, and apply appropriate techniques, resources, and software tools including prediction and modeling to complex engineering activities with an understanding of the limitations."
},{
    "Title": "6.The engineer and Society :",
    "Body": "Apply reasoning gained from the contextual knowledge of biotechnological engineering to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
},{
    "Title": "7.Environment and sustainability :",
    "Body": "Understand the impact of the biotechnological solutions in societal and environmental contexts, and demonstrate acquired skills for sustainable development."
},{
    "Title": "8.Ethics :",
    "Body": "Apply ethical principles and commit to professional ethics, responsibilities and norms of the biotechnology engineering practice."
},{
    "Title": "9.Individual and team work :",
    "Body": "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary environments."
},{
    "Title": "10.Communication :",
    "Body": "Communicate effectively on complex biotechnology engineering activities with the engineering community and with society at large, such as being able to make effective presentations,  write effective reports and design documentation. "
},{
    "Title": "11.Project Management and finance :",
    "Body": "Demonstrate knowledge and understanding of the biotechnology engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects in multidisciplinary environments."
},{
    "Title": "12.Life-long Learning :",
    "Body": "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of biotechnology engineering and technological change"
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
                                PROGRAM EDUCATIONAL OBJECTIVES (PEO'S)
                            </div>
                            {/* -------------- */}
                           

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
                           <div className="mt-16 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                PO'S
                            </div>

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

export default BiotechnologyEngineeringPeo