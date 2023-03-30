import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const CseEngineeringMous = () => {
    let Mous = [{
        "SrNo": 1,
        "Industry": "Laurel Technologies, Kolhapur",
        "PurposeOfMoU": "Training, Placement, Internships, Research work for PG students"
      },{
        "SrNo": 2,
        "Industry": "Regional Agriculture Extension Management Training Institute (RAMETI),Kolhapur",
        "PurposeOfMoU": "Conduction of training sessions from faculty members of CSE, Live projects assigned for UG Students, Internship, Research work for PG students"
      },{
        "SrNo": 3,
        "Industry": "Eduskills Foundation",
        "PurposeOfMoU": "Training, Placement ,Internship and AWS, Blueprism, PaloAlto, RedHat Certification to Students"
      },{
        "SrNo": 4,
        "Industry": "Pupilfirst organization to conduct AICTE LITE Programme",
        "PurposeOfMoU": "Execution of Minor Course-Web Development"
      },{
        "SrNo": 5,
        "Industry": "Veloce Techinsights Pvt Ltd.",
        "PurposeOfMoU": "Training, Placement, Internships, Research work for PG students, Live projects assigned for UG Students"
      },{
        "SrNo": 6,
        "Industry": "Smart Musk Pvt Ltd",
        "PurposeOfMoU": "Training, Placement, Internships, Research work for PG students, Live projects assigned for UG Students"
      }
      ]

    let Mous2021 = [{
        "SrNo": 1,
        "Industry": "PARI, Pune",
        "PurposeOfMoU": "Internship, Problem statement ,Industry Ready Engineers, Curriculum Design and Placement"
      },{
        "SrNo": 2,
        "Industry": "Electronica , Pune",
        "PurposeOfMoU": "Problem statement ,Offer for 3D modeling of products using ARVR facility"
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
                        Alumni Contact US
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                     <a href="alumni">
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              
              Alumni Home
            </span>{" "}</a> <span className=" ">|</span> Alumni Contact Us

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
                            <div className="sm:hidden grid grid-cols-3 items-start gap-x-2 text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-10">Sr.No.</div>
                                <div className=" ">Industry Name</div>
                                <div className=" ">Purpose Of MoU</div>
                             
                               
                            </div>
                           
                            {Mous.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-2 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-10">{item.SrNo}</div>
                                            <div className="">{item.Industry}</div>
                                            <div className="">{item.PurposeOfMoU}</div>
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
                                                <div className=" text-slate-400">Purpose Of MoU</div>
                                                <div className="">{item.PurposeOfMoU}</div>
                                            </div>
                                           
                                        </div>
                                    </>
                                )
                            })}
                            <div className="mt-16 sm:ml-4 mb-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                MOU IN ACADEMIC YEAR 2020-2021
                            </div>
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-3 items-start gap-x-2 text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-10">Sr.No.</div>
                                <div className=" ">Industry Name</div>
                                <div className=" ">Purpose Of MoU</div>
                             
                               
                            </div>
                           
                            {Mous2021.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-2 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-10">{item.SrNo}</div>
                                            <div className="">{item.Industry}</div>
                                            <div className="">{item.PurposeOfMoU}</div>
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
                                                <div className=" text-slate-400">Purpose Of MoU</div>
                                                <div className="">{item.PurposeOfMoU}</div>
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

export default CseEngineeringMous
