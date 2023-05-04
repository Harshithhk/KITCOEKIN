import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"

import { Tab } from '@headlessui/react'
import ProvisionalAdmission from "../sections/admissions/undergraduate/ProvisionalAdmission"
import Admission2223 from "../sections/admissions/undergraduate/Admission2223"
import Admission2122 from "../sections/admissions/undergraduate/Admission2122"
import Admission2224 from "../sections/admissions/undergraduate/Admission2024"




const AdmissionUndergraduate = () => {

let InstituteCode = [
  {
    "CourseName":{
      "p1":"Bio-Technology Engineering",
      "p2":"B.Tech (Hons.) Biotechnology Engineering with specialization in Biosimilar Technology"  
    },
    "GeneralChoiceCode":{
      "Intake":"30",
      "Code":"626708210"
    },
    "TFWSChoiceCode":{
      "Intake":"3",
      "Code":"626708211T"
    }
  },
  {
    "CourseName":{
      "p1":"Civil Engineering",
      "p2":"B.Tech (Hons.) Civil Engineering with specialization in Strategic Civil Infrastructure"  
    },
    "GeneralChoiceCode":{
      "Intake":"120",
      "Code":"626719110"
    },
    "TFWSChoiceCode":{
      "Intake":"6",
      "Code":"626719111T"
    }
  },
  {
    "CourseName":{
      "p1":"Computer Science and Engineering",
      "p2":"B.Tech (Hons.) Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning"  
    },
    "GeneralChoiceCode":{
      "Intake":"180",
      "Code":"626724210"
    },
    "TFWSChoiceCode":{
      "Intake":"9",
      "Code":"626724211T"
    }
  },
  {
    "CourseName":{
      "p1":"Electronics and Telecomm. Engineering",
      "p2":"B.Tech (Hons.)Electronics & Telecom.Engineering with specialization in Internet of Things(loT)"  
    },
    "GeneralChoiceCode":{
      "Intake":"120",
      "Code":"626737210"
    },
    "TFWSChoiceCode":{
      "Intake":"6",
      "Code":"626737211T"
    }
  },
  {
    "CourseName":{
      "p1":"Civil & Environmental Engineering.",
      "p2":"B.Tech (Hons.) Civil & Environmental Engineering with specialization in Green Technology & Sustainability Engineering"  
    },
    "GeneralChoiceCode":{
      "Intake":"60",
      "Code":"626720110"
    },
    "TFWSChoiceCode":{
      "Intake":"3",
      "Code":"626720111T"
    }
  },
  {
    "CourseName":{
      "p1":"Mechanical Engineering",
      "p2":"B.Tech (Hons.)Mechanical Engineering with specialization in Robotics"  
    },
    "GeneralChoiceCode":{
      "Intake":"180",
      "Code":"626761210"
    },
    "TFWSChoiceCode":{
      "Intake":"9",
      "Code":"626761211T"
    }
  },
  {
    "CourseName":{
      "p1":"Electrical Engineering",
      "p2":"B.Tech (Hons.) Electrical Engineering with specialization in Electric Vehicles"  
    },
    "GeneralChoiceCode":{
      "Intake":"60",
      "Code":"626729310"
    },
    "TFWSChoiceCode":{
      "Intake":"3",
      "Code":"626729311T"
    }
  },
  {
    "CourseName":{
      "p1":"Computer Science & Engineering (Data Science)",
      "p2":"Computer Science & Engineering with specialization in Data Science"  
    },
    "GeneralChoiceCode":{
      "Intake":"60",
      "Code":"626729310"
    },
    "TFWSChoiceCode":{
      "Intake":"3",
      "Code":"626729311T"
    }
  },
  {
    "CourseName":{
      "p1":"Computer Science & Engineering (Artificial Intelligence & Machine learning)",
      "p2":"Computer Science & Engineering with specialization in Artificial Intelligence And Machine Learning"  
    },
    "GeneralChoiceCode":{
      "Intake":"60",
      "Code":"626729310"
    },
    "TFWSChoiceCode":{
      "Intake":"3",
      "Code":"626729311T"
    }
  }
]

let AdmissionContacts = [
  {
    "Department": "For general queries",
    "Faculty":[
      {
        "NameOfFaculty": "Dr. Mahesh B. Shinde",
        "Designation":"Assistant Professor",
        "ContactDetails": " 7030861199"
      },
      {
        "NameOfFaculty": "Mr. Saurabh S. Joshi",
        "Designation":"Assistant Professor",
        "ContactDetails": "9028486124"
      },
      {
        "NameOfFaculty": "Mr. Amar H. Tikole",
        "Designation":"Assistant Professor",
        "ContactDetails": " 9272319199"
      },
      {
        "NameOfFaculty": "Dr. Nivas S. Patil",
        "Designation":"Assistant Professor",
        "ContactDetails": "9158337227"
      }
    ]
    
  },
  {
  "Department": "Bio Technology",
  "Faculty":[
    {
      "NameOfFaculty": "Dr. Rajesh M. Jorgewad",
      "Designation":"Assistant Professor",
      "ContactDetails": "8668406496"
    },
    {
      "NameOfFaculty": "Mrs. Saee H. Thakur",
      "Designation":"Assistant Professor",
      "ContactDetails": "9850317278"
    }
  ]
  
},
{
  "Department": "Civil and Environmental Engineering",
  "Faculty":[
    {
      "NameOfFaculty": "Dr. Akshay R. Thorvat",
  "Designation":"Assistant Professor",
  "ContactDetails": "9175886755"
    },
    {
      "NameOfFaculty": "Mr. Bharat C. Ingavale",
  "Designation":"Assistant Professor",
  "ContactDetails": "9823644466"
    }
  ]
},{
  "Department": "Civil Engineering",
  "Faculty":[
    {
      "NameOfFaculty": "Mr. Vivek Suryvanshi",
  "Designation":"Assistant Professor",
  "ContactDetails": "8329931386"
    },
    {
      "NameOfFaculty": "Dr. Aditya K. Khebudkar",
  "Designation":"Assistant Professor",
  "ContactDetails": "9421283933"
    },
    {
      "NameOfFaculty": "Mr. Onkar P. Suryawanshi",
  "Designation":"Assistant Professor",
  "ContactDetails": "9423133773"
    }
  ],
  
},
{
  "Department": "Mechanical Engineering",
  "Faculty":[
    {
      "NameOfFaculty": "Mr. Shivraj S. Kadam",
      "Designation":"Assistant Professor",
      "ContactDetails": "7972163849"
    },
    {
      "NameOfFaculty": "Mr. Sangram S. Shinde",
  "Designation":"Assistant Professor",
  "ContactDetails": "8308420222"
    },
    {
      "NameOfFaculty": "Mr. Bhushan S. Kamble",
  "Designation":"Assistant Professor",
  "ContactDetails": "7709717688"
    },
    {
      "NameOfFaculty": "Mrs. Jahida N. Khan",
      "Designation":"Assistant Professor",
      "ContactDetails": "9422947804"
    },
    {
      "NameOfFaculty": "Mr.Ranjit S. Patil",
  "Designation":"Assistant Professor",
  "ContactDetails": "9421500879"
    }
  ],
  
 
},
{
  "Department": "Computer Science and Engineering",
  "Faculty":[
    {
      "NameOfFaculty": "Ms. Vaishali G. Powar",
  "Designation":"Assistant Professor",
  "ContactDetails": "9921225550"
    },
    {
      "NameOfFaculty": "Mr. Arun R Desai",
  "Designation":"Assistant Professor",
  "ContactDetails": "8275259450"
    },
    {
      "NameOfFaculty": "Mr. Chaitnya B. Pednekar",
  "Designation":"Assistant Professor",
  "ContactDetails": "8237785676"
    },
    {
      "NameOfFaculty": "Mr. A. B. Patil",
  "Designation":"Assistant Professor",
  "ContactDetails": "8308941757"
    },
    {
      "NameOfFaculty": "Mr. Ajay B. Kapase",
  "Designation":"Assistant Professor",
  "ContactDetails": "9226873047"
    }
  ],
  
}
,{
  "Department": "Computer Science Engineering (AIML/Data Science)",
  "Faculty":[
    {
      "NameOfFaculty": "Mr. Jambukeshwar S. Pujari",
  "Designation":"Assistant Professor",
  "ContactDetails": "8310056226"
    },
   
  ],
  
  
},{
  "Department": "Electronics and Tele-communication Engineering",
  "Faculty":[
    {
      "NameOfFaculty": "Mr. Vikas B. Gundawade",
      "Designation":"Assistant Professor",
      "ContactDetails": "9423290462"
    },
    {
      "NameOfFaculty": "Mr. Eknath C. Patil",
      "Designation":"Assistant Professor",
      "ContactDetails": "9822281422"
    },
    {
      "NameOfFaculty": "Mrs. Komal V. Jadhav",
  "Designation":"Assistant Professor",
  "ContactDetails": "9921749595"
    },
   
  ],
 
},{
  "Department": "Electrical Engineering",
  "Faculty":[
    {
      "NameOfFaculty": "Mrs. Priyanka N. Mane",
      "Designation":"Professor",
      "Contact Details": "7776887811"
    },
    {
      "NameOfFaculty": "Mr. Sushant Y. Suryavanshi",
  "Designation":"Assistant Professor",
  "ContactDetails": "8928292706"
    },
    
  ],
  
}
]


  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
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
            Undergraduate Admissions
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
           <a href="/"><span className="hover:text-primary hover:cursor-pointer"> Home</span></a> <span className=" ">|</span> Undergraduate Admissions
          </h6>
          
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}
          {/* - */}
          <div className="pt-8 text-sm text-[#24346D] font-bold">
            <h3>Save WhatsApp Number: 7030861199 as KIT Admission :<a href="https://api.whatsapp.com/send?phone=+917030861199" className="hover:cursor-pointer text-[#F07C00]"> Click here to chat with us for Admission </a></h3>
          </div>
          {/* <ProvisionalAdmission /> */}
          <Admission2224 />
          <Admission2223 />
          
          {/* <Admission2122 /> */}
        </section>
        <section className="pt-16 mt-16 mb-[-60px] overflow-clip bg-[#F8F7FC] max-w-screen">
          <div className="flex items-center w-full ml-16 sm:ml-4">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
              INSTITUTE CODE : 6267
            </div>
          </div>
          <section className="relative z-30 w-full  mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-3  items-center  px-4 text-slate-500  mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
         
              <div className=" col-start-1 col-end-3 text-center">Course Name</div>
              <div className=" col-start-3 col-end-4">
                <div className="grid grid-cols-2 gap-x-6 0">
                  <div className="grid grid-rows-2 items-center ">
                    <div className="text-center">General Choice Code</div>
                    <div className="grid grid-cols-2 gap-x-6">
                      <div className="text-center">Intake</div>
                      <div className="text-center">Code</div>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 items-center ">
                    <div className="text-center">TFWS Choice Code</div>
                    <div className="grid grid-cols-2  gap-x-6">
                      <div className="text-center">Intake</div>
                      <div className="text-center">Code</div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div> 

            {InstituteCode.map((item, index) => {
               return (
                <>
                 <div className="sm:hidden grid grid-cols-3 bg-white px-4 items-center text-slate-500  mt-2  w-full h-16 sm:h-16 p-2 shadow-lg rounded-2xl">
         
                      <div className=" col-start-1 col-end-3 text-start  "><p className="text-slate-900">{item.CourseName.p1}</p><p>{item.CourseName.p2}</p></div>
                      <div className=" col-start-3 col-end-4 text-slate-900">
                        <div className="grid grid-cols-2 gap-x-6 ">
                            <div className="grid grid-cols-2 items-center justify-items-center gap-x-6">
                              <div>{item.GeneralChoiceCode.Intake}</div>
                              <div>{item.GeneralChoiceCode.Code}</div>
                            </div>                       
                            <div className="grid grid-cols-2 items-center justify-items-center gap-x-6">
                              <div>{item.TFWSChoiceCode.Intake}</div>
                              <div>{item.TFWSChoiceCode.Code}</div>
                            </div>
                        </div>
                      </div>
                    
                  </div> 
                <div className=" sm:grid 3xl:hidden 2xl:hidden divide-y grid-rows-7 items-center text-left  w-full h-fit  sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-2">
                    <div className="text-slate-400">Course Name</div>   
                    <div className="divide-y"><p className="text-slate-900">{item.CourseName.p1}</p><p className="text-slate-500">{item.CourseName.p2}</p></div>      
                  </div>
                  <div className="grid grid-cols-1 text-center">
                    <div className=" text-slate-400">General Choice Code</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Intake</div>  
                    <div className="">{item.GeneralChoiceCode.Intake}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Code</div> 
                    <div className="">{item.GeneralChoiceCode.Code}</div>      
                  </div>
                  <div className="grid grid-cols-1 text-center">
                    <div className=" text-slate-400">TFWS Choice Code</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className=" text-slate-400">Intake</div>  
                    <div className="">{item.TFWSChoiceCode.Intake}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">Code</div> 
                    <div className="">{item.TFWSChoiceCode.Code}</div>      
                  </div>
                </div>
                </>
              )
            })}
          </section>
        </section>
        
        <div className=" w-full bg-[#F8F7FC] mt-10 ">
        <div className="flex items-center pt-10  mb-10 ml-16 sm:ml-4">
           <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
           <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] sm:text-xl text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
           For Admission Process & Details
           </div>
         </div>
        <section className=" z-30  w-fit  mx-auto  pb-20 -mb-10 h-fit bg-[#F8F7FC]  sm:px-4 sm:pb-10">
       
       
       <div className="flex flex-col items-center sm:flex-col">
          
          <div className=" shadow-lg items-center text-slate-400 grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-[#F8F7FC]  text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                    <div className="">Department</div>
                    <div className="">Name of Faculty</div>
                    <div className="">Contact Details</div> 
              </div>
              {AdmissionContacts.map((item, index) => {
               return (
                <>
                     <div key={index}  className="shadow-lg  grid grid-cols-3  w-[1100px] h-fit p-2  bg-white  text-center rounded-lg sm:w-full justify-between sm:p-2 mt-2 min-h-[55px] ">  
                     {/* row end */}
                     <div className="">{item.Department}</div>
                     <div className="grid grid-cols-1 divide-y">
                      {item.Faculty.map((facultyItem,facultyIndex) => {
                        return(
                            <div key={facultyIndex}>
                            <p>{facultyItem.NameOfFaculty}</p>
                            <p className="text-slate-400">{facultyItem.Designation}</p>
                            </div>
                        )
                      })}
                        
                     </div>
                     <div className="grid grid-cols-1 divide-y">
                      {item.Faculty.map((facultyItem,facultyIndex) => {
                          return(
                            <div key={facultyIndex}>
                              <p>
                                <span className="text-slate-400">Mobile :</span>{" "}
                                {facultyItem.ContactDetails}
                              </p>
                            </div>
                          )
                        })}
                      
                     </div>
                     {/* row end */}
              </div>
                </>
               )
              })}
             
              
         
          </div>
     
       </section>
        </div> 
        

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default AdmissionUndergraduate
