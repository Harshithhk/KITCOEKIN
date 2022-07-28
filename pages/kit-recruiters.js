import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const KitRecruiters = () => {

    const link = {
        "bioTech":"dept-of-biotechnology-engg-recruiters",
        "civil":"dept-of-civil-engg-recruiters",
        "cse":"dept-of-computer-science-engg-recruiters",
        "it":"#",
        "entc":"dept-of-electronics-engg-recruiters",
        "electronics":"dept-of-electronics-engg-recruiters",
        "electricals":"#",
        "bsh":"#",
        "production":"#",
        "environmental":"dept-of-environmental-engg-recruiters",
        "mech":"dept-of-mechanical-engg-recruiters",
    }
  
  return (
    <DefaultLayout>
      <div className="w-full ">
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
            Faculty List
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Faculty List 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="relative  z-30 w-full mx-auto pt-16 sm:pt-14 sm:-mt-2 pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
                <div className="flex items-center w-full sm:ml-2">
                    <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
                    <div className="ml-3 md:ml-2 w-fit  text-center sm:text-xl   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
                        DEPARTMENT MOU'S
                    </div>
                </div>
                <div className="grid  grid-cols-3 sm:grid-cols-1 sm:mt-6 gap-x-6 p-2 mt-16">
                    
                    <div className="grid grid-cols-1 divide-y ">
                        
                        <a href={link.bioTech}>
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">
                            Biotechnology Engineering
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href={link.civil}>
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Civil Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href={link.cse}>
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Computer Science Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href="#">
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Production Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                    </div>
                    <div className="grid grid-cols-1 divide-y">
                   
                        <a href="#">
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Information Technology<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href={link.electronics}>
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Electronics Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href={link.electricals}>
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Electrical Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href="#">
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Basic Sciences & Humanities
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-primary "
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
                        </div></a>

                    </div>

                    <div className={link.entc}>
                        
                        <a href="dept-of-electronics-telecommunication-engg-mous">
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Electronics & Telecomm Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href={link.environmental}>
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Environmental Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
                        <a href={link.mech}>
                        <div className="p-2 flex justify-between hover:bg-slate-50 hover:cursor-pointer">Mechanical Engineering<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
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
                        </div></a>
              
                    </div>
                    
                    
                </div>
                {/* <div className="grid grid-cols-2 items-center justify-center text-center">
                    <div>Production Engineering</div>
                    <div>Basic Sciences & Humanities</div>
                </div> */}
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default KitRecruiters
