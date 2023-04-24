import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/env/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const EnvironmentalEngineeringPeo = () => {

    let Peo = [{
        "Title": "PEO1 ",
        "Body": "Solve Civil and Environmental Engineering problems and pursue higher studies using solid foundation in mathematics, science and technology."
      },{
        "Title": "PEO2 ",
        "Body": "Design, execute and operate various Civil and Environmental Systems in related fields through participative education."
      },{
        "Title": "PEO3 ",
        "Body": "Develop skills to communicate effectively and work in a team in multidisciplinary areas."
      },{
        "Title": "PE04 ",
        "Body": "Respond to the challenges of issues of Civil and Environmental Engineering through research and development."
      }
      ]

    let Po = [{
        "Title": "PO1",
        "Body": "Apply the knowledge of mathematics, Science and Engineering fundamentals for solution of problems of Civil and Environmental Engineering."
      },{
        "Title": "PO2",
        "Body": "Identify, formulate, review research literature and analyze Civil and Environmental Engineering problems using fundamentals of mathematics, sciences and engineering."
      },{
        "Title": "PO3",
        "Body": "Develop solutions for Civil and Environmental Engineering problems and design system components and processes to meet the specified needs with appropriate consideration for the public health and safety."
      },{
        "Title": "PO4",
        "Body": "Make use of their knowledge to interpret the data by experimental analysis to provide valid conclusions."
      },{
        "Title": "PO5",
        "Body": "Select and apply various engineering and IT tools and models to solve Civil and Environmental Engineering problems."
      },{
        "Title": "PO6",
        "Body": "Assess societal, health, safety and legal issues by applying Civil and Environmental Engineering knowledge."
      },{
        "Title": "PO7",
        "Body": "Assess the impact of Civil and Environmental Engineering solutions in Societal and Environmental context for Sustainable Development."
      },{
        "Title": "PO8",
        "Body": "Practice ethical principles to fulfill responsibilities as Civil and Environmental Engineer."
      },{
        "Title": "PO9",
        "Body": "Function effectively as an individual, and as member or leader in multidisciplinary areas."
      },{
        "Title": "PO10",
        "Body": " Discuss effectively issues of Civil and Environmental Engineering and solutions through written and oral presentations to engineering communities and society."
      },{
        "Title": "PO11",
        "Body": "Demonstrate knowledge and understanding of the engineering and management principles to manage Civil and Environmental Engineering projects."
      },{
        "Title": "PO12",
        "Body": "Practice the need of lifelong learning through updating technical knowledge in the context of technological change."
      }
      ]

    let Pso = [{
		"Title": "PS01",
		"Body": "Identify and analyze the pollution related problems generated due to urbanization and industrialization."
	},{
		"Title": "PS02",
		"Body": " Interpret the data using various tools and techniques to provide effective and applicable solutions."
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
                        Civil & Environmental Engineering PO & PEO'S
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

                            <div className="mt-16  sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                MAPPING OF PROGRAM OUTCOMES TO PROGRAMME EDUCATION OBJECTIVES
                            </div>

                            <div className="mt-16  grid grid-cols-10 text-center  gap-4  sm:gap-1 text-xs ">
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md">PEO</div>
                                <div className="p-4 sm:p-0  bg-white rounded-lg shadow-md col-span-8 grid grid-rows-2">
                                    <div>PO</div>
                                    <div className="pt-2    grid divide-x grid-cols-12">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                    <div>9</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md">
                                    <div>PSO</div>
                                    <div className="pt-2  grid divide-x grid-cols-2">
                                        <div>1</div>
                                        <div>2</div>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md">PEO 1</div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md col-span-8 grid divide-x grid-cols-12"> 
                                    <div>3</div>
                                    <div>1</div>
                                    <div>2</div>
                                    <div></div>
                                    <div></div>
                                    <div>1</div>
                                    <div></div>
                                    <div>1</div>
                                    <div></div>
                                    <div></div>
                                    <div>1</div>
                                    <div>2</div>
                                </div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md grid divide-x grid-cols-2">
                                    <div>1</div>
                                    <div>3</div>
                                </div>
                                {/*  */}
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md">PEO 2</div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md col-span-8 grid divide-x grid-cols-12"> 
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>2</div>
                                    <div></div>
                                </div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md grid divide-x grid-cols-2">
                                    <div></div>
                                    <div>2</div>
                                </div>
                                {/*  */}
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md">PEO 3</div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md col-span-8 grid divide-x grid-cols-12"> 
                                    <div>2</div>
                                    <div>3</div>
                                    <div>2</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>2</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>2</div>
                                </div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md grid divide-x grid-cols-2">
                                    <div>1</div>
                                    <div>3</div>
                                </div>
                                {/*  */}
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md">PEO 4</div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md col-span-8 grid divide-x grid-cols-12"> 
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                    <div>9</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                </div>
                                <div className="p-4 sm:p-0 bg-white rounded-lg shadow-md grid divide-x grid-cols-2">
                                    <div>1</div>
                                    <div>1</div>
                                </div>
                            </div>
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

export default EnvironmentalEngineeringPeo
