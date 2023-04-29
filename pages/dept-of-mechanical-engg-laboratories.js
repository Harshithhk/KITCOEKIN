import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/mech/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const MechEngineeringLaboratories = () => {
    let Laboratories = [{
		"SrNo": 1,
		"NameOfLaboratory": "Automobile Engineering"
	},{
		"SrNo": 2,
		"NameOfLaboratory": "Internal Combustion Engine"
	},{
		"SrNo": 3,
		"NameOfLaboratory": "Heat Transfer"
	},{
		"SrNo": 4,
		"NameOfLaboratory": "Thermal Engineering"
	},{
		"SrNo": 5,
		"NameOfLaboratory": "Basic Mechanical Engineering"
	},{
		"SrNo": 6,
		"NameOfLaboratory": "Testing and Measurement"
	},{
		"SrNo": 7,
		"NameOfLaboratory": "Refrigeration &  Air Conditioning  "
	},{
		"SrNo": 8,
		"NameOfLaboratory": " UG Computer Laboratory 1"
	},{
		"SrNo": 9,
		"NameOfLaboratory": " UG Computer Laboratory 2"
	},{
		"SrNo": 10,
		"NameOfLaboratory": " Computer lab Laboratory 3"
	},{
		"SrNo": 11,
		"NameOfLaboratory": "Theory of Machines"
	},{
		"SrNo": 12,
		"NameOfLaboratory": "Fluid Mechanics"
	},{
		"SrNo": 13,
		"NameOfLaboratory": "Fluid & Turbo Machinery"
	},{
		"SrNo": 14,
		"NameOfLaboratory": "Machine Design"
	},{
		"SrNo": 15,
		"NameOfLaboratory": "Robotics Computer Laboratory"
	},{
		"SrNo": 16,
		"NameOfLaboratory": "Sensor Laboratory"
	},{
		"Sr.No": "Donated by IFM Electronics Ltd. Kolhapur"
	},{
		"SrNo": 17,
		"NameOfLaboratory": "Project Laboratory for Students"
	},{
		"SrNo": 18,
		"NameOfLaboratory": "Metallurgy"
	},{
		"SrNo": 19,
		"NameOfLaboratory": "Industrial Fluid Power"
	},{
		"SrNo": 20,
		"NameOfLaboratory": "Mechatronics"
	},{
		"SrNo": 21,
		"NameOfLaboratory": "Foundry Laboratory"
	},{
		"SrNo": 22,
		"NameOfLaboratory": "Metrology & Quality Control"
	},{
		"SrNo": 23,
		"NameOfLaboratory": "Smart Class Room"
	},{
		"SrNo": 24,
		"NameOfLaboratory": "Post Graduate Laboratory (1&2)"
	},{
		"SrNo": 25,
		"NameOfLaboratory": "Tool Engineering Laboratory"
	},{
		"SrNo": 26,
		"NameOfLaboratory": "CAD/CAM/CIM Laboratory"
	},{
		"SrNo": 27,
		"NameOfLaboratory": "Workshop"
	},{
		"SrNo": 28,
		"NameOfLaboratory": "CAD/CAM/CIM"
	},{
		"SrNo": 29,
		"NameOfLaboratory": "Metal Forming"
	},{
		"SrNo": 30,
		"NameOfLaboratory": "Welding Technology"
	},{
		"SrNo": 31,
		"NameOfLaboratory": "CAE (FEA) Lab"
	},{
		"SrNo": 32,
		"NameOfLaboratory": "CNC Laboratory"
	},{
		"SrNo": 33,
		"NameOfLaboratory": "PG Computer Laboratory"
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
                        Mechanical Engineering Laboratories
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
                           
                            <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-20">Sr.No.</div>
                                <div className=" ">Name of Laboratory</div>
                             
                            </div>

                            {Laboratories.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.NameOfLaboratory}</div>
                                            

                                        </div>
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Name of Laboratory</div>
                                                <div className="">{item.NameOfLaboratory}</div>
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

export default MechEngineeringLaboratories
