import DefaultLayout from "../components/DefaultLayout"
import BiotechnologyEngineering from "../components/Navbar/departments/biotechnologyEngineering"
import QuickLinks from "../components/QuickLinks"
import Career from "../sections/departments/electronics/career"
import QuickLinksCard from "../sections/departments/electronics/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const ElectronicsEngineeringActivities = () => {
  let Activities = [{
    "SrNo": 1,
    "DetailsOfActivity": "Tree Plantation Drive",
    "ResourcePerson": "All EESA Students",
    "Date": "24th September 2019"
},{
    "SrNo": 2,
    "DetailsOfActivity": "Resume Writing and Self Introductory Video making Competition",
    "ResourcePerson": "Mr. Rakesh Prasad, Senior Manager (Recruitment) KPIT",
    "Date": "9th November 2019"
},{
    "SrNo": 3,
    "DetailsOfActivity": "Teacher-Parent Meet",
    "ResourcePerson": "Department of Electronics Engg",
    "Date": "3rd November 2019"
},{
    "SrNo": 4,
    "DetailsOfActivity": "Workshop on ‘VLSI Mentorgraphics’",
    "ResourcePerson": "Mr.Mohit Shetty from Trident Labs. Pvt. Ltd",
    "Date": "25th-27th June 2019"
},{
    "SrNo": 5,
    "DetailsOfActivity": " Seminar on ‘Importance of CoCubes Test’",
    "ResourcePerson": "Miss Utkarsh Rajepandhare (Assistance Manager CoCubes).",
    "Date": "24th August 2019"
},{
    "SrNo": 6,
    "DetailsOfActivity": "Circuit gyan (Circuit Designing Competition)",
    "ResourcePerson": "All EESA Students",
    "Date": "16th February 2020"
},{
    "SrNo": 7,
    "DetailsOfActivity": "Workshop on “Model Based Design”",
    "ResourcePerson": "Mr.Prasanna Deshpande MathWorks Pune",
    "Date": "13 February 2020"
}
]

let Activities2 =[{
  "SrNo": 1,
  "TitleOfWorkshop": "Social innovation-I",
  "ResourcePerson": "Mr. Bhat Pravin, A senior Research Scientists from TCS",
  "Duration": "25/05/2018"
},{
  "SrNo": 2,
  "TitleOfWorkshop": "Social innovation-II",
  "ResourcePerson": "Mr. Vivek Agwani , Hon. Deputy Commissioner, Kolhapur District",
  "Duration": "15/06/2018"
},{
  "SrNo": 3,
  "TitleOfWorkshop": "GATE: A better opportunity for higher studies in India",
  "ResourcePerson": "Mr. Deshpande Mandar, GATE-FORUM Kolhapur",
  "Duration": "18/08/2018"
},{
  "SrNo": 4,
  "TitleOfWorkshop": "Interaction: A life at IIT",
  "ResourcePerson": "Mr. Pol Ravichand",
  "Duration": "16/09/2018"
},{
  "SrNo": 5,
  "TitleOfWorkshop": "Industrial visit To GOA",
  "ResourcePerson": "The National Institute of Oceanography",
  "Duration": "5/03/2019"
}
]

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
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Activities 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">
           


            <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">
        
                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                  
                <div className="mt-16 sm:ml-4 mb-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                PROGRAMS CONDUCTED DURING ACADEMIC YEAR 2019-20
                </div>

                  <div className="sm:hidden  gap-x-5 grid grid-cols-4 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                      <div className=" sm:hidden ml-20">Sr.No.</div>
                      <div className=" ">Details Of Activity</div>
                      <div className=" ">Resource Person</div>
                      <div className=" ">Date</div>
                      
                  </div> 

                    {Activities.map((item, index) => {
                      return (
                        <>
                        <div className="sm:hidden grid grid-cols-4 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                            <div className="">{item.DetailsOfActivity}</div>
                            <div className="">{item.ResourcePerson}</div>
                            <div className="">{item.Date}</div>
                    
                        </div>
                        <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-4 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                        
                          <div className="grid grid-cols-2">
                            <div className="text-slate-400">Sr.No.</div>   
                            <div className="">{item.SrNo}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Details Of Activity</div>
                            <div className="">{item.DetailsOfActivity}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Resource Person</div>  
                            <div className="">{item.ResourcePerson}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Date</div> 
                            <div className="">{item.Date}</div>      
                          </div>
                        </div>
                        </>
                      )
                    })}


<div className="mt-16 sm:ml-4 mb-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                LIST OF ACTIVITIES ARRANGED DURING ACADEMIC YEAR 2018-19
                </div>

                  <div className="sm:hidden  gap-x-5 grid grid-cols-4 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                      <div className=" sm:hidden ml-20">Sr.No.</div>
                      <div className=" ">Title of Workshop</div>
                      <div className=" ">Resource Person</div>
                      <div className=" ">Duration</div>
                      
                  </div> 

                    {Activities2.map((item, index) => {
                      return (
                        <>
                        <div className="sm:hidden grid grid-cols-4 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                            <div className="">{item.TitleOfWorkshop}</div>
                            <div className="">{item.ResourcePerson}</div>
                            <div className="">{item.Duration}</div>
                    
                        </div>
                        <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-4 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                        
                          <div className="grid grid-cols-2">
                            <div className="text-slate-400">Sr.No.</div>   
                            <div className="">{item.SrNo}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">TitleOfWorkshop</div>
                            <div className="">{item.TitleOfWorkshop}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Resource Person</div>  
                            <div className="">{item.ResourcePerson}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Duration</div> 
                            <div className="">{item.Duration}</div>      
                          </div>
                        </div>
                        </>
                      )
                    })}
            
                </section>


             {/* ---------------------------- */}
                <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard/>  </div>
            

            </div>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default ElectronicsEngineeringActivities
