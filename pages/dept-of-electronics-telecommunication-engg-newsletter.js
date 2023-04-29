import DefaultLayout from "../components/DefaultLayout"

import QuickLinksCard from "../sections/departments/entc/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const EntcEngineeringNewsletter = () => {
    let Mous = [{
        "SrNo": 1,
        "Organization": "KPIT Technologies, Pune",
        "DateOfSigningMoU": "09-10-2014",
        "Validity": "Perpetual",
        "PurposeOfMoU": "Campus Placement, Training",
        "ReviewOfActivities": "Once in year",
        "MoUIncharge": "Mr. Atul Nigvekar"
    },{
        "SrNo": 2,
        "Organization": "EdGate Technologies Private Limited, Texas Instruments Innovation Centre",
        "DateOfSigningMoU": "30/06/2019",
        "Validity": "Perpetual",
        "PurposeOfMoU": "SDP on Robotics & IOT",
        "ReviewOfActivities": "Twice in year",
        "MoUIncharge": "Mr. E. C. Patil"
    },{
        "SrNo": 3,
        "Organization": "Procom Enterprises Ichalkaranji",
        "DateOfSigningMoU": "25/07/2015",
        "Validity": "Perpetual",
        "PurposeOfMoU": "FDP, Guest Lectures & VAP",
        "ReviewOfActivities": "Twice in year",
        "MoUIncharge": "Mr. V. B. Gundvade"
    },{
        "SrNo": 4,
        "Organization": "Nebulas Automation Pvt.ltd ",
        "DateOfSigningMoU": "19/12/2017",
        "Validity": "Perpetual",
        "PurposeOfMoU": "CAD Workshops & Guest lectures",
        "ReviewOfActivities": "Twice in year",
        "MoUIncharge": "Dr. S. R. Chougule"
    },{
        "SrNo": 5,
        "Organization": "SK Electronics, Kolhapur",
        "DateOfSigningMoU": "16/11/2017",
        "Validity": "Perpetual",
        "PurposeOfMoU": "CAD Workshops & Embedded C prog training",
        "ReviewOfActivities": "Twice in year",
        "MoUIncharge": "Mr. A. M. Pol"
    },{
        "SrNo": 6,
        "Organization": "SKADA technology Solutions Pvt. Ltd. Pune.",
        "DateOfSigningMoU": "22/02/2108",
        "Validity": "Perpetual",
        "PurposeOfMoU": "Training on PLC, SKADA & Placement opportinuities",
        "ReviewOfActivities": "Once in year",
        "MoUIncharge": "Mr. E. C. Patil"
    },{
        "SrNo": 7,
        "Organization": "JET Industries, Ichalkaranji",
        "DateOfSigningMoU": "22/12/2018",
        "Validity": "Perpetual",
        "PurposeOfMoU": "Guest lecture",
        "ReviewOfActivities": "Twice in year",
        "MoUIncharge": "Mr. V. B. Gundvade"
    },{
        "SrNo": 8,
        "Organization": "Global Network Solutions",
        "DateOfSigningMoU": "02-02-2018",
        "Validity": "Perpetual",
        "PurposeOfMoU": "Guest lecture",
        "ReviewOfActivities": "Twice in year",
        "MoUIncharge": "Mrs. K. V. Jadhav"
    },{
        "SrNo": 10,
        "Organization": "BSNL",
        "DateOfSigningMoU": " ",
        "Validity": "Perpetual",
        "PurposeOfMoU": "Student Internship",
        "ReviewOfActivities": "Once in year",
        "MoUIncharge": "Dr. M. R. Dixit"
    },{
        "SrNo": 11,
        "Organization": "PARI Automation",
        "DateOfSigningMoU": " ",
        "Validity": "Perpetual",
        "PurposeOfMoU": "Campus placement",
        "ReviewOfActivities": "Once in year",
        "MoUIncharge": "Central"
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
                        Electronics & Telecommunication Newsletter
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Newsletter

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                NEWSLETTER
                            </div>
                            {/* -------------- */}
                            <div className="grid grid-cols-1 divide-y w-fit h-fit gap-y-2">
                           
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2021-22 Sem I</div>
                                        <a href="documents/departments/entc/newsletter/newsletter-2021-22-sem-I.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2021-22 Sem II</div>
                                        <a href="documents/departments/entc/newsletter/newsletter-2021-22-sem-II.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2020-21</div>
                                        <a href="documents/departments/entc/newsletter/etc-final-newsletter-2020-21.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2019-20</div>
                                        <a href="documents/departments/entc/newsletter/etc-final-newsletter-2019-20.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2018-19</div>
                                        <a href="documents/departments/entc/newsletter/etc-final-newsletter-2018-19.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2017-18</div>
                                        <a href="documents/departments/entc/newsletter/etc-final-newsletter-2017-18.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2016-17 Sem I</div>
                                        <a href="documents/departments/entc/newsletter/etc-final-newsletter-2016-17-sem-1.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}
                                <div className="grid grid-cols-1 gap-y-2" >
                                    <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <div className="col-start-2 col-end-12 sm:col-start-3">ETC final Newsletter 2016-17 Sem II</div>
                                        <a href="documents/departments/entc/newsletter/etc-final-newsletter-2016-17-sem-2.pdf" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">    
                                            <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div> 
                                </div>    
                                {/* --- */}

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

export default EntcEngineeringNewsletter
