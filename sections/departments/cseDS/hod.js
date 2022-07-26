import React from "react"
import Modal from "../../../components/Modal"

const body = 'Computer science has become one of the fastest-growing engineering streams due to the tremendous rise of computer systems and their integration into all aspects of life. Whether it\'s a basic cell phone or a complex space shuttle, computers are present and play an important role in almost every aspect of life.\n'+
'\n'+
'Data Science is an interdisciplinary area that extracts knowledge and insights from a variety of structured and unstructured data using scientific methods, procedures, algorithms, and systems. Data science is all about using data to solve problems. All components of technology required for obtaining, storing, analysing, and comprehending data are brought together in data science.\n'+
'\n'+
'The goal of this course is to generate graduates who have the theoretical understanding and skill set to deal with all areas of data creation, management, processing, and conversion to knowledge. Students who complete the proposed programme will have a far greater depth and breadth of knowledge in the broad field of data science.\n'+
'\n'+
'The curriculum is designed in close collaboration with industry which includes in-demand tools and technologies. The Department of CSE in Data Science is comprised of a group of highly trained and experienced educators who not only convey wisdom and knowledge, but also help students develop as data thinkers.\n'+
'\n'+
'Our department provides great infrastructure and facilities to enable faculty and students to thrive in teaching and be dynamic enough to take on any research challenge.\n'+
'\n'+
'As the Department\'s Head, I consider myself fortunate to be managing a remarkable team of dedicated employees and inspiring professors, Our professors make significant contributions to the field of data science both theoretically and practically. Our department has significant relationships to industry, research institutions, and the general public.\n'+
'\n'+
'All the very best.\n'+
'\n'+
'';


const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-10 h-fit bg-white px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>        Computer science has become one of the fastest-growing engineering streams due to the tremendous
    rise of computer systems and their integration into all aspects of life. Whether it's a basic cell phone
    or a complex space shuttle, computers are present and play an important role in almost every aspect of life.


</p><br/>
<p>         Data Science is an interdisciplinary area that extracts knowledge and insights from a variety 
          of structured and unstructured data using scientific methods, procedures, algorithms, and systems.
          Data science is all about using data to solve problems. All components of technology required for 
          obtaining, storing, analysing, and comprehending data are brought together in data science.
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
      <div className="md:mx-auto w-[300px] h-[370px] bg-transparent   mt-16 mr-6 rounded-xl text-white text-2xl md:text-xl  items-center justify-between flex flex-col sm:mt-16 md:mt-14">
        <div className="absolute bg-[#24346D] w-[300px] sm:w-[305px] h-40 mt-36"></div>
        <div className="overflow-hidden relative bg-transparent sm:-mx-1 sm:-mt-1 ">
          <img src="images/Department/cseDs/ajit-s-patil.png " className=" " alt="mamtakalas.png" />
        </div>
          <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
            <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
            Mr. Ajit S. Patil
          </div> 
      </div>
    </div>
  </section>
)

export default hod
