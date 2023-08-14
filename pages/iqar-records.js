import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import { Tab } from '@headlessui/react'
import SyllabusTabs from "../sections/academics/onlineSyllabus/SyllabusTabs"
import ResultsTabs from "../sections/examCell/results/ResultsTabs"



const IqarRecords = () => {
  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
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
            IQAR Records

          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> IQAR Records 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}
          {/* - */}
         
          <div className="flex flex-col sm:flex-col">
          <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Academic Year 2022-23
              </div>
              {/* -- */}
          
              <div className="flex flex-col items-start ">
              
                        
                        <div className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
                      
                            <div className="grid grid-cols-1 gap-y-2 mt-8">

                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">IQAC Committee</div>
                                  <a href="documents/About/IQAC/IQAC_Committee/IQAC_22-23.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>  
                            
                            </div>                                       
                        </div>
              </div>
            </div>
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Academic Year 2021-22
              </div>
              {/* -- */}
          
              <div className="flex flex-col items-start ">
              
                        
                        <div className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
                      
                            <div className="grid grid-cols-1 gap-y-2 mt-8">

                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">IQAC Committee</div>
                                  <a href="documents/About/IQAC/IQAC_Committee/iqac-committe-2021-22.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>  
                            
                            </div>                                       
                        </div>
              </div>
            </div>
            <div>
              <div className="pt-20 sm:pt-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Academic Year 2020-21
              </div>
              {/* -- */}
          
              <div className="flex flex-col items-start ">
              
                        
                        <div className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
                      
                            <div className="grid grid-cols-1 gap-y-2 mt-8">

                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">IQAC Committee</div>
                                  <a href="documents/About/IQAC/IQAC_Committee/iqac-committe-2020-21.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a> 
                                
                                </div>
                                
                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">IQAC Activities </div>
                                  <a href="documents/About/IQAC/IQAC_Activities/iqac-activities-2020-21.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>    
                            
                            </div>                                       
                        </div>
              </div>
            </div>
            <div>
              <div className="pt-20 sm:pt-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Academic Year 2019-20
              </div>
              {/* -- */}
          
              <div className="flex flex-col items-start ">
              
                        
                        <div className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
                      
                            <div className="grid grid-cols-1 gap-y-2 mt-8">

                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">IQAC Committee</div>
                                  <a href="#" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>  

                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">IQAC Activities</div>
                                  <a href="documents/About/IQAC/IQAC_Activities/iqac-activities-2019-20.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>  

                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">Annual Quality Assurance Report</div>
                                  <a href="documents/About/IQAC/AQAR_Report/aqar-report-2019-20.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>  
                            
                            </div>                                       
                        </div>
              </div>
            </div>
            <div>
              <div className="pt-20 sm:pt-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Academic Year 2018-19
              </div>
              {/* -- */}
          
              <div className="flex flex-col items-start ">
              
                        
                        <div className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
                      
                            <div className="grid grid-cols-1 gap-y-2 mt-8">

                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">IQAC Committee</div>
                                  <a href="documents/About/IQAC/IQAC_Committee/iqac-committe-2018-19.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>
                                
                                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <div className="col-start-2 col-end-12 sm:col-start-3">Annual Quality Assurance Report </div>
                                  <a href="documents/About/IQAC/AQAR_Report/aqar-report-2018-19.pdf" className="col-start-13 " target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>  
                                  </a>
                                </div>    
                            
                            </div>                                       
                        </div>
              </div>
            </div>
          </div>
        
        </section>
        
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default IqarRecords
