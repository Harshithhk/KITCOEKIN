import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/mech/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const MechEngineeringPeo = () => {

    let Peo = [{
		"Title": "PEO 1",
		"Body": " The graduates will be able to apply fundamental knowledge in science and engineering to solve industrial and societal problems."
	},{
		"Title": "PEO 2",
		"Body": "The graduates will be able to demonstrate knowledge of mechanical engineering and allied areas to handle complex real life problems for obtaining viable solutions"
	},{
		"Title": "PEO 3",
		"Body": "The graduates will exhibit engineering skills and ethical values while pursuing professional career."
	},{
		"Title": "PEO 4",
		"Body": "The graduates will be able to demonstrate professional skills to become entrepreneurs."
	}
]

    let Po = [{
		"Title": "1.Engineering Knowledge :",
		"Body": "Mechanical Engineering graduates will acquire and be able to demonstrate fundamental knowledge of Mathematics, Science, Thermal, Design, Materials and Manufacturing Engineering."
	},{
		"Title": "2.Problem Analysis :",
		"Body": "Graduates will be able to identify, define, formulate and solve Thermal, Design, Materials and Manufacturing Engineering problems."
	},{
		"Title": "3.Design/Development of Solutions :",
		"Body": "Graduates will demonstrate an ability to design and conduct scientific experiments, analyze, interpret the data and report the results."
	},{
		"Title": "4.Conduct investigation of complex problems :",
		"Body": "Graduates will demonstrate an ability to design Engineering and Management systems, components and processes as per user defined needs and specifications."
	},{
		"Title": "5.Modern tool usage :",
		"Body": "Graduates will demonstrate the skills to use the latest tools and techniques in Mechanical Engineering, software and equipment to analyze and solve problems."
	},{
		"Title": "6.The engineer and Society :",
		"Body": "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the mechanical engineering practice."
	},{
		"Title": "7.Environment and sustainability :",
		"Body": "Graduates will be aware of the impact of engineering processes on Environment, Society and of contemporary issues and shall be able to provide suitable solutions for the same."
	},{
		"Title": "8.Ethics :",
		"Body": "Graduates will reveal an understanding of their professional as well as ethical and social responsibilities."
	},{
		"Title": "9.Individual and team work :",
		"Body": "Graduates will demonstrate an ability to work and effectively contribute within and interdisciplinary teams of Engineering and science laboratories"
	},{
		"Title": "10.Communication :",
		"Body": "Graduates will demonstrate the ability to communicate effectively both in verbal and written forms."
	},{
		"Title": "11.Project Management and finance :",
		"Body": "Graduates will acquire managerial and financial skills to undertake and accomplish Engineering projects."
	},{
		"Title": "12.Life-long Learning :",
		"Body": "Graduates will aspire for self education and lifelong learning and will acquire the necessary knowledge and skills to participate and succeed in competitive examinations like GRE, GATE and IES."
	}
]

    let Pso = [{
		"Title": "PSO1 :",
		"Body": " Mechanical Engineering graduates will acquire and be able to apply fundamental and advanced knowledge in field of Mechanical and allied areas of engineering."
	},{
		"Title": "PSO2 : ",
		"Body": "Mechanical Engineering graduates will demonstrate an ability to provide engineering solutions to Industrial, agricultural, automobile and rural problems."
	},{
		"Title": "PSO3 : ",
		"Body": "Mechanical Engineering graduates will demonstrate an ability to work and effectively contribute in professional activities"
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

export default MechEngineeringPeo
