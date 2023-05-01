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
      "Name": "Dr. Vilas. V. Karjinni",
      "Designation": "Executive Director,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : karjinni@yahoo.com, karjinni@gmail.com\nMob. No. : 9422747499",
      "Position": "Member - Invitee"
    },
    {
      "Sr.No": 3,
      "Name": "Dr. M. M. Mujumdar",
      "Designation": "Registrar,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : mujumdar.manoj@kitcoek.in\nMob. No. :7378631199",
      "Position": "Member"
    },
    {
      "Sr.No": 4,
      "Name": "Dr. P.N. Vasambekar",
      "Designation": "Professor,\nDept. of Electronics, Shivaji University, Kolhapur\nEmail : pnv_eln@unishivaji.ac.in\nMob. No. : 9420931541",
      "Position": "Member, Nominee, Shivaji University"
    },
    {
      "Sr.No": 5,
      "Name": "Dr. P.G. Sonavane",
      "Designation": "Professor,\nWalchand College of Engineering, Sangli\nEmail : pratap.sonavane@walchandsangli.in\ndeputy.director@walchandsangli.in\nMob. No. : 9822534868",
      "Position": "Member, Nominee, Shivaji University"
    },
    {
      "Sr.No": 6,
      "Name": "Dr. D.V.Kodavade",
      "Designation": "Professor,\nDept. of Computer Science & Engineering,\nDKTE’s Textile & Engineering Institute, Ichalkaraji.,br> Email : dvkodavade@gmail.com\nMob. No. : 9403310226",
      "Position": "Member, Nominee, Shivaji University"
    },
    {
      "Sr.No": 7,
      "Name": "Dr. D.B. Talange",
      "Designation": "Former Profesor and Head,\nDept. of Electrical Engineering,\nCollege of Engineering Pune, Wellesly road, Shivajinagar, Pune\nEmail : talanged@gmail.com\nMob. No. : 9325117504",
      "Position": "Member, Representative, Education and Research"
    },
    {
      "Sr.No": 8,
      "Name": "Mr. Akhilkumar Gupta",
      "Designation": "Director,\nAFCONS Infrastructure Limited, AFCONS house,\n16, Shah Industrial Estate, Veera Desai road,\nAzadnagar, Andheri(w), Mumbai-400053 Email : akhil.gupta@afcons.com,\nMob. No. : 9769365694",
      "Position": "Member, Representative, Industries"
    },
    {
      "Sr.No": 9,
      "Name": "Dr. Rajiv Narvekar",
      "Designation": "Practice Leader and Innovation Mangement,\nTata Management Training Centre, TMTC campus, 1, Mangaldas road,\nBehind Wadia college Campus, Sangamwadi, Pune\nEmail : rajivnarvekar@gmail.com, rnarvekar@tata.com\nMob. No. : 9225364060",
      "Position": "Member, Representative, Industries"
    },
    {
      "Sr.No": 10,
      "Name": "Mr. Anilkumar Jain",
      "Designation": "CEO, Sun Pharma Limited,\nSun Pharmaceuticals Industries Limited,\nSun House, CTS no. 201B/1, Western Express highway, Goregaon(E), Mumbai\nEmail : anilkumar.jain@sunpharma.com\nMob. No. :",
      "Position": "Member, Representative, Industries"
    },
    {
      "Sr.No": 11,
      "Name": "Mr. Rajendra T. Dunung",
      "Designation": "Director,\nDunung Industries Private Limited, 1325/91, Shivaji Udyamnagar, Kolhapur\nEmail : support@dunungindustries.in\nMob. No. : 9881252052",
      "Position": "Member, Representative, Industries"
    },
    {
      "Sr.No": 12,
      "Name": "Dr. Pramod Wangikar",
      "Designation": "Professor,\nDept. of Chemical Engineering,\nIndian Institute of Technology, Bombay Email : wangikar@iitb.ac.in\nMob. No. :",
      "Position": "Member, Representative, Education and Research"
    },
    {
      "Sr.No": 13,
      "Name": "Dr. Y.M. Patil",
      "Designation": "Dean, Examinations and Evaluations,\nProfessor, Dept. of Computer Science & Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : patil.yuvraj@kitcoek.in\nMob. No. : 9420455905",
      "Position": "Member"
    },
    {
      "Sr.No": 14,
      "Name": "Dr. P.P. Powar",
      "Designation": "Dean, Quality Assurance,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : powar.prashant@kitcoek.in\nMob. No. : 9049469090",
      "Position": "Member"
    },
    {
      "Sr.No": 15,
      "Name": "Dr. S.M. Pise",
      "Designation": "Dean, Research and Development,\nProfessor and Head,\nDepartment of Mechanical Engineering KIT's College of Engg. (Autonomous), Kolhapur\nEmail : pise.shivling@kitcoek.in\nMob. No. : 9423041428",
      "Position": "Member"
    },
    {
      "Sr.No": 16,
      "Name": "Dr. Amit Sarkar",
      "Designation": "Dean, ACR and Professor,\nDept. of Computer Science & Engineering,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : sarkar.amit@kitcoek.in\nMob. No. : 9022789093",
      "Position": "Member"
    },
    {
      "Sr.No": 17,
      "Name": "Dr. A.R. Thorvat",
      "Designation": "Dean Student Activity,\nHead – Dept. Of Environmental Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : thorvat.akshay@kitcoek.in\nMob. No. : 9175886755",
      "Position": "Member"
    },
    {
      "Sr.No": 18,
      "Name": "Dr. S.S. Shinde",
      "Designation": "Dean IR,\nDean IIL, Asso. Professor, Department of Mechanical Engineering ,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : shinde.sachin@kitcoek.in\nMob. No. : 9049506311",
      "Position": "Member"
    },
    {
      "Sr.No": 19,
      "Name": "Dr. (Mrs.) S.R. Chougule",
      "Designation": "Professor & Dean P.G. &\nResearch – Dept. of Electronics and Tele-Communication Engg.,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : chougule.sangeeta@kitcoek.in\nMob. No. : 7755900111",
      "Position": "Member"
    },
    {
      "Sr.No": 20,
      "Name": "Mr. T.B. Patil",
      "Designation": "Dean ICT, Associate Professor,\nDept. Of Information Technology\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : patil.tanaji@kitcoek.in\nMob. No. : 9890088511",
      "Position": "Member"
    },
    {
      "Sr.No": 21,
      "Name": "Dr. Mrs. P. S. Patil",
      "Designation": "Asso. Professor &\nHead Dept. of Biotechnology,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : patil.pallavi@kitcoek.in\nMob. No. : 9860944703",
      "Position": "Member"
    },
    {
      "Sr.No": 22,
      "Name": "Dr. D.J. Sathe",
      "Designation": "Head – Dept. Of Basic Sciences and Humanities\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : sathe.dattatray@kitcoek.in\nMob. No. : 7798985868",
      "Position": "Member"
    },
    {
      "Sr.No": 23,
      "Name": "Mr. M.A. Chavan",
      "Designation": "Asso. Professor and Head – Dept. Of Civil Engineering\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : chavan.mohan@kitcoek.in\nMob. No. : 9822866022",
      "Position": "Member"
    },
    {
      "Sr.No": 24,
      "Name": "Dr. N.B. Sambre",
      "Designation": "Head – Dept. Of Electronics and Tele-Communication Engg.,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : sambre.nitin@kitcoek.in\nMob. No. : 9850866911",
      "Position": "Member"
    },
    {
      "Sr.No": 25,
      "Name": "Dr. V. S. Bugade",
      "Designation": "Head Dept. of Electrical Engg.\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : bugade.vilas@kitcoek.in\nMob. No. : 9922841809",
      "Position": "Member"
    },
    {
      "Sr.No": 26,
      "Name": "Dr. U.S. Bhapkar",
      "Designation": "Professor, Head\nDepartment of Mechanical Engineering \nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : bhapkar.udaysinh@kitcoek.in\nMob. No. : 9422045934",
      "Position": "Member"
    },
    {
      "Sr.No": 27,
      "Name": "Dr.Uma Gurav",
      "Designation": "Head –\nDept. Of Computer Science & Engg. (AIML) & (Data Science)\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : umabgurav@yahoo.co.in\nMob. No. : 9867277931",
      "Position": "Member"
    },
    {
      "Sr.No": 28,
      "Name": "Dr.Hadimanni Lingaraj",
      "Designation": "Head – Dept. Of Computer Science & Business Systems,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : lahadimani@gmail.com, hadimani.lingaraj@kitcoek.in\nMob. No. : 9878081248",
      "Position": "Member"
    },
    {
      "Sr.No": 29,
      "Name": "Dr. (Mrs.) R.R. Kamat",
      "Designation": "Librarian,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : librarian@kitcoek.in\nMob. No. : 9834272005",
      "Position": "Member"
    },
    {
      "Sr.No": 30,
      "Name": "Mr. V.B. Rokade",
      "Designation": "Director of Physical Education,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : rokade.vijay@kitcoek.in\nMob. No. :9823236061",
      "Position": "Member"
    },
    {
      "Sr.No": 31,
      "Name": "Dr.Ajit S. Patil",
      "Designation": "Dean Academic,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail : patil.ajit@kitcoek.in\nMob. No. : 9404990967",
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
            Academic Council
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Academic Council 
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
