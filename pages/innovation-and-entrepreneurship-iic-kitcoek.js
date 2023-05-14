import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/innovation/iic/career"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"

const InnovationEntrepreneurshipIIC = () => {

    const [subLink, setSubLink] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLinkHover1, setSubLinkHover1] = React.useState(false)
    const [subLinkHover2, setSubLinkHover2] = React.useState(false)

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
            Innovation & Entrepreneurship

          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <a href="/"><span className="hover:text-primary hover:cursor-pointer"> Home</span></a> <span className=" ">|</span> IIC - KITCOEK


          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}

          <div className="flex justify-between sm:flex-col">
            <Career />
            <div>
              
            </div>
           
          </div>
              
        </section>
        <div className="w-full mt-16 pb-16 bg-white h-fit flex flex-row sm:flex-col">
            <div className="w-[60%] sm:w-fit">
            <div className="m-10">
                <div className="pt-20 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        Major Focus
                    </div>
                    <div className=" items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg  ">
                        
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            To create a vibrant local innovation ecosystem.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Start-up supporting mechanism in HEIs.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                        <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Prepare institute for Atal Ranking of institutions on innovation achievements framework.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Establish function ecosystem for scouting ideas and pre-incubation of ideas.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Develop better cognitive ability among students.
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="m-10">
                <div className=" sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        Function of IIC
                    </div>
                    <div className=" items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg  ">
                        
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            To conduct various Innovation, IPR and entrepreneurship-related activities prescribed by MIC in time bound fashion.
                            
                    </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Identify and reward innovations and share success stories.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                        <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Network with peers and national entrepreneurship development organizations.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Create an Institution’s Innovation portal to highlight innovative projects carried out by institution’s faculty and students.
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="flex mt-2 mb-2">
                            <div className=" w-[5%] text-left  pl-2 text-slate-400 sm:w-[20%]" >
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 text-[#24346D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className=" w-[80%] text-left  pl-2 text-primary">
                            Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-60 p-2 sm:mt-0">        
                <img src="/images/InnovationEntrepreneurship/IIC Certificate.jfif" className="rounded-xl" alt="" />
            </div>
        </div>

     
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default InnovationEntrepreneurshipIIC
