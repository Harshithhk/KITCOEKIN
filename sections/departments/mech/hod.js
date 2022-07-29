import React from "react"
import Modal from "../../../components/Modal"

const body = 'Welcome to the Department of Mechanical Engineering. It’s my pleasure to introduce the Department. The objective of the Department is to empower the faculty, staff and aspiring Engineers with essential technical knowledge and skills. The Department has well qualified and highly experienced faculty and staff. The Department is committed to deliver the fundamental knowledge of mathematics, science, thermal, design and manufacturing engineering to the students. The curriculum is so designed that the graduates are able solve design, thermal and manufacturing engineering problems. The Departmental laboratories are well equipped with experimental setups and modern softwares to conduct scientific experiments for engineering analysis. The graduates are able to provide solutions to complex engineering problems through academic and industrial projects. The Department organizes various co-curricular activities to address issues related to society, health, safety and culture. The projects carried out by the students are appreciated by the industry and society for their awareness regarding environment and sustainability and is well published in media and journals.\n'+
'\n'+
'The distinguished employers have appreciated the graduate’s ethical behaviour through frequent feedback. The students exhibit excellent individual and team work both in co curricular and extracurricular activities and interdisciplinary teams during their projects, seminars and competitions.\n'+
'\n'+
'The Department conducts various activities like Group discussion, Aptitude tests for overall development of the students. The graduates have acquired self education and lifelong learning through excellent performance in competitive examination like GATE, GRE, TOEFL, CAT, UPSC etc,. The students have shown their capabilities to provide viable engineering solutions to industrial, agricultural problems through various professional societies like SAEINDIA, ASM, ISHRAE, ISNEE, ISNT, BeTIC, MECHANAS, LAMPS and Mechatronics club. The graduates are working in Multinational Companies, Defense Services, Administrative services and Academic Institutions in India and abroad.';

const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-10 h-fit bg-white px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>   Welcome to the Department of Mechanical Engineering. It’s my pleasure to introduce the Department. The objective of the Department is to empower the faculty, staff and aspiring Engineers with essential technical knowledge and skills. The Department has well qualified and highly experienced faculty and staff. The Department is committed to deliver the fundamental knowledge of mathematics, science, thermal, design and manufacturing engineering to the students. The curriculum is so designed that the graduates are able solve design, thermal and manufacturing engineering problems.
</p>
<br/>
<p>          
Departmental laboratories are well equipped with experimental setups and modern softwares to conduct scientific experiments for engineering analysis. The graduates are able to provide solutions to complex engineering problems through academic and industrial projects. The Department organizes various co-curricular activities to address issues related to society, health, safety and culture. The projects carried out by the students are appreciated by the industry and society for their awareness regarding environment and sustainability and is well published in media and journals.

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
          <img src="images/Department/mech/u-s-bhapkar.png " className=" " alt="mamtakalas.png" />
        </div>
          <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
            <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
            Dr. Uday S. Bhapkar

          </div> 
      </div>
    </div>
  </section>
)

export default hod
