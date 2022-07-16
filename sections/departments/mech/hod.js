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
        Welcome to the Department of Mechanical Engineering. It’s my pleasure to introduce the Department.
         The objective of the Department is to empower the faculty, staff and aspiring Engineers with
          essential technical knowledge and skills. The Department has well qualified and highly
           experienced faculty and staff. The Department is committed to deliver the fundamental
            knowledge of mathematics, science, thermal, design and manufacturing engineering to 
            the students. The curriculum is so designed that the graduates are able solve design, 
            thermal and manufacturing engineering problems. The Departmental laboratories are well
             equipped with experimental setups and modern softwares to conduct scientific experiments
              for engineering analysis. The graduates are able to provide solutions to complex 
              engineering problems through academic and industrial projects. The Department
               organizes various co-curricular activities to address issues related to society,
                health, safety and culture. The projects carried out by the students are appreciated
                 by the industry and society for their awareness regarding environment and
                  sustainability and is well published in media and journals.
          <br />
          <br />
          The distinguished employers have appreciated the graduate’s ethical behaviour through
           frequent feedback. The students exhibit excellent individual and 
           team work both in co curricular and extracurricular activities and interdisciplinary
            teams during their projects, seminars and competitions. <br /> <br />

The Department conducts various activities like Group discussion, Aptitude tests for overall
 development of the students. The graduates have acquired self education and lifelong
  learning through excellent performance in competitive examination like GATE, GRE, TOEFL, CAT, UPSC etc,.
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
