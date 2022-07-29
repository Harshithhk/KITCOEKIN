import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/mech/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const MechEngineeringRecruiters = () => {
    let Recruiters = [{
		"SrNo": 1,
		"Recruiters": "Tata Techologies Ltd Pune"
	},{
		"SrNo": 2,
		"Recruiters": "Tata Consultancy Services Ltd"
	},{
		"SrNo": 3,
		"Recruiters": "Aequs Pvt Ltd, Belgaum"
	},{
		"SrNo": 4,
		"Recruiters": "Aquachill Systems Pvt Ltd Pune"
	},{
		"SrNo": 5,
		"Recruiters": "Blue Star Refrigerations Mumbai"
	},{
		"SrNo": 6,
		"Recruiters": "Bonfigloli Transmissions Pvt Ltd, Chennai"
	},{
		"SrNo": 7,
		"Recruiters": "Bosch Ltd Nasik"
	},{
		"SrNo": 8,
		"Recruiters": "Cleantech Systems Pvt. Ltd Pune"
	},{
		"SrNo": 9,
		"Recruiters": "Extramarks Education India Pvt Ltd Pune"
	},{
		"SrNo": 10,
		"Recruiters": "Federal Bank Ltd"
	},{
		"SrNo": 11,
		"Recruiters": "Ghatage Patil Industries Ltd Kolhapur"
	},{
		"SrNo": 12,
		"Recruiters": "Indoshottle India Pvt Ltd Pune"
	},{
		"SrNo": 13,
		"Recruiters": "Kirlosakar Brothers Ltd Kirloskarwadi"
	},{
		"SrNo": 14,
		"Recruiters": "Maharashtra Natural Gas Ltd Pune"
	},{
		"SrNo": 15,
		"Recruiters": "Mourya Industries Pvt Ltd Kolhapur"
	},{
		"SrNo": 16,
		"Recruiters": "Neilsoft Solutions Pune"
	},{
		"SrNo": 17,
		"Recruiters": "Overlikon Balzers Pvt Ltd Pune"
	},{
		"SrNo": 18,
		"Recruiters": "Pari Robotics Shirwal Pune"
	},{
		"SrNo": 19,
		"Recruiters": "Phoenix Mecano India Private Limited,Pune"
	},{
		"SrNo": 20,
		"Recruiters": "Qspider Software Pune"
	},{
		"SrNo": 21,
		"Recruiters": "Quest Global Belgaum"
	},{
		"SrNo": 22,
		"Recruiters": "Rivigo"
	},{
		"SrNo": 23,
		"Recruiters": "Shree Refrigerations Pvt. Ltd Karad"
	},{
		"SrNo": 24,
		"Recruiters": "Slk Software Pvt Ltd Banglore"
	},{
		"SrNo": 25,
		"Recruiters": "Synergy Green Pvt Ltd Kolhapur"
	},{
		"SrNo": 26,
		"Recruiters": "Vaibhav Tech Pvt Ltd Pune"
	},{
		"SrNo": 27,
		"Recruiters": "Wipro Ltd Pune"
	},{
		"SrNo": 28,
		"Recruiters": "Yazaki India Pvt Ltd Pune"
	},{
		"SrNo": 29,
		"Recruiters": "Acecomfort Solutions Pvt Ltd Kolhapur"
	},{
		"SrNo": 30,
		"Recruiters": "Amazon Development Centre (India) Pvt Ltd"
	},{
		"SrNo": 31,
		"Recruiters": "Ceratizit Pune"
	},{
		"SrNo": 32,
		"Recruiters": "Bhavani Iron Kolhapur"
	},{
		"SrNo": 33,
		"Recruiters": "Deshpande Automech Pvt Ltd Kolhapur"
	},{
		"SrNo": 34,
		"Recruiters": "Dhoot Transmissions Pvt Ltd Pune"
	},{
		"SrNo": 35,
		"Recruiters": "Dunung Industries Kolhapur"
	},{
		"SrNo": 36,
		"Recruiters": "Mayura Steels Pvt Ltd"
	},{
		"SrNo": 37,
		"Recruiters": "Menon & Menon Ltd Kolhapur"
	},{
		"SrNo": 38,
		"Recruiters": "Menon Pistons Ltd Kolhapur"
	},{
		"SrNo": 39,
		"Recruiters": "Zanvar Group"
	},{
		"SrNo": 40,
		"Recruiters": "Zopper - Solvy Tech Solutions Pvt Ltd"
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
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Recruiters
                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                List Of Recruiters
                            </div>
                            {/* -------------- */}
                            <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                                <div className=" sm:hidden ml-20">Sr.No.</div>
                                <div className=" ">Recruiter</div>
                               
                            </div>

                            {Recruiters.map((item, index) => {
                                return (
                                    <>
                                        <div className="sm:hidden grid grid-cols-2 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                                            <div className="">{item.Recruiters}</div>
                                        </div>
                                       
                                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">

                                            <div className="grid grid-cols-2">
                                                <div className="text-slate-400">Sr.No.</div>
                                                <div className="">{item.SrNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className=" text-slate-400">Recruiter</div>
                                                <div className="">{item.Recruiters}</div>
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

export default MechEngineeringRecruiters