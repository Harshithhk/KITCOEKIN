import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/departments/career"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"
import Gallery from "../sections/lifeAtKit/cultural/gallery"
import Team from "../sections/team"
import AdmissionForm from "../sections/apply/admissionForm"
import ContactUsForm from "../sections/apply/contactUsForm"

const ContactUs = () => {

    const [subLink, setSubLink] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLinkHover1, setSubLinkHover1] = React.useState(false)
    const [subLinkHover2, setSubLinkHover2] = React.useState(false)
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

    
const cardsData = [
  {
    name: "Dr. V. V. Karjinni",
    mobile: ["7769001199", "9168781199"],
    email: "info@kitcoek.in",
    role: "Executive Director",
  },
  {
    name: "Dr. Mohan. B. Vanarotti",
    mobile: ["9902544599"],
    email: "vanarotti.mohan@kitcoek.in",
    role: "Director",
  },
  {
    name: "Dr. Mahesh B. Shinde",
    mobile: ["7030861199"],
    email: "admissions@kitcoek.in",
    role: "Central Admission Coordinator",
  },
];

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
            CONTACT US
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-xl font-bold text-center text-slate-300 z-20"
          >
             Home | Contact Us
          </h6>
        </section>
        {/*---------------------------------------------------------------------pb-20  px-14 sm:px-4 sm:pb-10----------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto h-fit bg-[#f8f7fc] pb-20  px-14 sm:px-4 sm:pb-10"> 
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}
        
     
        <ContactUsForm />
        </section>
        
        <div className=" w-full bg-[#F8F7FC] mt-10 ">

          {/* -- */}


          <div className="flex flex-wrap 3xl:hidden 2xl:hidden sm:flex justify-center gap-6 p-6 text-[#24346D]">
      {cardsData.map((card, index) => (
       <div key={index} className="bg-white shadow-md rounded-md p-6 w-80">
       <h2 className="text-xl font-bold mb-2 text-[#F07C00]">{card.name}</h2>
       <p className="mb-4">{card.role}</p>
       <ul className="list-disc pl-5 mb-4 font-semibold">
         {card.mobile.map((number, index) => (
           <li key={index}>{number}</li>
         ))}
       </ul>
       <p>{card.email}</p>
     </div>
      ))}
    </div>

          {/* -- */}
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

export default ContactUs
