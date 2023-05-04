import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const IdeaLabAdvisoryCommittee = () => {
  let Comittee = [{
    "SrNo": 1,
    "Name": "Mr. Sunil Kulkarni",
    "Designation": "Chairman, Kolhapur Institute of Technology, Kolhapur"
},{
    "SrNo": 2,
    "Name": "Mr. Sajid Hudli",
    "Designation": "Vice Chairman, Kolhapur Institute of Technology, Kolhapur"
},{
    "SrNo": 3,
    "Name": "Mr.Dipak Chougule",
    "Designation": "Secretary, Kolhapur Institute of Technology, Kolhapur"
},{
    "SrNo": 4,
    "Name": "Mr. Chandrashekhar Dolli",
    "Designation": "Chairman, Mayura Steels"
},{
    "SrNo": 5,
    "Name": "Mr. C.G. Ranade",
    "Designation": "VP, KOEL,"
},{
    "SrNo": 6,
    "Name": "Mr. Milind Khare",
    "Designation": "Plant Manager, WILO"
},{
    "SrNo": 7,
    "Name": "Mr. Sangram Patil",
    "Designation": "MD, Marvelous Engineering"
},{
    "SrNo": 8,
    "Name": "Mr. Mangesh Patil",
    "Designation": "MD, Maurya Industries Pvt. Ltd."
},{
    "SrNo": 9,
    "Name": "Mr. Sanjeev Tungatkar",
    "Designation": "Director, Ceraflux India Pvt. Ltd"
},{
    "SrNo": 10,
    "Name": "Mr. Niraj Zanvar",
    "Designation": "MD, Zanvar Group"
},{
    "SrNo": 11,
    "Name": "Mr. Deepak Dhadooti",
    "Designation": "MD, Servo Control Aerospace"
},{
    "SrNo": 12,
    "Name": "Mr. Sachin Shirgaonkar",
    "Designation": "MD, S.B. Reshellars"
},{
    "SrNo": 13,
    "Name": "Mr. Nikhil Padate",
    "Designation": "JANGS Technologies,Ichalkaranji,"
},{
    "SrNo": 14,
    "Name": "Mr. R. B. Suryawanshi",
    "Designation": "Sr. Chief Executive, B. G. Shirke Group Pune"
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
            Electronic Engineering - Ph.D. Center

          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <a href="/"><span className="hover:text-primary hover:cursor-pointer"> Home</span></a> <span className=" ">|</span> Ph.D. Center

          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="w-full mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30 w-full mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-3 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name </div>
              <div className=" ">Designation </div>
              
          </div> 

            {Comittee.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-3 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item.SrNo}</div>
                    <div className=" ">{item.Name} </div>
                    <div className="">{item.Designation}</div>
                       
                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-3 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
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
                 
                </div>
                </>
              )
            })}
          </section>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default IdeaLabAdvisoryCommittee
