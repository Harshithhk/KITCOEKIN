import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const StaffCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name": "Dr. V.V. Karjinni",
      "Designation": "Chairman",
      "Position": "Director\nKIT’s Institute of Engg."
    },
    {
      "Sr.No": 2,
      "Name": "Dr. Chetan S. Jarali",
      "Designation": "Member, Research Inst.",
      "Position": "Senior Scientist, National Aerospace Laboratory, CSIR, Bangalore"
    },
    {
      "Sr.No": 3,
      "Name": "Dr. Shrishail B. Andinni",
      "Designation": "Member, Civil Engg.",
      "Position": "Principal, Vijaya Vittala Institute of Technology, Bangalore"
    },
    {
      "Sr.No": 4,
      "Name": "Dr. Sachin D. Kore",
      "Designation": "Member, IIT",
      "Position": "Associate Professor, Dept. of Mech. Engg., IIT Guwahati"
    },
    {
      "Sr.No": 5,
      "Name": "Dr. S.M. Pise",
      "Designation": "Dean R & D",
      "Position": "Professor & Head\nDept. of Mechanical Engg."
    },
    {
      "Sr.No": 6,
      "Name": "Dr. D. J. Sathe",
      "Designation": "Member",
      "Position": "Associate Professor, Dept. of Basic Sciences & Humanities"
    },
    {
      "Sr.No": 7,
      "Name": "Mr. A.R. Nigvekar",
      "Designation": "Member",
      "Position": "Associate Professor\nDept. -Electronics Engg."
    },
    {
      "Sr.No": 8,
      "Name": "Mr. A.S. Patil",
      "Designation": "Member",
      "Position": "Associate Professor\nDept. of Information Technology"
    },
    {
      "Sr.No": 9,
      "Name": "Dr. U. S. Bhapkar",
      "Designation": "Member",
      "Position": "Professor\nDept. of Production Engg."
    },
    {
      "Sr.No": 10,
      "Name": "Dr. Akshay Thorwat",
      "Designation": "Member",
      "Position": "Assistant Professor\nDept. of Civil Engg."
    },
    {
      "Sr.No": 11,
      "Name": "Mrs. M.N. Sarnobat",
      "Designation": "Member",
      "Position": "Assistant Professor\nDept. of Environmental Engg."
    },
    {
      "Sr.No": 12,
      "Name": "Mr. M.D. Sontakke",
      "Designation": "Member",
      "Position": "Assistant Professor\nDept. of ETC"
    },
    {
      "Sr.No": 13,
      "Name": "Mr. A. M. Qureshi",
      "Designation": "Member",
      "Position": "Assistant Professor\nDept. of Mechanical Engg."
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
            Research and Development Committee
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Research and Development Committee
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className=" max-w-fit mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30  mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name</div>
              <div className=" ">Designation</div>
              <div className=" ">Position</div>
          
          </div> 

            {Committee.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr.No"]}</div>
                    <div className="">{item["Name"]}</div>
                    <div className="">{item["Designation"]}</div>
                    <div className="">{item["Position"]}</div>
                    
                </div>
                <div className=" sm:grid 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
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
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Position</div> 
                    <div className="">{item["Position"]}</div>      
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

export default StaffCommittee
