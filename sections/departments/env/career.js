import React from "react"

const Career = () => {
  const [subLink, setSubLink] = React.useState(false)
  const [subLink2, setSubLink2] = React.useState(false)
  const [subLinkHover1, setSubLinkHover1] = React.useState(false)
  const [subLinkHover2, setSubLinkHover2] = React.useState(false)
  return (
    <section className=" mx-auto  w-[1407px]  sm:w-full  sm:mt-8 flex  md:flex-col items-center">
      {/* HEADING */}

      <div className=" w-[750px] rounded-xl  p-6 sm:w-full ">
        {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
        <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px] sm:leading-normal">
          CONSTRUCT A <span className="text-primary "> STUNNING</span> CAREER
          PERSPECTIVE
        </div>
        <div className="mt-12 w-[700px] sm:w-full bg-transparent leading-[50px]  sm:mt-4">
          <div className="w-full h-12 rounded-t-md bg-primary text-2xl text-white flex items-center px-4 sm:h-fit  sm:text-base sm:py-1">
            Common Courses
          </div>
          <div className="w-full p-4 py-8 bg-[#F8F7FC]   sm:leading-normal sm:text-sm sm:p-2">
            Data Structures,Computer Algorithms,Computer Network, Database
            Engineering, Operating Systems, MICROPROCESSOR
          </div>
          <div className="flex justify-between items-center w-full p-4 mt-6 bg-[#F8F7FC] sm:text-sm sm:leading-normal sm:p-2">
            <div> Specialized Courses</div>
            <div className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-slate-100 ">
              <img className="h-4 " src="/images/Department/plus.png" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full p-4 mt-6 bg-[#F8F7FC] sm:leading-normal sm:text-sm sm:p-2">
            <div>Application Areas</div>
            <div className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-slate-100">
              <img className="h-4 " src="/images/Department/plus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:m-0 md:min-w-0  md:w-[90%] md:ml-0 ml-[200px] -mt-[25px] min-w-[400px]">
        <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
          Quick Links
        </div>
        <div className=" items-center w-auto h-fit p-2 mt-6 font-semibold text-center rounded-lg shadow-lg ">
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
              Consultancy Services
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
    </section>
  )
}

export default Career
