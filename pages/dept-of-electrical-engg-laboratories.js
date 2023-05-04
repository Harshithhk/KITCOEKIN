import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/electrical/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const ElectricalEngineeringLaboratories = () => {
    let Laboratories = [{
		"SrNo": 1,
		"NameOfTheLaboratory": "Project Laboratory"
	},{
		"SrNo": 2,
		"NameOfTheLaboratory": "Power & Switchgear Laboratory"
	},{
		"SrNo": 3,
		"NameOfTheLaboratory": "Measurement And Control System Laboratory"
	},{
		"SrNo": 4,
		"NameOfTheLaboratory": "Electronics Laboratory"
	},{
		"SrNo": 5,
		"NameOfTheLaboratory": "Computer Facility Laboratory"
	},{
		"SrNo": 6,
		"NameOfTheLaboratory": "Electrical Machine And Drives Laboratory"
	},{
		"SrNo": 7,
		"NameOfTheLaboratory": "Electric Vehicle Laboratory"
	},{
		"SrNo": 8,
		"NameOfTheLaboratory": "Basic Electrical Engineering Laboratory"
	}
]

let LabList2 = [{
    "SrNo": "1.",
    "LabName": "Basic Electrical Engineering Lab(2)",
    "NoOfCourses": 2,
    "CoursesUnderTheLab": "Basic Electrical Engineering"
},{
    "SrNo": "2.",
    "LabName": "Electrical Machines Lab (2)",
    "NoOfCourses": 2,
    "CoursesUnderTheLab": "DCMT, ACM"
},{
    "SrNo": "3.",
    "LabName": "Applied Electronics lab(4)",
    "NoOfCourses": 4,
    "CoursesUnderTheLab": "AE,DE,PE, MPMC"
},{
    "SrNo": "4.",
    "LabName": "Computer Facility(3)",
    "NoOfCourses": "3+1(Double weight)",
    "CoursesUnderTheLab": "Software-1 (MATLAB), PS, Software-2"
},{
    "SrNo": "5.",
    "LabName": "Project Lab(4)",
    "NoOfCourses": 4,
    "CoursesUnderTheLab": "Miniproject1, Miniproject2, Project"
}
]

    const cards = [
        {
            title: "PROJECT LABORATORY",
            excerpt: 'Lab Courses: UELE0441, UELE0541, UELE0751, UELE0851\n'+
            'Lab. Area: 80 Sq.m\n'+
            'Faculty In-Charge: Prof. S. A Madiwal\n'+
            'Instructor in charge: Mr. A. D. Nimbalkar', 
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/project-lab-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt: "100Mhz Digital Storage Oscilloscope, Power Supply, Signal generator, Cathode Ray Oscilloscope, Computer Internet & Wi-fi Facility ",
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/project-lab-02.jpg"
        }, {
            title: "POWER & SWITCHGEAR LABORATORY",
            excerpt: 'Lab Courses:UELE0533, UELE0632, UELE0731\n'+
            'Lab. Area-88.92 Sq.m\n'+
            'Faculty In-Charge: Prof. P. L. Chavan\n'+
            'Instructor in charge: Mr. K. L. Rukadikar',
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/power-&-switchgear-lab-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt:"Power Semiconductor Devices trainer kit, 1-Phase & 3 Phase Rectifier, Inverter, Chopper & AC Voltage Controller trainer kit, Electromechanical, Solid State and Microprocessor Type, Over/Under Voltage and Current Relay Trainer, Single phase dual converter transmitter kit",
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/power-&-switchgear-lab-02.jpg"
        },
        {
            title: "MEASUREMENT & CONTROL SYSTEM LABORATORY",
            excerpt: 'Lab Courses:UELE0333, UELE0531,UELE0633\n'+
            'Lab. Area-88 Sq.m\n'+
            'Faculty In-Charge: Prof. S. A. Phalake\n'+
            'Instructor in charge: Mr. A. D. Nimbalkar',
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/measurement-&-control-system-lab-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt: "Modeling of DC Motor: Armature and filed controlled, T.F. of AC Servomotor & Speed-Torque characteristics, Study of Synchro Transmitter-Receiver as a control device, Measurement of frequency and phase using Lissajous patterns, Insulation resistance and earth resistance measurement is using Megger, Measurement of active and reactive power in 3 phases circuit",
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/measurement-&-control-system-lab-02.jpg"
        },
        {
            title: "ELECTRONICS LABORATORY",
            excerpt: 'Lab Courses: UELE0332, UELE0432, UELE0532\n'+
            'Lab. Area-90 Sq. m\n'+
            'Faculty In-Charge: Prof. Sushmita A. Sarkar\n'+
            'Instructor in charge: Mr. A. D. Nimbalkar',
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electronics-lab-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt: "8085 Microprocessor kits, 8051 Microcontroller kits, Single Phase Rectifier with Capacitive filter, Inductive filter, Frequency response of single stage RC coupled amplifier, Wien Bridge and RC phase shift oscillator, Inverting & Non Inverting Amplifier", 
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electronics-lab-02.jpg"
        },
        {
            title: "COMPUTER FACILITY LABORATORY",
            excerpt: 'Lab Courses: UELE0433, UELE0531, UELE0631, UELE0733\n'+
            'Lab. Area-94.38 Sq. Meter\n'+
            'Faculty In-Charge: Prof. M. S. Shikalgar\n'+
            'Instructor in charge: Mr. A. D. Nimbalkar',
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/computer-lab-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt: "DELL Optiplex 330, Pentium N series Intel Pentium G640 ( 2.8 GHZ 3MB) SATA Hard Drive, 4GB RAM ,16X DVD +/- R/W, Dell Optical Keyboard & USB Mouse, 18.5’ Widescreen LED Monitor , High Definition Audio Codec, 1 Ethernet , 1 VGA out 1 Microphone, 1 Speakers /line out BTX Convertible chassis +280 SMPS , Computer –Internet & Wi-fi Facility, Licensed MATLAB SOFTWARE", 
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/computer-lab-02.jpg"
        },
        {
            title: "ELECTRICAL MACHINE & DRIVES LABORATORY",
            excerpt: 'Lab Courses: UELE0331, UELE0431\n'+
            'Lab. Area-108 Sq. m\n'+
            'Faculty In-Charge: Prof. N. J. Kumbhar\n'+
            'Instructor in charge: Mr. K. L. Rukadikar',
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electrical-machine-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt: "Speed Control of DC shunt motor, Swinburne’s test & Hopkinson’s test, Brake test on shunt motor, Field test on series motor, Parallel operation of single phase transformer, DY1 and DY11 parallel connection to demonstrate load sharing",
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electrical-machine-02.jpg"
        },
        {
            title: "ELECTRIC VEHICLE LABORATORY",
            excerpt: 'Lab Courses: UELE0732\n'+
            'Lab. Area-: 84 Sq. Meters\n'+
            'Faculty In-Charge: Prof. Priyanka P. Kulkarni\n'+
            'Instructor in charge: Mr. K. L. Rukadikar',
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electrical-vehicle-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt: "Electric vehicle power system integration, Smartgrid, interoperability and power measurement studies, Electric vehicle enabling technology, Logging equipment in vehicles, Testing towards contemporary EV standards.", 
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electrical-vehicle-02.jpg"
        },
        {
            title: "BASIC ELECTRICAL ENGINEERING LABORATORY",
            excerpt: 'Lab Courses:UBSH0104, UBSH0204,UELE0334\n'+
            'Lab . Area- 135 Sq.m\n'+
            'Faculty In-Charge: Prof. Priyanka N. Mane\n'+
            'Instructor in charge: Mr. K. L. Rukadikar',
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electrical-01.jpg"
        }, {
            title: "MAJOR EXPERIMENTS & EQUIPMENTS",
            excerpt: "25KW 3 PHASE D Y 440/230V50 CYCLES AIRCOOLED (Main Transformer Installation), Efficiency and Regulation of single phase transformer by direct loading, Torque Speed characteristics of AC Servo Motor, Verification of Maximum Power Transfer Theorem, Voltage regulation of alternator using synchronous impedance method.", 
            date: "",
            author: "Dept Of Electrical Engineering",
            img: "images/department/electrical/lab/electrical-02.jpg"
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
                        Electrical Engineering Laboratories
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
                                        <div key = {index} className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.NameOfTheLaboratory}</div>
                                       

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
                           
                           
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-4 items-center text-slate-500 justify-items-start mt-16  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-20">Sr.No.</div>
                                <div className=" ">Lab name</div>
                                <div className=" ">No. of courses</div>
                                <div className=" ">Courses under the lab</div>
                            </div>

                            {LabList2.map((item, index) => {
                                return (
                                    <>
                                        <div key = {index} className="sm:hidden grid grid-cols-4 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.LabName}</div>
                                            <div className="">{item.NoOfCourses}</div>
                                            <div className="">{item.CoursesUnderTheLab}</div>
                                                        

                                        </div>
                                        <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-4 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Lab name</div>
                                                <div className="">{item.LabName}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">No. of courses</div>
                                                <div className="">{item.NoOfCourses}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Courses under the lab</div>
                                                <div className="">{item.CoursesUnderTheLab}</div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })}
                           



                            <div className="mt-16">
                            {cards.map((card) => {
                                return (<>
                                    <div className="flex sm:flex-col  flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

                                        <div className="h-64 sm:w-auto w-1/2">
                                            <img className="inset-0 h-full w-full object-cover object-center" alt="" src={card.img} />
                                        </div>
                                        <div className="whitespace-pre-wrap w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                            <h3 className="font-semibold text-lg leading-tight truncate">{card.title}</h3>
                                            <p className="mt-2 ">
                                                {card.excerpt}
                                            </p>
                                            <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                                {card.author} &bull; {card.date}
                                            </p>
                                        </div>
                                    </div>
                                </>)
                            })}
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

export default ElectricalEngineeringLaboratories
