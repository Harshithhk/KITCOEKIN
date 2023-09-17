import React from "react"
import Modal from "../../../components/Modal"

const body =
"Welcome to the department of Computer science and engineering (Data Science ).\n" +
"\n" +
"Data Science is an interdisciplinary course combining various domains of Statistics, Analytics, Knowledge Extraction and Data Visualization. In today’s technical world, the exponential growth of data, requires a science ensuring that the huge volumes of data is handled accurately, analysed efficiently, knowledge is extracted appropriately and visualized perfectly. Data Science is a complete integration of all these requirements.\n" +
"\n" +
"This course helps students to build mathematical and engineering skills required to advance their career as a Data Scientist or Data Analyst or Data Engineer and many more. The department aims to train students in rapidly growing areas of data science and encourage them for global certifications. Department places emphasis on all the important aspects of computers engineering such as Programming, Algorithm Design, Operating Systems, Computer Networks, Mobile Communication, Artificial Intelligence, Machine Learning and many more.\n" +
"\n" +
  "Special focus is given to courses like Fundamentals of Data Science, Data Pre-processing, Data Wrangling, Data Analytics, Data Visualization, Big Data etc. These will help the students in acquiring the required knowledge and expertise to start their career as a Data Analyst, Data Engineer, Data Scientist and many other opportunities in the current industry. Many seminars, conferences, certifications and training sessions will be conducted by the department to make the students develop themselves globally.\n" +
  "\n" +
"  Being Head of the Department, I consider myself fortunate enough that we are giving strength, motivation, ethical values to our young aspiring engineers besides technical and professional skill sets under the guidance of visionary management. We always encourage our students to be socially aware, responsible, committed, and to become smart citizens of today’s era. Our department has established significant relationship with the several companies, industrial people and research institutions which will make it easy for the students to get placements in a smoother way.\n" +
"\n" +
"  In line with our vision, we are constantly striving hard to improve in quality and remain committed to focus on excellence at par with global standards.\n" +
"\n" +
"  I welcome you to join our endeavors to deliver and bring out the best for students at KIT’s college of Engineering as a competitive edge. Thank you for visiting us!!!\n" +
"\n" +
  "All the very best.\n" +
  "\n" +
  ""
const hod = () => (
  <section className="relative rounded-3xl z-30  mx-auto pb-10 h-fit flex items-center justify-center px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex gap-x-24 md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
          <p>
            {" "}
            Welcome to the department of Computer science and engineering (Data Science ).

Data Science is an interdisciplinary course combining various domains of Statistics, Analytics, Knowledge Extraction and Data Visualization. In today’s technical world, the exponential growth of data, requires a science ensuring that the huge volumes of data is handled accurately, analysed efficiently, knowledge is extracted appropriately and visualized perfectly. Data Science is a complete integration of all these requirements.
          </p>
          <br />
          <p>
            {" "}
            This course helps students to build mathematical and engineering skills required to advance their career as a Data Scientist or Data Analyst or Data Engineer and many more. The department aims to train students in rapidly growing areas of data science and encourage them for global certifications. Department places emphasis on all the important aspects of computers engineering such as Programming, Algorithm Design, Operating Systems, Computer Networks, Mobile Communication, Artificial Intelligence, Machine Learning and many more.
          </p>
        </div>

        <Modal title="Hod's Message" body={body} pCondition="array">
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
        <div className="relative overflow-hidden bg-transparent sm:-mx-1 sm:-mt-1 ">
          <img
            src="images/Department/cseDS/UPG_1.png "
            className=""
            alt=""
          />
        </div>
        <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
          <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
          Dr. Uma P. Gurav
        </div>
      </div>
    </div>
  </section>
)

export default hod
