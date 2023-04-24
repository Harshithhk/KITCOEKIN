import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/cse/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const CseEngineeringRecruiters = () => {
    let Recruiters = [
        {
          "SrNo": "1",
          "Recruiters": "TCS Ltd., Pune"
        },
        {
          "SrNo": "2",
          "Recruiters": "Atos|Syntel"
        },
        {
          "SrNo": "3",
          "Recruiters": "SLK Software, Bangalore"
        },
        {
          "SrNo": "4",
          "Recruiters": "Jade Global Pune"
        },
        {
          "SrNo": "5",
          "Recruiters": "NetCracker Technology Solutions,Pune"
        },
        {
          "SrNo": "6",
          "Recruiters": "Persistent Systems, Pune"
        },
        {
          "SrNo": "7",
          "Recruiters": "Wipro Limited"
        },
        {
          "SrNo": "8",
          "Recruiters": "Global Edge Software Ltd. Pune"
        },
        {
          "SrNo": "9",
          "Recruiters": "Tata Technolgies, Pune"
        },
        {
          "SrNo": "10",
          "Recruiters": "Qspiders Pune"
        },
        {
          "SrNo": "11",
          "Recruiters": "Bentley Systems Pune"
        },
        {
          "SrNo": "12",
          "Recruiters": "Anveshak Technologies"
        },
        {
          "SrNo": "13",
          "Recruiters": "L&T Infotech"
        },
        {
          "SrNo": "14",
          "Recruiters": "GlobalSpace Technologies, Mumbai"
        },
        {
          "SrNo": "15",
          "Recruiters": "Amazon India, Pune"
        },
        {
          "SrNo": "16",
          "Recruiters": "Just Dial, Pune"
        },
        {
          "SrNo": "17",
          "Recruiters": "Inteliment Technologies Pvt. Ltd., Pune"
        },
        {
          "SrNo": "18",
          "Recruiters": "Paramatrix Technologies"
        },
        {
          "SrNo": "19",
          "Recruiters": "Mindstix Software Labs Pvt. Ltd."
        },
        {
          "SrNo": "20",
          "Recruiters": "Eternus Solutions Private Ltd"
        },
        {
          "SrNo": "21",
          "Recruiters": "HSBC Bank Ltd. Pune"
        },
        {
          "SrNo": "22",
          "Recruiters": "Mouri Tech Ltd. Pune"
        },
        {
          "SrNo": "23",
          "Recruiters": "CROSS COUNTRY INFOTECH PRIVATE LTD."
        },
        {
          "SrNo": "24",
          "Recruiters": "POLE TO WIN International"
        },
        {
          "SrNo": "25",
          "Recruiters": "Innovetcure India"
        },
        {
          "SrNo": "26",
          "Recruiters": "Capgemini Technology Services India Limited."
        },
        {
          "SrNo": "27",
          "Recruiters": "Bitwise Pune"
        },
        {
          "SrNo": "28",
          "Recruiters": "MKCL"
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
                        Computer Science Engineering Recruiters
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

export default CseEngineeringRecruiters
