import React from "react"
import Modal from "../../../components/Modal"

const body = 'The Department of Electrical Engineering aims in prompt excellence of education for emerging Electrical Engineers to furnish the essentials of civilization and manhood. The department perceives moral performs in teaching-learning and research. We have incessant activities to train and nurture our students for employability and inclusive development.\n'+
'\n'+
'KIT’s College of Engineering (Autonomous), Kolhapur has started a 4 years’ B. Tech. in Electrical Engineering degree program (UG) with an intake capacity of 60 students. The degree certificate is awarded by Shivaji University, Kolhapur. The goal of the department is to provide the students with excellent education in the field of Electrical Engineering.\n'+
'\n'+
'This UG program begins with the study of fundamentals of Electrical Engineering and then commences an extensive treatment on conventional courses as well as courses in the emerging fields. This includes courses like Electrical Machines, Electrical Power Systems, Control Systems, PLC and SCADA, Energy Management, Electric Vehicles, Renewable Energy Sources. The program also gives a substantial exposure to advances in Electronics and Computer software used in the field of Electrical Engineering.\n'+
'\n'+
'The department has full-fledged faculty members with high academic & industrial experience. The department has well qualified and highly experienced faculty members assisted by skilled supporting staff. One faculty has a Ph.D. and three others are pursuing their research work for Ph.D. The department has 8 well equipped laboratories to cater the needs of B.Tech. curriculum.\n'+
'\n'+
'The department has a roadmap to organize industrial visits, study tours, technical workshops and soft skill training on interview techniques and group discussions for the placements of students in high packages industries.\n'+
'\n'+
'We are building MoUs with industries and organizations to provide necessary exposure to the students to groom them and to get themselves placed in well-known industries like Adani, MSEDCL, MSETCL, CG, PARI, KPIT, SIEMENS, BHEL etc.\n'+
'\n'+
'The department has a roadmap to organize industrial visits, study tours, technical workshops and soft skill training on interview techniques and group discussions.\n'+
'\n'+
'We are building MoUs with industries and organizations to provide necessary exposure to the students to groom them and to get themselves placed in well-known industries like Adani, MSEDCL, MSETCL, CG, PARI, KPIT, SIEMENS, BHEL etc.';


const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-10 h-fit bg-white px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>        The Department of Electrical Engineering aims in prompt excellence of education
   for emerging Electrical Engineers to furnish the essentials of civilization and manhood. 
   The department perceives moral performs in teaching-learning and research. We have 
   incessant activities to train and nurture our students for employability and inclusive 
   development.



</p><br/>
<p>         KIT’s College of Engineering (Autonomous), Kolhapur has started a 4 years’ B. 
  Tech. in Electrical Engineering degree program (UG) with an intake capacity of 60 students.
   The degree certificate is awarded by Shivaji University, Kolhapur. The goal of the 
   department is to provide the students with excellent education in the field of Electrical 
   Engineering.


</p><br/>
<p>
This UG program begins with the study of fundamentals of Electrical Engineering and then 
commences an extensive treatment on conventional courses as well as courses in the emerging
 fields. This includes courses like Electrical Machines, Electrical Power Systems, Control
  Systems, PLC and SCADA, Energy Management, Electric Vehicles, Renewable Energy Sources.
   The program also gives a substantial exposure to advances in Electronics and Computer 
   software used in the field of Electrical Engineering.
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
        <div className="absolute bg-[#24346D] w-[300px] sm:w-[305px] h-40 mt-36"></div>
        <div className="overflow-hidden relative bg-transparent sm:-mx-1 sm:-mt-1 ">
          <img src="images/Department/electrical/prof-dr-v-s-bugade.png " className=" " alt="mamtakalas.png" />
        </div>
          <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
            <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
            Dr. Vilas S. Bugade

          </div> 
      </div>
    </div>
  </section>
)

export default hod
