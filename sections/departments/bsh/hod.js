import React from "react"

const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base md:text-left w-[800px] text-xl text-accent text-justify">
        It is my proud privilege to be the Head of Basic Sciences and Humanities
         Department at KIT’s College of Engineering (Autonomous), Kolhapur. Whenever 
         people look at a tall building they always tend to see its top; in turn base 
         gets neglected which is the actual balance of the building. Yes, first year of 
         engineering is the base and we at BSH department strengthen that base. Being a 
         ‘Foundation Stone’ of engineering academics, the department of Basic Sciences, 
         Humanities and Foreign Languages of the institute is well equipped with state-of-the-art
          infrastructure, highly qualified (01 Post Doctorate; 11 Doctorate; 09 PhD Pursuing)
         and dedicated faculty and staff and learner centric teaching-learning academics.
          <br />
          <br />
          Around 800 students, 12 divisions, 14 Basic Sciences, Humanities, and Engineering Sciences
          and Foreign Languages courses is brief introduction of the department. The aim of the department
          is to mould students and start their journey as professional engineers. We take utmost care of
          the newly admitted students as they are at transition period from schooling to college life.
          To help them in getting adapted to the change various activities/programs such as 
          Induction Programme, Project Based Learning (PBL), Business Club Activity, Career
          Awareness, Orientation Programs, Mentorship, Continuous Assessment, various competitions,
          Study Tours and Parent Meets are conducted.
        </div>
      </div>
      <div className="md:mx-auto w-[300px] h-[360px] bg-[#24346D] mt-28 mr-6 rounded-xl p-3 text-white text-2xl md:text-xl  items-center flex flex-col md:mt-14">
        <div className="overflow-hidden bg-white rounded-xl">
          <img src="/images/Department/mamta-kalas.png" alt="mamtakalas.png" />
        </div>
        <div className="mt-2">DR.Mamata S.Kalash</div>
      </div>
    </div>
  </section>
)

export default hod
