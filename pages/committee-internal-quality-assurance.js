import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const StaffCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name": "Dr. Vilas V. Karjinni",
      "Designation": "Director,\nKolhapur Institute of Technology’s College of Engineering (Autonomous), Kolhapur.",
      "Position": "Chairman"
    },
    {
      "Sr.No": 2,
      "Name": "Mr. Dipak L. Chougule",
      "Designation": "Secretary,\nKolhapur Institute of Technology Kolhapur.",
      "Position": "Member,\nKIT Management"
    },
    {
      "Sr.No": 3,
      "Name": "Mr. Deepali K. Jadhav",
      "Designation": "Asst. Prof.,\nDept. of Computer Science and Engg. Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Coordinator, IQAC"
    },
    {
      "Sr.No": 4,
      "Name": "Dr. Rajanish. K. Kamat",
      "Designation": "Professor,\nDepartment of Electronics, Shivaji University, Kolhapur",
      "Position": "Member, Academia"
    },
    {
      "Sr.No": 5,
      "Name": "Mr. Sudhir S. Bakare",
      "Designation": "Technical Director,\nMarvelous Engineers Pvt. Ltd. Kolhapur",
      "Position": "Member, Alumni"
    },
    {
      "Sr.No": 6,
      "Name": "Mr. Sandip Tashildar",
      "Designation": "Maintenance Engineer,\nRohan Industries Pvt. Ltd. Kolhapur",
      "Position": "Member, Industry"
    },
    {
      "Sr.No": 7,
      "Name": "Mrs. Tanuja N. Shipurkar",
      "Designation": "NGO Member, Social worker",
      "Position": "Member,\nCommunity Service"
    },
    {
      "Sr.No": 8,
      "Name": "Dr. Mahesh S. Chavan",
      "Designation": "Prof. Dean (Academic), Dept. of Electronics Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 9,
      "Name": "Dr. Shivling M. Pise",
      "Designation": "Prof. Dean (Research Development), Dept. of Mechanical Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 10,
      "Name": "Dr. Yuvraj M. Patil",
      "Designation": "Prof. Dean(Examination Evaluation), Dept. of Electronics Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 11,
      "Name": "Mr. Subhash S. Mane",
      "Designation": "Asso. Prof. Dean (Alumni and Corporate Relations),\nDept. of Mechanical Engg. Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 12,
      "Name": "Dr. Prashant P. Powar",
      "Designation": "Asst. Prof. Dean (Quality Assurance), Dept. of Production Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 13,
      "Name": "Dr. Akshay R. Thorvat",
      "Designation": "Asso.Prof., Head Dean (Student Activity) Dept. of Environmental Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 14,
      "Name": "Dr. Manoj M. Mujumdar",
      "Designation": "Registrar and Prof. Dept. of Civil Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member, Administration"
    },
    {
      "Sr.No": 15,
      "Name": "Mr. Vijay A. Desai",
      "Designation": "Accountant,\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member, Administration"
    },
    {
      "Sr.No": 16,
      "Name": "Mr. Rutuparna P. Karkare",
      "Designation": "Asst. Prof. Head,\nDept. of Biotechnology Engg. Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 17,
      "Name": "Mr. Mohan A. Chavan",
      "Designation": "Asso. Prof. Head, Dept. of Civil Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 18,
      "Name": "Mr. Ajit S. Patil",
      "Designation": "Asso. Prof. Head,\nDept. Computer Science and Engineering Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous),\nKolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 19,
      "Name": "Dr. Manasi R. Dixit",
      "Designation": "Prof. Head,\nDept. of Electrical Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 20,
      "Name": "Dr. Sangeeta R. Chougule",
      "Designation": "Prof. Head,\nDept. of Electronics and Tele. Engg. Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 21,
      "Name": "Dr. Uday S. Bhapkar",
      "Designation": "Prof. Head,\nDept. of Mechanical Engg. Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 23,
      "Name": "Mr. Tanaji. B. Patil",
      "Designation": "Asso. Prof. and Head,\nDept. of Information Technology Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 24,
      "Name": "Mr. Sheetal S.Varur",
      "Designation": "Asst. Prof.\nDept. of Civil Engg.\nKolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 25,
      "Name": "Mrs. Ranjeeta B. Pandhare",
      "Designation": "Asst. Prof.,\nDept. of Computer Science and Engg. Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 26,
      "Name": "Mr. Sameer S. Nagtilak",
      "Designation": "Asst. Prof.,\nDept. of Electronics and Telecomm. Engg. Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 27,
      "Name": "Dr. Mahesh B. Shinde",
      "Designation": "Asst. Prof.\nDept. of Basic Science and Humanities Kolhapur Institute of Technology’s\nCollege of Engineering (Autonomous), Kolhapur.",
      "Position": "Member"
    },
    {
      "Sr.No": 28,
      "Name": "Mr. Abhay S. Singh",
      "Designation": "Student,\nS.Y. Environmental Engineering Kolhapur Institute of Technology’s\nCollege of Engineering(Autonomous), Kolhapur.",
      "Position": "Member, Student"
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
            Internal Quality Assurance Committee
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Internal Quality Assurance Committee 
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
