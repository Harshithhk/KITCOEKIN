import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/civil/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const CivilEngineeringMous = () => {
    let Mous = [{
        "SrNo": 1,
        "NameOfIndustry": "Dhirendra Group of Company, Specialized Engineering & Construction Company, Mumbai",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "Retrofitting and Rehabilitation",
        "DateOfMoU": "4th Sept. 2018",
        "PeriodofMoU": "5 Years",
        "Outcome": [<p>1. Trainings</p>,<p>2. Workshops</p>,<p>3. Research Projects</p>,<p>4. Placement</p>],
        "FacultyCoordinator": "Mr. S. G. Sawant"
      },{
        "SrNo": 2,
        "NameOfIndustry": "CREDAI, Kolhapur",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "Construction and Infrastructure Development",
        "DateOfMoU": "1st Jan.,2019",
        "PeriodofMoU": "3 Years",
        "Outcome": [<p>1. Trainings</p>,<p>2. Workshops</p>,<p>3. Placement</p>],
        "FacultyCoordinator": "Mr. G. A. Chavan"
      },{
        "SrNo": 3,
        "NameOfIndustry": "Star-Tech R.M.C. , Kolhapur",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "Construction and Infrastructure Development",
        "DateOfMoU": "4th June, 2019",
        "PeriodofMoU": "5 Years",
        "Outcome": [<p>1. Trainings</p>,<p>2. Workshops</p>,<p>3. Research Projects</p>,<p>4. Placement</p>],
        "FacultyCoordinator": "Mr. S. G. Sawant"
      },{
        "SrNo": 4,
        "NameOfIndustry": "BIM-CREW consultancy PVT. Ltd.",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "BIM-Technology",
        "DateOfMoU": "3rd Oct., 2020",
        "PeriodofMoU": "3 Years",
        "Outcome": [<p>1. Trainings</p>,<p>2. Workshops</p>,<p>3. Research Projects</p>,<p>4. Placement</p>],
        "FacultyCoordinator": "Mr. R. V. Nalawade"
      },{
        "SrNo": 5,
        "NameOfIndustry": "BIM-Technology",
        "NameOfCountry": "Australia",
        "SubjectFieldOfMoU": "BIM-Technology",
        "DateOfMoU": "31st May, 2020",
        "PeriodofMoU": "3 Years",
        "Outcome": [<p>1. Trainings</p>,<p>2. Workshops</p>,<p>3. Research Projects</p>,<p>4. Placement</p>],
        "FacultyCoordinator": "Mr. R. V. Nalawade"
      },{
        "SrNo": 6,
        "NameOfIndustry": "National Highway Authority of India (NHAI)",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "Infrastructure",
        "DateOfMoU": "9th Oct. 2020",
        "PeriodofMoU": "5 Years",
        "Outcome": [<p>1. Internship</p>,<p>2. Expert Lecture</p>,<p>3. Research Projects</p>,<p>4. Consultancy</p>],
        "FacultyCoordinator": "Mr. H. V. Sadolikar, Mrs. Rashmi B. S."
      },{
        "SrNo": 7,
        "NameOfIndustry": "Association of Architects and Engineers, Kolhapur",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "Architectural & Engineering",
        "DateOfMoU": "7th Nov. 2020",
        "PeriodofMoU": "5 Years",
        "Outcome": [<p>1. Internship</p>,<p>2. Expert Lecture</p>,<p>3. Research Projects</p>,<p>4. Placement</p>],
        "FacultyCoordinator": "Mr. S. S. Varur"
      },{
        "SrNo": 8,
        "NameOfIndustry": "Amit Bajirao Patil, Kolhapur",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "Construction",
        "DateOfMoU": "23rd, August,2021",
        "PeriodofMoU": "3 Years",
        "Outcome": [<p>1. Internship</p>],
        "FacultyCoordinator": "Mr. R. V. Nalawade"
      },{
        "SrNo": 9,
        "NameOfIndustry": "Talento Business Management Services Pvt. Ltd.,Pune",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "HR-Consultant",
        "DateOfMoU": "18th November, 2021",
        "PeriodofMoU": "3 Years",
        "Outcome": [<p>1.Internship</p>,<p>2. Placement</p>],
        "FacultyCoordinator": "Mr. G. A. Chavan"
      },{
        "SrNo": 10,
        "NameOfIndustry": "Zila Parishad Kolhapur",
        "NameOfCountry": "INDIA",
        "SubjectFieldOfMoU": "Water Resources Engineering",
        "DateOfMoU": "2nd November, 2021",
        "PeriodofMoU": "5 Years",
        "Outcome": "Third Party Auditor by Government of Maharashtra",
        "FacultyCoordinator": "Dr. Aditya Khebudkar"
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
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> MOU'S

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                LIST OF INDUSTRIES HAVING SIGNED MOU’S
                            </div>
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-8 items-start gap-x-2 text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-10">Sr.No.</div>
                                <div className=" ">Industry Name</div>
                                <div className=" ">country</div>
                                <div className=" ">Subject/ field of MoU</div>
                                <div className=" ">Date Of MoU</div>
                                <div className=" ">Period Of MoU</div>
                                <div className=" ">outcome</div>
                                <div className=" ">Faculty Coordinator</div>
                               
                            </div>
                           
                            {Mous.map((item, index) => {
                                return (
                                    <>
                                    <div key = {index} className="sm:hidden grid grid-cols-8 items-center justify-items-start gap-x-2 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-10">{item.SrNo}</div>
                                            <div className="">{item.NameOfIndustry}</div>
                                            <div className="">{item.NameOfCountry}</div>
                                            <div className="">{item.SubjectFieldOfMoU}</div>
                                            <div className="">{item.DateOfMoU}</div>
                                            <div className="">{item.PeriodofMoU}</div>
                                            <div className="">{item.Outcome}</div>
                                            <div className="">{item.FacultyCoordinator}</div>
                                        </div>
                                       
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-8 space-x-[1px] items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Industry Name</div>
                                                <div className="">{item.NameOfIndustry}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">country</div>
                                                <div className="">{item.NameOfCountry}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Subject/ field of MoU</div>
                                                <div className="">{item.SubjectFieldOfMoU}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Date Of MoU</div>
                                                <div className="">{item.DateOfMoU}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Period of MoU</div>
                                                <div className="">{item.PeriodofMoU}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">outcome</div>
                                                <div className="">{item.Outcome}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Faculty Coordinator</div>
                                                <div className="">{item.FacultyCoordinator}</div>
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

export default CivilEngineeringMous
