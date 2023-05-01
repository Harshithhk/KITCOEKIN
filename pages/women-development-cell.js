import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"
import { Tab } from '@headlessui/react'
import ProvisionalAdmission from "../sections/admissions/undergraduate/ProvisionalAdmission"
import Admission2223 from "../sections/admissions/undergraduate/Admission2223"
import Admission2122 from "../sections/admissions/undergraduate/Admission2122"

const WomenDevelopmentCell = () => {
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
            Women Development Cell
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Women Development Cell
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
        Women Development Cell AY:2021-22
      </div>
      {/* -- */}
  
 
  <div className="flex flex-col items-start  mt-6">
  
 
             {/* <Tab.List className="  grid grid-cols-2  text-slate-500  w-full h-fit p-2 mt-6 -mb-4   text-left rounded-lg sm:w-full justify-between sm:p-2 min-h-[55px] ">
             
             <div className="grid grid-rows-2 divide-y ">
                <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>
                
                  First Year B. Tech
                                 
                </div>
                <div></div>
             </div>
             
             
             <div className="grid  grid-rows-2 divide-y">
             <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>

                  Direct Second Year

                </div>
                <div></div>
             </div>
             
             </Tab.List> */}
      
   
            
             <div className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
             <div className="grid grid-cols-1 gap-y-2">
            
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">Women Development and Gender Equity Cell </div>
                  <a href="WDGECell Scanned21-22.pdf">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  </a>
                </div>  
                              
             </div>
             <div className="grid grid-cols-1 gap-y-2">
          
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">Women Development and Gender Equity Cell Action Plan</div>
                  <a href="WDGEC Action plan Scanned21-22.pdf">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  </a>
                </div>  
                                    
             </div>
             </div>
             {/* row end */}
  
     
  </div>

      {/*  */}
    </div>
  </div>
          <div className="flex flex-col sm:flex-col">
    <div>
      <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
        Women Development Cell AY:2020-21
      </div>
      {/* -- */}
  
 
  <div className="flex flex-col items-start  mt-6">
  
 
             {/* <Tab.List className="  grid grid-cols-2  text-slate-500  w-full h-fit p-2 mt-6 -mb-4   text-left rounded-lg sm:w-full justify-between sm:p-2 min-h-[55px] ">
             
             <div className="grid grid-rows-2 divide-y ">
                <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>
                
                  First Year B. Tech
                                 
                </div>
                <div></div>
             </div>
             
             
             <div className="grid  grid-rows-2 divide-y">
             <div className='underline underline-offset-4 decoration-[3px]  font-semibold text-[#24346D] '>

                  Direct Second Year

                </div>
                <div></div>
             </div>
             
             </Tab.List> */}
      
   
            
             <div className=" grid grid-cols-2 gap-y-2 sm:grid-cols-1 gap-x-5 w-full h-fit p-2 bg-[#F8F7FC] font-semibold  sm:w-full  sm:p-2 min-h-[55px] ">
             <div className="grid grid-cols-1 gap-y-2">
            
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">Women Development and Gender Equity Cell </div>
                  <a href="1_WDGEC_committee_2020-21.pdf">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  </a>
                </div>  
                              
             </div>
             <div className="grid grid-cols-1 gap-y-2">
          
                <div className="pl-2 pr-2 bg-white rounded-lg shadow-lg min-h-[50px] grid grid-cols-12 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="col-start-1 h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <div className="col-start-2 col-end-12 sm:col-start-3">Women Development and Gender Equity Cell Action Plan</div>
                  <a href="2_WDGEC_Action_Plan_2020-21.pdf">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" col-start-13  h-7 w-7 hover:text-primary hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  </a>
                </div>  
                                    
             </div>
             </div>
             {/* row end */}
  
     
  </div>

      {/*  */}
    </div>
  </div>
        </section>
       

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default WomenDevelopmentCell
