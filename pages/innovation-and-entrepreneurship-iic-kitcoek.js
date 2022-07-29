import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/departments/career"
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
            KOLHAPUR INSTITURE OF TECHNOLOGY&apos;S
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] text-4xl sm:text-xl font-bold text-center text-white z-20"
          >
            COLLEGE OF ENGINEERING (AUTONOMOUS), KOLHAPUR
          </h1>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
          <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          />

          <div className="flex justify-between sm:flex-col">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                ABOUT IIC


              </div>
              <div className="mt-10 sm:mt-4 w-[700px] text-xl text-accent text-justify sm:w-full sm:text-base">
              Ministry of Education (MoE), Govt. of India has established 'MoE's Innovation Cell (MIC) to systematically foster the culture of Innovation among all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are informative years.
              <br/><br/>
              MIC has envisioned encouraging creation of 'Institution's Innovation Council (IICs) across selected HEIs. A network of IICs are established to promote innovation and entrepreneurship in the Institution through multitudinous modes leading to an innovation promotion ecosystem in the campuses. MIC has established Institution's Innovation Council in more than 2200 Instiutions till November 2020.


              </div>
            </div>
            <div className="md:m-0 md:min-w-0  md:w-[90%] md:ml-0 ml-[200px]  min-w-[400px]">
        <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
          Quick Links
        </div>
        <div className=" items-center w-auto h-fit p-2 mt-6 font-semibold text-center  ">
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left  pl-2 text-slate-400">
              Activities
            </div>
            <div className=" w-[20%] text-left  pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>

          {/* STOP */}
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 text-slate-400"> Staff</div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              Laboratories
            </div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div
            className={
              subLink === true
                ? "flex mt-2 mb-2 bg-[#F8F7FC]"
                : "flex mt-2 mb-2"
            }
            onMouseEnter={() => setSubLink(!subLink)}
            onMouseLeave={() => setSubLink(!subLink)}
          >
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              Placement
            </div>
            <div className=" w-[20%] text-left mr-2 pl-2 text-slate-400">
              <svg
                className={
                  subLink === true
                    ? " z-11 transform rotate-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                    : "transform -rotate-90 transition  ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className={
                  subLink === true
                    ? " absolute z-11  items-center w-[280px] h-fit p-4 -ml-[400px] mt-1 font-semibold text-center bg-white rounded-lg shadow-lg "
                    : " hidden  items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg shadow-lg "
                }
              >
                <div
                  className={
                    subLinkHover1 === true
                      ? "flex mt-2 mb-2 bg-[#F8F7FC]"
                      : "flex mt-2 mb-2"
                  }
                  onMouseEnter={() => setSubLinkHover1(!subLinkHover1)}
                  onMouseLeave={() => setSubLinkHover1(!subLinkHover1)}
                >
                  <div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    Activities
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
                <hr></hr>
                <div
                  className={
                    subLinkHover2 === true
                      ? "flex mt-2 mb-2 bg-[#F8F7FC]"
                      : "flex mt-2 mb-2"
                  }
                  onMouseEnter={() => setSubLinkHover2(!subLinkHover2)}
                  onMouseLeave={() => setSubLinkHover2(!subLinkHover2)}
                >
                  <div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    Staff
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div
            className={
              subLink2 === true
                ? "flex mt-2 mb-2 bg-[#F8F7FC]"
                : "flex mt-2 mb-2"
            }
            onMouseEnter={() => setSubLink2(!subLink2)}
            onMouseLeave={() => setSubLink2(!subLink2)}
          >
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              Internship
            </div>
            <div className=" w-[20%] text-left mr-2 pl-2 text-slate-400 ">
              <svg
                className={
                  subLink2 === true
                    ? "transform rotate-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                    : " transform -rotate-90 transition  ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className={
                  subLink2 === true
                    ? " absolute z-11  items-center w-[280px] h-fit p-4 -ml-[400px] mt-1 font-semibold text-center bg-white rounded-lg shadow-lg "
                    : " hidden  items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg shadow-lg "
                }
              >
                <div
                  className={
                    subLinkHover1 === true
                      ? "flex mt-2 mb-2 bg-[#F8F7FC]"
                      : "flex mt-2 mb-2"
                  }
                  onMouseEnter={() => setSubLinkHover1(!subLinkHover1)}
                  onMouseLeave={() => setSubLinkHover1(!subLinkHover1)}
                >
                  <div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    Activities
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
                <hr></hr>
                <div
                  className={
                    subLinkHover2 === true
                      ? "flex mt-2 mb-2 bg-[#F8F7FC]"
                      : "flex mt-2 mb-2"
                  }
                  onMouseEnter={() => setSubLinkHover2(!subLinkHover2)}
                  onMouseLeave={() => setSubLinkHover2(!subLinkHover2)}
                >
                  <div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    Staff
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              Recruiters
            </div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              MOU'S
            </div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              PO's & PEO'S
            </div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              Student Achievements
            </div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              Department Gallery
            </div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
          <hr></hr>
          <hr></hr>
          <div className="flex mt-2 mb-2">
            <div className=" w-[80%] text-left pl-2 pr-2 text-slate-400">
              {" "}
              Press Release
            </div>
            <div className=" w-[20%] text-left pl-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>
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
