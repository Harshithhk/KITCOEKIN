import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const OfficeAdministration = () => {
  let governingCouncilList = [
    {
      SrNo: "1",
      Name: "Dr. M. M. Mujumdar",
      Designation: "Registrar",
      MobileNo: "7378631139",
    },
    {
      SrNo: "2",
      Name: "Mr. Desai Vijay A.",
      Designation: "Accountant",
      MobileNo: "9763866899",
    },
    {
      SrNo: "3",
      Name: "Ms Poonam Sawant",
      Designation: "Jr. Accountant",
      MobileNo: "9423043808",
    },
    {
      SrNo: "4",
      Name: "Miss.Rukadikar Bharati L.",
      Designation: "Office Suprident",
      MobileNo: "9421111584",
    },
    {
      SrNo: "5",
      Name: "Mr. Shinde R. T.",
      Designation: "Store Keeper",
      MobileNo: "9764469619",
    },
    {
      SrNo: "6",
      Name: "Mr.Pophale Pravin D.",
      Designation: "Sr.Clerk",
      MobileNo: "9673275784",
    },
    {
      SrNo: "7",
      Name: "Smt. Kulkarni Smita S.",
      Designation: "Sr.Clerk",
      MobileNo: "9766644017",
    },
    {
      SrNo: "8",
      Name: "Mr.Bamane Dhanaji S",
      Designation: "Sr.Clerk",
      MobileNo: "9975526473",
    },
    {
      SrNo: "9",
      Name: "Mr.Salunkhe Ramesh N.",
      Designation: "Sr.Clerk",
      MobileNo: "7769814855",
    },
    {
      SrNo: "10",
      Name: "Mr.Patole Vijay J.",
      Designation: "Jr.Clerk",
      MobileNo: "8007808895",
    },
    {
      SrNo: "11",
      Name: "Mr.Patil Sanjay B.",
      Designation: "Jr.Clerk",
      MobileNo: "9850427227",
    },
    {
      SrNo: "12",
      Name: "Mr.Patil Vishwas P.",
      Designation: "Jr.Clerk",
      MobileNo: "7588065014",
    },
    {
      SrNo: "13",
      Name: "Mr.Jadhav Mahesh V.",
      Designation: "Jr.Clerk",
      MobileNo: "9823732592",
    },
    {
      SrNo: "14",
      Name: "Ms.Dinde Ashwini",
      Designation: "Jr.Clerk",
      MobileNo: "8411801177",
    },
    {
      SrNo: "15",
      Name: "Mr.Iralekar Kiran",
      Designation: "Jr.Clerk",
      MobileNo: "9049603803",
    },
    {
      SrNo: "16",
      Name: "Mr.Patil Suraj",
      Designation: "Jr.Clerk",
      MobileNo: "8308512526",
    },
    {
      SrNo: "17",
      Name: "Mr.Patil Sangram",
      Designation: "Jr.Clerk",
      MobileNo: "9028819239",
    },
    {
      SrNo: "18",
      Name: "Mr.Vaidya Sumit M.",
      Designation: "Peon",
      MobileNo: "9673953396",
    },
    {
      SrNo: "19",
      Name: "Mr. Shinde Ananda C.",
      Designation: "Peon",
      MobileNo: "9158775189",
    },
    {
      SrNo: "20",
      Name: "Mr.Patil Tanaji V.",
      Designation: "Peon",
      MobileNo: "9922257056",
    },
    {
      SrNo: "21",
      Name: "Mr.Patil Shivaji K.",
      Designation: "Driver",
      MobileNo: "9823545410",
    },
    {
      SrNo: "22",
      Name: "Mr.Chougule Shivaji S.",
      Designation: "Driver",
      MobileNo: "9881434187",
    },
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
            Office Administration
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-xl font-bold text-center text-white z-20"
          >
            Home | Office Administration
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="overflow-x-scroll max-w-fit mx-auto md:mx-0">
          <section className="relative z-30 w-[1500px] md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
            <div className="flex md:mx-0 mx-auto items-center w-[800px] h-16 p-2 mt-6  font-semibold text-center rounded-lg shadow-lg ">
              <div className=" w-[9%] text-left pl-2">Sr.No.</div>
              <div className=" w-[35%] text-left pl-2">Name</div>
              <div className=" w-[35%] text-left pl-2">Designation</div>
              <div className="  text-left pl-2">Mobile No.</div>
            </div>

            {governingCouncilList.map((item, index) => {
              console.log(item)
              if (index == 0) {
                return (
                  <div className="flex md:mx-0  mx-auto w-[800px] h-16 p-2 mt-6  text-center shadow-lg rounded-2xl bg-blue-50">
                    <div className=" w-[9%] text-left pl-2">{item.SrNo}</div>
                    <div className=" w-[35%] text-left pl-2">{item.Name}</div>
                    <div className=" w-[35%] text-left pl-2">
                      {item.Designation}
                    </div>
                    <div className=" w-[20%] text-left pl-2">
                      {item.MobileNo}
                    </div>
                  </div>
                )
              } else if (index % 2 == 0) {
                return (
                  <div className="flex md:mx-0 mx-auto  w-[800px]  h-16 p-2 mt-2  text-center shadow-lg rounded-2xl bg-blue-50">
                    <div className=" w-[9%] text-left pl-2">{item.SrNo}</div>
                    <div className=" w-[35%] text-left pl-2">{item.Name}</div>
                    <div className=" w-[35%] text-left pl-2">
                      {item.Designation}
                    </div>
                    <div className=" w-[20%] text-left pl-2">
                      {item.MobileNo}
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="flex md:mx-0  mx-auto w-[800px]  h-16 p-2 mt-2  text-center shadow-lg rounded-2xl bg-slate-100">
                    <div className=" w-[9%] text-left pl-2">{item.SrNo}</div>
                    <div className=" w-[35%] text-left pl-2">{item.Name}</div>
                    <div className=" w-[35%] text-left pl-2">
                      {item.Designation}
                    </div>
                    <div className=" w-[20%] text-left pl-2">
                      {item.MobileNo}
                    </div>
                  </div>
                )
              }
            })}
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default OfficeAdministration
