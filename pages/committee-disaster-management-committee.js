import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const StaffCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name": "Mr. Amar A. Katkar",
      "Designation": "Assistant Professor,\nDept. of Environmental Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: atkar.amar@kitcoek.in\nMobile No: 9673027676",
      "Position": "Coordinator"
    },
    {
      "Sr.No": 2,
      "Name": "Mr. Bharat C. Ingavale",
      "Designation": "Assistant Professor,\nDept. of Environmental Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: harat_ingavale@yahoo.co.in\nMobile No: 9823644466",
      "Position": "Member"
    },
    {
      "Sr.No": 3,
      "Name": "Mr. Swapnil B. Mohite",
      "Designation": "Assistant Professor,\nDept. of Civil Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: wapncivil@gmail.com\nMobile No: 9326339545",
      "Position": "Member"
    },
    {
      "Sr.No": 4,
      "Name": "Mr. Navin S. Mahajan",
      "Designation": "Assistant Professor,\nDept. of Computer Science Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: avinmahajan123@gmail.com\nMobile No: 9480263091",
      "Position": "Member"
    },
    {
      "Sr.No": 5,
      "Name": "Mr. Ajay B. Kapse",
      "Designation": "Assistant Professor,\nDept. of CSE\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: kapse.ajay@kitcoek.in\nMobile No: 9226873047",
      "Position": "Member"
    },
    {
      "Sr.No": 6,
      "Name": "Mr. Vijaykumar A. Patil",
      "Designation": "Assistant Professor,\nDept. of Electronics Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: ijaykumarpatil18@hotmail.com\nMobile No: 9960625241",
      "Position": "Member"
    },
    {
      "Sr.No": 7,
      "Name": "Mr. Subodh S. Bhoite",
      "Designation": "Assistant Professor,\nDept. of Electronics & Telecommunication Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: hoitess@gmail.com\nMobile No: 9270226070",
      "Position": "Member"
    },
    {
      "Sr.No": 8,
      "Name": "Mr. Asif M. Qureshi",
      "Designation": "Assistant Professor,\nDept. of Mechanical Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: asif@rediffmail.com\nMobile No: 9423267969",
      "Position": "Member"
    },
    {
      "Sr.No": 9,
      "Name": "Mr. Amit S. Vaidya",
      "Designation": "Assistant Professor,\nDept. of Production Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: suvaidya@gmail.com\nMobile No: 9763076765",
      "Position": "Member"
    },
    {
      "Sr.No": 10,
      "Name": "Mr. Amar H. Tikole",
      "Designation": "Assistant Professor,\nDept. of Basic Science & Humanity\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: martikole@rediffmail.com\nMobile No: 9272319199",
      "Position": "Member"
    },
    {
      "Sr.No": 11,
      "Name": "Mrs. Rucha R. Kamat",
      "Designation": "Librarian, Central Library\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail: it.centrallibrary@gmail.com\nMobile No: 8408029922",
      "Position": "Member"
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
            Disaster Management Committee
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Disaster Management Committee 
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
