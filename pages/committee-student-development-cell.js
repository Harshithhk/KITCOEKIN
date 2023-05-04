import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const StaffCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name": "Mr. S. S. Karidkar",
      "Designation": "Asst. Professor, Dept. of Mechanical Engineering Kolhapur Institute of Technologys\nCollege of Engineering (Autonomous), Kolhapur Mob. No. : 7588064952\nEmail : karidkar.sunil@kitcoek.in",
      "Position": "Chairman, Nominee Director"
    },
    {
      "Sr.No": 2,
      "Name": "Mr. A. S. Vaidya",
      "Designation": "Asst. Professor, Dept. of Production Engineering Kolhapur Institute of Technologys\nCollege of Engineering (Autonomous), Kolhapur Mob. No. : 9763076765\nEmail : asuvaidya@gmail.com",
      "Position": "Member Nominee Director"
    },
    {
      "Sr.No": 3,
      "Name": "Mrs. V. R. Patil",
      "Designation": "Asst. Professor, Dept. of Information Technology Kolhapur Institute of Technologys\nCollege of Engineering (Autonomous), Kolhapur Mob. No. : 8983124778\nEmail : vbpatil@gmail.com",
      "Position": "Member, Lady Faculty"
    },
    {
      "Sr.No": 4,
      "Name": "Mrs. T. N. Shipurkar",
      "Designation": "Secretary of an NGO working for women's Welfare, Mahila Dakshta Samiti.\nMob. No. : 9370323032",
      "Position": "Member, Social Worker"
    },
    {
      "Sr.No": 5,
      "Name": "Dr. S. S. Diwan",
      "Designation": "Family Doctor & Counselor, Diwan Towers, 416 B, Mangalwar Peth, Kolhapur\nMob. No. : 9420931166, 0231-2542606\nEmail : shubhada.diwan@gmail.com",
      "Position": "Member, Counselor"
    },
    {
      "Sr.No": 6,
      "Name": "Mr. Sourabh Joshi",
      "Designation": "Asst. Professor,\nDept. of Environmental Engg.\nKolhapur Institute of Technology’s College of Engineering (Autonomous), Kolhapur\nMob. No. : 9028486124\nEmail : joshi.sourabh@kitcoek.in",
      "Position": "Secretary,\nStudent Development Committee"
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
            STUDENT DEVELOPMENT CELL
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> STUDENT DEVELOPMENT CELL 
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
