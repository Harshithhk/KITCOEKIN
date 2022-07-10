import React from "react"
import { Tab } from '@headlessui/react'

const SyllabusTabs = () => {
  return( <div className="flex flex-col sm:flex-col">
    <div>
      <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
        Provisional Admission 2022-2023
      </div>
      {/* -- */}
  
  <div className="flex flex-col items-start ">
  <Tab.Group>
 
             <Tab.List className="  grid grid-cols-2  text-slate-500  w-full h-fit p-2 mt-6 -mb-4   text-left rounded-lg sm:w-full justify-between  min-h-[55px] ">
             
             <div className="grid grid-rows-2 divide-y  ">
                <div >
                <Tab className={({ selected }) =>
                  selected ? 'underline underline-offset-4 decoration-[3px] focus:outline-none font-semibold text-[#24346D] ' 
                  : ' focus:outline-none '
                }>
                  Bachelor of Technology
                </Tab>                     
                </div>
                <div></div>
             </div>
             
             
             <div className="grid  grid-rows-2 divide-y">
                <div >
                <Tab className={({ selected }) =>
                  selected ? 'underline underline-offset-4 decoration-[3px] focus:outline-none font-semibold text-[#24346D] ' 
                  : ' focus:outline-none '
                }>
                  Master of Technology
                </Tab>
                </div>
                <div></div>
             </div>
             
             </Tab.List>
      
   
            
             <Tab.Panels className=" grid grid-cols-1 gap-y-2 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">

              <Tab.Panel className="flex flex-col items-center">
            
                    
                    <div className=" shadow-lg items-center grid grid-cols-2  w-[1250px] h-fit p-2 mt-6 sm:mt-0 bg-[#F8F7FC] font-semibold text-center rounded-lg sm:w-full justify-between  min-h-[55px] ">  
                          <div className="">Branch</div>
                          <div className="">Year</div>
                    </div>         
                   
                    <div className="shadow-lg  grid grid-cols-2 divide-x  w-[1250px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                     
                     <div className=" flex flex-col items-center justify-center" >
                      <div> Biotechnology Engineering.</div>
                      <div className=" hover:text-primary hover:cursor-pointer text-slate-500">
                      Download Structure Here 
                      </div>
                     </div>
                    
                     <div className=" bg-white rounded-lg  min-h-[50px] flex flex-row sm:flex-col items-center justify-around ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                        </svg>
                        <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>  
                   
                    </div>
                    <div className="shadow-lg  grid grid-cols-2 divide-x  w-[1250px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                     
                     <div className=" flex flex-col" >
                      <div> Biotechnology Engineering.</div>
                      <div>
                        download
                      </div>
                     </div>
                    
                     <div className=" bg-white rounded-lg  min-h-[50px] flex flex-row sm:flex-col items-center justify-around ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                        </svg>
                        <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>  
                   
                    </div>
                <div className="shadow-lg  grid grid-cols-2 divide-x  w-[1250px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                     <div className=" flex flex-col" >
                      <div> Biotechnology Engineering.</div>
                      <div>
                        download
                      </div>
                     </div>
                     <div className="  grid grid-cols-3 divide-x">
                      <div className="flex flex-row gap-1 sm:flex-col items-center justify-around sm:justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div>S.Y. B.Tech</div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 sm:flex-col items-center justify-around sm:justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div>T.Y. B. Tech</div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 sm:flex-col items-center justify-around sm:justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div>Final Year B. Tech</div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      </div>
                     </div>
                </div>
                
                <div className="shadow-lg  grid grid-cols-2 divide-x  w-[1250px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                     <div className=" flex flex-col" >
                      <div> Biotechnology Engineering.</div>
                      <div>
                        download
                      </div>
                     </div>
                     <div className="  grid grid-cols-3 divide-x">
                      <div className="flex flex-row gap-1 sm:flex-col items-center justify-around sm:justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div>S.Y. B.Tech</div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 sm:flex-col items-center justify-around sm:justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div>T.Y. B. Tech</div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 sm:flex-col items-center justify-around sm:justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div>Final Year B. Tech</div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      </div>
                     </div>
                </div>
               {/* row end */}
                </Tab.Panel>                      
                <Tab.Panel className="flex flex-col items-start">
            
                    
            <div className=" shadow-lg items-center grid grid-cols-1  w-full h-fit p-2 sm:text-center mt-6 sm:mt-0 bg-[#F8F7FC] font-semibold  rounded-lg sm:w-full justify-start  min-h-[55px] ">  
                  <div className="">Branch</div>
                  
            </div>         
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] mt-6 grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div> 
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] mt-2 grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div> 
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] mt-2 grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div> 
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] mt-2 grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div> 
        
        
       {/* row end */}
        </Tab.Panel> 
                {/* <Tab.Panel className="grid grid-cols-1 gap-y-2" >
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>  
              </Tab.Panel> */}
             </Tab.Panels>
             {/* row end */}
  
      </Tab.Group>
  </div>
 
      {/*  */}
    </div>
  </div>);
}

export default SyllabusTabs
