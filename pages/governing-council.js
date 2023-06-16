import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const GoverningCouncil = () => {
   let governingCouncilList = [
    {
      "Sr.No": 1,
      "Name": "Mr.Sunil Kulkarni",
      "Designation": "Chairman, Kolhapur Institute of Technology, Kolhapur",
      "Position in Governing Council": "Chairman, Nominee, KIT Trust"
    },
    {
      "Sr.No": 2,
      "Name": "Mr.Sajid Hudli",
      "Designation": "Vice Chairman, Kolhapur Institute of Technology, Kolhapur",
      "Position in Governing Council": "Member, Nominee, KIT Trust"
    },
    {
      "Sr.No": 3,
      "Name": "Mr.Dipak Chougule",
      "Designation": "Secretary, Kolhapur Institute of Technology, Kolhapur",
      "Position in Governing Council": "Member, Nominee, KIT Trust"
    },
    {
      "Sr.No": 4,
      "Name": "Mr.Bharat D.Patil",
      "Designation": "Trustee, Kolhapur Institute of Technology, Kolhapur",
      "Position in Governing Council": "Member, Nominee, KIT Trust"
    },
    {
      "Sr.No": 5,
      "Name": "Mr.Sachin Menon",
      "Designation": "Trustee, Kolhapur Institute of Technology, Kolhapur",
      "Position in Governing Council": "Member, Nominee, KIT Trust"
    },
    {
      "Sr.No": 6,
      "Name": "Col.Pratapsinh Raorane (Rtd.)",
      "Designation": "Trustee, Kolhapur Institute of Technology, Kolhapur",
      "Position in Governing Council": "Member Invitee, Trustee, KIT"
    },
    {
      "Sr.No": 7,
      "Name": "Mr. Sanjay Kotha",
      "Designation": "Joint President & Chief Digital & Business Transformation Officer Adani Airports,\nAdani Ports & Logistics",
      "Position in Governing Council": "Member, Representative, Industry"
    },
    {
      "Sr.No": 8,
      "Name": "Prof. (Dr) Ganapati D. Yadav",
      "Designation": "National Science Chair (SERB/DST/GOI) & Emeritus Professor of Eminence,\nFormer Vice-Chancellor and R.T. Mody Distinguished Professor,\nformer TATA Chemicals Darbari Seth Distinguished Professor of leadership and Innovation,\nPadmashri Awardee by the President of India (2016)",
      "Position in Governing Council": "Member, Representative, Industry"
    },
    {
      "Sr.No": 9,
      "Name": "Mr.Nikhil J. Padate",
      "Designation": "Founder, JANGS TECHNOLOGIES, Ichalkaranji",
      "Position in Governing Council": "Member, Representative Industry"
    },
    {
      "Sr.No": 10,
      "Name": "Dr. Anand Mohan",
      "Designation": "Professor, Dept. Electronics Engg., Indian Institute of Technology, Banaras Hindu University, Varanasi",
      "Position in Governing Council": "Member, UGC, Nominee"
    },
    {
      "Sr.No": 11,
      "Name": "Member- Ex-officio",
      "Designation": "Regional Officer & Assistant Director (WRO) AICTE, NITIE Campus, Vihar Lake, Mumbai.",
      "Position in Governing Council": "Member, AICTE, Nominee"
    },
    {
      "Sr.No": 12,
      "Name": "Member- Ex-officio",
      "Designation": "Joint Director, Technical Education, Regional Office, Pune",
      "Position in Governing Council": "Member, DTE, Nominee"
    },
    {
      "Sr.No": 13,
      "Name": "Dr. Mrs.S.S. Kulkarni",
      "Designation": "Director, Rajarambapu Institute of Technology’s College of Engineering, Islampur",
      "Position in Governing Council": "Member, Shivaji University, Nominee"
    },
    {
      "Sr.No": 14,
      "Name": "Dr.Mohan B.Vanarotti",
      "Designation": "Director, Kolhapur Institute of Technology’s College of Engg. (Autonomous), Kolhapur",
      "Position in Governing Council": "Member - Secretary"
    },
    {
      "Sr.No": 15,
      "Name": "Dr.Y.M.Patil",
      "Designation": "Professor & Dean, Examination & Evaluation,\nKolhapur Institute of Technology’s College of Engg. (Autonomous), Kolhapur",
      "Position in Governing Council": "Member - Faculty"
    },
    {
      "Sr.No": 16,
      "Name": "Dr.Ajit S. Patil",
      "Designation": "Associate Professor & Dean Academics,\nKolhapur Institute of Technology’s College of Engg. (Autonomous), Kolhapur",
      "Position in Governing Council": "Member - Faculty"
    },
    {
      "Sr.No": 17,
      "Name": "Dr. Vilas. V. Karjinni",
      "Designation": "Executive Director, ,\nKolhapur Institute of Technology’s College of Engg. (Autonomous), Kolhapur",
      "Position in Governing Council": "Member - Invitee"
    },
    {
      "Sr.No": 18,
      "Name": "Dr. M. M. Mujumdar",
      "Designation": "Registrar, Kolhapur Institute of Technology’s College of Engg. (Autonomous), Kolhapur",
      "Position in Governing Council": "Member - Invitee"
    }
   ]
  return (
    <DefaultLayout>
      <div className="w-full bg-secondary">
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
        
        <section className="  mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30  mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          
              <table className=" sm:hidden mt-6   w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Sr.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Designation
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Position
                        </th>
                    </tr>
                </thead>
                {governingCouncilList.map((item, index) => {
                  return (
                    <>
                    {/* <div className="sm:hidden grid grid-cols-3 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                        <div className=" sm:hidden ">{item["Sr.No"]}</div>
                        <div className="">{item["Name"]}</div>
                        <div className="">{item["Designation"]}</div>
                        <div className="">{item["Position in Governing Council"]}</div>
                        
                    </div> */}
        
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item["Sr.No"]}
                    </td>
                    <td className="px-6 py-4">
                    {item["Name"]}
                    </td>
                    <td className="px-6 py-4">
                    {item["Designation"]}
                    </td>
                    <td className="px-6 py-4">
                        ${item["Position in Governing Council"]}
                    </td>
                </tr>
            
            </tbody>
          
                    </>
                  )
                })}
              </table>
             {governingCouncilList.map((item, index) => {
               return (
                <>
                {/* mobile responsive */}
             <div className=" sm:grid 3xl:hidden 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                 <div className="grid grid-cols-1 gap-y-2">
                   <div className="text-slate-400">Sr.No.</div>   
                   <div className="">{item["Sr.No"]}</div>      
                 </div>
                 <div className="grid grid-cols-1 gap-y-2">
                 <div className=" text-slate-400">Name</div>
                   <div className="">{item["Name"]}</div>      
                 </div>
                 <div className="grid grid-cols-1 gap-y-2">
                 <div className=" text-slate-400">Designation</div>  
                   <div className="">{item["Designation"]}</div>      
                 </div>
                 <div className="grid grid-cols-1 gap-y-2">
                 <div className=" text-slate-400">Position</div> 
                   <div className="">{item["Position in Governing Council"]}</div>      
                 </div>
               
               </div>
                </>)})}
          </section>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default GoverningCouncil
