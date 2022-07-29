import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const IdeaLabMentorCommittee = () => {
  let Comittee = [{
    "SrNo": 1,
    "Name": "Mr. Aravind Deshpande",
    "Designation": "Director, AG Steering"
},{
    "SrNo": 2,
    "Name": "Mr. Bipin Jirge",
    "Designation": "MD, IFM Electronics"
},{
    "SrNo": 3,
    "Name": "Mr. Ravi Dolli",
    "Designation": "Matura Steels"
},{
    "SrNo": 4,
    "Name": "Mr. Anand Deshpande",
    "Designation": "Sound Castings"
},{
    "SrNo": 5,
    "Name": "Mr. Gaurav S. Patil",
    "Designation": "Marvelous Machinist"
},{
    "SrNo": 6,
    "Name": "Mr. Milind Naniwadekar",
    "Designation": "Awani Engg. Pvt. Ltd."
},{
    "SrNo": 7,
    "Name": "Ms. Poonam Sawant",
    "Designation": "Accountant, KIT"
},{
    "SrNo": 8,
    "Name": "Mr. Suryakant Dodmise",
    "Designation": "SIBIC, Kolhapur"
},{
    "SrNo": 9,
    "Name": "Mr. J.B. Yadav",
    "Designation": "Shivaji University, Kolhapur"
},{
    "SrNo": 10,
    "Name": "Mr. Rajwardhan Jagdale",
    "Designation": "Pushparaj Industries"
},{
    "SrNo": 11,
    "Name": "Mr. Subodh Naik",
    "Designation": "Digitech MIDC Gokul Shirgaon"
},{
    "SrNo": 12,
    "Name": "Mr. Yatiraj Marda",
    "Designation": "CA, Kolhapur"
},{
    "SrNo": 13,
    "Name": "Dr. Rohan Nalawade",
    "Designation": "Green Buildings"
},{
    "SrNo": 14,
    "Name": "Mr. Atul Nigavekar",
    "Designation": "Electronics System Design"
},{
    "SrNo": 15,
    "Name": "Mr. Mihir Kulkarni",
    "Designation": "Industrial Automation"
},{
    "SrNo": 16,
    "Name": "Dr. Sunil Karidkar",
    "Designation": "Industrial safety"
},{
    "SrNo": 17,
    "Name": "Mr. Atul Nigavekar",
    "Designation": "Electronics System Design"
},{
    "SrNo": 18,
    "Name": "Mr. Mihir Kulkarni",
    "Designation": "Industrial Automation"
},{
    "SrNo": 19,
    "Name": "Dr. Akshay Thorwat",
    "Designation": "Environmental Engineering"
},{
    "SrNo": 20,
    "Name": "Mr. Rutuparn Karkare",
    "Designation": "Biotechnology Engineering"
},{
    "SrNo": 21,
    "Name": "Dr. Vilas Bugade",
    "Designation": "Electrical Engineering"
},{
    "SrNo": 22,
    "Name": "Mamta Kalas",
    "Designation": "Computer Engineering"
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
            Electronic Engineering - Ph.D. Center

          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <a href="/"><span className="hover:text-primary hover:cursor-pointer"> Home</span></a> <span className=" ">|</span> Ph.D. Center

          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="w-full mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30 w-full mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-3 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name </div>
              <div className=" ">Designation </div>
              
          </div> 

            {Comittee.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-3 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item.SrNo}</div>
                    <div className=" ">{item.Name} </div>
                    <div className="">{item.Designation}</div>
                       
                </div>
                <div className=" sm:grid 2xl:hidden divide-y grid-rows-3 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item.SrNo}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Name</div>
                    <div className="">{item.Name}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Designation</div>
                    <div className="">{item.Designation}</div>      
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

export default IdeaLabMentorCommittee