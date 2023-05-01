import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const StaffCommittee = () => {
  let Committee = [
    {
      "Sr.No": 1,
      "Name": "Mr. Sunil Kulkarni",
      "Designation": "Chairman,\nKolhapur Institute of Technology, Kolhapur\nEmail ID : syco_kolhapur@yahoo.com\nMob. No. : 9823171542",
      "Position": "Chairman, Nominee, KIT Trust."
    },
    {
      "Sr.No": 2,
      "Name": "Mr. Dipak L. Chougule",
      "Designation": "Secretary, Kolhapur Institute of Technology, Kolhapur\nEmail ID : dipakchougule72@gmail.com\nMob. No. : 9326677999",
      "Position": "Member, Nominee, KIT Trust."
    },
    {
      "Sr.No": 3,
      "Name": "Dr. Uday S. Bhapkar",
      "Designation": "Professor,\nDept. of Mechanical Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : bhapkar.udaysinh@kitcoek.in\nMob. No. : 9422045934",
      "Position": "Member, Nominee,"
    },
    {
      "Sr.No": 4,
      "Name": "Dr. Yuvraj M. Patil",
      "Designation": "Professor and Dean Examinations & Evaluation,\nDept. of Electronics Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : patil.yuvraj@kitcoek.in \nMob. No. : 9420455905",
      "Position": "Member, Representative, Faculty"
    },
    {
      "Sr.No": 5,
      "Name": "Mr. Sanjay V. Lipare",
      "Designation": "Asso. Professor,\nDept. of Civil Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : lipare.sanjay@kitcoek.in \nMob. No. : 9822440109",
      "Position": "Member, Representative, Faculty"
    },
    {
      "Sr.No": 6,
      "Name": "",
      "Designation": "",
      "Position": "Member, Representative (Woman), Faculty"
    },
    {
      "Sr.No": 7,
      "Name": "Mr. Vijay J. Patole",
      "Designation": "Jr. Clerk, Office,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : vijaypatole3@gmail.com \nMob. No. : 9421106779",
      "Position": "Member, Representative, Non-Teaching staff"
    },
    {
      "Sr.No": 8,
      "Name": "Dr. B. M. Hirdekar",
      "Designation": "Former Registrar,\nSanjay Ghodawat University, Kolhapur.\nEmail ID: hirdekarbm@gmail.com\nMob. No. : 8862005268",
      "Position": "Member, Representative, Education"
    },
    {
      "Sr.No": 9,
      "Name": "Mr. Vilas N. Deshpande",
      "Designation": "Non-executive Chairman,\nFounder Director,\nSound Castings Pvt. Ltd, Kolhapur\nEmail ID : vnd@soundcastings.com \nMob. No. : 9371667931",
      "Position": "Member, Representative, Industry"
    },
    {
      "Sr.No": 10,
      "Name": "Mr. Deepak Dhadoti",
      "Designation": "Servo controls aerospace India Pvt. Ltd.\nBelagavi, Karnataka, India\nEmail ID : pnmsat@servocontrolsindia.com \nMob. No. : 9448395864",
      "Position": "Member, Representative, Research"
    },
    {
      "Sr.No": 11,
      "Name": "Mrs. Sadhana Zadbuke",
      "Designation": "NGO “Sanvedana”\nSocial Worker, Kolhapur\nEmail ID : sadhana.zadbuke@gmail.com\nMob. No. : 9422076262",
      "Position": "Member, Representative, Social Service"
    },
    {
      "Sr.No": 12,
      "Name": "Mrs. Deepali K. Jadhav",
      "Designation": "Asst. Professor,\nDept. of Computer Science & Engg.,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : jadhav.deepali@kitcoek.in\nMob. No. : 9158580202",
      "Position": "Member, Coordinator Internal Quality Assurance Committee"
    },
    {
      "Sr.No": 13,
      "Name": "-----",
      "Designation": "",
      "Position": "Member, President and Secretary of the College Students’ Council"
    },
    {
      "Sr.No": 14,
      "Name": "Dr. Vilas V. Karjinni",
      "Designation": "Executive Director,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : karjinni@gmail.com \nMob. No. : 9422747499",
      "Position": "Member - Invitee"
    },
    {
      "Sr.No": 15,
      "Name": "Dr.Mohan B.Vanarotti",
      "Designation": "Director,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : mohan1.bv@gmail.com\nMob. No. : 9902544599",
      "Position": "Member - Secretary"
    },
    {
      "Sr.No": 17,
      "Name": "Dr. M. M. Mujumdar",
      "Designation": "Registrar,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : kitcoek.registrar@gmail.com\nMob. No. : 7378631199",
      "Position": "Member - Invitee"
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
            College Development Committee
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> College Development Committee 
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
