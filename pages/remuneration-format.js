import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"



const RemunerationFormat = () => {
  const link = {
    "RF1": "documents/examCell/remunerationFormat/exam-coordinator-remuneration-form.pdf",
    "RF2": "documents/examCell/remunerationFormat/form-no-e-35-remuneration-bill-form-of-assistant-helper-oe-exam-a4.pdf",
    "RF3": "documents/examCell/remunerationFormat/form-no-e-07-remuneration-bill-paper-setter-assessment-poe.pdf",
    "RF4": "documents/examCell/remunerationFormat/local-convenyance-allowance-bill-form.pdf",
    "RF5": "documents/examCell/remunerationFormat/poe-oe-schedule-form.xls",
    "RF6": "documents/examCell/remunerationFormat/ta-ha-bill-form.pdf",
}
  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D] pb-10">
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
            className="w-[75%] mt-14 sm:text-2xl  text-4xl font-bold text-center text-white z-20"
          >
            Paper Setting Documents
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              Home
            </span>{" "}
            <span className="">|</span> Remuneration Format
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          {/* <div className="z-10  absolute w-full top-0 left-0 h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/About/RemunerationFormat/KITBG.jpeg')]  opacity-10"></div> */}
          {/* <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
            <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
            Exam Time Table
          </div> */}

          <div className="mt-8 w-[80%] text-[#24346D] sm:mt-4 mx-auto text-center text-xl sm:text-sm ">
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            laudantium perspiciatis at dolore earum provident fugit aperiam
            repellat dolorem, recusandae esse, ratione expedita illum autem iste
            sed tempora quaerat eum? */}
          </div>

              <div className="pt-8">
              <div className="flex items-center w-full sm:ml-2">
                    <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
                    <div className="ml-3 md:ml-2 w-fit  text-center sm:text-xl   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
                        DEPARTMENT MOU'S
                    </div>
                </div>
                <div className="grid  grid-cols-2 sm:grid-cols-1 sm:mt-6 gap-x-6 p-2 mt-16">
                    
                    <div className="grid grid-cols-1 divide-y ">
                        
                        <a href={link.RF1}>
                          <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">
                          Exam Coordinator Remuneration Form
                              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
                          </div>
                        </a>

                        <a href={link.RF2}>
                          <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">
                          FORM No E-35 (Remuneration bill form of Assistant & helper_OE Exam)
                              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
                          </div>
                        </a>
                        <a href={link.RF3}>
                          <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">
                          FORM No. E-07 (Remuneration bill _Paper setter , Assessment & POE)
                              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
                          </div>
                        </a>
                        <a href={link.RF4}>
                          <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">
                          Local Conveyance Allowance Bill FORM ( Paper Setter , Examiner, Moderator , Sr. Supervisor)
                              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
                          </div>
                        </a>
                        <a href={link.RF5}>
                          <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">
                          POE.OE.SCHEDULE Format
                              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
                          </div>
                        </a>
                        <a href={link.RF6}>
                          <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">
                          T.A & H.A Bill Form( Paper setter , Examiner, Moderator ,Sr.Supervisor , Internal & External Examiner )
                              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
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

export default RemunerationFormat
