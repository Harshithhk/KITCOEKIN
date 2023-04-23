import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const NIRF_IPR = () => {

  let nirf2021 = [
    {
		"SrNo": 1,
		"NameOfFaculty": "Dr. Uma Gurav",
		"Title": "A BLOCKCHAIN TECHNOLhover:text-primaryOGY-BASED METHOD FOR STOCK MARKET ANALYSIS AND TRANSACTIONS",
		"Application": "documents/about/nirf/IPR/UPG_Application.pdf",
    "Publication": "documents/about/nirf/IPR/UPG_Publication.pdf"
	},
  {
		"SrNo": 2,
		"NameOfFaculty": "Mr. Pradeep Sadasniv Khot",
		"Title": "AN INTELLIGENT STENOhover:text-primaryGRAPHER DESIGNSD FOR ]UDICIARY SYSTEM",
		"Application": "documents/about/nirf/IPR/KhotPradeep17.06.2020App.pdf",
    "Publication": "documents/about/nirf/IPR/PradeepKhot-PublicationDate21.08.2020.pdf"
	},
  {
		"SrNo": 3,
		"NameOfFaculty": "MALKAR RADHIKA SADASHIV",
		"Title": "CATALYST FOR CO2 METHANATION REACTION HAVING HIGH ACTIVITY AND LONGTERM STABILITY AND PROCESS",
		"Application": "documents/about/nirf/IPR/RadhikaMalkarPatent.pdf",
    "Publication": "documents/about/nirf/IPR/RadhikaMalkarPatent.pdf"
	}
]

let nirf1920 = []


let nirf1819 = [{
	"SrNo": 1,
	"NameOfFaculty": "Dr. Vidula Swami",
	"Title": "Identification of Idhover:text-primaryeal Structure for Water Conservation in Rural Areas using SWAT Model",
	"Application": "documents/about/nirf/IPR/VidulaSwami-IPR.pdf",
  "Publication": "documents/about/nirf/IPR/VidulaSwami-IPR.pdf"
}]

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
            NIRF IPR
          </h1>
          <br></br>
          <br></br>
         
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> NIRF IPR 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className=" max-w-screen bg-secondary">
          <section className="relative z-30 w-fit pb-20 mx-auto h-fit px-14 sm:-mt-8 sm:px-4 sm:pb-10  ">
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl mb-6 sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                Academic Year 2020-21
              </div>
              <div className="sm:hidden grid grid-cols-4 sm:grid-cols-3 items-center text-slate-500 justify-items-center mt-6  w-full sm:w-fit h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                  <div className="sm:hidden">Sr.No.</div>
                  <div className=" ">Title</div>
                  <div className=" ">Name of Faculty</div>
                  <div className=" ">Download</div>         
              </div> 
              {nirf2021.map((item, index) => {
                   return (<>
                    <div className="sm:hidden grid grid-cols-4 sm:grid-cols-3 gap-2 items-center bg-white justify-items-center mt-2  sm:w-fit  w-full h-fit p-2 mb-2 shadow-lg rounded-2xl">
                      <div className="sm:hidden">{item.SrNo}</div>
                      <div className=" ">{item.Title}</div>
                      <div className=" ">{item.NameOfFaculty}</div>
                      <div className="grid grid-rows-2 ">
                      <a href={item.Application} className=" " target="_blank" rel="noreferrer">

                            <div className="flex sm:block hover:text-primary ">
                                Application  
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>   
                        <a href={item.Publication} className=" " target="_blank" rel="noreferrer">

                            <div className="flex sm:block hover:text-primary ">
                            Publication  
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>   
                      </div> 
                    </div>
                    
                    <div className=" sm:grid 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    
                      <div className="grid grid-cols-2">
                        <div className="text-slate-400">Sr.No.</div>   
                        <div className="">{item.SrNo}</div>      
                      </div>
                      <div className="grid grid-cols-2">
                      <div className=" text-slate-400">Name of Faculty</div>
                        <div className="">{item.NameOfFaculty}</div>      
                      </div>
                      <div className="grid grid-cols-2">
                      <div className=" text-slate-400">Title</div>  
                        <div className="">{item.Title}</div>      
                      </div>
                      <div className="grid grid-cols-2">
                      <div className=" text-slate-400">Download Details</div> 
                      <div className="grid grid-rows-2 ">
                      <a href={item.Application} className=" " target="_blank" rel="noreferrer">

                            <div className="flex hover:text-primary ">
                                Application  
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>   
                        <a href={item.Publication} className=" " target="_blank" rel="noreferrer">

                            <div className="flex hover:text-primary ">
                            Publication  
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>   
                      </div>      
                      </div>
                    
                    </div>
                </>)
                })}
          

            

          <div className="pt-28 sm:pt-20 text-[#24346D] mb-6 text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
            <div className="w-2 h-10 mr-4  rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
            Academic Year 2019-20
          </div>
          <div className=" grid grid-cols-4 sm:grid-cols-3 gap-2 items-center text-slate-500 justify-items-center mt-6  w-full sm:w-fit  h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className="sm:hidden ">Sr.No.</div>
              <div className=" ">Title</div>
              <div className=" ">Name of Faculty</div>
              <div className=" ">Download</div>         
          </div> 
          {nirf1920.map((item, index) => {
                return (<>
                  <div className="sm:hidden grid grid-cols-4 sm:grid-cols-3 gap-2 items-center bg-white justify-items-center mt-2  sm:w-fit  w-full h-fit p-2 mb-2 shadow-lg rounded-2xl">
                    <div className="sm:hidden">{item.SrNo}</div>
                    <div className=" ">{item.Title}</div>
                    <div className=" ">{item.NameOfFaculty}</div>
                    <div className="grid grid-rows-2 ">
                    <a href={item.Application} className=" " target="_blank" rel="noreferrer">

                          <div className="flex sm:block hover:text-primary ">
                              Application  
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                          </div>
                      </a>   
                      <a href={item.Publication} className=" " target="_blank" rel="noreferrer">

                          <div className="flex sm:block hover:text-primary ">
                          Publication  
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                          </div>
                      </a>   
                    </div> 
                  </div>
                  
                  <div className=" sm:grid 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                  
                    <div className="grid grid-cols-2">
                      <div className="text-slate-400">Sr.No.</div>   
                      <div className="">{item.SrNo}</div>      
                    </div>
                    <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Name of Faculty</div>
                      <div className="">{item.NameOfFaculty}</div>      
                    </div>
                    <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Title</div>  
                      <div className="">{item.Title}</div>      
                    </div>
                    <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Download Details</div> 
                    <div className="grid grid-rows-2 ">
                    <a href={item.Application} className=" " target="_blank" rel="noreferrer">

                          <div className="flex hover:text-primary ">
                              Application  
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                          </div>
                      </a>   
                      <a href={item.Publication} className=" " target="_blank" rel="noreferrer">

                          <div className="flex hover:text-primary ">
                          Publication  
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                          </div>
                      </a>   
                    </div>      
                    </div>
                  
                  </div>
              </>)
            })}

<div className="pt-28 sm:pt-20 mb-6 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
            <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
            Academic Year 2018-19
          </div>
          <div className="sm:hidden grid grid-cols-4 sm:grid-cols-3 gap-2items-center text-slate-500 justify-items-center mt-6  w-full sm:w-fit  h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className="sm:hidden ">Sr.No.</div>
              <div className=" ">Title</div>
              <div className=" ">Name of Faculty</div>
              <div className=" ">Download</div>         
          </div> 
          {nirf1819.map((item, index) => {
               return (<>
                          <div className="sm:hidden grid grid-cols-4 sm:grid-cols-3 gap-2 items-center bg-white justify-items-center mt-2  sm:w-fit  w-full h-fit p-2 mb-2 shadow-lg rounded-2xl">
                            <div className="sm:hidden">{item.SrNo}</div>
                            <div className=" ">{item.Title}</div>
                            <div className=" ">{item.NameOfFaculty}</div>
                            <div className="grid grid-rows-2 ">
                            <a href={item.Application} className=" " target="_blank" rel="noreferrer">

                                  <div className="flex sm:block hover:text-primary ">
                                      Application  
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </div>
                              </a>   
                              <a href={item.Publication} className=" " target="_blank" rel="noreferrer">

                                  <div className="flex sm:block hover:text-primary ">
                                  Publication  
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </div>
                              </a>   
                            </div> 
                          </div>
                          
                          <div className=" sm:grid 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                          
                            <div className="grid grid-cols-2">
                              <div className="text-slate-400">Sr.No.</div>   
                              <div className="">{item.SrNo}</div>      
                            </div>
                            <div className="grid grid-cols-2">
                            <div className=" text-slate-400">Name of Faculty</div>
                              <div className="">{item.NameOfFaculty}</div>      
                            </div>
                            <div className="grid grid-cols-2">
                            <div className=" text-slate-400">Title</div>  
                              <div className="">{item.Title}</div>      
                            </div>
                            <div className="grid grid-cols-2">
                            <div className=" text-slate-400">Download Details</div> 
                            <div className="grid grid-rows-2 ">
                            <a href={item.Application} className=" " target="_blank" rel="noreferrer">

                                  <div className="flex hover:text-primary ">
                                      Application  
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </div>
                              </a>   
                              <a href={item.Publication} className=" " target="_blank" rel="noreferrer">

                                  <div className="flex hover:text-primary ">
                                  Publication  
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </div>
                              </a>   
                            </div>      
                            </div>
                          
                          </div>
                      </>)
            })}


          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default NIRF_IPR
