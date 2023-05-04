import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const IdeaLabStudentAmbasadoors = () => {
  let Students = [{
    "SrNo": 1,
    "StudentName": "Abhishek Shashikant Patil  ",
    "Class": "T. Y. CSE"
},{
    "SrNo": 2,
    "StudentName": "Rutwik Prakash Deshpande",
    "Class": "T. Y. CSE"
},{
    "SrNo": 3,
    "StudentName": "Ninad Anand Shelke",
    "Class": "T. Y. CSE"
},{
    "SrNo": 4,
    "StudentName": "Ketan Prakash Kokitkar ",
    "Class": "T. Y. CSE"
},{
    "SrNo": 5,
    "StudentName": "Rupesh Ravindra Patil",
    "Class": "T. Y. CSE"
},{
    "SrNo": 6,
    "StudentName": " Amey Umesh Kumbhar",
    "Class": "T. Y. CSE"
},{
    "SrNo": 7,
    "StudentName": "Nitin Bhimrao Nesarkar",
    "Class": "T. Y. CIVIL"
},{
    "SrNo": 8,
    "StudentName": "Gayatri Chandrakant Ayarekar",
    "Class": "T. Y. CIVIL"
},{
    "SrNo": 9,
    "StudentName": "Srushthi Vinay Latkar",
    "Class": "T. Y. CIVIL"
},{
    "SrNo": 10,
    "StudentName": "Abhishek Sanjay Mohite",
    "Class": "T. Y. CIVIL"
},{
    "SrNo": 11,
    "StudentName": " Vaishnavi Mohan",
    "Class": "T. Y. CIVIL"
},{
    "SrNo": 12,
    "StudentName": "Neha Devendra Pisal ",
    "Class": "S. Y. Mechanical"
},{
    "SrNo": 13,
    "StudentName": " Sakshi Prakash Burute",
    "Class": "S. Y. Mechanical"
},{
    "SrNo": 14,
    "StudentName": "Prathmesh Deepak Kumbhar",
    "Class": "T. Y. Mechanical"
},{
    "SrNo": 15,
    "StudentName": "Sahil Hemant Nalawade",
    "Class": "T. Y. Mechanical"
},{
    "SrNo": 16,
    "StudentName": "Atharv Mahendra Mule",
    "Class": "T. Y. Mechanical"
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
              <div className=" ">Student Name </div>
              <div className=" ">Class </div>
              
          </div> 

            {Students.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-3 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item.SrNo}</div>
                    <div className=" ">{item.StudentName} </div>
                    <div className="">{item.Class}</div>
                       
                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-3 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item.SrNo}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Student Name</div>
                    <div className="">{item.StudentName}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Class</div>
                    <div className="">{item.Class}</div>      
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

export default IdeaLabStudentAmbasadoors
