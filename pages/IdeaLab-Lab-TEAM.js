import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const IdeaLabTeam = () => {
  let Committee =[
    {
      "Sr.No": 1,
      "Name": "Dr. V.V. Karjinni",
      "Designation": "Director",
      "Role": "Chief Mentor"
    },
    {
      "Sr.No": 2,
      "Name": "Dr. S.M. Pise",
      "Designation": "Dean R & D",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 3,
      "Name": "Dr. U. S. Bhapkar",
      "Designation": "Professor\nDept. of Mechanical Engg.",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 4,
      "Name": "Dr. Akshay Thorwat",
      "Designation": "Assoc. Professor and Head,\nDept. of Civil and Environmental Engg.",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 5,
      "Name": "Dr. M.S. Chavan",
      "Designation": "Professor, Dept. of ETC",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 6,
      "Name": "Dr. (Mrs.) M.S. Kalas",
      "Designation": "Professor and Head\nDept. of Computer Science Engg.",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 7,
      "Name": "Dr. (Mrs.) Pallavi S. Patil",
      "Designation": "Assoc. Professor and Head,\nDept. of Biotechnology",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 8,
      "Name": "Dr. M.M. Mujumdar",
      "Designation": "Registrar and Professor,\nDept. of Civil Engg.",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 9,
      "Name": "Dr. D.J. Sathe",
      "Designation": "Assoc. Professor and Head,\nDept. of BSH",
      "Role": "Coordinator"
    },
    {
      "Sr.No": 10,
      "Name": "Dr. Sunil S. Shah",
      "Designation": "Assoc. Professor,\nDept. of Civil and Environmental Engg.",
      "Role": "Co-Coordinator"
    },
    {
      "Sr.No": 11,
      "Name": "Dr. V.A. Swami",
      "Designation": "Assoc. Professor,\nDept. of Civil Engg.",
      "Role": "Co-Coordinator"
    },
    {
      "Sr.No": 12,
      "Name": "Dr. S.S. Shinde",
      "Designation": "Assoc. Professor\nDept. of Mechanical Engg.",
      "Role": "Co-Coordinator"
    },
    {
      "Sr.No": 13,
      "Name": "Dr. Sangita R. Chougule",
      "Designation": "Professor and Dean P. G. & Research,\nDept. of ETC",
      "Role": "Co-Coordinator"
    },
    {
      "Sr.No": 14,
      "Name": "Dr. Rajesh Jorgewad",
      "Designation": "Assistant professor\nDept. of Boitech",
      "Role": "Co-Coordinator"
    },
    {
      "Sr.No": 15,
      "Name": "Dr. Sarkar A.R.",
      "Designation": "Professor and Dean ACR\nDept. of Computer Science Engg.",
      "Role": "Co-Coordinator"
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
            MAYURA AICTE IDEA LAB TEAM
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span>  Lab Team
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="  mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30  mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name</div>
              <div className=" ">Designation</div>
              <div className=" ">Role</div>

          
          </div> 

            {Committee.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr.No"]}</div>
                    <div className="">{item["Name"]}</div>
                    <div className="">{item["Designation"]}</div>
                    <div className="">{item["Role"]}</div>

                    
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
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Role</div>  
                    <div className="">{item["Role"]}</div>      
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

export default IdeaLabTeam
