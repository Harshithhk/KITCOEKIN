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
        The Computer Science and Engineering Department was started in the
        year 1999 with intake capacity of 60 seats. From 2018, the Department
        has an additional intake of 60 students, so total intake is 180 students.
        CSE is identified as one of the most challenging and as an essential source
        of tools and techniques for advancement in every multidisciplinary areas.
        Department has been accredited by NAAC with CGPA 3.12 in 2016. It has been
        accredited by NBA in 2008 and recently in 2018.
          <br />
          <br />
          We have highly committed and competitive team of faculty fraternity,
           who experiments and adapts new innovative pedagogy methods for making
            all the technical concepts clear as well to keep our students abreas
            t with the latest technologies, skills and developments emerging in 
            this field. We have one Doctorate Faculty member and 8 Faculty
             members are perusing Ph.D from various universities. 
             This practice has proved our students very challenging and
              successful in various domains of competitions at university, state and national level.
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
