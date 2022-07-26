import React from "react"
import Modal from "../../../components/Modal"

const body = 'Currently, technical education is at a crossroads. Graduates of computer science are expected to possess not only the fundamental knowledge of computer science but also a natural aptitude for the liberal arts, creative attitude, core values, and understanding of sustainability issues. To assist students to prepare for the future, emerging areas like cyber security, machine learning, cloud computing, IoT, analytics, etc. need to be incorporated into the curriculum. The generation needs "business engineers," a type of engineering talent geared toward Business 4.0. These graduates today need to comprehend the fundamental principles of business management and have the mindset of innovation in addition to understanding future technology.\n'+
'\n'+
'To meet this increasing demand for technical expertise with knowledge of digital technology, KIT’s College of Engineering(Autonomous), Kolhapur in collaboration with India’s leading Company Tata Consultancy Services (TCS) is offering a four-year specialized B. Tech programme titled “Computer Science and Business Systems”.\n'+
'\n'+
'Computer Science and Business Systems is a blend of Computer Science and Management and covers many emerging topics in the field of computing. The course structure is built with the aim to impart certain knowledge and skill sets to the students and develop certain attitudes and behaviors among the students to make them successful in the era of Business 4.0. After completion of the programme students will be more industry ready and employable engineers who can drive innovation and add value to the organization they work for as well as to the nation in the era of Business 4.0.\n'+
'\n'+
'The excellent infrastructure and facilities offered by our department enable teachers and students to excel in the classroom and be adaptable enough to tackle any research challenge. Our teachers make major contributions to the field of CSBS both theoretically and practically, and as the head of the department, I feel myself fortunate to be leading a fantastic team of committed employees and inspiring lecturers.\n'+
'\n'+
'KIT’s College of Engineering(Autonomous),Kolhapur in collaboration with India’s leading Company Tata Consultancy Services (TCS) is offering a four-year specialized B. Tech programme titled “Computer Science and Business Systems” to cater to the rising need of engineering talent with skills in technology. This state-of-art course aims to impart knowledge of cutting-edge technologies and business skills with hands-on exposure to make students industry-ready.\n'+
'\n'+
'This curriculum aims to ensure that the students graduating from the program not only gain the knowledge about core topics of Computer Science but also develop an equal appreciation of humanities, management sciences and human values. The students will be also exposed to the emerging topics such as Analytics, Machine Learning, Cloud Computing, Internet of Things to make them industry ready at the end of their four years of study.\n'+
'\n'+
'Key Objectives\n'+
'Learning Common Business Principles\n'+
'Exploring Business Discipline and Service Orientation\n'+
'Innovative Ability, and\n'+
'Strong Human Ethics and Values\n'+
'Salient Features of the CSBS Programme:\n'+
'Industry-Relevant Curriculum designed by TCS - As an outcome of MoU signed between TCS and AICTE.\n'+
'Industrial Training & live projects supported by TCS\n'+
'Dedicated faculty members trained by TCS to deliver the program\n'+
'High standard of teaching, learning and evaluation processes monitored by TCS\n'+
'Active mentoring by TCS Expert';


const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-10 h-fit bg-white px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>        Currently, technical education is at a crossroads. Graduates of computer science are expected 
  to possess not only the fundamental knowledge of computer science but also a natural aptitude for the 
  liberal arts, creative attitude, core values, and understanding of sustainability issues. To assist
   students to prepare for the future, emerging areas like cyber security, machine learning, cloud 
   computing, IoT, analytics, etc. need to be incorporated into the curriculum. The generation needs
    "business engineers," a type of engineering talent geared toward Business 4.0. These graduates today 
    need to comprehend the fundamental principles of business management and have the mindset of innovation
     in addition to understanding future technology.


</p><br/>
<p>         To meet this increasing demand for technical expertise with knowledge of digital technology, 
  KIT’s College of Engineering(Autonomous), Kolhapur in collaboration with India’s leading Company 
  Tata Consultancy Services (TCS) is offering a four-year specialized B. Tech programme titled “Computer
   Science and Business Systems”.
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
      <div className="md:mx-auto w-[300px] h-[370px] bg-transparent   mt-28 mr-6 rounded-xl text-white text-2xl md:text-xl  items-center justify-between flex flex-col md:mt-14">
        <div className="absolute bg-[#24346D] w-[300px] sm:w-[305px] h-40 mt-36"></div>
        <div className="overflow-hidden relative bg-transparent sm:-mx-1 sm:-mt-1 ">
          <img src="images/Department/cseBusiness/grantej-otari.png " className=" " alt="mamtakalas.png" />
        </div>
          <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
            <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
            DR.Mamata S.Kalash
          </div> 
      </div>
    </div>
  </section>
)

export default hod
