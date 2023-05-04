import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const StaffList = () => {
  let ElectPhd = [{
    "SrNo": 1,
    "NameOfGuides": "Dr. Mrs. S. R. Chougule"
},{
    "SrNo": 2,
    "NameOfGuides": "Dr. Y. M. Patil"
},{
    "SrNo": 3,
    "NameOfGuides": "Dr. M. S. Chavan"
},{
    "SrNo": 1,
    "NameOfGuides": "Dr. M. R. Dixit"
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
          <div className="sm:hidden grid grid-cols-2 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name Of Guides</div>
              
          </div> 

            {ElectPhd.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-2 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item.SrNo}</div>
                    <div className="">{item.NameOfGuides}</div>
                       
                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-2 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item.SrNo}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Name Of Guides</div>
                    <div className="">{item.NameOfGuides}</div>      
                  </div>
                 
                </div>
                
                </>
              )
            })}
             <a href="documents/admission/phdProgram/Final students enroll Laboratory Recognition Ph_ D_ - Electronics Dept_ web site.pdf" className="py-8 text-base text-primary ml-4 flex hover:cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="  w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
 List of Research Scholars</a>
          </section>
         
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default StaffList
