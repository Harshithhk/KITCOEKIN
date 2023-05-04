import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/env/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const EnvironmentalEngineeringLaboratories = () => {
    let Laboratories = [{
        "SrNo": 1,
        "NameOfTheLaboratory": "Laboratories (UG Environmental Engineering)"
      },{
        "SrNo":1.1,
        "NameOfTheLaboratory": "Lab 1: Advanced Environmental Engineering Laboratory",
        "Area": 37.05
      },{
        "SrNo": 1.2,
        "NameOfTheLaboratory": "Lab 2: Environmental Engineering-I Laboratory",
        "Area": 63.75
      },{
        "SrNo": 1.3,
        "NameOfTheLaboratory": "Lab 3: Environmental Engineering- II",
        "Area": 52.5
      },{
        "SrNo": 1.4,
        "NameOfTheLaboratory": "Lab 4: Air Pollution Laboratory",
        "Area": 55.7
      },{
        "SrNo": 1.5,
        "NameOfTheLaboratory": "Lab 5: Remote sensing and GIS Laboratory",
        "Area": 34.65
      },{
        "SrNo": 1.6,
        "NameOfTheLaboratory": "Lab 6: Fluid Mechanics Laboratory",
        "Area": 181.88
      },{
        "SrNo": 1.7,
        "NameOfTheLaboratory": "Lab 7: Material Testing Laboratory and Concrete Testing Laboratory",
        "Area": 287.06
      },{
        "SrNo": 1.8,
        "NameOfTheLaboratory": "Lab 8: Geotechnical Engineering Laboratory",
        "Area": 181.88
      },{
        "SrNo": 1.9,
        "NameOfTheLaboratory": "Lab 9: Engineering Geology Laboratory",
        "Area": 83.05
      },{
        "SrNo": 1.1,
        "NameOfTheLaboratory": "Lab 10: Surveying Laboratory",
        "Area": 111.77
      },{
        "SrNo": 1.11,
        "NameOfTheLaboratory": "Lab 11: Transportation Engineering Laboratory",
        "Area": 120
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
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Laboratory
                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                LIST OF LABORATORIES
                            </div>
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-3 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-20">Sr.No.</div>
                                <div className=" ">Name Of The Laboratory</div>
                                <div className=" ">Area</div>
                            </div>

                            {Laboratories.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.NameOfTheLaboratory}</div>
                                            <div className="">{item.Area}</div>

                                        </div>
                                        <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-3 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Name Of The Laboratory</div>
                                                <div className="">{item.NameOfTheLaboratory}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Area</div>
                                                <div className="">{item.Area}</div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })}
                            <div className=" grid grid-cols-3 items-center bg-white justify-items-start mt-2  w-full  p-2 mb-16 shadow-lg rounded-2xl">
                                <div className=" font-bold ml-20 sm:ml-10">Total.</div>
                                <div className=" "></div>
                                <div className=" font-bold">2153.66</div>
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

export default EnvironmentalEngineeringLaboratories
