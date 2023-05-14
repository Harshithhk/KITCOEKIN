import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const IdeaLabAdvisoryCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name": "Mr. Sunil Kulkarni",
      "Designation": "Chairman, Kolhapur Institute of Technology, Kolhapur"
    },
    {
      "Sr.No": 2,
      "Name": "Mr. Sajid Hudli",
      "Designation": "Vice Chairman, Kolhapur Institute of Technology, Kolhapur"
    },
    {
      "Sr.No": 3,
      "Name": "Mr.Dipak Chougule",
      "Designation": "Secretary, Kolhapur Institute of Technology, Kolhapur"
    },
    {
      "Sr.No": 4,
      "Name": "Mr. Chandrashekhar Dolli",
      "Designation": "Chairman, Mayura Steels"
    },
    {
      "Sr.No": 5,
      "Name": "Mr. C.G. Ranade",
      "Designation": "VP, KOEL,"
    },
    {
      "Sr.No": 6,
      "Name": "Mr. Milind Khare",
      "Designation": "Plant Manager, WILO"
    },
    {
      "Sr.No": 7,
      "Name": "Mr. Sangram Patil",
      "Designation": "MD, Marvelous Engineering"
    },
    {
      "Sr.No": 8,
      "Name": "Mr. Mangesh Patil",
      "Designation": "MD, Maurya Industries Pvt. Ltd."
    },
    {
      "Sr.No": 9,
      "Name": "Mr. Sanjeev Tungatkar",
      "Designation": "Director, Ceraflux India Pvt. Ltd"
    },
    {
      "Sr.No": 10,
      "Name": "Mr. Niraj Zanvar",
      "Designation": "MD, Zanvar Group"
    },
    {
      "Sr.No": 11,
      "Name": "Mr. Deepak Dhadooti",
      "Designation": "MD, Servo Control Aerospace"
    },
    {
      "Sr.No": 12,
      "Name": "Mr. Sachin Shirgaonkar",
      "Designation": "MD, S.B. Reshellars"
    },
    {
      "Sr.No": 13,
      "Name": "Mr. Nikhil Padate",
      "Designation": "JANGS Technologies,Ichalkaranji,"
    },
    {
      "Sr.No": 14,
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
            MAYURA AICTE IDEA LAB ADVISORY COMMITTEE
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> ADVISORY COMMITTEE 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className=" mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30  mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-3 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name</div>
              <div className=" ">Designation</div>

          
          </div> 

            {Committee.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-3 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr.No"]}</div>
                    <div className="">{item["Name"]}</div>
                    <div className="">{item["Designation"]}</div>
              
                    
                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-1 gap-y-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item["Sr.No"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Name</div>
                    <div className="">{item["Name & Address"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Designation</div>  
                    <div className="">{item["Designation"]}</div>      
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
