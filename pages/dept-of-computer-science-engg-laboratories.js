import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/cse/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const CseEngineeringLaboratories = () => {
    let Laboratories = [
        {
          "SrNo": "1",
          "NameOfTheLaboratory": "Laboratories (UG Computer Science and Engineering)"
        },
        {
          "SrNo": "1.1",
          "NameOfTheLaboratory": "Lab 1: Data Structure Laboratory"
        },
        {
          "SrNo": "1.2",
          "NameOfTheLaboratory": "Lab 2: Programming Laboratory"
        },
        {
          "SrNo": "1.3",
          "NameOfTheLaboratory": "Lab 3: Systems Laboratory"
        },
        {
          "SrNo": "1.4",
          "NameOfTheLaboratory": "Lab 4: Project Laboratory"
        },
        {
          "SrNo": "1.5",
          "NameOfTheLaboratory": "lab 5: Network Engineering Laboratory"
        },
        {
          "SrNo": "1.6",
          "NameOfTheLaboratory": "Lab 6: Database Engineering Laboratory"
        },
        {
          "SrNo": "2",
          "NameOfTheLaboratory": "Laboratories (PG Computer Science and Engineering)"
        },
        {
          "SrNo": "2.1",
          "NameOfTheLaboratory": "Lab 7: Advanced Programming Laboratory"
        },
        {
          "SrNo": "2.2",
          "NameOfTheLaboratory": "Lab 8: Research Laboratory"
        },
        {
          "SrNo": "3",
          "NameOfTheLaboratory": "Internet of Things Lab (IoT)"
        },
        {
          "SrNo": "3.1",
          "NameOfTheLaboratory": "Lab 9: Advanced Programming Laboratory"
        },
        {
          "SrNo": "4",
          "NameOfTheLaboratory": "Laboratories (with Sharing I.T. department)"
        },
        {
          "SrNo": "4.1",
          "NameOfTheLaboratory": "Lab 10: Data Structure & Programming Laboratory"
        },
        {
          "SrNo": "4.2",
          "NameOfTheLaboratory": "Lab 11:Operating System & Networking Laboratory"
        },
        {
          "SrNo": "4.3",
          "NameOfTheLaboratory": "Lab 12: Database Engineering Laboratory"
        },
        {
          "SrNo": "4.4",
          "NameOfTheLaboratory": "Lab 13:Project Laboratory"
        },
        {
          "SrNo": "5",
          "NameOfTheLaboratory": "Software"
        },
        {
          "SrNo": "5.1",
          "NameOfTheLaboratory": "System Software"
        },
        {
          "SrNo": "5.1",
          "NameOfTheLaboratory": "Application Software"
        },
        {
          "SrNo": "6",
          "NameOfTheLaboratory": "Peripheral"
        },
        {
          "SrNo": "6.1",
          "NameOfTheLaboratory": "Equipment and Peripherals"
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
                            <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-20">Sr.No.</div>
                                <div className=" ">Name Of The Laboratory</div>
                            </div>

                            {Laboratories.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.NameOfTheLaboratory}</div>
                                            <div className="">{item.Area}</div>

                                        </div>
                                        <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Name Of The Laboratory</div>
                                                <div className="">{item.NameOfTheLaboratory}</div>
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

export default CseEngineeringLaboratories
