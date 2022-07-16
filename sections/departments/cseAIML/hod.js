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
        Computer science has become one of the fastest-growing engineering 
        streams due to the tremendous rise of computer systems and their 
        integration into all aspects of life. Whether it's a basic cell
        phone or a complex space shuttle, computers are present and 
        play an important role in almost every aspect of life.
        Artificial Intelligence (AI) is a relatively new and
        emerging field of computer science that is rapidly
        expanding its horizons in areas such as healthcare,
        security, entertainment, education, autonomous
        transportation, intelligent robots, space exploration
        speech processing, stock trading, and many others.
        Artificial intelligence (AI) and its applications
        have a tremendous impact on our lives.
          <br />
          <br />
          Our department provides great infrastructure and facilities
          to enable faculty and students to thrive in teaching and be
          dynamic enough to take on any research challenge.
          <br />
          <br />
          As the Department's Head, I consider myself fortunate to be
          managing a remarkable team of dedicated employees and inspiring professors,
          Our professors make significant contributions to the field of computer
          science, AI ML both theoretically and practically. Our department has
          significant relationships to industry, research institutions, and the general public.
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
