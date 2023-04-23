import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const GoverningCouncil = () => {
   let governingCouncilList = [
    {
      "SrNo": "1",
      "Name": "Mr.Sunil Kulkarni",
      "Designation": "Chairman, Kolhapur Institute of Technology, Kolhapur",
      "PositionInGoverningCouncil": "Chairman, Nominee, KIT Trust"
    },
    {
      "SrNo": "2",
      "Name": " Mr.Sajid Hudli",
      "Designation": "Vice Chairman, Kolhapur Institute of Technology, Kolhapur",
      "PositionInGoverningCouncil": "Member, Nominee, KIT Trust"
    },
    {
      "SrNo": "3",
      "Name": "Mr.Dipak Chougule",
      "Designation": "Secretary, Kolhapur Institute of Technology, Kolhapur",
      "PositionInGoverningCouncil": "Member, Nominee, KIT Trust"
    },
    {
      "SrNo": "4",
      "Name": " Mr.Bharat D.Patil",
      "Designation": "Trustee, Kolhapur Institute of Technology, Kolhapur",
      "PositionInGoverningCouncil": "Member, Nominee, KIT Trust"
    },
    {
      "SrNo": "5",
      "Name": "Mr.Sachin Menon",
      "Designation": "Trustee, Kolhapur Institute of Technology, Kolhapur",
      "PositionInGoverningCouncil": "Member, Nominee, KIT Trust"
    },
    {
      "SrNo": "6",
      "Name": "Col.Pratapsinh Raorane (Rtd.)",
      "Designation": "Trustee, Kolhapur Institute of Technology, Kolhapur",
      "PositionInGoverningCouncil": "Member Invitee, Trustee, KIT"
    },
    {
      "SrNo": "7",
      "Name": "Mr.Rajendra R.Deshpande",
      "Designation": "Managing Director, Kirloskar Oil Engines Limited, Pune",
      "PositionInGoverningCouncil": "Member Represntative, Industry"
    },
    {
      "SrNo": "8",
      "Name": "Mr.Raghavan Murlidharan",
      "Designation": "Chief Technology Officer, Strategic Electronic Division(SED), Tata Power Company Ltd, MUMBAI",
      "PositionInGoverningCouncil": "Member Representative, Industry"
    },
    {
      "SrNo": "9",
      "Name": "Dr.Jyaant C.Padate",
      "Designation": "Director, FIE Reaserch Institute, Ichalkaranji",
      "PositionInGoverningCouncil": "Member, Nominee, State Govt."
    },
    {
      "SrNo": "10",
      "Name": "Dr.Anand Mohan",
      "Designation": "Professor, Dept. Electronics Engg,Indian Institute of Technology, Banaras Hindu University, Varanasi",
      "PositionInGoverningCouncil": "Member UGC, Nominee"
    },
    {
      "SrNo": "11",
      "Name": "Dr. C.S. Verma",
      "Designation": "Regional Officer & Assistant Director (WRC) AICTE, Churchgate, Mumbai.",
      "PositionInGoverningCouncil": "Member, AICTE, Nominee"
    },
    {
      "SrNo": "12",
      "Name": "Dr.D.R.Nandanwar",
      "Designation": "Joint Director, Technical Education, Regional Office, Pune",
      "PositionInGoverningCouncil": "Member, DTE, Nominee"
    },
    {
      "SrNo": "13",
      "Name": "Dr.P. D.Raut",
      "Designation": "Dean, IDS Branch/Course Shivaji University, Kolhapur",
      "PositionInGoverningCouncil": "Member, Shivaji University, Nominee"
    },
    {
      "SrNo": "14",
      "Name": "Dr.Mahesh S.Chavan",
      "Designation": "Professor, Dept. of Electronics Engineering Kolhapur Institute of Technology's College of Engg. (Autonomous), Kolhapur",
      "PositionInGoverningCouncil": "Member, Faculty, Professor"
    },
    {
      "SrNo": "15",
      "Name": "Mr.Tanaji B.Patil",
      "Designation": "Associate Professor, Dept. of Information Technology Kolhapur Institute of Technology's College of Engg. (Autonomous), Kolhapur",
      "PositionInGoverningCouncil": "Member, Faculty, Asso.Professor"
    },
    {
      "SrNo": "16",
      "Name": "Dr. M. M. Mujumdar",
      "Designation": "Registrar, Kolhapur Institute of Technology's College of Engg. (Autonomous), Kolhapur",
      "PositionInGoverningCouncil": "Member - Invitee"
    },
    {
      "SrNo": "17",
      "Name": "Dr. Vilas. V. Karjinni",
      "Designation": "Director, Kolhapur Institute of Technology's College of Engg. (Autonomous), Kolhapur",
      "PositionInGoverningCouncil": "Member-Secretary"
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
            Governing Council
          </h1>
          <br></br>
          <br></br>

          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Governing Council
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className=" overflow-auto max-w-screen bg-secondary">
          <section className="relative z-30 w-[1500px] sm:w-fit pb-20 mx-auto h-fit px-14 sm:px-4 sm:pb-10   ">
          
            <div className="grid grid-cols-4 sm:grid-cols-3 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-fit p-2 mb-6 shadow-lg rounded-2xl">
              <div className="sm:hidden ">Sr.No.</div>
              <div className="">Name</div>
              <div className=" ">Designation</div>
              <div className=" ">Position in Governing Council</div>
            </div>

            {governingCouncilList.map((item,index)=>{
                        
                            return(
                                <div key={index} className="grid grid-cols-4 sm:grid-cols-3 items-center justify-items-center  w-full h-16 sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                                    <div className=" sm:hidden ">{item.SrNo}</div>
                                    <div className="">{item.Name}</div>
                                    <div className=" ">{item.Designation}</div>
                                    <div className=" ">{item.PositionInGoverningCouncil}</div>
                                </div>
                            );
                        
                       
            })}

{/* <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
                                    <div className=" w-[5%] text-left pl-2">{item.SrNo}</div>
                                    <div className=" w-[20%] text-left pl-2">{item.Name}</div>
                                    <div className=" w-[55%] text-left pl-2">{item.Designation}</div>
                                    <div className=" w-[25%] text-left pl-2">{item.PositionInGoverningCouncil}</div>
                                </div> */}
    
            
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default GoverningCouncil
