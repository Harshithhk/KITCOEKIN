import React from "react"
import Modal from "../../../components/Modal"

const body = 'It is my proud privilege to be the Head of Basic Sciences and Humanities Department at KIT’s College of Engineering (Autonomous), Kolhapur. Whenever people look at a tall building they always tend to see its top; in turn base gets neglected which is the actual balance of the building. Yes, first year of engineering is the base and we at BSH department strengthen that base. Being a ‘Foundation Stone’ of engineering academics, the department of Basic Sciences, Humanities and Foreign Languages of the institute is well equipped with state-of-the-art infrastructure, highly qualified (01 Post Doctorate; 11 Doctorate; 09 PhD Pursuing) and dedicated faculty and staff and learner centric teaching-learning academics.\n'+
'\n'+
'Around 800 students, 12 divisions, 14 Basic Sciences, Humanities, and Engineering Sciences and Foreign Languages courses is brief introduction of the department. The aim of the department is to mould students and start their journey as professional engineers. We take utmost care of the newly admitted students as they are at transition period from schooling to college life. To help them in getting adapted to the change various activities/programs such as Induction Programme, Project Based Learning (PBL), Business Club Activity, Career Awareness, Orientation Programs, Mentorship, Continuous Assessment, various competitions, Study Tours and Parent Meets are conducted.\n'+
'\n'+
'Along with these activities we also follow best practices like sending daily and monthly attendance report of the students to their parents, using MOODLE (Learning Management System) software to give finishing touch to classroom teaching, also we have Contineo software for effective, timely and error free evaluation of the academics, foreign language training is provided to the students as a part of curriculum and we provide extra coaching for slow learners with dedicated time table.\n'+
'\n'+
'All the faculty, staff and first year students are much privileged to have newly constructed floor with 12 smart classrooms, all newly set up labs of Applied Chemistry, Applied Physics, Digital Language lab, Applied Mechanics, Computer Aided Engineering Drawing, Computer Programming, Basic Mechanical and Foreign Language Lab exclusively devoted for first year academics. We are grateful to the Management of KIT for providing this facility realizing the need of the time.';



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
It is my proud privilege to be the Head of Basic Sciences and Humanities Department at KIT’s College of Engineering (Autonomous), Kolhapur. Whenever people look at a tall building they always tend to see its top; in turn base gets neglected which is the actual balance of the building. Yes, first year of engineering is the base and we at BSH department strengthen that base. Being a ‘Foundation Stone’ of engineering academics, the department of Basic Sciences, Humanities and Foreign Languages of the institute is well equipped with state-of-the-art infrastructure, highly qualified (01 Post Doctorate; 11 Doctorate; 09 PhD Pursuing) and dedicated faculty and staff and learner centric teaching-learning academics.</p>
<br/>
<p>          
Around 800 students, 12 divisions, 14 Basic Sciences, Humanities, and Engineering Sciences and Foreign Languages courses is brief introduction of the department. The aim of the department is to mould students and start their journey as professional engineers. We take utmost care of the newly admitted students as they are at transition period from schooling to college life. To help them in getting adapted to the change various activities/programs such as Induction Programme, Project Based Learning (PBL), Business Club Activity, Career Awareness, Orientation Programs, Mentorship, Continuous Assessment, various competitions, Study Tours and Parent Meets are conducted.


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
        <div className="absolute bg-[#24346D] w-[300px] sm:w-[308px] h-40 mt-36"></div>
        <div className="overflow-hidden relative bg-transparent sm:-mx-1 sm:-mt-1 ">
          <img src="images/Department/bsh/dr-sathe-dattatray.png " className=" " alt="mamtakalas.png" />
        </div>
          <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
            <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
            Dr.Dattatraya J.Sathe
          </div> 
      </div>
    </div>
  </section>
)

export default hod
