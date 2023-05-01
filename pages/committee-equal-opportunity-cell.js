import DefaultLayout from "../components/DefaultLayout"
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
      "Name": "Dr. Akshay R. Thorvat",
      "Designation": "Asso. Prof.\nDept. of Environmental Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : akshaythorvat@yahoo.co.in\nMob. No. : 9175886755",
      "Position": "Member-Faculty."
    },
    {
      "Sr.No": 3,
      "Name": "Mrs. Jahida N. khan",
      "Designation": "Asst. Prof.\nDept. of Mechanical Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : khan.jahida@kitcoek.in\nMob. No. : 9922649594",
      "Position": "Member-Faculty."
    },
    {
      "Sr.No": 4,
      "Name": "Mr. Shah Shailesh Jayantilal",
      "Designation": "Asst. Prof.\nDept. of Production Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur",
      "Position": "Member-Faculty."
    },
    {
      "Sr.No": 5,
      "Name": "Mr. Pandurang. S. Patil",
      "Designation": "Lab Technician,\nDept. of Civil Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : pspatil759@gmail.com\nMob. No. : 9422620960",
      "Position": "Member-Staff."
    },
    {
      "Sr.No": 6,
      "Name": "Mr.Tambe Vishwa Vijay",
      "Designation": "Student,\nD.S. (Mechanical Engineering.)\nEmail ID : tambevishwa@gmail.com \nMob. No. : 9307671093/8208264964",
      "Position": "Member-Student."
    },
    {
      "Sr.No": 7,
      "Name": "Mr.Patil Jyotiraditya Shivaji Niwas",
      "Designation": "Student,\nF.Y.B.Tech. (Computer Sci. & Engineering.)\nEmail ID : ar.neelpatil@gmail.com\nMob. No. : 9420622303",
      "Position": "Member-Student."
    },
    {
      "Sr.No": 8,
      "Name": "Dr. Manoj M. Mujumdar",
      "Designation": "Registrar,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : kitcoek.registrar@gmail.com\nMob. No. : 7378631199",
      "Position": "Member-Secretary."
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
            Equal Opportunity Cell
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Equal Opportunity Cell
 
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
