import React from "react"
import Modal from "../../../components/Modal"

const body = ["Kolhapur Institute of Technology is one of the pioneering institutes in Maharashtra started by a team of industrialists on self-financed basis in 1983. Recognizing the need of contemporary metallurgy industry then, KIT started the courses in Production Engineering, with other branches like Electronics Engineering, Civil Engineering , Environmental Engineering."
,
"The dynamic and proactive management of KIT’s College of Engineering Kolhapur took an early note of the significant role that was to be played by Biotechnology Engineers in future industrial development of biotechnology related processes and products by establishing department of Biotechnology Engineering in 2002 with approval from DTE and AICTE, India. It has a unique place in the development of Biotechnology engineering discipline in Maharashtra."
,
"We currently offer B. Tech. (Biotechnology) programme at undergraduate and M.Tech (Biochemical Engineering and Biotechnology) programme at post graduate level."
,
"When we think of an engineering career, we think only of conventional branches. The convention that students with PCM opt for engineering and students with PCB opt for medicine. But in 21st Century, there is an intervention of biology in every aspect of life. We talk about organic farming , we observe tremendous developments in biomedical diagnosis, we see artificial intelligence mimicking biology entering into our life. Currently the COVID-19 pandemic showed us the importance biotech research where every pharma company is behind the vaccine and drug research on COVID-19."
,
"Biotechnology field in engineering and technological aspect encompasses many areas including biopharmaceuticals developments, industrial biotechnology, food biotechnology, environmental biotech, biomedical engineering, bioengineering, etc. Considering biotechnology as a fundamental research, it includes different genetic technologies in animal and plant biotechnology, cell and tissue engineering etc."
,
"In B Tech Biotech 4 years UG programme that we offer, we focus more on studies of fermentative productions of various products like insulin like biopharmaceuticals, antibiotics, fine chemicals, enzymes etc. The current Indian scenario shows that more than 65% of industry is in biopharma sector and hence we have designed our syllabus by aiming at the future scope of job opportunities and higher studies. We have included inputs from different industry persons and academicians from reputed institutes for a tailor-made syllabus."
,
"As this is the pioneering programme started since 2002, 14 batches with more than 700 students have completed their bachelors from our department till 2019. More than 100 students went abroad for higher studies like MS or PhD in the World top 100 Universities like University of Pennsylvania, MIT, Northeastern University, Northwestern University, University of Illinois and few are working there in reputed indusries such as Amgen, Conagen, Adimab, Pall etc."
,
"We do provide the coaching for competitive exams like GATE for pursuing higher studies. Every year, our students qualify GATE with good national ranks. In the year 2019, 6 of our students qualified GATE with All India Ranking in first 500 and 3 of them were in first 100. Many of our students pursued M Tech in India from reputed institutes like IITs, NITs, ICT, as well as some private organizations."
,
"We have very strong alumni network with maximum number of students connected across all batches. Many of our alumni are working in well-established biopharma and related companies like Biocon, Syngene, Serum, Reliance, Intas, Wockhardt, Dr. Reddy’s, DEE, Embio etc. It helps current students to fetch placements, internships and career counseling. We promote alumni mentors to connect to current students for technical , career and entrepreneurial guidance."
,
"We have strong industry linkages where we interact with industry persons of different hierarchy for syllabus revisions, industry visit and training for students, long term internships and placements. Every year we have more than 90 % placements either directly in jobs or in higher education. Currently industry recognizes KIT as an institute providing good human resource in Biotech sector due to wide spread alumni among major Biotech players. We have few tie ups with the industries and institutes we do promote the collaborative research. We have MoUs with Embio Mahad, Mahalaxmi E-recyclers etc."
,
"We have well established laboratories infrastructure which can give hands on experience to our students."
,
"We do promote additional best practices such as -"
,
"Career Counseling :"
,
"We have designed a protocol to have individual career counseling where we guide each students from 2nd year to final year. Under this activity, we help them for industrial exposure, mini projects in the department, alumni mentoring etc. for profile building."
,
"Online Certifications :"
,
"We promote NPTEL like certifications which are online technical certificate courses run by IITs. Few of our students have been in toppers in these exams and got internship offers from IITs.We have departmental students’ association ‘ enGENEers’ under which many events are organized and conducted. In the recent year we conducted our national level model and paper presentation competition, Corona virus awareness programme, visit and help to few NGOs."
,
"Currently looking at the COVID-19 pandemic, we can understand the global need of prevention and cure for this pandemic. It can only be done through the research in vaccine development and drug development which is a part of Biotechnology. It can show us what scope Biotechnology can have in our everyday lives. So, if you are ready for a future with unlimited opportunities, if you want to work in an unconventional field, if you want to contribute to the well-being of humankind, biotechnology engineering can be the perfect career to pursue."]



const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-10 h-fit bg-white px-14 sm:px-4 sm:pb-0 sm:mb-24">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base  w-[800px] text-xl text-accent text-justify">
<p>       Welcome to the department of Electronics and Telecommunication at KIT’s College of Engineering.
The department was established in 2007 with the aims to provide the students with a techno-excellent education in the field of Electronics and
 Telecommunication,considering the ever changing industrial and societal needs.
</p><br/>
<p>      The department runs UG and PG in Electronics and Telecommunication Engineering and has University
   approved Research Centrefor PHD scholars. The UG programme is accredited by National Board of Accreditation, New Delhi..
     <br /><br />Electronics and Telecommunication Engineering emphasizes on the study of basic electronics as well as the advanced telecommunication field. The well-equipped laboratories,
      with highly qualified faculty members having industrial experience and exposure to foreign university,
       ensures excellent quality of technical education delivered from our department.
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
          <img src="mamta-kalas_preview_rev_1.png " className=" " alt="mamtakalas.png" />
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
