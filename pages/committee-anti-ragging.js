import DefaultLayout from "../components/DefaultLayout"
import AntiRaggingForm from "../sections/apply/antiRaggingForm"
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
      "Name": "Assistant Police Inspector",
      "Designation": "Assistant Police Inspector,\nPolice Station of Gokul Shirgaon, Kolhapur\nPh. No. : 0231-2671933",
      "Position": "Member, Representative,\nCivil and Police Administration"
    },
    {
      "Sr.No": 3,
      "Name": "Mr. Chandrakant B. Mithare",
      "Designation": "Manager, (Daily Mahasatta)\nEmail ID : mahasatta@gmail.com\nMob. No. : 9766400010",
      "Position": "Member, Representative local media"
    },
    {
      "Sr.No": 4,
      "Name": "Mrs. Sadhana Zadbuke",
      "Designation": "NGO “Sanvedana”\nSocial Worker, Kolhapur\nMob. No. : 9422076262",
      "Position": "Member , Representative, Non Government Organization"
    },
    {
      "Sr.No": 5,
      "Name": "Mr. Hemant V. Sadolikar",
      "Designation": "Associate Professor,\nDept. of Civil Engg.\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : hvsadolikar@rediffmail.com\nMob. No. : 9823883435",
      "Position": "Member, Representative, Faculty"
    },
    {
      "Sr.No": 6,
      "Name": "Mrs. Parul S. Saler",
      "Designation": "Assistant Professor,\nDept. of Env. Engg.\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : parulsaler@gmail.com\nMob. No. : 9420678695",
      "Position": "Member, Representative, Faculty"
    },
    {
      "Sr.No": 7,
      "Name": "Mr.Vijay J. Patole",
      "Designation": "84/A Ward, Patole Mala,\nNear Palace Road,\nNear Mahavir College, Kolhapur.\nMob.No.8007808895",
      "Position": "Member, Representative, Parents"
    },
    {
      "Sr.No": 8,
      "Name": "Mrs.Chandrani S. Bagadi",
      "Designation": "Plot No. 209/10, In Front of Nikam Park,\nDevkar Panand, Laxmi Nagar, Kolhapur\nMob.No. 9420931543",
      "Position": "Member, Representative, Parents"
    },
    {
      "Sr.No": 9,
      "Name": "Mr. Asif M. Qureshi",
      "Designation": "Assistant Professor,\nDept. of Mechanical Engg.\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : qasif@rediffmail.com\nMob. No. : 9423267969",
      "Position": "Member, Rector, Boys Hostel"
    },
    {
      "Sr.No": 10,
      "Name": "Mrs.Varsha Suryawanshi",
      "Designation": "Assistant Professor,\nDept. of Electronics & Telecommunication\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : vvinsa@rediffmail.com\nMob. No. : 9158942125",
      "Position": "Member, Rector Girls Hostel"
    },
    {
      "Sr.No": 11,
      "Name": "Mr. Vijay B. Rokade",
      "Designation": "Director of Phy. Education,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : kit.hodsports@gmail.com\nMob. No. : 8668474642",
      "Position": "Member, Director of Physical Education"
    },
    {
      "Sr.No": 12,
      "Name": "Mr.Sandeep K.Patil",
      "Designation": "Office Superintendent,\nKIT's College of Engg. (Autonomous), Kolhapur\nE Mail ID : patil.sandeep@kitcoek.in\nMob.No. 7276636482",
      "Position": "Member, Representative, Non -Teaching staff"
    },
    {
      "Sr.No": 13,
      "Name": "Mr. Ravindra T. Shinde",
      "Designation": "Store Keeper,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : shinderavi_53@rediffmail.com\nMob. No. : 9764469616",
      "Position": "Member, Representative, Non -Teaching staff"
    },
    {
      "Sr.No": 14,
      "Name": "Miss.Jadhav Anushka Atul",
      "Designation": "Student – F.Y. B.Tech. (Civil & Environmental)\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : abc@gmail.com\nMob. No. : 8767700347",
      "Position": "Member, Representative, Students"
    },
    {
      "Sr.No": 15,
      "Name": "Mr.Bhavik Atul Shinde",
      "Designation": "Student – D.S. B.Tech. (Civil & Environmental)\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : bhavikshinde227@gmail.com\nMob. No. : 7020616538",
      "Position": "Member, Representative, Students"
    },
    {
      "Sr.No": 16,
      "Name": "Mr.Tushar Tanaji Waghmode",
      "Designation": "Student – F.Y B.Tech. (Computer Science Engg.)\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : tanijwaghmode1979@gmail.com\nMob. No. : 8459297320",
      "Position": "Member, Representative, Students"
    },
    {
      "Sr.No": 17,
      "Name": "Dr. Manoj M. Mujumdar",
      "Designation": "Registrar,\nKIT's College of Engg. (Autonomous), Kolhapur\nEmail ID : mmmujumdar@gmail.com\nMob. No. 7378631199",
      "Position": "Member -Secretary"
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
            Anti Ragging Committee 
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Anti Ragging Committee 
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
            <a href="documents/About/guide-for-anti-ragging-committee.pdf"  className=" hover:cursor-pointer mt-8 text-primary bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Guide for Anti ragging Committee</span>
          </a>
          <AntiRaggingForm />
          </section>
          
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default StaffCommittee
