import { Tab } from '@headlessui/react'

const ProvisionalAdmission = () => {

    return( <div className="flex flex-col sm:flex-col">
    <div>
      <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
        Provisional Admission 2022-2023
      </div>
      {/* -- */}
  
  <div className="flex flex-col items-start sm:block 2xl:hidden">
  <Tab.Group>
 
             <Tab.List className="  grid grid-cols-2  text-slate-500  w-full h-fit p-2 mt-6 -mb-4   text-left rounded-lg sm:w-full justify-between sm:p-2 min-h-[55px] ">
             
             <div class="grid grid-rows-2 divide-y ">
                <div >
                <Tab className={({ selected }) =>
                  selected ? 'underline underline-offset-4 decoration-[3px] focus:outline-none font-semibold text-[#24346D] ' 
                  : ' focus:outline-none '
                }>
                  First Year B. Tech
                </Tab>                     
                </div>
                <div></div>
             </div>
             
             
             <div class="grid  grid-rows-2 divide-y">
                <div >
                <Tab className={({ selected }) =>
                  selected ? 'underline underline-offset-4 decoration-[3px] focus:outline-none font-semibold text-[#24346D] ' 
                  : ' focus:outline-none '
                }>
                  Direct Second Year
                </Tab>
                </div>
                <div></div>
             </div>
             
             </Tab.List>
      
   
            
             <Tab.Panels className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
           
             <Tab.Panel class="grid grid-cols-1 gap-y-2">
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>  
              </Tab.Panel>                       
        
              <Tab.Panel class="grid grid-cols-1 gap-y-2" >
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>  
              </Tab.Panel>                       
      
             </Tab.Panels>
             {/* row end */}
  
      </Tab.Group>
  </div>
  <div className="flex flex-col items-start sm:hidden 2xl:flex-col">
  <Tab.Group>
 
             <Tab.List className="  grid grid-cols-2  text-slate-500  w-full h-fit p-2 mt-6 -mb-4   text-left rounded-lg sm:w-full justify-between sm:p-2 min-h-[55px] ">
             
             <div class="grid grid-rows-2 divide-y ">
                <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>
                
                  First Year B. Tech
                                 
                </div>
                <div></div>
             </div>
             
             
             <div class="grid  grid-rows-2 divide-y">
             <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>

                  Direct Second Year

                </div>
                <div></div>
             </div>
             
             </Tab.List>
      
   
            
             <Tab.Panels className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
             <div class="grid grid-cols-1 gap-y-2">
            
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>  
                              
             </div>
             <div class="grid grid-cols-1 gap-y-2">
          
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>  
                                    
             </div>
             </Tab.Panels>
             {/* row end */}
  
      </Tab.Group>
  </div>

      {/*  */}
    </div>
  </div>);
}

export default ProvisionalAdmission