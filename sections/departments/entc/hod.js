import React from "react"
import Modal from "../../../components/Modal"

const body = 'Welcome to the department of Electronics and Telecommunication at KIT’s College of Engineering.\n'+
'The department was established in 2007 with the aims to provide the students with a techno-excellent education in the field of Electronics and Telecommunication,considering the ever changing industrial and societal needs.\n'+
'\n'+
'The department runs UG and PG in Electronics and Telecommunication Engineering and has University approved Research Centrefor PHD scholars. The UG programme is accredited by National Board of Accreditation, New Delhi.\n'+
'\n'+
'Electronics and Telecommunication Engineering emphasizes on the study of basic electronics as well as the advanced telecommunication field. The well-equipped laboratories, with highly qualified faculty members having industrial experience and exposure to foreign university, ensures excellent quality of technical education delivered from our department.\n'+
'\n'+
'Our department takes constant efforts to give more focus in enhancing teaching and learning systems forgetting creativity and critical thinking in the curriculum.The contents of curriculum support realistic learning through course projects, mini-projects,project-based learning and internships with industry. Students are therefore able to develop and apply their knowledge, skills indemonstrating several professional competencies that are critical for engineering practice.Regular monitoring of the conduct of the academic activities is carried out to ensure the presence and learning outcomes of students. Consistently our students secure highest ranksin the merit list at University level.Our students are selected by some of the leading software and hardware companies of the country, Indian administrative services and defense forces.\n'+
'\n'+
'Multidisciplinary activities are conducted under professional societies like IETE, ISTE and by our students association “ASSETS”.The department organizes various workshops, expert talks and training programs on recent developments in Electronics and Telecommunication in association with industries for the benefit of faculty and students.\n'+
'\n'+
'Our department aims to be a part of your success as an undergraduate, postgraduate, research scholar in Electronics and Telecommunication Engineering.';

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
Welcome to the department of Electronics and Telecommunication at KIT’s College of Engineering.

</p>
<p>The department was established in 2007 with the aims to provide the students with a techno-excellent education in the field of Electronics and Telecommunication,considering the ever changing industrial and societal needs.

</p>
<p>The department runs UG and PG in Electronics and Telecommunication Engineering and has University approved Research Centrefor PHD scholars. The UG programme is accredited by National Board of Accreditation, New Delhi.

</p>
<br/>
<p>          
Electronics and Telecommunication Engineering emphasizes on the study of basic electronics as well as the advanced telecommunication field. The well-equipped laboratories, with highly qualified faculty members having industrial experience and exposure to foreign university, ensures excellent quality of technical education delivered from our department.


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
        <div className="absolute bg-[#24346D] w-[288px] sm:w-[295.1px] h-40 mt-36"></div>
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
