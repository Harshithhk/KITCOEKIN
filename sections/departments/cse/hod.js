import React from "react"
import Modal from "../../../components/Modal"

const body ='The Computer Science and Engineering Department was started in the year 1999 with intake capacity of 60 seats. From 2018, the Department has an additional intake of 60 students, so total intake is 180 students. CSE is identified as one of the most challenging and as an essential source of tools and techniques for advancement in every multidisciplinary areas. Department has been accredited by NAAC with CGPA 3.12 in 2016. It has been accredited by NBA in 2008 and recently in 2018.\n'+
'\n'+
'We have highly committed and competitive team of faculty fraternity, who experiments and adapts new innovative pedagogy methods for making all the technical concepts clear as well to keep our students abreast with the latest technologies, skills and developments emerging in this field. We have one Doctorate Faculty member and 8 Faculty members are perusing Ph.D from various universities. This practice has proved our students very challenging and successful in various domains of competitions at university, state and national level.\n'+
'\n'+
'We have well equipped class rooms with multimedia facilities, 13 Labs with latest software’s and 24 hours High Speed internet (Leased line) , well networked Lab setups and Department Library for the students to access, additional WIFI facility across the campus , which makes our students well advanced on professional front. We promote our students to take and develop challenging projects, well from second year and our students have proved by winning many awards for being the best projects at the university and state level in the domain of Computer Science and information Technology.\n'+
'\n'+
'Department makes use of Moodle which is web based Free Open Source Software for educators to create effective online learning management system. Moodle is effectively used for coursewise student assessment and for resource sharing such as sharing of power point slides, notes, articles, papers etc. The students can access the resources globally, and also practices online submission for the student’s assignments and practical assignments using moodle\n'+
'\n'+
'We are proud for our students of Computer Science and Engineering, who have participated in many national and technical conferences throughout India and have achieved many outstanding positions and appreciation for their excellent performance. We are proud to see our students placed in esteemed companies like Google, TCS, JOHN DEERE, PERSISTENT, JADE GLOBAL, iGATE, ZENSAR, L&T INFOTECH and so on with more than 85% students being placed in the academic year 2018-19.\n'+
'\n'+
'We have CSI (Computer Society of India) Student chapter, which is the largest professional Computer Engineer’s society in INDIA and have been conducting several workshops, events, activities for the benefit of our students.CSI branch of our institute has been instrumental in bringing various National level Awards\n'+
'\n'+
'Computer Science student association, ACSES have been actively contributing in organizing mega events like WIZARD (Programming Contests) and various other technical and non technical activities every year.\n'+
'\n'+
'We conduct activities under Student Development Cell of the department after the college hours. Under this cell we conduct many workshops/ Activities /seminars to develop their personality and professional Skills.';


const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-10 h-fit bg-white px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>        The Computer Science and Engineering Department was started in the year 1999 with 
  intake capacity of 60 seats. From 2018, the Department has an additional intake of 60 students
  , so total intake is 180 students. CSE is identified as one of the most challenging and as an 
  essential source of tools and techniques for advancement in every multidisciplinary areas
  . Department has been accredited by NAAC with CGPA 3.12 in 2016. It has been accredited by
   NBA in 2008 and recently in 2018.
</p><br/>
<p>          We have highly committed and competitive team of faculty fraternity, who experiments
   and adapts new innovative pedagogy methods for making all the technical concepts clear as well
    to keep our students abreast with the latest technologies, skills and developments emerging in
     this field. We have one Doctorate Faculty member and 8 Faculty members are perusing Ph.D from 
     various universities. This practice has proved our students very challenging and successful in
      various domains of competitions at university, state and national level.
</p>

    

        </div>
       
        <Modal title="Hod's Message" body={body} >
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
          <img src="images/Department/cse/mamta-kalas_preview_rev_1.png " className=" " alt="mamtakalas.png" />
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
