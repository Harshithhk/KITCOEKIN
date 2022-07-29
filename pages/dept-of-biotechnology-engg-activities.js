import DefaultLayout from "../components/DefaultLayout"
import BiotechnologyEngineering from "../components/Navbar/departments/biotechnologyEngineering"
import QuickLinks from "../components/QuickLinks"
import Career from "../sections/departments/biotech/career"
import QuickLinksCard from "../sections/departments/biotech/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const BiotechnologyEngineeringActivities = () => {
  let Activities = [{
    "SrNo": 1,
    "Name": "Mr. Giridhar Revankar",
    "Designation": "BE (Biotech), MS (Env.) EHS Officer in Australia",
    "Topic": "Career opportunities in Env. Biotech. In Australia",
    "Date": "21-08-2019"
  },{
    "SrNo": 2,
    "Name": "Mr. Swanand Gulwani",
    "Designation": "BE (Biotech)Job at Wockhardt Aurangabad and STGenetics Pune",
    "Topic": "Insulin ( Biopharma drug) Purification",
    "Date": "04-09-2019"
  },{
    "SrNo": 3,
    "Name": "Mr. Samarthgirish Pawaskar",
    "Designation": "BE (Biotech) , LLB (IPR) IITKh Patent agent and consultant at BASF Mumbai",
    "Topic": "IPR and Opportunities in IPR field",
    "Date": "06-09-2019"
  },{
    "SrNo": 4,
    "Name": "Ms. Gauri Wali",
    "Designation": "Recent Alumnus",
    "Topic": "Higher Education in Germany",
    "Date": "17-07-2019"
  },{
    "SrNo": 5,
    "Name": "Nisha Barge",
    "Designation": "Recent Alumnus",
    "Topic": "GATE Exam preparations",
    "Date": "10-07-2019"
  },{
    "SrNo": 6,
    "Name": "Revati More",
    "Designation": "Recent Alumnus",
    "Topic": "GATE Exam preparations",
    "Date": "10-07-2019"
  },{
    "SrNo": 7,
    "Name": "Saurabh Desai",
    "Designation": "Recent Alumnus",
    "Topic": "GATE Exam preparations",
    "Date": "10-07-2019"
  },{
    "SrNo": 8,
    "Name": "Ms. Viraj Sangoi",
    "Designation": "BE (Biotech), M Tech (Biotech)",
    "Topic": "Career opportunities in Pharmacovigilence and Clinical Data Mgmt.",
    "Date": "11-01-2020"
  },{
    "SrNo": 9,
    "Name": "Ms.Vaishnavi Chavan",
    "Designation": "BE (Biotech), pursuing MS in Regulatory Affairs In Northeastern University USA",
    "Topic": "Career in Regulatory Domain",
    "Date": "11-01-2020"
  },{
    "SrNo": 10,
    "Name": "Dr. Kushal Satpute",
    "Designation": "Principal Scientist, BIOCON",
    "Topic": "Advances in Enzyme Technology",
    "Date": "08-02-2020"
  },{
    "SrNo": 11,
    "Name": "Shashikant Kamble",
    "Designation": "BE (Biotech)/ Entreprenuership in Agri. Biotechnology",
    "Topic": "Entrepreneurship in Biofertilizer & Biopesticides Business",
    "Date": "10-04-2020"
  },{
    "SrNo": 12,
    "Name": "Anikhindi Vishvesh",
    "Designation": "BE (Biotech) ME (Biotechnology) from BITS Pilani Goa campus",
    "Topic": "Clone Development Process",
    "Date": "10-06-2020"
  },{
    "SrNo": 13,
    "Name": "Sneha Deshpande",
    "Designation": "BE (Biotech) Mtech (Food Biotech) from ICT Mumbai",
    "Topic": "Importance of Higher Education : How to Approach GATE",
    "Date": "10-10-2020"
  },{
    "SrNo": 14,
    "Name": "Dr. Rahul Patil",
    "Designation": "BE (Biotech), CEO and Director My Lab Discovery Solutions Pvt. Ltd. Pune",
    "Topic": "Entrepreneurial Journey of Establishing Diagnostics Industry",
    "Date": "23-08-2021"
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
                  <div className="sm:hidden  gap-x-5 grid grid-cols-5 items-center text-slate-500 justify-items-start mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
                      <div className=" sm:hidden ml-20">Sr.No.</div>
                      <div className=" ">Name</div>
                      <div className=" ">Topic</div>
                      <div className=" ">Designation</div>
                      <div className=" ">Date</div>
                      
                  </div> 

                    {Activities.map((item, index) => {
                      return (
                        <>
                        <div className="sm:hidden grid grid-cols-5 items-center justify-items-start gap-x-5 sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                            <div className=" sm:hidden ml-20">{item.SrNo}</div>
                            <div className="">{item.Name}</div>
                            <div className="">{item.Designation}</div>
                            <div className="">{item.Topic}</div>
                            <div className="">{item.Date}</div>
                        </div>
                        <div className=" sm:grid 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                        
                          <div className="grid grid-cols-2">
                            <div className="text-slate-400">Sr.No.</div>   
                            <div className="">{item.SrNo}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Name</div>
                            <div className="">{item.Name}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Designation</div>  
                            <div className="">{item.Designation}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Topic</div> 
                            <div className="">{item.Topic}</div>      
                          </div>
                          <div className="grid grid-cols-2">
                          <div className=" text-slate-400">Date</div> 
                            <div className="">{item.Date}</div>      
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

export default BiotechnologyEngineeringActivities
