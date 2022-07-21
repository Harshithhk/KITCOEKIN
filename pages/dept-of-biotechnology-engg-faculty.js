import DefaultLayout from "../components/DefaultLayout"
import BiotechnologyEngineering from "../components/Navbar/departments/biotechnologyEngineering"
import QuickLinks from "../components/QuickLinks"
import Career from "../sections/departments/biotech/career"
import QuickLinksCard from "../sections/departments/biotech/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const BiotechnologyEngineeringFaculty = () => {
  let Activities = [{
    "SrNo": 1,
    "Name": "Mr. Giridhar Revankar",
    "Designation": "BE (Biotech), MS (Env.) EHS Officer in Australia",
    "Topic": "Career opportunities in Env. Biotech. In Australia",
    "Date": "21-08-2019"
  },{
    "SrNo": 2,
    "Name": "Mr. Swanand Gulwani",
    "Designation": "BE (Biotech)Job at Wockhardt Aurangabad and STGenetics Pune",
    "Topic": "Insulin ( Biopharma drug) Purification",
    "Date": "04-09-2019"
  },{
    "SrNo": 3,
    "Name": "Mr. Samarthgirish Pawaskar",
    "Designation": "BE (Biotech) , LLB (IPR) IITKh Patent agent and consultant at BASF Mumbai",
    "Topic": "IPR and Opportunities in IPR field",
    "Date": "06-09-2019"
  },{
    "SrNo": 4,
    "Name": "Ms. Gauri Wali",
    "Designation": "Recent Alumnus",
    "Topic": "Higher Education in Germany",
    "Date": "17-07-2019"
  },{
    "SrNo": 5,
    "Name": "Nisha Barge",
    "Designation": "Recent Alumnus",
    "Topic": "GATE Exam preparations",
    "Date": "10-07-2019"
  },{
    "SrNo": 6,
    "Name": "Revati More",
    "Designation": "Recent Alumnus",
    "Topic": "GATE Exam preparations",
    "Date": "10-07-2019"
  },{
    "SrNo": 7,
    "Name": "Saurabh Desai",
    "Designation": "Recent Alumnus",
    "Topic": "GATE Exam preparations",
    "Date": "10-07-2019"
  },{
    "SrNo": 8,
    "Name": "Ms. Viraj Sangoi",
    "Designation": "BE (Biotech), M Tech (Biotech)",
    "Topic": "Career opportunities in Pharmacovigilence and Clinical Data Mgmt.",
    "Date": "11-01-2020"
  },{
    "SrNo": 9,
    "Name": "Ms.Vaishnavi Chavan",
    "Designation": "BE (Biotech), pursuing MS in Regulatory Affairs In Northeastern University USA",
    "Topic": "Career in Regulatory Domain",
    "Date": "11-01-2020"
  },{
    "SrNo": 10,
    "Name": "Dr. Kushal Satpute",
    "Designation": "Principal Scientist, BIOCON",
    "Topic": "Advances in Enzyme Technology",
    "Date": "08-02-2020"
  },{
    "SrNo": 11,
    "Name": "Shashikant Kamble",
    "Designation": "BE (Biotech)/ Entreprenuership in Agri. Biotechnology",
    "Topic": "Entrepreneurship in Biofertilizer & Biopesticides Business",
    "Date": "10-04-2020"
  },{
    "SrNo": 12,
    "Name": "Anikhindi Vishvesh",
    "Designation": "BE (Biotech) ME (Biotechnology) from BITS Pilani Goa campus",
    "Topic": "Clone Development Process",
    "Date": "10-06-2020"
  },{
    "SrNo": 13,
    "Name": "Sneha Deshpande",
    "Designation": "BE (Biotech) Mtech (Food Biotech) from ICT Mumbai",
    "Topic": "Importance of Higher Education : How to Approach GATE",
    "Date": "10-10-2020"
  },{
    "SrNo": 14,
    "Name": "Dr. Rahul Patil",
    "Designation": "BE (Biotech), CEO and Director My Lab Discovery Solutions Pvt. Ltd. Pune",
    "Topic": "Entrepreneurial Journey of Establishing Diagnostics Industry",
    "Date": "23-08-2021"
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
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Staff 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">
           


        <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">
        
        <section className="col-start-1   col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
              <div className="mt-6 sm:mt-0 sm:ml-4 mb-6 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                TEACHING STAFF (P.G)
              </div>
              {/* -------------- */}
              <div className="flex justify-center ml-14 sm:ml-0 mt-2 sm:mt-24 ">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg  shadow-lg bg-white m-4 sm:m-0">
                    <div className="flex flex-row sm:flex-col gap-x-2">
                            <div  className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                              <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                                <img src="mamta-kalas_preview_rev_1.png " className="rounded-lg " alt="mamtakalas.png" />
                              </div>
                            </div>
                      <div className="ml-6 sm:ml-0 items-start justify-center flex flex-col">
                        
                        <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">Mr. Rutuparna P. Karkare</p>
                        <p className="font-semibold text-gray-500 mb-6 ">Associate Professor</p>
                        <p className="text-gray-500 sm:mb-6 font-light w-60 sm:w-auto">
                        B.E. (Chemical Engineering), ME (Chemical Engineering),Ph.D. (Chemical Engineering)  
                        </p>
                      </div>
                      <div className="h-auto w-[2px] bg-primary"></div>
                      <div className="min-w-[270px]">  
                        <p className="font-semibold text-[#24346D] mb-0">EXPERIENCE: 20</p> 
                        <br/>
                        <p className="font-semibold  text-primary mb-0">Email : sanandammonica@gmail.com</p> 
                        <p className="font-semibold text-primary mb-0">Mobile : 9850271679 </p>
                        <br/>
                        <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">View Profile</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------- */}
              <div className="flex justify-center ml-14 sm:ml-0 -mt-5 sm:mt-24 ">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg  shadow-lg bg-white m-4 sm:m-0">
                    <div className="flex flex-row sm:flex-col gap-x-2">
                            <div  className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                              <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                                <img src="mamta-kalas_preview_rev_1.png " className="rounded-lg " alt="mamtakalas.png" />
                              </div>
                            </div>
                      <div className="ml-6 sm:ml-0 items-start justify-center flex flex-col">
                        
                        <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">Mr. Ratnadeep Shinde</p>
                        <p className="font-semibold text-gray-500 mb-6 ">Peon</p>
                        <p className="text-gray-500 sm:mb-6 font-light w-60 sm:w-auto">
                        12 th 
                        </p>
                      </div>
                      <div className="h-auto w-[2px] bg-primary"></div>
                      <div className="min-w-[270px]">  
                        <p className="font-semibold text-[#24346D] mb-0">EXPERIENCE: -----------------</p> 
                        <br/>
                        <p className="font-semibold  text-primary mb-0">Email : ------------------</p> 
                        <p className="font-semibold text-primary mb-0">Mobile : 9850271679 </p>
                        <br/>
                        <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">View Profile</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------- */}
              <div className="flex justify-center ml-14 sm:ml-0 -mt-5 sm:mt-24 ">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg  shadow-lg bg-white m-4 sm:m-0">
                    <div className="flex flex-row sm:flex-col gap-x-2">
                            <div  className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                              <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                                <img src="mamta-kalas_preview_rev_1.png " className="rounded-lg " alt="mamtakalas.png" />
                              </div>
                            </div>
                      <div className="ml-6 sm:ml-0 items-start justify-center flex flex-col">
                        
                        <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">Mr. Rutuparna P. Karkare</p>
                        <p className="font-semibold text-gray-500 mb-6 ">Head and Associate Professor</p>
                        <p className="text-gray-500 sm:mb-6 font-light w-60 sm:w-auto">
                        B.E. (Chemical Engineering), ME (Chemical Engineering),Ph.D. (Chemical Engineering)  
                        </p>
                      </div>
                      <div className="h-auto w-[2px] bg-primary"></div>
                      <div className="min-w-[270px]">  
                        <p className="font-semibold text-[#24346D] mb-0">EXPERIENCE: 20</p> 
                        <br/>
                        <p className="font-semibold  text-primary mb-0">Email : sanandammonica@gmail.com</p> 
                        <p className="font-semibold text-primary mb-0">Mobile : 9850271679 </p>
                        <br/>
                        <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">View Profile</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:ml-4  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                TEACHING STAFF (U.G)
              </div>
             {/* -------------- */}
              <div className="flex justify-center ml-14 sm:ml-0 mt-2 sm:mt-24 ">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg  shadow-lg bg-white m-4 sm:m-0">
                    <div className="flex flex-row sm:flex-col gap-x-2">
                            <div  className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                              <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                                <img src="mamta-kalas_preview_rev_1.png " className="rounded-lg " alt="mamtakalas.png" />
                              </div>
                            </div>
                      <div className="ml-6 sm:ml-0 items-start justify-center flex flex-col">
                        
                        <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">Mr. Rutuparna P. Karkare</p>
                        <p className="font-semibold text-gray-500 mb-6 ">Associate Professor</p>
                        <p className="text-gray-500 sm:mb-6 font-light w-60 sm:w-auto">
                        B.E. (Chemical Engineering), ME (Chemical Engineering),Ph.D. (Chemical Engineering)  
                        </p>
                      </div>
                      <div className="h-auto w-[2px] bg-primary"></div>
                      <div className="min-w-[270px]">  
                        <p className="font-semibold text-[#24346D] mb-0">EXPERIENCE: 20</p> 
                        <br/>
                        <p className="font-semibold  text-primary mb-0">Email : sanandammonica@gmail.com</p> 
                        <p className="font-semibold text-primary mb-0">Mobile : 9850271679 </p>
                        <br/>
                        <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">View Profile</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/*---------------- */}
            <div className="flex justify-center ml-14 sm:ml-0 -mt-5 sm:mt-24 ">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg  shadow-lg bg-white m-4 sm:m-0">
                    <div className="flex flex-row sm:flex-col gap-x-2">
                            <div  className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                              <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                                <img src="mamta-kalas_preview_rev_1.png " className="rounded-lg " alt="mamtakalas.png" />
                              </div>
                            </div>
                      <div className="ml-6 sm:ml-0 items-start justify-center flex flex-col">
                        
                        <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">Mr. Rutuparna P. Karkare</p>
                        <p className="font-semibold text-gray-500 mb-6 ">Associate Professor</p>
                        <p className="text-gray-500 sm:mb-6 font-light w-60 sm:w-auto">
                        B.E. (Chemical Engineering), ME (Chemical Engineering),Ph.D. (Chemical Engineering)  
                        </p>
                      </div>
                      <div className="h-auto w-[2px] bg-primary"></div>
                      <div className="min-w-[270px]">  
                        <p className="font-semibold text-[#24346D] mb-0">EXPERIENCE: 20</p> 
                        <br/>
                        <p className="font-semibold  text-primary mb-0">Email : sanandammonica@gmail.com</p> 
                        <p className="font-semibold text-primary mb-0">Mobile : 9850271679 </p>
                        <br/>
                        <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">View Profile</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:ml-4  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                NON TEACHING STAFF

              </div>
             {/* -------------- */}
              <div className="flex justify-center ml-14 sm:ml-0 mt-2 sm:mt-24 ">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg  shadow-lg bg-white m-4 sm:m-0">
                    <div className="flex flex-row sm:flex-col gap-x-2">
                            <div  className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                              <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                                <img src="mamta-kalas_preview_rev_1.png " className="rounded-lg " alt="mamtakalas.png" />
                              </div>
                            </div>
                      <div className="ml-6 sm:ml-0 items-start justify-center flex flex-col">
                        
                        <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">Mr. Rutuparna P. Karkare</p>
                        <p className="font-semibold text-gray-500 mb-6 ">Associate Professor</p>
                        <p className="text-gray-500 sm:mb-6 font-light w-60 sm:w-auto">
                        B.E. (Chemical Engineering), ME (Chemical Engineering),Ph.D. (Chemical Engineering)  
                        </p>
                      </div>
                      <div className="h-auto w-[2px] bg-primary"></div>
                      <div className="min-w-[270px]">  
                        <p className="font-semibold text-[#24346D] mb-0">EXPERIENCE: 20</p> 
                        <br/>
                        <p className="font-semibold  text-primary mb-0">Email : sanandammonica@gmail.com</p> 
                        <p className="font-semibold text-primary mb-0">Mobile : 9850271679 </p>
                        <br/>
                        <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">View Profile</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/*---------------- */}
            <div className="flex justify-center ml-14 sm:ml-0 -mt-5 sm:mt-24 ">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg  shadow-lg bg-white m-4 sm:m-0">
                    <div className="flex flex-row sm:flex-col gap-x-2">
                            <div  className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                              <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                                <img src="mamta-kalas_preview_rev_1.png " className="rounded-lg " alt="mamtakalas.png" />
                              </div>
                            </div>
                      <div className="ml-6 sm:ml-0 items-start justify-center flex flex-col">
                        
                        <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">Mr. Rutuparna P. Karkare</p>
                        <p className="font-semibold text-gray-500 mb-6 ">Associate Professor</p>
                        <p className="text-gray-500 sm:mb-6 font-light w-60 sm:w-auto">
                        B.E. (Chemical Engineering), ME (Chemical Engineering),Ph.D. (Chemical Engineering)  
                        </p>
                      </div>
                      <div className="h-auto w-[2px] bg-primary"></div>
                      <div className="min-w-[270px]">  
                        <p className="font-semibold text-[#24346D] mb-0">EXPERIENCE: 20</p> 
                        <br/>
                        <p className="font-semibold  text-primary mb-0">Email : sanandammonica@gmail.com</p> 
                        <p className="font-semibold text-primary mb-0">Mobile : 9850271679 </p>
                        <br/>
                        <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">View Profile</button>

                      </div>
                    </div>
                  </div>
                </div>
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

export default BiotechnologyEngineeringFaculty
