import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"
import { Tab } from '@headlessui/react'
import ProvisionalAdmission from "../sections/admissions/undergraduate/ProvisionalAdmission"
import Admission2223 from "../sections/admissions/undergraduate/Admission2223"
import Admission2122 from "../sections/admissions/undergraduate/Admission2122"

const AdmissionUndergraduate = () => {
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
            KOLHAPUR INSTITURE OF TECHNOLOGY&apos;S
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] text-4xl sm:text-xl font-bold text-center text-white z-20"
          >
            COLLEGE OF ENGINEERING (AUTONOMOUS), KOLHAPUR
          </h1>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          />
          {/* - */}
          <ProvisionalAdmission />
          <Admission2223 />
          <Admission2122 />
        </section>
        <section className="pt-16 mt-16 mb-[-60px] overflow-x-scroll bg-[#F8F7FC] max-w-screen">
          <div className="flex items-center w-full ml-16 sm:ml-4">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
              INSTITUTE CODE : 6267
            </div>
          </div>
          <section className="relative   z-30 w-[1500px] pb-20 mx-auto h-fit px-14  sm:px-4 sm:pb-10 sm:w-[1000px]">
            <div className="flex items-center w-full h-16 p-2 mt-8 font-semibold text-center rounded-lg shadow-lg ">
              <div className=" w-[75%] text-left pl-2">Course Name</div>
              <div className=" w-[25%] text-left pl-2">
                <p className="ml-1">General Choice Code</p>
                <p className="mt-2">
                  <span className="mr-20">Intake</span>
                  <span>Code</span>
                </p>
              </div>
              <div className=" w-[25%] text-left pl-2">
                <p className="ml-2">TFWS Choice Code</p>
                <p className="mt-2">
                  <span className="mr-20">Intake</span>
                  <span>Code</span>
                </p>
              </div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-6 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[9%] text-left pl-2">30</div>
              <div className=" w-[11%] text-left pl-2">626708210</div>
              <div className=" w-[9%] text-left pl-2">3</div>
              <div className=" w-[10%] text-left pl-2">626708211T</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Civil & Environmental Engineering with
                  specialization in Green Technology & Sustainability
                  Engineering
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-white">
              <div className=" w-[60%] text-left pl-2 ">
                <p className="text-[#24346D]">Bio-Technology Engineering</p>{" "}
                <p className="text-[#F07C00]">
                  {" "}
                  B.Tech (Hons.) Biotechnology Engineering with specialization
                  in Biosimilar Technology
                </p>
              </div>
              <div className=" w-[10%] text-left pl-2">17</div>
              <div className=" w-[10%] text-left pl-2">25</div>
              <div className=" w-[10%] text-left pl-2">29</div>
              <div className=" w-[10%] text-left pl-2">29</div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">18</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">42</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">18</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[25%] text-left pl-2">Computer Science</div>
              <div className=" w-[25%] text-left pl-2">55</div>
              <div className=" w-[25%] text-left pl-2">25</div>
              <div className=" w-[25%] text-left pl-2">29</div>
            </div>
          </section>
         
        </section>
        
         
        <section className=" z-30 pt-[120px] w-[100%] mx-auto pb-20 h-fit bg-[#F8F7FC]  sm:px-4 sm:pb-10">
       
        <div className="flex items-center w-full mb-10 ml-16 sm:ml-4">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
            For Admission Process & Details
            </div>
          </div>
        <div className="flex flex-col items-center sm:flex-col">
           
           <div className=" shadow-lg items-center grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-[#F8F7FC] font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                     <div className="">Department</div>
                     <div className="">Name of Faculty</div>
                     <div className="">Contact Details</div> 
               </div>
         
               <div className="shadow-lg  grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                      {/* row end */}
                      <div className="">Name of Faculty</div>
                      <div className="grid grid-cols-1 divide-y">
                         <div>
                          <p>Dr. Mahesh B. Shinde</p>
                          <p className="text-slate-400">Assistant Professor</p>
                         </div>
                         <div>
                          <p>Dr. Mahesh B. Shinde</p>
                          <p className="text-slate-400">Assistant Professor</p>
                         </div><div>
                          <p>Dr. Mahesh B. Shinde</p>
                          <p className="text-slate-400">Assistant Professor</p>
                         </div><div>
                          <p>Dr. Mahesh B. Shinde</p>
                          <p className="text-slate-400">Assistant Professor</p>
                         </div>
                      </div>
                      <div className="grid grid-cols-1 divide-y">
                         <div>
                          <p>
                            <span className="text-slate-400">Mobile :</span>{" "}
                            7030861199
                          </p>
                      </div>
                         <div><p>
                            <span className="text-slate-400">Mobile :</span>{" "}
                            7030861199
                          </p></div>
                         <div><p>
                            <span className="text-slate-400">Mobile :</span>{" "}
                            7030861199
                          </p></div>
                         <div><p>
                            <span className="text-slate-400">Mobile :</span>{" "}
                            7030861199
                          </p></div>
                      </div>
                      {/* row end */}
               </div>
               <div className="shadow-lg  grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                      {/* row end */}
                      <div className="">Name of Faculty</div>
                      <div className="grid grid-cols-1 divide-y">
                         <div>01</div>
                         <div>02</div>
                         <div>03</div>
                      </div>
                      <div className="grid grid-cols-1 divide-y">
                         <div>01</div>
                         <div>02</div>
                         <div>03</div>
                      </div>
                      {/* row end */}
               </div>
               <div className="shadow-lg  grid grid-cols-3  w-[1100px] h-fit p-2 mt-6 bg-white font-semibold text-center rounded-lg sm:w-full justify-between sm:p-2 m-2 min-h-[55px] ">  
                      {/* row end */}
                      <div className="">Name of Faculty</div>
                      <div className="grid grid-cols-1 divide-y">
                         <div>01</div>
                         <div>02</div>
                         <div>03</div>
                      </div>
                      <div className="grid grid-cols-1 divide-y">
                         <div>01</div>
                         <div>02</div>
                         <div>03</div>
                      </div>
                      {/* row end */}
               </div>
          
           </div>
      
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default AdmissionUndergraduate
