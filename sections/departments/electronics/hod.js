import React from "react"
import Modal from "../../../components/Modal"

const body = 'This department has been running a U.G. course in Electronics Engineering since 1983. It has to its credit an excellent track record in terms of students’ academic performance over the years. Students consistently feature among the ‘top ten rankers’ at the university level. Besides they have also been performing well in competitive exams like GATE, TOFEL, etc. Many of them have made a mark in reputed companies at the national and international level.\n'+
'\n'+
'It regularly conducts various courses to keep pace with the dynamics of change by teaming up with various reputed institutions and organizations. At KIT, Research and Development is an integral part of every academic discipline. Our R&D efforts to advance and widen the knowledge base prove beneficial to both the faculty and students. We believe that there’s nothing like ‘education that finds a direct application in the industry’. And we aim to provide just that with industrial visits, study tours and specific workshops on interview techniques and group discussions.Being strategically located in a region that’s blossoming industrially, outstanding projects worked on by students receive financial support of the industry. We also encourage students into active consultancy for various organizations in the industry giving them insights and inputs that prove helpful.\n'+
'\n'+
'Campus interviews help students get acquainted with the requirements of the industry and also help them find placements in well-known industries like KSB, TELCO, SIEMENS, TATA HONEYWELL, BHEL etc. The department draws upon the rich experience of 11 qualified and highly experienced faculty members. Three of the faculty members are in the process of adding on to this rich heritage by completion of their doctorate degrees. Besides majority of them also have a Professional experience ranging from 2 to 10 years. Electronics department has received NAAC A Accreditation in the year 2014-15 and NBA Accreditation in the year 2017-18.\n'+
'\n'+
'The department also invests much on its laboratories, to provide excellent facility to students as much as possible. Click here to view departmental profile';

const hod = () => (
  <section className="relative rounded-3xl z-30  mx-auto pb-10 h-fit flex items-center justify-center px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex gap-x-24 md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>        This department has been running a U.G. course in Electronics Engineering since 
  1983. It has to its credit an excellent track record in terms of students’ academic 
  performance over the years. Students consistently feature among the ‘top ten rankers’ 
  at the university level. Besides they have also been performing well in competitive exams
   like GATE, TOFEL, etc. 
  Many of them have made a mark in reputed companies at the national and international level.



</p><br/>
<p>         It regularly conducts various courses to keep pace with the dynamics of change
   by teaming up with various reputed institutions and organizations. At KIT, Research and
    Development is an integral part of every academic discipline. Our R&D efforts to advance
     and widen the knowledge base prove beneficial to both the faculty and students. We 
     believe that there’s nothing like ‘education that finds a direct application in the 
     industry’. And we aim to provide just that with industrial visits, study tours and
      specific workshops on interview techniques and group discussions.Being strategically
       located in a region that’s blossoming industrially, outstanding projects worked on 
       by students receive financial support of the industry. We also encourage students
        into active consultancy for 
  various organizations in the industry giving them insights and inputs that prove helpful.
</p>

    

        </div>
       
        <Modal title="Hod's Message" body={body} pCondition ="array">
        <div className="flex gap-[10px] mt-4 md:mt-2 justify-center hover:cursor-pointer text-[#3D3859] md:ml-0">
          <div className="italic  font-[#3D3859] font-bold hover:underline text-[17.9865px] md:text-base  tracking-[0.005em]">
            Read more
          </div>
          <span className="font-bold">
            {">"}
            {">"}
          </span>
        </div>
        </Modal>
      </div>
      {/* -------------- */}
      <div className="md:mx-auto w-[300px] h-[370px] bg-transparent   mt-28 mr-6 rounded-xl text-white text-2xl md:text-xl  items-center justify-between flex flex-col sm:mt-16 md:mt-14">
        <div className="absolute bg-[#24346D] w-[300px] sm:w-[305px] h-40 mt-36"></div>
        <div className="overflow-hidden relative bg-transparent sm:-mx-1 sm:-mt-1 ">
          <img src="images/Department/electronics/a-r-nigavekar.png " className=" " alt="mamtakalas.png" />
        </div>
          <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
            <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
            Mr. Atul R. Nigavekar

          </div> 
      </div>
    </div>
  </section>
)

export default hod
