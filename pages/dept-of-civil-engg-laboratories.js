import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/civil/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const BiotechnologyEngineeringLaboratories = () => {
    let Laboratories = 
    [{
        "SrNo": 1,
        "NameOfTheLaboratory": "Applied Mechanics",
        "Area": 66
      },{
        "SrNo": 2,
        "NameOfTheLaboratory": "Material Testing",
        "Area": 79
      },{
        "SrNo": 3,
        "NameOfTheLaboratory": "Concrete Technology",
        "Area": 79
      },{
        "SrNo": 4,
        "NameOfTheLaboratory": "Surveying Laboratory",
        "Area": 120
      },{
        "SrNo": 5,
        "NameOfTheLaboratory": "Fluid Mechanics",
        "Area": 180
      },{
        "SrNo": 6,
        "NameOfTheLaboratory": "Geotechnical Engineering",
        "Area": 180
      },{
        "SrNo": 7,
        "NameOfTheLaboratory": " Engineering Geology",
        "Area": 73
      },{
        "SrNo": 8,
        "NameOfTheLaboratory": "Transportation Engineering",
        "Area": 120
      },{
        "SrNo": 9,
        "NameOfTheLaboratory": "Computer Facility (Lab-I & II)",
        "Area": 66
      },{
        "SrNo": 10,
        "NameOfTheLaboratory": "Model & Charts",
        "Area": 66
      }
      ]

      let EquipmentsDetails =
      [{
        "SrNo": 1,
        "ImportantEquipment": "100 MT Digital U.T.M",
        "ImportantEquipment2": "Rebound Hammer"
      },{
        "SrNo": 2,
        "ImportantEquipment": "200 MT Digital C.T.M.",
        "ImportantEquipment2": "Ultrasonic Pulse Velocity Meter"
      },{
        "SrNo": 3,
        "ImportantEquipment": "200 MT Mechanical C.T.M.",
        "ImportantEquipment2": "Corrosion Meter cover"
      },{
        "SrNo": 4,
        "ImportantEquipment": "40 MT Mechanical U.T.M.",
        "ImportantEquipment2": "Autoclave"
      },{
        "SrNo": 5,
        "ImportantEquipment": "Impact Testing Machine",
        "ImportantEquipment2": "Steam Curing Unit"
      },{
        "SrNo": 6,
        "ImportantEquipment": "Hardness Testes",
        "ImportantEquipment2": "Slump Cone"
      },{
        "SrNo": 7,
        "ImportantEquipment": "Torsion Testing Machine",
        "ImportantEquipment2": "Compaction Factor Mashine"
      }
      ]
      
      
      let  MechanicsLaboratory = [{
        "SrNo": 1,
        "ImportantEquipment": "Grave Sand’s Apparatus"
      },{
        "SrNo": 2,
        "ImportantEquipment": "Jib Crane Apparatus"
      },{
        "SrNo": 3,
        "ImportantEquipment": "Bell Crank Apparatus"
      },{
        "SrNo": 4,
        "ImportantEquipment": "Beam Reaction Apparatus"
      }
      ]
      
      let SurveyingLaboratory = [{
        "SrNo": 1,
        "ImportantEquipment": "Total Station-Leicats09"
      },{
        "SrNo": 2,
        "ImportantEquipment": "Total Station-Sokkia Set500"
      },{
        "SrNo": 3,
        "ImportantEquipment": "Dumpy Level"
      },{
        "SrNo": 4,
        "ImportantEquipment": "Auto Level"
      },{
        "SrNo": 5,
        "ImportantEquipment": "Theodolites (20”) & (10”)"
      },{
        "SrNo": 6,
        "ImportantEquipment": "G.P.S"
      }
      ]
      
      
      let FluidMechanicsLaboratory =
      [{
        "SrNo": 1,
        "ImportantEquipment": "Bernoulli's theorem Apparatus"
      },{
        "SrNo": 2,
        "ImportantEquipment": "Venturimeter"
      },{
        "SrNo": 3,
        "ImportantEquipment": "orifice meter apparatus"
      },{
        "SrNo": 4,
        "ImportantEquipment": "Notch apparatus"
      },{
        "SrNo": 5,
        "ImportantEquipment": "Orifice"
      },{
        "SrNo": 6,
        "ImportantEquipment": "mouthpiece apparatus"
      }
      ]
      
      
      let TransportationEngg =  [{
        "SrNo": 1,
        "ImportantEquipment": "Impact Testing Machine"
      },{
        "SrNo": 2,
        "ImportantEquipment": "Compression Testing Machine"
      },{
        "SrNo": 3,
        "ImportantEquipment": "Los Angeles Abrasion Testing Machine"
      },{
        "SrNo": 4,
        "ImportantEquipment": "Penetrometer"
      },{
        "SrNo": 5,
        "ImportantEquipment": "Ring and Ball Apparatus"
      },{
        "SrNo": 6,
        "ImportantEquipment": "Pensky-Martens Closed Tester"
      },{
        "SrNo": 7,
        "ImportantEquipment": "Oven"
      },{
        "SrNo": 8,
        "ImportantEquipment": "Ductility Machine"
      }
      ]
      
      
      let GeotechnicalEngg = [{
        "SrNo": 1,
        "ImportantEquipment": "Plate load test"
      },{
        "SrNo": 2,
        "ImportantEquipment": "Triaxial test"
      },{
        "SrNo": 3,
        "ImportantEquipment": "Direct shear test"
      },{
        "SrNo": 4,
        "ImportantEquipment": "Unconfined compressive test"
      },{
        "SrNo": 5,
        "ImportantEquipment": "Standard penetration test"
      },{
        "SrNo": 6,
        "ImportantEquipment": "Consolidation test"
      },{
        "SrNo": 7,
        "ImportantEquipment": "Swelling test"
      },{
        "SrNo": 8,
        "ImportantEquipment": "Permeability test"
      },{
        "SrNo": 9,
        "ImportantEquipment": "Boring augers"
      },{
        "SrNo": 10,
        "ImportantEquipment": "Relative density test"
      }
      ]
      
      
      let EnvironmentalEngg = [{
        "SrNo": 1,
        "ImportantEquipment": "COD Digestion Kit"
      },{
        "SrNo": 2,
        "ImportantEquipment": "Incubator"
      },{
        "SrNo": 3,
        "ImportantEquipment": "Jar Test Apparatus"
      },{
        "SrNo": 4,
        "ImportantEquipment": "PH Meter"
      },{
        "SrNo": 5,
        "ImportantEquipment": "Conductivity meter"
      },{
        "SrNo": 6,
        "ImportantEquipment": "Nephelometer"
      },{
        "SrNo": 7,
        "ImportantEquipment": "Oven"
      },{
        "SrNo": 8,
        "ImportantEquipment": "Lab Hosp"
      },{
        "SrNo": 9,
        "ImportantEquipment": "Distillation Plant"
      },{
        "SrNo": 10,
        "ImportantEquipment": "Digital Balance"
      },{
        "SrNo": 11,
        "ImportantEquipment": "Water Bath"
      }
      ]
      
      
      let DrawingHall = [{
        "SrNo": 1,
        "Charts": "Tools & Implements for stone dressing",
        "Model": "Bricks (Set of 10)"
      },{
        "SrNo": 2,
        "Charts": "Types of surface finishes",
        "Model": "Door Lab (Set of 5)"
      },{
        "SrNo": 3,
        "Charts": "Appliances for lifting stone",
        "Model": "Model doors with frame"
      },{
        "SrNo": 4,
        "Charts": "Types of bonds",
        "Model": "Ventilator Door with frame"
      },{
        "SrNo": 5,
        "Charts": "Strutting & shoring",
        "Model": "Model of windows (set of 8)"
      },{
        "SrNo": 6,
        "Charts": "Scaffolds",
        "Model": "Model of Staircase"
      },{
        "SrNo": 7,
        "Charts": "Types of floors",
        "Model": "Model of Staircase open well (set of 5)"
      },{
        "SrNo": 8,
        "Charts": "Types of timber floors",
        "Model": "Model of staircase quarter turn (set of 5)"
      },{
        "SrNo": 9,
        "Charts": "Types of arches",
        "Model": "Model of staircase bifurcated (set of 5)"
      },{
        "SrNo": 10,
        "Charts": "Classification of stairs",
        "Model": "Model of staircase geometrical (set of 5)"
      },{
        "SrNo": 11,
        "Charts": "Classification of stairs",
        "Model":""
      },{
        "SrNo": 12,
        "Charts": "Classification of stairs",
        "Model":""
      }
      ]
      
      
      let EngineeringGeology = [{
        "SrNo": 1,
        "ImportantEquipment": "Rock Samples"
      },{
        "SrNo": 2,
        "ImportantEquipment": "Mineral Samples"
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
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-3 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

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
                                <div className="ml-2 font-bold">1029</div>
                            </div>
{/* ----------------------1------------------------ */}
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                Labs’ Equipments Details
                            </div>
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-3 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-20">Sr.No.</div>
                                <div className=" "> Equipment(Material Testing)</div>
                                <div className=" "> Equipment(Concrete Laboratory)</div>
                            </div>

                            {EquipmentsDetails.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.ImportantEquipment}</div>
                                            <div className="">{item.ImportantEquipment2}</div>

                                        </div>
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-3 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400"> Equipment(Material Testing)</div>
                                                <div className="">{item.ImportantEquipment}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400"> Equipment(Concrete Laboratory)</div>
                                                <div className="">{item.ImportantEquipment2}</div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })}
{/* ----------------------2------------------------ */}
                            <div className="flex flex-row mt-10 sm:flex-col justify-between gap-6 sm:gap-9">
                                
                                <div>
                                    <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                        Applied Mechanics Laboratory
                                    </div>
                            
                                    <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                        <div className=" sm:hidden ml-20">Sr.No.</div>
                                        <div className=" ">Important Equipment</div>
                                    
                                    </div>

                                    {MechanicsLaboratory.map((item, index) => {
                                        return (
                                            <>
                                                <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                                    <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                                    <div className="">{item.ImportantEquipment}</div>
                                                    

                                                </div>
                                                <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                                    <div className="grid grid-cols-2">
                                                        <div className="text-slate-400">Sr.No.</div>
                                                        <div className="">{item.SrNo}</div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <div className=" text-slate-400"> Important Equipment</div>
                                                        <div className="">{item.ImportantEquipment}</div>
                                                    </div>
                                                    

                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                {/* ============ */}
                                
                                <div>
                                    <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                        Surveying Laboratory 
                                    </div>
                                    
                                    <div className="sm:hidden grid grid-cols-2  items-center text-slate-500 justify-items-start mt-[75px] sm:mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                        <div className=" sm:hidden ml-20">Sr.No.</div>
                                        <div className=" ">Important Equipment</div>
                                    
                                    </div>

                                    {SurveyingLaboratory.map((item, index) => {
                                        return (
                                            <>
                                                <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                                    <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                                    <div className="">{item.ImportantEquipment}</div>
                                                    

                                                </div>
                                                <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                                    <div className="grid grid-cols-2">
                                                        <div className="text-slate-400">Sr.No.</div>
                                                        <div className="">{item.SrNo}</div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <div className=" text-slate-400"> Important Equipment</div>
                                                        <div className="">{item.ImportantEquipment}</div>
                                                    </div>
                                                    

                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
{/* ----------------------3------------------------ */}
                            <div className="flex flex-row mt-10 sm:flex-col justify-between gap-6 sm:gap-9">
                            <div>
                                    <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                        Fluid Mechanics Laboratory
                                    </div>
                            
                                    <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                        <div className=" sm:hidden ml-20">Sr.No.</div>
                                        <div className=" ">Important Equipment</div>
                                    
                                    </div>
                                    

                                    {FluidMechanicsLaboratory.map((item, index) => {
                                        return (
                                            <>
                                                <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                                    <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                                    <div className="">{item.ImportantEquipment}</div>
                                                    

                                                </div>
                                                <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                                    <div className="grid grid-cols-2">
                                                        <div className="text-slate-400">Sr.No.</div>
                                                        <div className="">{item.SrNo}</div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <div className=" text-slate-400"> Important Equipment</div>
                                                        <div className="">{item.ImportantEquipment}</div>
                                                    </div>
                                                    

                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                {/* =========== */}
                                <div>
                                    <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                        Transportation Engg Laboratory
                                    </div>
                            
                                    <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                        <div className=" sm:hidden ml-20">Sr.No.</div>
                                        <div className=" ">Important Equipment</div>
                                    
                                    </div>

                                    {TransportationEngg.map((item, index) => {
                                        return (
                                            <>
                                                <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                                    <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                                    <div className="">{item.ImportantEquipment}</div>
                                                    

                                                </div>
                                                <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                                    <div className="grid grid-cols-2">
                                                        <div className="text-slate-400">Sr.No.</div>
                                                        <div className="">{item.SrNo}</div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <div className=" text-slate-400"> Important Equipment</div>
                                                        <div className="">{item.ImportantEquipment}</div>
                                                    </div>
                                                    

                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>   
{/* ----------------------4------------------------ */}
                            <div className="flex flex-row mt-10 sm:flex-col justify-between gap-6 sm:gap-9">
                                <div>
                                    <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                        Geotechnical Engg Laboratory
                                    </div>
                            
                                    <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                        <div className=" sm:hidden ml-20">Sr.No.</div>
                                        <div className=" ">Important Equipment</div>
                                    
                                    </div>
                                    
                                    

                                    {GeotechnicalEngg.map((item, index) => {
                                        return (
                                            <>
                                                <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                                    <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                                    <div className="">{item.ImportantEquipment}</div>
                                                    

                                                </div>
                                                <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                                    <div className="grid grid-cols-2">
                                                        <div className="text-slate-400">Sr.No.</div>
                                                        <div className="">{item.SrNo}</div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <div className=" text-slate-400"> Important Equipment</div>
                                                        <div className="">{item.ImportantEquipment}</div>
                                                    </div>
                                                    

                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                {/* =========== */}
                                <div>
                                    <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                        Environmental Engg Laboratory
                                    </div>
                            
                                    <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                        <div className=" sm:hidden ml-20">Sr.No.</div>
                                        <div className=" ">Important Equipment</div>
                                    
                                    </div>

                                    {EnvironmentalEngg.map((item, index) => {
                                        return (
                                            <>
                                                <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                                    <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                                    <div className="">{item.ImportantEquipment}</div>
                                                    

                                                </div>
                                                <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                                    <div className="grid grid-cols-2">
                                                        <div className="text-slate-400">Sr.No.</div>
                                                        <div className="">{item.SrNo}</div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <div className=" text-slate-400"> Important Equipment</div>
                                                        <div className="">{item.ImportantEquipment}</div>
                                                    </div>
                                                    

                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>  
{/* ----------------------5------------------------ */}
                            <div className="mt-12 sm:mt-10 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                Drawing Hall & Model Room
                            </div>
                           
                            <div className="sm:hidden grid grid-cols-3 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-20">Sr.No.</div>
                                <div className=" ">Charts</div>
                                <div className=" ">Model</div>
                            </div>
                            

                            {DrawingHall.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-3 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.Charts}</div>
                                            <div className="">{item.Model}</div>

                                        </div>
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-3 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Charts</div>
                                                <div className="">{item.Charts}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Model</div>
                                                <div className="">{item.Model}</div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })}
                          
{/* ------------------------6------------------------- */}


                                    <div className="mt-10 sm:mt-10 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                        Engineering Geology Laboratory
                                    </div>
                            
                                    <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                        <div className=" sm:hidden ml-20">Sr.No.</div>
                                        <div className=" ">Important Equipment</div>
                                    
                                    </div>
                                    
                                    

                                    {EngineeringGeology.map((item, index) => {
                                        return (
                                            <>
                                                <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                                    <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                                    <div className="">{item.ImportantEquipment}</div>
                                                    

                                                </div>
                                                <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                                    <div className="grid grid-cols-2">
                                                        <div className="text-slate-400">Sr.No.</div>
                                                        <div className="">{item.SrNo}</div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <div className=" text-slate-400"> Important Equipment</div>
                                                        <div className="">{item.ImportantEquipment}</div>
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

export default BiotechnologyEngineeringLaboratories
