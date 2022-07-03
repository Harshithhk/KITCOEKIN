import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"

const AdmissionUndergraduate = () => {
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
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          />
          {/* - */}
          <div className="flex justify-between sm:flex-col">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Provisional Admission 2022-2023
              </div>
              {/* -- */}
              <div className="flex  sm:flex-row">
                {/* ---*/}
                <div className=" items-center  w-[650px] h-fit p-2 mt-6 font-semibold text-center rounded-lg  bg-[#F8F7FC]">
                  <div className="flex mt-2 mb-2">
                    <div className=" w-[25%] text-left pl-2 text-[#24346D]">
                      First Year B. Tech
                    </div>
                  </div>
                  <hr className="w-[23%] border-[1.5px] bg-[#24346D] border-[#24346D]"></hr>
                  <hr></hr>

                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className=" items-center  w-[650px] h-fit p-2 mt-6 ml-6 font-semibold text-center rounded-lg  bg-[#F8F7FC]">
                  <div className="flex mt-2 mb-2">
                    <div className=" w-[25%] text-left pl-2 text-[#24346D]">
                      Direct Second Year
                    </div>
                  </div>
                  <hr className="w-[24.3%] border-[1.5px] bg-[#24346D] border-[#24346D]"></hr>
                  <hr></hr>

                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        APPLICATION FORM :- F.Y. B.TECH. FOUNDATION PROGRAM
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/* - */}
          <div className="flex justify-between sm:flex-col">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Admission 2022-2023
              </div>
              {/* -- */}
              <div className="flex  sm:flex-row">
                {/* ---*/}
                <div className=" items-center  w-[650px] h-fit p-2 mt-6 font-semibold text-center rounded-lg  bg-[#F8F7FC]">
                  <div className="flex mt-2 mb-2">
                    <div className=" w-[25%] text-left pl-2 text-[#24346D]">
                      First Year B. Tech
                    </div>
                  </div>
                  <hr className="w-[23%] border-[1.5px] bg-[#24346D] border-[#24346D]"></hr>
                  <hr></hr>

                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Last Year Cutoff [Male] AY:2021-22
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Last Year Cutoff [Female] AY:2021-22
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Fee Structure
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className=" items-center  w-[650px] h-fit p-2 mt-6 ml-6 font-semibold text-center rounded-lg  bg-[#F8F7FC]">
                  <div className="flex mt-2 mb-2">
                    <div className=" w-[25%] text-left pl-2 text-[#24346D]">
                      Direct Second Year
                    </div>
                  </div>
                  <hr className="w-[24.3%] border-[1.5px] bg-[#24346D] border-[#24346D]"></hr>
                  <hr></hr>

                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Last Year Cutoff [Female] AY:2021-22
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Last Year Cutoff [Male] AY:2021-22
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Fee Structure
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/* - */}
          <div className="flex justify-between sm:flex-col">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Admission 2021-2022
              </div>
              {/* -- */}
              <div className="flex  sm:flex-row">
                {/* ---*/}
                <div className=" items-center  w-[650px] h-fit p-2 mt-6 font-semibold text-center rounded-lg  bg-[#F8F7FC]">
                  <div className="flex mt-2 mb-2">
                    <div className=" w-[25%] text-left pl-2 text-[#24346D]">
                      First Year B. Tech
                    </div>
                  </div>
                  <hr className="w-[23%] border-[1.5px] bg-[#24346D] border-[#24346D]"></hr>
                  <hr></hr>

                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        List of documents During Online Registration F.Y.B.TECH
                        2021-22
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Cut off list for previous year (Female)
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Cut off list for previous year (Male)
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Cut Off Lists of CAP Round for Previous 3 Years
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Scholarships Schemes Offered by State Govt. / Central
                        Govt.
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        F. Y B. Tech Fee Structure for Academic Year 2021-22
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className=" items-center  w-[650px] h-fit p-2 mt-6 ml-6 font-semibold text-center rounded-lg  bg-[#F8F7FC]">
                  <div className="flex mt-2 mb-2">
                    <div className=" w-[25%] text-left pl-2 text-[#24346D]">
                      Direct Second Year
                    </div>
                  </div>
                  <hr className="w-[24.3%] border-[1.5px] bg-[#24346D] border-[#24346D]"></hr>
                  <hr></hr>

                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Cut off list for previous year (Female)
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Cut off list for previous year (Male)
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Cut Off Lists of CAP Round for Previous 3 Years
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        Scholarships Schemes Offered by State Govt. / Central
                        Govt.
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" items-center  w-auto h-[63px] p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-[#ffffff]">
                    <div className="flex mt-2 mb-2">
                      <img
                        src="/images/Others/pdf-files.png"
                        className="w-8 h-8 ml-2 "
                        alt=""
                      />
                      <div className=" w-[100%] mt-1 text-left pl-2 ml-2 text-[#24346D]">
                        F. Y B. Tech Fee Structure for Academic Year 2021-22
                      </div>
                      <img
                        src="/images/Others/download-file.png"
                        className="w-8 h-8 mr-2 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </section>
        <section className="pt-16 mt-16 mb-[-60px] overflow-x-scroll  bg-[#F8F7FC] max-w-screen">
          <div className="flex items-center w-full ml-16 sm:ml-4">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
              INSTITUTE CODE : 6267
            </div>
          </div>
          <section className="relative   z-30 w-[1500px] pb-20 mx-auto h-fit px-14  sm:px-4 sm:pb-10 sm:w-[1000px]">
            <div className="flex items-center w-full h-16 p-2 mt-8 font-semibold text-center rounded-lg shadow-lg ">
              <div className=" w-[75%] text-left pl-2">Course Name</div>
              <div className=" w-[25%] text-left pl-2">
                <p className="ml-1">General Choice Code</p>
                <p className="mt-2">
                  <span className="mr-20">Intake</span>
                  <span>Code</span>
                </p>
              </div>
              <div className=" w-[25%] text-left pl-2">
                <p className="ml-2">TFWS Choice Code</p>
                <p className="mt-2">
                  <span className="mr-20">Intake</span>
                  <span>Code</span>
                </p>
              </div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-6 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[9%] text-left pl-2">30</div>
              <div className=" w-[11%] text-left pl-2">626708210</div>
              <div className=" w-[9%] text-left pl-2">3</div>
              <div className=" w-[10%] text-left pl-2">626708211T</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Civil & Environmental Engineering with
                  specialization in Green Technology & Sustainability
                  Engineering
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">18</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">42</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">18</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">55</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
          </section>
          <section className="relative pt-16 mt-16 rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#24346D] px-14 sm:px-4 sm:pb-10">
            <div className="flex items-center w-full  sm:ml-4">
              <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
              <div className="ml-3 md:ml-2 w-fit  text-center   text-[#ffffff] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
                Admission Process & Details
              </div>
            </div>

            <div className="flex items-center  w-[1100px] ml-[110px] h-16 p-2 mt-8 font-semibold text-center rounded-lg shadow-lg text-slate-500 bg-[#F8F7FC] ">
              <div className=" w-[50%]  pl-2">Department</div>
              <div className=" w-[50%]  pl-2">Name of Faculty</div>
              <div className=" w-[50%]  pl-2">Contact Details</div>
            </div>

            <div className="flex   w-[1100px] ml-[110px] h-fit p-2 mt-6 font-semibold text-center rounded-lg shadow-lg bg-white ">
              <div className="w-[35%] mt-2">For general queries</div>
              <div className="mr-6 w-[65%]">
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Dr. Mahesh B. Shinde</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      7030861199
                    </p>
                    <p className="ml-16">9767873887</p>
                  </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Mr. Saurabh S. Joshi</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      9028486124
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Mr. Amar H. Tikole</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      9272319199
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Dr. Nivas S. Patil</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      9158337227
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex   w-[1100px] ml-[110px] h-fit p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-white ">
              <div className="w-[35%] mt-2">Bio Technology</div>
              <div className="mr-6 w-[65%]">
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Dr. Rajesh M. Jorgewad</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      8668406496
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Mrs. Saee H. Thakur</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      9850317278
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex   w-[1100px] ml-[110px] h-fit p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-white ">
              <div className="w-[35%] mt-2">
                Civil and Environmental Engineering
              </div>
              <div className="mr-6 w-[65%]">
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Dr. Akshay R. Thorvat</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      9175886755
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Mr. Bharat C. Ingavale</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      9823644466
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex   w-[1100px] ml-[110px] h-fit p-2 mt-2 font-semibold text-center rounded-lg shadow-lg bg-white ">
              <div className="w-[35%] mt-2">Bio Technology</div>
              <div className="mr-6 w-[65%]">
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Dr. Rajesh M. Jorgewad</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      8668406496
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="flex mt-2 mb-2">
                  <div className=" w-[50%]  pl-2 ">
                    <p>Mrs. Saee H. Thakur</p>
                    <p className="text-slate-400">Assistant Professor</p>
                  </div>
                  <div className=" ml-[110px]  pl-2 ">
                    <p>
                      <span className="text-slate-400">Mobile :</span>{" "}
                      9850317278
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default AdmissionUndergraduate
