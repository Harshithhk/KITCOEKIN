import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"

const InternalQualityAssuranceCell = () => {
  return (
    <DefaultLayout>
      <div className="w-full pb-10 bg-[#24346D]">
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
            Internal Quality Assurance Committee(IQAC)
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> IQAC 
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
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Introduction
              </div>
              
              <div className="mt-10 sm:mt-4 w-[800px] lg:w-fit lg:mr-5 text-justify text-xl text-accent sm:w-full sm:text-base">
              <a href="documents/about/iqac/nacc-record/kit-nacc-ssr-cycle.pdf" target="_blank" rel="noreferrer">
                <p className="flex hover:cursor-pointer hover:text-primary">NAAC Accreditation: Self Study Report Cycle-1 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:cursor-pointer text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </p>
              </a>
            
                <br></br>
                In pursuance of the National Action Plan of the National
                Assessment and Accreditation Council (NAAC), Bangalore, for
                performance evaluation, assessment and accreditation and quality
                up gradation of institutions of higher education, the NAAC
                proposes that every accredited institution should establish an
                Internal Quality Assurance Cell (IQAC) as a post-accreditation
                quality sustenance measure. Since quality enhancement is a
                continuous process, the IQAC will become a part of an
                institution’s system and work towards realizing the goals of
                quality enhancement and sustenance. The prime task of the IQAC
                is to develop a system for conscious, consistent and catalytic
                improvement in the performance of institutions. The IQAC will
                make a significant and meaningful contribution in the
                post-accreditation phase of institutions. During the
                post-accreditation period, the IQAC will channelise the efforts
                and measures of an institution towards academic excellence. The
                guidelines provided in the following pages will facilitate the
                institution in the creation and operation of the Internal
                Quality Assurance Cell (IQAC). The work of the IQAC is the first
                step towards the internalization and institutionalization of
                quality enhancement. Its success depends upon the sense of
                belongingness and participation it can inculcate in all the
                constituents of the institution. It will not be yet another
                hierarchical structure or recordkeeping exercise in the
                institution; it will be a facilitative and participative
                voluntary system/unit/organ of the institution. The IQAC has the
                potential to become a vehicle for ushering in quality by working
                out intervention strategies to remove deficiencies and enhance
                quality. Quality circles in industries operate on similar lines.
                <br></br>
                <br></br>
                <b>Objective:</b>
                <br></br>
                <br></br>
                The Primary aim of the IQAC is to develop a system for
                conscious, consistent and catalytic action to improve the
                academic and administrative performance of the institution.
                <br></br>
                <br></br>
                <a href="documents/About/IQAC/IQAC_Committee/IQAC_22-23.pdf" target="_blank" rel="noreferrer">
                <p className="flex hover:cursor-pointer hover:text-primary"> Internal Quality Assurance Cell (IQAC) Committee
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:cursor-pointer text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </p>
              </a>
              </div>
            </div>

            <div className="min-w-[300px]">
              <div className="pt-28 sm:pt-20 w-full text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                IQAC
              </div>
              <div className=" items-center w-fit h-fit p-2 mt-6 font-semibold text-center rounded-lg shadow-lg ">
                <a href="best-practices">
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    Best Practices
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                </div>
                </a>
                <hr></hr>
                <a href="iqar-records">
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  < div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    AQAR Records
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                </div>
                </a>
                <hr></hr>

                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100 invisible">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    Infrastructure and Learning Resources
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                </div>
           
              </div>

              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                NAAC Records
              </div>
              <div className=" items-center w-fit h-fit p-2 mt-6 font-semibold text-center rounded-lg shadow-lg ">
              <a href="documents/About/IQAC/nacc-record/nacc-certificate-2021.pdf" target="_blank" rel="noreferrer">

                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    KIT NAAC Certificate
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a>  
                <hr></hr>
              <a href="documents/About/IQAC/nacc-record/kit-quality-profilenacc-certificate.JPG" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 text-slate-400">
                    {" "}
                    KIT NAAC Quality Profile
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a>  
              <hr></hr>
              <a href="documents/about/iqac/nacc-record/KITCOEK Undertaking IIQA 2022.pdf" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    NAAC IIQA Undertaking 2022
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a>
                <hr></hr>
              <a href="documents/About/IQAC/nacc-record/nacc-peer-report.pdf" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    NAAC Peer team report
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a>
                <hr></hr>
              <a href="documents/About/IQAC/nacc-record/kit-nacc-ssr-cycle.pdf" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    NAAC Self Study Report Cycle-1 as on 15th Nov 2014
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a> 
                <hr></hr>
              <a href="documents/About/IQAC/nacc-record/naac-central-commitee.pdf" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    NAAC: Central Committee
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a> 
                <hr></hr>
              <a href="documents/about/iqac/nacc-record/student-satisfaction-survey-kit.pdf" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    Student Satisfaction Survey for year 2020-21
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a>
              <hr></hr>
              <a href="documents/about/iqac/nacc-record/SSS_21-22.pdf" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    Student Satisfaction Survey 2021-22
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a>
              <hr></hr>
              <a href="documents/about/iqac/nacc-record/Feedback analysis and action taken report.pdf" target="_blank" rel="noreferrer">  
                <div className="flex mt-2 mb-2 hover:cursor-pointer hover:bg-slate-100">
                  <div className=" w-[90%] text-left pl-2 pr-2 text-slate-400">
                    {" "}
                    Feedback analysis and action taken report
                  </div>
                  <div className=" w-[20%] text-left pl-2 text-slate-400">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  </div>
                </div>
              </a>
              
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </DefaultLayout>
  )
}

export default InternalQualityAssuranceCell
