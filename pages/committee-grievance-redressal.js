import DefaultLayout from "../components/DefaultLayout"
import GrievanceRedressalForm from "../sections/apply/grievanceRedressalForm"
import Footer from "../sections/home-page/Footer"

const StaffCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name": "Dr.Mohan B.Vanarotti",
      "Designation": "Director,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID- mohan1.bv@gmail.com\nMobile No. 9902544599",
      "Position": "Chairman"
    },
    {
      "Sr.No": 2,
      "Name": "Dr. Manoj M. Mujumdar",
      "Designation": "Registrar,\nKIT's College of Engg. (Autonomous), Kolhapur\nPh. No. (O) 0231-2636202\nEmail ID : mmmujumdar@gmail.com\nMob. No. : 7378631199",
      "Position": "Member"
    },
    {
      "Sr.No": 3,
      "Name": "Dr. Sachin H.Dhanani",
      "Designation": "Assistant Professor in Mathematics\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : dhanani.sachin@kitcoek.in\nMob. No. : 9890659559",
      "Position": "Nodal Officer"
    },
    {
      "Sr.No": 4,
      "Name": "Dr. Akshay R. Thorvat",
      "Designation": "Associate Professor,\nDept. of Environmental Engg.\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : akshaythorvat@yahoo.co.in\nMob. No. : 9175886755",
      "Position": "Member"
    },
    {
      "Sr.No": 5,
      "Name": "Mr.Bhushan S.Kamble",
      "Designation": "Assistant Professor\nDept.of Mechanical Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : kamble.bhushan@kitcoek.in\nMob. No. : 7709717688",
      "Position": "Member"
    },
    {
      "Sr.No": 6,
      "Name": "Miss.Shruti Rupesh Patil.",
      "Designation": "Student – F.E. B.Tech.\nDepartment Electronics & Telecommunication,\nMobile No. 7499376546\nE-mail ID : paripatil2424@gmail.com",
      "Position": "Member"
    },
    {
      "Sr.No": 7,
      "Name": "Ms. Poonam K. Sawant",
      "Designation": "Jr. Accounts Officer,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : poonam14387@gmail.com\nMob. No. : 9423043808",
      "Position": "Member - Secretary"
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
            Grievance Redressal Committee
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Grievance Redressal Committee 
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
            <GrievanceRedressalForm />
          </section>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default StaffCommittee
