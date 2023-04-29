import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/mech/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const MechEngineeringMous = () => {
    let Mous = [{
        "SrNo": 1,
        "Industry": "Tata Technologies Ltd, Pune",
        "TypeOfIndustry": "Student Training, Ready Engineer Programme"
    },{
        "SrNo": 2,
        "Industry": "Samruddhi TBI Foundation Ltd., Sangli",
        "TypeOfIndustry": "Project Competition, Skill based training, Workshops, Support for startup activities"
    },{
        "SrNo": 3,
        "Industry": "M/S.Hindustan Castings, Gokul Shirgaon, MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Industrial training"
    },{
        "SrNo": 4,
        "Industry": "Menon Group of Companies, Kolhapur a. Menon Pistons Ltd. b. Menon Bearings Ltd. c. Menon Piston Rings Ltd.",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 5,
        "Industry": "Menon and Menon Ltd., Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Vacational training"
    },{
        "SrNo": 6,
        "Industry": "Servocontrols, Belgaum",
        "TypeOfIndustry": "Expert lecture, Internship and placement activities"
    },{
        "SrNo": 7,
        "Industry": "Hind gears Pvt Ltd, Shiroli MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Industrial training"
    },{
        "SrNo": 8,
        "Industry": "Shimpukade Engineers Pvt. Ltd., Gokul Shirgaon, MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 9,
        "Industry": "Kulkarni Steels Furniture Pvt. Ltd., Gokul, Shirgaon, MIDC,Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 10,
        "Industry": "Ghatage Patil Industries Pvt. Ltd,Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 11,
        "Industry": "M/S.Paramount Micronix, Gokul Shirgaon, MIDC,Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 12,
        "Industry": "M/S.Mayura Steels Pvt. Ltd., Shiroli MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit,Project,Expert lecture, Student Industrial training"
    },{
        "SrNo": 13,
        "Industry": "Rocket Engineering Corporation Pvt.,Ltd., Shiroli MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 14,
        "Industry": "Marvellous Engineers, Gokul Shirgaon MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Vacational training"
    },{
        "SrNo": 15,
        "Industry": "Gokul Dudh Utpadak Sangh, Gokul Shirgaon, MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Guest lecture, Student Vacational training"
    },{
        "SrNo": 16,
        "Industry": "New Anucool Engineers Pvt.Ltd.,Gokul Shirgaon, MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 17,
        "Industry": "Precision Automation and Robotics India ltd,Satara",
        "TypeOfIndustry": "Curriculum design,Industrial Training, Project,Expert Lectures,Internship,Placement"
    },{
        "SrNo": 18,
        "Industry": "Maurya Group of Companies,Gokul Shirgaon ,MIDC,Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Vacational training/ Internship, Expert lecture"
    },{
        "SrNo": 19,
        "Industry": "Kelsons Engineers & Fabricators, Shiroli MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Student Industrial training"
    },{
        "SrNo": 20,
        "Industry": "Castall Industries, Shiroli MIDC, Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, Expert lecture, Industrial training"
    },{
        "SrNo": 21,
        "Industry": "Gokul Shirgaon Manufactureres Association,Gokul Shirgaon,MIDC,Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, expert lecture, Industrial training"
    },{
        "SrNo": 22,
        "Industry": "Pushpraj Engineers, Gokul Shirgaon, MIDC,Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, expert lecture, Industrial training"
    },{
        "SrNo": 23,
        "Industry": "Zanwar Group of Companies,Shiroli MIDC,Kolhapur",
        "TypeOfIndustry": "Industrial Visit, Project, expert lecture, Student Industrial training"
    },{
        "SrNo": 24,
        "Industry": "Electronica Automation Pvt. Limited, India, Pune",
        "TypeOfIndustry": "Curriculum design, Student Industrial Training, Project, Expert Lectures, Internship, Placement"
    }
    ]

    let Mous2021 = [{
        "SrNo": 1,
        "Industry": "Kirloskar Oil Engines Ltd. Pune",
        "TypeOfIndustry": "Officials in DAB, Curriculum Development, Faculty training, Student training, Industrial visits, Placements, Human Resource sharing"
    },{
        "SrNo": 2,
        "Industry": "Cummins India Ltd. Pune",
        "TypeOfIndustry": "Student Training, Placements, Implementation of TEC"
    },{
        "SrNo": 3,
        "Industry": "Mayura Steels Kolhapur",
        "TypeOfIndustry": "Officials in DAB, Curriculum Development,, Student training, Industrial visits, Placements, Project sponsorship"
    },{
        "SrNo": 4,
        "Industry": "Gokul Dudh Kolhapur",
        "TypeOfIndustry": "Officials in DAB, Curriculum Development, Faculty training, Student training, Industrial visits, Training by Department faculty to Staff of Industry, Event sponsorship"
    },{
        "SrNo": 5,
        "Industry": "Menon Group of Industries Kolhapur",
        "TypeOfIndustry": "Student training, Industrial visits, Placements, HR Meet, Components donation for lab enrichment"
    },{
        "SrNo": 6,
        "Industry": "Samruddhi Group of Industries",
        "TypeOfIndustry": "Support for start up activities, Sponsorship for project Competition, Support for Commercialization of projects and patent filing"
    },{
        "SrNo": 7,
        "Industry": "Marvelous Engineering Pvt. Ltd",
        "TypeOfIndustry": "Officials in DAB, Curriculum Development, Faculty training, Student training, Industrial visits, Placements"
    },{
        "SrNo": 8,
        "Industry": "Ghatge Patil Ind. Ltd. Kolhapur",
        "TypeOfIndustry": "Student training, Student placement, Industrial visits, Support for module base training, Industry projects."
    },{
        "SrNo": 9,
        "Industry": "Manugraph",
        "TypeOfIndustry": "Student training, Student placement, Industrial visits, Support for module base training, Industry projects."
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
                        Mechanical Engineering  MOU'S
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> MOU'S

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                LIST OF INDUSTRIES HAVING SIGNED MOU’S IN 2020-21

                            </div>
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-3 items-start gap-x-2 text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-10">Sr.No.</div>
                                <div className=" ">Industry Name</div>
                                <div className=" ">Type of Industry/ Interaction</div>
                             
                               
                            </div>
                           
                            {Mous.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-2 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-10">{item.SrNo}</div>
                                            <div className="">{item.Industry}</div>
                                            <div className="">{item.TypeOfIndustry}</div>
                                        </div>
                                       
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-3 space-x-[1px] items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Industry</div>
                                                <div className="">{item.Industry}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Type of Industry/ Interaction</div>
                                                <div className="">{item.TypeOfIndustry}</div>
                                            </div>
                                           
                                        </div>
                                    </>
                                )
                            })}
                            <div className="mt-16 sm:ml-4 mb-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                LIST OF INDUSTRIES HAVING SIGNED MOU’S

                            </div>
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-3 items-start gap-x-2 text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-10">Sr.No.</div>
                                <div className=" ">Industry Name</div>
                                <div className=" ">Type of Industry/ Interaction</div>
                             
                               
                            </div>
                           
                            {Mous2021.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-2 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-10">{item.SrNo}</div>
                                            <div className="">{item.Industry}</div>
                                            <div className="">{item.TypeOfIndustry}</div>
                                        </div>
                                       
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-3 space-x-[1px] items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Industry</div>
                                                <div className="">{item.Industry}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Type of Industry/ Interaction</div>
                                                <div className="">{item.TypeOfIndustry}</div>
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

export default MechEngineeringMous
