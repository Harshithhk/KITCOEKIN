import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/innovation/ariia/career"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"

const IdeaLabActivities = () => {

    const [subLink, setSubLink] = React.useState(false)
    const [subLink2, setSubLink2] = React.useState(false)
    const [subLinkHover1, setSubLinkHover1] = React.useState(false)
    const [subLinkHover2, setSubLinkHover2] = React.useState(false)

    let Committee = [
        {
          "Sr.No": 1,
          "Name & Address": "Shri. Sunil S. Kulkarni\n\"Kulashree\" 210/33, E Ward,Rukmininagar,KOLHAPUR - 416 005\nMob. No. 9823171542\nEmail ID - syco_kolhapur@yahoo.com",
          "Designation": "Chairman",
          "Affiliation": "Director, S. Yashwant & Company Engineers Pvt. Ltd., Kolhapur."
        },
        {
          "Sr.No": 2,
          "Name & Address": "Shri. Sajid M. Hudli\n\"Ashiyana\",1954, Rajarampuri,11th Lane, KOLHAPUR – 416008\nMob. No. 9822351371\nEmail ID - sajid_hudli@yahoo.com",
          "Designation": "Vice Chairman",
          "Affiliation": "Partner, M.S. Hudli & Sons,Kolhapur,Proprietor, SAPPHIRE Enterprises, Kolhapur."
        },
        {
          "Sr.No": 3,
          "Name & Address": "Shri. Dipak Laxman Chougule\n36, Hindurao Ghatage colony,KOLHAPUR - 416 006.\nMob. No 9326677999\nEmail ID - dipakchougule72@gmail.com",
          "Designation": "Secretary",
          "Affiliation": "Managing Partner,Bharat Udyog, Kolhapur."
        },
        {
          "Sr.No": 4,
          "Name & Address": "Shri. Bharat D. Patil\n\"Kusum\" 209 A/73/9/2/3,Karande Mala, Tarabai Park,Behind Eagle Pipe Factory,KOLHAPUR - 416 003\nMob. No. 9923147700\nEmail ID - bharat@deccanequipments.com",
          "Designation": "Trustee",
          "Affiliation": "Chief Managing Director,Deccan Farm Equipment Pvt. Ltd.Annapurna Machinen Fabrics Pvt.Ltd., Kolhapur."
        },
    
        {
          "Sr.No": 5,
          "Name & Address": "Shri. Sachin Menon\n“AUM” Menon Enclave – II, R.S.No.262, E Ward, Laxminarayan Nagar,Kasaba Karveer,KOLHAPUR – 416 005.\nMob. No. 9325058000\nEmail ID - oad@menonpistons.com",
          "Designation": "Trustee",
          "Affiliation": "Managing Director,Menon Pistons Ltd., Kolhapur;Director, Menon Bearings Ltd.;Menon Alkop Ltd.;Director, Menon Piston Rings Ltd.,Kolhapur."
        }
       ]

    let Event1 = [
        {
          "Sr. NO": 1,
          "Name": "IDEA LAB INTRODUCTION & SKILLING ACTIVITIES For FACUTY OF RAJENDRA MANE COLLEGE OF ENGINEERING, DEVRUK",
          "No. of Days": 1,
          "No. of Participants": 10,
          "Participants Details": "Other Institute Faculty"
        },
        {
          "Sr. NO": 2,
          "Name": "Two Days skilling Activity on ALL-IN-ONE CNC Router for IDEA Lab trainers and Industry Persons",
          "No. of Days": 2,
          "No. of Participants": 11,
          "Participants Details": "KIT Faculty & Workshop staff"
        },
        {
          "Sr. NO": 3,
          "Name": "Five days hands on FDP on Application of Arduino Microcontroller",
          "No. of Days": 5,
          "No. of Participants": 21,
          "Participants Details": "KIT Faculty >"
        },
        {
          "Sr. NO": 4,
          "Name": "IDEA lab introduction and connect for polytechnic faculties for skilling activities",
          "No. of Days": 1,
          "No. of Participants": 23,
          "Participants Details": "Other Institute Faculty >"
        },
        {
          "Sr. NO": 5,
          "Name": "A One Day workshop On 3D Printing For ITI Students >",
          "No. of Days": 1,
          "No. of Participants": 25,
          "Participants Details": "Other Institute Students"
        },
        {
          "Sr. NO": 6,
          "Name": "Three days hands on workshop on “TinkerCAD and Arduino Microcontroller”",
          "No. of Days": 3,
          "No. of Participants": 25,
          "Participants Details": "KIT Students >"
        },
        {
          "Sr. NO": 7,
          "Name": "Three days hands on workshop on “TinkerCAD and Arduino Microcontroller”",
          "No. of Days": 3,
          "No. of Participants": 25,
          "Participants Details": "KIT Students >"
        },
        {
          "Sr. NO": 8,
          "Name": "A Two Days Hands-on Workshop on \"3D Scanner & 3D Printing for Industry",
          "No. of Days": 2,
          "No. of Participants": 30,
          "Participants Details": "Industry Person >"
        },
        {
          "Sr. NO": 9,
          "Name": "One Day Skilling Program for Civil Engineering Professionals",
          "No. of Days": 1,
          "No. of Participants": 33,
          "Participants Details": "Industry Person"
        },
        {
          "Sr. NO": 10,
          "Name": "Three days hands on workshop on \"TinkerCAD and Arduino microcontroller\"",
          "No. of Days": 3,
          "No. of Participants": 38,
          "Participants Details": "KIT Students"
        },
        {
          "Sr. NO": 12,
          "Name": "Three Days Hands on Workshop on Industry grade 3D Printer AION 500 for KIT Faculty in association with Mechanical Engineering Department >",
          "No. of Days": 3,
          "No. of Participants": 38,
          "Participants Details": "KIT Faculty"
        },
        {
          "Sr. NO": 13,
          "Name": "Two days hands on workshop on Arduino and tinkerCAD",
          "No. of Days": 2,
          "No. of Participants": 39,
          "Participants Details": "KIT Students"
        },
        {
          "Sr. NO": 14,
          "Name": "Three days hands on workshop on \"TinkerCAD and Arduino microcontroller\"",
          "No. of Days": 3,
          "No. of Participants": 40,
          "Participants Details": "KIT Students"
        },
        {
          "Sr. NO": 15,
          "Name": "A Two Day Workshop on 3D Printing for KITCoEK Student",
          "No. of Days": 2,
          "No. of Participants": 41,
          "Participants Details": "KIT Students"
        },
        {
          "Sr. NO": 16,
          "Name": "Capacity Building of HEI's Through Research Initiatives",
          "No. of Days": 2,
          "No. of Participants": 45,
          "Participants Details": "Other Institute Faculty"
        },
        {
          "Sr. NO": 17,
          "Name": "Two days hands on workshop on “Integrating 2 sensors with Arduino using TinkerCAD”",
          "No. of Days": 2,
          "No. of Participants": 48,
          "Participants Details": "KIT Students"
        },
        {
          "Sr. NO": 18,
          "Name": "Idea Lab Introduction & Connect for Engineering Faculties for Skilling Activities",
          "No. of Days": 1,
          "No. of Participants": 54,
          "Participants Details": "Other Institute Faculty"
        },
        {
          "Sr. NO": 19,
          "Name": "Two days hands on Workshop on Developing Festive decorative lights",
          "No. of Days": 2,
          "No. of Participants": 55,
          "Participants Details": "KIT Students"
        },
        {
          "Sr. NO": 20,
          "Name": "Role of Idea Lab in NEP 2020: A Holistic Development Approach",
          "No. of Days": 1,
          "No. of Participants": 66,
          "Participants Details": "Other Institute Faculty"
        }
       ]

    let Event2 = [
        {
          "Sr. NO": "1",
          "Name": "Other Institute Faculty",
          "No. of Days": 6,
          "No. of Participants": 290
        },
        {
          "Sr. NO": "2",
          "Name": "Industry Person",
          "No. of Days": 3,
          "No. of Participants": 70
        },
        {
          "Sr. NO": "3",
          "Name": "KIT Faculty",
          "No. of Days": 2,
          "No. of Participants": 70
        },
        {
          "Sr. NO": "4",
          "Name": "KIT Students",
          "No. of Days": 12,
          "No. of Participants": 729
        },
        {
          "Sr. NO": "5",
          "Name": "Other Institute Students",
          "No. of Days": 1,
          "No. of Participants": 23
        },
        {
          "Sr. NO": "Total",
          "Name": "",
          "No. of Days": 24,
          "No. of Participants": 1182
        }
       ]
    let Event2_1 =[
        {
          "Sr. NO": 1,
          "Particular": "No of Days on which event conducted",
          "Remark": "47 days"
        },
        {
          "Sr. NO": 2,
          "Particular": "Total no of Projects completed & Submitted",
          "Remark": "137"
        }
       ]

       let Event3 = [
        {
          "Sr. NO": 1,
          "Details of Event": "3D Printing",
          "Institute": "Mayura Steel Private Ltd.",
          "Remark": "2 Components"
        },
        {
          "Sr. NO": 2,
          "Details of Event": "3D Scanning of Crank Shaft",
          "Institute": "Kirloskar Oil Engines Limited",
          "Remark": "3 Days on site activity Completed"
        },
        {
          "Sr. NO": 3,
          "Details of Event": "3D Printing",
          "Institute": "Kirloskar Oil Engines Limited",
          "Remark": "Pump winding Machine"
        },
        {
          "Sr. NO": 4,
          "Details of Event": "3D Scanning",
          "Institute": "Deccan Farm Equipment",
          "Remark": "3 Days"
        },
        {
          "Sr. NO": 5,
          "Details of Event": "3D Scanning",
          "Institute": "Pushparaj Industries",
          "Remark": "1Day"
        },
        {
          "Sr. NO": 6,
          "Details of Event": "3 D Printing",
          "Institute": "Techdawn Innovationsv Pvt. Ltd. [ KIT Students Registered Startup]",
          "Remark": "2 Components"
        },
        {
          "Sr. NO": 7,
          "Details of Event": "3 D Printing",
          "Institute": "WaveNxD Technologies Pvt. Ltd.\n[ KIT Faculty Registered Startup]",
          "Remark": "1 Component"
        },
        {
          "Sr. NO": 8,
          "Details of Event": "3D Printing",
          "Institute": "Prof. M. H. Kulkarni [SUK RIS Scheme]",
          "Remark": "80 Specimens for Testing"
        },
        {
          "Sr. NO": 9,
          "Details of Event": "3D Printing Machine",
          "Institute": "Final Year Mechanical Group",
          "Remark": "Performance monitoring of 3D Printers by IoT"
        },
        {
          "Sr. NO": 10,
          "Details of Event": "Use of IoT & Machnie Learning",
          "Institute": "Second Year CSE Student Group",
          "Remark": "Intelligent Classified Traffic Volume Count"
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
            MAYURA AICTE IDEA LAB ADVISORY COMMITTEE

          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <a href="/"><span className="hover:text-primary hover:cursor-pointer"> Home</span></a> <span className=" ">|</span> Activities Conducted At MAIL


          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative  z-30 w-[100%] mx-auto pb-20 text-[#24346D] h-fit bg-white px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}
            <div>
            <div className="pt-20 sm:pt-10 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        ONE DAY WORKSHOP ON 3D PRINTING

            </div>
            <div className="flex justify-between sm:flex-col p-2 ">
          <div className="flex sm:flex-col flex-row items-center justify-center gap-5">
  <div className="w-full  text-center md:text-left">
    <p className="text-lg sm:text-base  leading-relaxed">
    One Day Workshop on 3D Printing was conducted for Industry participants on 21st August 2021 under MAYURA AICTE IDEA LAB
15 industries – 20 participants were participated in the workshop.
The workshop was inaugurated by Mr. Ravi Dolli, M. D. Mayura steels Pvt. Ltd. Kolhapur.    </p>
  </div>
  <div className="w-full pt-5">
    <img className="mx-auto md:ml-auto" src="images/IdeaLab/img-01.jpg"  alt="Placeholder Image" />
  </div>
</div>

            </div>
            </div>
            <div>
            <div className="pt-20 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        ONE DAY WORKSHOP CONDUCTED FOR INDUSTRY

            </div>
            <div className="flex justify-between sm:flex-col p-2">
                    <div className="flex sm:flex-col flex-row items-center justify-center gap-5">
            <div className="w-full  text-center md:text-left">
                <p className="text-lg sm:text-base  leading-relaxed">
                One Day Workshop was conducted for Industry on 28th June 2022 under MAYURA AICTE IDEA LAB. 25 participants from 13 industries participated in the workshop                </p>
            </div>
            <div className="w-full pt-5">
                <img className="mx-auto md:ml-auto" src="images/IdeaLab/img-02.jpg"  alt="Placeholder Image" />
            </div>
            </div>

            </div>
            </div>
            <div>
            <div className="pt-20 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        ONE DAY WORKSHOP ON 3D PRINTING FOR SMAK ITI STUDENTS


            </div>
            <div className="flex justify-between sm:flex-col p-2">
                    <div className="flex sm:flex-col flex-row items-center justify-center gap-5">
            <div className="w-full  text-center md:text-left">
                <p className="text-lg sm:text-base  leading-relaxed">
                One Day Workshop was conducted for ITI Students on 2nd July 2022 under MAYURA AICTE IDEA LAB. 24 Students and two faculty from SMAK ITI participated in the workshop in coordination with Precise 3D .
                </p>
            </div>
            <div className="w-full pt-5">
                <img className="mx-auto md:ml-auto" src="images/IdeaLab/img-03.jpg"  alt="Placeholder Image" />
            </div>
            </div>

            </div>
            </div>
            <div>
            <div className="pt-20 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        A TWO DAY HANDS ON WORKSHOP ON ARDUINO AND TINKERCAD CONDUCTED FOR INDUSTRY

            </div>
            <div className="flex justify-between sm:flex-col p-2">
                    <div className="flex sm:flex-col flex-row items-center justify-center gap-5">
            <div className="w-full  text-center md:text-left">
                <p className="text-lg sm:text-base  leading-relaxed">
                One Day Workshop was conducted for Industry on 28th June 2022 under MAYURA AICTE IDEA LAB. 25 participants from 13 industries participated in the workshop.
                </p>
            </div>
            <div className="w-full pt-5">
                <img className="mx-auto md:ml-auto" src="images/IdeaLab/img-04.jpg"  alt="Placeholder Image" />
            </div>
            </div>

            </div>
            </div>
        </section>
      
        <section className="relative z-30   sm:mt-0 md:w-full pb-32 -mb-10 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10 bg-white pt-10 -mt-10  ">
        <div className="pt-20 pb-10 sm:pt-10 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        EVENTS CONDUCTED IN MAIL


            </div>
          <div className="sm:hidden grid grid-cols-5 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name </div>
              <div className=" ">No. of Days</div>
              <div className=" ">No. of Participants</div>
              <div className=" ">Participants Details</div>

          </div> 

            {Event1.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-5 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr. NO"]}</div>
                    <div className="">{item["Name"]}</div>
                    <div className="">{item["No. of Days"]}</div>
                    <div className="">{item["No. of Participants"]}</div>
                    <div className="">{item["Participants Details"]}</div>

                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-1 gap-y-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item["Sr. NO"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Name</div>
                    <div className="">{item["Name"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">No. of Days</div>  
                    <div className="">{item["No. of Days"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">No. of Participants</div> 
                    <div className="">{item["No. of Participants"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Participants Details</div> 
                    <div className="">{item["Participants Details"]}</div>      
                  </div>
                </div>
                </>
              )
            })}
          </section>

          <section className="relative z-30   sm:mt-0 md:w-full pb-32 -mb-10 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10 bg-white pt-10 -mt-10  ">
        <div className="pt-20 pb-10 sm:pt-10 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        EVENTS & PARTICIPANT TYPES


            </div>
          <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Name </div>
              <div className=" ">No. of Days</div>
              <div className=" ">No. of Participants</div>
            

          </div> 

            {Event2.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr. NO"]}</div>
                    <div className="">{item["Name"]}</div>
                    <div className="">{item["No. of Days"]}</div>
                    <div className="">{item["No. of Participants"]}</div>
                

                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-1 gap-y-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item["Sr. NO"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Name</div>
                    <div className="">{item["Name"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">No. of Days</div>  
                    <div className="">{item["No. of Days"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">No. of Participants</div> 
                    <div className="">{item["No. of Participants"]}</div>      
                  </div>
                
                </div>
                </>
              )
            })}
            <div className="text-primary text-base p-4">
            *No of activities not yet approved = 5
            </div>
            <div className="sm:hidden grid grid-cols-3 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Particular </div>
              <div className=" ">Remark</div>
        
            

          </div> 

            {Event2_1.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-3 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr. NO"]}</div>
                    <div className="">{item["Particular"]}</div>
                    <div className="">{item["Remark"]}</div>
              
                

                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-1 gap-y-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item["Sr. NO"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Particular</div>
                    <div className="">{item["Particular"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Remark</div>  
                    <div className="">{item["Remark"]}</div>      
                  </div>
             
                
                </div>
                </>
              )
            })}
            
          </section>
        
          <section className="relative z-30   sm:mt-0 md:w-full pb-32 -mb-10 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10 bg-white pt-10 -mt-10  ">
        <div className="pt-20 pb-10 sm:pt-10 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        OTHER ACTIVITIES & PROJECTS COMPLETED/ IN PROCESS


            </div>
          <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              <div className=" sm:hidden">Sr.No.</div>
              <div className=" ">Details of Event</div>
              <div className=" ">Institute</div>
              <div className=" ">Remark</div>
          
          </div> 

            {Event3.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-4 sm:grid-cols-7 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                    <div className=" sm:hidden ">{item["Sr. NO"]}</div>
                    <div className="">{item["Details of Event"]}</div>
                    <div className="">{item["Institute"]}</div>
                    <div className="">{item["Remark"]}</div>
                    
                </div>
                <div className=" sm:grid 3xl:hidden 2xl:hidden gap-y-2 divide-y grid-rows-1 items-center text-left  w-full h-fit overflow-x-hidden sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-1 gap-y-2">
                    <div className="text-slate-400">Sr.No.</div>   
                    <div className="">{item["Sr. NO"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Details of Event</div>
                    <div className="">{item["Details of Event"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Institute</div>  
                    <div className="">{item["Institute"]}</div>      
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                  <div className=" text-slate-400">Remark</div> 
                    <div className="">{item["Remark"]}</div>      
                  </div>
                
                </div>
                </>
              )
            })}
          </section>

     
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default IdeaLabActivities
