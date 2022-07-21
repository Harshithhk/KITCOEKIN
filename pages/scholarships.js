import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const Scholarships = () => {
  let scholarship = [{
	"SrNo": 1,
	"Type": "Scholarship",
	"Category": "OBC",
	"IncomeLimit": "BELOW 1.00 LAC",
	"AmountSanctionByGovt": "Half Tution Fee,Exam Fee & Maintanance Allowance"
  },{
	"SrNo": 2,
	"Type": "Scholarship",
	"Category": "SBC VJNT",
	"IncomeLimit": "BELOW 1.00 LAC",
	"AmountSanctionByGovt": "Full Tution Fee,Exam Fee & Maintanance Allowance"
  },{
	"SrNo": 3,
	"Type": "Scholarship",
	"Category": "SC",
	"IncomeLimit": "BELOW 2.50 LAC",
	"AmountSanctionByGovt": "Full Tution Fee,Devlopment Fee,Exam Fee & Maintance Allowance"
  },{
	"SrNo": 4,
	"Type": "Scholarship",
	"Category": "ST",
	"IncomeLimit": "BELOW 2.50 LAC",
	"AmountSanctionByGovt": "Full Tution Fee,Exam Fee & Maintanance Allowance"
  },{
	"SrNo": 5,
	"Type": "Freeship",
	"Category": "OBC",
	"IncomeLimit": "Income Beetwin 1.00 Lac to 8.00 Lac",
	"AmountSanctionByGovt": "Half Tution Fee , Exam Fee"
  },{
	"SrNo": 6,
	"Type": "Freeship",
	"Category": "SBC VJNT",
	"IncomeLimit": "Income Beetwin 1.00 Lac to 8.00 Lac",
	"AmountSanctionByGovt": "Full Tution Fee , Exam Fee"
  },{
	"SrNo": 7,
	"Type": "Freeship",
	"Category": "SC",
	"IncomeLimit": "No Limit",
	"AmountSanctionByGovt": "Full Tution Fee,Devlopment Fee,Exam Fee"
  },{
	"SrNo": 8,
	"Type": "Freeship",
	"Category": "ST",
	"IncomeLimit": "No Limit",
	"AmountSanctionByGovt": "Full Tution Fee & Exam Fee"
  },{
	"SrNo": 9,
	"Type": "EBC",
	"Category": "OPEN",
	"IncomeLimit": "BELOW 8.00 LAC",
	"AmountSanctionByGovt": "Half Tution Fee"
  },{
	"SrNo": 10,
	"Type": "Minority (central Govt)",
	"Category": "Jain, Cristian ,Muslim, Shikh, Parasi",
	"IncomeLimit": "below 2.50 Lac",
	"AmountSanctionByGovt": "Twenty Thousand Or Twenty Five Thousand as per Govt. Policy"
  },{
	"SrNo": 11,
	"Type": "Minority (State Govt)",
	"Category": "Jain, Cristian ,Muslim, Shikh, Parasi",
	"IncomeLimit": "below 8.00 Lac",
	"AmountSanctionByGovt": "Twenty Thousand Or Twenty Five Thousand"
  },{
	"SrNo": 12,
	"Type": "Handicap Scholarship",
	"Category": "Handicap Student",
	"IncomeLimit": "No income Limit",
	"AmountSanctionByGovt": "Full Tution Fee,Devlopment Fee."
  },{
	"SrNo": 13,
	"Type": "STC PTC",
	"Category": "Student Who’s parents are teacher/ Non teaching staff",
	"IncomeLimit": "No income Limit",
	"AmountSanctionByGovt": "Rs. 4000/- Only"
  },{
	"SrNo": 14,
	"Type": "Central Sector Scholarship",
	"Category": "ALL STUDENT",
	"IncomeLimit": "Income Limit Below 6.00 lac",
	"AmountSanctionByGovt": "FE to TE 10000/- & BE 20000/-"
  },{
	"SrNo": 15,
	"Type": "J&K Scholarship",
	"Category": "J & K Student Only",
	"AmountSanctionByGovt": "As per Govt Policy",
	"IncomeLimit": ""
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
            Scholarships
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Scholarships 
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        
        <section className="overflow-auto max-w-fit mx-auto md:mx-0  bg-secondary">
          <section className="relative z-30 w-[1500px] mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-5 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Type</div>
              <div className=" ">Category</div>
              <div className=" ">Income Limit</div>
              <div className=" ">Amount Sanction By Govt.</div>
              
          </div> 

            {scholarship.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-5 items-center text-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item.SrNo}</div>
                    <div className="">{item.Type}</div>
                    <div className="">{item.Category}</div>
                    <div className="">{item.IncomeLimit}</div>
                    <div className="">{item.AmountSanctionByGovt}</div>
                       
                </div>
                <div className=" sm:grid 2xl:hidden divide-y grid-rows-5 items-center text-left  w-full h-fit   p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item.SrNo}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Type</div>
                    <div className="">{item.Type}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Category</div>  
                    <div className="">{item.Category}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Income Limit</div> 
                    <div className="">{item.IncomeLimit}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Amount Sanction By Govt</div>  
                    <div className="">{item.AmountSanctionByGovt}</div>      
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

export default Scholarships
