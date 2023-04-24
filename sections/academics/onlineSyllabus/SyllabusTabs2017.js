import React, { useDebugValue } from "react"
import { Tab } from '@headlessui/react'

const SyllabusTabs = () => {

  let BTechSyllabus = [
    {
      "Branch":"Biotechnology Engineering",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/2/Autonomy_Biotech_UG_full_structure.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/2/biotech-sy-btech-syllabus.pdf "},
      "ThirdYear":{"Title":"T.Y. B. Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/2/biotech-ty-btech-syllabus.pdf "},
      "FinalYear":{"Title":"Final Year B. Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/2/BTech Final Year Autonomy Syllabus.pdf "},
    },
    {
      "Branch":"Civil Engg.",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/3/NEW B-Tech Civil Teaching and Evaluation Scheme(1).pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/3/ "},
      "ThirdYear":{"Title":"T.Y. B. Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/3/T-Y-B-Tech Civil Engg.pdf "},
      "FinalYear":{"Title":"Final Year B. Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/3/Final Year B-Tech Civil Engg.pdf "},
    },
    {
      "Branch":"Civil & Environmental Engg.",
      "SubLink":[{"Title":"(Download Revised Structure Here:2022-23)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/4/Structure_B-Tech Civil and Environmental.pdf"},{"Title":"Honors Syllabus","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/4/Hons- Syllabus_18 Credits_2021-22.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/4/Syllabus_S-Y-B-Tech Civil and Environmental.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/4/T-Y B-Tech Environmental Engineering Pre-RevisedSyllabus.pdf "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/4/Syllabus_Final Yeart B-Tech Env- Engg-.pdf "},
    },
    {
      "Branch":"Computer Science & Engg.",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/5/BTech_Structure_FInal_9_may_2019_with_corrections_21_1_2021.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/5/sy_cse_syllabus_update_apr_2021.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/5/cse-t-y-btech-syllabus.pdf "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/5/Final Year B- Tech CSE_AY_2021 (1).pdf "},
    },
    {
      "Branch":"Electrical Engg.",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/8/STRUCTURE  ELECTRICAL ENGG (OLD)14_Oct.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/8/electrical-s-y-btech-syllabus.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/8/TYBTech SEM V and VI.pdf "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/8/TYBTech SEM V and VI.pdf "},
    },
    {
      "Branch":"Electronics Engg.",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/9/electronics-btech-structure.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/9/electronics-s-y-btech-syllabus.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/9/electronics-t-y-btech-syllabus.pdf "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/9/ "},
    },
    {
      "Branch":"E & TC Engg.",
      "SubLink":[{"Title":"(Download Structure Here-Old)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/10/E and TC Structure Curriculum.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/10/S-Y- ETC.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/10/T- Y- ETC.pdf "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/10/E and TC Final B- Tech Syllabus.pdf "},
    },
    {
      "Branch":"Mechanical Engg",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/11/BTECH MECHANICAL STRUCTURE.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/11/mechanical-s-y-btech-syllabus.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/11/mechanical-ty-btech-syllabus.pdf "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/11/FINAL YEAR BTECH MECHANICAL SYLLABUS.pdf "},
    },
    {
      "Branch":"Information Technology",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/12/it-btech-syllabus.pdf"}],
      "SecondYear":{"Title":"S.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/12/it-s-y-btech-syllabus.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/12/it-t-y-btech-syllabus.pdf"},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/12/Final _B-Tech IT Syllabus 20-21_20_July_2020.pdf "},
    },
    {
      "Branch":"Production Engg.",
      "SubLink":[{"Title":"(Download Structure Here)","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/13/B-Tech Production Engineering Structure.pdf1"}],
      "SecondYear":{"Title":"S.Y. B.Tech.","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/13/S-Y-B-Tech Production Engineering Syllabus.pdf "},
      "ThirdYear":{"Title":"T.Y. B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/13/T-Y-B-Tech Production Engineering Syllabus.pdf "},
      "FinalYear":{"Title":"Final Year B.Tech","Link":"documents/academics/onlineSyllabus/syllabus_2017_old/BTech/13/Final Year B-Tech Production Engineering Syllabus.pdf "},
    },
  ]
  
  let MTechSyllabus = [
    {"Title":"M. Tech. Environmental Engineering Syllabus","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/1/env-engg-mtech-syllabus.pdf"},
    {"Title":"M. Tech. Environmental Engineering Structure","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/1/ENV-ENGG_PG Structure.pdf"},
    {"Title":"M. Tech Civil and Structural Engineering Structure ","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/2/M-Tech Civil and Structural Engineering (Structure).pdf"},
    {"Title":"M. Tech Civil and Structural Engineering Syllabus","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/2/M-Tech Civil and Structural Engineering (Syllabus).pdf"},
    {"Title":"M. Tech. Computer Science & Engineering (Data Science) Structure and Contents  w.e.f 2020-2021","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/3/M-Tech CSE Data Science_PG New Update File.pdf"},
    {"Title":"M. Tech. Computer Science & Engineering Structure ","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/3/cse-mtech-syllabus.pdf"},
    {"Title":"M. Tech. Computer Science & Engineering Syllabus","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/3/MTech CSE_Structure_19_20.pdf"},
    {"Title":"M. Tech ETC Structure & Syllabus","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/4/MTech E and TC Structure  and Syllabus 2022-23.pdf"},
    {"Title":"M. Tech Biochemical Engineering & Biotechnology-Structure","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/5/M- Tech Biochemical Engineering - Biotechnology-STRUCTURE_Jan_2022.pdf"},
    {"Title":"M. Tech Biochemical Engineering & Biotechnology-Syllabus","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/5/M- Tech Biochemical Engineering_Biotechnology-SYLLABUS_Jan_2022.pdf"},
    {"Title":"M. Tech Mechanical Engineering Design-AY:2021-22","Link":"documents/academics/onlineSyllabus/syllabus_22_23/MTech/6/M Tech Mech Engg Design Struct Syllabus AY 21-22.pdf"},
  ]
  return( <div className="flex flex-col sm:flex-col">
    <div>
      <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
        Syllabus 2017 Scheme
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
                   
                   
                    
                    <div className="shadow-lg  grid 2xl:grid-cols-2 sm:grid-cols-1  divide-x sm:divide-y  w-[1250px] h-fit p-2 mt-2 bg-white font-semibold text-center rounded-lg sm:w-full   min-h-[55px] ">  
                     
                     <div className=" flex flex-col" >
                      <div> F.Y. B.Tech</div>
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
                            <a href={item2.Link} className=" hover:text-primary hover:cursor-pointer text-slate-500">
                              {item2.Title}
                            </a>
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
                            <a href={item.SecondYear["Link"]}>
                              <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
                          </div>
                          <div className="flex flex-col justify-center" >

                          <div className="flex flex-row gap-1  items-center justify-between">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>{item.ThirdYear["Title"]}</div>
                            
                            <a href={item.ThirdYear["Link"]}>
                              <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
                        </div>
                        {item.ThirdYear1 != undefined || item.ThirdYear1 != null ? 
                        <div className="flex flex-row gap-1  items-center justify-between">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>{item.ThirdYear1["Title"]}</div>
                        
                        <a href={item.ThirdYear1["Link"]}>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
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
                            <a href={item.FinalYear["Link"]}>
                              <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
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
                  return(<div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] mt-2 max-w-[500px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">{item.Title}</div>
                  <a href={item.Link}>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  </a>
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
