import React from "react"
import Modal from "../../../components/Modal"

const body = 'Environmental issues and Environmental Quality are the matters of serious concern and Top Priority at National as well as International level. Hence this discipline has very vast potential, opportunities in India as well as Abroad and better promise compared to other branches. Because of vast number of Engineering colleges and Crowding for some branches; the competition after four years in the field of Computer/IT/Electronics-ETC/ Mechanical / Civil will be CUT THROAT!!!!\n'+
'\n'+
'Kolhapur Institute of Technology\'s College of Engineering (Autonomous), Kolhapur is the only Institute in Maharashtra offering B.Tech in Environmental Engineering (04 Years Duration) since last 34 years. There are very few Institutes in India offering such program. Since long, students from all over India have graduated in this promising course. Department also offers M.Tech Program in Environmental Engineering (02 Years Duration). Department is Accredited three times by National Board of Accreditation (NBA), New Delhi.\n'+
'\n'+
'Department of Environmental Engineering of KITCoE, Kolhapur has been imparting education and training in all aspects of sustainable environment. The students undergo an academic program based on necessary fundamental concepts of Civil Engineering and emphasizing on aspects of Environmental pollution and control, Environmental management, Environmental policy and laws along with Clean Development Mechanism (CDM) and Health and Safety (EHS) of Industry and society which is everyone’s concern at Global, Regional and Local level.\n'+
'\n'+
'Over the period, we have changed our syllabus as per need and demand of industry and society and we are proud to offer such program only at KIT in Maharashtra. Since 2011, we are offering some professional courses of industrial demands which shall add to value to our student’s profile as well as can handle the issues of EHS at Industry. Internal Auditors training in EMS, ISO 14001, OHSAS 18001, Energy Management ISO 50001 and Carbon Foot printing ISO 14064 were offered by our department in collaboration with professionals from various organizations. We are sure that students of who have undergone above training may become Internal Auditors.\n'+
'\n'+
'The curriculum is revised from time to time with the suggestions and recommendations of the experts from Professional; Industrial field, Academic Institutes in India (IITs, NITs, and renowned Premier Engineering Colleges) as well as Officials from Government bodies like Pollution Control Board. The present updated, upgraded curriculum is covering all major subjects of Civil Engineering with emphasis on all core subjects of Environmental Engineering as per the current and future needs of industry and society.\n'+
'\n'+
'The Department of Environmental Engineering has highly qualified and experienced faculty with industrial exposure also. Well equipped and furnished laboratories provide for developing laboratory/practical skills and project work. The department has very good infrastructure equipped with necessary facilities, seminar hall & departmental library. Teaching learning process is effective by use of MOODLE and ICT based education. Student progress is monitored by effective mentoring and feedback system.\n'+
'\n'+
'Over last few years it is observed that Environmental Engineering is a preferred branch among girls also. Some graduates after B.Tech Environmental Engineering are working in Pollution Control Board of Maharashtra, J&K, Goa, Haryana, Delhi, Rajasthan etc. Some are working in Corporate Companies, Multi National Companies, Renowned Consultancy Firms, Energy Departments in India and Abroad. Some have pursued their Masters studies in Reputed Universities in US, UK, Australia, Canada, Germany, AIT Bangkok (Thailand) as well as VJTI,IITs/ NITs in India. We, at Department of Environmental Engineering, cultivate and mould students as per industrial demand by mentoring them with effective presentations and soft skills. One has to acquire these skills with fluency over English language to grab prestigious jobs in Fortune 500 MNC’s. We offer all kinds of training and guidance to students to be successful in the career. Job placement for such branch is high if one willing to relocate anywhere and work for job satisfaction but not only for higher packages, perks and allowances. We are proud; our graduates of Environmental Engineering are working at prestigious positions in renowned organizations all over the World such United Nations well as Fortune 500 Multinational and transnational companies across India and World. We do offer campus placement for our students which is Add-on voluntary service offered by KIT and the eligible ones are placed in good organizations. Students with consistent academic performance grab any job even without any campus placements service shortly after graduation. Academically strong students go for higher studies in IITs, NITs and in reputed Universities abroad.\n'+
'\n'+
'Finally, I wish to advice the aspiring students who wish to opt a career in Engineering that any branch of Engineering is equally important but if you wish to succeed, you need to have sound knowledge base. During the studentship; enhance your presentations and soft skills with fluent English which is demand of any Industry. The branch of Environmental Engineering is the only branch which has very promising future as the issue of Environmental Pollution and its Control is becoming urgent and top priority issue at all levels.';



const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-10 h-fit bg-white px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>       
Environmental issues and Environmental Quality are the matters of serious concern and Top Priority at National as well as International level. Hence this discipline has very vast potential, opportunities in India as well as Abroad and better promise compared to other branches. Because of vast number of Engineering colleges and Crowding for some branches; the competition after four years in the field of Computer/IT/Electronics-ETC/ Mechanical / Civil will be CUT THROAT!!!!

  <br /><br />

  Kolhapur Institute of Technology's College of Engineering (Autonomous), Kolhapur is the only Institute in Maharashtra offering B.Tech in Environmental Engineering (04 Years Duration) since last 34 years. There are very few Institutes in India offering such program. Since long, students from all over India have graduated in this promising course. Department also offers M.Tech Program in Environmental Engineering (02 Years Duration). Department is Accredited three times by National Board of Accreditation (NBA), New Delhi.

        
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
      <div className="md:mx-auto w-[300px] h-[400px] bg-transparent   mt-28 mr-6 rounded-xl text-white text-2xl md:text-xl  items-center justify-between flex flex-col md:mt-14">
        <div className="absolute bg-[#24346D] w-[300px] sm:w-[305px] h-40 mt-36"></div>
        <div className="overflow-hidden relative bg-transparent -top-8 sm:-mx-1 sm:-mt-1 ">
          <img src="images/department/envo/akshay-thorvat.png" className=" " alt="mamtakalas.png" />
        </div>
          <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
            <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
            Dr. Akshay R. Thorvat

          </div> 
      </div>
    </div>
  </section>
)

export default hod
