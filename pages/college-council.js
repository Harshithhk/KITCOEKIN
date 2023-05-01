import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/departments/career"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"

const CollegeCouncil = () => {
  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
        <section className="flex flex-col h-[250px] bg-[#F8F7FC] items-center w-full relative">
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
            Governance Committee

          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Governance Committee
 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}

          <div className="flex justify-between sm:flex-col">
            <div>
              
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl  sm:text-lg font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                GOVERNANCE COMMITTEE
              </div>
              <div className=" items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg  ">
                
              <div className="flex mt-2 mb-2 hover:bg-slate-100 hover:cursor-pointer">
                   
                    <a href="board-of-directors" className=" text-left text-2xl sm:text-lg w-[80%] pl-2 text-[#24346D]">
                    Board of Trustees
                    </a>
                    <div className=" w-[5%]  text-left  pl-2 text-slate-400 sm:w-[20%]" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2 hover:bg-slate-100 hover:cursor-pointer">
                    
                    <a href="committee-equipment-committee" className=" w-[80%] text-left text-2xl sm:text-lg  pl-2 text-[#24346D]">
                    Equipment Committee                   
                     </a>
                     <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2 hover:bg-slate-100 hover:cursor-pointer">
                
                    <a href="committee-staff-commitee"  className=" w-[80%] text-left text-2xl sm:text-lg  pl-2 text-[#24346D]">
                    Staff Committee
                                        </a>
                                        <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2 hover:bg-slate-100 hover:cursor-pointer">
                    
                    <a href="committee-building-works-committee" className=" w-[80%] text-left text-2xl sm:text-lg   pl-2 text-[#24346D]">
                    Building & Works Committee
                                        </a>
                                        <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2 hover:bg-slate-100 hover:cursor-pointer">
                    
                    <a href="committee-finance-committee" className=" w-[80%] text-left text-2xl sm:text-lg   pl-2 text-[#24346D]">
                    Finance Committee
                                        </a>
                                        <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
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

export default CollegeCouncil
