import React, { useDebugValue } from "react"
import { Tab } from '@headlessui/react'

const SyllabusTabs = () => {

  let BTechSyllabus = [
    {
      "Branch":"Biotechnology Engineering",
      "SubLink":[{"Title":"(Revised-Download Structure Here)","Link":""}],
      "SecondYear":{"Title":"Revised S.Y. B.Tech 22-23","Link":" "},
      "ThirdYear":{"Title":"T.Y. B. Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B. Tech","Link":" "},
    },
    {
      "Branch":"Civil Engg.",
      "SubLink":[{"Title":"(Download Revised Structure Here:2022-23)","Link":""}],
      "SecondYear":{"Title":"Revised S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B. Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B. Tech","Link":" "},
    },
    {
      "Branch":"Civil & Environmental Engg.",
      "SubLink":[{"Title":"(Download Revised Structure Here:2022-23)","Link":""},{"Title":"Honors Syllabus","Link":""}],
      "SecondYear":{"Title":"Revised S.Y. B.Tech[22-23]","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "ThirdYear1":{"Title":"Revised T.Y. B. Tech[22-23]","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Computer Science & Engg.",
      "SubLink":[{"Title":"(Download Revised-Structure 2022-2023)","Link":""},{"Title":"(B.Tech Honors Structure)","Link":""},{"Title":"( Curriculum:Minor Degree Course in Advanced Web Development)","Link":""}],
      "SecondYear":{"Title":"Revised S.Y. B.Tech","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Computer Science & Engg. (AI & ML)",
      "SubLink":[{"Title":"(Download Structure Here)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Computer Science & Engg. (Data Science)",
      "SubLink":[{"Title":"(Download Structure Here)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":" Computer Science & Business Systems",
      "SubLink":[{"Title":"(Download Structure Here)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Electrical Engg.",
      "SubLink":[{"Title":"(Revised-Download Structure Here-2022)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Electronics Engg.",
      "SubLink":[{"Title":"(Download Structure Here)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"E & TC Engg.",
      "SubLink":[{"Title":"(Download Structure Here -2022-23)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech-2022-23","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Mechanical Engg",
      "SubLink":[{"Title":"(Download Structure Here -2022-23)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech-2022-23","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Information Technology",
      "SubLink":[{"Title":"(Download Structure Here)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
    {
      "Branch":"Production Engg.",
      "SubLink":[{"Title":"(Download Structure Here)","Link":""}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":" "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":" "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":" "},
    },
  ]
  
  let MTechSyllabus = [
    {"Title":"M. Tech. Environmental Engineering Syllabus","Link":""},
    {"Title":"M. Tech. Environmental Engineering Structure","Link":""},
    {"Title":"M. Tech Civil and Structural Engineering Structure ","Link":""},
    {"Title":"M. Tech Civil and Structural Engineering Syllabus","Link":""},
    {"Title":"M. Tech. Computer Science & Engineering (Data Science) Structure and Contents  w.e.f 2020-2021","Link":""},
    {"Title":"M.Tech Computer Science & Engineering Structure ","Link":""},
    {"Title":"M. Tech. Computer Science & Engineering Syllabus","Link":""},
    {"Title":"M.Tech ETC Structure & Syllabus","Link":""},
    {"Title":"M. Tech Biochemical Engineering & Biotechnology-Structure","Link":""},
    {"Title":"M. Tech Biochemical Engineering & Biotechnology-Syllabus","Link":""},
    {"Title":"M.Tech Mechanical Engineering Design-AY:2021-22","Link":""},
  ]
  return( <div className="flex flex-col sm:flex-col">
    <div>
      <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
        Syllabus 2023 Scheme
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
                   
                    <div className="shadow-lg  grid 2xl:grid-cols-2 sm:grid-cols-1  divide-x sm:divide-y  w-[1250px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                     
                     <div className=" flex flex-col items-center justify-center" >
                      <div> 	
                      F.Y. B.Tech [Circuit Branches] (CSE /AIML /DS /ETC /ELE).</div>
                      <div className=" hover:text-primary hover:cursor-pointer text-slate-500">
                      Download Structure Here 
                      </div>
                     </div>
                    
                     <div className=" bg-white rounded-lg  min-h-[50px] flex flex-row  items-center justify-around ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        <div className="col-start-2 col-end-12 sm:col-start-3">F.Y. B.Tech [Circuit Branches] Syllabus</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>  
                   
                    </div>
                    
                    <div className="shadow-lg  grid 2xl:grid-cols-2 sm:grid-cols-1  divide-x sm:divide-y  w-[1250px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                     
                     <div className=" flex flex-col" >
                      <div> F.Y. B.Tech [Core Branches] (Civil /Mech /Civil_Env /BioTech)</div>
                      <div className=" hover:text-primary hover:cursor-pointer text-slate-500">
                      Download Structure Here 
                      </div>
                     </div>
                    
                     <div className=" bg-white rounded-lg  min-h-[50px] flex flex-row  items-center justify-around ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        <div className="col-start-2 col-end-12 sm:col-start-3">F.Y. B.Tech [Core Branches] Syllabus</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>  
                   
                    </div>
               {/* here iterate */}
               {
                BTechSyllabus.map((item,index)=>{
                  return(
                    <div className="shadow-lg  grid 2xl:grid-cols-2 sm:grid-cols-1  divide-x sm:divide-x-0 sm:divide-y  w-[1250px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                        <div className=" flex flex-col" >
                          <div> {item.Branch}</div>
                        {item.SubLink.map((item2,index2)=>{
                          return(
                            <div className=" hover:text-primary hover:cursor-pointer text-slate-500">
                              {item2.Title}
                            </div>
                          )
                        })}
                    
                        </div>
                        <div className="  grid 2xl:grid-cols-3 sm:grid-cols-1 divide-x sm:divide-x-0 sm:divide-y">
                          <div className="flex flex-row gap-1  items-center justify-between">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>{item.SecondYear["Title"]}</div>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center" >

                          <div className="flex flex-row gap-1  items-center justify-between">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>{item.ThirdYear["Title"]}</div>
                            
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </div>
                        </div>
                        {item.ThirdYear1 != undefined || item.ThirdYear1 != null ? 
                        <div className="flex flex-row gap-1  items-center justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>{item.ThirdYear1["Title"]}</div>
                        
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                    </div>
                        :null }
                          </div>
                         
                          <div className="flex flex-row gap-1  items-center justify-between">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>{item.FinalYear["Title"]}</div>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                    </div>
                  )
                })
               }
                    
                
               {/* row end */}
                </Tab.Panel>                      
                <Tab.Panel className="flex flex-col items-start">
            
                    
            <div className=" shadow-lg items-center grid grid-cols-1  w-full h-fit p-2 sm:text-center mt-6 sm:mt-0 bg-[#F8F7FC] font-semibold  rounded-lg sm:w-full justify-start  min-h-[55px] ">  
                  <div className="">Branch</div>
                  
            </div>   
            {
              MTechSyllabus.map((item,index)=>{
                  return(<div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] mt-2 max-w-[520px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">{item.Title}</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div> )
              })
            }      
                
              
        
        
       {/* row end */}
        </Tab.Panel> 
                {/* <Tab.Panel className="grid grid-cols-1 gap-y-2" >
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
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
