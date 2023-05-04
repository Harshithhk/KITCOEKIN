import { Tab } from '@headlessui/react'

const Admission2122 = () => {

  let Admission2122 = [
    {
      "DocName":"List of documents required for admission in Academic Year 2021-2022",
      "DocLink":"",
      "Year":"First-Year-M.Tech"
    },
    {
      "DocName":"Cut off list for previous year",
      "DocLink":"",
      "Year":"First-Year-M.Tech"
    },
    {
      "DocName":"F. Y M. Tech Fee Structure for Academic Year 2020-2021",
      "DocLink":"",
      "Year":"First-Year-M.Tech"
    }
  ]

    return( <div className="flex flex-col sm:flex-col">
    <div>
      <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
        Admission 2021-2022
      </div>
      {/* -- */}
  
      <div className="flex flex-col items-start sm:block 3xl:hidden 2xl:hidden">
          <Tab.Group>
 
             <Tab.List className="  grid grid-cols-2  text-slate-500  w-full h-fit p-2 mt-6 -mb-4   text-left rounded-lg sm:w-full justify-between sm:p-2 min-h-[55px] ">
             
             <div className="grid grid-rows-2 divide-y ">
                <div >
                <Tab className={({ selected }) =>
                  selected ? 'underline underline-offset-4 decoration-[3px] focus:outline-none font-semibold text-[#24346D] ' 
                  : ' focus:outline-none '
                }>
                  First Year M. Tech
                </Tab>                     
                </div>
                <div></div>
             </div>
             
             
             {/* <div className="grid  grid-rows-2 divide-y">
                <div >
                <Tab className={({ selected }) =>
                  selected ? 'underline underline-offset-4 decoration-[3px] focus:outline-none font-semibold text-[#24346D] ' 
                  : ' focus:outline-none '
                }>
                  Direct Second Year
                </Tab>
                </div>
                <div></div>
             </div> */}
             
             </Tab.List>
      
   
            
             <Tab.Panels className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
          
             <Tab.Panel className="grid grid-cols-1 gap-y-2">
              {Admission2122.map((item,index)=>{
                  if(item.Year === "First-Year-M.Tech"){
                    return(<>
                      <div key={index} className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        <div className="col-start-2 col-end-12 sm:col-start-3">{item.DocName}</div>
                      <a href={item.DocLink} className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                      </div> 
                    </>)
                  }else{
                    return(<></>)
                  }
                })}

              </Tab.Panel>                       
        
              {/* <Tab.Panel className="grid grid-cols-1 gap-y-2" >
              {Admission2122.map((item,index)=>{
                  if(item.Year === "Direct-Second-Year"){
                    return(<>
                      <div key={index} className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        <div className="col-start-2 col-end-12 sm:col-start-3">{item.DocName}</div>
                      <a href={item.DocLink} className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                      </div> 
                    </>)
                  }else{
                    return(<></>)
                  }
                })}
              </Tab.Panel>                        */}
      
             </Tab.Panels>
             {/* row end */}
  
          </Tab.Group>
      </div>
      <div className="flex flex-col items-start sm:hidden 2xl:flex-col">
          <Tab.Group>
    
                <Tab.List className="  grid grid-cols-2  text-slate-500  w-full h-fit p-2 mt-6 -mb-4   text-left rounded-lg sm:w-full justify-between sm:p-2 min-h-[55px] ">
                
                <div className="grid grid-rows-2 divide-y ">
                    <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>
                    
                    First Year M. Tech
                                    
                    </div>
                    <div></div>
                </div>
                
                
                {/* <div className="grid  grid-rows-2 divide-y">
                <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>

                      Direct Second Year

                    </div>
                    <div></div>
                </div> */}
                
                </Tab.List>
          
      
                
                <Tab.Panels className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
                <div className="grid grid-cols-1 gap-y-2">
                
                {Admission2122.map((item,index)=>{
                      if(item.Year === "First-Year-M.Tech"){
                        return(<>
                          <div key={index} className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            <div className="col-start-2 col-end-12 sm:col-start-3">{item.DocName}</div>
                          <a href={item.DocLink} className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </a>
                          </div> 
                        </>)
                      }else{
                        return(<></>)
                      }
                    })} 
                                  
                </div>
                {/* <div className="grid grid-cols-1 gap-y-2">
              
                {Admission2122.map((item,index)=>{
                      if(item.Year === "Direct-Second-Year"){
                        return(<>
                          <div key={index} className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            <div className="col-start-2 col-end-12 sm:col-start-3">{item.DocName}</div>
                          <a href={item.DocLink} className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer " target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </a>
                          </div> 
                        </>)
                      }else{
                        return(<></>)
                      }
                    })}
                                        
                </div> */}
                </Tab.Panels>
                {/* row end */}
      
          </Tab.Group>
      </div>

      {/*  */}
    </div>
  </div>);
}

export default Admission2122